class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }


    //insert at first 0[1]
    prepend(val) {
        const node = new Node(val);
        //if(this.isEmpty())
        node.next = this.head;

        this.head = node;
        this.size++;
    }

    //inserting at the end  O[n]
    append(val) {
        const node = new Node(val);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;

        }
        this.size++;

    }

    //Note:for inserting we are using index not the position
    insert(val, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }
        if (index === 0) {
            this.prepend(val);
        }
        // else if(index === this.size)
        // {
        //     this.append(val);
        // }
        else {
            const node = new Node(val);
            let curr = this.head;

            for (let i = 1; i < index; i++) {
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
        }
        this.size++;
    }

    remove(index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
        }
        else {
            let prev = this.head;
            for (let i = 1; i < index; i++) {
                prev = prev.next;
            }

            prev.next = prev.next.next;

        }
        this.size--;
    }


    removeVal(val) {
        if (this.isEmpty()) {
            console.log("Empty list");
            return;
        }
        if (this.head.val === val) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        else {
            let curr = this.head;

            while (curr.next) {

                if (curr.next.val === val) {
                    console.log("key Found and node removed")
                    curr.next = curr.next.next;
                    this.size--;
                    return;
                }
                curr = curr.next;

            }
        }
    }

   search(key) {
        if (this.isEmpty()) {
            console.log("List is empty");
            return -1;
        }
        else {
            let curr = this.head,i = 0;;
            while (curr) {
              if(curr.val === key){
                console.log('Key found');
                return i;
              }
                curr = curr.next;
                i++;
            }
           
        }
        return -1;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        }
        else {
            let curr = this.head;
            let listVal = ' ';
            while (curr) {
                listVal += `${curr.val} `;
                curr = curr.next;
            }
            console.log(listVal);
        }
    }

    reverse(){
        let prev = null;
        let curr = this.head;

        while(curr){
            let next  = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        this.head = prev;
    }
}

const list = new LinkedList();
console.log('List is empty?', list.isEmpty());
console.log('List size', list.getSize());


list.print();
list.prepend(10); //10
list.print();
list.prepend(20);// 20 10
list.print();
list.prepend(30);//30 20 10

list.append(150); // 30 20 10 150
list.insert(500, 2); //30 20 2 10 150
list.insert(1500, 5); // 30 20 2 10 150 1500

list.remove(2); // 30 20 10 150 1500
list.print();

list.remove(4); // 30 20 10 150
list.print();
list.remove(0); // 20 10 150
list.print();

list.removeVal(10);// 20 150
list.print();

console.log(list.search(150));
console.log(list.search(1500));

list.reverse();
list.print();