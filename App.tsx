import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [incidencia, setIncidencia] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [tipoIncidente, setTipoIncidente] = useState('');
  const [prioridad, setPrioridad] = useState('');
  const [tipoUbicacion, setTipoUbicacion] = useState('');

  const enviarReporte = () => {
    if (!incidencia || !ubicacion || !tipoIncidente || !prioridad || !tipoUbicacion) {
      Alert.alert("Error", "Por favor llena todos los campos");
      return;
    }
    Alert.alert(
      "Reporte Enviado ✅",
      `Tipo: ${tipoIncidente}\nPrioridad: ${prioridad}\nUbicación: ${tipoUbicacion}\nDescripción: ${incidencia}\nLugar específico: ${ubicacion}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Reporte Campus</Text>

      {/* Tipo de Incidente */}
      <Text style={styles.label}>Tipo de Incidente</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={tipoIncidente}
          onValueChange={(itemValue) => setTipoIncidente(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="-- Selecciona un tipo --" value="" />
          <Picker.Item label="🔧 Falla de Equipo" value="Falla de Equipo" />
          <Picker.Item label="💡 Falla Eléctrica" value="Falla Eléctrica" />
          <Picker.Item label="🚨 Seguridad" value="Seguridad" />
          <Picker.Item label="🌊 Fuga de Agua" value="Fuga de Agua" />
          <Picker.Item label="🖥️ Falla de Red/Internet" value="Falla de Red/Internet" />
        </Picker>
      </View>

      {/* Prioridad */}
      <Text style={styles.label}>Prioridad</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={prioridad}
          onValueChange={(itemValue) => setPrioridad(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="-- Selecciona prioridad --" value="" />
          <Picker.Item label="🔴 Alta — Atención inmediata" value="Alta" />
          <Picker.Item label="🟡 Media — Atención pronto" value="Media" />
          <Picker.Item label="🟢 Baja — Sin urgencia" value="Baja" />
        </Picker>
      </View>

      {/* Tipo de Ubicación */}
      <Text style={styles.label}>Tipo de Ubicación</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={tipoUbicacion}
          onValueChange={(itemValue) => setTipoUbicacion(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="-- Selecciona ubicación --" value="" />
          <Picker.Item label="🏫 Salón de Clases" value="Salón de Clases" />
          <Picker.Item label="🏢 Oficina Administrativa" value="Oficina Administrativa" />
          <Picker.Item label="🚻 Baños" value="Baños" />
          <Picker.Item label="🍽️ Cafetería" value="Cafetería" />
          <Picker.Item label="🏃 Área Deportiva" value="Área Deportiva" />
          <Picker.Item label="🅿️ Estacionamiento" value="Estacionamiento" />
          <Picker.Item label="📚 Biblioteca" value="Biblioteca" />
        </Picker>
      </View>

      {/* Descripción */}
      <Text style={styles.label}>¿Qué sucede?</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Proyector no enciende"
        value={incidencia}
        onChangeText={setIncidencia}
      />

      {/* Lugar específico */}
      <Text style={styles.label}>Lugar Específico</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Salón 302, Piso 3"
        value={ubicacion}
        onChangeText={setUbicacion}
      />

      <Button title="Registrar Incidencia" onPress={enviarReporte} color="#007AFF" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  pickerContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 20,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 20,
  },
});