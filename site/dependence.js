var germany = Array('BMW','AUDI');
var usa = Array('Ford','Chevrolet');
 
function showNames(v){
    var mas = eval(v);
    var el = document.getElementById('producer');
    while(el.childNodes.length>0){
        el.removeChild(el.childNodes[el.childNodes.length-1]);
    }
    for(var i=0;i<mas.length;i++){
        var opt = document.createElement("option");
        opt.innerHTML=mas[i];
        el.appendChild(opt);
    }
}
