<script setup lang="ts">
import type { Props, Slots } from "./Header.model.ts";
import { defaultProps } from "./Header.model.ts";

withDefaults(defineProps<Props>(), defaultProps);

defineSlots<Slots>();
</script>

<template>
  <div class="header" data-v="v2">
    <div class="header__top">
      <div class="header__logo">
        <slot name="logo"></slot>
      </div>

      <div class="header__title">
        <HeaderTitle>HEADER_V2</HeaderTitle>
      </div>
    </div>

    <div class="header__bottom">
      <V2HeaderNav class="header__nav">
        <HeaderLink />
        <HeaderLink />
        <HeaderLink />
      </V2HeaderNav>

      <div class="header__actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<style>
[data-v="v2"] {
  display: grid;
  gap: 16px;
  padding: 8px;
  border: 1px solid blueviolet;

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
