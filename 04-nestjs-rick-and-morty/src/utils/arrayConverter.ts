export default function stringToNumArray(str: string): number[] {
  if (!str) {
    return []
  }

  return str.split(",").map((num) => parseInt(num))
}
