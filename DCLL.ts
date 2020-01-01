export class DCnode {

    value:number;
    right:DCnode|null;
    left:DCnode|null;
    accessed:boolean;

    constructor(value:number) {
        this.value = value;
        this.right = null;
        this.left = null;
        this.accessed = false;
    }
}

export class DCLL {

        head:DCnode|null
        // tail:DCnode|null

        constructor(){
            this.head = null;
            // this.tail = null;
        }

        appendDCnode:Function = (value:number) => {
            if(this.head == null) {
                let a:DCnode = new DCnode(value)
                this.head = a;
                a.left = a;
                a.right = a;
            } else {
                let b:DCnode|null = this.head
                while (b.right != this.head) {
                    b = b.right;
                }
                let c:DCnode|null = new DCnode(value)
                b.right = c
                this.head.left = c
                c.right = this.head
                c.left = b
            }
        }

        deleteDCNode:Function = (target:number) => {
            if(this.head == null) {
                return "The list is empty"
            } else if (this.head.value == target) {
                if (this.head.left == this.head) {
                    this.head = null
                } else {
                    let a:DCnode|null = this.head.left
                    let b:DCnode|null = this.head.right
                    a.right = b
                    b.left = a
                    this.head = b
                }
            } else {
                let a:DCnode|null = this.head.left
                let b:DCnode|null = this.head.right
                this.head.accessed = true;
                while (a.accessed == false && a.value != target && b.value != target) {
                    a = a.left
                    b = b.right
                }
                if (a.value == target) {
                    let p:DCnode|null = a.left
                    let f:DCnode|null = a.right
                    p.right = f
                    f.left = p
                    this.head.accessed = false;
                    return a
                } else if (b.value == target) {
                    let p:DCnode|null = b.left
                    let f:DCnode|null = b.right
                    p.right = f
                    f.left = p
                    this.head.accessed = false;
                    return b
                } else {
                    return "The list has been searched and the value has not been found"
                }
            }
        }

        displayList:Function = () => {
            let output: number[] = [];
            if (this.head == null) {
                return "The List is Empty"
            } else {
                let a:DCnode|null = this.head.right
                this.head.accessed = true
                output.push(this.head.value)
                while (a.accessed == false) {
                    output.push(a.value)
                    a = a.right
                }
                console.log("complete")
                return output
            }
        }
}