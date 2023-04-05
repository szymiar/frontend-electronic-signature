import {useState} from "react";


export function FavoriteColor() {
    const [color, setColor] = useState("red");

    return (
        <>
            <h3>My favorite color is {color}!</h3>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>
        </>
    )
}