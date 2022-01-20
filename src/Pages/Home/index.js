import React, { useState, useEffect} from "react";
import { useNavigation } from '@react-navigation/native';

import { Container, Text, TextTouch } from './styles';
import token from '../../Service/token';

export default function Home(){

    const navigation = useNavigation();
    let auth = "" ; 

    useEffect(async() => {
        await token.post('', {
            client_id :'f7wh9fp8o60qav6ym4znqy8hp4s6h1' ,
            client_secret : 'in5h4ozdwk9qpat0ovmj7n7xmuzn4v',
            grant_type :'client_credentials'
        })
        .then((response) => auth = response.data.access_token)
        .catch((err) => {
          console.error("Ops! " + err);
        });
    }, []);

    return(
        <Container>
            <TextTouch onPress={() => navigation.navigate('MyCollection',{auth : auth})}>
                <Text>Minha Coleção</Text>
            </TextTouch>
            <TextTouch onPress={() => navigation.navigate('Plataforma', {auth : auth})}>
                <Text>Plataforma</Text>
            </TextTouch>
        </Container>
        
    )
}