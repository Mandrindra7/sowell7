<template>
  <q-card class="my-card">
    <q-card-section class="">
      <p class="text-subtitle2 cyan">
        Name : <span class="text-body1">{{ user.name }}</span>
      </p>
      <p class="text-subtitle2 cyan">
        Username : <span class="text-body1 ">{{ user.username }}</span>
      </p>
      <p class="text-subtitle2 cyan">
        Email : <span class="text-body1">{{ user.email }}</span>
      </p>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { User } from './models';
defineProps<{
  user: User;
}>();
</script>

<style scoped>
.cyan {
  color: #31ccec;
}
span {
    color: #000
}
</style>
