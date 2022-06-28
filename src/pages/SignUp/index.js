import React, { useState } from "react";

import firebase from "firebase";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import database from "../../config/firebaseconfig"
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

import { useNavigation } from "@react-navigation/core";
import { Button } from "../../components/Button";

export default function SignUp() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function registerUser() {
    console.log("Registering User");

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        let userInformation = {
          name: name,
          isAdmin: false,
          interests: [],
          uid: user.uid
        }
        console.log(user);

        database.collection('Users').add({
          ...userInformation
        })

        navigation.navigate("Events", { userInformation })
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }

  function handleLogin() {
    navigation.navigate("Login")
  }

  return (
    <View>
      <Text style={styles.title}>
        Cadastre-se
      </Text>
      <Text style={styles.subTitle}>
        Utilize seu E-mail para realizar o login
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        autoCapitalize="none"
        textContentType="name"
        autoFocus={true}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title={"Cadastre-se"} onPress={registerUser} />
      <Button title={"Faça seu login"} onPress={handleLogin} />
    </View>
  )
}