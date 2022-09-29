const { response, request } = require('express');
const express = require( 'express');

const app = express()

app.get('/me', (require, response)=>{
    response.status(200).json({
        message: ' carlos andres davila barragan, 30, mexico'})
        verb: request.method
    })

    app.post('/metas', (require, response)=>{
        console.log(request.method)
        response.status(200).json({message:
             'jugar con mi hija , tiro deportivo, gym, programar'});
        })
    
    app.patch('/bussines', (require, response)=>{
            console.log(request.method)
            response.status(200).json({message:
                 ' mi meta es poder acceder a un buen trabajo como programdor y poderle dar una estabilidad economica a mi hija'});
            })
        
            app.put('/metas', (require, response)=>{
                console.log(request.method)
                response.status(200).json({message:
                     ' me gustaria trabajar en globant, amazon, oracle, mercadolibre o en alguna empresa exrangera'});
                })
            
/* verbos http
GET 
POST
PUT
PATCH
DELETE
*/
// STATUS 
// 100
// 200 
// 300
// 400 
// 500 
// HEADERS


app.listen(9000, () =>{
    console.log('server started at port 9000')
})