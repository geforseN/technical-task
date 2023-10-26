import type { Card, ApiCard } from "#imports";

type ExtraApiCard = ApiCard & {
  download_link: string;
  telegram: string;
};

export type ExtraCard = Omit<ExtraApiCard, "download_link"> & {
  downloadLink: `https://seenday.com/${number}`;
};

export const useApiCard = (card: Card) => {
  return useAPIFetch<ExtraCard>("e.scripts", {
    params: { page: "pages:unload", event: "get", unload_id: card.id },
    onResponse: context => {
      const [card] = JSON.parse(context.response._data).response.data;
      context.response._data = {
        ...toUppercaseCard(card),
        telegram: card.telegram,
        downloadLink: `https://seenday.com/${card.download_link.split(" ").at(-1)}`
      };
    }
  });
};
