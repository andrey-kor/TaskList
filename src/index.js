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
        date: '21.09.2021'
    },
    {
        id: 2,
        text: "Дочитать книгу",
        date: '21.09.2021'
    },
    {
        id: 3,
        text: "Пробежать марафон",
        date: '24.05.2021'
    },
    {
        id: 4,
        text: "Прочитать 10 статей",
        date: '11.02.2022'
    },
    {
        id: 5,
        text: "Подарить подарок",
        date: '14.10.2021'
    },
    {
        id: 6,
        text: "Наесться конфет",
        date: '06.10.2020'
    },
    {
        id: 7,
        text: "Закутаться в плед",
        date: '17.10.2020'
    },
    {
        id: 8,
        text: "Посмотреть фильм",
        date: '16.10.2020'
    },
    {
        id: 9,
        text: "Написать письмо",
        date: '04.10.2020'
    },
    {
        id: 10,
        text: "Поиграть с котом",
        date: '29.09.2020'
    },
    {
        id: 11,
        text: "Завести кота",
        date: '12.10.2020'
    },
    {
        id: 12,
        text: "Дрессировать кота",
        date: '11.11.2020'
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

