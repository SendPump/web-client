import { FormEvent } from "react";
import * as R from "ramda";


export const onInputString = R.curry(<T>(handleInput: (newInput: string) => T, e: FormEvent<HTMLInputElement>): T => {
  return handleInput((e.target as HTMLInputElement).value);
});
