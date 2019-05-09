import { useState } from 'react'

function useForm(initialValues = {}, callback) {
  const [values, setValues] = useState(initialValues)

  const handleSubmit = event => {
    if (event) event.preventDefault()
    callback()
  }

  const handleChange = event => {
    event.persist()
    setValues(val => ({
      ...val,
      [event.target.name]: event.target.value
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    setValues
  }
}

export default useForm
