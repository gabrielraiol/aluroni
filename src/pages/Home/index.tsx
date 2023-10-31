import menu from 'data/menu.json';
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHome from 'assets/nossa_casa.png';

export default function Home() {

    let recommendedDishes = [...menu];
    recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0,3);

    return (
        <section>
            <h3 className={stylesTheme.title}>
				Recomendações da Cozinha
            </h3>
            <div className={styles.recommendeds}>
                {recommendedDishes.map(item => (
                    <div key={item.id} className={styles.recommended}>
                        <div className={styles.recommended__image}>
                            <img src={item.photo} alt={item.title}/>	
                        </div>
                        <button className={styles.recommended__button}>
							Ver mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={stylesTheme.title}> Nossa Casa </h3>
            <div className={styles.ourHome}>
                <img src={ourHome} alt='Casa do Aluroni'/>
                <div className={styles.ourHome__adress}>
					Rua Vergueiro, 3185 <br/> <br/>Vila Mariana - SP
                </div>
            </div>
        </section>
    );
}