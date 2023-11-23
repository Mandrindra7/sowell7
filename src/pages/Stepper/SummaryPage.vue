<template>
  <q-markup-table flat bordered>
    <div v-for="summary in summaries" :key="summary.title">
      <sw-tab-header :title="getTitle(summary.title)" />

      <tbody v-for="item in Object.keys(summary.data)" :key="item">
        <template
          v-if="
            form.published_works_count > 0 &&
            summary.title === 'published_works'
          "
        >
          <template
            v-for="workKey in Object.keys(summary.data[item])"
            :key="workKey.id"
          >
            <sw-tab-item
              v-if="workKey !== 'id'"
              :label="workKey"
              :value="summary.data[item][workKey]"
              error
            />

          </template>
        </template>
        <template
          v-else-if="item === 'degrees' && form.professional.degrees.length"
        >
          <sw-tab-header :title="item" />

          <template
            v-for="degree in Object.keys(summary.data[item])"
            :key="degree"
          >
            <template
              v-for="d in Object.keys(summary.data[item][degree])"
              :key="d"
            >
              <sw-tab-item
                v-if="d !== 'id'"
                :label="d"
                :value="summary.data[item][degree][d]"
                error
              />
            </template>
          </template>
        </template>
        <template v-else >
          <sw-tab-item v-if="item !=='degrees'" :label="item" :value="summary.data[item]" error />
        </template>
       
      </tbody>
    </div>
  </q-markup-table>
</template>
<script setup lang="ts">
import SwTabHeader from 'src/components/SwTabHeader.vue';
import SwTabItem from 'src/components/SwTabItem.vue';

import { useFormStore } from 'src/stores/form-store';
import { computed } from 'vue';

const { form } = useFormStore();

const summaries = computed(() => {
  const result = Object.keys(form)
    .map((item) => {
      return {
        title: item,
        data: form[item],
      };
    })
    .filter((item) => item.title !== 'published_works_count');
  return result;
});

const getTitle = (title: string) => {
  if (title === 'personal_info') return 'Personal Info';
  if (title === 'published_works') return 'Publications';
  if (title === 'professional') return 'Professional Info';

  return '';
};
</script>

<style>
td {
  max-width: 400px;
  overflow: scroll;
}
</style>
