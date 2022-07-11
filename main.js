const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const innerTabs = document.getElementById('innerTabs');
const innerContent = document.querySelectorAll('.innerContent');

//для зовнішньої рамки

const changeClass1 = el =>{
    for(let i = 0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e =>{
    const currTab = e.target.dataset.btn;
    changeClass1(e.target);
    for(let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab){
            content[i].classList.add('active');
        }
    }
})

//для внутрішньої рамки

const changeClass2 = el =>{
    for(let i = 0; i < innerTabs.children.length; i++){
        innerTabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

innerTabs.addEventListener('click', e =>{
    const currTab = e.target.dataset.btn;
    changeClass2(e.target);
    for(let i = 0; i < innerContent.length; i++){
        innerContent[i].classList.remove('active');
        if(innerContent[i].dataset.content === currTab){
            innerContent[i].classList.add('active');
        }
    }
})
