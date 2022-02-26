/*

Assume you have a call center with three levels of employees: fresher, technical lead (TL), product manager (PM).
There can be multiple freshers, multiple TL or PM.
An incoming telephone call must be allocated to a fresher who is free.
If a fresher can’t handle the call, he or she must escalate the call to technical lead.
If the TL is not free then the call should be escalated to PM.
Design the classes and data structures for this problem. 
Implement a method getCallHandler().

F, TL, PM

- fresher -> escalate
    - busy

- getCallHandler
    - freshers, tech leads, product managers
    - if freshers
        - pop, return id
    - if tech leads
        - pop, return id
    - if prd ma
        - pop, return id
    - return null;

*/

const freshers = [1, 2];
const techLeads = [1, 2];
const productManagers = [1, 2];

const { callerId, type, freeTheAgent } = getCallHandler();

freeTheAgent(callerId);
class Person {
    constructor(id, type) {
        id = id;
        type = type;
        inACall = false;
    }
}
// 1, 2 - T | 3
/*
3, 1, 2
Wrong
- queue

*/

class GetCallHandler {
    constructor() {
        freshers = [1];
        techLeads = [2];
        productManagers = [];
        timeout = [];
    }
    addingPerson(person) {
        
    }

    getCallHandler() {
        // freshers
        if(freshers.length > 0){
            return {
                id: freshers.pop(),
                type: 'FRESHERS'
            }
        }
    }

    freeTheAgent(person) {
        // switch
        switch(person.type) {
            case 'FRESHERS':
                freshers.push(person.id);
        }
    }
    timeoutToFree() {

    }
}
// Can you see
const list = new GetCallHandler();
const person = new Person(name, id);
list.addingPerson(person);

const person1 =  list.getCallHandler();
const person2 =  list.getCallHandler();
const person3 =  list.getCallHandler();

list.freeTheAgent(person1); // Call failed

