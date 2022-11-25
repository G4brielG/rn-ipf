import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { NativeBaseProvider, Box, Stack } from "native-base";
import { fondo, cardd, mensaje } from "../styles/styles";

export function Anuncios() {
  const [ data, setData ] = useState([])

  const handleFind = async () => {
    const url = `${SERVER}/anuncios`;
    const content = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(url, content);
    const json = await response.json();

    response.ok && setData(json)
  };

  useEffect(() => {
    handleFind()
  }, [])
  return (
    <NativeBaseProvider>
      <View style={fondo}>
        {data?.length > 0 ? (
          data.map((element, index) => (
            <Box style={cardd} key={index}>
              <Stack p="4">
                <Text>
                  {element.anuncio.anuncio}
                </Text>
                <Text>
                  <Text>Tipo: {element.anuncio.tipo_anuncio}</Text>
                </Text>
                <Text>
                  <Text>{element.anuncio.fecha_anuncio}</Text>
                </Text>
              </Stack>
            </Box>
          ))
        ) : (
          <Text style={mensaje}>No hay anuncios que mostrar</Text>
        )}
      </View>
    </NativeBaseProvider>
  );
}