const filter = {
  dateMagic (date) {
    return new Date(date).toLocaleString()
  },
  textCut (string, number, defaultText) {
    return string.substr(0, number) + '...' || defaultText
  }
}

export default filter
