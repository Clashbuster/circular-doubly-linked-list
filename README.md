# circular-doubly-linked-list
a bare minimum circular doubly linked list implementation in typescript


If you want to import the linked list then simply type this into an adjecent file.

In the quotations you will need to use the correct relative or complete path.

```
import { DCLL } from "./DCLL";
import { DCnode } from "./DCLL";


let list:DCLL = new DCLL

//example

dCLL.appendDCnode([your node])
dCLL.deleteDCNode([the value to delete from list])
dCLL.displayList()

```

I have made this list so that it only works for numbers. If you want it to work for strings or whatever else you merely need to change the type. and the deletion function to recognize whatever type you are using.

