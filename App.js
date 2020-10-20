import React, {useCallback, useState, useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation'

export default function App(){

  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  
  useEffect(()=>{
    if(capital && interest && months){
      calculate();
    }else{
      reset();
    }
    
  },[capital, interest, months])

  const calculate = ()=>{
    reset();
    if(!capital){
      setErrorMessage("Agrega la cantidad a solicitar");
    }else if(!interest){
      setErrorMessage("Agrega el interes del prestamo");
    }else if(!months){
      setErrorMessage("Agrega los meses a pagar");
    }else{
      const i= interest/100;
      const fee = capital / ((1 - Math.pow(i+1, - months))/ i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.',','),
        totalPayable: (fee * months).toFixed(2).replace('.',','),
      })
      
    }
  }

  const reset = ()=>{
    setErrorMessage("");
    setTotal(null);
  }
  
  return(
    <>
    <StatusBar barStyle="light-content"/>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backColor}/>
      <Text style={styles.titleApp}>Cotizador de prestamos</Text>
      <Form 
      setCapital={setCapital} 
      setInterest={setInterest} 
      setMonths={setMonths}/>
    </SafeAreaView>

    <ResultCalculation
      capital={capital}
      interest={interest}
      months={months}
      total={total}
      errorMessage={errorMessage}
    />

    <Footer calculate={calculate}></Footer>
    </>

  );
}

const styles = StyleSheet.create({
  safeArea:{
    height: 290,
    alignItems: "center",
  },
  backColor:{
    backgroundColor: colors.PRIMARY_COLOR,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 200,
    width: "100%",
    position: "absolute",
    zIndex: -1,
  },
  titleApp:{
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    color: '#fff',
  }
})
