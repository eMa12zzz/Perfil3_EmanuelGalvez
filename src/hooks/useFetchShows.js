import { useCallback, useEffect, useState } from 'react';

const API_URL = 'https://api.tvmaze.com/shows';

// La API devuelve el resumen con etiquetas HTML (<p>, <b>, ...), aquí se limpian
const removeHtml = (text) => (text ? text.replace(/<[^>]+>/g, '').trim() : '');

// Deja solo los datos que necesita la interfaz
const formatShow = (show) => ({
  id: show.id,
  title: show.name,
  image: show.image ? show.image.medium : null,
  description: removeHtml(show.summary) || 'Sin descripción disponible.',
});

const useFetchShows = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchShows = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error ${response.status} al consultar la API`);
      }

      const data = await response.json();
      setShows(data.map(formatShow));
    } catch (err) {
      setError('No se pudieron cargar las series. Revisa tu conexión a internet.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  return { shows, loading, error, refetch: fetchShows };
};

export default useFetchShows;
