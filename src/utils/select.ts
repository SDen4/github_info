import { select as sagaSelect } from 'redux-saga/effects';

/**
 * @description Обертка для select для возврата типизированного значения
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
