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
                placeholder="Agregar nota"
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
        backgroundColor: "blue",
    },
    textInput: {
        width: "80%",
        height: 40,
        backgroundColor: "red",
        borderRadius: 10,
    }
})

export default NoteInput