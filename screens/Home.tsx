import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../src/App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {shoeProducts} from '../src/constants';

type Homeprops = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Homeprops) => {
  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>GOAT</Text>

      </View>
      <View style={styles.homeContainer}>
        <FlatList
          numColumns={2}
          data={shoeProducts}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable style={styles.shoeButton} onPress={() => navigation.navigate("Details", { product: item})}>
              <Image source={{uri: item.image}} style={styles.shoeImage} />
              <Text style={styles.shoeName}>{item.name}</Text>
              <Text style={styles.shoePrice}>{item.price}</Text>
              <Text style={styles.shoeDiscount}>{item.discount}</Text>
            </Pressable>
          )}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  headingContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#0B0A07',
    
    

  },
  heading:{
    fontSize:40,
    fontWeight: 300,
    color:'white',
    margin:20

  },
  homeContainer: {
    backgroundColor: '#0B0A07',
    flex: 1,
    
  },

  shoeButton: {
    height: 310,
    width: 200,
    marginRight: 4,
    margin: 2,
    borderWidth: 2,
    borderBlockColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    elevation: 2,
  },
  shoeImage: {
    height: 170,
    width: 170,
    resizeMode: 'contain',
    elevation:2,
  },
  shoeName:{
    color:'white',
    fontSize:15,
    fontWeight: '500',
    margin:3
  },
  shoePrice:{
    color:'white',
    fontSize:15,
    fontWeight: '500',
    margin:3
  },
  shoeDiscount:{
    color:'white',
    fontSize:15,
    fontWeight: '500',
    margin:3
  },

});
