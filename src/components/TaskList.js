import RmTask from './RmTask'
import RedactTask from './RedactTask'

function TaskList (tasks, searchEl = [], searchOnFlag = false){

    const messageSearchElement = document.querySelector('.taskList__searchMessage')
    const messageEmptyListElement = document.querySelector('.taskList__emptyMessage')

    const ulElement = document.querySelector('#ulTaskList')
    ulElement.innerHTML = ''
    let listForDisplay = []

    if (!tasks.length) {
        messageEmptyListElement.style.display = 'block'
        messageSearchElement.style.display = 'none'
        return
    }

    else if (tasks.length && !searchOnFlag){
        messageEmptyListElement.style.display = 'none'
        messageSearchElement.style.display = 'none'
        listForDisplay = tasks
    }

    else if (tasks.length && searchOnFlag && !searchEl.length){
        messageEmptyListElement.style.display = 'none'
        messageSearchElement.style.display = 'block'
    }

    else if (tasks.length && searchOnFlag && searchEl.length){
        messageEmptyListElement.style.display = 'none'
        messageSearchElement.style.display = 'none'
        listForDisplay = searchEl
    }

    for (let i=0; i<listForDisplay.length; i++){  

    const liElement = document.createElement('li')
    liElement.className = 'tackItem'
    ulElement.append(liElement)

    const removeTaskWrapper = document.createElement('div')
    removeTaskWrapper.className = 'removeTask-wrapper'
    liElement.append(removeTaskWrapper)

    const removeButton = document.createElement('button')
    removeButton.className = 'removeTaskButton buttonTask'
    removeButton.id = `rmButton-${i}`
    removeButton.innerHTML = 'x'
    removeTaskWrapper.append(removeButton)
    removeButton.addEventListener('click', rmTask)

    const taskItemBodyWrapper = document.createElement('div')
    taskItemBodyWrapper.className = 'taskItemBody-wrapper'
    removeTaskWrapper.after(taskItemBodyWrapper)

    const taskIdWrapper = document.createElement('div')
    taskIdWrapper.className = 'taskId'
    taskItemBodyWrapper.append(taskIdWrapper)

    const spanElementId = document.createElement('span')
    spanElementId.innerHTML = `${listForDisplay[i].id}. `
    taskIdWrapper.append(spanElementId)

    const taskTextWrapper = document.createElement('div')
    taskTextWrapper.className = 'taskText'
    taskIdWrapper.after(taskTextWrapper)

    const spanElementText = document.createElement('span')
    spanElementText.innerHTML = listForDisplay[i].text
    taskTextWrapper.append(spanElementText)

    const taskDateWrapper = document.createElement('div') 
    taskDateWrapper.className = 'taskDate'
    taskTextWrapper.after(taskDateWrapper)

    const spanElementDate = document.createElement('span')
    spanElementDate.innerHTML = listForDisplay[i].date
    taskDateWrapper.append(spanElementDate)

    const redactTaskWrapper = document.createElement('div')
    redactTaskWrapper.className = 'redactTask-wrapper'
    taskItemBodyWrapper.after(redactTaskWrapper)

    const redactButton = document.createElement('button')
    redactButton.className = 'redactTaskButton buttonTask' 
    redactButton.id = `rmButton-${i}`
    redactButton.innerHTML = 'Ред.'
    redactTaskWrapper.append(redactButton)
    redactButton.addEventListener('click', redactTask)
    }
    
    function rmTask(event){
        const buttonId = event.target.id.match(/\d+$/)[0]
        console.log('button id', buttonId);
        RmTask(tasks, listForDisplay[+buttonId].id)
    }

    function redactTask(event){
        const buttonId = event.target.id.match(/\d+$/)[0]
        RedactTask(tasks, +buttonId)
    }
}

export default TaskList
