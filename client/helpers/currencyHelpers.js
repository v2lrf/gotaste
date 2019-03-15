export function simpleFormat(amount) {
  let stringAmount = amount.toString()

  if (stringAmount.indexOf('.') > -1) {
    stringAmount = stringAmount.replace('.', ',')
  } else {
    stringAmount = `${stringAmount},00`
  }
  return `${stringAmount} kr.`
}

export default this
