import TaskList from './TaskList'
import ReverseDate from './ReverseDate'

function RedactTask(tasks, buttonId){
    
    function taskId(){
        for (let i=0; i<tasks.length; i++){
            if (tasks[i].id === buttonId) return i
        }
    }

    const taskTextElement = document.querySelector(`#taskText-${taskId()}`)
    const spanInput = taskTextElement.firstChild

    const taskDate = document.querySelector(`#taskDate-${taskId()}`)
    const spanDate = taskDate.firstChild

    const redactForm = document.createElement('form')
    redactForm.style.display = 'flex'

    const redactInput = document.createElement('input')
    redactInput.type = 'text'
    redactInput.className = 'redactInput'

    const redactDate = document.createElement('input')
    redactDate.type='date'
    redactDate.className = 'redactDate'

    const redactButton = document.createElement('button')
    redactButton.innerHTML = 'ОК'
    redactButton.className = 'buttonAdd redactButton'

    redactInput.value = spanInput.innerHTML
    redactDate.value = ReverseDate(spanDate.innerHTML, false)

    taskTextElement.innerHTML = ''
    taskTextElement.append(redactForm)
    taskDate.innerHTML = ''
    taskDate.style.width = '0'

    redactForm.append(redactInput)
    redactForm.append(redactDate)
    redactForm.append(redactButton)

    document.querySelector(`#rdButton-${taskId()}`).disabled = true; 

    redactForm.addEventListener('submit', writeChanges)

    function writeChanges(event){
        event.preventDefault()

        const newItem = {
            id:  buttonId, 
            text: redactInput.value, 
            date: ReverseDate(redactDate.value, true)
        }

        tasks.splice(taskId(), 1, newItem)

        localStorage.setItem('tasks', JSON.stringify(tasks))
        TaskList(tasks)

        redactForm.remove()
        redactButton.remove()
    }
}

export default RedactTask