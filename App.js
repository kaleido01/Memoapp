import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MemoList from "./src/components/MemoList";
import Appbar from "./src/components/Appbar";
import CircleButton from "./src/elements/CircleButton";

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
        <Appbar />
        <MemoList />
        <CircleButton>+</CircleButton>
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
});
