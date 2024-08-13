import { useState } from 'react';
import {Text, StyleSheet, View, Image,Alert } from 'react-native';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Envelope, Key } from 'phosphor-react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

//npm install react-hook-form yup @hookform/resolvers
const schema = yup
  .object({
    email: yup.string().required('Email é obrigatório').email('Email inválido'),
    password: yup
      .string()
      .required('Senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .matches(
        /^(?=.*[!@#$%^&*(),.?":{}|<>])/,
        'A senha deve conter pelo menos um caractere especial'
      ),
  })
  .required();

export default function HomeScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit ( data: any ) {
    Alert.alert('Sucesso', `Login realizado com sucesso.\nE-mail: ${data.email}\nSenha: ${data.password}`);
  };

  return (
   <View style={styles.container}>
      
        <Image
          source={require('@/assets/images/Logo.png')}
          style={styles.reactLogo}
        />
        <Text style={styles.textTitle} >Acesse sua conta</Text>
        
        <Controller
          control={control}
          name="email"
          rules={{ required: 'E-mail é obrigatório.' }}
          render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder='E-mail'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={!!errors.email} 
                errorMessage={errors.email?.message as string}
                isValid={!errors.email && !!value}
                icon={<Envelope color="#7C7C8A" size={24} />}
              />
        )}
      />        

        <Controller
          control={control}
          name="password"
          rules={{ required: 'Senha é obrigatória.' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Senha'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={!!errors.password}
              errorMessage={errors.password?.message as string}
              isValid={!errors.password && !!value}
              icon={<Key color="#7C7C8A" size={24} />}
            />
          )}
        />
                
        <Button title='Entrar' onPress={handleSubmit(onSubmit)} />



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
    marginTop: 70,
    height: 90,
    width: 165
  },
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E1E1E6',
    marginTop: 80, 
    marginBottom: 24,
  }

});
