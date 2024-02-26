import React from 'react'
import { View, Text, Button } from 'react-native'

export default props =>(
    //elemento de fora cresce ao máximo
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {props.voltar 
                ?   <Button
                        title='Voltar'
                        onPress={()=>{
                        props.navigation.goBack()
                        }}
                    />
                : false 
            }
            {props.avancar 
                ?   <Button
                        title='Avançar'
                        onPress={()=>{
                            
                        props.navigation.navigate(
                            props.avancar, 
                            props.avancarParams
                        //props.avancarParam || null)
                        //props.navigation.push(props.avancar)
                        )
                        }}                       
                    />
                : false 
            }

        </View>
        <View style={{flex: 1}}>
            {props.children}

        </View>
    </View>

)