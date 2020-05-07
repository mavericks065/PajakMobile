import React from "react";
import {Text, View} from "react-native";

export interface Invoice {
    vendor: string;
    amount: number;
    taxPeriod: string;
    date: string;
}
