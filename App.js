import React, { Component } from "react";
import { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { View, Text, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import Camera from "./screens/Camera";
import Profile from "./screens/Profile";
import ShoppingList from "./screens/ShoppingList";
import Scanner from "./components/Scanner";

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Camera">
          <Stack.Screen name="Camera" component={Camera} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ShoppingList" component={ShoppingList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

/* BarCode Scanner Example
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
*/
