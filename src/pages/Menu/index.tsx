import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Finder from './Finder';
import { useState } from 'react';
import Filters from './Filters';
import Computer from './Computer';
import Items from './Items';

export default function Menu() {

	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<number | null>(null);
	const [computer, setComputer] = useState('');

	return (
		<main>
			<nav className={styles.menuM}>
				<Logo />
			</nav>
			<header className={styles.header}>
				<div className={styles.header__text}>
					A casa da massa
				</div>
			</header>
			<section className={styles.menu}>
				<h3 className={styles.menu__title}>Cardápio</h3>
				<Finder search={search} setSearch={setSearch} />
				<div className={styles.menu__filters}>
					<Filters filter={filter} setFilter={setFilter} />
					<Computer computer={computer} setComputer={setComputer} />
				</div>
				<Items search={search} filter={filter} computer={computer} />
			</section>
		</main>
	);
}