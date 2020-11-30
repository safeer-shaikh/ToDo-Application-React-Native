import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, } from 'react-native';
import { useState , useEffect } from 'react';

export default function App() {

  const [todos, setTodo] = useState([
  {title: 'Exercise',edit: false,},
  {title: 'TakeBath',edit: false,},
  {title: 'breakfast',edit: false},
  //'Work',
  // 'Coffee Break',
  // 'Back to Work',
  // 'Off from the Work',
  // 'Gym',
  // 'Bath',
  // 'read Book',
  ]);

  const [value, setValue] = useState('');

  const add_todo = ()=>{
    var obj = {title: value, edit: false}
    setTodo([...todos, obj])
    setValue('')
    console.log(todos)
  }

  const delete_todo = (index)=>{
    var array = todos
    array.splice(index, 1)
    setTodo([...array])
    console.log(array)
  }

  // console.log(todos)
  // console.log(todos.length)
  return (
    <ScrollView>
    <View style={styles.container}>

      {/* <StatusBar style="auto" /> */}

      <View style={styles.header}>
        <View>
          <Text style={styles.header_text}>ToDo Application</Text>
        </View>
      </View>

      <View>

        <View style={styles.input_div}>
          <TextInput style={styles.input} placeholder='type todo...' value={value} onChangeText={title=> setValue(title)} />
          <TouchableOpacity style={styles.add_btn} onPress={add_todo}>
            <Text style={styles.add_btn_text}>Add</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.main_body}>
          {
            todos.map((v,i)=>{
              return(
                <View style={styles.content} key={i}>
                  <Text style={styles.content_text}>{v.title}</Text>
                  <TouchableOpacity style={styles.delete_btn} activeOpacity={0.6} key={i} onPress={()=>delete_todo(i)} >
                    <Text style={styles.delete_btn_text}>Delete</Text>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </View>


      </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    backgroundColor: '#106466',
  },
  header_text:{
    color: '#fff',
    padding: 30,
    fontSize: 22,
    textAlign: "center",
  },
  input_div: {
    height: 50,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    fontSize: 20,
    backgroundColor: '#E3E5E6',
    width: "80%",
    textAlign: "center",
    flexWrap: "wrap",
    borderRadius: 20,
  },
  add_btn: {
    backgroundColor: '#106466',
    width: '20%',
    borderRadius: 20,
  },
  add_btn_text: {
    color: '#fff',
    textAlign: "center",
    fontSize: 18,
    flexWrap: "wrap",
    marginTop: 10,
  },
  content:{
    flexDirection: "row",
    height: 50,
    marginTop: 10,
    backgroundColor: '#C2CAD0',
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  content_text:{
    width: 200,
    marginLeft: 20,
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
  },  
  delete_btn:{
    backgroundColor: '#D00505',
    width: "20%",
    height: 40,
    borderRadius: 10,
    marginLeft: 40,
    marginTop: 5,
  },
  delete_btn_text:{
    color: '#fff',
    textAlign: "center",
    fontSize: 18,
    flexWrap: "wrap",
    marginTop: 6,
  },
});
