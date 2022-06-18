import React from 'react';
import {Stylesheet, Text, View, TextInput, ViewStyle, 
TextStyle, TextInputProps, Button, Image} from 'react-native';
import { useState } from "react";

export default function CarbonFootprint({route, navigation}) {
    const {electricBill, gasBill, oilBill, mileage, flightsBelow, flightsAbove, recycleNewspaper, recycleAluminum, meat, people} = route.params;
    const staticImg = require("./assets/fonts/earth.png");
    const low = require("./assets/fonts/lowFootprint.png");
    const ideal = require("./assets/fonts/idealFootprint.png");
    const average = require("./assets/fonts/averageFootprint.png");
    const high = require("./assets/fonts/highFootprint.png");
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
    var img;
    if(carbonFootprint < 8500) {
        text = text + 'very low! Congratulations'
        img = low;
    }
    else if(carbonFootprint < 18000) {
        text = text + 'ideal! Amazing'
        img = ideal;
    }
    else if(carbonFootprint < 30000) {
        text = text + 'average. Try to take action to reduce your carbon footprint!'
        img = average;
    }
    else {
        text = text + 'very high. Try to take action to reduce your carbon footprint!'
        img = high;
    }
    carbonFootprint = Math.round(carbonFootprint)

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#b4cebd'}}>
        <Text style= {{color: '#083316', fontSize: 30, textAlign: "center", marginLeft: 50, marginRight: 50}}>your carbon footprint is {carbonFootprint}</Text> 
        <Text style= {{color: '#083316', fontSize: 30, textAlign: "center", marginLeft: 50, marginRight: 50}}>{text}</Text>
        <Image 
        source = {img}
        style={{width:300, height:250}}
       />
        <Image 
        source = {staticImg}
        style={{width: 250, height: 250, position: 'absolute', right: 0, bottom: 0}}
       />
        </View>
    ) 
}