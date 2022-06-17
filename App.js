import * as React from 'react';
import {Button, View, Text} from 'react-native';
import Calculator from './calculator.js';
import CarbonFootprint from './carbonFootprintInfo.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Learn({navigation}) {
  return(
    <View style={{flex:1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#b4cebd'}}>
      <Button
        color="#083316"
        title="What is a carbon footprint?"
        onPress={() => navigation.navigate('WhatIsCarbonFootprint')}
      />

      <Button 
        color="#083316"
        title="How do you reduce your carbon footprint?"
        onPress={() => navigation.navigate('HowToReduce')}
      />

      <Button
        color="#083316"
        title="Why does carbon footprint matter?"
        onPress={() => navigation.navigate('WhyShouldYouCare')}
      />
    </View>
  )
}

function WhatsCarbonFootprint({navigation}) {
  return(
    <Text> A carbon footprint measures the impact you leave on the environment. 
    Your carbon footprint is measured by multiple factors, including the amount of greenhouse gases
    emitted by your actions. The food you eat, clothes you buy, things that you throw away, and how you commute to places all
    contribute to your carbon footprint.
    </Text>
  )
}

function HowToReduce({navigation}) {
  return(
    <Text> hi </Text>
  )
}

function WhyShouldYouCare({navigation}) {
  return(
    <Text> hi </Text>
  )
}


function HomeScreen({navigation}) {
  const staticImg = require("./assets/fonts/earth.png");
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
      <Text>Bee Aware</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Main')}
      />
      <Button
        title="Learn about carbon footprint"
        onPress={() => navigation.navigate('Learn')}
      />
    </View>
  );
}

function MainScreen({navigation}) {

  const goals = ["Have a fully vegetarian lunch today", "Walk back home from your school or office today",
    "Replace all beef you eat today with chicken", "Turn down the heating by 1 degree today", 
    "Shower under 7 minutes today", "Turn off the water when you brush your teeth today", 
    "Turn off the water while cleaning the dishes today", "Do not charge your phone today if it is above 50%",
    "Use a fan instead of air conditioning in your car today", "Carpool to school or office today", 
    "Make sure to not waste any of the food you cook today"];
  
  return (
    <View style={{flex:1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#b4cebd'}}>
      <Text style = {{color: '#083316', fontSize: 75, fontFamily: 'blow'}}>Today's Goal: </Text>
      <Text style = {{color: 'white', fontSize: 50 }}>{goals[3]}</Text>
      <Button
        color="#083316"
        title="SHUFFLE"
        onPress={() => navigation.navigate('Main')}
      />

      <Button 
        color="#083316"
        title="Submit a Personal Goal of Yours"
        onPress={() => navigation.navigate('Goal')}
      />

      <Button
        color="#083316"
        title="Calculate Your Carbon Footprint"
        onPress={() => navigation.navigate('Calculator')}
      />

      <Button
        color="#083316"
        title="Home"
        onPress={() => navigation.navigate('Bee Aware')}
      />
      
    </View>
  );
  
}

function SubmitPersonalScreen({navigation}) {
  return(
    <View style={{flex:1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#b4cebd'}}>
        <Text style = {{color: '#083316', fontSize: 75, fontFamily: 'blow'}}>Submit Your Personal Goal: </Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bee Aware">
        <Stack.Screen name="Bee Aware" component={HomeScreen} />
        <Stack.Screen name="Main" component = {MainScreen} />
        <Stack.Screen name="Calculator" component = {Calculator} />
        <Stack.Screen name = "Goal" component = {SubmitPersonalScreen} />
        <Stack.Screen name="CarbonFootprint" component = {CarbonFootprint} />
        <Stack.Screen name="Learn" component = {Learn} />
        <Stack.Screen name="WhatIsCarbonFootprint" component = {WhatsCarbonFootprint}/>
        <Stack.Screen name="HowToReduce" component={HowToReduce}/>
        <Stack.Screen name="WhyShouldYouCare" component={WhyShouldYouCare}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

