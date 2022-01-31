import React from 'react';
import * as S from './styles';

import api from '../../services/api';
import { format } from 'date-fns';
import { useParams, Navigate} from 'react-router-dom';
import TypeIcons from '../../utils/typeIcons';

import isConnected from '../../utils/isConnected';

import ITaskData from '../../types/task.type';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const Task: React.ElementType = () => {
    const [type, setType] = React.useState<number | any>();
    const [done, setDone] = React.useState<boolean>();
    const [title, setTitle] = React.useState<string>();
    const [description, setDescription] = React.useState<string>();
    const [date, setDate] = React.useState<string>();
    const [hour, setHour] = React.useState<string>();
    const [redirect, setRedirect] = React.useState<boolean>(false);
    const [macaddress, setMacaddress] = React.useState<string>('11:11:11:11:11');
    const { id } = useParams<string>();

    async function LoadTaskDetails() {
        await api.get(`/task/${id}`)
            .then(response => {
                setType(response.data.type);
                setTitle(response.data.title);
                setDone(response.data.done);
                setDescription(response.data.description);
                setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
                setHour(format(new Date(response.data.when), 'HH:mm'));
            })
    }


    async function Remove() {
        const res = window.confirm('Tem certeza que deseja excluir a tarefa ?')
        if(res) {
            await api.delete(`/task/${id}`)
                .then(() => setRedirect(true))
        }
    }

    async function Save() {
        if(!type) {
            alert("Selecione o tipo da tarefa !");
        }else if(!title) {
            alert("Escreva o título da tarefa !");
        }else if(!description) {
            alert("Escreva a descrição da tarefa !");
        }else if(!date) {
            alert("Selecione a data da tarefa !");
        }else if(!hour) {
            alert("Selecione a hora da tarefa !");
        }

        if(id) {
            await api.put(`/task/${id}`, {
                macaddress: isConnected,
                type,
                done,
                title,
                description,
                when: `${date}T${hour}:00.000`   
            }).then(() => setRedirect(true));
        } else {
            await api.post<ITaskData>(`/task`, {
                macaddress: isConnected,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`   
            }).then(() => {
                setRedirect(true);
                alert('Tarefa Cadastrada com sucesso!');
            })
        }
    }

    React.useEffect(() => {
        if(!isConnected){
            setRedirect(true);
        }

        LoadTaskDetails();
    }, [])   

    return (
       <S.Container>
           {redirect && <Navigate to="/"/>}
           <Header />   
            <S.Form>
                <S.TypeIcons>
                {
                        TypeIcons.map((icon: string, index: number)=> (
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
                    <input type="text" placeholder="Título da tarefa..."
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)} 
                        value={title}
                    />

                </S.Input>

                <S.TextArea>
                    <span>Descrição</span>
                    <textarea rows={5} placeholder="Detalhes da tarefa..."
                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(event.target.value)}
                        value={description}
                    />
                </S.TextArea>

                <S.Input>
                    <span>Data</span>
                    <input type="date" placeholder="Data da tarefa..."
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
                        value={date}
                    />
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input type="time" placeholder="Hora da tarefa..." 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setHour(event.target.value)}
                        value={hour}
                    />
                </S.Input>

                <S.Options>
                    <div>
                        <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
                        <span>CONCLUÍDO</span>
                    </div>
                   {id && <button type="button" onClick={Remove}>EXCLUIR</button>}
                </S.Options>

                <S.Save>
                    <button type="button" onClick={Save}>SALVAR</button>
                </S.Save>

            </S.Form>
           <Footer />
       </S.Container>
    )
}
export default Task;