import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [incidencia, setIncidencia] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [tipoIncidente, setTipoIncidente] = useState('');
  const [prioridad, setPrioridad] = useState('');
  const [tipoUbicacion, setTipoUbicacion] = useState('');

  const getPrioridadColor = () => {
    if (prioridad === 'Alta') return '#FFE5E5';
    if (prioridad === 'Media') return '#FFF8E1';
    if (prioridad === 'Baja') return '#E8F5E9';
    return '#FFF';
  };

  const getPrioridadBorder = () => {
    if (prioridad === 'Alta') return '#FF3B30';
    if (prioridad === 'Media') return '#FF9500';
    if (prioridad === 'Baja') return '#34C759';
    return '#DDD';
  };

  const enviarReporte = () => {
    if (!incidencia || !ubicacion || !tipoIncidente || !prioridad || !tipoUbicacion) {
      Alert.alert("Error", "Por favor llena todos los campos");
      return;
    }
    Alert.alert(
      "Reporte Enviado",
      `Tipo: ${tipoIncidente}\nPrioridad: ${prioridad}\nUbicacion: ${tipoUbicacion}\nDescripcion: ${incidencia}\nLugar: ${ubicacion}`
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
          <Picker.Item label="Falla de Equipo" value="Falla de Equipo" />
          <Picker.Item label="Falla Electrica" value="Falla Electrica" />
          <Picker.Item label="Seguridad" value="Seguridad" />
          <Picker.Item label="Fuga de Agua" value="Fuga de Agua" />
          <Picker.Item label="Falla de Red/Internet" value="Falla de Red/Internet" />
        </Picker>
      </View>

      {/* Prioridad */}
      <Text style={styles.label}>Prioridad</Text>
      <View style={[
        styles.pickerContainer,
        { backgroundColor: getPrioridadColor(), borderColor: getPrioridadBorder(), borderWidth: 2 }
      ]}>
        <Picker
          selectedValue={prioridad}
          onValueChange={(itemValue) => setPrioridad(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="-- Selecciona prioridad --" value="" />
          <Picker.Item label="ALTA - Atencion inmediata" value="Alta" color="#FF3B30" />
          <Picker.Item label="MEDIA - Atencion pronto" value="Media" color="#FF9500" />
          <Picker.Item label="BAJA - Sin urgencia" value="Baja" color="#34C759" />
        </Picker>
      </View>

      {/* Badge prioridad */}
      {prioridad !== '' && (
        <View style={[styles.badge, { backgroundColor: getPrioridadBorder() }]}>
          <Text style={styles.badgeText}>Prioridad: {prioridad}</Text>
        </View>
      )}

      {/* Tipo de Ubicacion */}
      <Text style={styles.label}>Tipo de Ubicacion</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={tipoUbicacion}
          onValueChange={(itemValue) => setTipoUbicacion(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="-- Selecciona ubicacion --" value="" />
          <Picker.Item label="Salon de Clases" value="Salon de Clases" />
          <Picker.Item label="Oficina Administrativa" value="Oficina Administrativa" />
          <Picker.Item label="Banos" value="Banos" />
          <Picker.Item label="Cafeteria" value="Cafeteria" />
          <Picker.Item label="Area Deportiva" value="Area Deportiva" />
          <Picker.Item label="Estacionamiento" value="Estacionamiento" />
          <Picker.Item label="Biblioteca" value="Biblioteca" />
        </Picker>
      </View>

      {/* Descripcion */}
      <Text style={styles.label}>Que sucede?</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Proyector no enciende"
        value={incidencia}
        onChangeText={setIncidencia}
      />

      {/* Lugar especifico */}
      <Text style={styles.label}>Lugar Especifico</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Salon 302, Piso 3"
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
    marginBottom: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  badge: {
    padding: 8,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
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
