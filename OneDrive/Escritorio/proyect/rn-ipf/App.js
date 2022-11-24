import { Login } from "./src/screens/Login"
import { Anuncios } from './src/screens/Anuncios'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { NativeBaseProvider } from "native-base"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from "react"
import useSession from "./src/hooks/useSession"
import { TouchableOpacity, Text } from "react-native"


const Stack = createNativeStackNavigator()

export default function App({ navigation }) {
  const [initial, setInitial] = useState('')
  const { token, logout } = useSession()

  const salir = () => {
    logout()
    navigation.navigate('Login')
  }
  
  const buttonSalir = (
    <TouchableOpacity key="salir" variant="unstyled" onPress={salir}>
      <Text>SALIR</Text>
    </TouchableOpacity>
  )

  useEffect(() => {
    if(token === null) {
      setInitial('Login')
    } else {
      setInitial('Anuncios')
    }
  }, [token])
  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>

          <Stack.Navigator initialRouteName={initial}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
              }}
            />
            <Stack.Screen
              name="Anuncios"
              component={Anuncios}
              options={{
                tabBarStyle: { display: 'none' },
                headerRight: () => buttonSalir,
              }}
            />
          </Stack.Navigator>

        </NavigationContainer>
      </NativeBaseProvider>
    </>
  )
}