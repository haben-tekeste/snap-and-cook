type Item = {
  food: {
    display_name: string
  }[];
};

export type ingredientApiResponse = {
  analysis_id: string;
  items: Item[]
};
