const updateOrder = require('./updateOrder');
let update = updateOrder();
module.exports= (message) => {

    switch(message.type){
        case 'ORDER_PAYMENT_COMPLETED':
            update.paymentComplete(message);
            break;
        case 'ODER_ORCHESTATOR_COMPLETED':
            update.orchestatorComplete(message);
            break;
        default:
            break;    

    }
            
}