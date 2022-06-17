import React from 'react';
import {Stylesheet, Text, View, TextInput, ViewStyle, 
TextStyle, TextInputProps, Button} from 'react-native';
import { useState } from "react";
import * as App from './App.js';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            electricBill: 0, 
            gasBill: 0,
            oilBill: 0,
            mileage: 0,
            flightsBelow: 0,
            flightsAbove: 0,
            recycleNewspaper: 0, //1 is yes, 2 is no
            recycleAluminum: 0, //1 is yes, 2 is no
            meat: 0, //1 is never, 2 is a few times a month, 3 is a few times a week, 4 is a few times a year
            people: 0,
        }
    }
    render() {
        return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#b4cebd'}}>
            <Text> What is your monthly electric bill?</Text>
            <TextInput
            placeholder="Enter here" 
            onChangeText={(text)=>{this.setState({electricBill:text})}}
            style={{width:500, borderWidth:2, borderColor:'skyBlue', marginTop:5, marginBottom:15, marginHorizontal: 15}}
            />
            <Text> What is your monthly gas bill?</Text>
            <TextInput
            placeholder="Enter here" 
            onChangeText={(text)=>{this.setState({gasBill:text})}}
            style={{width:500, borderWidth:2, borderColor:'skyBlue', marginTop:5, marginBottom:15, marginHorizontal: 15}}
            />
            <Text> What is your monthly oil bill?</Text>
            <TextInput
            placeholder="Enter here" 
            onChangeText={(text)=>{this.setState({oilBill:text})}}
            style={{width:500, borderWidth:2, borderColor:'skyBlue', marginTop:5, marginBottom:15, marginHorizontal: 15}}
            />
            <Text> What is your car's yearly mileage?</Text>
            <TextInput
            placeholder="Enter here" 
            onChangeText={(text)=>{this.setState({mileage:text})}}
            style={{width:500, borderWidth:2, borderColor:'skyBlue', marginTop:5, marginBottom:15, marginHorizontal: 15}}
            />
            <Text> How many flights under 4 hours have you taken in the last year? </Text>
            <TextInput
            placeholder="Enter here" 
            onChangeText={(text)=>{this.setState({flightsBelow:text})}}
            style={{width:500,borderWidth:2, borderColor:'skyBlue', marginTop:5, marginBottom:15, marginHorizontal: 15}}
            />
            <Text> How many flights over 4 hours have you taken in the last year? </Text>
            <TextInput
            placeholder="Enter here" 
            onChangeText={(text)=>{this.setState({flightsAbove:text})}}
            style={{width:500, borderWidth:2, borderColor:'skyBlue', marginTop:5, marginBottom:15, marginHorizontal: 15}}
            />
            <Text> Do you recycle newspaper? </Text>
            <TextInput
            placeholder="1 for yes, 2 for no" 
            onChangeText={(text)=>{this.setState({recycleNewspaper:text})}}
            style={{width:500, borderWidth:2, borderColor:'skyBlue', marginTop:5, marginBottom:15, marginHorizontal: 15}}
            />
            <Text> Do you recycle aluminum? </Text>
            <TextInput
            placeholder="1 for yes, 2 for no" 
            onChangeText={(text)=>{this.setState({recycleAluminum:text})}}
            style={{width:500, borderWidth:2, borderColor:'skyBlue', marginTop:5, marginBottom:15, marginHorizontal: 15}}
            />
            <Text> How often do you eat meat? </Text>
            <TextInput
            placeholder="1 for never, 2 for a few times a month, 2 for a few times a week, 4 for everyday" 
            onChangeText={(text)=>{this.setState({meat:text})}}
            style={{width:500, borderWidth:2, borderColor:'skyBlue', marginTop:5, marginBottom:15, marginHorizontal: 15}}
            />
            <Text>How many people live in your house?</Text>
            <TextInput
            placeholder="Enter here"
            onChangeText={(text)=>{this.setState({people:text})}}
            style={{width:500, borderWidth:2, borderColor:'skyBlue', marginTop:5, marginBottom:15, marginHorizontal: 15}}
            />

        <Button title="submit" onPress={()=> this.props.navigation.navigate('CarbonFootprint', {electricBill:this.state.electricBill, gasBill:this.state.gasBill,
        oilBill:this.state.oilBill, mileage:this.state.mileage, flightsBelow:this.state.flightsBelow, flightsAbove: this.state.flightsAbove, 
        recycleNewspaper:this.state.recycleNewspaper, recycleAluminum:this.state.recycleAluminum, meat:this.state.meat, people:this.state.people,
        })} />
        </View>
        )
    }
}

export default Calculator;