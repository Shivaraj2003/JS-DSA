class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        return this.items.shift();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString());
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print();

queue.dequeue();

queue.print();

console.log(queue.size())
