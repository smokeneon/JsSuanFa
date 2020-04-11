function fanzhuan557(str){
    return str.split(' ').map((item)=>{
        return item.split('').reverse().join('');
    }).join(' ');
}

export default fanzhuan557;