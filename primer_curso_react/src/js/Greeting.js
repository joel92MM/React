export function Greeting(props,{defecto="valor por defecto"}){
    function add(numero2){
        return props.numero1 + numero2;
    }
    return <h1>{add(2)}, {defecto}</h1>
}

export function UserCard({name, amount, married=false,city,address}){

    return <div>
        <h1>{name}</h1>
        <p>{amount}</p>
        <p>{married ? 'esta casado' : 'no esta casado'}</p>
        <ul>
            <li>City:{address.city}</li>
            <li>Address:{address.street}</li>
        </ul>

    </div>
}