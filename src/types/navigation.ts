import { StackNavigationProp } from "@react-navigation/stack";

export type TStackNavigation = {
  Home: any;
  Splash: any;
  Ingredients: any;
  RecipeList: any;
  RecipeDetails: any;
};

export type StackParamList = {
  IngredientsScreen: { data: any };
  RecipeListScreen: { data: string };
  RecipeDetailsScreen: { data: number };
};

export type TStackTypes = StackNavigationProp<TStackNavigation>;
