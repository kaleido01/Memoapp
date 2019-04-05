import React from 'react'
import { View,StyleSheet,Text } from 'react-native'


class CircleButton extends React.Component{
  render(){
    return (
      
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonTitle}>{this.props.children}</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  circleButton:{
    position:"absolute",
    bottom:32,
    height:60,
    width:60,
    right:32,
    backgroundColor:"#81d4fa",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 30,
    shadowOffset: {width:0,height:2},
    shadowOpacity: 0.6,
    shadowRadius: 1,
    
  },
  circleButtonTitle:{
    fontSize:32,
    color:"#ffffff",
    lineHeight:32

  }
})

export default CircleButton