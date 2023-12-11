import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';

const Map = () => {
  // triggers loading the places library and returns true once complete (the
  // component calling the hook gets automatically re-rendered when this is
  // the case)
  const placesLib = useMapsLibrary('places');
  const [placesService, setPlacesService] = useState(null);

  useEffect(() => {
    if (!placesLib) return;

    setPlacesService(new placesLib.PlacesService());
  }, [placesLib]);

  useEffect(() => {
    if (!placesService) return;

    // ...use placesService...
  }, [placesService]);

  return <>"Bangladesh"</>;
};

export default Map;
