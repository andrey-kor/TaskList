import loupeIcon from '../img/icon/loupe.svg'
import arrowSortIcon from '../img/icon/arrow.svg'

function AddImg() {
    const searchIcon = document.querySelector('.searchForm__startButton')
    const imgSearchIcon = document.createElement('img')

    imgSearchIcon.width = 30
    imgSearchIcon.height = 30
    imgSearchIcon.src = loupeIcon
    searchIcon.append(imgSearchIcon)

    const arrowSort = document.querySelector('.filter-wrapper')

    for (let item of arrowSort.querySelectorAll('div')){
        const imgArrowSort = document.createElement('img')
        imgArrowSort.className = `arrowSort ${item.className}-img`
        imgArrowSort.width = 20
        imgArrowSort.height = 20
        imgArrowSort.src = arrowSortIcon
        item.append(imgArrowSort)
    }

    





}


export default AddImg