type Props = [
  {
    food: {
      food_info: {
        display_name: string;
      };
    }[];
  }
];

export const apiResultsMapper = (items: Props) => {
  return items.map((item) => item.food[0].food_info.display_name);
};
