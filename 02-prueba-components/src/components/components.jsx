import { useState } from "react"

export function Prueba ({person, description, size}) {
    const imgSrc = `https://unavatar.io/${person}`
    return (
        <article>
            <img
                src={imgSrc}
                alt={description} 
                className="esta es la imagen de"
                width={size}
                height={size}/>
            <ul>
                <li>{person}</li>
                <li>probando 2</li>
                <li>probando 3</li>
            </ul>
        </article>
    );
}