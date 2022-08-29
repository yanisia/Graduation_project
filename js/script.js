"use  strict"
/*alert("Добро пожаловать на наш сайт!")

function changeBodyBg(color){
    document.body.style.backgroundColor = color;
}
*/
function changeColor(colorValue){
    document.body.style.background = document.getElementById(colorValue).dataset.color;
}

function clicked(e)
{
    if(!confirm('Мы уже обрабатываем Вашу заявку!'))e.preventDefault();
}

function myFunction() {
    document.getElementById("demo").innerHTML = alert("Oops!Эта страница еще в разработке :(");
}

/*var agreement = document.getElementById('agreement');
function changeBgImg(){
    agreement.style.backgroundImage = "url(../img/tick.png)";
}*/

