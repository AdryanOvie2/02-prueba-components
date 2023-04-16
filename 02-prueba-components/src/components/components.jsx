import { useState } from "react"

export function Prueba () {
    const avatar = 'https://i.imgur.com/YcP0tik.jpeg';
    const description = 'imagen profile a shark';
    return (
        <article>
            <img
                src={avatar}
                alt={description} 
                className="pictureProfile"/>
            <ul>
                <li>probando 1</li>
                <li>probando 2</li>
                <li>probando 3</li>
            </ul>
        </article>
    );
}