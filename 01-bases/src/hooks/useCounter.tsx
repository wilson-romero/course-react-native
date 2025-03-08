import { useState } from "react"

export default function useCounter() {
    const [count, setCount] = useState(10)

    const increaseBy = (value: number) => {
        //setCount(count + value)
        //setCount((currrent) => currrent + value)
        setCount(Math.max(count + value, 0))
    }

    return {
        //Properties
        count,
        //Actions
        increaseBy
    }
}
