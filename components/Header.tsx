import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.topRow}>
                <View style={styles.brandGroup}>
                    <View style={styles.logoBadge}>
                        <Ionicons name="film" size={26} color={"#FF3366"}></Ionicons>
                    </View>

                    <View>
                        <Text style={styles.brandTitle}>
                            Cine<Text style={styles.brandHighlight}>App</Text>
                        </Text>
                        <Text style={styles.brandSubtitle}>Catalogo && Streaming</Text>
                    </View>
                </View>
                <View style={styles.userBadge}>
                    <Ionicons name="sparkles" size={16} color="#FFB800"></Ionicons>
                    <Text style={styles.userBadgeText}>Em alta</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 16,
    },
    topRow:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignContent:"center"

    },
    logoBadge: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: "rgba(255,51,102,0.12)",
        borderWidth:1,
        borderColor:"rgba(255,51,102,0.25)",
        justifyContent:"center",
        alignItems:"center"
    },
    brandTitle:{
        fontSize:24,
        fontWeight:"900",
        color: "#FFFFFF",
        letterSpacing: 0.5
    },
    brandSubtitle:{
        fontSize:12,
        fontWeight:"500",
        color:"#94A3B8",
    },
    brandHighlight:{
        color:"#FF3366"
    },
    brandGroup:{
        flexDirection:"row",
        alignItems: "center",
        gap:12,
    },
    userBadge:{
        flexDirection:"row",
        gap:6,
        alignItems:"center",
        backgroundColor:"rgba(255,184,0,0.12)",
        paddingHorizontal:10,
        paddingVertical:6,
        borderRadius:20,
        borderWidth:1,
        borderColor: "rgba(255,184,0,0.25)"
    },
    userBadgeText:{
        fontSize:12,
        fontWeight:"700",
        color:"#FFB800"
    }

})
