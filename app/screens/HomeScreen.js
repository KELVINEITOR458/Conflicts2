import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Bienbenido a mi Aplicación, soy Kelvin</Text>
        <Text>Quiero plata :c</Text>

        <View style={styles.botones}>

            <View style={styles.boton1}>
                <Button
                   
                    title='CONTACTS'
                    onPress={() => {
                        navigation.navigate('Callnumber');
                    }}
                />
            </View>



            <Button
                title='PRODUCTOS'
                onPress={() => {
                    navigation.navigate('ProductNavigation');
                }}
            />

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5EECCB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#33FF55'
    },
    boton1: {

        marginRight: 60,

    },
});
