import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import LembreteItem from './components/LembretesItem';
import LembreteInput from './components/LembreteInput';




export default function App() {

  //const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);

  const [contadorLembretes, setContadorLembretes] = useState(0);


  ///* const capturarLembrete = (digitado) => {
  //  setLembrete(digitado);
  //}; 

  const adicionarLembrete = (lembrete) => {
    setLembretes (lembretes => {
      setContadorLembretes(contadorLembretes + 1);
      return [{ key: contadorLembretes.toString(), value: lembrete }, ...lembretes];
    });
    console.log(lembrete);
  }

  const apagarLembretes = ()=> {
      setLembretes([])
    };

  const removerLembrete = (keyASerRemovida)=> {
      setLembretes(lembretes => {
        return lembretes.filter((lembrete) => {
          return lembrete.key !== keyASerRemovida
        })
      })
  }

  const marcarImportante = (keyASerMarcada) => {
    
  };

      
  
  return (
    <View style={styles.telaPrincipalView}>

      <LembreteInput onAdicionarLembrete={adicionarLembrete}
                     onApagarTudo={apagarLembretes} />
      
  
      <View>
        <FlatList 
          data={lembretes}
          renderItem={
            lembrete => (
              <LembreteItem 
              chave={lembrete.item.key}
              lembrete={lembrete.item.value}
              onDelete={removerLembrete}
              onImportante={marcarImportante}
              />
            )
          }
        />

        {/* aqui será visualizado os lembretes */}
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
   padding: 50
  },
  lembreteView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2
  },
  itemNaLista: {
    padding: 16,
    backgroundColor: '#DDD',
    borderColor: '#EEE',
    borderWidth: 1,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 12,
    fontSize: 16,
    alignSelf: 'center'
  }
});
