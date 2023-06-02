const menuItem = document.querySelectorAll('.menu-item');
const messageNotification = document.querySelector('#message-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
const theme = document.querySelector('#theme');
const customizeTheme = document.querySelector('.customize-theme');
const notification = document.querySelector('.notifications-popup');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');
const colorChange = document.querySelectorAll('.choose-color span');

const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active');
    });
}
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();

        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        }
        else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
            
        }
    });
});

const closeNotification=(e)=>{
    console.log('closenotification');
    if(e.target.classList.contains('')){
        notification.style.display = 'none';
    }
    else{
        console.log('jnneneneen');
    }
}
notification.addEventListener('click', closeNotification);


messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        document.querySelector('.messages').style.boxShadow = 'none';
    }, 2000);
});


const SearchMessage =()=>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat =>{
        let name = chat.querySelector('h5').textContent.toLowerCase();
        console.log(name.indexOf(val) != -1);
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }
        else{
            chat.style.display = 'none';
        }
    })
}
messageSearch.addEventListener('keyup', SearchMessage);

function showthemeSetting(){
    customizeTheme.style.display = 'grid';
}
theme.addEventListener('click', showthemeSetting);

const closeTheme =(e)=>{
    if(e.target.classList.contains('customize-theme')){
        customizeTheme.style.display = 'none';
    }
   
}
customizeTheme.addEventListener('click', closeTheme)

const  removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
            size.classList.remove('active');
            
    })
}
fontSizes.forEach(size=>{

    size.addEventListener('click', ()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.add('active');
    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '5.4rem');

    }
    else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
          root.style.setProperty('---sticky-top-left', '5.4rem');
          root.style.setProperty('---sticky-top-right', '-7rem');
     }
    else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('---sticky-top-left', '-2rem');
        root.style.setProperty('---sticky-top-right', '-17rem');
    }
    else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('---sticky-top-left', '-5rem');
        root.style.setProperty('---sticky-top-right', '-25rem');
    }
    else if(size.classList.contains('font-size-5')){
        fontSize = '22px';
        root.style.setProperty('---sticky-top-left', '-12rem');
        root.style.setProperty('---sticky-top-right', '-35rem');
    }
    document.querySelector('html').style.fontSize = fontSize;

 });
    
});

const changeActiveColorClass=()=>{
    colorChange.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })   
}
colorChange.forEach(color =>{
    color.addEventListener('click', ()=>{
        let primaryHue;
        changeActiveColorClass();
        if((color.classList.contains('color-1'))){
            primaryHue = 252;
        }
        else if((color.classList.contains('color-2'))){
            primaryHue = 52;
        }
        else if((color.classList.contains('color-3'))){
            primaryHue = 352;
        }
        else if((color.classList.contains('color-4'))){
            primaryHue = 152;
        }
        else if((color.classList.contains('color-5'))){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
});

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg =()=>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
document.querySelector('.bg-1').addEventListener('click', ()=>{
    document.querySelector('.bg-1').classList.add('active');
    document.querySelector('.bg-2').classList.remove('active');
    document.querySelector('.bg-3').classList.remove('active');
    window.location.reload();
})
document.querySelector('.bg-2').addEventListener('click', ()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    document.querySelector('.bg-2').classList.add('active');
    document.querySelector('.bg-1').classList.remove('active');
    document.querySelector('.bg-3').classList.remove('active');
    changeBg();
})
document.querySelector('.bg-3').addEventListener('click', ()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    document.querySelector('.bg-3').classList.add('active');
    document.querySelector('.bg-2').classList.remove('active');
    document.querySelector('.bg-1').classList.remove('active');
    changeBg();
})
// document.querySelector('body').addEventListener('click', ()=>{
//     window.location.reload();
// })