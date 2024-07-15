import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useAppSelector } from "../../store";
import { useStyles } from "./style";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ReadMoreText = ({ children }) => {
  const { theme } = useAppSelector((state) => state.theme);
  const styles = useStyles(theme);
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(null);
  const [containerHeight, setContainerHeight] = useState(null);

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const onTextLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setContentHeight(height);
  };

  const onContainerLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setContainerHeight(height);
  };

  return (
    <View>
      <View
        style={[styles.container, { height: expanded ? contentHeight : 120 * 5 }]}
        onLayout={onContainerLayout}
      >
        <Text
          style={styles.text}
          numberOfLines={expanded ? undefined : 5}
          onLayout={onTextLayout}
        >
          {children}
        </Text>
        {!expanded && contentHeight > containerHeight && (
          <LinearGradient
            colors={["transparent", "#fff"]}
            style={styles.gradient}
          />
        )}
      </View>
      {!expanded && contentHeight > containerHeight && (
        <TouchableOpacity onPress={handlePress} style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
      )}
      {expanded && (
        <TouchableOpacity onPress={handlePress} style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>Read Less</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ReadMoreText;
