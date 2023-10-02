import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, View } from 'react-native';
import { Styles, darkStyles, lightStyles, alcometerLevels } from "./styles/Styles"
import { useState } from 'react';
import { CustomNumericInput, CustomSwitch, CustomInputText, CustomButton, HeaderText, CustomButtonGroup } from './components/CustomComponents';

export default function App() {
  const [weight, setWeight] = useState("")
  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  function handleCalculate() {
    const litres = Number(bottles) * 0.33
    const grams = litres * 8 * 4.5
    const burning = Number(weight) / 10
    const leftGrams = grams - (burning * Number(hours))

    let calculate = gender === "male" ? (leftGrams / (Number(weight) * 0.7)).toFixed(2) : (leftGrams / (Number(weight) * 0.6)).toFixed(2)

    if (calculate < 0) {
      calculate = 0
    }

    return calculate
  }

  function handlePress() {
    weight === "" ? Alert.alert("Info", "Set weight!") : setResult(handleCalculate())
  }

  /*
  https://paihdelinkki.fi/fi/testit-ja-laskurit/laskurit/promillelaskuri
  Siellä oli samanlainen tyylinen ja siitä olen katsonut noita arvoja.
  */
  function alcometerColors(result) {
    let color
    if (result <= 0.5) {
      color = alcometerLevels.safeColor
    }
    else if (result > 0.5 && result <= 2) {
      color = alcometerLevels.cautionColor
    }
    else {
      color = alcometerLevels.dangerColor
    }
    return color
  }

  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" }]


  const measurements = {
    width: Styles.numericInputWidth,
    height: Styles.numericInputHeight,
    minValue: 0,
    maxValue:100
  }

  const theme = darkMode ? darkStyles : lightStyles
  /*
  console.logit testejä varten
  */
  //console.log(weight, "UseState weight")
  //console.log(bottles, "UseState Bottles")
  //console.log(hours, "UseState Hours")
  //console.log(gender, "UseState Gender")
  return (

    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <View style={[Styles.container, { backgroundColor: theme.backgroundColor }]}>
        <StatusBar style="auto" backgroundColor={Styles.statusBarColor} />

        <CustomSwitch
          mode={darkMode}
          handleChange={setDarkMode}
          color={theme}
        />

        <HeaderText
          label="Alcometer"
          color={theme}
        />

        <CustomInputText
          label="Weight"
          color={theme}
          value={weight}
          handleChange={setWeight}
          placeholderText="Set Weight"
        />

        <View style={Styles.numericInputContainer}>
          <CustomNumericInput
            label="Bottles"
            value={bottles}
            handleChange={setBottles}
            color={theme}
            measurements={measurements}
          />
          <CustomNumericInput
            label="Hours"
            value={hours}
            handleChange={setHours}
            color={theme}
            measurements={measurements}
          />
        </View>

        <CustomButtonGroup
          value={gender}
          radioButtonValues={genders}
          handleChange={setGender}
          color={theme}
        />

        <CustomButton
          label="Calculate"
          result={result}
          alcoColor={alcometerColors(result)}
          handlePress={handlePress}
          color={theme}

        />
      </View>

    </ScrollView>

  );
}


