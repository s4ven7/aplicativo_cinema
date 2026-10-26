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
            <Text>{title}</Text>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    button:{
        
    },
    buttonSelected:{

    },
    buttonUnselected:{

    },
})