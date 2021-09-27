// Uses cheerio and request promise to scrape static web page

const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
    url: 'https://en.wikipedia.org/wiki/Main_Page',
    transform: function (html) {
        return cheerio.load(html);
    }
};


// first example
rp('https://en.wikipedia.org/wiki/Main_Page')
    .then(function (html) {
        console.log(html);
    })
    .catch(function (error) {
        console.log(error);
    });

// get text example
rp(options)
    .then(($) => {
        console.log($('#mp-portals').text());
    })
    .catch(function(err){
        console.log(err);
    });


// get href example
rp(options)
    .then(($) => {
        $('#mp-portals li a').each(function(){
            console.log("url: " + this.attribs.href);
        });
    })
    .catch(function(err){
        console.log(err);
    });

