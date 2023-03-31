import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'gray' }} >Home!</Text>
        </View>
    );
}

function TrackerScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'gray' }} >Tracker!</Text>
        </View>
    );
}

function FitnessScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'gray' }} >Fitness!</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'gray' }} >Profile!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

type TabScreen = {
    name: string;
    component: any;
    icon: string;
}

const tabScreenList: TabScreen[] = [
    {
        name: "Home",
        component: { HomeScreen },
        icon: "home"
    },
    {
        name: "Tracker",
        component: { TrackerScreen },
        icon: "flower",
    },
    {
        name: "Fitness",
        component: { FitnessScreen },
        icon: "fitness",
    },
    {
        name: "Profile",
        component: { ProfileScreen },
        icon: "person",
    },
]



export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    
                    tabBarIcon: ({ focused, color, size }) => {

                        switch (route.name) {
                            case "Home":
                                return <Ionicons name={ focused ? 'home' : 'home-outline'} size={size} color={color} />
                            case "Tracker":
                                return <MaterialCommunityIcons name={ focused ? 'water' : 'water-outline'} size={size} color={color} />
                                //return <MaterialCommunityIcons name={ focused ? 'flower-pollen' : 'flower-pollen-outline'} size={size} color={color} />
                            case "Fitness":
                                return <Ionicons name={ focused ? 'fitness' : 'fitness-outline'} size={size} color={color} />
                            case "Food":
                                return <MaterialCommunityIcons name={ focused ? 'cookie' : 'cookie-outline'} size={size} color={color} />
                            case "Graph": 
                                return <MaterialCommunityIcons name={ focused ? 'clipboard-pulse' : 'clipboard-pulse-outline'} size={size} color={color} />
                            case "Profile":
                                return <MaterialCommunityIcons name={ focused ? 'account-heart' : 'account-heart-outline'} size={size} color={color} />
                                //return <MaterialCommunityIcons name={ focused ? 'account-cowboy-hat' : 'account-cowboy-hat-outline'} size={size} color={color} />
                        }
                    },
                    
                    tabBarInactiveTintColor: '#2F4F4F', // DarkSlateGrey
                    tabBarActiveTintColor: '#FF69B4', // HotPink
                })}
            >
                <Tab.Screen name="Fitness" component={FitnessScreen} />
                <Tab.Screen name="Tracker" component={TrackerScreen} />
                {/*<Tab.Screen name="Food" component={HomeScreen} /> */}
                <Tab.Screen name="Graph" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}