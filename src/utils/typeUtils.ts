export type Nullable<T> = T | null
export type Nillable<T> = T | undefined | null
export type Optional<T> = T | undefined

export type Arrayable<T> = T | T[]
export type Awaitable<T> = Promise<T> | T

export type RequiredField<T, K extends keyof T> = T & Required<Pick<T, K>>

export type GetSetType<T> = T extends Set<infer U> ? U : never

export type OptionsFields<T extends object> = Pick<T, OptionalKeysOf<T>>

export type OptionalKeysOf<BaseType extends object> = Exclude<{
  [Key in keyof BaseType]: BaseType extends Record<Key, BaseType[Key]>
  ? never
  : Key
}[keyof BaseType], undefined>;
