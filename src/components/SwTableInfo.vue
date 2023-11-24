<template>
  <q-markup-table  flat bordered>
    <sw-tab-header :title="title" />
    <tbody v-if="data.length">
      <template v-for="info in data" :key="info.label">
        <sw-tab-item
          v-if="info.label !== 'degrees' && info.label !== 'id'"
          :label="info.label"
          :value="info.value"
          :error="getValidation(info.label, info.value)"
        />
      </template>
    </tbody>
  </q-markup-table>
</template>

<script setup lang="ts">
import { getTitle, getValidation } from 'src/utils/utils';
import { Data } from 'src/utils/type';

import SwTabHeader from 'src/components/SwTabHeader.vue';
import SwTabItem from 'src/components/SwTabItem.vue';
import { computed } from 'vue';

const $props = defineProps<{
  infos: Data;
}>();

const title = computed(() => {
  return getTitle($props.infos?.title) || '';
});

const data = computed(() => {
  return $props.infos?.data || [];
});
</script>
