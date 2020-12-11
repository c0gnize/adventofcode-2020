Deno.readTextFile("./password.txt").then((value) => {
  const validPassCount = value.split("\n").reduce((count, line) => {
    const matches = RE.exec(line);
    if (matches) {
      const c = Array.from(matches[4]).filter((c) => c === matches[3]).length;
      return count + +(c >= +matches[1] && c <= +matches[2]);
    }
    return count;
  }, 0);
  console.log(validPassCount);
});

const RE = new RegExp(/(\d+)-(\d+) (\w): (\w+)/);
