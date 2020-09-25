import React,{useEffect,useState}from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
export default CoffeePage =(props)=> {
  const[item,setItem]=useState({})
  let{route}=props
  useEffect(() => {
     setItem(route.params.item)
}, [])
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() =>props.navigation.goBack()}><Text style={styles.backText}>X</Text></TouchableOpacity>
        <View style={{...styles.backgroundFill, backgroundColor:item.color}} />
        <Image style={styles.productImage} source={{ uri:item.productImage }} />
        <View style={styles.details}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.price}</Text>
          <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Text>
          <Text style={styles.detail}>{`BLEND TYPE: ${item.blend}`}</Text>
        </View>
      </View>
    );
    }

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    height: vh,
    width: vw,
    backgroundColor: '#fdfdfd'
  },
  backButton: {
    position: 'absolute',
    top: vh / 18,
    left: vw / 30,
    zIndex: 10,
    width: 50,
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backText: {
    fontFamily: 'maven-pro-bold',
    fontSize: 23,
    color: '#fff',
  },
  backgroundFill: {
    width: '100%',
    height: vh / 3.2
  },
  productImage: {
    width: '100%',
    height: vh / 2.7,
    resizeMode: 'contain',
    position: 'absolute',
    top: vh / 14
  },
  details: {
    margin: 50,
    position: 'absolute',
    top: vh / 2.5
  },
  title: {
    fontFamily: 'maven-pro-bold',
    fontSize: vw / 14,
    color: '#252525'
  },
  subtitle: {
    fontFamily: 'maven-pro-bold',
    fontSize: vw / 14,
    color: '#bf200b',
    marginTop: 10
  },
  description: {
    fontFamily: 'maven-pro-regular',
    fontSize: vw / 22,
    color: '#4c4c4c',
    marginTop: 20
  },
  detail: {
    fontFamily: 'maven-pro-bold',
    fontSize: vw / 22,
    color: '#bf200b',
    marginTop: 20
  },
});
