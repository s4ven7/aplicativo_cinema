import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

type SearchBarProps = {
    value: string;
    onChangeText: (text: string) => void;
    onClear?: () => void
}
export default function SearchBar({
    value,
    onChangeText,
    onClear,
}: SearchBarProps) {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={20} color="#94A3B8"></Ionicons>
            <TextInput style={styles.input}
                placeholder="Buscar filme por titulo"
                placeholderTextColor="#94A3B8"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onChangeText}
                value={value}
            />
            
            {value?.length > 0 && onClear && (
                <Pressable onPress={onClear}>
                    <Ionicons name="close-circle" size={18} color="#94A3B8"></Ionicons>
                </Pressable>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 52,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#161A28",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#262d42",
        paddingHorizontal: 16,
        marginHorizontal: 20
    },
    input: {
        flex: 1,
        fontSize: 15,
        fontWeight: "500",
        color: "#FFFFFF",
        marginLeft: 10,
    }
})