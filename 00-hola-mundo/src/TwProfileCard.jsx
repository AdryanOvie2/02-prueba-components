import { useState } from "react"

export function TwProfileCard ({ userName, children, initialIsFollowing }) {
    const [ isFollowing, setIsFollowing ] = useState(initialIsFollowing)

    const imgSrc = `https://unavatar.io/${userName}`

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-profileCard-button is-following'
        : 'tw-profileCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-profileCard'>
            <header className='tw-profileCard-header'>
                <img 
                className='tw-profileCard-avatar'
                alt='imagen de perfil de AO2'
                src={imgSrc}/>
                <div className='tw-profileCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-profileCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside className='tw-profileCard-aside'>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
                <span className="tw-card-button-stopFollow">Dejar de seguir</span>
            </aside>
        </article>
    )
}