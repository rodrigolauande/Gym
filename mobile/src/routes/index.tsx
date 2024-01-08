import { Box, useTheme } from 'native-base'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from './app.routes';
import { useContext } from 'react';
import { AuthContext } from '@contexts/AuthContext';
import { useAuth } from '@hooks/useAuth';
import { Loading } from '@components/Loading';

export function Routes () {

    const { colors } = useTheme();

    const { user, isLoadingUserStorageData } = useAuth()
    console.log('USUÁRIO LOGADO', user)
    
    const theme = DefaultTheme
    theme.colors.background = colors.gray[700];

    if(isLoadingUserStorageData) {
        return <Loading />
    }


    return (
        <Box flex={1} bg='gray.700'>
            <NavigationContainer theme={theme}>
                {user.id ? <AppRoutes/> : <AuthRoutes />}
            </NavigationContainer>
        </Box>
    )
}