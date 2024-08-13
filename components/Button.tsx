import { View,Text,TouchableOpacity, StyleSheet} from 'react-native';





export function Button(){
  return (
    <TouchableOpacity style={ styles.container }>
        <Text style={styles.textLabel}>Entrar</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#00875F',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    textLabel: {
        color: '#FFFFFF',
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold'
    } 
});
