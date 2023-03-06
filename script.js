/*const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://sa-east-1.aws.data.mongodb-api.com/app/data-eyymx/endpoint/data/v1/action/findOne';

const data = {
  collection: 'users',
  database: 'login',
  dataSource: 'login',
  projection: {
    "_id": 1
  }
};

const headers = {
  'Content-Type': 'application/json',
  'api-key': '63ffba8bd12c4db48fec07e2',
  'x-requested-with': 'XMLHttpRequest'
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

  var data = JSON.stringify({
    "collection": "users",
    "database": "login",
    "dataSource": "login",
    "filter": {
      username: 'pat'
    }
});
            
var config = {
    method: 'post',
    url: 'https://sa-east-1.aws.data.mongodb-api.com/app/data-eyymx/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '63ffba8bd12c4db48fec07e2',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

Node
*/




