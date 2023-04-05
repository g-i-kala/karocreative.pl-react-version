import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MyWork from './components/MyWork';

//stylesheet
import './App.scss';
//fonts
import './assets/fonts/static/SourceCodePro-Black.ttf'
import './assets/fonts/static/SourceCodePro-Light.ttf'


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='work' element={<MyWork/>} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
