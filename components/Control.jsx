import { View, StyleSheet } from "react-native-web";
import CustomButton from "./CustomButton";

const Control = () => {
  return (
    <View style={style.controlContainer}>
      <CustomButton title="Confirmar" color="#183059"/>
      <CustomButton title="Cancelar" color="#E01A4F" />
    </View>
  );
};

const style = StyleSheet.create({
  controlContainer: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
    width: "60%",
    height: 40,
    marginTop: 10,
  },
});

export default Control;
