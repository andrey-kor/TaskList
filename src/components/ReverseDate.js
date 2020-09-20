function ReverseDate(date, forUser){

    let res = ''

    if(forUser){
        res = date.split('-').reverse().join('.')
    }
    else{
        res = date.split('.').reverse().join('-')
    }
    return res

}

export default ReverseDate