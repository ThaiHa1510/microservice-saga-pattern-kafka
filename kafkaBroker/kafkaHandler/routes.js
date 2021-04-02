const Producer = require('./Producer');

const producer = new Producer();


const messageTypeToTopicMessaging = {
    ORDER_BEGIN:["ORDER_SERVICE"],
    ORDER_FAILED:["ORDER_FAILED_SERVICE","NOTI_ORDER_FAILED"],
    ORDER_UPDATE:["UPDATE_ORDER"],
    ORDER_COMPLETED:["ORDER_COMPLETED","NOTI_ORDER_COMPLETED"],
    ORDER_REMOVED:['ORDER_REMOVED'],
    ORDER_CREATION_TRANSACTIONS : ["ORCHESTATOR_SERVICE"],
    ORDER_PREPARED : ["ORCHESTATOR_SERVICE"],
    ORCHESTATOR_FAILED_STATE:["ORCHESTATOR_FAILED_REPLY"],
    ORDER_CREATION_ORCHESTATOR:["PAYMENT_SERVICE"],
    OUT_OF_STOCK_ORDER : ["ORCHESTATOR_SERVICE"],
    PAYMENT_FAILED_STATE : ["PAYMENT_FAILED_REPLY"],
    PAYMENT_COMPLETED_STATE : ["ORCHESTATOR_SERVICE"],
    EXECUTE_PAYMENT : ["PAYMENT_SERVICE"],
    PREPARE_ORDER : ["STOCK_SERVICE"],
}

module.exports = (payload) => {
    messageTypeToTopicMessaging[payload.topic].forEach(topic => {
        console.log("topic",payload);
        console.log("payload",payload);
        producer.produce(topic,JSON.stringify(payload));
    })
}