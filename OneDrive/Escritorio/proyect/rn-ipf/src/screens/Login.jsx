import { container, text, input, button } from "../styles/styles"
import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { NativeBaseProvider } from "native-base"
import { useState } from "react"
import useSession from "../hooks/useSession"

export function Login({ navigation }) {
  const [form, setForm] = useState({});

  const { login } = useSession();

  const handleSubmitForm = async () => {
    try {
      const datos = {
        correo: form.correo,
        clave: form.password,
      };

      const url = "http://192.168.216.159:4000/login";
      const content = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      };
      const response = await fetch(url, content);
      const json = await response.json();

      if (response.ok) {
        login(json.token)
        navigation.navigate('Anuncios')
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <NativeBaseProvider>
      <View style={container}>
        <View>
          <View style={input}>
            <TextInput
              name="correo"
              style={text}
              placeholder="correo"
              placeholderTextColor="#a3a3a3"
              value={form.correo}
              onChangeText={(value) => setForm({ ...form, correo: value })}
            />
          </View>

          <View style={input}>
            <TextInput
              name="password"
              style={text}
              placeholder="Contraseña"
              placeholderTextColor="#a3a3a3"
              secureTextEntry={true}
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />
          </View>

          <TouchableOpacity onPress={handleSubmitForm}>
            <Text style={button}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
