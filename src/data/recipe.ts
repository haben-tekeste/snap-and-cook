import { recipeApiResponse } from "../types/api";

export const recipes: recipeApiResponse = [
  {
    id: 73420,
    image: "https://img.spoonacular.com/recipes/73420-312x231.jpg",
    missedIngredientCount: 3,
    missedIngredients: [
      {
        amount: 1.0,
        id: 18371,
        name: "baking powder",
        original: "1 tsp baking powder",
        originalName: "baking powder",
        unit: "tsp",
      },
      {
        amount: 1.0,
        id: 2010,
        name: "cinnamon",
        original: "1 tsp cinnamon",
        originalName: "cinnamon",
        unit: "tsp",
      },
      {
        amount: 1.0,
        id: 1123,
        name: "egg",
        original: "1 egg",
        originalName: "egg",
        unit: "",
      },
    ],
    title: "Apple Or Peach Strudel",
    usedIngredientCount: 1,
    usedIngredients: [
      {
        amount: 6.0,
        id: 9003,
        name: "apples",
        original: "6 large baking apples",
        originalName: "baking apples",
        unit: "large",
      },
    ],
  },
  {
    id: 632660,
    image: "https://img.spoonacular.com/recipes/632660-312x231.jpg",
    missedIngredientCount: 4,
    missedIngredients: [
      {
        amount: 1.5,
        id: 1001,
        name: "butter",
        original: "1 1/2 sticks cold unsalted butter cold unsalted butter<",
        originalName: "cold unsalted butter cold unsalted butter<",
        unit: "sticks",
      },
      {
        amount: 4.0,
        id: 1079003,
        name: "red apples",
        original:
          "4 larges red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
        originalName:
          "s red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
        unit: "large",
      },
      {
        amount: 2.0,
        id: 2010,
        name: "cinnamon",
        original: "2 teaspoons cinnamon",
        originalName: "cinnamon",
        unit: "teaspoons",
      },
      {
        amount: 2.0,
        id: 19719,
        name: "apricot preserves",
        original: "2 tablespoons apricot preserves, melted and strained",
        originalName: "apricot preserves, melted and strained",
        unit: "tablespoons",
      },
    ],
    title: "Apricot Glazed Apple Tart",
    usedIngredientCount: 0,
    usedIngredients: [],
  },
];
