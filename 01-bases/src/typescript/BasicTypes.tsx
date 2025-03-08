export const BasicTypes = () => {
    const name: string = "Wilson"
    const age: number = 46
    const isActive: boolean = true
    const powers: string[] = ["Fly", "X-Ray Vision", "Super Strength"]

    return (
        <>
            <h3>Basic Types</h3>
            {name} - {age} - {isActive ? 'Active' : 'Inactive'}
            <p>{powers.join(', ')}</p>
        </>
    )
}