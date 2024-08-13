import { View,Text,TouchableOpacity, StyleSheet,TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
  }
  


export function Button({ title,onPress,...rest }: ButtonProps){
  return (
    <TouchableOpacity style={ styles.container }  onPress={onPress} { ...rest }>
        <Text style={styles.textLabel}>{title}</Text>
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
