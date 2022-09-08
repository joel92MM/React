import React from 'react';
import ReactDOM from 'react-dom/client'
import { Greeting, UserCard }  from './Greeting';
import Product, {NavBar} from './Product';

import {Button} from './Button';

// const rootElement=document.getElementById('root');

const root=ReactDOM.createRoot(document.getElementById('root'));
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
root.render(<>
<Greeting numero1={30} defecto />
<Greeting numero1={10} defecto />
<Greeting numero1={8} defecto />

<Product/>
<NavBar/>
    <UserCard 
        name="Ryan Ray" 
        amount="3000" 
        married={true} 
        points={[99, 33.3, 22.2]} 
        address={{ 
            street: '123 Main Street', 
            city: "New York" }} />

    <UserCard 
        name="Ryan Ray" 
        amount="3000"  
        points={[99, 33.3, 22.2]} 
        address={{
            street: '123 Main Street', 
            city: "New York"}}/> 

{/* aqui iran los botones */}

<Button text='Clickeame'/>
<Button text='Pagar'/>
<Button text='Ir a'/> 
            
            
            
            
            {/* fin del cierre de la etiqueta root que encierra el sistema */}
</>);
