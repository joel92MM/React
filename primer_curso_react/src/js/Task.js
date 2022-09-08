import '../css/styles.css'


export function TaskCard({ready=''}){
    return <div className="card"
    //style={{ 
    //     background: '#000000',
    //     color:'#ffff',
    //     padding: '20px '}}
    >
        <h1>Mi primer tarea</h1>
        <span className={ready ? 'estilosTareas1': 'estilosTareas2'}>{
            ready ? 'Tarea realizada' : 'Tarea pendiente'
        }
        </span>
    </div>
}

TaskCard.defaultProps ={
    ready: false
}