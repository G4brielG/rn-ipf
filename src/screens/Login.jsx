import { container, text, input, button, alertaF } from "../styles/styles"
import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { NativeBaseProvider } from "native-base"
import { useState, useEffect } from "react"
import useSession from "../hooks/useSession"
import SERVER from "../Services"

export function Login({ navigation }) {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState(null)

  const { login } = useSession();

  const handleSubmitForm = async () => {
    try {
      const datos = {
        correo: form.correo,
        clave: form.password,
      };

      const url = `${SERVER}/login`;
      const content = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      };
      const response = await fetch(url, content);
      const json = await response.json();

      if (response.ok) {
        login(json.token);
        setMessage(null)
        navigation.navigate("TabMenu");
      } else {
        setMessage(`${json.message}`);
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }
  return (
    <NativeBaseProvider>
      <View style={container}>
        <View>
          <Text>LOGIN (SUS)</Text>
        </View>
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

          {message !== null && <Text style={alertaF}>{message}</Text>}
        </View>
      </View>
    </NativeBaseProvider>
  );
}
