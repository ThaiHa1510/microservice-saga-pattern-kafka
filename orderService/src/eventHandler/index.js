const paymentCompleted = require('./paymentCompleted');
const orderFailed = require('./orderFailed');
module.exports =(message,topic) => {

    switch(topic){
        case 'ORDER_SERVICE':
            paymentCompleted(message);
            //createOrder(message);
            break;
        case 'UPDATE_ORDER':
       //     paymentCompleted(message);
            updateOrder(message);
            break;
        case 'ORDER_COMPLETED':
            paymentCompleted(message);
            break;
        case 'PAYMENT_FAILED_REPLY':
            orderFailed(message);
            break;
        case 'ORCHESTATOR_FAILED_REPLY':
            orderFailed(message);
            break;
        default:
            break;    

    }
            
}
