const calscreen = document.querySelector(".calculator-screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const AC = document.querySelector(".all-clear");
const equal = document.querySelector(".equal-sign");
const del = document.querySelector(".del");
let currentNumb = '0';
let prevNumb = '';
let calOperator = '';
// let isNumb = true;
// let check = false;


const updateScreen = (number) =>
{   
    // //check is the input must a number
    // if(currentNumb ==='' || prevNumb==='' || isNumb || currentNumb === '0' ){

    //     if(check || currentNumb=== '0'){
    //         if(isNumb){
    //             if(currentNumb === '0'){
    //                 if(input === '.'){
    //                     currentNumb += input;
    //                     check= false;
    //                 }else{
    //                 currentNumb = input;}
    //             }else{
    //                 if(input === '.' ){
    //                     if ( currentNumb.includes("."))
    //                     {
    //                         currentNumb = currentNumb;
    //                     }else{
    //                         currentNumb += input;
    //                         check= false;
    //                     }
                        
                        
    //                     console.log("masuk sini");
    //                 }else{

    //                     currentNumb += input;
    //                 }
    //             }
    //             }else{
    //             if(input === '.'){
    //                 currentNumb += input;
    //                 check= false;
    //             }
    //             else{
    //                 inputOperator(input);
    //                 check = false;
    //                 }
    //             }
    //         }
    //     }
    //     console.log(currentNumb);
    //     console.log(prevNumb);
    //     console.log(calOperator);
     //calscreen.value = prevNumb + calOperator + currentNumb;  
     calscreen.value =  number; 
     if(calscreen.value ==''){
         calscreen.value = '0';
         currentNumb = '0';
     }
}


const inputNumber = (number) => {
    if(currentNumb === '0')
    {
        currentNumb = number;
    }else{
        currentNumb += number;
    }
}

const inputOperator= (operand) => {
    if(calOperator === ''){
        prevNumb = currentNumb;
    }
    calOperator = operand;
    currentNumb = '';
   // isNumb=true;
}

const deleteButton = () =>{
    
    currentNumb = currentNumb.substring(0,currentNumb.length-1);
    updateScreen(currentNumb);

}

const allClear = () => {
    
    prevNumb = '';
    calOperator = '';
    currentNumb = '0';
    updateScreen(currentNumb);  
   
   
}

numbers.forEach((number) =>{

    number.addEventListener("click", (event) =>{
      //  check= true;
    inputNumber(event.target.value);
    updateScreen(currentNumb);
        
        
    });
});

del.addEventListener("click", ()=>{

    deleteButton();
})

function inputDot(dot){
    if(currentNumb.includes('.')){
        return;
    }
    currentNumb += dot;
}
operators.forEach((operand) =>{
       
        operand.addEventListener("click", (event) =>{
          //  isNumb=false;
        inputOperator(event.target.value);
        
    });
});

decimal.addEventListener("click", (event) =>{
    inputDot(event.target.value);
    updateScreen(currentNumb);
    
})

AC.addEventListener("click", () =>{
    
    allClear();
});

equal.addEventListener("click", () =>{
    
    if(currentNumb !== ''){
       calculate();
    }
    updateScreen(currentNumb);
});

function calculate(){
    let result='';
    switch(calOperator){
        case '+':
            result = parseFloat(prevNumb) + parseFloat(currentNumb);
            break;
        case '-':
            result = parseFloat(prevNumb) - parseFloat(currentNumb);
            break;
        case '×':
            result = parseFloat(prevNumb)*parseFloat(currentNumb);
            break;
        case '÷':
            result = parseFloat(prevNumb)/ parseFloat(currentNumb);
            break;
        default:
            return;
       
    }
    currentNumb = result;
}

const percent = document.querySelector(".percentage");

percent.addEventListener("click", () =>{
    currentNumb = currentNumb *0.01;
    calscreen.value = currentNumb;
}
)