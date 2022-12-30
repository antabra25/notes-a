import { View, Button, StyleSheet } from "react-native-web";

const CustomButton = ({ title, color }) => {
  return (
    <View style={ButtonStyle.container}>
      <Button title={title} color={color} />
    </View>
  );
};

const ButtonStyle = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 100,
    width: "100%",
    height: 40,
  },
});

export default CustomButton;
