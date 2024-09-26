// Task 01: Iterating with Async/Await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await delay(1000);  // 1 second delay
    }
}

iterateWithAsyncAwait([1, 2, 3, 4, 5]);
// Task 02: Awaiting a Call
async function fetchData() {
    // Simulate an API call with a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: 'Sample data from API' });
        }, 2000);
    });
}

async function awaitCall() {
    const response = await fetchData();
    console.log(response.data);
}

awaitCall();
// Task 03: Handling Errors with Async/Await
async function fetchDataWithError() {
    // Simulate an API call that may fail
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Failed to fetch data from API'));
        }, 2000);
    });
}

async function awaitCallWithErrorHandling() {
    try {
        const response = await fetchDataWithError();
        console.log(response.data);
    } catch (error) {
        console.log('An error occurred while fetching data:', error.message);
    }
}

awaitCallWithErrorHandling();
//Task 04: Chaining Async/Await
async function asyncFunction1() {
    await delay(1000);
    console.log('Function 1 completed');
}

async function asyncFunction2() {
    await delay(1000);
    console.log('Function 2 completed');
}

async function asyncFunction3() {
    await delay(1000);
    console.log('Function 3 completed');
}

async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}

chainedAsyncFunctions();
//Task 05: Awaiting Concurrent Requests
async function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from API 1');
        }, 1000);
    });
}

async function fetchData2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from API 2');
        }, 1500);
    });
}

async function concurrentRequests() {
    const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log('Results:', result1, result2);
}

concurrentRequests();
//Task 06: Awaiting Parallel Calls
async function fetchDataFromURL(url) {
    // Simulate fetching data from a URL
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, Math.random() * 2000);
    });
}

async function parallelCalls(urls) {
    const promises = urls.map(url => fetchDataFromURL(url));
    const results = await Promise.all(promises);
    console.log('All responses:', results);
}

const urls = ['https://api.example.com/endpoint1', 'https://api.example.com/endpoint2', 'https://api.example.com/endpoint3'];
parallelCalls(urls);
