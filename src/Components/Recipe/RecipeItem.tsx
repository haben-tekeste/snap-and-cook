import { View, Image, Pressable } from "react-native";
import { Text, Chip, Icon } from "react-native-paper";
import { useStyles } from "./style";
import { useAppNavigation, useAppSelector } from "../../store";
import { Ingredient, Recipe } from "../../types/api";

type Props = {
  id: number;
  image: string;
  title: string;
  likes?: number;
  missedIngredients: Ingredient[];
};

function RecipeItem({ id, image, title, likes, missedIngredients }: Props) {
  const { theme } = useAppSelector((state) => state.theme);
  const styles = useStyles(theme);
  const { navigate } = useAppNavigation();
  const defaultImage = require("@assets/noimage.png");
  const img = { uri: image };
  const handleNavigation = () => {
    if (id) {
      navigate("RecipeDetails", {
        data: id,
      });
    }
  };
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : undefined,
        },
        styles.recipeItemContainer,
      ]}
      onPress={handleNavigation}
    >
      <Image
        style={styles.recipeItemImage}
        source={image ? img : defaultImage}
      />
      <View style={styles.recipeItemInfo}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.recipeItemName} variant="titleMedium">
            {title}
          </Text>
          <View style={{ flexDirection: "row", gap: 1, alignItems: "center" }}>
            <Icon source="heart-outline" size={20} />
            <Text>{likes}</Text>
          </View>
        </View>
        {missedIngredients.length && (
          <View style={{ gap: 6 }}>
            <Text
              variant="titleSmall"
              style={{
                fontFamily: "SpaceGrotesk_400Regular",
                color: theme.colors.mainTextColor,
              }}
            >
              Missing Ingredients
            </Text>
            <View style={styles.recipeItemChipContainer}>
              {missedIngredients?.map((ingredient) => (
                <Chip
                  textStyle={styles.chipText}
                  style={styles.chip}
                  mode="flat"
                >
                  {ingredient.name}
                </Chip>
              ))}
            </View>
          </View>
        )}
      </View>
    </Pressable>
  );
}

export default RecipeItem;
