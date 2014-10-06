function init() {
    generateNavigationBar();
}

function generateNavigationBar() {
    var navBar = "";
    navBar += '<div class="container">';
    navBar += '<!-- Brand and toggle get grouped for better mobile display -->';
    navBar += '<div class="navbar-header">';
    navBar += '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">';
    navBar += '<span class="sr-only">Toggle navigation</span>';
    navBar += '<span class="icon-bar"></span>';
    navBar += '<span class="icon-bar"></span>';
    navBar += '<span class="icon-bar"></span>';
    navBar += '</button>';
    navBar += '<a class="navbar-brand" href="index.html">Home</a>';
    navBar += '</div>';
    navBar += '<!-- Collect the nav links, forms, and other content for toggling -->';
    navBar += '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
    navBar += '<ul class="nav navbar-nav navbar-right">';
    navBar += '<li>';
    navBar += '<a href="about.html">About Us</a>';
    navBar += '</li>';
    navBar += '<li>';
    navBar += '<a href="roster.html">Roster</a>';
    navBar += '</li>';
    navBar += '<li>';
    navBar += '<a href="contact.html">Contact</a>';
    navBar += '</li>';
    navBar += '<li class="dropdown">';
    navBar += '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Schedules<b class="caret"></b></a>';
    navBar += '<ul class="dropdown-menu">';
    navBar += '<li>';
    navBar += '<a href="drillday.html">Drill Day</a>';
    navBar += '</li>';
    navBar += '<li>';
    navBar += '<a href="matchday.html">Match Day</a>';
    navBar += '</li>';
    navBar += '</ul>';
    navBar += '</li>';
    /*
     *navBar += '<li class="dropdown">';
     *navBar += '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Blog <b class="caret"></b></a>';
     *navBar += '<ul class="dropdown-menu">';
     *navBar += '<li>';
     *navBar += '<a href="blog-home-1.html">Blog Home 1</a>';
     *navBar += '</li>';
     *navBar += '<li>';
     *navBar += '<a href="blog-home-2.html">Blog Home 2</a>';
     *navBar += '</li>';
     *navBar += '<li>';
     *navBar += '<a href="blog-post.html">Blog Post</a>';
     *navBar += '</li>';
     *navBar += '</ul>';
     *navBar += '</li>';
     *navBar += '<li class="dropdown">';
     *navBar += '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Other Pages <b class="caret"></b></a>';
     *navBar += '<ul class="dropdown-menu">';
     *navBar += '<li>';
     *navBar += '<a href="full-width.html">Full Width Page</a>';
     *navBar += '</li>';
     *navBar += '<li>';
     *navBar += '<a href="sidebar.html">Sidebar Page</a>';
     *navBar += '</li>';
     *navBar += '<li>';
     *navBar += '<a href="faq.html">FAQ</a>';
     *navBar += '</li>';
     *navBar += '<li>';
     *navBar += '<a href="404.html">404</a>';
     *navBar += '</li>';
     *navBar += '<li>';
     *navBar += '<a href="pricing.html">Pricing Table</a>';
     *navBar += '</li>';
     *navBar += '</ul>';
     *navBar += '</li>';
     */
    navBar += '</ul>';
    navBar += '</div>';
    navBar += '<!-- /.navbar-collapse -->';
    navBar += '</div>';
    document.getElementById("navBar").innerHTML = navBar;
}

