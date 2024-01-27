<script setup lang="ts">
import type { Props, Slots } from "./Header.model.ts";
import { defaultProps } from "./Header.model.ts";

withDefaults(defineProps<Props>(), defaultProps);

defineSlots<Slots>()
</script>

<template>
  <div class="header" data-v="v1">
    <div class="header__top">
      <div class="header__logo">
        <slot name="logo"></slot>
      </div>

      <div class="header__title">
        <HeaderTitle>HEADER_V1</HeaderTitle>
      </div>
    </div>

    <div class="header__bottom">
      <V1HeaderNav class="header__nav">
        <HeaderLink />
        <HeaderLink />
        <HeaderLink />
      </V1HeaderNav>

      <div class="header__actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<style>
[data-v="v1"] {
  display: grid;
  gap: 16px;
  padding: 8px;
  border: 1px solid red;

  .header__top {
    display: flex;
    justify-content: space-between;
  }

  .header__bottom {
    display: flex;
    justify-content: space-between;
  }
}
</style>
