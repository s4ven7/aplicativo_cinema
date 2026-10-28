import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryButton from './components/CategoryButton';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header/>
      <SearchBar/>
      
      <View style={styles.containerCategory}>
        <CategoryButton title='Ação' selected={true}/>
        <CategoryButton title='Ação' selected={false}/>
      </View>
      <View style={styles.sectionMovie}>
        <View style={styles.sectionTitleRow}>
          <View style={styles.accentBar}></View>
          <Text style={styles.sectionTitle}>Filmes em destaques</Text>
        </View>
        <View style={styles.countBadge}>
          <Text style={styles.countTitle}>6 filmes</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D14',
    paddingTop:40,
  },
  containerCategory:{
    flexDirection:'row',
    gap:10,
    marginLeft:20,
  },
  sectionMovie:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    marginBlock:20,
  },
  sectionTitleRow:{
    flexDirection:'row',
    alignItems:'center',
    gap:8,
  },
  accentBar:{
    height:18,
    width:4,
    backgroundColor:"#FF3366",
    borderRadius:2,
  },
  sectionTitle:{
    fontSize:20,
    fontWeight:'800',
    color:"#FFFFFF",
    letterSpacing:0.3,
  },
  countBadge:{
    backgroundColor:"#161a28",
    borderWidth:1,
    borderColor:"#262d42",
    borderRadius:12,
    paddingHorizontal:10,
    paddingVertical:4,
  },
  countTitle:{
    fontSize:12,
    fontWeight:'700',
    color:"#94a3b8"
  },
});
