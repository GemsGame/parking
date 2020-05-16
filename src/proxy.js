const http = require('http');
const req = require("request");
const port = 11000;

const server = http.createServer(function(request, response){
    response.setHeader("Access-Control-Allow-Origin", '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
    
    if(request.url){
     
        req.get(`http://80.249.84.47:11000/${request.url}`, (err, res) => {
            if(res) {

                response.write(res.body);
                response.end();
            } else {
                response.write(err);
                response.end();
            }
       
        })
       
    } 
 
}

)


server.listen(port, () => {
  console.log(`Server running at ${port}/`);
}); 
