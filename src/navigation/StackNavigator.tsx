import { createStackNavigator } from "@react-navigation/stack";
import {
  SplashScreen,
  IngredientsScreen,
  HomeScreen,
  RecipeListScreen,
  RecipeDetailsScreen,
} from "../screens";
import { Button } from "react-native";
import Header from "@components/Header";
import Toggle from "@components/ToggleBtn";
import { useAppSelector } from "../store";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: () => <Header title="Snap & Cook" />,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: theme.colors.mainBackgroundColor,
          },
          headerLeft: () => null,
          headerRight: () => <Toggle />,
        }}
      />
      <Stack.Screen
        name="Ingredients"
        component={IngredientsScreen}
        options={{
          headerShown: true,
          headerTitle: () => <Header title="Snap & Cook " />,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: theme.colors.mainBackgroundColor,
          },
          headerRight: () => <Toggle />,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="RecipeList"
        component={RecipeListScreen}
        options={{
          headerShown: true,
          headerTitle: () => <Header title="Recipes" />,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: theme.colors.mainBackgroundColor,
          },
          headerLeft: () => null,
          headerRight: () => <Toggle />,
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetailsScreen}
        options={{
          headerShown: false,
          headerTitle: () => null,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: theme.colors.mainBackgroundColor,
          },
          headerLeft: () => null,
          headerRight: () => <Toggle />,
        }}
      />
    </Stack.Navigator>
  );
};
