import React from "react";

export const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>
    </table>
);

export const myElement2 = <h1>React is {5 + 5} times better with JSX</h1>;

export const myElement3 = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
);

export const myElement4 = (
    <div>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </div>
);

export const myElement5 = <input type="text" />;

export const homePage = (

    <h1 className="myclass">Witamy , oto system podpisu elektronicznego</h1>

);


const x = 5;
let text = "Goodbye";
if (x < 10) {
    text = "Hello";
}

export const myElement6 = <h1>{text}</h1>;

export const myElement7 = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;



