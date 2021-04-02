const orderModel = require('../../Model/orderModel');
const Producer = require('../../../../kafkaBroker/kafkaHandler/routes');
const TOPIC_PRODUCER='ORDER_SUCCESS';
module.exports = async (message) => {

    try {
        const transactionId = message.payload.transactionId;
        const order = await orderModel.findOneAndUpdate({ transactionId : transactionId },{
            status : 'PAYMENT_COMPLETED'
        });
        Producer({
            topic : TOPIC_PRODUCER,
            type : 'ORDER_SUCCESS',
            payload : {
                transactionId : data.transactionId,
            }
        })

    }
    catch(e){
        console.log(e);
    }
    //Payment Completed Status Updated on Order Service
}