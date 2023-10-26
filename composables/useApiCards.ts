export type Card = {
  date: string;
  event: string;
  id: string;
  size: string;
  status: string;
  status_text: string;
  task_date: string;
};

export const useApiCards = (data: Ref<Card>) => {
  return useAPIFetch("e.scripts", {
    params: { page: "pages:unload", event: "get" },
    onResponse: context => {
      data.value = JSON.parse(context.response._data).response.data;
    }
  });
};
