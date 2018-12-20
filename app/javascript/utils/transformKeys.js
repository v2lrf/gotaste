const transform = transformKeyFn =>
  function transformer(object) {
    if (Array.isArray(object)) {
      return object.map(transformer)
    }
    if (!object || typeof object !== 'object') {
      return object
    }

    return Object.keys(object).reduce((acc, key) => {
      acc[transformKeyFn(key)] = transformer(object[key])
      return acc
    }, {})
  }

const transformKeys = (object, transformKeyFn) => {
  if (typeof transformKeyFn === 'function') {
    return transform(transformKeyFn)(object)
  }
  return transform(object)
}

const camelCase = input =>
  input.replace(/[_-\s]([a-z])/gi, (_, $1) => $1.toUpperCase())

const snakeCase = input =>
  camelCase(input).replace(/([A-Z])/g, (_, $1) => `_${$1.toLowerCase()}`)

const camelCaseKeys = transform(camelCase)
const snakeCaseKeys = transform(snakeCase)

export { camelCaseKeys, snakeCaseKeys, camelCase, snakeCase }
export default transformKeys
