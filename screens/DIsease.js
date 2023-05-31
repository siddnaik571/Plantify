import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useState } from 'react'
import {Image} from 'react-native';
import axios from 'axios';
import { Alert } from 'react-native';
// import ImagePicker from 'react-native-image-picker';

// import axios from 'axios';
import { Platform } from 'react-native';
import { Buffer } from 'buffer';

const Disease=({route})=>{
    const {imageUri,data} = route.params;
    const [message, setMessage] = useState('');
    const fetchData = async () => {
        try {
          const response = await axios.get('http://192.168.100.126:8080/ping');
          console.log(response.data);
          setMessage(response.data.message);
    
        } catch (error) {
          console.error(error);
        }
      };//end of fetchData

    //   const [selectedImage, setSelectedImage] = useState(null);
      const [selectedImage, setSelectedImage] = useState({uri:imageUri});
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

      const response = await fetch('http://192.168.100.126:8080/predict', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = await response.json();
      console.log('Response:', data);
      
      // Handle the response as needed
    } catch (error) {
      console.error('Error:', error);
    }
  };


  
  const handleImageSelect = async () => {
    // Code to select an image from the device's gallery
    // ImagePicker.showImagePicker(
    //     {
    //       mediaType: 'photo',
    //       maxWidth: 800,
    //       maxHeight: 800,
    //     },
    //     (response) => {
    //       if (!response.didCancel && !response.error) {
    //         setSelectedImage(response.uri);
    //       }
    //     }
    //   );
  };



      
      const [imagePath, setImagePath] = useState('');
    return(
        <View>
            
            <Text style={{top:40,  left: 30, color:"green", fontWeight: 'bold',fontSize: 30 }}>{data.class}</Text>
            <Image source={{uri:imageUri}}
        style={{ width: 300, height: 300, top: 50 , left: 30, borderWidth: 2, borderRadius: 10 ,
          borderColor: "green" }} />
            {/* <Button title="Get" onPress={() => fetchData()} /> */}
            {/* <Button title="Post" onPress={() => fetchData()} /> */}
            {/* <Button title="postData2" onPress={() => sendImageToModel({uri:imageUri})} /> */}
            {/* <Button title="Select Image" onPress={handleImageSelect} /> */}
      {/* {selectedImage && <Image source={{ uri: selectedImage.uri }} style={{ width: 200, height: 200 }} />} */}
      {/* <Button title="Upload Image" onPress={handleImageUpload} /> */}
        </View>
    );
}

export default Disease;