Deno.readTextFile("./password.txt").then((value) => {
  const validPassCount = value.split("\n").reduce((count, line) => {
    const matches = RE.exec(line);
    if (matches) {
      const i1 = +matches[1] - 1;
      const i2 = +matches[2] - 1;
      const ch = matches[3];
      const pass = matches[4];
      const valid = pass[i1] !== pass[i2] && (pass[i1] === ch || pass[i2] === ch);
      return count + +valid;
    }
    return count;
  }, 0);
  console.log(validPassCount);
});

const RE = new RegExp(/(\d+)-(\d+) (\w): (\w+)/);
