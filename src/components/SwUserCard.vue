<template>
  <q-card class="my-card">
    <q-card-section class="row">
      <span class="text-subtitle1 cyan">
        Name : <span class="text-body2">{{ user.name }}</span>
      </span>
      <span class="text-subtitle1 cyan">
        Username : <span class="text-body2">{{ user.username }}</span>
      </span>
      <span class="text-subtitle1 cyan">
        Email : <span class="text-body2">{{ user.email }}</span>
      </span>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { User } from 'src/utils/type';
defineProps<{
  user: User;
}>();
</script>

<style scoped>
.cyan {
  color: #31ccec;
}
span {
  color: #000;
}
</style>

