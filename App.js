import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.appbar}>
        <View>
					<Text style={styles.appbarTitle}>Memot</Text>

        </View>
				</View>

      <View style={styles.memoList}>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>講座のアイテム</Text>
        <Text style={styles.memoDate}>日付</Text>

      </View>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>講座のアイテム</Text>
        <Text style={styles.memoDate}>日付1234556</Text>

      </View>
      </View>

      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddButtonTitle}>+</Text>
      </View>
      </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		alignItems: "center",
    justifyContent: "center",
    paddingTop:70
  },
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
  memoList:{
    width:"100%",
    flex:1

  },
  memoListItem:{
    padding:15,
    borderBottomWidth: 0.5,
    borderBottomColor:"#9e9e9e",
    backgroundColor:"#eceff1"
  },
  memoTitle:{
    fontSize:20,
    marginBottom: 4,
  },
  memoDate:{
    color:"#616161"
  },
  memoAddButton:{
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
  memoAddButtonTitle:{
    fontSize:32,
    color:"#ffffff",
    lineHeight:32

  }

  
});
