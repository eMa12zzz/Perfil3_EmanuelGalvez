import { StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';
import CustomButton from './CustomButton';

// Mensaje de error con un botón para volver a intentar
const ErrorMessage = ({ message, onRetry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <CustomButton title="Reintentar" onPress={onRetry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: colors.background,
  },
  message: {
    fontSize: 15,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default ErrorMessage;
