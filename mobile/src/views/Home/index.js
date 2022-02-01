import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';

// API
import api from '../../services/api';

import styles from './styles';


// Componentes
import Header from '../../components/Header';
import TaskCard from '../../components/TaskCard';
import Footer from '../../components/Footer';

export default function Home({navigation}) {

    const [filter, setFilter] = useState('all');
    const [tasks, setTasks] = useState([]);
    const [load, setLoad] = useState(false);
    const [lateCount, setLateCount] = useState();

    async function LoadTasks() {
        setLoad(true);
        await api.get(`/task/filter/${filter}/22:22:22:22:22:22`)
            .then(response => {
                setTasks(response.data);
                setLoad(false);
            })
            .catch(error => error);
    }

    async function lateVerify() {
        setLoad(true);
        await api.get(`/task/filter/late/11:11:11:11:11`)
            .then(response => {
                setLateCount(response.data.length);
                setLoad(false);
            })
            .catch(error => error);
    }

    function Notification() {
        setFilter('late');
    }

    useEffect(() => {
        LoadTasks();
        lateVerify();
    }, [filter])

    return (
        <View style={styles.container}>
           <Header showNotification={true} showBack={false} pressNotification={Notification} late={lateCount}/>

           <View style={styles.filter}>
                <TouchableOpacity onPress={() => setFilter('all')}>
                    <Text style={filter === 'all' ? styles.filterTextActived : styles.filterTextInative}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('today')}>
                    <Text style={filter === 'today' ? styles.filterTextActived : styles.filterTextInative}>Hoje</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('month')}>
                    <Text style={filter === 'month' ? styles.filterTextActived : styles.filterTextInative}>Mês</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('week')}>
                    <Text style={filter === 'week' ? styles.filterTextActived : styles.filterTextInative}>Semana</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('year')}>
                    <Text style={filter === 'year' ? styles.filterTextActived : styles.filterTextInative}>Ano</Text>
                </TouchableOpacity>
           </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>{filter === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</Text>
            </View>

            <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
                {
                    load ? 
                    <ActivityIndicator color='#EE6B26' size={50}/>
                    :
                    tasks.map(task => (
                        <TaskCard done={false} title={task.title} when={task.when} type={task.type}/>
                    ))
        
                }
            </ScrollView>

           <Footer icon={'add'} navigation={navigation}/>
        </View>
    )
}

