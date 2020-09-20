import './style.css'
import AddLoupIcon from './components/AddImg'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import SortTasks from './components/SortTasks'
import Search from './components/Search'

AddLoupIcon()

let tasks = [
    {
        id: 1,
        text: "Дописать приложение",
        date: '2020-09-21'
    },
    {
        id: 2,
        text: "Дочитать книгу",
        date: '2020-10-22'
    },
    {
        id: 3,
        text: "Пробежать марафон",
        date: '2022-06-23'
    },
    {
        id: 4,
        text: "Прочитать 10 статей",
        date: '2020-09-24'
    },
    {
        id: 5,
        text: "Подарить подарок",
        date: '2020-11-25'
    },
    {
        id: 6,
        text: "Наесться конфет",
        date: '2022-06-26'
    },
    {
        id: 7,
        text: "Закутаться в плед",
        date: '2020-09-27'
    },
    {
        id: 8,
        text: "Посмотреть фильм",
        date: '2020-10-28'
    },
    {
        id: 9,
        text: "Написать письмо",
        date: '2022-11-29'
    },
    {
        id: 10,
        text: "Поиграть с котом",
        date: '2021-01-21'
    },
    {
        id: 11,
        text: "Завести кота",
        date: '2020-10-01'
    },
    {
        id: 12,
        text: "Дрессировать кота",
        date: '2022-06-01'
    } 
]

    if (localStorage.getItem('tasks')){
        tasks = JSON.parse(localStorage.getItem('tasks'))
        TaskList(tasks)
    }
    else {
        localStorage.setItem('tasks', JSON.stringify(tasks))
        TaskList(tasks)
    }

    const addForm = document.querySelector('.addForm')
    const inputTaskName = document.querySelector('.inputTaskName')
    const inputDate = document.querySelector('.inputDate')
    
    addForm.addEventListener('submit', takeData)

    function takeData (event){
        event.preventDefault()

        const taskText = inputTaskName.value
        const taskDate = inputDate.value
        
        AddTask(taskText, taskDate, tasks)

    }
   
    const searchForm = document.querySelector('.searchForm')
    const searchInput = document.querySelector('.searchForm__input')
    searchInput.addEventListener('input', startSearch)

    searchForm.addEventListener('submit', noSubmit)
    function noSubmit(event){
        event.preventDefault()
    }
    
    function startSearch(event){
        Search(tasks, event.target.value)
    }

SortTasks(tasks)

