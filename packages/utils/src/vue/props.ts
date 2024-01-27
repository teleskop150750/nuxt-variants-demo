import type { OptionsFields } from '../typeUtils.ts'
export type DefaultProps<Props extends object> = InferDefaults<OptionsFields<Props>>

type InferDefaults<T> = {
  [K in keyof T]?: InferDefault<T, T[K]>
}

type InferDefault<P, T> =
  | ((props: P) => T & {})
  | (T extends NativeType ? T : never)

type NativeType = null | number | string | boolean | symbol | Function

export type PropsWithDefaults<
  T,
  Defaults extends InferDefaults<T>,
  BKeys extends keyof T = BooleanKey<T>,
> = Readonly<Omit<T, keyof Defaults>> & {
  readonly [K in keyof Defaults]-?: K extends keyof T
  ? Defaults[K] extends undefined
  ? T[K]
  : NotUndefined<T[K]>
  : never
} & {
    readonly [K in BKeys]-?: K extends keyof Defaults
    ? Defaults[K] extends undefined
    ? boolean | undefined
    : boolean
    : boolean
  }

type BooleanKey<T, K extends keyof T = keyof T> = K extends any
  ? [T[K]] extends [boolean | undefined]
  ? K
  : never
  : never

type NotUndefined<T> = T extends undefined ? never : T
