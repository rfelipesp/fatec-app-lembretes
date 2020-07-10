import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity} from 'react-native';

const LembreteImportante = (props) => {

    return (
        <TouchableOpacity onPress={() => props.onImportante(props.chave)}>
            <View style={estilos.itemImportante}>
                <Text>{props.lembrete}</Text>
            </View>
        </TouchableOpacity>
    );
}

const estilos =  StyleSheet.create({
    itemImportante: {
        padding: 12,
        backgroundColor: '#D50000',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 8,
        borderRadius: 8
    }

});

export default LembreteImportante;