import { type B } from 'package-a'

import { a } from './foo'

export interface A {}

export default function (): A {
  return a
}

export const b: B = 1
