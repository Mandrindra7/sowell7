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
              :error="getValidation(workKey, summary.data[item][workKey])"
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
                :error="getValidation(d, summary.data[item][degree][d])"
              />
            </template>
          </template>
        </template>
        <template v-else>
          <sw-tab-item
            v-if="item !== 'degrees'"
            :label="item"
            :value="summary.data[item]"
            :error="getValidation(item, summary.data[item])"
          />
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

const getValidation = (key: string, value: any) => {
  let error: 'negative' | 'positive' | null = null;
  switch (key) {
    case 'firstname':
      error = value.length ? 'positive' : 'negative';
      break;
    case 'lastname':
    case 'bio':
    case 'field':
    case 'details':
      error = null;
      break;
    case 'birthdate':
      error = value && isValidDate(value) ? 'positive' : 'negative';
      break;
    case 'english':
    case 'french':
    case 'german':
      error = value && value > 0 ? 'positive' : 'negative';
      break;
    case 'title':
      error = value.length ? 'positive' : 'negative';
      break;
    case 'link':
      error = value.length && isValidHttpUrl(value) ? 'positive' : 'negative';
      break;
    case 'year':
      error = value && value >= 1923 && value < 2023 ? 'positive' : 'negative';
      break;
  }
  return error;
};

const isValidDate = (date: Date) =>
  new Date(date).toString() !== 'Invalid Date';

const isValidHttpUrl = (url: URL) => {
  try {
    const newUrl = new URL(url);
    return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
  } catch (err) {
    return false;
  }
};
</script>

<style>
td {
  max-width: 400px;
  overflow: scroll;
}
</style>
