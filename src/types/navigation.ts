import { StackNavigationProp } from "@react-navigation/stack";

export type TStackNavigation = {
  Home: any;
  Splash: any;
  Ingredients: any;
};

export type StackParamList = {
  IngredientsScreen: { data: any };
};

export type TStackTypes = StackNavigationProp<TStackNavigation>;
