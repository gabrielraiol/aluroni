import styles from './Template.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';

export default function Template() {
    return(
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
        A casa da massa
                </div>
            </header>

            <div className={stylesTheme.container}>
                <Outlet/>
            </div>
        </>
    );
}