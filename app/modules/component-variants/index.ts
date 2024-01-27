import { fileURLToPath, URL } from 'node:url'
import { createResolver, defineNuxtModule, type Resolver } from '@nuxt/kit'
import { addHeader, type HeaderVariant } from './header'

export interface ComponentVariantsOptions {
  components: {
    header: HeaderVariant
  }
}

export default defineNuxtModule<ComponentVariantsOptions>({
  meta: {
    name: 'component-variants',
    configKey: 'componentVariants',
  },
  setup(options) {
    const resolver = createResolver(fileURLToPath(new URL('../../', import.meta.url)))

    addHeader(resolver, options.components.header)
  },
})


