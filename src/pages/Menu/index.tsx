import styles from './Menu.module.scss';
import Finder from './Finder';
import { useState } from 'react';
import Filters from './Filters';
import Computer from './Computer';
import Items from './Items';
import stylesTheme from 'styles/Theme.module.scss';

export default function Menu() {

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [computer, setComputer] = useState('');

    return (
        <section className={styles.menu}>
            <h3 className={stylesTheme.title}>Cardápio</h3>
            <Finder search={search} setSearch={setSearch} />
            <div className={styles.menu__filters}>
                <Filters filter={filter} setFilter={setFilter} />
                <Computer computer={computer} setComputer={setComputer} />
            </div>
            <Items search={search} filter={filter} computer={computer} />
        </section>
    );
}