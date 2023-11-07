import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/task';
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';

let task = "";

export default function App() {

  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () =>{
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
    // console.log(task)
  }

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light'></StatusBar>
      <View style = {styles.body_container}>
        <View style = {styles.bar}>
          
          <Text style = {styles.bar_title}>TO-DO</Text>
          <TouchableOpacity onPress={()=>Alert.prompt("Create a Task","Log your task")}>
            <Icon style = {styles.bar_icon} name='form' size={24} color={"gold"}></Icon>
          </TouchableOpacity>
          
        </View>
        <View style = {styles.box1}>
          <Text style= {styles.box1_text}>ALL TASKS</Text>
        </View>
        <ScrollView automaticallyAdjustKeyboardInsets = {true} style = {{width:"90%"}}>
          <View>
            {/* Task List */}
            {
              taskItems.map((item, index) =>{
                return(
                  <TouchableOpacity key = {index} onPress={()=>Alert.alert("Delete Task?", "This task will be permanently deleted", [{text:"Cancel"}, {text:"Delete", style:"destructive", onPress:()=>deleteTask(index)}])}>
                    <Task text = {item}/>
                  </TouchableOpacity>
                
                )
              })
            }
            
          </View>
                  
        </ScrollView>
        

        
      </View>
      
      
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style = {styles.input_box}>
        <TextInput onChangeText={text => setTask(text)} value={task} keyboardAppearance='dark' placeholder='Enter Task' placeholderTextColor="#9a9a9a" style = {styles.input_text}>
        </TextInput>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <Icon style = {styles.bar_icon} name='plus' size={24} color={"gold"}></Icon>
        </TouchableOpacity>    
      </KeyboardAvoidingView>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bar:{
    backgroundColor:"#2a2a2a",
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row"
  },
  bar_title:{
    fontSize:20,
    fontWeight:"bold",
    color:"gold",
    padding:20,
    marginLeft:10,
    letterSpacing:2

  },
  bar_icon:{
    padding:20,
    fontWeight:"400"
  },
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    justifyContent:'flex-end',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  body_container:{
    flex:1,
    backgroundColor:"black",
    justifyContent:"flex-start",
    alignItems:"center"
  },
  box1:{
    height:50,
    width:"100%",
    backgroundColor:"#1a1a1a",
    justifyContent:"center",
  },
  input_box_container:{
    position:"absolute",
    justifyContent:'flex-end',
    alignItems:"center"
  },
  input_box:{
    position:"absolute",
    flexDirection:'row',
    width:"100%",
    backgroundColor:"#1a1a1a",
    justifyContent:"space-between",
  },
  input_text:{
    fontSize:15,
    color:"white",
    margin:20,
    width:"70%"
  },
  box1_text:{
    color:"#9a9a9a",
    marginLeft:20,
    letterSpacing:2,
    fontSize:12
  },
  box2:{
    height:100,
    width:"100%",
    backgroundColor:"tomato"
  },
  bottom_container:{
    justifyContent:"flex-end"
  }
  ,
  box3:{
    height:100,
    width:"100%",
    backgroundColor:"gold"
  }
});
