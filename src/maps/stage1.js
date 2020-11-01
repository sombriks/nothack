export default _ => {
  const ret = []
  let i = 19
  while (i--) {
    let j = 55
    let row = []
    ret.push(row)
    while (j--) {
      row.push('.')
    }
  }
  return ret
};