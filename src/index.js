import "./index.css";
import numeral from "numeral";
/* eslint-disable no-console */
const courseVal = numeral(1000).format("$0,0,00");
/*debugger;*/
console.log(`I would pay ${courseVal} for this course`);
