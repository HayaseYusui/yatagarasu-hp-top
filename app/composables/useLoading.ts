import { ref } from "vue";

const loading = ref<boolean>(false);

export const useLoading = () => {
  const setLoading = (items: boolean) => {
    loading.value = items;
  };
  return {
    loading,
    setLoading,
  };
};
