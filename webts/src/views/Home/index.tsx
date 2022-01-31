import React from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

import api from '../../services/api';

import { Link, Navigate } from 'react-router-dom';

import isConnected from '../../utils/isConnected';

import ITaskData from '../../types/task.type';


const Home: React.ElementType = () => {
    const [filterActived, setFilterActived] = React.useState<string>('all');   
    const [tasks, setTasks] = React.useState<Array<ITaskData>>([]);
    const [redirect, setRedirect] = React.useState<boolean>();
    async function loadTasks(){
        await api.get<Array<ITaskData>>(`/task/filter/${filterActived}/${isConnected}`)
        .then(response => {
            setTasks(response.data);
        })
        .catch(error => error);
    }

    function clickNotification() {
        setFilterActived('late');
    }

    React.useEffect(() => {
        loadTasks();

        if(!isConnected) {
            setRedirect(true);
        }

    }, [filterActived])

    return (
       <S.Container>
           {redirect && <Navigate to="/qrcode"/>}
           <Header clickNotification={clickNotification}/>
           <S.FilterArea>
            <button onClick={() => setFilterActived("all")}>
                <FilterCard title={"Todos"} actived={filterActived === "all"} />
            </button>
            <button onClick={() => setFilterActived("today")}>
                <FilterCard title={"Dia"} actived={filterActived === "today"} />
            </button>
            <button onClick={() => setFilterActived("month")}>
                <FilterCard title={"Mês"} actived={filterActived === "month"} />
            </button>
            <button onClick={() => setFilterActived("week")}>
                <FilterCard title={"Semana"} actived={filterActived === "week"} />
            </button>
            <button onClick={() => setFilterActived("year")}>
                <FilterCard title={"Ano"} actived={filterActived === "year"}/>
            </button>
           </S.FilterArea>

           <S.Title>
               <h3>{filterActived === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
           </S.Title>

           <S.Content>
               {
                   tasks.map((task: ITaskData, index: number) => (
                    <Link to={`/task/${task._id}`}>
                        <TaskCard type={task.type} title={task.title} when={task.when} done={task.done}/>
                    </Link>
                   ))
               }
           </S.Content>

           <Footer/>
       </S.Container>
    )
}

export default Home;