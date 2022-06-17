import * as React from 'react';
import {Button, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
      <Text>Be Aware</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Info')}
      />
      <Button 
        title="Go to calculator"
        onPress={() => navigation.navigate('Calculator')}
      />
    </View>
  );
}

function InfoScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Info Screen</Text>
      <Button title="Done" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

function MainScreen({navigation}) {
  return (
    <View style={{flex:1, justifyContent: 'center', backgroundColor: '#b4cebd'}}>
      <Text style = {{flex: 1, alignItems: 'center', justifyContent: 'flex-start',color: '#b4cebd', fontSize: 75, backgroundColor: '#083316'}}>Your Daily Goal Is: </Text>
      <Text style = {{flex: 1, justifyContent: 'space-around', color: 'white', fontSize: 50, backgroundColor: '#083316'}}>Eat a purely vegetarian meal for lunch today.</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bee Aware">
        <Stack.Screen name="Bee Aware" component={HomeScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Main" component = {MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;