import React from "react";

import { Text, StyleSheet, TouchableOpacity } from "react-native";
// import { RectButton, RectButtonProps } from "react-native-gesture-handler";
// import { SvgFromUri } from "react-native-svg";

// import colors from "../../styles/colors";
// import fonts from "../../styles/fonts";

export function EventCard({ name, description }) {
    return (
        <TouchableOpacity style={styles.container}>
            {/* <SvgFromUri uri={data.photo} width={70} height={70} /> */}
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width:"75%",
        alignContent:"flex-start",
        backgroundColor:"#f5f5f5cf",
        padding:12,
        paddingHorizontal: 20,
        borderRadius:10,
        marginBottom: 5,
        marginRight:15,
        color:"#282b2db5",
    },
    title: {
        color:"#000",
        marginVertical: 16,
        fontSize: 16,
        fontWeight: "bold"
    },
    description: {
        color:"#000",
    },
});