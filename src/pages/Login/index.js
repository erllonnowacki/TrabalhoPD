import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import firebase from "firebase";

import { useRoute } from "@react-navigation/core";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert
} from "react-native";
import database from "../../config/firebaseconfig"
import { Button } from "../../components/Button";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInformation, setUserInformation] = useState('');

  async function login() {
    console.log("User Login");

    async function setStringValue(userUID, userName, isAdmin) {
      try {
        let userIsAdmin = JSON.stringify(isAdmin)
        await AsyncStorage.setItem('userUID', userUID);
        await AsyncStorage.setItem('userName', userName);
        await AsyncStorage.setItem('isAdmin', userIsAdmin);
      } catch (e) {
        console.log(e);
      }
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          let userUID = user.uid;

          database.collection("Users").where("uid", "==", userUID).get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                setUserInformation(doc.data());
              });
            })
            .catch((error) => {
              console.log("Error getting documents: ", error);
            });

          setStringValue(userInformation.uid, userInformation.name, userInformation.isAdmin);

          navigation.navigate("Events", { userInformation })

        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("Login error: ", errorMessage);

          Alert.alert(
            "Login Error",
            errorMessage,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
        });


    } catch (error) {
      console.log(error);
    }
  }

  function handleSignUp() {
    navigation.navigate("SignUp")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Faça seu login
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Seu email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sua senha"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title={"Entrar"} onPress={login} />
      <Button title={"Cadastre-se"} onPress={handleSignUp} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "black",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 30
  },
});