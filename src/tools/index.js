export const add = (a, b) => {
  [a, b] = [b, a]
  console.log(a, b)
  return a + b
}