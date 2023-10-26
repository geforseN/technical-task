export type ApiCard = {
  date: string;
  event: string;
  id: `${number}`;
  size: string;
  status: string;
  status_text: string;
  task_date: string;
};

export type Card = Omit<ApiCard, "status_text" | "task_date"> & {
  statusText: ApiCard["status_text"];
  taskDate: ApiCard["task_date"];
};

export const useApiCards = () => {
  return useAPIFetch<Card[]>("e.scripts", {
    params: { page: "pages:unload", event: "get" },
    onResponse: context => {
      const cards: ApiCard[] = JSON.parse(context.response._data).response.data;
      context.response._data = cards.map(toUppercaseCard);
    }
  });
};

export function toUppercaseCard(apiCard: ApiCard): Card {
  return {
    date: apiCard.date,
    event: apiCard.event,
    id: apiCard.id,
    size: apiCard.size,
    status: apiCard.status,
    statusText: apiCard.status_text,
    taskDate: apiCard.task_date
  };
}
