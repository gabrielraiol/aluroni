import MenuM from 'components/MenuM';
import Template from 'components/Template';
import About from 'pages/About';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <MenuM/>
                <Routes>
                    <Route path='/' element={<Template/>}>
                        <Route index element={<Home/>}/>
                        <Route path='menu' element={<Menu/>}/>
                        <Route path='about' element={<About/>}/>
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}