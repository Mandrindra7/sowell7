import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { Degree, Work } from 'src/type/type';


export const useFormStore = defineStore('form', () => {
  const form = ref({
    personal_info: {
      firstname: '',
      lastname: '',
      birthdate: '',
      bio: '',
    },
    published_works_count: 0,
    published_works: [] as Work[],
    professional: {
      english: 0,
      french: 0,
      german: 0,
      degrees: [] as Degree[],
    },
  });

  const resetForm = () => {
    form.value.personal_info.firstname = '';
    form.value.personal_info.lastname = '';
    form.value.personal_info.birthdate = '';
    form.value.personal_info.bio = '';
    form.value.published_works_count = 0;
    form.value.professional.english = 0;
    form.value.professional.french = 0;
    form.value.professional.german = 0;
    form.value.professional.degrees = [];
  };

  watch(
    () => form.value.published_works_count,
    (value) => {
      if (value === 0) {
        form.value.published_works = [];
      } else {
        form.value.published_works = Array(value)
          .fill(undefined)
          .map(() => {
            return {
              id: uuidv4(),
              title: '',
              year: 2023,
              link: '',
            } as Work;
          });
      }
    }
  );

  watch(
    () => form.value.published_works_count,
    (value) => {
      if (value > 3) {
        form.value.published_works_count = 3;
      }
    }
  );

  return { form, resetForm };
});
