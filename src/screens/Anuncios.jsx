import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { NativeBaseProvider, Box, Stack, Heading } from "native-base";
import { fondo, cardd, mensaje } from "../styles/styles";

export function Anuncios({ navigation }) {
  const [data, setData] = useState([])
  return (
    <NativeBaseProvider>
      <View style={fondo}>
        {
          data.length > 0
            ? data.map((element, index) => (
                <View style={cardd}>
                  <Box>
                    <Stack p="4" space={3}>
                      <Heading size="md" ml="-1">
                        SUSSY BAKA
                      </Heading>
                      <Text fontSize="xs" _light={{
                        color: "violet.500"
                      }} _dark={{
                        color: "violet.400"
                      }} fontWeight="500" ml="-0.5" mt="-1">
                        The Silicon Valley of India.
                      </Text>
                    </Stack>
                  </Box>
                </View>
              ))
            : <Text style={mensaje}>No hay anuncios que mostrar</Text>
        }

      </View>
    </NativeBaseProvider>
  )
}