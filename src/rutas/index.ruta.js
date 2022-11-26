import { Router } from "express";

import {
    tareaproceso ,
    crearTarea,
    editarproceso ,
    editarTarea ,
    eliminarTarea ,
    terminarTarea 
}
from '../control/datoscontrol';

const router = Router();
router.get('/', tareaproceso);
router.post('/tasks/add', crearTarea);
router.get('/edit/:id', editarproceso);
router.post('/edit/:id', editarTarea);
router.get('/delete/:id', eliminarTarea );
router.get('/toggleDone/:id', terminarTarea);

export default router;