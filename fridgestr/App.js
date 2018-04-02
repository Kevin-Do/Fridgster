import React from "react";

//Components
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./components/login/LoginForm";

//Firebase
import { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } from "react-native-dotenv";
import firebase from "firebase";

export default class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
