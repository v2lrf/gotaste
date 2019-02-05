const mockRoutes = {}
const handler = {
  get(target, method) {
    if (target[method] === undefined) {
      // eslint-disable-next-line no-param-reassign
      target[method] = () => `/${method}`
      return target[method]
    }
    return target[method]
  }
}

// default mock that can be picked up by jest auto mocking
const routeProxy = new Proxy(mockRoutes, handler)

// function that returns new mock on each call
// to prevent the mock from leaking between tests
export const mockRoutesFactory = () => {
  const obj = {}

  return new Proxy(obj, handler)
}

export default routeProxy
