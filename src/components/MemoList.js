import React from 'react'
import { StyleSheet,View,Text} from 'react-native'


class MemoList extends React.Component{
  render(){
    return(
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

    )
  }
}

const styles=StyleSheet.create({
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
})


export default MemoList