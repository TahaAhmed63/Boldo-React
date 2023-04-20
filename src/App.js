import './App.css';
import Banner from './Banner/Banner';
import { Custumer } from './Custumer/Custumer';
import { Testimonal } from './Testimonal/Testimonal';
import { Message } from './messagecutumer/Message';
import Services  from './services/Services';
import Blogs from './Blogs/Blogs';
import { Footer } from './Footer/Footer';
function App() {
  return (
    <div className="App">
    <Banner/>
   <Services/>
   <Custumer/>  
 <Testimonal/>
    <Message/> 
<Blogs/> 
  <Footer/>  
    </div>
  );
}

export default App;
