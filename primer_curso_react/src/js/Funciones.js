import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useState, useEffect } from 'react';
// importar iconos import {} from 'react-icons/vsc'
// para exportar funcionar a otro fichero se usa de la siguiente manera
export const dobleClick = () => {
  console.log('clickeando');
}
export const Post = () => {
  return <button onClick={() => {
    //cuando termine de obtener todos los datos
    fetch('https://api.scryfall.com/cards/47f44d5a-f3d6-4a9a-8bd3-b17a88565c51?format=json&pretty=true/')
      //recibimos una respuesta con esos datos, y lo convertimos en un json
      .then(response => response.json())
      .then(data =>

        console.log(data))
      //si la url no existe colocamos una excepcion al usuario
      .catch(error => console.error(error))

    //luego recibe los datos
  }}>
    Traer datos
  </button>
}

export function BasiCard({ key = '', imagen = '', title = '', contenido = '', valorBoton = '' }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>
          <h1>Titulo {title}</h1>
        </Card.Title>
        <Card.Text>
          {contenido}
        </Card.Text>
        <Button variant="primary">
          {valorBoton}
          <Badge bg="secondary">{key}</Badge>
        </Button>
      </Card.Body>
    </Card>
  );
}


// export const Post2 = () => {
//   const valores = [];

//   //cuando termine de obtener todos los datos
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     //recibimos una respuesta con esos datos, y lo convertimos en un json
//     .then(response => response.json())
//     .then(data => valores)

//     //si la url no existe colocamos una excepcion al usuario
//     .catch(error => console.error(error))
//   // })
//   //luego recibe los datos
//   //  

//   return valores;
// }


// export const Carta = () => {
//   const [isLoading, setLoading] = useState(true);
//   console.log(Post2);
//   const [data, setData] = useState(Post2);

//   return BasiCard(data.id,data.image_uris.png,data.name,data.flavor_text,data.eur_foil);
// }

export function Counter() {

  const [counter, setCounter] = useState(0)
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <div>
      <h1>Counter:{counter}</h1>
      {/* Sumar */}
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Sumar</button>
      {/* Restar */}
      <button onClick={() => {
        setCounter(counter - 1);
      }}>Restar</button>
      {/* multiplicar */}
      <button onClick={() => {
        setCounter(counter * counter);
      }}>Multiplicar</button>
      {/* dividir */}
      <button onClick={() => {
        setCounter(counter / counter);
      }}>Dividir</button>

      {/* guardar valor */}
      <button onClick={() => {
        setCounter(counter / counter);
      }}>Dividir</button>
      <br />
      {/* explicacion de usestate */}
      <input onChange={e => setMensaje(e.target.value)} />
      <button onClick={() => {
        alert('El mensaje es:' + mensaje)
      }}>Save</button>
      {/* explicacion de useeffect */}
      <br />
      <input onChange={e => setMensaje(e.target.value)} />
      <button onClick={() => {
        alert('El mensaje es:' + mensaje)
      }}>Save</button>




    </div>
  )
}

