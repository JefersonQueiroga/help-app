import { useState } from 'react';
import {Text, StyleSheet, View, Image,Alert } from 'react-native';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Envelope, Key } from 'phosphor-react-native';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleEmailChange (text: string){
    console.log('E-mail:', text);
    setEmail(text);
  };

  function handleLogin() {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    // Lógica de autenticação aqui
    Alert.alert('Sucesso', 'Login realizado com sucesso.');
  };

  return (
   <View style={styles.container}>
      
        <Image
          source={require('@/assets/images/Logo.png')}
          style={styles.reactLogo}
        />
        <Text style={styles.textTitle} >Acesse sua conta</Text>
        <Input placeholder='E-mail' 
            onChangeText={handleEmailChange}
            icon={<Envelope color="#7C7C8A" size={24} />}
         />
        <Input placeholder='Senha' 
           onChangeText={setPassword}
          icon={<Key color="#7C7C8A" size={24} />}
        />
        
        <Button />

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202024',
    alignItems: 'center',
    padding: 20
  },
  reactLogo: {
    marginTop: 50,
    height: 90,
    width: 165
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E1E1E6',
    marginTop: 80 
  }

});
