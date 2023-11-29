<template>
  <div class="q-pa-md">
    <q-list dense padding class="rounded-borders row justify-center">
      <q-item class="col-5 q-gutter-lg" v-for="user in userList" :key="user.id">
        <q-item-section>
          <sw-user-card :user="user" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';

import SwUserCard from 'src/components/SwUserCard.vue';

import { User } from 'src/utils/type';
import { getUserList } from 'src/service/user';

const $q = useQuasar();
const userList = ref<User[]>([]);

onMounted(() => initialize());

const initialize = async () => {
  $q.loading.show();
  try {
    const res = await getUserList();
    userList.value = res.data.map((item: User) => ({
      id: item.id,
      name: item.name,
      username: item.username,
      email: item.email,
    }));
    $q.loading.hide();
  } catch (err: any) {
    $q.notify({
      spinner: true,
      message: err.message,
      timeout: 2000,
      color: 'red-10',
    });
    $q.loading.hide();
  }
};
</script>

<style scoped></style>

