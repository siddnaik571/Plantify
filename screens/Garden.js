import React ,{ useState } from 'react'
import {SafeAreaView, StyleSheet, View, Pressable, Text, TouchableHighlight} from 'react-native'
import {FocussedStatusBar} from '../components'
import Ionicons from '@expo/vector-icons/Ionicons'
import { COLORS, FONTS, SIZES } from '../constants'

const Garden = ({navigation}) => {

return (
    <SafeAreaView style={styles.container}>
        <FocussedStatusBar/>
        <View style={styles.arrowContainer}>
            <Pressable onPress={()=>navigation.navigate('Guide2')}>  
              <Ionicons name='arrow-back' style={styles.arrow}/> 
            </Pressable>
            <Text style={styles.arrowText}>Garden</Text>
        </View>
        <View style={styles.line}/>
        <View style={styles.miniBox}> 
            <TouchableHighlight style={styles.subButton1}> 
                <Text style={styles.simpleText}
                onPress={()=>navigation.navigate('Garden1')}>
                    Planting seeds
                    <Ionicons name='chevron-down-outline' style={styles.iconContainer}/> 
                </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.subButton2}>
            <Text style={styles.simpleText} 
            onPress={()=>navigation.navigate('Garden2')}>
                Planting saplings
            <Ionicons name='chevron-down-outline' style={styles.iconContainer}/>
            </Text>
            </TouchableHighlight>
        </View>
    </SafeAreaView>
)
}
const styles=StyleSheet.create ({
    container:{
        //backgroundColor:"#008080" ,
        flex:1    
    },
    line:{
        borderBottomColor: '#696969',
        borderBottomWidth: 2,
    },
    arrowContainer: {
        backgroundColor:"#6495ed",
        flexDirection: 'row', 
        alignItems: 'center',
        padding:30
    },
    arrow: {
       // color: `#808080`,
        //color:'#696969',
        color:'#ffffff',
        fontSize: 35
    },
    arrowText: {
        //color:'#2BA84A',
        color:'#ffffff',//indigo (`#4b0082`),
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.extraLarge,
    },
    miniBox:{
        paddingVertical:30,
        paddingHorizontal:40,
        height:'100%',
        width:'100%',
        //backgroundColor:'#e0ffff'
    },
    subButton1: {
        backgroundColor:`#40e0d0`,
        flexDirection: 'row', 
        alignItems: 'center',
        padding:30,
        borderRadius:25,
        marginBottom:30
    },
    iconContainer: {
        fontSize:30,
        color:'#696969',
    },
    simpleText: {
        //color:'#2BA84A',
        color:'#696969',//cornflowerblue (`#6495ed`), darkslateblue (`#483d8b`), dodgerblue (`#1e90ff`)
        fontFamily: FONTS.regular,
        fontSize: SIZES.large,
    },
    subButton2:{
        backgroundColor:`#40e0d0`,
        flexDirection: 'row', 
        alignItems: 'center',
        padding:30,
        borderRadius:25,
        marginBottom:30
    },
})
export default Garden