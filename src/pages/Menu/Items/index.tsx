import items from './items.json';
import Item from "./Item";
import styles from "./Items.module.scss"

export default function Items() {
    return(
        <div className={styles.items}>
            {items.map(item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    )
}