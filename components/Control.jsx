import { View,Button,StyleSheet } from "react-native-web";

const Control = () =>{

    return(

        <View style={style.controlContainer}>
            <Button title="Agregar" color="#183059"/>
            <Button title="Cancelar" color="#183059"/>
        </View>
    )
}

const style = StyleSheet.create({
    controlContainer:{
        display:"flex",
        flexFlow:"row nowrap",
        justifyContent:"space-evenly",
        width:"60%",
        height:40,
        marginTop:10,


    }
})

export default Control;