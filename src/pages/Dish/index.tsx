import classNames from 'classnames';
import styles from './Dish.module.scss';
import { useLocation } from 'react-router-dom';

export default function Dish() {

    const {state} = useLocation();
    const {dish} = state;
    
    return (
        <>
            <button className={styles.backward}>
                {'< Voltar'}
            </button>
            <section className={styles.container}>

                <h1 className={styles.title}>
                    {dish.title}
                </h1>

                <div className={styles.image}>
                    <img src={dish.photo} alt={dish.title} />
                </div>

                <div className={styles.content}>
                    <p className={styles.content__description}>
                        {dish.description}
                    </p>

                    <div className={styles.tags}>

                        <div className={classNames()}>
                            {dish.category.label}
                        </div>

                        <div className={styles.tags__portion}>
                            {dish.size}g
                        </div>

                        <div className={styles.tags__qtdpeople}>
                                Serve {dish.serving} pessoa{dish.serving == 1 ? '' : 's'}
                        </div>

                        <div className={styles.tags__price}>
                            R$ {dish.price.toFixed(2)}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}