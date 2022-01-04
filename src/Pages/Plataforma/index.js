import React, { useState, useEffect} from "react";
import { ActivityIndicator, FlatList } from 'react-native';

import { Cards, Container, Text } from './styles';
import token from '../../Service/token'
import api  from '../../Service/api';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Plataforma(){
    
    const [auth, setAuth] = useState();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      token.post("",
        {
          client_id :'f7wh9fp8o60qav6ym4znqy8hp4s6h1' ,
          client_secret : 'in5h4ozdwk9qpat0ovmj7n7xmuzn4v',
          grant_type :'client_credentials'
        })
        .then((response) => setAuth(response.data.access_token))
        .catch((err) => {
          console.error("Ops! " + err);
        });
    }, []);
  
    useEffect(() => {
      api.post("/platform_families", "fields name; sort id asc;", 
      {
        headers: {
            'Client-ID': 'f7wh9fp8o60qav6ym4znqy8hp4s6h1',
            'Content-Type': 'text/plain',
            'Authorization': 'Bearer ' + auth
        }
      })
      .then((response) => { setData(response.data) ; setLoading(true) })
        .catch((err) => {
          console.error("Vish! " + err);
        });
    }, [auth]);

    const handleNome = (nome) => {
      return (nome?.length > 14 ? nome.substring(0,10) + '...' : nome);    
    }

    return(
        <Container>
            {loading ? (
                <>
                  <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={(item, index) => 
                    <Cards>
                      <TouchableOpacity>
                        <Text key={index}>{item.item.name}</Text>
                      </TouchableOpacity>
                    </Cards>}
                    columnWrapperStyle={{ flexWrap: 'wrap', flex: 1, margin : 20  }}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.2}
                  />
                </>)
                :
                (<>
                <ActivityIndicator size={60} color={"#424242"}/> 
                <Text>Carregando</Text> 
                </>)
            }
        </Container>
    )
}