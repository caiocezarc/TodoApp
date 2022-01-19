import React, { useState, useEffect} from 'react';
import { useParams, Navigate} from 'react-router-dom';
import { format } from 'date-fns';
import * as S from './styles';

import api from '../../services/api';
import TypeIcons from '../../utils/typeIcons';

import isConnected from '../../utils/isConnected';

//Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// import iconCalendar from '../../assets/calendar.png';
// import iconClock from '../../assets/clock.png';

function Task() {
    // const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    const [taskId, setTaskId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [redirect, setRedirect] = useState(false);

    const { id } = useParams();

    async function LoadTaskDetails() {
        await api.get(`/task/${id}`)
        .then(response => {
            setType(response.data.type)
            setTitle(response.data.title)
            setDescription(response.data.description)
            setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
            setHour(format(new Date(response.data.when), 'HH:mm'))
            setDone(response.data.done);
        })
    }
  
    // async function lateVerify() {
    //     await api.get('/task/filter/late/11:11:11:11:11')
    //     .then(response => {
    //       setLateCount(response.data.length);
    //     })
    //   }

    async function Save() {

        //Validação dos dados
        if(!type)
            return alert("Você precisa selecionar o tipo da tarefa")
        else if(!title)
            return alert("Você precisa informar o título da tarefa")
        else if(!description)
            return alert("Você precisa informar a descrição da tarefa")    
        else if(!date)
            return alert("Você precisa informar a data da tarefa") 
        else if(!hour)
            return alert("Você precisa informar a hour da tarefa")


        if(id) {
            await api.put(`/task/${id}`, {
                macaddress: isConnected,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`,
                done
            }).then(() => {
                setRedirect(true)
            })

        } else {
            await api.post('/task', {
                macaddress: isConnected,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            })
            .then(() =>{
                setRedirect(true)
            })
        }

    }

    async function Remove() {
        const res = window.confirm('Deseja remover a tarefa?');
        if(res === true) {
            await api.delete(`/task/${id}`)
            .then(() => {
                setRedirect(true);
            })
        }
    }

    useEffect(() => {
        LoadTaskDetails();
        if(!isConnected) {
            setRedirect(true);
        }
        // lateVerify();
    }, [])

    return (
      <S.Container>
          { redirect && <Navigate to="/" />}
        <Header /*lateCount={lateCount}*//>
            <S.Form>
                <S.TypeIcons>
                    {
                        TypeIcons.map((icon, index )=> (
                            index > 0 && 
                            <button type="button" onClick={() => setType(index)}>
                                <img src={icon} alt="tipo da tarefa" 
                                    className={type && type !== index && 'inative'}
                                />
                            </button>
                        ))
                    }
                </S.TypeIcons>
                
                <S.Input>
                    <span>Título</span>
                    <input type="text" placeholder="Título da tarefa..." onChange={e => setTitle(e.target.value)} value={title}/>
                </S.Input>

                <S.TextArea>
                    <span>Descrição</span>
                    <textarea rows={5} placeholder="Detalhes da tarefa..." onChange={e => setDescription(e.target.value)} value={description}/>
                </S.TextArea>

                <S.Input>
                    <span>Data</span>
                    <input type="date" placeholder="Data da tarefa..." onChange={e => setDate(e.target.value)} value={date}/>
                    {/* <img src={iconCalendar} alt="Calendário"/> */}
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input type="time" placeholder="Hora da tarefa..." onChange={e => setHour(e.target.value)} value={hour}/>
                    {/* <img src={iconClock} alt="Relógio"/> */}
                </S.Input>
                
                <S.Options>
                    <div>
                        <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
                        <span>CONCLUÍDO</span>
                    </div>

                    { id && <button type="button" onClick={Remove}>EXCLUIR</button>}
                </S.Options> 
                
                <S.Save>
                    <button type="button" onClick={Save}>SALVAR</button>
                </S.Save>

            </S.Form>
        <Footer/>
      </S.Container>
    )
    
  }
  
export default Task;
  