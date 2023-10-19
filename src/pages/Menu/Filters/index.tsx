import filters from './filters.json';
import styles from './Filters.module.scss';
import React from 'react';
import classNames from 'classnames';

interface Props {
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

type Ichoice = typeof filters[0]

export default function Filters({filter, setFilter}: Props) {

    function selectFilter(choice: Ichoice) {
        if (filter === choice.id) return setFilter(null)
        return setFilter(choice.id)
    }

    return <div className={styles.filters}>
        {filters.map((choice) => (
            <button 
                className={classNames({
                    [styles.filters__filter]: true,
                    [styles["filters__filter--active"]]: filter === choice.id
                })}
                key={choice.id}
                onClick={() => selectFilter(choice)}>
                    
                {choice.label}
            </button>
        ))}
    </div>
}