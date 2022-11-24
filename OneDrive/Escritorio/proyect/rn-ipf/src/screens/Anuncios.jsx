import { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { NativeBaseProvider } from "native-base";
import { container, text, input, button } from "../styles/styles";

export function Anuncios({ navigation }) {
  return (
    <NativeBaseProvider>
      <View style={container}>
        <View>
          <Text>SUS</Text>
        </View>
      </View>
    </NativeBaseProvider>
  )
}