import {View, TextInput, StyleSheet} from "react-native";
import {useState} from "react";

const NoteInput = () => {

    const [note, setNote] = useState("");
    const handleNoteChange = (text) => {
        setNote(text);
    }

    return (
        <View style={styles.InputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Agregar nota .."
                onChangeText={handleNoteChange}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    InputContainer: {

        justifyContent:"center",
        alignItems:"center",
        width: "90%",
        height: 100,
        backgroundColor: "#D6D1CD",
        borderRadius:8
    },
    textInput: {
        width: "80%",
        height: 40,
        backgroundColor: "#E5ECE9",
        borderRadius: 10,
        padding:10
    }
})

export default NoteInput