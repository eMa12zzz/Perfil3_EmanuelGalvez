import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import useFetchShows from '../hooks/useFetchShows';
import colors from '../theme/colors';

const ShowsScreen = () => {
  const { shows, loading, error, refetch } = useFetchShows();

  if (loading) {
    return <Loading message="Cargando series..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={shows}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card title={item.title} image={item.image} description={item.description} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
});

export default ShowsScreen;
