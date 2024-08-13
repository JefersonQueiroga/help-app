import { View,Text,TextInput, StyleSheet,TextInputProps } from 'react-native';
import { ReactNode } from 'react';


interface InputProp extends TextInputProps {
  placeholder: string;
  icon?: ReactNode;
  error?: boolean;  
  errorMessage?: string;
  isValid?: boolean; 
}


export function Input({ placeholder, error,errorMessage, isValid, icon, ...rest}: InputProp){
  return (
    <View style={styles.wrapper}>
      <View style={[
            styles.container,
            error && styles.errorBorder, // Borda vermelha se houver erro
            isValid && !error && styles.successBorder, // Borda verde se válido
            ]}>
        {icon}
        <TextInput placeholder={placeholder} {...rest}
        placeholderTextColor="#7C7C8A"
        style={ styles.textLabel}/>
      </View>
      {error && errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>  
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 16,
  },
  container: {
    flexDirection: 'row',
    paddingLeft: 16,
    width: '100%',
    backgroundColor: '#121214',
    height: 56,
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#7C7C8A',
  },
  textLabel: {
    color: '#7C7C8A',
    marginLeft: 8,
    fontSize: 16,
    flex: 1,
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: '#FF4C4C',
  },
  errorText: {
    color: '#FF4C4C',
    marginTop: 4,
    marginLeft: 16,
    fontSize: 14,
  },
  successBorder: {
    borderWidth: 1,
    borderColor: '#00B37E', 
  },  

});
