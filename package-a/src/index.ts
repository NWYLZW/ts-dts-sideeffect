import { foo } from './foo'
import { bar } from './bar'

export interface A {}

export function getFoo (): A {
  return foo
}
export function getBar (): A {
  return bar
}
