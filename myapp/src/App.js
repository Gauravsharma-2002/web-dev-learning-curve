
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Fetch from "./components/Fetch";
import Counter from "./components/Counter";
function App() {
  // const length=0;

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/fetch" element={<Fetch/>}/>
        <Route path="/counter" element={<Counter/>}/>
      </Routes>
    </Router>
 
 
  );
}

export default App;
