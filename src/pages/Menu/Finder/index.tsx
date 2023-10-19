import React from "react";
import styles from "./Finder.module.scss";
import {CgSearch} from 'react-icons/cg'

interface Props {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Finder({search, setSearch}: Props) {
    return <div className={styles.finder}>
        <input
            value={search}
            onChange={(event) =>
              setSearch (event.target.value)
            }
        />
        < CgSearch
            size={20}
            color="#4D4C5E"
        />
    </div>;
}