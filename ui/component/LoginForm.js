import React from "react";
import { TextInput, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/StyleSheet";

export default LoginForm = props => {
  let { onchange } = props;
  return (
    <View>
      <Text style={styles.loginInputLabel}>Email</Text>
      <View style={styles.loginFormContainer}>
        <Ionicons
          style={{ padding: 5 }}
          name="md-mail"
          size={20}
          color="white"
        />
        <TextInput
          onChangeText={text => onchange(text, "email")}
          style={styles.loginTextInput}
        />
      </View>
      <View style={{ height: 10 }} />
      <Text style={styles.loginInputLabel}>Mot de passe</Text>
      <View style={styles.loginFormContainer}>
        <Ionicons
          style={{ padding: 5 }}
          name="md-lock"
          size={25}
          color="white"
        />
        <TextInput
          onChangeText={text => onchange(text, "password")}
          style={styles.loginTextInput}
          secureTextEntry
        />
      </View>
    </View>
  );
};
