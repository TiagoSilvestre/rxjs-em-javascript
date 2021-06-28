const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    const matchURL = /^\/response\/(.+)\/delay\/(\d+)\/?$/;
    //A url vai ser assim:  http://localhost:5000/response/{"data": "Hello World"}/delay/1000/

    // se a url nao bater com a regex ele retorna 
    if(!matchURL.test(req.url)) return res.end();

    const [, response, delay] = matchURL.exec(req.url);
    console.log(matchURL)
    const jsonResponse = decodeURIComponent(response);

    setTimeout(() => {
        res.write(jsonResponse);
        res.end();
    }, +delay) // esse + é a mesma coisa de fazer um parseInt, transforma string em int
}).listen(5000);