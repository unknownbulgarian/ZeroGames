'use client'

import React, { useEffect } from 'react'
import styles from './page.module.css'

//providers
import { useCategory } from '@/app/States/Category/CategoryState'
import { useNav } from '@/app/States/NavBar/NavState'

//components
import GameBox from '@/app/Small-Components/GameBox/GameBox'
import GamePages from '@/app/Small-Components/Pages/GamePages'

interface PageProps {
    params: {
        keyword: string,
        page: number
    }
}


export default function PageKeywordsGame({ params }: PageProps) {

    const { getCategoryGames, categoryGames, page, setPage, totalPages } = useCategory()

    const { setNav, category, setCategory, setKeyword } = useNav()

    useEffect(() => {
        setPage(Number(params.page))
        getCategoryGames(Number(params.page), params.keyword)

        setNav('Keywords')
        setKeyword(decodeURIComponent(params.keyword))
        setCategory('')
    }, [])

    const noDesc = "The developers unfortunately didn't provide any description for this game, leaving potential players without information about its features, gameplay, or storyline."


    return (
        <>




            <div className={styles.games}>
                {categoryGames?.map((game, index) => (
                    <GameBox
                        description={game.About.Description ? game.About.Description : game.Extra.Description ? game.Extra.Description : noDesc}
                        key={index}
                        imgSrc={game.General.imgSrc}
                        title={game.General.Title}
                        isDiscount={game.General.gameDiscount}
                        discountOriginalPrice={game.General.DiscountOriginalPrice}
                        finalPrice={game.General.FinalPrice}
                        gamePrice={game.General.GamePrice}
                        keyword1={game.General.Keywords[0].keyword}
                        keyword2={game.General.Keywords[1].keyword}
                    />
                ))}
            </div>

            <GamePages defaultPage='/' pushPage={'/keywords/' + params.keyword + '/'} onPageChange={setPage} page={page} count={totalPages} />
        </>
    )
}