'use client'

import React from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

//providers
import { useSearch } from '@/app/States/Search/SearchState'

//components
import InputIcon from '@/app/Small-Components/InputIcon/InputIcon'
import DiscountPriceBox from '@/app/Small-Components/DiscountPriceBox/DiscountPriceBox'

//icons
import { FaSearch } from "react-icons/fa";

export default function ShowcaseNav() {

  const router = useRouter()

  const { games, navGames, getSearchGames, getSearchGamesNav, isSearching, setSearching, setSearchValue, setFocused } = useSearch()

  const disableOnSearch = () => {
    setTimeout(() => {
      setSearching(false)
    }, 100);
  }

  return (
    <div className={styles.nav}>
      <div className={styles.hrefs}>
        <p><a style={{color: "white"}} className='link' href='https://github.com/unknownbulgarian/ZeroGames' target='_blank'>GitHub</a></p>
        <p><a style={{color: "white"}} className='link' href='https://www.instagram.com/dn8.sw/' target='_blank'>Instagram</a></p>
      </div>

      <div className={styles.search}>
        <InputIcon
          type='text'
          borderRadius='0.3em'
          title='Search...'
          width='230px'
          height='26px'
          color='white'
          titleColor='white'
          backColor='rgba(38, 60, 119, 0.884)'
          onFocus={(e) => {
            setFocused(true)
            if(e.currentTarget.value !== '') {
              setSearching(true)
            }
          }}
          onInput={(e) => {
            getSearchGamesNav(e.currentTarget.value, 1);
            setSearchValue(e.currentTarget.value)
            if (e.currentTarget.value !== '') {
              setSearching(true)
            } else {
              setSearching(false)
            }
          }}
          onBlur={() => { disableOnSearch(); setFocused(false) }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.keyCode === 13) {
              disableOnSearch();
              setFocused(false);
              router.push('/search/' + e.currentTarget.value)
            }
          }}
        >
          <FaSearch />
        </InputIcon>

        {isSearching &&
          <div className={styles.searchgames}>

            {navGames?.map((game, index) => (
              <React.Fragment key={index}>
                <div onClick={() => {router.push('/game/' + game.General.Title)}} className={styles.game}>
                  <img alt='Showcase Image' src={game.General.imgSrc}></img>
                  <div className={styles.info}>
                    <h2>{game.General.Title}</h2>
                    {game.General.gameDiscount &&
                      <DiscountPriceBox
                        height='20px'
                        originalPrice={parseFloat(game.General.DiscountOriginalPrice ?? "0")}
                        discountPrice={parseFloat(game.General.FinalPrice ?? "0")}
                        discountPriceFS='0.8rem'
                        originalPriceFS='0.8rem'
                        percentageFontSize='1rem'
                      />
                    }
                    {!game.General.gameDiscount && <p className={styles.theprice}>{game.General.GamePrice}</p>}
                    {!game.General.gameDiscount && !game.General.GamePrice && <p className={styles.theprice}>15,00$</p>}
                  </div>
                </div>

              </React.Fragment>
            ))}
          </div>}

      </div>
    </div>
  )
}
