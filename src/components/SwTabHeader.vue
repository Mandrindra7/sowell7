<template>

    <tr>
      <td colspan="3">
        <div class="row no-wrap items-center">
          <div class="text-h6 q-ml-md">{{title}}</div>
        </div>
      </td>
    </tr>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped></style>
