type Item = {
  food: {
    display_name: string;
  }[];
};

export type ingredientApiResponse = {
  analysis_id: string;
  items: Item[];
};

export type Ingredient = {
  id: number;
  name: string;
  original: string;
  originalName: string;
  unit: string;
  amount: number;
};

export type Recipe = {
  id: number;
  image: string;
  missedIngredientCount: number;
  missedIngredients: Ingredient[];
  usedIngredientCount: number;
  usedIngredients: Ingredient[];
  title: string;
  likes?: number;
};

type RecipeInfo = {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  summary: string;
  extendedIngredients: [
    { id: number; image: string; name: string; amount: number; unit: string }
  ];
  nutrition: {
    nutrients: [
      {
        name: string;
        amount: number;
        percentOfDailyNeeds: number;
        unit: string;
      }
    ];
  };
};

type Step = {
  number: string;
  step: string;
};

type RecipeInstruction = {
  name: string;
  steps: Step[];
};

export type recipeApiResponse = Recipe[];
export type recipeInfoResponse = RecipeInfo;
export type recipeInstructionResponse = RecipeInstruction[];
