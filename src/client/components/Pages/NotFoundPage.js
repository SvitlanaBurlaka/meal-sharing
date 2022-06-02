import React from "react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <p>Not found!
            <Link to="/">Go to home page</Link>
        </p>
    )
}