import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import Colors from "../constants/colors";

import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  // 'useWindowDimensions' hook will internally look for a device dimensions and whenever they change (e.g. change orientation),
  // the whole component will be executed again and we get updated width and height (our dynamic styles will be always applied correctly)
  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    // Convert the entered string into a number (a value from 'TextInput' component is always a string)
    const chosenNumber = parseInt(enteredNumber);

    // Some basic validation of an input (it has to be a number between 1 and 99)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid input!",
        "Number has to be a number between 1 and 99!",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );

      return;
    }

    props.onPickNumber(chosenNumber);
  }

  const marginTopDistance = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

//* when we use Dimensions API, this code will run only when a component is loaded for the first time =>
//* => so, when we change orientation of a device our dynamic styles are not re-applied
//* solution => useWindowDimensions hook (check at the start of this component)
// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
