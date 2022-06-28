import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { useRoute } from "@react-navigation/core";

import database from "../../config/firebaseconfig"
import styles from "./style"

import { Button } from "../../components/Button";

export default function Details({ navigation, route }) {
  const routes = useRoute();
  
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
  const [nameEdit, setNameEdit] = useState(route.params.name);
  const [AreasEdit, setAreasEdit] = useState(route.params.areas);
  const [dateEdit, setDateEdit] = useState('');
  const eventId = route.params.id

  async function editEvent() {
    const description = descriptionEdit;
    const id = eventId;

    await database.collection("Events").doc(id).update({
      area: AreasEdit,
      description: description,
      name: nameEdit,
      photo: "www.google.com",
      scheduleDate: "05/06/2022",
    })

    handleNavigateToEventsFeed();
  }

  function handleNavigateToEventsFeed() {
    navigation.navigate("Events");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Feira de agronomia"
        onChangeText={setNameEdit}
        value={nameEdit}
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: estudar javascript"
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />
      <Text style={styles.label}>Area</Text>
      <TextInput
        style={styles.input}
        placeholder="Software"
        onChangeText={setAreasEdit}
        value={AreasEdit}
      />
      <Button title={"Salvar"} onPress={editEvent} />
    </View>
  )
}