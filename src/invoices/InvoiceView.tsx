import React from "react";
import {Text, View} from "react-native";
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
        <View>
            <View style={{width: 50, height: 50}}>
                <Text>Vendor: {invoice.vendor}</Text>
            </View>
            <View style={{width: 50, height: 50}}>
                <Text>Amount: IDR. {invoice.amount}</Text>
            </View>
            <View style={{width: 50, height: 50}}>
                <Text>Vendor: {invoice.date}}</Text>
            </View>
            <View style={{width: 50, height: 50}}>
                <Text>Tax Period: {invoice.taxPeriod}</Text>
            </View>
        </View>
    );
}

function InvoicesListView() {
    return (
        // <View style={{flex: 1, flexDirection: "column"}}>>
        <View>
            {invoices.map(invoice => <InvoiceView invoice={invoice}/>)}
        </View>
    )
}

export default InvoicesListView;
