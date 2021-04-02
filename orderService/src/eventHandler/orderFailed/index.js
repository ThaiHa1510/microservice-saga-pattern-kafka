const orderFailed = require('./orderFailed');
const EventHandler= (message) => {

    switch(message.type){
        case 'ORDER_PAYMENT_FAILED':
            orderFailed(message);
            break;
        case 'ORDER_ORCHESTATOR_FAILED':
            orderFailed(message);
            break;
        default:
            break;    

    }
            
}