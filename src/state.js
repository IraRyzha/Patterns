class Order {
    constructor() {
        this.state = new InProcessingState(this);
    }
    setState(state) {
        this.state = state;
    }
    next() {
        if (this.state === 'Canceled!') {
            return 1;
        } else {
            this.state.next();
        }
    }
    cancel() {
        if (this.state === 'Canceled!') {
            return 1;
        } else {
            this.state.cancel();
        }
    }
}

class State {
    constructor(order) {
        this.order = order;
    }
    next() {
        console.log('Order is not received!')
    }
}
class InProcessingState extends State {
    next() {
        console.log('Order is processing.')
        this.order.setState(new AwaitingPaymentState(this.order))
    }
    cancel() {
        console.log('Order is canceled.')
        this.order.setState('Canceled!')
    }
}
class AwaitingPaymentState extends State {
    next() {
        console.log('Order is awaiting for payment.')
        this.order.setState(new ShippedState(this.order))
    }
    cancel() {
        console.log('Order is canceled.')
        this.order.setState('Canceled!')
    }
}
class ShippedState extends State {
    next() {
        console.log('Order is shipped.')
        this.order.setState(new DeliveredState(this.order))
    }
    cancel() {
        console.log('Order is canceled.')
        this.order.setState('Canceled!')
    }
}
class DeliveredState extends State {
    next() {
        console.log('Order is delivered.')
    }
    cancel() {
        console.log('Order return is requested.')
    }
}


const newOrder = new Order();

// console.log(newOrder)

// newOrder.cancel()
newOrder.next()
newOrder.cancel()
newOrder.next()
newOrder.cancel()

// console.log(newOrder)