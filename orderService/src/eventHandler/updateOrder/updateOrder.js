const orderModel = require('../../Model/orderModel');
const Producer = require('../../../../kafkaBroker/kafkaHandler/routes');
const TOPIC_PRODUCER='ORDER_SUCCESS';
const ERR_TOPIC='ORDER_UPDATE_ERROR';
const UpdateOrder = ()=>{

}
UpdateOrder.prototype.paymentComplete = async (message) => {

    try {
        const transactionId = message.payload.transactionId;
        const order = await orderModel.findOneAndUpdate({ transactionId : transactionId },{
            status : 'PAYMENT_COMPLETED'
        });
            }
    catch(e){
        console.log(e);
        Producer({
            topic : ERR_TOPIC,
            type : 'FAILED_UPDATE_PAYMENT_COMPLETED',
            payload : {
                transactionId : data.transactionId,
            }
        })

    }
    //Payment Completed Status Updated on Order Service

}

UpdateOrder.prototype.orchestatorComplete = async (message) => {

    try {
        const transactionId = message.payload.transactionId;
        const order = await orderModel.findOneAndUpdate({ transactionId : transactionId },{
            status : 'ORCHESTATOR_COMPLETED'
        });

    }
    catch(e){
        console.log(e);
        Producer({
            topic : ERR_TOPIC,
            type : 'FAILED_UPDATE_ORCHESTATOR_COMPLETED',
            payload : {
                transactionId : data.transactionId,
            }
        })

    }
    //Payment Completed Status Updated on Order Service

}

module.exports = UpdateOrder;