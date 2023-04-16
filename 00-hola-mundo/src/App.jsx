import './App.css'
import { TwProfileCard } from './TwProfileCard.jsx'

export function App () {
    return (
        <>
            <TwProfileCard userName="adryanovie2" initialIsFollowing={true}>
                Adrian Oviedo Gainza
            </TwProfileCard>
            <TwProfileCard userName="adryanovie2">
                Luis Angel Oviedo
            </TwProfileCard>
        </>
    )
}