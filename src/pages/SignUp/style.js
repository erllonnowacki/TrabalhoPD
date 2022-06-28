import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "black",
    alignSelf: "center",
    paddingBottom: 24,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#A5A6A8",
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
  buttonRegister: {
    width: 60,
    height: 60,
    backgroundColor: "color.baseColor",
    justifyContent: "center",
    alignItems: "center"
  }

});

export default styles