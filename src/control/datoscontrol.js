import Task from "../models/Datos";

export const tareaproceso = async (req, res) => {
    const tasks = await Task.find().lean();
    res.render('index', { tasks: tasks });
};

export const crearTarea = async (req, res) => {
    try {
        const task = Task(req.body);
        await task.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

export const editarproceso = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean();
        res.render('edit', { task });
    } catch (error) {
        console.log(error.message);
    } 
};

export const editarTarea = async (req, res) => {
    const {id} = req.params
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
};

export const eliminarTarea = async (req, res) => {
    const {id} = req.params
    await Task.findByIdAndDelete(id);
    res.redirect("/");
};

export const terminarTarea = async (req, res) => {
    const {id} = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
};