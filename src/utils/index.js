export function getAge(dateString) {
  var today = new Date()
  var birthDate = new Date(dateString)
  var age = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

export function formatPercentage(percentage) {
  const decimalPlaces = `${percentage}`.split(".")[1]

  if (
    (decimalPlaces && decimalPlaces.match(/^(\d)\1+$/)) ||
    (decimalPlaces && decimalPlaces.endsWith("0"))
  ) {
    // All decimal places are the same or The last decimal place is 0
    return percentage.toFixed(1)
  } else {
    return percentage
  }
}
