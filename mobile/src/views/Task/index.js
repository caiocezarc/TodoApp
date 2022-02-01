import React, { useState, useEffect} from 'react';


import { View, 
    ScrollView, 
    Image, 
    Text, 
    TextInput, 
    KeyboardAvoidingView,
    TouchableOpacity,
    Switch,
    Alert
} from 'react-native';

import { format } from 'date-fns';

import styles from './styles';

//API
import api from '../../services/api';

import typeIcons from '../../utils/typeIcons';
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

//Componentes 
import Header from '../../components/Header';
import Footer from '../../components/Footer'

import DateTimePicker from '@react-native-community/datetimepicker';

export default function Task({navigation}) {
  const [done, setDone] = useState(false);
  const [macaddress, setMacaddress] = useState('11:11:11:11:11');
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [when, setWhen] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();

  const [lateCount, setLateCount] = useState();

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  
  async function lateVerify() {
      await api.get('/task/filter/late/11:11:11:11:11')
      .then(response => {
          setLateCount(response.data.length);
        })  
    }
    
    async function New() {
        console.log('ENTROU NA FUNÇÃO NEW');
        if(!title) {
            return Alert.alert('Defina o nome da tarefa !')
        }

        if(!description) {
            return Alert.alert('Defina a descrição da tarefa !')
        }
        if(!type) {
            return Alert.alert('Escolha um tipo de tarefa!')
        }

        if(!date || !hour || !when) {
            return Alert.alert('Escolha uma data para tarefa!')
        }

        await api.post('/task', {
            macaddress,
            type,
            title,
            description,
            when: `${date}T${hour}:00.000`
        })
        .then((response) => {
            console.log(response.data);
            navigation.navigate('/')
        })
        .catch(error => {
            console.log(error);
        })
    }

    const onChange = (event, selectedDate) => {
        let currentDate = selectedDate || when;
        setWhen(currentDate);
        console.log('WHEN: ' + when);
        console.log('SElectedDate:' + selectedDate);
        
        if(mode === 'date') {
            setDate(format(new Date(selectedDate), 'yyyy-MM-dd'));
            console.log(date);
        } else if(mode === 'time'){
            setHour(format(new Date(selectedDate), 'HH:mm'));
            console.log(hour);
        }
        
        setShow(false);
    };
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    
    const showDatepicker = () => {
        showMode('date');
    };
    
    const showTimepicker = () => {
        showMode('time');
    };


    useEffect(() => {
        lateVerify();
    })
    

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={true} showNotification={true} navigation={navigation} late={lateCount}/>
            <ScrollView style={{width:'100%'}}>
                <ScrollView horizontal={true} showHorizontalScrollIndicator={false} style={{marginVertical: 10}}>
                    {   
                        
                        typeIcons.map((icon, index) => (
                            icon !== null &&
                            <TouchableOpacity onPress={() => setType(index)}>
                                <Image source={icon} style={[styles.imageIcon, type && type !== index && styles.typeIconInative]}/>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>

                <Text style={styles.label}>Título</Text>
                <TextInput style={styles.input} 
                    maxLength={30} 
                    placeholder="Lembre-me de fazer..."
                    onChangeText={(text) => setTitle(text)}
                />

                <Text style={styles.label}>Detalhes</Text>
                <TextInput style={styles.inputArea} 
                    multiline={true} 
                    maxLength={200} 
                    placeholder="Detalhes da atividade..."
                    onChangeText={(text) => setDescription(text)}
                />
                
                <View style={styles.dateTimeContainer}>         
                    <TouchableOpacity onPress={showDatepicker} style={styles.dateTimeButton}>
                        <Text style={styles.dateTimeButtonText}>
                            {date ? date : 'Selecione a Data'} 
                        </Text>
                        <Image source={iconCalendar} style={styles.dateTimeButtonImage}/>
                    </TouchableOpacity>
                   
                    <TouchableOpacity onPress={showTimepicker} style={styles.dateTimeButton}>
                        <Text style={styles.dateTimeButtonText}>
                        { hour ? hour : 'Selecione a Hora'} 
                        </Text>
                        <Image source={iconClock} style={styles.dateTimeButtonImage}/>
                    </TouchableOpacity>

                    {
                    show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={when}
                            minimumDate={new Date()}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>
                           


                <View style={styles.inLine}>
                    <View style={styles.inputInline}>
                        <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#EE6B26' : '#707070'}/>
                        <Text style={styles.switchLabel}>Concluído</Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.removeLabel}>EXCLUIR</Text>
                    </TouchableOpacity>
                </View>
      

            </ScrollView>

            <Footer icon={'save'} navigation={navigation} onPress={New}/>
        </KeyboardAvoidingView>
    )
} 
