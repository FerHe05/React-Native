import React from "react"
import{ View,Text, StyleSheet } from 'react-native'
import Mensagem from './components/Primeiro'//importa a msg
import MinMax from "./components/MinMax"
import CompPadrao, {Comp1,Comp2}from './components/Multi'
import Aleatorio from "./components/Aleatorio"


/*
function App(){
    return <Text>Primeiro Componente</Text>
}
//exporta a função App para o index.js
export default App
*/

export default () => (

    <View style={style.App}>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
       <Mensagem></Mensagem>
        <Comp1/>
        <Comp2></Comp2>
        <CompPadrao></CompPadrao>
        <MinMax min="3" max="20"/>
        <MinMax min="10" max="14"/>
    </View>

)

const style = StyleSheet.create({//cria uma constante do tipo style
    App:{
        flexGrow: 1,//Permite que o background possa expandir
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})
