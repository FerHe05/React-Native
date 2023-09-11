import React from "react";
import { Text, View } from "react-native";


//exporta a função anonima não é importante o nome
export default function Comp(){
    return <Text>Comp #Oficial!</Text>
}

function Comp1(){
    return <Text>Comp #01!</Text>
}

export function Comp2(){
    return <Text>Comp #02!</Text>
}

export{Comp1}