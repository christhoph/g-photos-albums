import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo
} from "react";

const AlbumsContext = createContext();

const useAlbums = () => {
  const context = useContext(AlbumsContext);

  return context ? context : null;
};

const AlbumsContextProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);

  const handleSetAlbums = useCallback(val => setAlbums(val), []);
  const handleResetAlbums = useCallback(() => setAlbums([]), []);
  const handleSetAlbum = useCallback(val => setAlbum(val), []);
  const handleResetAlbum = useCallback(() => setAlbum(null), []);
  const handleSetPhotos = useCallback(val => setPhotos(val), []);
  const handleResetPhotos = useCallback(() => setPhotos([]), []);

  const value = useMemo(
    () => ({
      albums,
      album,
      photos,
      handleSetAlbums,
      handleResetAlbums,
      handleSetAlbum,
      handleResetAlbum,
      handleSetPhotos,
      handleResetPhotos
    }),
    [
      albums,
      album,
      photos,
      handleSetAlbums,
      handleResetAlbums,
      handleSetAlbum,
      handleResetAlbum,
      handleSetPhotos,
      handleResetPhotos
    ]
  );

  return (
    <AlbumsContext.Provider value={value}>{children}</AlbumsContext.Provider>
  );
};

export { useAlbums, AlbumsContextProvider };
