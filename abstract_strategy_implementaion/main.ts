import { ConcretStrategy1 } from "./concretStrategy1";
import { ConcretStrategy2 } from "./concretStrategy2";
import { Context } from "./context";

const concretStrategy1 = new ConcretStrategy1()
const concretStrategy2 = new ConcretStrategy2()

const context  = new Context()

context.setStrategy(concretStrategy1)

// it going to run the concrectStrategy1 function
context.doOperation()

context.setStrategy(concretStrategy2)

// it going to run the concrectStrategy2 function
context.doOperation()