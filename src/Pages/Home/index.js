import React, { useState, useEffect} from "react";
import { useNavigation } from '@react-navigation/native';

import { Container, Text, TextTouch } from './styles';

export default function Home(){

    const navigation = useNavigation();

    return(
        <Container>
            <TextTouch onPress={() => navigation.navigate('MyCollection')}>
                <Text>Minha Coleção</Text>
            </TextTouch>
            <TextTouch onPress={() => navigation.navigate('Games')}>
                <Text>Games</Text>
            </TextTouch>
            <TextTouch onPress={() => navigation.navigate('Plataforma')}>
                <Text>Plataforma</Text>
            </TextTouch>
        </Container>
        
    )
}