import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Task(props){

    const [isChecked, setChecked] = useState(false);
    const [tickVisible, setTick] = useState(false)

    let checkbox = {
    }

    return(
        <View style = {styles.task_container}>
            <Text style = {styles.task_text}>{props.text}</Text>
            <TouchableOpacity onPress={()=>{isChecked ? setChecked(false) : setChecked(true), tickVisible ? setTick(false) : setTick(true)}}>
                
                <View style = {isChecked ? styles.checkbox_checked : styles.checkbox_unchecked}>
                    {tickVisible ?(
                        <Image source={require('../assets/tick.png')} style = {styles.tick}/>
                    ):null 
                    }
                
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    task_container:{
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:20,
        backgroundColor:"#2a2a2a",
        borderRadius:12,
        flexDirection:"row"
    },
    task_text:{
        fontSize: 15,
        color:"white",
        padding:20,
        width:"80%"
    },
    checkbox_checked:{
        height:20,
        width:20,
        backgroundColor:"gold",
        borderRadius:5,
        margin:20,
        
    },
    checkbox_unchecked:{
        height:20,
        width:20,
        borderColor:"gold",
        borderWidth:1,
        borderRadius:5,
        margin:20
    },
    tick:{
        width:20, height:20
    }
})