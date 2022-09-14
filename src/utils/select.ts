import { select as sagaSelect } from 'redux-saga/effects';

/**
 * @description Wrapper for select for typing result
 * @example const list = yield* select(selector, args) //change tsconfig.ts ->target-> more than es5
 */

export function* select<S, T, Args extends unknown[] = unknown[]>(
  fn: (state: S, ...args: Args) => T,
  ...args: Args
) {
  // @ts-ignore
  const res: T = yield sagaSelect(fn, ...args);
  return res;
}
