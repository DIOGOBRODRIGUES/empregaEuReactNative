import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Components/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#f0f0f0", // Cor de fundo da tela de login
    alignItems: "center",
    justifyContent: "center",
  },
});
