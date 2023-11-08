import MenuM from 'components/MenuM';
import Template from 'components/Template';
import About from 'pages/About';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import Footer from 'components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotFound from 'pages/NotFound';
import Dish from 'pages/Dish';

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <MenuM/>
                <Routes>
                    <Route path='/' element={<Template/>}>
                        <Route index element={<Home/>}/>
                        <Route path='menu' element={<Menu/>}/>
                        <Route path='about' element={<About/>}/>
                    </Route>
                    <Route path='dish/:id' element={<Dish/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </Router>
        </main>
    );
}