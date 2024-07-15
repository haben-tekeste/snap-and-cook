import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import RootNavigation from "./src/navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./src/store";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

import { defaultTheme } from "./constants/theme";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={defaultTheme}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
