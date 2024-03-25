import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen, IngredientsScreen, HomeScreen } from "../screens";
import Header from "../Components/Header";
const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: () => <Header title="Snap & Cook" />,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => null,
        }}
      /> */}
      <Stack.Screen
        name="Ingredients"
        component={IngredientsScreen}
        options={{
          headerShown: true,
          headerTitle: () => <Header title="Snap & Cook " />,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};
