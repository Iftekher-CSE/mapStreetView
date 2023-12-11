import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import GOOGLE_MAPS_API_KEY from './googleMapKey.js';

function App() {
  const position = { lat: 53.54992, lng: 10.00678 };

  return (
    <div style={{ height: '700px' }}>
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
        <Map center={position} zoom={10}>
          <div>"Bangladesh"</div>
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  );
}

export default App;
