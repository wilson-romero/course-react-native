import useCounter from "../hooks/useCounter"

export default function Counter() {

    const { count, increaseBy } = useCounter()

    return (
        <>
            <h3>Counter: <small>{count}</small></h3>
            <div>
                <button
                    onClick={() => increaseBy(1)}
                    className="p-2 bg-blue-500 rounded-xl w-10 m-2 text-white hover:bg-blue-900">+ 1</button>
                <button
                    onClick={() => increaseBy(-1)}
                    className="p-2 bg-blue-500 rounded-xl w-10 m-2 text-white hover:bg-blue-900">- 1</button>
            </div>
        </>
    )
}
