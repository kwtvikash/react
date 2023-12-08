import axios from 'axios';

export const login = () =>{
    return new Promise((resolve,reject)=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd',
    
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            resolve(response.data)
          })
          .catch((error) => {
            console.log(error);
            reject(error)
          });
    })

}

export const counteryCode = () =>{
    return new Promise((resolve,reject)=>{

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://restcountries.com/v3.1/all?fields=name,alpha2Code',
  headers: { }
};

axios.request(config)
.then((response) => {
  resolve(response.data)

})
.catch((error) => {
  console.log(error);
  reject(error)
});

    })
}

export const getStatesByCountry = (selectedCountry) =>{
  return new Promise((resolve,reject)=>{

let config = {
method: 'get',
maxBodyLength: Infinity,
url: 'https://restcountries.com/v3.1/all?fields=name,alpha2Code',
headers: { }
};

axios.request(config)
.then((response) => {
resolve(response.data)

})
.catch((error) => {
console.log(error);
reject(error)
});

  })
}

export const getDistByState = (selectedCountry) =>{
  return new Promise((resolve,reject)=>{

let config = {
method: 'get',
maxBodyLength: Infinity,
url: 'https://restcountries.com/v3.1/all?fields=name,alpha2Code',
headers: { }
};

axios.request(config)
.then((response) => {
resolve(response.data)

})
.catch((error) => {
console.log(error);
reject(error)
});

  })
}
