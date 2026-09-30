import { StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';

// Fila con una etiqueta y su valor (ej. Carnet: 20200001)
const InfoRow = ({ label, value }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: {
    fontSize: 12,
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 2,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
});

export default InfoRow;
