function countLines(text?: (string | null)[]): number {
  let count = 0;
  if (text) {
    for (const line of text) {
      if (line && line.length !== 0) {
        count = count + 1;
      }
    }
  }
  return count;
}

let a = countLines(["one", "two", "", "three"]);
let b = countLines(["hello", null, "world"]);
let c = countLines();
