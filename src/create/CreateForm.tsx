import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Invoice} from "../model/Model";


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#AE2125',
        paddingTop: 20,
    }
});

const CreateForm: React.FC<Invoice> = (invoice) => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={{color: 'white', fontWeight: "bold", textAlign: 'center'}}>OnlinePajak</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Create Form</Text>
                <Text>Love this hackauthon!</Text>
            </View>
        </View>
    );
}

export default CreateForm;
