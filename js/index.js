function generateNews() {
    var newsHTML = "";
    for (var i = 0; i < news.length; i++) {
        newsHTML += generateNewsTag(news[i].title, news[i].article);
    }
    document.getElementById("newsContainer").innerHTML = newsHTML;
}

function generateNewsTag(title, article) {
    var tag = "";
    tag += "<div class='box'><div class='row'><div class='col-lg-12'><div class='box-content'><hr><h3 class='intro-text text-center'>";
    tag += title;
    tag += "</h3><hr>";
    tag += article;
    tag += "</div></div></div></div>";
    return tag;

}
