import * as React from 'react';
import { SafeAreaView, TextInput, Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calculator from './calculator.js';
import CarbonFootprint from './carbonFootprintInfo.js';
import { ImageBackground } from 'react-native-web';

const goals = ["Have a fully vegetarian lunch today", "Walk back home from your school or office today",
    "Replace all beef you eat today with chicken", "Turn down the heating by 1 degree today", 
    "Shower under 7 minutes today", "Turn off the water when you brush your teeth today", 
    "Turn off the water while cleaning the dishes today", "Do not charge your phone today if it is above 50%",
    "Use a fan instead of air conditioning in your car today", "Carpool to school or office today", 
    "Make sure to not waste any of the food you cook today"];


function HomeScreen({navigation}) {
  const staticImg = require("./assets/fonts/earth.png");
  const beeImg = require("./assets/fonts/bee.png");
  const txt = require("./assets/fonts/beeAware.png");

  return (
    <View style={{ flex:1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#b4cebd' }}>
      <Text style = {{color: "#083316", fontSize: 50, fontFamily: 'blow', fontStyle: 'normal'}}>Bee Aware</Text>
      <Text style = {{color: "#083316", fontSize: 25, fontFamily: 'blow', textAlign: 'center', marginLeft: 25, marginRight: 25}}>
        Bee Aware is an app dedicated to reducing the carbon footprint we take on our planet, accomplished
          through the education of the human impact on climate change and interactive goal setters.
      </Text>
      <Button
        color="#083316"
        title="Start"
        onPress={() => navigation.navigate('Main',"")}
      />
      <Button style={{marginVertical:20}}
        color="#083316"
        title="Learn about carbon footprint"
        onPress={() => navigation.navigate('Learn')}
      />
      <Image 
        source = {staticImg}
        style={{width: 250, height: 250, position: 'absolute', right: 0, bottom: 0}}
       />
      <Image 
        source = {beeImg}
        style={{width: 250, height: 250, position: 'absolute', left: 765, top: 10}}
       />
      <Image 
        source = {txt}
        style={{width: 234, height: 42, marginLeft: 15, marginTop: 15,position: 'absolute', left: 0, top: 0}}
       />
    </View>
  );
}

function Learn({navigation}) {
  const staticImg = require("./assets/fonts/earth.png");
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

      <Button
        color="#083316"
        title="Home"
        onPress={() => navigation.navigate('Bee Aware')}
      />

      <Image 
        source = {staticImg}
        style={{width: 250, height: 250, position: 'absolute', right: 0, bottom: 0}}
       />
    </View>
  )
}

function WhatsCarbonFootprint({navigation}) {
  const staticImg = require("./assets/fonts/earth.png");
  return(
    <View style={{flex:1, justifyContent: "center", backgroundColor: '#b4cebd'}}>
    <Text style={{color: '#083316', fontSize: 40, textAlign: "center", marginTop: 10}}> What is a carbon footprint? </Text>
    <Text style= {{color: '#083316', fontSize: 30, textAlign: "center", marginLeft: 50, marginRight: 50}}> A carbon footprint measures the impact you leave on the environment. 
    Your carbon footprint represents the volume of greenhouse gases that have directly and indirectly resulted from your actions.
     The food you eat, clothes you buy, things that you throw away, and how you commute to places all
    contribute to your carbon footprint.
    According to the Global Footprint Network, the carbon footprint has not stopped growing and the concentration of 
    greenhouse gases in the atmosphere has reached a record high. 
    Carbon footprint is measured in metric tons of carbon dioxide equivalent.
    </Text>
    <Image 
        source = {staticImg}
        style={{width: 250, height: 250, position: 'absolute', right: 0, bottom: 0}}
       />
    </View>
  )
}

function HowToReduce({navigation}) {
  const staticImg = require("./assets/fonts/earth.png");
  return(
    <View style={{flex:1, justifyContent: "center", alignItems: "center", backgroundColor: '#b4cebd'}}>
    <Text style= {{color: '#083316', fontSize: 30, marginBottom: 25}}> There are many ways you can lower your carbon footprint and 
      address the climate issue:
    </Text>
    <Text style={{marginLeft:20, marginVertical:7, color: '#083316', fontSize: 18}}>{'\u2022'} Opt for items with less packaging </Text>
    <Text style={{marginLeft:20, marginVertical:7, color: '#083316', fontSize: 18}}>{'\u2022'} Compost food scrpas </Text>
    <Text style={{marginLeft:20, marginVertical:7, color: '#083316', fontSize: 18}}>{'\u2022'} Swap to a plant based diet or decrease your meat consumption </Text>
    <Text style={{marginLeft:20, marginVertical:7, color: '#083316', fontSize: 18}}>{'\u2022'} Don't waste food, save leftovers for later </Text>
    <Text style={{marginLeft:20, marginVertical:7, color: '#083316', fontSize: 18}}>{'\u2022'} Turn off devices as soon as you are done using them</Text>
    <Text style={{marginLeft:20, marginVertical:7, color: '#083316', fontSize: 18}}>{'\u2022'} Bike or walk to school instead of taking a car </Text>
    <Text style={{marginLeft:20, marginVertical:7, color: '#083316', fontSize: 18}}>{'\u2022'} Consider using renewable energy, such as solar or wind power</Text>
    <Text style={{marginLeft:20, marginVertical:7, color: '#083316', fontSize: 18}}>{'\u2022'} Reduce, reuse, and recycle </Text>
    <Text style={{marginLeft:20, marginVertical:7, color: '#083316', fontSize: 18}}>{'\u2022'} Try growing vegetables in your garden </Text>
    <Text style={{marginLeft:20, marginVertical:7, color: '#083316', fontSize: 18}}>{'\u2022'} Turn down the heat by 1 degree </Text>
    <Text style={{marginLeft:20, marginVertical:7, color: '#083316', fontSize: 18}}>{'\u2022'} Take shorter showers </Text>
    <Text style={{marginLeft:20, marginVertical:7, color: '#083316', fontSize: 18}}>{'\u2022'} Turn down the heat by 1 degree </Text>
    <Text style={{marginLeft:20, marginVertical:7, color: '#083316', fontSize: 18}}>{'\u2022'} Turn off water when you brush your teeth </Text>
    <Text style={{marginLeft:20, marginVertical:7, color: '#083316', fontSize: 18}}>{'\u2022'} Buy responsibly made clothing, clothes that are made from recycled material or have an eco label</Text>
    <Image 
        source = {staticImg}
        style={{width: 250, height: 250, position: 'absolute', right: 0, bottom: 0}}
       />
    </View>
  )
}

function WhyShouldYouCare({navigation}) {
  const staticImg = require("./assets/fonts/earth.png");
  return(
    <View style={{flex:1, backgroundColor: '#b4cebd'}}>
    <View style={{flex:1, justifyContent: "center", alignItems: "center", backgroundColor: '#b4cebd'}}>
    <Text style= {{color: '#083316', fontSize: 18, marginBottom: 25, marginTop: 35, marginLeft: 25, marginRight: 25, textAlign: 'center', width:650}}> 
      Reducing your carbon footprint can make a big impact on the environment.  
      Your carbon footprint measures how much greenhouse gases are emitted from your actions.
      Greenhouse gases contribute to the greenhouse effect, which is when the sun's warmth gets trapped
      in the atmosphere, causing global warming. When the atmosphere heats up, it collects, retains, and drops more water
      changing weather patterns and increasing the frequency of weather disasters.
    </Text>
    <Text style= {{color: '#083316', fontSize: 25, marginBottom: 25, marginTop: 25, textAlign: 'center'}}>
      Effects of climate change: 
    </Text> 
    <View style={{flex: 1}}>
      <Text style={{marginLeft:20, marginVertical:7, color: '#083316', textAlign: 'center', fontSize: 18}}>{'\u2022'} Temperature rises and heat waves </Text>
      <Text style={{marginLeft:20, marginVertical:7, color: '#083316', textAlign: 'center',fontSize: 18}}>{'\u2022'} More droughts </Text>
      <Text style={{marginLeft:20, marginVertical:7, color: '#083316', textAlign: 'center',fontSize: 18}}>{'\u2022'} More wildfires </Text>
      <Text style={{marginLeft:20, marginVertical:7, color: '#083316', textAlign: 'center',fontSize: 18}}>{'\u2022'} Decrease in fresh water quality and quantity </Text>
      <Text style={{marginLeft:20, marginVertical:7, color: '#083316', textAlign: 'center',fontSize: 18}}>{'\u2022'} Floods</Text>
      <Text style={{marginLeft:20, marginVertical:7, color: '#083316', textAlign: 'center',fontSize: 18}}>{'\u2022'} Higher extreme weather events</Text>
      <Text style={{marginLeft:20, marginVertical:7, color: '#083316', textAlign: 'center',fontSize: 18}}>{'\u2022'} Sea level rise</Text>
      <Text style={{marginLeft:20, marginVertical:7, color: '#083316', textAlign: 'center',fontSize: 18}}>{'\u2022'} Biodiversity loss </Text>
      <Text style={{marginLeft:20, marginVertical:7, color: '#083316', textAlign: 'center',fontSize: 18}}>{'\u2022'} Ocean acidification </Text>
    </View>
    </View>
      <Image 
        source = {staticImg}
        style={{width: 250, height: 250, position: 'absolute', right: 0, bottom: 0}}
        />
    
    </View>
  )
}

function MainScreen({navigation, route}) {
  const goal = route.params;

  const staticImg = require("./assets/fonts/earth.png");
 
  if((goal != "write personal goal here") && (goal != "{: 'write personal goal here'}") && (goal != "")
        && (goal != " {str: 'write personal goal here'}") && goal !== undefined){
    console.log("why am i here i shouldn't be here");
    goals.push(goal);
  }

  for(let i = 0; i < goals.length; i++){
    console.log(goals[i]);
  }

  const [myText, setMyText] = React.useState(goals[3]);
  
  return (
    <View style={{flex:1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#b4cebd'}}>
      <Text style = {{color: '#083316', fontSize: 75, fontFamily: 'blow'}}>Today's Goal: </Text>
      <Text style = {{color: 'white', fontSize: 50 }}>
        {goals[parseInt(Math.random()*goals.length)]}
      </Text>
      <Button
        color="#083316"
        title="SHUFFLE"
        onPress={() => setMyText(goals[parseInt(Math.random()*goals.length)])}
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
      
      <Image 
        source = {staticImg}
        style={{width: 250, height: 250, position: 'absolute', right: 0, bottom: 0}}
       />
    </View>
  );
  
}

function SubmitPersonalScreen({navigation}) {
  const staticImg = require("./assets/fonts/earth.png");
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");
  return(
    <View style={{flex:1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#b4cebd'}}>
        <Text style = {{color: '#083316', fontSize: 75, fontFamily: 'blow'}}>Submit Your Personal Goal: </Text>
        <SafeAreaView>
            <TextInput
            style = {{width: 600, height: 100}}
            onChangeText={onChangeNumber}
            value={number}
            multiline = {true}
            numberOfLines = {6}
            placeholder="Type goal here"
            keyboardType="numeric"
            />
        </SafeAreaView>
        <Button 
            color="#083316"
            title = "Submit Goal"
            onPress = {() => navigation.navigate('Main', number)} 
        />
        
        <Image 
        source = {staticImg}
        style={{width: 250, height: 250, position: 'absolute', right: 0, bottom: 0}}
       />
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

