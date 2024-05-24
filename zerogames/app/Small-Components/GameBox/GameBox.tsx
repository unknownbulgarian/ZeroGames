import React, { MouseEventHandler } from 'react'
import styles from './page.module.css'

import { useRouter } from 'next/navigation'

import DiscountPriceBox from '../DiscountPriceBox/DiscountPriceBox';
import Tag from '../Tag/Tag';

interface GameBoxProps {
    imgSrc: string;
    title: string;
    description: string;
    isDiscount: boolean | null;
    discountOriginalPrice?: string | null;
    finalPrice?: string | null;
    gamePrice?: string | null;
    keyword1: string;
    keyword2: string;
}

export default function GameBox({ imgSrc, title, description, isDiscount,
     discountOriginalPrice, finalPrice, gamePrice, keyword1, keyword2 }: GameBoxProps) {

        const router = useRouter()

    return (
        <div className={styles.box} onClick={() => {router.push('/game/' + title)}}>
            <img alt='Game Image' src={imgSrc}></img>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>

            <div className={styles.tags}>
                <Tag tag={keyword1} />
                <Tag tag={keyword2} />
            </div>

            <div className={styles.bottomcontent2}>

                <div className={styles.price}>
                    {isDiscount &&
                        <DiscountPriceBox
                            height='20px'
                            originalPrice={parseFloat(discountOriginalPrice ?? "0")}
                            discountPrice={parseFloat(finalPrice ?? "0")}
                            discountPriceFS='0.8rem'
                            originalPriceFS='0.8rem'
                            percentageFontSize='1rem'
                        />
                    }
                    {!isDiscount && <p className={styles.theprice}>{gamePrice}</p>}
                    {!isDiscount && !gamePrice && <p className={styles.theprice}>15,00$</p>}
                </div>

            </div>
        </div>
    )
}
