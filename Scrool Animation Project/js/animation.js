const boxes = document.querySelectorAll(".box");



const chekBoxes = () =>{
    console.log(boxes);
    // debugger
    const triggerBottom = (window.innerHeight /5)*4;
    boxes.forEach(box =>{
        let boxTop = box.getBoundingClientRect().top;
        if( boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }        
    })
}
 
window.addEventListener('scroll', chekBoxes);

chekBoxes()