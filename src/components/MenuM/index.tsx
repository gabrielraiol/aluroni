import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './MenuM.module.scss';
import { Link } from 'react-router-dom';

export default function MenuM() {

    const routes = [{
        label: 'Início',
        to: '/'
    }, {
        label: 'Cardápio',
        to: '/menu'
    }, {
        label: 'Sobre',
        to: '/about'
    }];

    return(
        <nav className={styles.menuM}>
            <Logo />
            <ul className={styles.menuM__list}>
                {routes.map((route, index) => (
                    <li key={index} className={styles.menuM__link}>
                        <Link to={route.to}>
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}