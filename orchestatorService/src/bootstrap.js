const Consumer = require('../../kafkaBroker/kafkaHandler/Consumer');
const Transactions = require('./Transactions');
const listTopics = ["ORCHESTATOR_SERVICE","ORCHESTATOR_CANCEL"]
try {

const consumer = new Consumer();

listTopics.forEach((topic)=>{
    consumer.addTopics([topic]).then(() => {
        consumer.consume(message => {
            console.log("consumed message",message);
            Transactions(JSON.parse(message.value));
        })
    })
})

console.log("Orchestator Started successfully");

}
catch(e){
    console.log(`Orchestrator Error ${e}`);
}