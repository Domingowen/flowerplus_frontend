import axios from 'axios';
const httpUrl = 'https://www.domingotech.xyz';
const requestHttp = (
  url: string,
  requestMethod: any,
  parameter?: any,
  config?: any,
) => {
  let options: {
    method: any;
    url: string;
    headers: string;
    params: object;
    data: object;
  } = {};
  options.method = requestMethod;
  options.url = `${httpUrl + url}`;
  options.headers = config && config.headers;
  switch (requestMethod) {
    case 'post':
      options.data = parameter && parameter;
      break;
    case 'get':
      options.params = parameter && parameter;
      break;
  }
  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        // console.log(err);
        // console.log(err.response.status);
        console.log(err.response.data);
        reject(err.response.data);
      });
  });
};
export default requestHttp;
