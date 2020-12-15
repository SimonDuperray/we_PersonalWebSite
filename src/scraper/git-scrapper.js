/*
    AMELIORATIONS
    - détecter la première lettre du (ou des mots si esp) et -> capitallETTER
    - détecter si !convention et si private alors ne pas prendre en compte
    - scrap languages and pourcentages instead of just one language
    - traitement des accents et des caratères spéciaux dans les noms des repos
    - scraper image github instead of stock it locally
    - ne pas prendre en compte les noms de repos dans convention de nommage ni les repos privés
*/

const https = require("https");
const fs = require("fs");

let username = "SimonDuperray";

let CHROME_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36";
let FIREFOX_USER_AGENT = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:77.0) Gecko/20190101 Firefox/77.0";
let IE_USER_AGENT = "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko";

let options = {
    host: 'api.github.com',
    path: '/users/' + username + '/repos',
    method: 'GET',
    headers: { 'user-agent': CHROME_USER_AGENT }
};

class Project {
    constructor(name, category, html_url, description, created_at, language) {
        this.name=name;
        this.category=category;
        this.html_url=html_url;
        this.description=description;
        this.created_at=created_at;
        this.language=language;
    }
};

let request = https.request(options, (response) => {
    let body = '';
    response.on('data', (out) => {
        body += out;
    });

    response.on('end', (out) => {
        var json = JSON.parse(body);
        // prepare Array to stock Project Objects
        var result = [];

        for(let i=0; i<Object.keys(json).length; i++){
            // 1. get currentProject
            const currentProject = json[i];
            
            // 2. analyze + treatment
            var currentName=currentProject['name'].split("_")[1];
            var currentCategory=currentProject['name'].split("_")[0];
            var currentHTMLUrl=currentProject['html_url'];
            if(currentProject["description"]===null){
                var currentDescription="Il n'y a pas encore de description.";
            } else {
                var currentDescription=currentProject['description'];
            }
            var currentCreatedAt=currentProject['created_at'].split("T")[0];
            if(currentProject['language']===null){
                var currentLanguage="Langage principal non disponible";
            } else {
                var currentLanguage=currentProject['language'];
            }

            var finalProject = new Project(currentName, currentCategory, currentHTMLUrl, currentDescription, currentCreatedAt, currentLanguage);

            console.log("=============================================================================");
            console.log(finalProject);
            console.log("=============================================================================");

            result.push(finalProject);
        };

        fs.writeFileSync('../database/database.json', JSON.stringify(result, null, 4), (err) => {
            if(err) throw err;
            console.log("Data written to file");
        });

    });
});

request.on('error', (e) => {
    console.log(e);
});

request.end();