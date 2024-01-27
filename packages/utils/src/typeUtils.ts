import type { OptionalKeysOf } from "type-fest"

export type OptionsFields<T extends object> = Pick<T, OptionalKeysOf<T>>

export type GetSetType<T> = T extends Set<infer U> ? U : never
