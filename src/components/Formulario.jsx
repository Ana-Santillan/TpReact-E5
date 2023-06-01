import { Button, Form } from "react-bootstrap";
import Lista from "./Lista";
import { useState, useEffect } from "react";

const Formulario = () => {
    const tareasLS = JSON.parse(localStorage.getItem('listaTareas')) || [];
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState(tareasLS);

    useEffect(() => {
        localStorage.setItem('listaTareas', JSON.stringify(tareas));
    }, [tareas])

    const handleSubmit = (e) => {
        e.preventDefault();
        setTareas([...tareas, tarea])
        setTarea("")
    }

    const borrarTarea = (nombreTarea) => {
        let copiaTareas = tareas.filter((itemTarea) => itemTarea !== nombreTarea);
        setTareas(copiaTareas);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e) => setTarea(e.target.value)} value={tarea} />
                    <Button variant="primary" type="submit">Agregar</Button>
                </Form.Group>
            </Form>
            <Lista tareas={tareas} borrarTarea={borrarTarea}></Lista>
        </>
    );
};

export default Formulario;