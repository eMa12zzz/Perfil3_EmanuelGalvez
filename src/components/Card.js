import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';

// Tarjeta reutilizable: recibe por props el título, la imagen y la descripción
const Card = ({ title, image, description }) => {
  return (
    <View style={styles.card}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={[styles.image, styles.noImage]}>
          <Text style={styles.noImageText}>Sin imagen</Text>
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={6}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 16,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 2,
  },
  image: {
    width: 110,
    height: 160,
    backgroundColor: colors.border,
  },
  noImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  noImageText: {
    color: colors.textMuted,
    fontSize: 12,
  },
  content: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.textMuted,
  },
});

export default Card;
