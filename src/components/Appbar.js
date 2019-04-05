import React from "react"
import { StyleSheet,View,Text } from "react-native"


class Appbar extends React.Component{
  render(){
    return (
      <View style={styles.appbar}>
        <View>
					<Text style={styles.appbarTitle}>Memot</Text>

        </View>
				</View>
    )
  }
}


const styles=StyleSheet.create({
  appbar:{
    position:"absolute",
    top:0,
    height:60,
    right:0,
    left:0,
    paddingTop:30,
    backgroundColor:"#3949ab",
    justifyContent:"center",
    alignItems:"center",
    shadowColor: '#000',
    shadowOffset: {width:0,height:0},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    zIndex:10
  },
  appbarTitle:{
    color:"#fff",
    fontSize:20
  },
})

export default Appbar
