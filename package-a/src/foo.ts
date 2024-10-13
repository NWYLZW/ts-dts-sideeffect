import './foo.extend'

declare module 'package-a' {
  export interface A {
    a: string
  }
}

export declare const a: { a: 'a' }
