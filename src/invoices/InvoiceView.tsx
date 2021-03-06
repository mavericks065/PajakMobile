import React from "react";
import {Text, View, FlatList, StyleSheet, Image} from "react-native";
import {Invoice} from "../model/Model";
import Header from "../common/Header";

const taxPayerName = "My Awesome Company"

export interface InvoiceViewProps {
    invoice: Invoice,
}

const invoices: Invoices = [
    {
        counterPart: {
            name: "Toto Corporation"
        },
        unitAmount: 5000.00,
        creationDate: new Date(),
        taxPeriod: "2020-05",
        invoiceNumber: "INV-0066890-098765",
        taxPayerName
    },
    {
        counterPart: {
            name: "Toto Corporation"
        },
        unitAmount: 5000.00,
        creationDate: new Date(),
        taxPeriod: "2020-05",
        invoiceNumber: "INV-067738903-49090-09",
        taxPayerName
    },
]

type Invoices = Invoice[]
const fieldStyle = {marginLeft: 10};
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#AE2125',
        paddingTop: 20,
    }
});

const InvoiceView: React.FC<InvoiceViewProps> = (props) => {
    const {invoice} = props

    return (

        <View
            style={{flex: 1, flexDirection: "row", marginBottom: 10, alignItems: 'center', justifyContent: 'center',}}>
            <Text style={fieldStyle}>Invoice Number: {invoice.invoiceNumber ?? ''}</Text>
            <Text style={fieldStyle}>Buyer/Seller: {invoice.counterPart?.name ?? ''}</Text>
            <Text style={fieldStyle}>Amount: IDR. {(invoice.unitAmount ?? 0) * (invoice.unitNumber ?? 0)}</Text>
            <Text style={fieldStyle}>Invoice Date: {invoice.invoiceDate ?? ''}</Text>
        </View>
    );
}

function InvoicesListView() {
    return (
        <View style={{flex: 1, flexDirection: "column"}}>
            <Header />
            <View>
                <View style={{flex: 1, marginTop: 22}}>
                    <FlatList
                        data={invoices}
                        renderItem={({item}) => <InvoiceView invoice={item}/>}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        </View>
    )
}

export default InvoicesListView;
