import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { strings } from "../../assets/strings";

const LoginScreen = function({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // let email;

  const handleLogin = function() {
    console.log("Email:", email);
    console.log("Senha:", password);
    navigation.navigate('JobList',  { userName: email })
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo ao</Text>
      <Text style={[styles.title, styles.appName]}>EmpregaEu</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={strings.emailPlaceholder}
          onChangeText={setEmail}
          value={email}
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder={strings.passwordPlaceholder}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholderTextColor="#aaa"
        />
        <Button title={strings.loginButton} onPress={handleLogin} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0", // Cor de fundo da tela de login
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: "Arial", // Mudando a fonte do título
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Efeito de transparência nas caixas de texto
  },
});

export default LoginScreen;
