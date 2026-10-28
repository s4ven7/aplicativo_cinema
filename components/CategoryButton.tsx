import { Entypo, Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type CategoryButtonProps={
    title:string;
    selected:boolean;
    onPress: () => void
}
export default function CategoryButton({
    title,
    selected,
    onPress,
}:CategoryButtonProps){
    return(
        <Pressable 
            onPress={onPress} 
            style={[
                styles.button,
                selected ? styles.buttonSelected : styles.buttonUnselected
            ]}>
            {selected && (<Entypo name="dot-single" size={16} color="#FFFFFF"></Entypo>
            )}    
            <Text style={[styles.title, selected? styles.titleSelected : styles.titleUnselected]}>{title}</Text>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    button:{
        flexDirection:"row",
        alignItems:"center",
        gap:6,
        paddingHorizontal:16,
        paddingVertical:9,
        borderRadius:24,
        marginTop:10,
    },
    buttonSelected:{
        backgroundColor:"#FF3366",
        borderWidth:1,
        borderColor:"#FF4C7B"

    },
    buttonUnselected:{
        backgroundColor:"#161a28",
        borderWidth:1,
        borderColor:"#262d42"
    },
    title:{
        fontSize:13,
        fontWeight:"700",
    },
    titleSelected:{
        color:"#FFFFFF"
    },
    titleUnselected:{
        color:"#9AA3B8"
    },
    
})