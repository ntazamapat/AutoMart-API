
const AllData=[
    {
      "user": {
        "_id": 1,
        "email": "clarkeschultz@gink.com",
        "firstName": "Powell",
        "lastName": "Huff",
        "password": "nostrud minim officia cillum non ex laboris",
        "address": "537 Himrod Street, Barronett, Montana, 8560",
        "isAdmin": true,
        "cars": [
          {
            "id": 1,
            "owner":1 ,
            "created_on": "2015-11-19T09:38:44 -02:00",
            "price": 8004.8213,
            "state": "new",
            "status":"available",
            "manufacturer": "TALKOLA",
            "model": "TALKOLA",
            "body_type": "car",
            "image":"https://res.cloudinary.com/dmgeldhs1/image/upload/v1559896345/picture1_iv7ce0.jpg",
            "order": {
              "id": 1,
              "buyer": 1,
              "car_id": 1,
              "amount": 7646.9282,
              "status":"pending"
            },
            "flags": [
              {
                "_id": 1,
                "car_id": 1,
                "created_on": "2018-04-02T03:09:45 -02:00",
                "reason": "quis ea labore quis sit proident ut mollit incididunt voluptate laboris duis",
                "description": "consectetur ullamco qui proident in pariatur dolore"
              },
              {
                "_id": 2,
                "car_id": 1,
                "created_on": "2017-11-03T12:38:14 -02:00",
                "reason": "cupidatat sint commodo aute eiusmod Lorem est sint adipisicing amet laboris sint",
                "description": "occaecat laboris et sit mollit irure sit"
              }
            ]
          },
          {
            "id": 2,
            "owner": 1,
            "created_on": "2015-12-28T06:45:19 -02:00",
            "price": 4517.2454,
            "state": "new",
            "status":"sold",
            "manufacturer": "COMBOGEN",
            "image":"https://res.cloudinary.com/dmgeldhs1/image/upload/v1559897310/picture2_gdrctj.jpg",
            "model": "",
            "body_type": "car",
            "order": {
              "id": 2,
              "buyer": 1,
              "car_id": 2,
              "amount": 2389.5528,
              "status":"pending"
            },
            "flags": [
              {
                "_id": 1,
                "car_id": 2,
                "created_on": "2017-04-11T08:34:12 -02:00",
                "reason": "eu dolore velit nostrud ad culpa aliquip laboris aute magna consectetur ea",
                "description": "amet officia voluptate et in aliquip deserunt"
              },
              {
                "_id": 2,
                "car_id": 2,
                "created_on": "2015-05-31T06:22:48 -02:00",
                "reason": "dolor enim mollit minim adipisicing est eu deserunt aliqua excepteur laborum veniam",
                "description": "magna sint nulla consequat minim fugiat in"
              }
            ]
          }
        ]
      }
    },
    {
      "user": {
        "_id": 2,
        "email": "stephaniehowell@combogen.com",
        "firstName": "Lee",
        "lastName": "Barnett",
        "password": "id velit quis mollit ea culpa laboris",
        "address": "619 Schroeders Avenue, Cannondale, Northern Mariana Islands, 8030",
        "isAdmin": true,
        "cars": [
          {
            "id": 3,
            "owner":2,
            "created_on": "2017-03-11T08:00:41 -02:00",
            "price": 3592.3361,
            "state": "new",
            "status":"available",
            "manufacturer": "PHEAST",
            "image":"https://res.cloudinary.com/dmgeldhs1/image/upload/v1559908487/picture-3_eodgfh.jpg",
            "model": "",
            "body_type": "car",
            "order": {
              "id": 3,
              "buyer": 2,
              "car_id": 3,
              "amount": 9126.4866,
              "status":"pending"
            },
            "flags": [
              {
                "_id": 3,
                "car_id": 3,
                "created_on": "2018-02-19T09:54:53 -02:00",
                "reason": "quis fugiat velit sunt veniam Lorem ullamco veniam qui laboris irure ipsum",
                "description": "mollit nulla do sit reprehenderit ipsum amet"
              },
              {
                "_id":4,
                "car_id": 3,
                "created_on": "2017-01-29T06:49:44 -02:00",
                "reason": "laboris consequat ex dolore aliquip anim eu cupidatat aute ipsum irure minim",
                "description": "elit amet aliquip sunt anim pariatur consequat"
              }
            ]
          },
          {
            "id": 5,
            "owner": 2,
            "created_on": "2015-01-22T11:42:19 -02:00",
            "price": 8518.6035,
            "state": "new",
            "status":"sold",
            "manufacturer": "XPLOR",
            "image":"https://res.cloudinary.com/dmgeldhs1/image/upload/v1559908590/picture-4_qprhyo.jpg",
            "model": "",
            "body_type": "car",
            "order": {
              "id": 5,
              "buyer": 2,
              "car_id": 5,
              "amount": 6810.7472,
              "status":"pending"
            },
            "flags": [
              {
                "_id": "5ceef41dd744f1a25751e7a9",
                "car_id": "<SyntaxError: missing ) after argument list>",
                "created_on": "2018-05-12T05:32:01 -02:00",
                "reason": "velit officia culpa ullamco proident exercitation reprehenderit consectetur amet ea do cillum",
                "description": "anim ullamco culpa do sunt laborum ad"
              },
              {
                "_id": "5ceef41dc6f70bc1aab6e51e",
                "car_id": "<SyntaxError: missing ) after argument list>",
                "created_on": "2016-04-25T09:43:05 -02:00",
                "reason": "deserunt do laboris voluptate elit sint eiusmod ullamco amet qui quis aliquip",
                "description": "mollit nulla pariatur eu velit cillum elit"
              }
            ]
          }
        ]
      }
    },
    {
      "user": {
        "_id": 3,
        "email": "schultzsimon@xplor.com",
        "firstName": "Reba",
        "lastName": "Herman",
        "password": "veniam consectetur labore ad nulla qui excepteur",
        "address": "283 Clinton Avenue, Graniteville, Kentucky, 5486",
        "isAdmin": false,
        "cars": [
          {
            "id": 6,
            "owner": 3,
            "created_on": "2018-02-26T09:12:49 -02:00",
            "price": 4806.6861,
            "state": "new",
            "status":"available",
            "manufacturer": "ZOLAVO",
            "image":"https://res.cloudinary.com/dmgeldhs1/image/upload/v1559908605/picture-5_halmns.jpg",
            "model": "ZOLAVO",
            "body_type": "car",
            "order": {
              "id": 6,
              "buyer": 3,
              "car_id":6,
              "amount": 5882.7328
            },
            "flags": [
              {
                "_id": "5ceef41d1cd420ddcaffcb13",
                "car_id": "<SyntaxError: missing ) after argument list>",
                "created_on": "2019-01-26T04:50:07 -02:00",
                "reason": "sit irure consectetur nulla exercitation eiusmod anim sit laboris officia sunt sit",
                "description": "in sit quis consectetur Lorem anim nulla"
              },
              {
                "_id": "5ceef41d2232f5fefb70f24f",
                "car_id": "<SyntaxError: missing ) after argument list>",
                "created_on": "2015-11-12T11:05:41 -02:00",
                "reason": "nisi labore laborum nostrud incididunt magna et fugiat mollit irure ullamco culpa",
                "description": "sint dolore consectetur laboris et do cupidatat"
              }
            ]
          },
          {
            "id": 7,
            "owner": 3,
            "created_on": "2016-08-10T08:57:25 -02:00",
            "price": 8436.9258,
            "state": "new",
            "status":"available",
            "manufacturer": "PROGENEX",
            "image":"https://res.cloudinary.com/dmgeldhs1/image/upload/v1559908668/picture-6_rzpp7i.jpg",
            "model": "PROGENEX",
            "body_type": "car",
            "order": {
              "id": 7,
              "buyer": 3,
              "car_id":7,
              "amount": 8915.9429,
              "status":"accepted"
            },
            "flags": [
              {
                "_id": "5ceef41d468539d3c07602a0",
                "car_id": "<SyntaxError: missing ) after argument list>",
                "created_on": "2015-04-19T07:21:02 -02:00",
                "reason": "excepteur labore laboris esse adipisicing esse et duis eiusmod tempor proident eiusmod",
                "description": "ullamco quis veniam mollit amet cillum Lorem"
              },
              {
                "_id": "5ceef41decb31006ec0cc5d6",
                "car_id": "<SyntaxError: missing ) after argument list>",
                "created_on": "2018-06-26T07:01:15 -02:00",
                "reason": "non labore aute cillum sunt minim ut culpa voluptate do consequat nisi",
                "description": "do officia ex sunt cillum officia nostrud"
              }
            ]
          }
        ]
      }
    },
    {
      "user": {
        "_id": 4,
        "email": "foleyblevins@progenex.com",
        "firstName": "Angelia",
        "lastName": "Buchanan",
        "password": "velit deserunt amet et sunt laboris deserunt",
        "address": "788 Madeline Court, Centerville, Massachusetts, 2338",
        "isAdmin": false,
        "cars": [
          {
            "id": 8,
            "owner": 4,
            "created_on": "2017-01-06T05:03:34 -02:00",
            "price": 7497.6369,
            "state": "new",
            "status":"sold",
            "manufacturer": "ENQUILITY",
            "image":"https://res.cloudinary.com/dmgeldhs1/image/upload/v1559908685/picture-7_qhbu9u.jpg",
            "model": "ENQUILITY",
            "body_type": "car",
            "order": {
              "id": "",
              "buyer": "",
              "car_id": "",
              "amount": "",
              "status":""
            },
            "flags": [
              {
                "_id": "5ceef41d93f4d25c7a9e33eb",
                "car_id": "<SyntaxError: missing ) after argument list>",
                "created_on": "2016-06-30T04:26:12 -02:00",
                "reason": "exercitation officia incididunt minim anim voluptate dolor exercitation tempor qui mollit nisi",
                "description": "Lorem qui consequat fugiat duis enim pariatur"
              },
              {
                "_id": "5ceef41d7489f5f8dde9f8f1",
                "car_id": "<SyntaxError: missing ) after argument list>",
                "created_on": "2014-01-24T03:47:12 -02:00",
                "reason": "qui esse aute dolore adipisicing est duis et incididunt adipisicing amet pariatur",
                "description": "nisi labore ullamco nostrud sunt et proident"
              }
            ]
          },
          {
            "id": 9,
            "owner": 4,
            "created_on": "2018-06-12T03:47:38 -02:00",
            "price": 2403.5085,
            "state": "new",
            "status":"sold",
            "manufacturer": "CINESANCT",
            "image":"https://res.cloudinary.com/dmgeldhs1/image/upload/v1559908697/picture-8_zkkkty.jpg",
            "model": "CINESANCT",
            "body_type": "car",
            "order": {
              "id": 9,
              "buyer": 4,
              "car_id": 9,
              "amount": 3850.6347?
              "status":"accepted"
            },
            "flags": [
              {
                "_id": "5ceef41d5b63dc599845a515",
                "car_id": "<SyntaxError: missing ) after argument list>",
                "created_on": "2015-02-18T12:04:52 -02:00",
                "reason": "nostrud amet velit fugiat et proident sint velit ex in fugiat sunt",
                "description": "amet in consectetur elit velit elit exercitation"
              },
              {
                "_id": "5ceef41d1751c141995ed580",
                "car_id": "<SyntaxError: missing ) after argument list>",
                "created_on": "2015-10-18T10:08:36 -02:00",
                "reason": "cupidatat velit elit ut et ullamco amet deserunt laboris esse proident ea",
                "description": "consequat Lorem sint cillum nulla ut reprehenderit"
              }
            ]
          }
        ]
      }
    },
//    { 
//        "user":{
//         "id":5,
//         "firstName":"Reine",
//         "lastName":"Alice",   
//         "email":"reinelic",
//         "password":"andela",
//         "cars":[
//             {
//                 id:"10",
//                 "owner":5,
//                 "status":"available",
//                 "state":"new",
//                 "price":3980.45,
//                 "order" :{
//                     "id":9,
//                     "car_id":9,
//                     "status":"",
//                     "amount":""
                    
                    
//                 },
                
//                 "manufacturer":"Mercedes",
//                 "model":"MayBach"
//           }
//         ]



//    }
   

        

//       }
  ];


  module.exports=AllData;
