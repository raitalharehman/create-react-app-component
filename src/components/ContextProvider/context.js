import { createContext } from "react";

/* tslint:disable:no-empty */
export const Context = createContext({
  name: null,
  update: (value) => {}
});
/* tslint:enable:no-empty */

Context.displayName = "Context";
