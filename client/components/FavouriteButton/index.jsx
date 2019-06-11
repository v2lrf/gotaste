import React from 'react'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { faHeart } from '@fortawesome/pro-light-svg-icons'
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IS_BUSINESS_FAVOURITED = gql`
  query isBusinessFavoruited($slug: String!) {
    business(slug: $slug) {
      viewerHasFavourited
    }
  }
`

const ADD_FAVOURITE = gql`
  mutation favouriteBusiness($businessSlug: String!) {
    favouriteBusiness(input: { businessSlug: $businessSlug }) {
      success
    }
  }
`

const REMOVE_FAVOURITE = gql`
  mutation favouriteBusiness($businessSlug: String!) {
    unfavouriteBusiness(input: { businessSlug: $businessSlug }) {
      success
    }
  }
`

function FavouriteButton({ businessSlug }) {
  const { data, loading, refetch } = useQuery(IS_BUSINESS_FAVOURITED, {
    variables: {
      slug: businessSlug
    }
  })

  const favouriteBusiness = useMutation(ADD_FAVOURITE, {
    update: () => {
      refetch()
    },
    variables: {
      businessSlug
    }
  })

  const unfavouriteBusiness = useMutation(REMOVE_FAVOURITE, {
    update: () => {
      refetch()
    },
    variables: {
      businessSlug
    }
  })

  if (loading)
    return <FontAwesomeIcon icon={faHeart} className="text-black text-2xl" />

  const {
    business: { viewerHasFavourited: isFavoruite }
  } = data

  return (
    <div>
      {isFavoruite ? (
        <FontAwesomeIcon
          icon={faSolidHeart}
          className="text-red text-2xl hover-scale-xl"
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            unfavouriteBusiness()
          }}
          title="Fjern fra favoritter"
        />
      ) : (
        <FontAwesomeIcon
          icon={faHeart}
          className="text-white text-2xl hover-scale-xl"
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            favouriteBusiness()
          }}
          title="Tilføj til favoritter"
        />
      )}
    </div>
  )
}

FavouriteButton.propTypes = {
  businessSlug: PropTypes.string.isRequired
}

export default FavouriteButton
