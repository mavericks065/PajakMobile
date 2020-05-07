import React from "react";
import {Text, View} from "react-native";

export interface Invoice {
    vendor: string;
    amount: number;
    taxPeriod: string;
    date: string;
}
const invoices: Array<Invoice> = [{
    vendor: "Vendor",
    amount: 5000.00,
    date: "2020-05-05",
    taxPeriod: "2020-05"
}]

const InvoiceView :React.FC<Invoice> = (invoice) => {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{width: 50, height: 50}}>
                <Text>Vendor: ${invoice.vendor}</Text>
            </View>
            <View style={{width: 50, height: 50}}>
                <Text>Amount: IDR. ${invoice.amount}</Text>
            </View>
            <View style={{width: 50, height: 50}}>
                <Text>Vendor: ${invoice.date}</Text>
            </View>
            <View style={{width: 50, height: 50}}>
                <Text>Tax Period: ${invoice.vendor}</Text>
            </View>
        </View>
    );
}

export default InvoiceView;
