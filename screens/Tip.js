import React ,{ useState } from 'react'
import {SafeAreaView, StyleSheet, View, TouchableOpacity,Pressable, Text, Image, TouchableHighlight} from 'react-native'
import {FocussedStatusBar} from '../components'
import Ionicons from '@expo/vector-icons/Ionicons'
import { COLORS, FONTS, SIZES } from '../constants'

const Tip = ({navigation}) => {

return (
    <SafeAreaView style={styles.container}>
        <FocussedStatusBar/>
        <View style={styles.arrowContainer}>
            <Pressable onPress={()=>navigation.navigate('Guide2')}>  
              <Ionicons name='arrow-back' style={styles.arrow}/> 
            </Pressable>
            <Text style={styles.arrowText}>Tips</Text>
        </View>
        <View style={styles.line}/>
        <View style={styles.miniBox}> 
            <TouchableHighlight style={styles.subButton1} onPress={()=>navigation.navigate('Tip1')}> 
                <Text style={styles.simpleText}>
                <Ionicons name='rocket-outline' style={styles.iconContainer}/>
                    Boost Growth Rate                   
                </Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.subButton2}  onPress={()=>navigation.navigate('Tip2')}>
            <Text style={styles.simpleText} >
            <Ionicons name='rose-outline' style={styles.iconContainer}/>
                Tips for Balcony           
            </Text>
            </TouchableHighlight>
            
            <TouchableHighlight style={styles.subButton3} onPress={()=>navigation.navigate('Tip3')}>
            <Text style={styles.simpleText} >
            <Ionicons name='cut-outline' style={styles.iconContainer}/>
                Tools          
            </Text>
            </TouchableHighlight>
            
            <TouchableHighlight style={styles.subButton4} onPress={()=>navigation.navigate('Tip4')}>
            <Text style={styles.simpleText}>
            <Ionicons name='nutrition-outline' style={styles.iconContainer}/>
                Planting Options          
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
        padding:20
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
        padding:20,
        borderRadius:15,
        marginBottom:20
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
        padding:20,
        borderRadius:15,
        marginBottom:20
    },
    subButton3:{
        backgroundColor:`#40e0d0`,
        flexDirection: 'row', 
        alignItems: 'center',
        padding:20,
        borderRadius:15,
        marginBottom:20
    },
    subButton4:{
        backgroundColor:`#40e0d0`,
        flexDirection: 'row', 
        alignItems: 'center',
        padding:20,
        borderRadius:15,
        marginBottom:20
    }, 
})
export default Tip