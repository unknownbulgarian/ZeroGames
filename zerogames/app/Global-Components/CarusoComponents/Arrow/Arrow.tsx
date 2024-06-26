import React, { MouseEventHandler } from 'react'
import styles from './page.module.css'

//icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface ArrowProps {
    left: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function Arrow({ left, onClick }: ArrowProps) {
    return (
        <div onClick={onClick} className={`${left ? styles.left : styles.right}`}>
            {left ? <IoIosArrowBack className={styles.arrow} /> :
                <IoIosArrowForward className={styles.arrow} />
            }
        </div>
    )
}
