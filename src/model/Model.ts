import React from "react";
import {Text, View} from "react-native";

export interface Invoice {
    vendor?: string; // to be removed and replaced by CounterPart
    amount?: number; // to be removed and replaced by unitAmount
    taxPeriod?: string;
    date?: string; // to be removed and replaced by invoiceDate and creationDate
    counterPart?: CounterPart;
    creationDate?: Date;
    invoiceDate?: Date;
    dueDate?: Date;
    unitNumber?: number;
    unitAmount?: number;
    discount?: number;
    goods?: string;
    notes?: string;
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
