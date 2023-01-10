import React from "react";
import styled from "styled-components/native";

export const Container = styled = styled.SafeAreaView`
    backgroun-color: #63C2D1;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
    background-color: #FF0000;
`;

export const CustomButtom = styled.TouchableOpacity`
    heigth: 60px;
    background-color: #268596;
    border-radius: 30px;
    justify-content: center;
    align-item: center;
`;
export const CustomButtomText = styled.Text`
    font-size: 18px;
    calor: #FFF;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #268596;
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #268596;
    font-weight: bold;
    margin-left: 5px;
`;
