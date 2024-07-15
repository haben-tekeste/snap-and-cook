import { useState, useRef, useEffect } from "react";
import {
  View,
  Image,
  Dimensions,
  Text as RNText,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
  FlatList,
} from "react-native";
import { Text, Icon, Surface } from "react-native-paper";
import { useAppSelector } from "../../store";
import { useStyles } from "./style";
import RenderHtml from "react-native-render-html";
import PercentageCircle from "react-native-expo-circle-progress";
import {
  useGetRecipeInfoQuery,
  useGetRecipeInstructionsQuery,
} from "@services/recipes";
import { useRoute, RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../types/navigation";
import Loader from "@components/Loader";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

type RecipeScreenRouteProp = RouteProp<StackParamList, "RecipeDetailsScreen">;

function RecipeDetailsScreen() {
  const { width } = Dimensions.get("window");
  const { params } = useRoute<RecipeScreenRouteProp>();
  const {
    data: recipe,
    isLoading,
    isError,
  } = useGetRecipeInfoQuery(params?.data);
  const {
    data: recipeInstructions,
    isLoading: instructionIsLoading,
    isError: instructionsIsError,
  } = useGetRecipeInstructionsQuery(params?.data);
  const { theme, darkMode } = useAppSelector((state) => state.theme);
  const styles = useStyles(theme);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  const nutrients = recipe?.nutrition?.nutrients.filter((nutrient) =>
    ["Fat", "Carbohydrates", "Protein"].includes(nutrient?.name)
  );
  if (isLoading) return <Loader />;
  console.log(recipe?.summary);
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={{ uri: recipe?.image }} />
      </View>
      <ScrollView style={styles.main}>
        <Text variant="headlineMedium" style={styles.spaceGroteskFontBold}>
          {recipe?.title}
        </Text>
        <View style={styles.quickInfo}>
          <View style={styles.quickInfoIcon}>
            <Icon
              size={25}
              source="account-multiple"
              color={theme.colors.primary}
            />
            <Text style={styles.regularFont}>{recipe?.servings}</Text>
          </View>
          <View style={styles.quickInfoIcon}>
            <Icon size={25} source="alarm" color={theme.colors.primary} />
            <Text style={styles.regularFont}>{recipe?.readyInMinutes} min</Text>
          </View>
          <View style={styles.quickInfoIcon}>
            <Icon size={25} source="fire" color={theme.colors.primary} />
            <Text style={styles.regularFont}>
              {Math.trunc(recipe?.nutrition?.nutrients[0].amount)} kcal
            </Text>
          </View>
        </View>
        <View>
          <Text variant="titleLarge" style={styles.spaceGroteskFontBold}>
            Summary
          </Text>
          <View>
            <RenderHtml
              contentWidth={width}
              tagsStyles={{ p: { color: theme.colors.mainTextColor } }}
              source={{
                html: isExpanded
                  ? `<p>${recipe?.summary!}</p>`
                  : `<p>${recipe?.summary.substring(0, 100) + "..."}</p>`,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity onPress={toggleExpand}>
                <Text style={{ color: "blue" }}>
                  {isExpanded ? "Read Less" : "Read More"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Text variant="titleLarge" style={styles.spaceGroteskFontBold}>
            Nutrients
          </Text>
          <View style={styles.nutrients}>
            <View style={styles.circle}>
              <Text variant="labelMedium" style={styles.regularFont}>
                Fat
              </Text>

              <PercentageCircle
                radius={25}
                percent={Math.trunc(nutrients![0].percentOfDailyNeeds)}
                color="#6ef456"
                bgcolor="#dbf2e0"
                borderWidth={8}
              />
              <Text variant="labelMedium" style={styles.regularFont}>
                {nutrients![0].amount}
                {nutrients![0]?.unit}
              </Text>
            </View>
            <View style={styles.circle}>
              <Text variant="labelMedium" style={styles.regularFont}>
                Carbs
              </Text>
              <PercentageCircle
                radius={25}
                percent={Math.trunc(nutrients![1].percentOfDailyNeeds)}
                color="#f48056"
                bgcolor="#ecbead"
                borderWidth={8}
              />
              <Text variant="labelMedium" style={styles.regularFont}>
                {nutrients![1].amount}
                {nutrients![1]?.unit}
              </Text>
            </View>
            <View style={styles.circle}>
              <Text variant="labelMedium" style={styles.regularFont}>
                Protien
              </Text>
              <PercentageCircle
                radius={25}
                percent={Math.trunc(nutrients![2].percentOfDailyNeeds)}
                color="#4f7aef"
                bgcolor="#8ca4e6"
                borderWidth={8}
              />
              <Text variant="labelMedium" style={styles.regularFont}>
                {nutrients![2].amount}
                {nutrients![2]?.unit}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            variant="titleLarge"
            style={[styles.spaceGroteskFontBold, { marginVertical: 8 }]}
          >
            Ingredients
          </Text>

          <FlatList
            horizontal
            style={{
              flexGrow: 0,
              alignContent: "center",
              height: 170,
              paddingVertical: 6,
            }}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
            data={recipe?.extendedIngredients}
            keyExtractor={(item) => item.id + ""}
            renderItem={({ item }) => (
              <IngredientItem
                name={item?.name}
                img={item?.image}
                quantity={item?.amount}
                unit={item?.unit}
              />
            )}
          />
        </View>
        <View>
          <Text variant="titleLarge" style={[styles.spaceGroteskFontBold]}>
            Instructions
          </Text>
          <View style={styles.steps}>
            {recipeInstructions?.map((instruction) => (
              <View style={styles.step}>
                <Text>{instruction?.name}</Text>
                {instruction?.steps?.map((step) => (
                  <>
                    <Text
                      variant="titleMedium"
                      style={[styles.spaceGroteskFontBold, styles.stepTitle]}
                    >
                      Step {step?.number}
                    </Text>
                    <Text style={[styles.regularFont]}>{step.step}</Text>
                  </>
                ))}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const IngredientItem = ({
  img,
  name,
  unit,
  quantity,
}: {
  img: string;
  name: string;
  unit: string;
  quantity: number;
}) => {
  const { theme, darkMode } = useAppSelector((state) => state.theme);
  const styles = useStyles(theme);
  const image = {
    uri: `https://img.spoonacular.com/ingredients_100x100/${img}`,
  };
  return (
    <Surface
      style={[
        styles.ingredientContainer,
        {
          backgroundColor: darkMode
            ? "#3d3c3c"
            : theme.colors.mainBackgroundColor,
        },
      ]}
    >
      <Image style={styles.ingredientImg} source={image} />
      <Text
        variant="labelSmall"
        style={{ textAlign: "center", color: theme.colors.mainTextColor }}
      >
        {quantity} {unit} {name}
      </Text>
    </Surface>
  );
};

export default RecipeDetailsScreen;
