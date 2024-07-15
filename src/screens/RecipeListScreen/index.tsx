import React from "react";
import { useAppSelector } from "../../store";
import { useStyles } from "./style";
import { Tab, Tabs, MaterialTabBar } from "react-native-collapsible-tab-view";
import RecipeItem from "@components/Recipe/RecipeItem";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParamList } from "../../types/navigation";
import { useGetRecipesByIngredientsQuery } from "@services/recipes";
import Loader from "@components/Loader";

type RecipeListScreenRouteProp = RouteProp<StackParamList, "RecipeListScreen">;

const tabBar = (props) => {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <MaterialTabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.primary }}
      style={{
        backgroundColor: theme.colors.mainBackgroundColor,
      }}
      labelStyle={{
        color: theme.colors.mainTextColor,
        fontFamily: "SpaceGrotesk_700Bold",
      }}
      tabStyle={{
        // color: theme.colors.mainTextColor,
        fontFamily: "SpaceGrotesk_700Bold",
        // backgroundColor: "red",
      }}
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.mainTextColor}
    />
  );
};

function RecipeListScreen() {
  const { theme } = useAppSelector((state) => state.theme);
  const styles = useStyles(theme);
  const { params } = useRoute<RecipeListScreenRouteProp>();
  const { data, isLoading, isError, error } = useGetRecipesByIngredientsQuery(
    params?.data
  );

  const missingRecipes = data?.filter(
    (recipe) => recipe.missedIngredientCount !== 0
  );
  const completeRecipes = data?.filter(
    (recipe) => recipe.missedIngredientCount === 0
  );

  if (isLoading) return <Loader />;

  return (
    <Tabs.Container
      headerContainerStyle={styles.header}
      renderTabBar={tabBar}
    >
      <Tabs.Tab name="A" label={"All"}>
        <Tabs.FlatList
          contentContainerStyle={styles.flatList}
          data={data}
          renderItem={({ item }) => (
            <RecipeItem
              id={item?.id}
              image={item?.image}
              title={item?.title}
              likes={item?.likes}
              missedIngredients={item?.missedIngredients}
            />
          )}
          keyExtractor={(item) => item?.id + ""}
        />
      </Tabs.Tab>
      <Tabs.Tab name="B" label="Complete">
        <Tabs.FlatList
          contentContainerStyle={styles.flatList}
          data={completeRecipes}
          renderItem={({ item }) => (
            <RecipeItem
              id={item?.id}
              image={item?.image}
              title={item?.title}
              likes={item?.likes}
              missedIngredients={item?.missedIngredients}
            />
          )}
          keyExtractor={(item) => item?.id + ""}
        />
      </Tabs.Tab>
      <Tabs.Tab name="C" label="Missing">
        <Tabs.FlatList
          contentContainerStyle={styles.flatList}
          data={missingRecipes}
          renderItem={({ item }) => (
            <RecipeItem
              id={item?.id}
              image={item?.image}
              title={item?.title}
              likes={item?.likes}
              missedIngredients={item?.missedIngredients}
            />
          )}
          keyExtractor={(item) => item?.id + ""}
        />
      </Tabs.Tab>
    </Tabs.Container>
  );
}

export default RecipeListScreen;
