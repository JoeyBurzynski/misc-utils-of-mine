/** UnionToIntersection<1|2|3>  will be 1 & 2 & 3 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

/** Useful TODO reminder when you are porting typings of a JavaScript library */
export type TODO = any

/** Removes undefined from type */
export type NotUndefined<T> = Exclude<T, undefined>

/** Useful for filtering out undefined values without casting. */
export function notUndefined<T>(n: T): n is NotUndefined<T> {
  return n !== undefined
}

type falsy = undefined | null | false | '' | 0

/**
 * Without arguments it returns the union of all falsy values. With arguments it returns given type excluding falsy arguments.  Example `Falsy<number|boolean|null> ` will be `false|null`
 */
export type Falsy<T = never> = T extends never ? (never extends T ? falsy : Extract<T, falsy>) : Extract<T, falsy>
// let c: Falsy<number|boolean|null>

/** Removes undefined from type.  Example `Falsy<number|boolean>` will be `number|true` */
export type NotFalsy<T> = Exclude<T, falsy>
// let c: NotFalsy<number|boolean>

/** Useful for filtering out falsy values without casting. */
export function notFalsy<T>(n: T): n is NotFalsy<T> {
  return !!n
}
