// creamos un componente de tipo objeto

// se define al crear una clase para crear componentes
import {Component} from 'react'

// primera forma de crear un componente con react utilizando clases, CODIGO POCO UTILIZADO ACTUALMENTE
// export class Saludar extends Component{
//     render() {
//         return <h1>Hello world</h1>
//     }
// }

//segunda forma de crear un componente con react utilizando funciones
export function Saludar(){
    return <h1>Hello world</h1>
}