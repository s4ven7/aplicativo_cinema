import { Ionicons } from "@expo/vector-icons";
import {Image,  ImageSourcePropType,  Pressable,  StyleSheet, Text, View,
} from "react-native";
import { Rating } from "./Rating";


export type MovieCardProps = {
  image: ImageSourcePropType;
  title: string;
  category: string;
  rating: number;
  favorite: boolean;
  onFavorite: () => void;
  onDetails: () => void;
};

export default function MovieCard({
  image,
  title,
  category,
  rating,
  favorite,
  onFavorite,
  onDetails,
}: MovieCardProps) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover"></Image>

      <View style={{ padding: 16 }}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>

        <View style={styles.sectionCategoryRating}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
          <Rating value={rating}></Rating>
        </View>

        <View style={styles.actionsRow}>
          <Pressable style={styles.detailsButton} onPress={onDetails}>
            <Text style={styles.detailsButtonText}>Ver detalhes</Text>
          </Pressable>

          <Pressable
            style={[
              styles.favoriteButton,
              favorite && styles.favoriteButtonActive,
            ]}
            onPress={onFavorite}
            hitSlop={8}
          >
            <Ionicons
              name={favorite ? "heart" : "heart-outline"}
              size={20}
              color={favorite ? "#ff3366" : "#94a3b8"}
            ></Ionicons>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#242b40",
    borderRadius: 18,
    backgroundColor: "#141724",
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 195,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#fff",
    height: 24,
  },
  sectionCategoryRating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBlock: 15,
  },
  categoryBadge: {
    backgroundColor: "#1e2437",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#2c344e",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#94a3b8",
  },
  detailsButton: {
    flex: 1,
    height: 42,
    backgroundColor: "#1e2437",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2d3650",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  favoriteButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e2437",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2d3650",
  },
  favoriteButtonActive: {
    backgroundColor: "rgba(255,51, 102, 0.16)",
    borderColor: "#ff3366",
  },
});