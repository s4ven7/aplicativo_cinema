import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <View>
                <View style={styles.brandGroup}>
                    <View style={styles.logoBadge}>
                        <Ionicons name="film" size={26} color={"#FF3366"}></Ionicons>
                    </View>

                    <View>
                        <Text style={styles.brandTitle}>
                            Cine<Text style={styles.brandHighlight}>App</Text>
                        </Text>
                    </View>
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
    brandHighlight:{
        color:"#FF3366"
    },
    brandGroup:{
        flexDirection:"row",
        alignItems: "center",
        gap:12,
    },
})
