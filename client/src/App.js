import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/users/01-home';
import ConditionalRoute from './routes/conditionalRoutes';



function App() {
  return (
    <>
    <Routes>
      <Route path='/*' element={<ConditionalRoute/>}/>

    </Routes>
    </>
  );
}

export default App;
