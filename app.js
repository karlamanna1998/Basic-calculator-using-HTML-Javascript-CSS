let string = document.querySelector('.input');
let buttons = document.querySelectorAll('button')
let btnarray = Array.from(buttons)

console.log(btnarray);


btnarray.forEach((i) =>{
    i.addEventListener('click', (e)=>{
        if(e.target.innerText != '=' && e.target.innerText != 'c' && e.target.innerText != 'AC' && e.target.innerText != '+/-'){
        string.value = string.value+ e.target.innerText
        }

        else if(e.target.innerText == '='){
            string.value = eval(string.value) 
        }

        else if( e.target.innerText == 'AC'){
            string.value = ' ';
        }

        else if(e.target.innerText == 'c'){
            if (string.classList.contains('color3')){
                string.classList.remove('color3')    
           string.classList.add('color2')
            }
            else{
                string.classList.add('color2') 
            }
            
        }

        else if(e.target.innerText == '+/-'){
            if (string.classList.contains('color2')){
                string.classList.remove('color2')    
           string.classList.add('color3')
            }
            else{
                string.classList.add('color3') 
            }
             
         }
 


    })
})

