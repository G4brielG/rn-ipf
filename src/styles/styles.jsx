import { usePropsWithComponentTheme } from 'native-base';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const container = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  //flex: 1,
  height: '100%',
  backgroundColor: '#75ffaa',
  
}

const fondo = {
  backgroundColor: '#75ffaa',
  height: '100%',
}

const mensaje = {
  textAlign: 'center',
  marginTop: '70%'
}

const cardd = {
  borderWidth: 1,
  with: '100%',
  backgroundColor: 'white',
  marginBottom: 10,
}

const input = {
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  borderRadius: 20,
  width: 300,
  height: 45,
  marginBottom: 20,
}
const alertaF = {
  width: 300,
  backgroundColor: "red",
  padding: 10,
  color: "white",
  textAlign: 'center'
}
const text = {
  height: 50,
  padding: 10,
};

const capaText = {
  textAlign: "center",
  height: 50,
  padding: 10,
}
const titless = {
  textAlign: "center",
  height: 60,
  padding: 10,
  fontSize: 25,
  color: "#000000",
}
const regtext = {
  textAlign: "center",
  height: 50,
  padding: 10,
}

const button = {
  textAlign: 'center',
  textSize: '15px',
  margin: 10,
  padding: 10,
  borderRadius: 20,
  alignItems: 'center',
  color: 'white',
  backgroundColor: '#00963a'
}

const containerMap = {
  flex: 2,
}

const map = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

const nav = {
  height: 70,
  alignItems: 'flex-end'
  //position: 'absolute'
}

const image = {
  width: 200,
  height: 200
}

const home = {
  flex: 1,
  alignItems: 'center',
}

const addButton = {
  alignItems: 'center',
  backgroundColor: '#1CC48D',
  justifyContent: 'center',
  width: 50,
  height: 50,
  borderRadius: 25,
  margin: 3
}

const addButtonText = {
  color: 'white',
  fontSize: 30,
}

const buttonContainer = {
  top: 30,
  right: 20,
  position: 'absolute'
}

const containerBox = {
  position: "absolute",
  top: "30%",
  alignContent: "center",
  width: "100%",
  height: "100%"
}

const containerInfoCapa = {
  position: "absolute",
  alignSelf: "center",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  height: 200,
  width: 300,
  backgroundColor: "white"
}

export {
  container,
  input,
  text,
  button,
  map,
  containerMap,
  image,
  home,
  regtext,
  addButton,
  addButtonText,
  buttonContainer,
  containerBox,
  containerInfoCapa,
  alertaF,
  titless,
  capaText,
  cardd,
  fondo,
  mensaje
}