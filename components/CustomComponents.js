import { Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RadioButton } from "react-native-paper";
import NumericInput from "react-native-numeric-input";
import { Styles } from "../styles/Styles"


function CustomSwitch({ mode, handleChange, color }) {
  return (
    <View style={Styles.switchContainer}>
      <Switch
        value={mode}
        onValueChange={handleChange}
        thumbColor={color.thumbColor}
        trackColor={{false:color.textColor,true:color.textColor}}
      />
    </View>
  )
}

function HeaderText({ label, color }) {
  return (
    <View style={Styles.headerContainer}>
      <Text style={[Styles.header, { color: color.textColor }]}>{label}</Text>
    </View>
  )
}

function CustomInputText({ label, color, value, handleChange, placeholderText }) {
  return (
    <View style={Styles.textInputContainer}>
      <Text style={[Styles.text,{ color: color.textColor }]}>{label}</Text>
      <TextInput style={[Styles.textInput,{backgroundColor:color.inputStyleColor}]}
        keyboardType="number-pad"
        value={value}
        onChangeText={handleChange}
        placeholder={placeholderText}
        inputMode="numeric"
        placeholderTextColor={color.textColor}
        textAlign="center"
      />
    </View>
  )
}

function CustomRadioButton({ label, value, color }) {
  return (
    <View style={Styles.radioButton}>
      <RadioButton
        value={value}
        color={color}
        uncheckedColor={color} />
      <Text style={[Styles.text,{ color: color }]}>{label}</Text>
    </View>
  )
}
function CustomButtonGroup({value,radioButtonValues,handleChange,color}){
  return(
    <View style={Styles.radioButtonContainer}>
    <RadioButton.Group value={value} onValueChange={handleChange}>
      {radioButtonValues.map((gender, index) =>
        <CustomRadioButton
          key={index}
          label={gender.label}
          value={gender.value}
          color={color.textColor}
        />
      )}
    </RadioButton.Group>
  </View>
  )
}


function CustomNumericInput({ label, value, handleChange, color , measurements}) {
  return (

    <View>
      <Text style={[Styles.text,{ color:color.textColor }]}>{label}</Text>
      <NumericInput
        value={value}
        onChange={handleChange}
        minValue={measurements.minValue}
        maxValue={measurements.maxValue}
        rounded
        totalWidth={measurements.width}
        totalHeight={measurements.height}
        rightButtonBackgroundColor={color.buttonColor}
        leftButtonBackgroundColor={color.buttonColor}
        iconStyle={{ color: Styles.whiteColor }}
        containerStyle={Styles.numericInput}
        inputStyle={{ backgroundColor: color.inputStyleColor }} />
    </View>
  )
}

function CustomButton({ label, result, alcoColor, handlePress,color }) {
  return (
    <View style={Styles.calculateContainer}>
      <Text style={[Styles.resultText, { color: alcoColor }]}>{result}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={[Styles.button,Styles.text,{color:color.textColor,backgroundColor:color.buttonColor}]}>{label}</Text>
      </TouchableOpacity>
    </View >
  )
}
export { CustomRadioButton, CustomNumericInput, CustomSwitch, CustomInputText, CustomButton, HeaderText ,CustomButtonGroup}