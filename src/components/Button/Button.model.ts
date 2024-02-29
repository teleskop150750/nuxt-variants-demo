import { ButtonHTMLAttributes, ShallowRef } from 'vue'
import { Nillable } from '../../utils/typeUtils.ts'

type Size = 'xs' | 'sm' | 'md' | 'lg'

export type Appearance =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'shadow'
  | 'primary-elevation'

export interface NButtonProps {
  readonly isDisabled?: boolean
  readonly isLoading?: boolean
  readonly type?: ButtonHTMLAttributes['type']
  readonly appearance?: Appearance
  readonly size?: Size
  readonly shouldFitContainer?: boolean
  readonly isAdaptive?: boolean
}

// Emits

export type NButtonEmits = {
  click: [event: MouseEvent]
}

// Slots

export interface NButtonSlots {
  readonly default?: (props: {}) => unknown
  readonly iconBefore?: (props: {}) => unknown
  readonly iconAfter?: (props: {}) => unknown
}

// Expose

export interface NButtonExpose {
  readonly $el: ShallowRef<Nillable<HTMLElement>>
}

// Context

export const useContext = () => {}
export const createContext = () => {}
