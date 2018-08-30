function test(s: string | string[] | null | undefined) {
  if (s) {
    s;
  }
  else {
    s; // what is the type of s?
  }

  if (typeof s === 'object') {
    s; // what is the type of s?
  }
  else {
    s;
  }

  if (s == undefined) {
    s; // what is the type of s?
  }
  else {
    s;
  }

  if (typeof s === "undefined") {
    s;
  }
  else {
    s;
  }
}
