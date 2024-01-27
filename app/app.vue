<script setup lang="ts"></script>

<template>
  <div class="page">
    <div class="page__header">
      <div class="demo-box">
        <h3 class="demo-box__title">Import: V1Header</h3>

        <V1Header>
          <template #logo>
            <HeaderLogo />
          </template>

          <template #actions>
            <V1HeaderButtonMenu />
          </template>
        </V1Header>
      </div>

      <div class="demo-box">
        <h3 class="demo-box__title">Import: V2Header</h3>

        <V2Header>
          <template #logo>
            <HeaderLogo />
          </template>

          <template #actions>
            <V2HeaderButtonMenu />
          </template>
        </V2Header>
      </div>

      <div class="demo-box">
        <h3 class="demo-box__title">Import: Header</h3>

        <Header>
          <template #logo>
            <HeaderLogo />
          </template>

          <template #action>
            <HeaderButtonMenu />
          </template>
        </Header>
      </div>
    </div>

    <div class="page__body">
      <h1>APP</h1>
    </div>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: system-ui;
}

.page__header {
  display: grid;
  gap: 8px;
  padding: 8px;
}

.page__body {
  padding: 8px;
}
</style>
