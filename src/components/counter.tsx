"use client"

import { useAuth } from "@clerk/nextjs";
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const {isLoaded, userId} = useAuth()

    if(!isLoaded || !userId){
        return null;
    }

    return (
        <>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}