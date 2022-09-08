import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
// importar iconos import {} from 'react-icons/vsc'
// para exportar funcionar a otro fichero se usa de la siguiente manera
export const dobleClick = () => {
    console.log('clickeando');
}
export const Post = () => {
    return <button onClick={ ()=>{
        //cuando termine de obtener todos los datos
        fetch('https://jsonplaceholder.typicode.com/posts')
        //recibimos una respuesta con esos datos, y lo convertimos en un json
        .then(response=>response.json())
        .then(data=>console.log(data))
        //si la url no existe colocamos una excepcion al usuario
        .catch(error=>console.error(error))

        //luego recibe los datos
    } }>
        Traer datos
    </button>
}

export function BasiCard({key='', imagen='', title='', contenido='' , valorBoton=''}) {
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

  export function Counter(){
    return (
        <div>
            <h1>Counter:0</h1>
            <button>Sumar</button>
        </div>
    )
  }