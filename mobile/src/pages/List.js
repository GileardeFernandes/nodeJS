import  React , {useEffect, useState} from 'react';
import { ScrollView, SafeAreaView, AsyncStorage, Image, StyleSheet} from 'react-native';
import SpotList  from '../components/SpotList';
import logo  from '../assets/logo.png';

export default function List(){

    const [techs, setTechs] = useState(['ReactJS','NodeJS','React Native']);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            if (storageTechs){
               const  techsArray = storageTechs.split(',').map(i =>{i.trim()});
               setTechs(techsArray);
            }
        })
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </SafeAreaView>
    )    
};
 

const styles = StyleSheet.create({
    container:{
       flex: 1,
    },
    logo:{
        height: 32,
        resizeMode: "contain",
       alignSelf:"center" ,
       marginTop:30,
    }
});

