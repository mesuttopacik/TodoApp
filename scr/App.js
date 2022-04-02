import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AddToDo from './components/Screens/AddToDo';
import ShowDoneToDos from './components/Screens/ShowDoneTodos';
import ToDoProvider from './redux/Provider';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <ToDoProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName;

              if (route.name === 'AddToDo') {
                iconName = 'plus-square';
              } else if (route.name === 'ShowDoneToDos') {
                iconName = 'check';
              }
              return <Icon name={iconName} size={30} color={color} />;
            },
            tabBarInactiveTintColor: 'gray',
            headerTintColor: 'rgb(209, 140, 224)',
            tabBarActiveTintColor: 'rgb(209, 140, 224)',
            tabBarStyle: {backgroundColor: '#FFFBE9'},
            headerStyle: {backgroundColor: '#FFFBE9'},
          })}>
          <Tab.Screen
            name="AddToDo"
            component={AddToDo}
            options={{
              title: 'Add To Do',
            }}
          />
          <Tab.Screen
            name="ShowDoneToDos"
            component={ShowDoneToDos}
            options={{
              title: 'Done List',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ToDoProvider>
  );
};
export default App;
