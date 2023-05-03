import Listing from './components.js/Listing';
import data from './parse/data'

function App() {
  return <Listing items={data} />;
}

export default App;