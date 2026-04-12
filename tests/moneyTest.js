import { formatCurrency } from "../scripts/utils/money.js";

if (formatCurrency(2000.4) === "$20.00") {
  console.log("Test passed!");
} else {
  console.log("Test failed!");
}