
function populateRoster() {
    var roster = "";
    roster += '<div class="col-lg-12">';
    roster += '<h2 class="page-header">Our Team</h2>';
    roster += '</div>';
    roster += generatePlayerDiv("Hussein Salemwalla", "Hussein.jpg", "Testing Description");
    roster += generatePlayerDiv("Jeff Porter", "Jeff P (2).jpg" , "Testing Another Description");
    document.getElementById("roster").innerHTML = roster;

}

function generatePlayerDiv(name, img, desc) {
    var str;
    str = '<div class="col-md-4 text-center">';
    str += '<div class="thumbnail">';
    str += '<img href="#" class="img-responsive" src="img/' + img + '" alt="">';
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
            
