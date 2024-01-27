<script setup lang="ts"></script>

<template>
  <nav class="nav" data-v="v1">
    <div class="nav__title">
      <span>NAV_V1</span>
    </div>

    <div class="nav__list">
      <slot></slot>
    </div>
  </nav>
</template>

<style>
.nav__list {
  display: flex;
  gap: 15px;
}
</style>
