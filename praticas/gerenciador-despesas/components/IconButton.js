import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({
  icon,
  size = 24,
  color = "#000",
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
    >
      <Ionicons name={icon} size={size} color={color} style={{ padding: 10 }} />
    </Pressable>
  );
}
