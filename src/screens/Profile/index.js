import React from "react";
import { Text, Button } from 'react-native';
import {} from '@react-navigation/native'
import { Container } from "./styles";

import Api from "../../Api";

export default () => {

    const handleLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes:[{name:'SignIn'}]
        });

    }
    return (
        <Container>
            <Text>Profile</Text>
            <Button title='Sair' onPress={handleLogoutClick}/>
        </Container>
    );
}