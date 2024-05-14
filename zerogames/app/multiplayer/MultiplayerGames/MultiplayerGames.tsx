'use client'

import React from 'react'
import styles from './page.module.css'

//components
import GameBox from '@/app/Main-Page-Components/Main/Games/GameBox/GameBox'
import GamePages from '@/app/Main-Page-Components/Main/Games/Pages/GamePages'

export default function MultiplayerGames() {
    return (
        <>
            <div className={styles.games}>
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
            </div>
            <GamePages count={10}/>
        </>
    )
}