import React from 'react';
import {Stylesheet, Text, View, TextInput, ViewStyle, 
TextStyle, TextInputProps, Button} from 'react-native';
import { useState } from "react";

export default function CarbonFootprint({route, navigation}) {
    const {electricBill, gasBill, oilBill, mileage, flightsBelow, flightsAbove, recycleNewspaper, recycleAluminum, meat, people} = route.params;
    var carbonFootprint = electricBill*105 + gasBill*105 + oilBill*113 + mileage*0.79 + flightsBelow*1100 + flightsAbove*4400;
    if(recycleNewspaper===2) {
        carbonFootprint = carbonFootprint + 184;
    }
    if(recycleAluminum===2) {
        carbonFootprint = carbonFootprint + 166;
    }
    if(meat===4){
        carbonFootprint = carbonFootprint + 200;
    }
    else if(meat===3){
        carbonFootprint = carbonFootprint + 150;
    }
    else if(meat===2){
        carbonFootprint = carbonFootprint + 75;
    }
    carbonFootprint = carbonFootprint / people;

    var text = 'Your carbon footprint is ';
    if(carbonFootprint < 8500) {
        text = text + 'very low! Congratulations'
    }
    else if(carbonFootprint < 18000) {
        text = text + 'ideal! Amazing'
    }
    else if(carbonFootprint < 30000) {
        text = text + 'average. Try to take action to reduce your carbon footprint!'
    }
    else {
        text = text + 'very high. Try to take action to reduce your carbon footprint!'
    }
    return(
        <View style={{flex:1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#b4cebd'}}>
        <Text style={{textAlign: 'center', fontSize: 30}}>Your carbon footprint is {carbonFootprint}</Text> 
        <Text style={{textAlign: 'center', fontSize: 30}}>{text}</Text>
        <Button 
            color="#083316"
            title = "Back to Main Page"
            onPress = {() => navigation.navigate('Main')} 
        /> 
        </View>
    ) 
}
