# UW Varsity Squash | [uwvarsitysquash.com](uwvarsitysquash.com)
---
*Team website for the University of Waterloo Varsity Squash team*

## Description of files
Description of the various files found in the repository. 

### 404.html

Provides a error page (404-page not found) if someone tries to access a page that does not exist

### about.html

Contains a picture and short description (TODO) of the team

### calendar.html

Contains the embeded UW-public calendar as an iframe (code copied directly from the google calendar). May need to add `width="100%"` CSS attribute to the iframe to size correctly. 

### contact.html

Currently empty - designed to contain contact info for the coaches and captains. All code for the "contact_us" form was removed. 

### drills.html

Work in progress - designed to contain information about drills in various categories and levels of difficulty. You may want to remove the navigation element to this page, which can be done in [js/common.js](js/common.js). 

### index.html

Website's homepage, must be called index.html. Contains news articles which are pulled from [js.json/news.json](js/json/news.json)

### practices.html

Contains the drill and match day schedule. A link to the google sheet is provided, along with the embeded sheet in an iframe. Must add `class="gdoc"` to the iframe to format correctly on the page. The CSS class can be found in [css/main.css](css/main.css).

### roster.html

Contains the full roster seperated in tabs. Data is pulled from [js/json/roster.json](js/json/roster.json).

### js/common.js

Generates the navigation bar for all the pages. A string of html code is stored in a variable which is used to populate the navigation bar. Change this file to add, remove or update links.

### js/drills.js

Designed to generate the content and navigation for the drills page.

### js/roster.js

Generates the HTML for the roster page based on [js/json/roster.json](js/json/roster.json].

### js/json/news.json

Contains news articles to display on the home page, with newest articles appearing at the top of the file. Copy the following to the first index and replace title and article with content. Include any tags in the article for formatting. It will be displayed as HTML:

    {
        "title":"insert-title-here",
        "article":"insert-content-here"
    },

### js/json/roster.json

Contains the data for the roster for men's, women's, and coaches. The following format is used for each entry:

    { "name":"John S" , "image":"John_S.jpg" , "description":"A description" } ,
    
The image must be placed in the \img\ folder, and the filenames must match *exactly* to the filename provided in the json file. *i.e. If a .JPG extension (note capital letters) is used in the image file, the JSON image attribute must also have the extension .JPG (note capital letters)*

The description attribute adds text below the individuals image in the roster page. 

### css\main.css

Custom cascading style sheet (CSS) attributes and classes used to format specific content on the site. 

### files\\ directory

Contains raw files which the site may need. e.g. a PDF which can be downloaded through a link on the site. 

## Contributing

There is only one branch **gh-pages** in use, which is used by the hosted site. Commits to this branch will update the main site immediately. 

You can make changes directly to files in github if you are added as a collaborator in github. Ideally, if you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed on your computer, clone the repository on your machine, where you can make and test changes before pushing them to the actual site. 

> Clone the repository `git clone https://github.com/hsalemwalla/uwvarsitysquash.git` 
> 
> Navigate to the directory `cd uwvarsitysquash`
> 
> Make changes
> 
> Open the html files in a browser to test changes
> 
> Stage the files to be commited `git add <files changed>`
> 
> Commit files `git commit -m <commit message>`
> 
> Push the files to Github `git push`



If you are new to Git, the following link has some info to help you get started:
https://git-scm.com/doc

