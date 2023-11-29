<template>
  <tr>
    <td class="text-left"  width="10%">{{ label }}</td>
    <td class="text-right" >{{ value }}</td>
    <td class="text-right" width="1%">
      <q-icon v-if="error"
        :name="error === 'negative' ? 'error' : 'check'"
        :color="error"
        size="2em"
      ></q-icon>
    </td>
  </tr>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: string | number;
  error: 'negative' | 'positive' | null;
}>();
</script>

<style scoped>
td {
  max-width: 400px;
  overflow: scroll;
}
</style>
