import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.SafeAreaView`
    background-color: #FFFFFF;
    flex: 1;
`;

export const Text = styled.Text`
    font-weight: bold;
    color: #5F5F5F;
    /* text-align: center; */
    font-size: 18px;
`;

export const TextAI = styled.Text`
    font-weight: bold;
    color: #5F5F5F;
    /* text-align: center; */
    font-size: 18px;
`;

export const Cards = styled.View`
    background-color: #F2F2F2;
    margin: 5px;
    justify-content: center;
    padding: 20px;
    border-radius: 15px;
    border: 1px;
    border-color: #5F5F5F;
`;

export const Search = styled.View`
    background-color: #F2F2F2;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    border: 1px;
    border-color: #FFFFFF;
    flex-direction: row;
`