const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Consumer = require('../../kafkaBroker/kafkaHandler/Consumer');
const eventHandler = require('./eventHandler');
const CreateOrder = require('./Controller/createOrder');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
const topics=["ORDER_SERVICE","SERVICE_REPLY","PAYMENT_FAILED_REPLY","ORCHESTATOR_FAILED_REPLY"];
mongoose.connect("mongodb://localhost:27017/orderdb",{ useNewUrlParser : true,useUnifiedTopology : true }).then(data => {

    app.post('/createorder',CreateOrder);

    const PORT = 3000;

    app.listen(PORT,() => {
        console.log('server is running on port 3000');
    })

    const consumer = new Consumer();

    topics.forEach((topic,index)=>{
        consumer.addTopics(topic).then(() => {
            consumer.consume(message => {
                console.log("consumed message",message);
                eventHandler(JSON.parse(message),topic);
            })
        })
    })
    
})
.catch(err => {
    console.log(`Error in Mongo Connection ${err}`)
})



