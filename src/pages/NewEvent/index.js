import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Button } from "../../components/Button";
import database from "../../config/firebaseconfig"
import styles from "./style";

export default function NewEvent({ navigation }, props) {

 const [name, setName] = useState('');
 const [area, setArea] = useState('');
 const [description, setDescription] = useState('');
 const [scheduleDate, setScheduleDate] = useState('');

 function addEvent() {
  database.collection('Events').add({
   name: name,
   area: ["Area1"],
   scheduleDate: "05/06/2022",
   description: "Descrição desse evento",
   photo: "Image link"
  })
  navigation.navigate("Events");
 }

 return (
  <View style={styles.container}>
   <Text style={styles.label}>Nome do evento</Text>
   <TextInput
    style={styles.input}
    placeholder="Ex: Feira das sementes"
    onChangeText={(text) => setName(text)}
    value={name}
   />
   <Text style={styles.label}>Descrição do evento</Text>
   <TextInput
    style={styles.input}
    placeholder="Ex: Descrição do evento"
    onChangeText={(text) => setDescription(text)}
    value={description}
   />
   <Text style={styles.label}>Area de interesse</Text>
   <TextInput
    style={styles.input}
    placeholder="Ex: Agronomia"
    onChangeText={(text) => setArea(text)}
    value={area}
   />
   <Text style={styles.label}>Data do evento</Text>
   <TextInput
    style={styles.input}
    placeholder="Ex: 07/08/2022"
    onChangeText={(text) => setScheduleDate(text)}
    value={scheduleDate}
   />
   
   <Button title={"Salvar evento"} onPress={addEvent} />
  </View>
 )
}