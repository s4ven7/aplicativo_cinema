import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export type RatingProps = {
  value: number;
};

export function Rating({ value }: RatingProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="star" size={12} color="#ffb800" />
      <Text style={styles.value}>{value.toFixed(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 184, 0, 0.12)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "rgba(255, 184, 0, 0.25)",
    gap: 4,
  },
  value: {
    color: "#ffb800",
    fontSize: 12,
    fontWeight: 800,
  },
});