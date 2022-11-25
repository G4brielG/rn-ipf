import { container, text, input, button, alertaF } from "../styles/styles"
import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { NativeBaseProvider } from "native-base"
import { useState, useEffect } from "react"
import useSession from "../hooks/useSession"

export function Login({ navigation }) {
  const [ form, setForm ] = useState({});
  const [ message, setMessage ] = useState({})

  const { login } = useSession();

  const handleSubmitForm = async () => {
    try {
      const datos = {
        correo: form.correo,
        clave: form.password,
      };

      const url = "http://192.168.0.108:4000/login";
      const content = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      };
      const response = await fetch(url, content);
      const json = await response.json();

      if (response.ok) {
        login(json.token)
        navigation.navigate('TabMenu')
      } else {
        setMessage({...message, login: json.message})
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const validacion = () => {
    if(form.correo === undefined || form.correo === '') {
      setMessage({...message, correo: 'Required'})
      return false
    }
    
    if(form.password === undefined || form.password === '') {
      setMessage({...message, password: 'Required'})
      return false
    }
    return true
  }

  const onSubmit = () => {
    validacion() && handleSubmitForm()
  }

  useEffect(() => {
    console.log(message)
  }, [message]);

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

          {
            message.correo !== undefined &&
            <Text>{message.correo}</Text>
          }

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

          {
            message.clave !== undefined &&
            <Text>{message.clave}</Text>
          }

          <TouchableOpacity onPress={onSubmit}>
            <Text style={button}>Iniciar sesión</Text>
          </TouchableOpacity>

          {
            message.login !== undefined &&
            <Text style={alertaF}>{message.login}</Text>
          }
        </View>
      </View>
    </NativeBaseProvider>
  );
}
