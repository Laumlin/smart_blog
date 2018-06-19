const filter = {
  dateMagic (date) {
    return new Date(date).toLocaleString()
  },
  textCut (string, number, defaultText) {
    if (string.length > number) {
      return string.substr(0, number) + '...'
    } else if (string.length <= number) {
      return string
    } else {
      return defaultText
    }
  }
}

export default filter
