function V_circle() {
    document.getElementById("sub_div1").innerHTML=''; //очищаем блок
    let rad = Number(document.getElementById('r').value);
    let volume = (4/3)*Math.PI*Math.pow(rad,3);
    volume=volume.toFixed(2); // округляем до сотых
    let div_circle = document.createElement('div'); //создаем блок
    div_circle.style.cssText="margin: 20px"; //задаем ему стили
    div_circle.innerText="Объем шара радиусом "+rad+" равен: "+volume; //помещаем значение
    document.getElementById("sub_div1").append(div_circle); //вставляем блок в html-код
}
function Beautifull_array(){
    document.getElementById("sub_div2").innerHTML=''; //очищаем блок
    var m = Number(document.getElementById("M").value);
    let arr=[];
    ol_div=document.createElement('ol'); //создаем список
    for (i=0;i<m;i++){
        arr.push([]);
        for (j=0;j<m;j++){
            arr[i].push(Number(prompt("Введите число")))
        }
        let li_for_ol=document.createElement('ul'); //создаем нумерованную строчку списка
        li_for_ol.innerHTML=arr[i];
        ol_div.append(li_for_ol);
    }
    document.getElementById("sub_div2").append(ol_div);
}

