<template>
  <q-header elevated>
    <q-toolbar>
      <q-img src="src/assets/Sowell-logo.svg" style="width: 120px" />
      <q-toolbar-title>{{ title }}</q-toolbar-title>

      <div>Welcome, {{ username }}</div>
      <q-btn
        class="q-ml-md"
        flat
        round
        :icon="ionLogOutOutline"
        @click="$emits('log-out');"
      ></q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ionLogOutOutline } from '@quasar/extras/ionicons-v5';

defineProps<{
  username: string;
  title: string;
}>();

const $emits = defineEmits(['log-out']);

</script>

<style scoped></style>
