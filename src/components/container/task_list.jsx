import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import Taskform from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example', 'Default Description 1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example', 'Default Description 2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example', 'Default Description 3', true, LEVELS.BLOCKING)

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Tasks State has been modify')
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => {
            console.log('TaskList component is going to unkount')
        };
    }, [tasks]);

    function completeTask(task) {
        console.log('Complete this Task: ', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks[index].completed = !tempTasks[index].completed
        //We update the state of the component whit the new list of tasks and it will update
        //Iteration of the tasks in order to show the update
        setTasks(tempTasks)
    }

    function deleteTask(task) {
        console.log('Delete this Task: ', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.splice(index, 1)
        setTasks(tempTasks)
    }

    function addTask(task) {
        console.log('Add this Task: ', task)
        const tempTasks = [...tasks]
        tempTasks.push(task)
        setTasks(tempTasks)
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent
                                key={index}
                                task={task}
                                complete={completeTask}
                                remove={deleteTask}>
                            </TaskComponent>
                        )
                    })}

                </tbody>
            </table>
        )
    }

    let tasksTable

    if (tasks.length > 0)
        tasksTable = <Table></Table>
    else
        tasksTable = (<>
            <h3> There are no tasks to show</h3>
            <h4>Please, create one task</h4>
        </>)

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWight: 'bold'
    }

    return (
        <>
            <div className='col-12'>
                <div className='card'>
                    {/* Card header (title) */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    {/* Card body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        {/* TODO: add Loading Spinner */}
                        {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : tasksTable}
                    </div>
                </div>
            </div>
            <Taskform add={addTask} length={tasks.length}></Taskform>

            {/* <TaskComponent task={defaultTask}>
            </TaskComponent> */}
        </>
    );
};

export default TaskListComponent;
