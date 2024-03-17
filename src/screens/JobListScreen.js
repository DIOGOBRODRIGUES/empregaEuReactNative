import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobListScreen = ({route}) => {
  const {userName} = route.params
  return (
    <View style={styles.container}>
      <Text>Bem vindo: {userName}</Text>
      <Text>Lista de Vagas de Emprego</Text>
      {/* Aqui você pode adicionar a lógica para exibir as vagas de emprego */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default JobListScreen;
