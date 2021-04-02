const orderModel = require('../../Model/orderModel');
const Producer = require('../../../../kafkaBroker/kafkaHandler/routes');
const TOPIC_PRODUCER='ORDER_FAILED_MONITOR';
module.exports = async (message) => {

    try {
        const transactionId = message.payload.transactionId;
        const order = await orderModel.findOneAndUpdate({ transactionId : transactionId },{
            status : message.type
        });
        // emit to  log and monitor err 
        Producer({
            topic : TOPIC_PRODUCER,
            type : message.type,
            payload : {
                transactionId : data.transactionId,
                code: data.code,
                message:data.message
            }
        })

    }
    catch(e){
        console.log(e);
    }
    //Payment Completed Status Updated on Order Service
}