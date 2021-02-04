import './App.css';
import Main from "../src/components/MainComponent"
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div >
      <Main />
    </div>
  </BrowserRouter>
  );
}

export default App;
