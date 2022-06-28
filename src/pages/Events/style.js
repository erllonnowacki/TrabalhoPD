import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20
  },
  Events: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5
  },
  deleteEvent: {
    justifyContent: "center",
    paddingLeft: 15,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  eventSubtitle: {
    fontSize: 14,
  },
  scheduleDate: {
    fontSize: 14,
    color: "#777"
  },
  EventDescription: {
    width: "75%",
    alignContent: "flex-start",
    backgroundColor: "#f5f5f5cf",
    padding: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 5,
    marginRight: 15,
    color: "#282b2db5",
  },
  buttonNewEvent: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "color.baseColor",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  iconButton: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  trash: {
    paddingRight: 10
  }
});

export default styles