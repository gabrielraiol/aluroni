import items from './items.json';
import Item from './Item';
import styles from './Items.module.scss';
import { useEffect, useState } from 'react';

interface Props {
    search: string,
    filter: number | null,
    computer: string
}

export default function Items(props : Props) {

	const [list, setList] = useState(items);
	const {search, filter, computer} = props;

	function testSearch(title: string) {
		const regex = new RegExp(search, 'i');
		return regex.test(title);
	}

	function testFilter(id: number) {
		if(filter !== null)
			return filter === id;
		return true;
	}

	function sortList(list: typeof items, property: 'size' | 'serving' | 'price') {
		return list.sort((a, b) => a[property] > b[property] ? 1 : -1); 
	}

	function rank(list: typeof items) {

		switch(computer) {

		case 'porcao': return sortList(list, 'size');
		case 'qtd_pessoas': return sortList(list, 'serving');
		case 'preco': return sortList(list, 'price');
		default: return list;
		}
	}

	useEffect(() => {
		const newList = items.filter(item => testSearch(item.title) && testFilter(item.category.id));
		setList(rank(newList));
	}, [search, filter, computer]);

	return(
		<div className={styles.items}>
			{list.map(item => (
				<Item key={item.id} {...item}/>
			))}
		</div>
	);
}