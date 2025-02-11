import FETCH_PESSOAS_MOCK from './mock/fetch_pessoas';

export const fetchPessoas = async () => {
  await new Promise(resolve => setTimeout(() => {
    resolve(true);
  }, 1000));

  return FETCH_PESSOAS_MOCK;
}