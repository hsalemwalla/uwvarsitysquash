
function drillCategorySelect(element) {
    hideAll()           
    switch(element.id) {
        case "but_warmup":
            $("#warmup").fadeIn()
            break
        case "but_footwork":
            $("#footwork").fadeIn()
            break
        case "but_volleys":
            $("#volleys").fadeIn()
            break
        case "but_conditionalgames":
            $("#conditionalgames").fadeIn()
            break
        case "but_technique":
            $("#technique").fadeIn()
            break
    }

}

function hideAll() {
    $("#warmup").fadeOut()
    $("#footwork").fadeOut()
    $("#volleys").fadeOut()
    $("#conditionalgames").fadeOut()
    $("#technique").fadeOut()
}

var temp = ' <!-- Projects Row --> <div class="row"> <div class="col-md-4 img-portfolio"> <a href="portfolio-item.html"> <img class="img-responsive img-hover" src="http://placehold.it/700x400" alt=""> </a> <h3> <a href="portfolio-item.html">Project Name</a> </h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p> </div> <div class="col-md-4 img-portfolio"> <a href="portfolio-item.html"> <img class="img-responsive img-hover" src="http://placehold.it/700x400" alt=""> </a> <h3> <a href="portfolio-item.html">Project Name</a> </h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p> </div> <div class="col-md-4 img-portfolio"> <a href="portfolio-item.html"> <img class="img-responsive img-hover" src="http://placehold.it/700x400" alt=""> </a> <h3> <a href="portfolio-item.html">Project Name</a> </h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p> </div> </div> <!-- /.row --> <!-- Projects Row --> <div class="row"> <div class="col-md-4 img-portfolio"> <a href="portfolio-item.html"> <img class="img-responsive img-hover" src="http://placehold.it/700x400" alt=""> </a> <h3> <a href="portfolio-item.html">Project Name</a> </h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p> </div> <div class="col-md-4 img-portfolio"> <a href="portfolio-item.html"> <img class="img-responsive img-hover" src="http://placehold.it/700x400" alt=""> </a> <h3> <a href="portfolio-item.html">Project Name</a> </h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p> </div> <div class="col-md-4 img-portfolio"> <a href="portfolio-item.html"> <img class="img-responsive img-hover" src="http://placehold.it/700x400" alt=""> </a> <h3> <a href="portfolio-item.html">Project Name</a> </h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p> </div> </div> <!-- /.row --> '
