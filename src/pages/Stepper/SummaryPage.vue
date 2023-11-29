<template>
  <div class="summary">
    <sw-table-info :infos="summaries['personal']" />
    <sw-table-info :infos="summaries['published_works']" />
    <sw-table-info :infos="summaries['professional_info']" />
    <sw-table-info :infos="summaries['degrees']" />
  </div>
</template>
<script setup lang="ts">
import SwTableInfo from 'src/components/SwTableInfo.vue';

import { useFormStore } from 'src/stores/form-store';
import { Data, Table } from 'src/utils/type';
import { computed } from 'vue';

const { form } = useFormStore();

const summaries = computed(() => {
  const result = Object.entries(form)
    .map(([title, data]) => ({
      title,
      data: Object.entries(data).map(([label, value]) => ({ label, value })),
    }))
    .filter((item) => item.title !== 'published_works_count');

  const personal: Data = result.find(
    (item) => item.title === 'personal_info'
  ) || { title: 'personal_info', data: [] };

  const professional_info = result.find(
    (item: Data) => item.title === 'professional'
  ) || { title: 'professional', data: [] };

  const degrees = { title: 'degrees', data: [] };
  professional_info.data.forEach((item) => {
    if (item.label === 'degrees') {
      degrees.data = item.value.map((val: Table) =>
        Object.entries(val).map(([label, value]) => ({ label, value }))
      )[0];
    }
  });

  const published_works = { title: 'published_works', data: [] };
  if (form.published_works_count > 0) {
    result
      .filter((item) => item.title === 'published_works')
      .forEach((item) => {
        published_works.data = Object.entries(item.data[0].value).map(
          ([label, value]) => ({ label, value })
        );
      });
  }

  return { personal, published_works, degrees, professional_info };
});
</script>

<style scoped>
.summary {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
