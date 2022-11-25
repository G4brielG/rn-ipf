import { useEffect, useState } from "react"
import { Login } from "./src/screens/Login"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeBaseProvider } from "native-base"
import TabMenu from "./src/components/TabMenu"
import useSession from "./src/hooks/useSession"

export default function App() {
  const [initial, setInitial] = useState('')
  const { token } = useSession()

  const Stack = createNativeStackNavigator()

  useEffect(() => {
    if (token === null) {
      setInitial('Login')
    } else {
      setInitial('TabMenu')
    }
  })
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
              name="TabMenu"
              component={TabMenu}
              options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
              }}
            />
          </Stack.Navigator>

        </NavigationContainer>
      </NativeBaseProvider>
    </>
  )
}