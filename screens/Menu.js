import {StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {Appbar} from 'react-native-paper';
import {Switch} from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const Menu = () => {
    const [isActive, setIsActive] = useState(false)
    const [isNotification, setIsNotification] = useState(false)

    const _goBack = () => {
        console.log('go back')
    }
    const onToggleActive = () =>{
        setIsActive(!isActive)
    }
    const onToggleNotification = () =>{
        setIsNotification(!isNotification)
    }
    
  return (
    <View style={styles.mainContainer}>
        <Appbar.Header style={{backgroundColor: 'orange'}}>
        <Appbar.BackAction onPress={_goBack} color='white' />
        <Appbar.Content title="coachEMMY" color='white'/>
        </Appbar.Header>

        <View style= {styles.cardContainer}>
            <View>
                <Text style = {styles.me}>Active</Text>
                <Text>Turn active to receive new tasks</Text>
            </View>
            <Switch value={isActive} onValueChange={onToggleActive} color ='blue' />
        </View>

        <View style= {styles.cardContainer}>
            <View>
                <Text style = {styles.me}>Notification</Text>
                <Text>Keep your notifications on or off</Text>
            </View>
            <Switch value={isNotification} onValueChange={onToggleNotification} color ='blue' />
        </View>

        <View style= {styles.cardContainer}>
                <Text style = {styles.me}>Profile</Text>
                <MaterialIcons name='chevron-right' size={32} color='gray'/>
        </View>

        <View style= {styles.cardContainer}>
                <Text style = {styles.me}>Admin Panel</Text>
                <MaterialIcons name='chevron-right' size={32} color='gray'/>
        </View>
    </View>
  )
}
export default Menu

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    }, 
    me:{
        fontSize: 20,
        fontWeight: '500'
    },
    cardContainer:{
        padding: 21,
        margin: 20,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: 'gray',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.9,
        shadowRadius: 7 
    }
})