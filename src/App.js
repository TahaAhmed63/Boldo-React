import './App.css';
import Banner from './Banner/Banner';
import { Custumer } from './Custumer/Custumer';
import Services  from './services/Services';

function App() {
  return (
    <div className="App">
    <Banner/>
    <Services/>
    <Custumer/>
    </div>
  );
}

export default App;
