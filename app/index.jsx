import { Image, StyleSheet, Text, View } from "react-native";
import Logo from '../assets/images/react-logo.png';
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
      <Text style={[styles.title, { color: "cyan" }]}>Home Page</Text>
      <Text style={{ marginTop: 30, fontStyle: "italic" }}>Reading List app</Text>

      <View style={styles.card}>
        <Text>Hi, This is a card.</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18
  },

  card: {
    padding: 20,
    backgroundColor: "#eee",
    marginTop: 30,
    boxShadow: '4px 4px rgba(0,0,0, 0.2)'
  }
});
