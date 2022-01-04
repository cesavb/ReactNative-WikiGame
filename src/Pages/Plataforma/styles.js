import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.SafeAreaView`
    background-color: #FFFFFF;
    flex: 1;
`;

export const Text = styled.Text`
    font-weight: bold;
    color: #5F5F5F;
    text-align: center;
    font-size: 18px;
`;

export const Cards = styled.View`
    background-color: #F2F2F2;
    margin: 5px;
    width: 30%;
    border-radius: 10px;
    border: 1px;
    border-color: #5F5F5F;
`;