/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    CPNT-262: Web Client & Server Prog.
    Day 9 Workshop - JavaScript
    Instructor: Heather Tovey

    Jason Park
    10/19/2018
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


// two JavaScript arrays with travel agent names and phone numbers 
const agentNames = ['agent 1', 'agent 2', 'agent 3', 'agent 4'];
const agentNumbers = ['(111)111-1111', '(222)222-2222', '(333)333-3333', '(444)444-4444'];

let addAgentToContactList = function(name, phoneNumber) {
	// get contact list
	let contactList = document.getElementById('contact-list');

    // create elements
    let contactInfo = document.createElement('div'); //Create a div to hold contact info
    let contactName = document.createElement('h2'); //Create h2 for agent's name
    let contactNum = document.createElement('p'); //Create p for agent's phone number
    let agentName = document.createTextNode(name); //Create text node with agent's name
    let agentNum = document.createTextNode(phoneNumber); //Create text node with agent's phone #
    
    // append
    contactName.appendChild(agentName); //Append agent's name to h2
	contactNum.appendChild(agentNum); //Append agent's phone # to p
	contactInfo.appendChild(contactName); //Append h2 to div
    contactInfo.appendChild(contactNum); //Append p to div
    contactList.appendChild(contactInfo); //Append new div to contact-list
}

for(let i = 0; i < agentNames.length; i++) {
    addAgentToContactList(agentNames[i], agentNumbers[i]);
}

