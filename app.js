// FEET TO INCHES
var feet = document.getElementById('feet')
var inch = document.getElementById('inch')

feet.addEventListener('input',function(){
    let f = this.value;
    let i = f* 12;
    inch.value = i;
});

inch.addEventListener('input',function(){
    let i = this.value;
    let f = i / 12;
    if(!Number.isInteger(f)){
        f =f.toFixed(3)
    }
    feet.value = f;
});
// KILOGRAM TO GRAMS 
var KG = document.getElementById('KG')
var GRAM = document.getElementById('GRAM')

KG.addEventListener('input',function(){
    let a = this.value;
    let b = a* 1000;
    GRAM.value = b;
});

GRAM.addEventListener('input',function(){
    let b = this.value;
    let a = b / 1000;
    // if(!Number.isInteger(a)){
    //     a =a.toFixed(3)
    // }
    KG.value = a;
});
