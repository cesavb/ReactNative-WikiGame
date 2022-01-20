import React, { useState, useEffect} from "react";
import { ActivityIndicator, FlatList, View } from 'react-native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Cards, Container, Search, Text, TextAI } from './styles';
import api  from '../../Service/api';
import InfoGame from "../../Components/InfoGame";

export default function Games({route}){
    const platform = route.params.platform;
    const token = route.params.token;
    const Index = route.params.index;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(async() => {
        await api.post("/games", "fields name, platforms, cover, videos, storyline, summary; sort name asc; where platforms = "+ Index + "; limit 100;", 
        {
            headers: {
                'Client-ID': 'f7wh9fp8o60qav6ym4znqy8hp4s6h1',
                'Content-Type': 'text/plain',
                'Authorization': 'Bearer ' + token
            }
        })
        .then((response) => { setData(response.data) ; setLoading(true) })
            .catch((err) => {
            console.error("Vish! " + err);
            });
        }, [Index]);
        
        function Footer(){
        return(
            <View>
                <ActivityIndicator size={25} color="#424242"/>
            </View>
        )
        }

        return(
            <Container>
                { loading ? (
                    <>
                    <Text>Bem vindo a plataforma {platform}</Text>
                    <Search>
                        <MaterialCommunityIcons name="text-search" size={32} color={'#A0A0A0'}/>
                        <TextInput style={{marginLeft: 2, width: '100%'}} placeholder="Procurar"/>
                    </Search> 
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={(item) => {
                            return (
                            <TouchableOpacity onPress={}>
                                <Cards>
                                    <Text style={{textAlign:'center'}} key={item.item.id}>{item.item.name}</Text>
                                </Cards>
                            </TouchableOpacity>
                        )}
                        }
                        // onEndReached={Plataforms}
                        showsVerticalScrollIndicator={false}
                        onEndReachedThreshold={0.5}
                        ListFooterComponent={Footer}
                    />
                    </>)
                    :
                    (<>
                    <ActivityIndicator size={60} color={"#424242"} style={{justifyContent: "center", alignItems: 'center', marginTop: 5}}/> 
                    <TextAI>Carregando</TextAI> 
                    </>)
                }
            </Container>
        )
}