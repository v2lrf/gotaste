export function simpleFormat(amount) {
  return new Intl.NumberFormat('da-DK', {
    style: 'currency',
    currency: 'DKK'
  }).format(amount)
}

export default this
