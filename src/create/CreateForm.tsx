import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Invoice} from "../model/Model";

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#AE2125',
        paddingTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },

    formLabel: {
        margin:'5px',
        fontSize: 20,
        color: 'grey',
    },
    inputStyle: {
        margin: '10px',
        width: '80%',
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: '#f5f5f5',
        borderBottomWidth : 1.0
    },
    formText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
});

const CreateForm: React.FC<Invoice> = (invoice) => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={{color: 'white', fontWeight: "bold", textAlign: 'center'}}>OnlinePajak</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.formLabel}>Create your invoice</Text>
                <TextInput placeholder="Goods" style={styles.inputStyle}/>
                <TextInput placeholder="Invoice number" style={styles.inputStyle}/>
                <TextInput placeholder="Unit number" style={styles.inputStyle}/>
                <TextInput placeholder="Unit amount" style={styles.inputStyle}/>
                <TextInput placeholder="Discount" style={styles.inputStyle}/>
                <TextInput placeholder="Notes" style={styles.inputStyle}/>
                <TextInput placeholder="Email" style={styles.inputStyle}/>
            </View>
        </View>
    );
}

export default CreateForm;
