import { addComponent, type Resolver } from "@nuxt/kit";
import type { GetSetType } from "@sample/utils/typeUtils";

export const variants = new Set(['V1', 'V2'] as const)

export type HeaderVariant = GetSetType<typeof variants>

// HeaderButtonMenu может быть общим для нескольких вариантов компонента Header
const HeaderButtonMenu  = {
  V1: 'V1',
  V2: 'V2',
  V3: 'V1',
} as const satisfies Record<string, HeaderVariant>

export function addHeader(resolver: Resolver, variant: HeaderVariant) {
  if (!variants.has(variant)) {
    throw new Error(`Unknown header variant: ${variant}`)
  }

  addComponent({
    name: 'Header',
    filePath: resolver.resolve(`./widgets/header/ui/${variant}Header.vue`),
  })
 
  addComponent({
    name: 'HeaderButtonMenu',
    filePath: resolver.resolve(`./widgets/header/ui/${HeaderButtonMenu[variant]}HeaderButtonMenu.vue`),
  })
}
