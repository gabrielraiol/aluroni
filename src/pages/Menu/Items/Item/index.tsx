import styles from "./Item.module.scss";
import logo from "assets/logo.svg";
import items from "../items.json";

type Props = typeof items[0];

export default function Item (props: Props) {
    const {title, description, category, size, serving, price} = props;

    return(
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src="" alt={title} />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__type}>
                        {category.label}
                    </div>
                    <div className={styles.item__portion}>
                        {size}g
                    </div>
                    <div className={styles.item__amountpeople}>
                        Serve {serving} pessoa{serving === 1? "" : "s"}
                    </div>
                    <div className={styles.item__price}>    
                        R${price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}