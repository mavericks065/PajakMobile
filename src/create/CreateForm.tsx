import React, {useState} from "react";
import Header from "../common/Header";
import {Picker, StyleSheet, Text, TextInput, View} from "react-native";
import DatePicker from 'react-native-datepicker';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#AE2125',
        paddingTop: 20,
    },
    container: {
        paddingTop: 90,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    formLabel: {
        margin: 5,
        fontSize: 20,
        color: 'grey',
    },
    subFormLabel: {
        margin: 15,
        fontSize: 18,
        color: 'grey',
    },
    inputStyle: {
        margin: 10,
        width: '80%',
        paddingHorizontal: 10,
        backgroundColor: '#f5f5f5',
        borderBottomWidth : 1.0
    },
    formText: {
        alignItems: 'center',
        color: 'black',
        margin: 5,
        fontSize: 12,
    }
});

const CreateForm = () => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [taxPeriod, setTaxPeriod] = useState(new Date())
    const [invoiceDate, setInvoiceDate] = useState(new Date())
    const [dueDate, setDueDate] = useState(new Date())

    return (
        <View style={{flex: 1, flexDirection: "column"}}>
            <Header/>
            <View style={styles.container}>
                <Text style={styles.formLabel}>Create your invoice</Text>
                <TextInput placeholder="Goods" style={styles.inputStyle}/>
                <TextInput placeholder="Invoice number" style={styles.inputStyle}/>
                <TextInput placeholder="Unit number" style={styles.inputStyle}/>
                <TextInput placeholder="Unit amount" style={styles.inputStyle}/>
                <TextInput placeholder="Discount" style={styles.inputStyle}/>
                <TextInput placeholder="Notes" style={styles.inputStyle}/>
                <TextInput placeholder="Email" style={styles.inputStyle}/>

                <Text style={styles.formText}>Select your tax period</Text>
                <DatePicker
                    style={{width: '70%'}}
                    date={taxPeriod}
                    mode="date"
                    placeholder="select Tax period"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(_, date) => {
                        setTaxPeriod(date)
                    }}
                />
                <Text style={styles.formText}>Select your invoice date</Text>
                <DatePicker
                    style={{width: '70%'}}
                    date={invoiceDate}
                    mode="date"
                    placeholder="select invoice date"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(_, date) => {
                        setInvoiceDate(date)
                    }}
                />
                <Text style={styles.formText}>Select the dues date of your invoice</Text>
                <DatePicker
                    style={{width: '70%'}}
                    date={dueDate}
                    mode="date"
                    placeholder="select Due Date"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(_, date) => {
                        setDueDate(date)
                    }}
                />

                <Text style={styles.subFormLabel}>Fill your counterpart</Text>

                <Picker
                    selectedValue={isBuyer}
                    onValueChange={(value) => setIsBuyer(value)}
                    style={{width: '50%'}}>
                    <Picker.Item label="Yes" value='true'/>
                    <Picker.Item label="No" value='false'/>
                </Picker>

                <TextInput placeholder="Counterpart email" style={styles.inputStyle}/>
                <TextInput placeholder="Counterpart name" style={styles.inputStyle}/>
                <TextInput placeholder="Counterpart NPWP" style={styles.inputStyle}/>
                <TextInput placeholder="Counterpart address" style={styles.inputStyle}/>
                <TextInput placeholder="Counterpart postCode" style={styles.inputStyle}/>
                <TextInput placeholder="Counterpart city" style={styles.inputStyle}/>
                <TextInput placeholder="Counterpart paymentDetails" style={styles.inputStyle}/>
            </View>
        </View>
    );
}

export default CreateForm;
