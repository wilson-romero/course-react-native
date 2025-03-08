interface Address {
    street?: string | null,
    city: string
}

interface Person {
    name: string,
    lastname: string,
    age: number,
    address: Address
}

export default function ObjectLiteral() {
    const person: Person = {
        name: 'John',
        lastname: 'Doe',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'New York'
        },
    }
    return (
        <>
            <h3>Object Literal</h3>
            <pre>{JSON.stringify(person, null, 2)}</pre>
        </>
    )
}
