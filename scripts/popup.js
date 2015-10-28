var wardTerm = document.querySelector('input[name="ward-term"]');
var saveWard = document.querySelector('a[name="save"]');
var queryWard = document.querySelector('a[name="query"]');
var dataBase = document.querySelector('datalist');

var loadData = {};

if(localStorage.data_base){
    loadData = JSON.parse(localStorage.data_base);
    for(var i in loadData){
        dataBase.appendChild(createData(loadData[i]));
    }
}

saveWard.onclick = function(){
    if(wardTerm.value) {
        var newWard = new Ward(wardTerm.value);
        loadData[newWard.getName()] = newWard.getName();
        localStorage.setItem('data_base', JSON.stringify(loadData));
        showCode(newWard.getCode());
    }else{
        wardTerm.placeholder = wardTerm.placeholder+"!!";
    }
};

queryWard.onclick = function(){
    var newWard = new Ward(wardTerm.value);
    ward(newWard.getCode());
};

function showCode(code){
    wardTerm.readOnly = true;
    wardTerm.value = code;
    wardTerm.select();
}
