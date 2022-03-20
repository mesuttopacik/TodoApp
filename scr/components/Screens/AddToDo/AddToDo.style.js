import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'flex-end',
    backgroundColor: '#FFFBE9',
  },
  addToDoWrapper:{
    flex:1,
    position:'absolute',
    bottom:50,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
  },

  textInput: {
    padding:16,
    borderWidth: 1,
    width:'80%',
    borderColor:'#D18CE0',
    backgroundColor:'#FFFBE9',
    borderRadius:55,
  },
  
addButtonWrapper:{
  height:50,
  width:50,
  borderWidth:1,
  borderRadius:25,
  borderColor:'#D18CE0',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#D18CE0'
},
addText:{
  fontSize:20,
  color:'#FFFBE9'
},
});
