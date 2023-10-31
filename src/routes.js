import MenuM from 'components/MenuM';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import styles from './Routes.module.scss';

export default function AppRouter() {
	return (
		<main>
			<Router>
				<MenuM/>
				<header className={styles.header}>
					<div className={styles.header__text}>
					A casa da massa
					</div>
				</header>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/menu' element={<Menu/>}/>
				</Routes>
			</Router>
		</main>
	);
}