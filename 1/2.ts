import { expense } from "./expense.ts";

const l = expense.length;
for (let i1 = 0; i1 < l; i1++) {
  for (let i2 = i1; i2 < l; i2++) {
    for (let i3 = i2; i3 < l; i3++) {
      if (expense[i1] + expense[i2] + expense[i3] === 2020) {
        console.log(expense[i1] * expense[i2] * expense[i3]);
      }
    }
  }
}
