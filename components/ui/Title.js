import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.accent500,
    textAlign: "center",
    padding: 12,
    width: 300,
    // with the regular width we can also set up a minWidth / maxWidth (or minHeight / maxHeight),
    // so our app will be more responsive for different screen sizes
    maxWidth: "80%",
  },
});
