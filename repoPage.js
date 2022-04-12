let request = require('request');
let cheerio = require('cheerio');

function reposPage(url, topic){
request(url,cb)

function cb(err, res, body){
    if(err){
        console.err(err);
    }else{
       // console.log(body);
       getRepoLink(body); 
    }
}

function getRepoLink(html){
    let $ = cheerio.load(html);
   // console.log(html);
   
   let headingArr = $('.f3.color-fg-muted.text-normal.lh-condensed');
  // console.log(headingArr);
   console.log(topic);
   console.log("-----------------------");
   for(let i=0;i<8;i++){
        let topLink = $(headingArr[i]).find("a");
       // console.log(topLink);
       let mainLink = $(topLink[0]).attr("href");
        console.log(mainLink);
   }
   console.log("-----------------------");

}

}

module.exports = reposPage;