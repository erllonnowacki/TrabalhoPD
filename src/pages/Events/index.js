import React, { useState, useEffect } from "react";
import {
 View,
 Text,
 TouchableOpacity,
 FlatList,
} from "react-native";
import database from "../../config/firebaseconfig";

import colors from "../../components/Colors";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useRoute } from "@react-navigation/core";

import { EventCard } from "../../components/EventCard";

import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";
import { Button } from "../../components/Button";

export default function Events({ navigation }) {
 const routes = useRoute();

 // const { userInformation } = routes.params;
 const [events, setEvents] = useState([]);
 const [userName, setuserName] = useState('');
 const [isAdmin, setIsAdmin] = useState(false);


 // getAllKeys = async () => {
 //  let keys = []
 //  try {
 //   keys = await AsyncStorage.getAllKeys();
 //  } catch (e) {
 //   // read key error
 //  }

 //  console.log(keys)
 //  // example console.log result:
 //  // ['@MyApp_user', '@MyApp_key']
 // }

 async function getUSerName() {
  let name = await AsyncStorage.getItem('userName');
  return name;
  // try {
  //  let name = await AsyncStorage.getItem('userName');
  //  return name;
  // } catch (e) {
  //  // read error
  // }
 }

 // getAllKeys();
 // let capeta = getMyStringValue();
 // console.log(capeta);

 function deleteEvent(id) {
  database.collection("Events").doc(id).delete();
 }

 function handleNewEvent() {
  navigation.navigate("New Event");
 }

 useEffect(() => {
  database.collection("Events").onSnapshot((query) => {
   const list = [];
   query.forEach((doc) => {
    list.push({ ...doc.data(), id: doc.id });
   });
   setEvents(list);
  });
  // let userName = getUSerName();
  console.log(getUSerName());

  setuserName(userName);
 }, []);

 return (
  <View style={styles.container}>
   <FlatList
    showsVerticalScrollIndicator={false}
    data={events}
    renderItem={({ item }) => {
     return (
      <View style={styles.Events}>
       <TouchableOpacity
        style={styles.deleteEvent}
        onPress={() => {
         deleteEvent(item.id)
        }}
       >
        <FontAwesome
         name="trash"
         size={23}
         color={colors.baseColor}
         style={styles.trash}
        >
        </FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity
        style={styles.EventDescription}
        onPress={() =>
         navigation.navigate("Details", {
          name: item.name,
          id: item.id,
          description: item.description,
          areas: item.areas,
         })
        }
       >
        <Text style={styles.eventTitle}>
         {item.name}
         {"\n"}
        </Text>
        <Text style={styles.eventSubtitle}>
         {item.description}
        </Text>
        <Text style={styles.eventSubtitle}>
         {item.area}
        </Text>
        <Text style={styles.scheduleDate}>
         {item.scheduleDate}
        </Text>
       </TouchableOpacity>
      </View>
     )
    }}
   />
   <Button title={"Adicionar um novo evento"} onPress={handleNewEvent}></Button>
  </View>
 )
}