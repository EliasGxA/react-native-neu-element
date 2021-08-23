import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import NeuView from "./NeuView";
import PropTypes from "prop-types";

const NeuInput = (props) => {
  const {
    style = {},
    textStyle,
    placeholder = "",
    placeholderTextColor = "#595959",
    keyboardType = "default",
    name = "",
    onChangeText = () => {},
    onFocus = () => {},
    value = "",
    editable = true,
    onPressIn = () => {},
    onPressOut = () => {},
    prefix: Prefix,
    autoCapitalize = "sentences",
    ...rest
  } = props;

  const styles = StyleSheet.create({
    input: {
      borderBottomWidth: 0,
      flex: 1,
    },
  });

  return (
    <NeuView {...rest} style={{ ...style, alignItems: "stretch" }} inset>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 12,
        }}
      >
        {Prefix && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: 6,
            }}
          >
            {Prefix}
          </View>
        )}
        <TextInput
          style={{
            ...styles.input,
            ...textStyle,
          }}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          name={name}
          onFocus={onFocus}
          editable={editable}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          autoCapitalize={autoCapitalize}
        />
      </View>
    </NeuView>
  );
};

NeuInput.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  keyboardType: PropTypes.string,
  name: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  ...NeuView.propTypes,
};
export default NeuInput;
