const display=document.querySelector('#display');
const buttons=document.querySelectorAll('button')
let audioClean= new Audio("clean.mp3")
let audioClick= new Audio("click.mp3")
buttons.forEach((item) => {
    item.onclick=()=>{ 
        audioClick.play();
        if(item.id=='clear'){
            display.innerText='';
           audioClean.play();
        }else if(item.id=='backspace'){
            let string= display.innerText.toString();
            display.innerText=string.substr(0,string.length-1);
        }else if(display.innerText!=''  && item.id=='equal'){
            try {
                const result = eval(display.innerText);
                if (isNaN(result)) {
                    display.innerText = 'Error';
                } else if (!isFinite(result)) {
                    display.innerText = 'Error';
                   
                } else {
                    // Check if the result is an integer
                    if (Number.isInteger(result)) {
                        display.innerText = result.toString(); // Display as an integer
                    } else {
                        display.innerText = result.toFixed(5); // Display with 2 decimal places
                    }
                }
            } catch (error) {
                display.innerText = 'Error';
            }
            
        }else if(display.innerText==''  && item.id=='equal'){
            display.innerText="Empty!"
            setTimeout(()=>(display.innerText=''),2000);
        }else{
            display.innerText+=item.id;
        }
    }
})

const themeToggleBtn=document.querySelector('.theme-toggler');
const calculator=document.querySelector('.calculator');
const toggleIcon=document.querySelector('.toggler-icon');
let isDark=true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark=!isDark;
}



































