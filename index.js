
const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{


    

    if (req.url==='/'){
        
        let mydata=fs.readFileSync('message.txt','utf-8')
        let htmlCode=`
    <html>

<head></head>
<title>Apun ka server</title>

<body>
<p>${mydata}</p>
<form action="/message" method="post">
    <input type="text" placeholder="enter a message" name='message'>
    <button type="submit">Send</button>
</form>
</body>

</html>
    `
        res.write(htmlCode)
        return res.end()
    }

    if (req.url==='/message' && req.method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            body.push(chunk)
        })

        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString()
            fs.writeFileSync('message.txt', parsedBody.split('=')[1])
        })
        
        res.statusCode=302
        res.setHeader('Location','/')
        return res.end()
    }
let htmlCodeforelse=`

<html>

<head></head>


<body>
<h3>Thanks for Your message</h3>
</body>

</html>


`
    res.write(htmlCodeforelse)
    return res.end()

})

server.listen(3000)

