/*******Asynchronous Javascript**********/
/**
 * --------11.1 Async Code---------
 */

// Async code Example
// console.log(1);
// console.log(2);
// // Async code
// setTimeout(()=>{
//     console.log("Call back function called after 3 seconds")
// },3000);//After 3 seconds
// // Is this code block execuation for 3 seconds? No
// console.log(3);
// console.log(4);

/**
 * ---------11.2 XML Http Request---------
 * Making HTTP Request (Example)
 */
/*
let request = new XMLHttpRequest();

//console.log(request,readyState)
request.addEventListener('readystatechange',()=>{
    // console.log(request,request.readyState)
    if(request.readyState === 4){
        console.log(request.responseText)
    }
})

// Set up the request
request.open("Get","https://jsonplaceholder.typicode.com/todos")

// Sending the request
request.send();
*/
// value state Description
// 0 UNSENT Client has been created.open() not called yet.
// 1 OPENED open() has been called.
// 2 HEADERS_RECEIVED send() has been called, and headers
// 3 LOADING Downloading responseText holds partial data.
// 4 DONE The operation is complete. //
/**
 * ----------11.3 Status code-----------
 * HTTP response status codes
 */
// Informational responses (100 - 199)
// Successful responses (200 - 299)
// Redirection messages (300 - 399)
// client error responses (400 - 499)
// Server error responses (500 - 599)

/**
 * ----------11.4 Call back Function----------
 */
/*
let todos = (callback)=>{
    let request = new XMLHttpRequest();

    //console.log(request,readyState)
    request.addEventListener('readystatechange',()=>{
        // console.log(request,request.readyState)
        if(request.readyState === 4 && request.status ==200){
            // console.log(request.responseText)
            callback(undefined,request.responseText)
        }else if(request.readyState === 4){
            callback("Data Could Not Fetch",undefined)
        }
    })

    // Set up the request
    request.open("Get","https://jsonplaceholder.typicode.com/todos")

    // Sending the request
    request.send();
}
console.log(1)
console.log(2)
todos((error,Data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(Data)
    }
})
console.log(3)
console.log(4)
*/
/**
 * ----------11.5 Extracting JSON data----------
 */
/*
let todos = (callback)=>{
    let request = new XMLHttpRequest();

    //console.log(request,readyState)
    request.addEventListener('readystatechange',()=>{
        // console.log(request,request.readyState)
        if(request.readyState === 4 && request.status ==200){
            // console.log(request.responseText)
            let data = JSON.parse(request.responseText)
            callback(undefined,data)
        }else if(request.readyState === 4){
            callback("Data Could Not Fetch",undefined)
        }
    })

    // Set up the request
    request.open("Get","https://jsonplaceholder.typicode.com/todos")

    // Sending the request
    request.send();
}
console.log(1)
console.log(2)
todos((error,Data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(Data)
    }
})
console.log(3)
console.log(4)
*/
/**
 * -----------11.6 Callback hell---------------
 */
/*
todos("data.json",(error,Data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(Data)
    }
    todos("mario.json",(error,Data)=>{
        if(error){
            console.log(error)
        }else{
            console.log(Data)
        }
            todos("lurie.json",(error,Data)=>{
                if(error){
                    console.log(error)
                }else{
                    console.log(Data)
                }
            })
    })
})
*/

/**
 * ------------11.7 Basics of Promise------------
 */

let getSomthing = ()=>{
    return new Promise((resolve,reject)=>{
        // resolve("Some Data");
        reject("Some error");
    })
}
getSomthing().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

let todos = (resource)=>{
    return new Promise((resolve,reject)=>{
        let request = new XMLHttpRequest();

        //console.log(request,readyState)
        request.addEventListener('readystatechange',()=>{
            // console.log(request,request.readyState)
            if(request.readyState === 4 && request.status ==200){
                // console.log(request.responseText)
                let data = JSON.parse(request.responseText)
                resolve(data)
            }else if(request.readyState === 4){
                reject("Error in fetching the data")
            }
        })

        // Set up the request
        request.open("Get",resource)

        // Sending the request
        request.send();
    })
    
}
/*
// chaining of promise
todos("https://jsonplaceholder.typicode.com/todos").then((data)=>{
    console.log("Promise 1 resolved",data)
    return todos("../script/data.json")
}).then((data)=>{
    console.log("Promise 2 resolved",data)
}).catch((error)=>{
    console.log(error)
})*/
/**
 * ------------11.8 Chaining of promise-----------
 * if more then one "then" there or "catch" then it is chining promise see the above example
 */

/**
 * -------------11.9 Fetch API--------------
 */

fetch("../script/data.json").then((response)=>{
    console.log("Promise resolved",response)
    return response.json()//returning promise
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

/**
 * --------------11.10 Async Await--------------
 * if we write in function "async" then it will return promise
 */

let getTodos = async()=>{
    let response = await fetch("../script/data.json")
    // 11.11 Custom error
    if(response.status !== 200){
        throw new Error("Custom:Error in fetching the data")
    }
    let data = await response.json()
    return data
}

getTodos().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error.message)
})
/**
 * --------------11.11 Custom Errors-------------
 * in 11.10 given example
 */

/**
 * ---------11.12 Async Await without return statement------------
 * if more then data is there then we can return data
 */

let getTo = async()=>{
    let response = await fetch("../script/data.json");
    let data = await response.json();

    let response2 = await fetch("../script/mario.json");
    let marioData = await response2.json();
    console.log(data,marioData);
}
getTo()

/**
 * ---------11.13 Error Handling using try catch method------------
 */
let getTodo = async()=>{
    try{
        let response = await fetch("../script/data.json");
        let data = await response.json();

        let response2 = await fetch("../script/mario.json");
        let marioData = await response2.json();
        console.log(data,marioData1);
    }catch(error){
        console.log(error.message)
    }
    
}
getTodo()