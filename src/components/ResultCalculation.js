import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ResultCalculation(props){
    const {capital, interest, months, total,errorMessage} = props;
    console.log(props);
    return(
        <>
        <View style={styles.content}>
            {total &&(
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <DataResult title="capital solicitada: " value={`${capital}$`}/>
                    <DataResult title="Interes %: " value={`${interest}%`}/>
                    <DataResult title="Plazos: " value={`${months} meses`}/>
                    <DataResult title="Pago mensual: " value={`${total.monthlyFee}$`}/>
                    <DataResult title="Total a pagar " value={`${total.totalPayable}$`}/>
                </View>
            )}
        </View>
        <View>
            <Text style={styles.error}>{errorMessage}</Text>
        </View>
        </>
    )
}

function DataResult(props) {
    const {title, value} = props;
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    )
    
}


const styles = StyleSheet.create({
    error:{
        textAlign: "center",
        color: "#f00",
        fontWeight: "bold",
        fontSize: 20,
    },
    content:{
        marginTop: 0,
        marginHorizontal: 40,
    },
    boxResult:{
        padding:30,

    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
    },
    value:{
        flexDirection: "row",
        justifyContent: "space-between",
    }
})