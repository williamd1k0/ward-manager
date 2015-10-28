function Ward(term){

    var _name = term || "None";
    var _code = btoa(_name);

    this.getCode = function(){
        return _code;
    };
    this.getName = function(){
        return _name;
    };

}

function ward(code, group){
    group = group || 'taverna.do.cogu';
    if(code){
        chrome.tabs.create(
            {'url': 'https://www.facebook.com/groups/'+group+'/search/?query='+code}
        );
    }
}

function createData(data){
    var data_element = document.createElement('option');
    data_element.value = data;
    data_element.textContent = data;
    return data_element;
}
