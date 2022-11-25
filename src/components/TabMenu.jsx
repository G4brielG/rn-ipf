import { Anuncios } from "../screens/Anuncios"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TouchableOpacity, Text } from "react-native"
import { NativeBaseProvider } from "native-base";
import useSession from "../hooks/useSession"

export default function TabMenu({ navigation }) {
  const { logout } = useSession()
  const Tab = createNativeStackNavigator();

  const cerrarSesion = () => {
    logout()
    navigation.navigate("Login")
  }

  const buttonSalir = (
    <TouchableOpacity onPress={cerrarSesion}>
      <Text>SALIR ඔ  </Text>
    </TouchableOpacity>
  )
  return (
    <>
      <NativeBaseProvider>
        <Tab.Navigator initialRouteName="Anuncios">
          <Tab.Screen
            name="Anuncios"
            component={Anuncios}
            options={{
              tabBarLabel: "Anuncios",
              headerRight: () => buttonSalir,
            }}
          />
        </Tab.Navigator>
      </NativeBaseProvider>
    </>
  );
}