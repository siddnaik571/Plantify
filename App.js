import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {useFonts} from 'expo-font'
import Login from './screens/Login';
import Signup from './screens/Signup';
import CommunityTimeline from './screens/CommunityTimeline';
import AskCommunity from './screens/AskCommunity';
import IndividualQuery from './screens/IndividualQuery'
import DetectionScreen from './screens/DetectionScreen';
import Detection from './screens/Detection';
import DetectionScreen2 from './screens/DetectionScreen2';
import ForgotPassword from './screens/ForgotPassword';
import HomeScreen from './screens/HomeScreen';
import Scanner from './screens/Scanner'
import PlantCareTips from './screens/PlantCareTips';
import DiseaseInfo from './screens/DiseaseInfo';
import SingleDB from './screens/SingleDB';
import DiseaseBox from './components/DiseaseBox';
import { COLORS, FONTS, SIZES } from './constants'
import { TabBar } from './components';
import UserProfile from './screens/UserProfile';
import ImageUpload from './screens/ImageUpload';
import EditProfile from './screens/EditProfile';
import Help from './screens/Help';
import Guide2 from './screens/temp';
import Garden from './screens/Garden';
import Tip from './screens/Tip';
import Balcony from './screens/Balcony'; 
import Disease from './screens/DIsease';
import Ionicons from '@expo/vector-icons/Ionicons'


const Stack=createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const theme={
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent"
    }
}



export default function App() {
    const [loaded]=useFonts({
        InterBold: require('./assets/fonts/Inter-Bold.ttf'),
        InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
        InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
        InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
        InterLight: require('./assets/fonts/Inter-Light.ttf')
    }) 

    if(!loaded) return null;

    return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Signup">
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='Scanner' component={Scanner}/>
        <Stack.Screen name="MainTabs">
          {
            ()=>(
              <Tab.Navigator 
                  screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: COLORS.primary,
                    tabBarInactiveTintColor: COLORS.grayneutral,
                    tabBarStyle: { height: 60, elevation: 0},
                  }}
              >
                <Tab.Screen name="Tab1" options={{tabBarIcon: ({ color, focused })=><Ionicons name={focused? 'home':'home-outline'} color={color} size={27}/>, tabBarShowLabel: false,}}>
                    {
                        ()=>(
                          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="HomeScreen">
                            <Stack.Screen name='Detection' component={Detection}/>
                            <Stack.Screen name='DetectionScreen' component={DetectionScreen}/>
                            <Stack.Screen name='DetectionScreen2' component={DetectionScreen2}/>
                            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                            {/* <Stack.Screen name='Scanner' component={Scanner}/> */}
                            <Stack.Screen name='DiseaseInfo' component={DiseaseInfo}/>
                            <Stack.Screen name='DiseaseBox' component={DiseaseBox}/>
                            <Stack.Screen name='Disease' component={Disease}/>
                            <Stack.Screen name='SingleDB' component={SingleDB}/>
                            <Stack.Screen name='Help' component={Help}/>
                          </Stack.Navigator>
                        )
                    }
                </Tab.Screen>
                <Tab.Screen name="Tab2" options={{tabBarIcon: ({ color, focused })=><Ionicons name={focused?'people':'people-outline'} color={color} size={27}/>, tabBarShowLabel: false,}}>
                    {
                        ()=>(
                          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="CommunityTimeline">
                            <Stack.Screen name='CommunityTimeline' component={CommunityTimeline}/>
                            <Stack.Screen name='AskCommunity' component={AskCommunity}/>
                            <Stack.Screen name='IndividualQuery' component={IndividualQuery}/>
                          </Stack.Navigator>
                        )
                    }
                </Tab.Screen>
                <Tab.Screen name="Tab3" options={{tabBarIcon: ({ color, focused })=><Ionicons name={focused?'person':'person-outline'} color={color} size={27}/>, tabBarShowLabel: false,}}>
                    {
                        ()=>(
                          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="CommunityTimeline">
                            <Stack.Screen name='UserProfile' component={UserProfile}/>
                            <Stack.Screen name='EditProfile' component={EditProfile}/>
                            <Stack.Screen name='ImageUpload' component={ImageUpload}/>
                          </Stack.Navigator>
                        )
                    }
                </Tab.Screen>
              </Tab.Navigator>
            )
          }
        </Stack.Screen>
      </Stack.Navigator>
      {/* <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Signup">
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='CommunityTimeline' component={CommunityTimeline}/>
        <Stack.Screen name='AskCommunity' component={AskCommunity}/>
        <Stack.Screen name='IndividualQuery' component={IndividualQuery}/>
        <Stack.Screen name='DetectionScreen' component={DetectionScreen}/>
        <Stack.Screen name='DetectionScreen2' component={DetectionScreen2}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='Scanner' component={Scanner}/>
        <Stack.Screen name='PlantCareTips' component={PlantCareTips}/>
        <Stack.Screen name='DiseaseInfo' component={DiseaseInfo}/>
        <Stack.Screen name='SinglePCT' component={SinglePCT}/>
        <Stack.Screen name='DiseaseBox' component={DiseaseBox}/>
        <Stack.Screen name='SingleDB' component={SingleDB}/>
        <Stack.Screen name='UserProfile' component={UserProfile}/>
        <Stack.Screen name='EditProfile' component={EditProfile}/>
        <Stack.Screen name='ImageUpload' component={ImageUpload}/>
        <Stack.Screen name='Guide2' component={Guide2}/>
        <Stack.Screen name='TabBar' component={TabBar}/>
        <Stack.Screen name='Garden' component={Garden}/>
        <Stack.Screen name='Tip' component={Tip}/>
        <Stack.Screen name='Balcony' component={Balcony}/>
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
