export const getKeyByValue = (obj, value) => {
  return Object.keys(obj)
    .filter(key => obj[key] === value);
}
