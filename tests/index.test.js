// import axios from "axios";
// function sum(a,B){
//     return a + B;
// }


// test('adds 1 + 2  to equal 3 ', () => {
//     let ans = sum(1,2);
//     expect(ans).toBe(3);
// })

// const BACKEND_URL = "http://localhost:3000";

// describe("Authentication", () => {
//     test('User is able to sign up only once', async () => {
//         const username = "harizibam" + Math.random();
//         const password = "123456"; 
//         const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             username, 
//             password,
//             type:"admin"
//         })
//         expect(response.statusCode).toBe(200)
//         const updatedResponse = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             username, 
//             password,
//             type:"admin"
//         })
//         expect(updatedResponse.statusCode).toBe(400)
//     });

//     test('Signup rquest fails if the username is empty', async () => {
//         const username = "harizibam" + Math.random();
//         const password = "123456";

//         const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             password
//         });

//         expect(response.statusCode).toBe(400);

//     });

//     test('Signin succeeds if the username and password are correct', async () => {
//         const username = `harizibam-${Math.random()}`;
//         const password = "123456";
//         await axios.post(`${BACKEND_URL}/api/v1/signup`,{
//             username, 
//             password
//         })
//         const response = await axios.post(`${BACKEND_URL}/api/v1/signin`,{
//             username,
//             password
//         });
//         expect(response.statusCode).toBe(200);
//         expect(response.body.token).toBeDefined();
//     });

//     test('Signup succeeds if the username and password are incorrect', async () => {
//         const username = `harizibam-${Math.random()}`;
//         const password = "123456";
//         await axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             username, 
//             password            
//         });
//         const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
//             username:"WrongUsername", 
//             password            
//         });
//         expect(response.statusCode).toBe(403);
//     });

// })

describe("User Information endpoints", () => {
    beforeAll(() => {
        console.log("before all was called");
    })
    test("test1",()=>{
        expect(1).toBe(1);
    })
    test("test2",()=>{
        expect(1).toBe(1);
    })
    test("test3",()=>{
        expect(1).toBe(1);
    })
})