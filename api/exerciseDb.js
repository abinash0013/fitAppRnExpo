import axios from 'axios'
import { baseUrl, host, rapidApiKey } from '../constants'

export const makeRequest = axios.create({
  // baseURL: "https://exercisedb.p.rapidapi.com",
  // headers: {
  //   'x-rapidapi-key': '0fcd233ea0msh3ce8583d6056a46p1abd41jsnb4b7f1359c24',
  //   'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  // }
  baseURL: baseUrl,
  headers: {
    'x-rapidapi-key': rapidApiKey,
    'x-rapidapi-host': host
  }
})


// const apiCall = async (url) => { 
//   try{    
//     const options = {
//       method: "GET",
//       url, 
//       params: {
//         limit: '10',
//         offset: '0'
//       },
//       headers: {     
//         'X-RapidAPI-Key': rapidApiKey,
// 	      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//       } 
//     }
//     const response = await axios.request(options)
//     return response.data
//   } catch(err) {
//     console.log("error:::", err.message);
//   }
// }

// export const fetchExerciseByBodyPart = async (bodyPart) => {
//   console.log("bodyPartLog", bodyPart);
//   let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`)  
//   console.log("dataLog", data);  
//   return data
// }