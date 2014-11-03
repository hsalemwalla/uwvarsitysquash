function populateRosterDiv() {
    populateRosterMens();
    populateRosterWomens();
}

function populateRosterMens() {
    
    var rosterHTML = "";
    rosterHTML += "<br>";
    
    // Generate a string with each of the entries in the parsed json
    for (var i = 0; i < mens.length; i++) {
        rosterHTML += generatePlayerDiv(mens[i].name, mens[i].image, mens[i].description);
    }

    document.getElementById("mensRoster").innerHTML = rosterHTML;

}

function populateRosterWomens() {
    
    var rosterHTML = "";
    rosterHTML += "<br>";
    
    // Generate a string with each of the entries in the parsed json
    for (var i = 0; i < womens.length; i++) {
        rosterHTML += generatePlayerDiv(womens[i].name, womens[i].image, womens[i].description);
    }

    document.getElementById("womensRoster").innerHTML = rosterHTML;

}

function generatePlayerDiv(name, img, desc) {
    var str;
    str = '<div class="col-md-4 text-center">';
    str += '<div class="thumbnail">';
    str += '<img href="#" class="img-responsive" src="img/' + img + '" onerror=\"this.src=\'img/headshotNotFound.JPG\'\" alt="Image Not Found">';
    str += '<div class="caption">';
    str += '<h3>';
    str += name;
    str += '<br>';    
    str += '</h3>';
    str += '<hr>';
    str += '<p>';
    str += desc;
    str +='</p>';
    str += '</div>';
    str += '</div>';
    str += '</div>';
    
    return str;
}
            
