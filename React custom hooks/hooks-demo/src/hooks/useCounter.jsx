import { useState } from "react"


const useCounter = (initialValue, amountToAdd, amountToSub) => {
    const [counter, setCounter] = useState(initialValue);

    const addToCounter = () => {
        setCounter(counter + amountToAdd);
    }

    const subToCounter = () => {
        setCounter(counter - amountToSub)
    }

    return [counter, addToCounter, subToCounter];
}

export default useCounter;