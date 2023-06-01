import { ListGroup } from "react-bootstrap";
import ItemLista from "./ItemLista";

const Lista = ({tareas, borrarTarea}) => {
    return (
        <ListGroup>
            {
            tareas.map((tarea, indiceTarea) => <ItemLista tarea={tarea} key={indiceTarea} borrarTarea={borrarTarea}></ItemLista>)
            }
        </ListGroup>
    );
};

export default Lista;