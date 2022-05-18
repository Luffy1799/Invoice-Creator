//Arrays

let services = [{service: "Wash Car", price: 10}, {service:"Mow Lawn", price: 20}, {service: "Pull weeds", price: 30}]
let tasks = []


//DOM Objects

let srvbtn1 = document.getElementById("srv1")
let srvbtn2 = document.getElementById("srv2")
let srvbtn3 = document.getElementById("srv3")
let invBtn = document.getElementById("invoiceBtn")
let taskList = document.getElementById("taskList")
let cost = document.getElementById("totalCost")

// Set button names

srvbtn1.textContent = services[0].service + ": $" +services[0].price
srvbtn2.textContent = services[1].service + ": $" +services[1].price
srvbtn3.textContent = services[2].service + ": $" +services[2].price





//Functions

// Create List

function renderList() {
        let list = ""
        for(let i = 0; i < tasks.length; i++) {
            
            if(tasks.length == 0) {}
            else {
                list += `<div class="taskLine">
                                <div class="flex">
                                        <h3>${tasks[i].service}</h3>
                                        <h class="remove" id = "rem${i}">remove</h3>
                                </div>
                                <h3 class="value">$${tasks[i].price}</h3>
                        </div>`
            }
        }
        rem1 = document.getElementById("rem0")
        rem2 = document.getElementById("rem1")
        rem3 = document.getElementById("rem2")
        taskList.innerHTML = list
        totalCost()
        

}

//Add to invoice array from service array

function addToList(i) {
        if (i == 1) {
                if(!tasks.includes(services[0])) {
                        tasks.push(services[0])
                }
        }
        else if (i == 2) {
                if(!tasks.includes(services[1])) {
                        tasks.push(services[1])
                }
        }
        else if (i == 3) {
                if(!tasks.includes(services[2])) {
                        tasks.push(services[2])
                }
        }
}

//Service Buttons onClick

srvbtn1.addEventListener('click', function() {
        addToList(1)
        
        renderList()
        
})
srvbtn2.addEventListener('click', function() {
        addToList(2)
        
        renderList()
})
srvbtn3.addEventListener('click', function() {
        addToList(3)
        
        renderList()
})


//Invoice button

function reset(){
        tasks = []
        renderList()
}

//Sum of all services in the invoice

function totalCost() {
       let sum = 0;
        for(let i = 0; i < tasks.length; i++) {
                 sum += tasks[i].price
        }  
        cost.textContent = "$"+sum        
              
}




