import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fs18}>Contact</Text>

      <Link href="/" style={{ borderBottomWidth: 1 }}>Back To Home</Link>
    </View>
  )
}

export default Contact


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    fs18: {
        fontSize: 18
    }
})