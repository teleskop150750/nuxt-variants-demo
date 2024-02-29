<script setup lang="ts">
import { NButtonEmits, NButtonExpose, NButtonProps, NButtonSlots } from "./Button.model";

const props = defineProps<NButtonProps>();
const emit = defineEmits<NButtonEmits>();

const slots = defineSlots<NButtonSlots>()

defineExpose<NButtonExpose>()
</script>

<template>
  <button>foo</button>
</template>
