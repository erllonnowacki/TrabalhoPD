import { StyleSheet } from 'react-native';
import colors from '../../components/Colors';

const styles = StyleSheet.create({
 container: { 
   flex:1,
   backgroundColor:'#fff'
 },
 label:{
   width:"90%",
   marginTop: 20,
   fontSize:16,
   marginLeft: 20,
   color:colors.baseColor
 },
 input:{
  width:"90%",
  marginTop:10,
  padding:10,
  height:50,
  borderBottomWidth: 1,
  borderBottomColor: colors.baseColor,
  marginLeft:"auto",
  marginRight:"auto"
 },
 buttonNewEvent:{
  width:60,
  height:60,
  position:"absolute",
  bottom: 30,
  left:20,
  backgroundColor: colors.baseColor,
  borderRadius:50,
  justifyContent:"center",
  alignItems: "center"
 },
 iconButton:{
  color:"#ffffff",
  fontSize:16,
  fontWeight:"bold",
 }
 
});

export default styles