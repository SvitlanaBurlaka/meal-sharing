import React from "react";

export function Blog() {
    return (
        <>
            <h3
                className="description-header">
                Here you can read how you avoid foodwaste!
            </h3>

            <ul>
                <li>
                    <h4> Buy only what you need</h4>
                    <p>Plan your meals. Make a shopping list and stick to it, and avoid impulse buys. Not only will you waste less food, you`ll also save money!</p>
                </li>
                <li>
                    <h4>Love your leftovers</h4>
                    <p>If you don`t eat everything you make, freeze it for later or use the leftovers as an ingredient in another meal.</p>
                </li>
                <li>
                    <h4>Respect food</h4>
                    <p>Food connects us all. Re-connect with food by knowing the process that goes into making it. Read about food production and get to know your farmers.</p>
                </li>

            </ul>

        </>

    );
}
