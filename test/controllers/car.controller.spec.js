const assert = require("assert");
const app = require("../../index");
const CarController = require("../../controllers/car");
const chai =require("chai");
const chaiHttp= require("chai-http");
const chaiAsPromised = require("chai-as-promised");
const expect = require('chai').expect;
const should= require('chai').Should;

chai.use(chaiHttp);
chai.use(chaiAsPromised);

describe("Cars",function(){
   
    describe("/POST",()=>{

        it("Should post a new car add",(done)=>{
            chai.request(app)
            .post('/api/v1/car')
            .set('Content-Type', 'application/json')
            .send({ 
                'email' :'clarkeschultz@gink.com',
                'price':'2000',
                'state':'new',
                'status':'pending'
                })
                
                .end(function(err,res){
                 
                expect(err).to.be.null;
                res.body.should.be.a('object');
               
                done();
               
                


            })
        })
    })

})