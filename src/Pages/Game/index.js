import React, { useState, useEffect} from "react";
import { Dimensions } from 'react-native';
import { Container, Text } from './styles';

const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
}

export default function Games(){

    const [Orientation, setOrientation] = useState(
        isPortrait() ? 'PORTRAIT' : 'lANDSCAPE',
    );

    useEffect(() => {
        const callback = () => setOrientation(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE');
        Dimensions.addEventListener('change', callback);

        return () => {
            Dimensions.remove('change', callback);
          };
      }, []);

    return(
        <Container>
            <Text>Testando game</Text>
        </Container>
        
    )
}