import React from "react";
import {Text, View} from "react-native";

export interface Invoice {
    taxPeriod?: string;
    counterPart?: CounterPart;
    creationDate: Date;
    invoiceDate?: Date;
    dueDate?: Date;
    unitNumber?: number;
    unitAmount?: number;
    discount?: number;
    goods?: string;
    notes?: string;
    invoiceNumber?: string;
    taxPayerName: string;
    // to add file after for the picture
}

export interface CounterPart {
    isBuyer?: Boolean;
    email?: string;
    address?: string;
    postCode?: string;
    city?: string;
    name?: string;
    paymentDetails?: string;
    npwp?: string;
}
