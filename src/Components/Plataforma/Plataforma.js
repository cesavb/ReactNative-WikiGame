// import React, { useState, useEffect} from "react";
// import { ActivityIndicator, FlatList, View } from 'react-native';
// import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import { Cards, Container, Search, Text, TextAI } from './styles';
// import token from '../../Service/token'
// import api  from '../../Service/api';

// export default function Plataforms(item){
    
//     const [auth, setAuth] = useState();
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         token.post('', {
//             client_id :'f7wh9fp8o60qav6ym4znqy8hp4s6h1' ,
//             client_secret : 'in5h4ozdwk9qpat0ovmj7n7xmuzn4v',
//             grant_type :'client_credentials'
//         })
//         .then((response) => setAuth(response.data.access_token))
//         .catch((err) => {
//           console.error("Ops! " + err);
//         });
//     }, []);

//     useEffect(() => {
//         api.post("/platforms", "fields name; sort name asc; limit 181;", 
//         {
//           headers: {
//               'Client-ID': 'f7wh9fp8o60qav6ym4znqy8hp4s6h1',
//               'Content-Type': 'text/plain',
//               'Authorization': 'Bearer ' + auth
//           }
//         })
//         .then((response) => { setData(response.data) ; setLoading(true) })
//           .catch((err) => {
//             console.error("Vish! " + err);
//           });
//       }, [auth]);

//     return(
        
//     )
// }