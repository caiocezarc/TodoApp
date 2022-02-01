import React, { useState } from 'react';
import { 
    TouchableOpacity,
    Image, 
    View,
    TouchableOpacity,
    Text
    } from 'react-native';
import styles from './styles';




import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateTimeInput() {
  const [when, setWhen] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || when;
    setWhen(currentDate);
    console.log('WHEN: ' + when);
    console.log('SElectedDate:' + selectedDate);
    
    if(mode === 'date') {
        setDate(format(new Date(selectedDate), 'yyyy-MM-dd'));
        console.log(date);
    } else if(mode === 'time'){
        setHour(format(new Date(selectedDate), 'HH:mm:ss'));
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
  return (
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
  );
};