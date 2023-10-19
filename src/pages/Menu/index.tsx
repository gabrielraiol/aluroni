import styles from "./Menu.module.scss";
import {ReactComponent as Logo} from "assets/logo.svg";
import Finder from "./Finder";
import { useState} from "react";
import Filters from "./Filters";

export default function Menu() {

    const [search, setSearch] = useState ("");
    const [filter, setFilter] = useState <number | null> (null);

    return(
        <main>
            <nav className={styles.menuM}>
                <Logo/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa da massa
                </div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Cardápio</h3>
                <Finder search={search} setSearch={setSearch}/>
                <div className={styles.menu__filter}>
                    <Filters filter={filter} setFilter={setFilter} />
                </div>
            </section>
        </main>
    )
}