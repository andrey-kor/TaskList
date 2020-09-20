import CurrentDate from './CurrentDate'
import ReverseDate from './ReverseDate'
import TaskList from './TaskList'

function AddTask(taskText, taskDate, tasks){
    
    const errorMessage = document.querySelector('.errorMessage')

    function dateValidation(taskDate){

        const currentDate = CurrentDate()

        if (new Date(taskDate) >= new Date (currentDate)) {
            errorMessage.style.display = 'none'
            return true
        }
        else {
            errorMessage.style.display = 'block'
            return false
        }
    }

    if (dateValidation(taskDate)){
        writeTask(taskText, taskDate)
        document.querySelector('.inputTaskName').value = ''
        document.querySelector('.inputDate').value = ''
    }      
    
    function writeTask(taskText, taskDate){

        const item = {
            id: tasks.length+1,
            text: taskText,
            date: ReverseDate(taskDate, true)
        }

        tasks.push(item)
        localStorage.setItem('tasks', JSON.stringify(tasks))

        TaskList(tasks)
    }
}

export default AddTask