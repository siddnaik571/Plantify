import { StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Image, Button } from 'react-native';
import axios from 'axios';
import { Alert } from 'react-native';




export default function Detection({ navigation, route }) {
  
  const [image] = useState(route.params.imageUri);
  console.log("keyy==>>", image)
  

  const [message, setMessage] = useState('');
  const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.178:8080/ping');
        console.log(response.data);
        setMessage(response.data.message);
  
      } catch (error) {
        console.error(error);
      }
    };//end of fetchData

  //   const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState({uri:image});
    
    
    const handleImageUpload = async () => {
      try {
        // console.log({uri:imageUri})
        if (!selectedImage) {
          Alert.alert('Please select an image');
          return;
        }

      const formData = new FormData();
      formData.append('file', {
      uri: selectedImage.uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    const response = await fetch('http://192.168.0.178:8080/predict', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const data = await response.json();
    console.log('Response:', data);


    const imageUri = image;
    navigation.push('Disease',{imageUri,data});
    
    // Handle the response as needed
  } catch (error) {
    console.error('Error:', error);
  }
};
 
  


  return (
    <View>
      <Image source={{uri:image}}
        style={{ width: 300, height: 300, top: 120 , left: 30, borderWidth: 2, borderRadius: 10 ,
          borderColor: "green" }} />

      <Text style={{top: -230,  left: 32, color:"green", fontWeight: 'bold',fontSize: 30 }}>Disease Detection</Text>
    
      
      
      
       {/* <Detect navigation={navigation} image={image} onPress={handleImageUpload} /> */}
      {/* <Button title="detect" onPress={handleImageUpload} navigation={navigation} image={image}>
        
      </Button> */}
      <TouchableOpacity onPress={handleImageUpload} style={styles.button2}>
        <Text style={styles.detectBtnText}>Detect</Text>
      </TouchableOpacity>
      
      
      {/* <AppButton navigation={navigation}/> */}

      <TouchableOpacity onPress={() => {
    navigation.navigate('Home');
  }} style={styles.button1}>
        <Text style={styles.gobackBtnText}>Go back</Text>
      </TouchableOpacity>
      

      


    </View>
  )
}



const Detect = props => {
  const {image}=props;
  



  const onPress = () => {
    
    const imageUri = image;
    props.navigation.push('Disease',{imageUri,data});
    
    
  }
  return(
  <TouchableOpacity onPress={onPress} 
  style={styles.button2}
    >
    <Text style={styles.detectBtnText}>Detect</Text>
  </TouchableOpacity>
  )
};


const AppButton = props => {
  const onPress = () => {
    props.navigation.navigate('Home');
  };
  
  
  return(
  <View style={{flex: 1}}>
  <TouchableOpacity onPress={onPress}
  style={styles.button1}
    >
    <Text style={styles.gobackBtnText}>Go Back</Text>
  </TouchableOpacity>
  </View>
  );
  };








const styles = StyleSheet.create({

  detectBtnText: {
    fontSize: 18,
    color:"green",
    fontWeight: "bold",
    alignSelf: "center",
    
    
  },

  gobackBtnText: {
    fontSize: 18,
    color:"white",
    fontWeight: "bold",
    alignSelf: "center",
    
    
  },
  button1: {
    
    left:30,
    height: 60,
    width:300,
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal:12,
    backgroundColor: 'black',
    marginTop:30
  },
  button2: {
    
    left:30,
    height: 60,
    width:300,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal:12,
    backgroundColor: 'white',
    marginTop:120,
    borderColor:"green",
    borderWidth: 2,
  },
  
})