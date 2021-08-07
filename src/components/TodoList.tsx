import {useState} from 'react'
import React from 'react'
import Task from './Task'
import DoneTaskk from './DoneTask'

type TaskData = {
  id: number;
  name: string;
}

const TodoList = () => {

  const [curTask, setCurTask] = useState<string>('')
  const [tasks, setTasks] = useState<TaskData[]>([])
  const [donetasks, setdoneTasks] = useState<TaskData[]>([])
  window.onload = function() {
    const inputB = document.querySelector('input')
    if(inputB!==null) inputB.focus()
  };

  const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCurTask(ev.target.value)
  }
  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    /* check pressing enter key here */
    if(ev.key ==='Enter')
    addTask(curTask)
  }

  const addTask = (taskName: string) => {
      if(curTask === '') alert("pls input something")
    else{
  
    const newId = (new Date()).getTime()
    const newTasks = [{id: newId, name: taskName},...tasks]
    setTasks(newTasks)}
    const inputB = document.querySelector('input')
    if(inputB!=null) {inputB.value = '' ;    inputB.focus()}
    setCurTask('')

  }

  const deleteTask = (id: number) => {
    // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
    const newTasks = tasks.filter(x => x.id !== id)
    setTasks(newTasks)
  }
  
  const doneTask = (id:number ,tname:string)=>{
    const newId = (new Date()).getTime()
    const newdonTasks = [ {id: newId, name: tname},...donetasks]
    setdoneTasks(newdonTasks)
    const newTasks = tasks.filter(x => x.id !== id)
    setTasks(newTasks)
  }
  return (
    <div className='mx-auto max-w-4xl'>
    <div className='flex space-x-1'>
      <input id = "inputBox" className='border border-gray-400 w-full text-2xl'
        onKeyDown={onKeyDownCallback} onChange={onChangeCallback} ></input>
      <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(curTask)}>+</button>
    </div>
        {tasks.map( x => <Task id={x.id} name={x.name} doneFn ={doneTask} deleteFn={deleteTask}/>)}
        {donetasks.map( x => <DoneTaskk id={x.id} name={x.name}/>)}
    </div>
  )
}



export default TodoList