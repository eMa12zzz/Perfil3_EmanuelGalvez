import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import InfoRow from '../components/InfoRow';
import student from '../data/student';
import colors from '../theme/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.heading}>Información del estudiante</Text>
      <Text style={styles.subheading}>
        {student.level} - {student.specialty}
      </Text>

      <View style={styles.infoCard}>
        <InfoRow label="Nombre" value={student.name} />
        <InfoRow label="Carnet" value={student.carnet} />
        <InfoRow label="Sección y grupo" value={`${student.section} - ${student.group}`} />
      </View>

      <CustomButton title="Ver series" onPress={() => navigation.navigate('Shows')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 24,
  },
  logo: {
    width: 96,
    height: 96,
    borderRadius: 24,
    alignSelf: 'center',
    marginBottom: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },
});

export default HomeScreen;
