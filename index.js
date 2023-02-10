const http=require('http')

let server=http.createServer((req,res)=>{
    console.log('My name is Amar')
})

server.listen(3000)