const http = require('http')
const fs = require ('fs')
const port = 3000

const server = http.createServer(function(req, res){
    res.writeHead(200,{ 'Content-Type': 'text/html' })
    fs.readFile('0_test/index.html', function(error, data){
        if (error){
            res.writeHead(404)
            res.write('File not found')
        }
        else{
            res.write(data)
            res.end()
        }
    })

})

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong. See ', error)
    }else{
        console.log('Sever is listening in port ' + port)
    }
})