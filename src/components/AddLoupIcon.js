import loupeIcon from '../img/icon/loupe.svg'

function AddLoupIcon() {
    const searchIcon = document.querySelector('.searchForm__startButton')
const imgSearchIcon = document.createElement('img')

imgSearchIcon.width = 30
imgSearchIcon.height = 30
imgSearchIcon.src = loupeIcon
searchIcon.append(imgSearchIcon)

}


export default AddLoupIcon