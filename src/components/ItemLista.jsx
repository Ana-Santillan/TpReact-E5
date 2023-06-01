import { ListGroup, Button } from "react-bootstrap";

const ItemLista = ({tarea, borrarTarea}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {tarea} 
            <Button variant="danger" onClick={()=> borrarTarea(tarea)} >Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemLista;