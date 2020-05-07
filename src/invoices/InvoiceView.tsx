import React from "react";
import {Text, View, FlatList } from "react-native";
import {Invoice} from "../model/Model";

export interface InvoiceViewProps {
    invoice: Invoice,
}

const invoices: Invoices = [
    {
        vendor: "Vendor",
        amount: 5000.00,
        date: "2020-05-05",
        taxPeriod: "2020-05"
    },
    {
        vendor: "Vendor2",
        amount: 5000.00,
        date: "2020-05-05",
        taxPeriod: "2020-05"
    },
]

type Invoices = Invoice[]

const InvoiceView: React.FC<InvoiceViewProps> = (props) => {
    const {invoice} = props
    return (
        <View style={{flex: 1, flexDirection: "column", marginBottom: 10, alignItems: 'center'}}>
            <Text>Vendor: {invoice.vendor}</Text>
            <Text>Amount: IDR. {invoice.amount}</Text>
            <Text>Date: {invoice.date}</Text>
            <Text>Tax Period: {invoice.taxPeriod}</Text>
        </View>
    );
}

function InvoicesListView() {
    return (
        <View style={{flex: 1, marginTop: 22}}>
            <FlatList
                data={invoices}
                renderItem={({item}) => <InvoiceView invoice={item}/>}
            />
        </View>
    )
}

export default InvoicesListView;
