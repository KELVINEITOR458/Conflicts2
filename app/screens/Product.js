import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenidos a mi tienda soy Alex Palma</Text>
        <Text style={{color:"green"}}>Zanahoria</Text>
        <Text style={{color:"red"}}>Arroz</Text>
        <Text style={{color:"blue"}}>Limones</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('WellcomeNav');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d4ecff',
      alignItems: 'center',
      justifyContent: 'center',
    },

  });