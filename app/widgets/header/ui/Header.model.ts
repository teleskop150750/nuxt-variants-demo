import type { DefaultProps } from '@sample/utils/vue/props'
import type { ShortEmits } from '@sample/utils/vue/emits'

// Props

export interface Props {
  title?: string;
  subtitle?: string;
}

export const defaultProps = {
  title: 'Default title',
  subtitle: 'Default subtitle',
} satisfies DefaultProps<Props>


// Emits

export type Emits = {
  click: [event: Event]
}

export type EmitsInner = ShortEmits<Emits>

// Slots

export type Slots = {
  logo?: () => VNode[];
  actions?: () => VNode[];
}
