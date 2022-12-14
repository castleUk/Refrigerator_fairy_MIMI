// style
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/scss/app.scss';

// react
import { Route, Routes } from 'react-router-dom';


// page
import MainLayout from './components/MainLayout';
import LoginPage from './page/LoginPage';
import ContentLayout from './components/ContentLayout';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/char' element={<MainLayout/>}></Route>
        <Route path='/inventory' element={<ContentLayout/>}></Route>
        <Route path='/' element={<LoginPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
