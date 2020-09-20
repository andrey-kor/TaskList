import TaskList from "./TaskList"
import ReverseDate from './ReverseDate'

function SortTasks(tasks){

    // const imgSortId = document.querySelector('.filter__id-img')
    // const imgSortText = document.querySelector('.filter__text-img')
    // const imgSortDate = document.querySelector('.filter__date-img')

    const blockSortId = document.querySelector('.filter__id')
    const blockSortText = document.querySelector('.filter__text')
    const blockSortDate = document.querySelector('.filter__date')

    blockSortId.addEventListener('click', sort)
    blockSortText.addEventListener('click', sort)
    blockSortDate.addEventListener('click', sort)

    let sortedByIdFlag = false
    let sortedByTextFlag = false
    let sortedByDateFlag = false

    function sort(event){
        let ctx = event.target.className.match(/__\w*/)[0]
        console.log("ctx", ctx)

        switch (ctx){
            case '__id':
                if (sortedByIdFlag === false){
                    tasks.sort((a,b) => {
                        return (b.id-a.id)
                    })
                    sortedByIdFlag = true
                    
                }
                else{
                    tasks.sort((a,b) => {
                        return (a.id-b.id)
                    })
                    sortedByIdFlag = false
                }
            break;    
            case '__text':
                console.log('in text');
                if (sortedByTextFlag === false){
                    tasks.sort((a,b) => a.text < b.text ? 1 : -1)
                    sortedByTextFlag = true
                    
                }
                else{
                    tasks.sort((a,b) => b.text < a.text ? 1 : -1)
                    sortedByTextFlag = false
                }
            break;
            case '__date':
                if (sortedByDateFlag === false){
                    tasks.sort((a,b) => new Date(ReverseDate(a.date)) > new Date(ReverseDate(b.date)) ? 1 : -1)
                    sortedByDateFlag = true
                    
                }
                else{
                    tasks.sort((a,b) => new Date(b.date) > new Date(a.date) ? 1 : -1)
                    sortedByDateFlag = false
                }  
            break;  
        }
        localStorage.setItem('tasks', JSON.stringify(tasks))
        TaskList(tasks)        
    }
}


export default SortTasks