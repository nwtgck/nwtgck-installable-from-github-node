import * as yargs from "yargs";
import { add3 } from "./mylib";

export function main(){
  const parser = yargs
  .option("a",{
    describe: "The first number",
    default: 1
  })
  .option("b",{
    describe: "The second number",
    default: 2
  })
  .option("c",{
    describe: "The third number",
    default: 3
  });

  const args = parser.parse(process.argv);

  const a: number = args["a"];
  const b: number = args["b"];
  const c: number = args["c"];

  const sum: number = add3(a, b, c);
  console.log(sum);
}
