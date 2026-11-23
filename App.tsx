import { StatusBar, StyleSheet, Text, View } from "react-native";
import  SearchBar  from "./components/SearchBar";
import CategoryButton from "./components/CategoryButton";
import  MovieCard  from "./components/MovieCard";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0b0d14" />

      <Header />
      <SearchBar />
      <View style={styles.containerCategory}>
        <CategoryButton title="Todos" selected={true} />
        <CategoryButton title="Ação" selected={false} />
        <CategoryButton title="Animação" selected={false} />
        <CategoryButton title="Comédia" selected={false} />
        <CategoryButton title="Drama" selected={false} />
      </View>

      <View style={styles.sectionMovie}>
        <View style={styles.sectionTitleRow}>
          <View style={styles.accentBar}></View>
          <Text style={styles.sectionTitle}>Filmes em destaque</Text>
        </View>

        <View style={styles.countBadge}>
          <Text style={styles.countTitle}>6 filmes</Text>
        </View>
      </View>

      <View style={styles.featuredMovie}>
        <MovieCard
          image={require("assets/movies/homem-aranha-um-novo-dia.jpg")}
          title="Homem-Aranha: Um novo dia"
          category="Ação"
          rating={4.9}
          favorite = {false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0d14",
    paddingTop: 40,
  },
  containerCategory: {
    flexDirection: "row",
    marginLeft: 20,
    gap: 10,
  },
  sectionMovie: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBlock: 20,
    marginHorizontal: 20,
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  accentBar: {
    height: 18,
    width: 4,
    backgroundColor: "#ff3366",
    borderRadius: 2,
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: 0.3,
  },
  countBadge: {
    backgroundColor: "#161a28",
    borderWidth: 1,
    borderColor: "#262d42",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  countTitle: {
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: 700,
  },
  featuredMovie: {
    marginHorizontal: 20,
  },
});