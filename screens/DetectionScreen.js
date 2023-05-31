import React from 'react'
import { Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import { FocussedStatusBar, QueryBox } from '../components'
import axios from 'axios';
import { Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

const DetectionScreen = ({navigation, route}) => {

    const [image] = React.useState(route.params.imageUri);
    const [message, setMessage] = React.useState('');
    const [selectedImage, setSelectedImage] = React.useState({uri:image});
    
    const handleImageUpload = async () => {
        try {
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
  
            const imageUri = image;
            navigation.push('DetectionScreen2',{imageUri: imageUri,data: data});
      
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <FocussedStatusBar background={COLORS.primary}/>
            <View style={{height: '20%'}}></View>
            <View style={styles.secondaryContainer}>
                <Text style={styles.mainText}>Disease Detection</Text>
                <View style={styles.imageContainer}>
                    {/* <Image style={styles.image} source={{ uri: route.params.imageUri }}/> */}
                    <Image style={styles.image} source={{ uri: image }}/>
                    <View>
                        <TouchableOpacity style={styles.button1} onPress={handleImageUpload}>
                            <Text style={{color: '#248232'}}>Detect</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2} onPress={()=>navigation.push('Scanner')}>
                            <Text style={{color: '#FCFFFC'}}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DetectionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondaryContainer: {
        flex: 1,
        width: '80%',
        alignItems: 'center',
    },
    mainText: {
        fontSize: SIZES.extraLarge,
        color: '#2BA84A',
        marginBottom: 35,
        fontFamily: FONTS.semiBold,
        textAlign: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 240,
        height: 240
    },
    button1: {
        width: 240,
        height: 43,
        borderColor: '#248232',
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    button2: {
        width: 240,
        height: 43,
        borderRadius: 4,
        backgroundColor: '#2D3A3A',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    }
})