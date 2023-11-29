<template>
  <q-layout view="lHh Lpr lFf">
    <sw-nav-bar :username="username" :title="title" @log-out="logout" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { SessionStorage } from 'quasar';
import SwNavBar from 'src/components/SwNavBar.vue';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const $route = useRoute();
const $router = useRouter(); 
const title = computed(() => {
  return $route.meta.title as string || 'Untitled page';
});
const username = computed(() => {
  return SessionStorage.getItem('loggedUser')?.toString() || '';
});

const logout = () => {
  SessionStorage.remove('loggedUser');
  $router.push({ name: 'login' });
};
</script>
