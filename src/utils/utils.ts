export const getTitle = (title: string) => {
  if (title === 'personal_info') return 'Personal Info';
  if (title === 'published_works') return 'Publications';
  if (title === 'professional') return 'Professional Info';
  if (title === 'degrees') return 'Degrees';

  return '';
};

export const getValidation = (key: string, value: any) => {
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

export const isValidDate = (date: Date) =>
  new Date(date).toString() !== 'Invalid Date';

export const isValidHttpUrl = (url: URL) => {
  try {
    const newUrl = new URL(url);
    return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
  } catch (err) {
    return false;
  }
};
