import React, { useState, useEffect} from "react";
import { ActivityIndicator, FlatList, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Cards, Container, Search, Text, TextAI } from './styles';
import token from '../../Service/token';
import api  from '../../Service/api';

export default function Plataforma({route}){
  
  const token = route.params.auth;
  const navigation  = useNavigation();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(async() => {
      await api.post("/platforms", "fields name; sort name asc; limit 181;", 
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
    }, []);
    
    function Footer(){
      return(
          <View>
              <ActivityIndicator size={25} color="#424242"/>
          </View>
      )
    }

    return(
        <Container>
            {loading ? (
                <>
                  <Search>
                    <MaterialCommunityIcons name="text-search" size={32} color={'#A0A0A0'}/>
                    <TextInput style={{marginLeft: 2, width: '100%'}} placeholder="Procurar"/>
                  </Search> 
                  <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) =>
                      <TouchableOpacity onPress={() => navigation.navigate("Games",{platform : item.name, index : item.id, token : token})}> 
                        <Cards>
                          <Text key={item.id}>{item.name}</Text>
                        </Cards>
                      </TouchableOpacity>
                    }
                    // onEndReached={Plataforms}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={Footer}
                  />
                </>)
                :
                (<>
                <ActivityIndicator size={60} color={"#424242"} style={{justifyContent: "center", alignItems: 'center', marginTop: 50}}/> 
                <TextAI>Carregando</TextAI> 
                </>)
            }
        </Container>
    )
}