import React from 'react'

const SearchBar = () => (
  <div className="bg-red-lightest py-12 px-4">
    <div className="container mx-auto px-4">
      <div className="w-1/2 font-serif">
        <h1 className="text-5xl font-black-darker font-black">
          Find den bedste vin
        </h1>
      </div>

      <div className="flex py-4 mr-6">
        <input
          className="w-2/3 py-6 px-4 mr-2 border border-grey-light rounded text-grey-darkest text-lg"
          type="text"
          placeholder="F.eks. Vesterbro, Nørrebro eller bare København..."
        />
        <button
          type="button"
          className="w-1/3 font-sans py-4 px-4 border-transparent bg-red-light text-white rounded uppercase font-bold text-sm"
        >
          Søg
        </button>
      </div>
    </div>
  </div>
)

export default SearchBar
