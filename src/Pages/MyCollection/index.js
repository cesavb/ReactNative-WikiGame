import React, { useState, useEffect} from "react";
import { useNavigation } from '@react-navigation/native';

import { Container, Text, TextTouch } from './styles';

export default function Home(){

    const navigation = useNavigation();

    return(
        <Container>
            <Text>MyCollection</Text>
        </Container>
        
    )
}