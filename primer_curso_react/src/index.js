import React from 'react';
import ReactDOM from 'react-dom/client'
import { Greeting, UserCard } from './js/Greeting';
import Product, { NavBar } from './js/Product';
import { TaskCard } from './js/Task';
import { Button } from './js/Button';
import { Saludar } from './js/Saludar';
import { dobleClick, Post, BasiCard, Counter} from './js/Funciones';
import './css/styles.css'



// const rootElement=document.getElementById('root');

const root = ReactDOM.createRoot(document.getElementById('root'));
// la funcion render espera elementos hijos
// root.render(<h1>Hola Mundo</h1>);

// creo una funcion que reciba por parametro el valor de la etiqueta
// function Greeting(){
//     const casado=true;

//     return <h1>{casado ? 'estoy casado' : "no estoy casado"}</h1>;
// }
// function Greeting(){
//     const user={
//         firstname: 'Joel',
//         lastname:'meneses'
//     }
//     return <h1>{user.firstname}</h1>;
// }
const user = [
    {
        id: 1,
        name: 'Ryan',
        imagen: 'https://robohash.org/user1',
        texto:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
        id: 2,
        name: 'Sari',
        imagen: 'https://robohash.org/user2',
        texto:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    }
];
root.render(<>
    <Greeting numero1={30} defecto />
    <Greeting numero1={10} defecto />
    <Greeting numero1={8} defecto />

    <Product />
    <NavBar />
    <UserCard
        name="Ryan Ray"
        amount="3000"
        married={true}
        points={[99, 33.3, 22.2]}
        address={{
            street: '123 Main Street',
            city: "New York"
        }} />

    <UserCard
        name="Ryan Ray"
        amount="3000"
        points={[99, 33.3, 22.2]}
        address={{
            street: '123 Main Street',
            city: "New York"
        }} />

    {/* aqui iran los botones */}

    <Button text='Clickeame' />
    <Button text='Pagar' />
    <Button name='Joel' />

    <TaskCard ready />
    <TaskCard />

    <Saludar />

    <input id="hola" onDoubleClick={dobleClick} />

    <form onSubmit={(e) => {
        e.preventDefault()
        console.log('enviado')
    }}>
        <h1>Registro de usuario</h1>
        <button>Enviar</button>
    </form>

    <Post />
    <hr />

   <div className="containner">
                {user.map((user, i) => {
        return <BasiCard key={{i}} imagen={user.imagen} title={user.name} contenido={user.texto} valorBoton="Ir a"/>}
                    )}
   </div>    
{/* Consumir api react          */}
    <Counter/>
    
    
    {/* fin del cierre de la etiqueta root que encierra el sistema */}
</>);
