import { View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
}

export default NumberContainer;

// We can get an information about a dimensions of a device,
// on which our app is running by using a Dimensions API built in React Native
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    // setting a dynamic padding and margin, depending of a device width
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
