export function createId () {
  let date = new Date()
  let num = Math.random() * 10
  return date.getTime() + num
}
