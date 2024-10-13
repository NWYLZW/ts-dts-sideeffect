import type { B, C } from 'package-a'

import { foo } from './foo'
import { bar } from './bar'

export interface A {}

export function getFoo (): A {
  return foo
}
export function getBar (): A {
  return bar
}

export const b: B = 1
export const c: C = 2
