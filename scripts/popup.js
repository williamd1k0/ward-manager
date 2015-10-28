var wardTerm = document.querySelector('input[name="ward-term"]');
var saveWard = document.querySelector('a[name="save"]');
var queryWard = document.querySelector('a[name="query"]');
var deleteWard = document.querySelector('a[name="delete"]');
var backupWard = document.querySelector('a[name="backup"]');
var refreshWard = document.querySelector('a[name="refresh"]');
var closeWard = document.querySelector('a[name="close"]');
var backupArea = document.querySelector('textarea');
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
    if(wardTerm.value){
        var newWard = new Ward(wardTerm.value);
        ward(newWard.getCode());
    }
};

deleteWard.onclick = function(){
    if(wardTerm.value){
        delete loadData[wardTerm.value];
        localStorage.setItem('data_base', JSON.stringify(loadData));
        wardTerm.value = "";
        wardTerm.placeholder = "Deletado";
    }
}

backupWard.onclick = function(){
    if(localStorage.data_base && !wardTerm.value){
        backupArea.value = localStorage.data_base;
        backupArea.style.display = 'block';
    }else if(wardTerm.value){
        try{
            var insertBackup = JSON.parse(wardTerm.value);
            localStorage.setItem('data_base', JSON.stringify(insertBackup));
        }catch(e){
            alert("Erro no json");
        }
    }
}

refreshWard.onclick = function(){
    location.reload();
}

closeWard.onclick = function(){
    window.close();
}

function showCode(code){
    wardTerm.readOnly = true;
    wardTerm.value = code;
    wardTerm.select();
}
