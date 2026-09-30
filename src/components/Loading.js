import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';

// Indicador de carga reutilizable
const Loading = ({ message = 'Cargando...' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.accent} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  message: {
    marginTop: 12,
    fontSize: 15,
    color: colors.textMuted,
  },
});

export default Loading;
