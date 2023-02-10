const http=require('http')

let server=http.createServer((req,res)=>{
    let message
    if (req.url==='/'){
        message='Welcome to homepage'
    }
    else if (req.url==='/about'){
        message='Welcome to About page'
    }
    else if (req.url==='/node'){
        message='Welcome to NodeJs project'
    }
    let htmlcode=`
    <html>
    <head>
    <title>amar node</title>
    <body>
    <h1>${message}</h1>
    </body>
    </head>
    </html>
    `
    res.write(htmlcode)
    res.end()
})

server.listen(3000)