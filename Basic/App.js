import React from "react"
import{ View,Text, StyleSheet } from 'react-native'
import Mensagem from './components/Primeiro'//importa a msg


import CompPadrao, {Comp1,Comp2}from './components/Multi'


/*
function App(){
    return <Text>Primeiro Componente</Text>
}
//exporta a função App para o index.js
export default App
*/

export default () => (

    <View style={style.App}>
        <Mensagem></Mensagem>
        <Comp1></Comp1>
        <Comp2></Comp2>
        <CompPadrao></CompPadrao>
    </View>

)

const style = StyleSheet.create({//cria uma constante do tipo style
    App:{
        flexGrow: 1,//Permite que o background possa expandir
        justifyContent: 'center',
        alignItems: 'center',
    }
})