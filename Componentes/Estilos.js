import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Color de fondo más claro
  },
  calculadoraEstilo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Boton: {
    width: 70,
    height: 70,
    margin: 5,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Verde oscuro
  },
  TextoB: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Arial', // Puedes ajustar la fuente según tus preferencias
  },
  estiloCaja: {
    height: 70,
    borderColor: '#ccc', // Color del borde más claro
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    fontSize: 30,
    textAlign: 'right',
    color: '#333', // Color del texto más oscuro
  },
});
