import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VisitorEntry from './components/VisitorEntry';
import ViewVisitor from './components/ViewVisitor';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<VisitorEntry/>}/>
        <Route path='/entry' element={<VisitorEntry/>}/>
        <Route path='/view' element={<ViewVisitor/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
