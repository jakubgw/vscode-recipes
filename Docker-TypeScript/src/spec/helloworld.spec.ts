import {} from 'jasmine';
import 'reflect-metadata';

import { ServiceTest } from '../ServiceTest'
import { ReflectiveInjector, Injectable, Injector } from 'injection-js';
import { App } from '../App'
var request = require("request");
var rp = require('request-promise');

import {$it, $beforeAll, $beforeEach, $afterEach, $afterAll} from 'jasmine-ts-async';



describe("Hello World Server", function() {
   
      let base_url = "http://localhost:3000/"
      let injector = null;
      let app = null;

      beforeEach(() => {
        

        injector = ReflectiveInjector.resolveAndCreate([  
            { provide: ServiceTest, useValue: { getText :  function(): string { return "mockData" }} },
            App
        ]);
        
        app = injector.get(App) as App;    
        const port = process.env.PORT || 3000
        app.init(port);
 

      });
      
      afterEach(() => {
        app.close();
      });

   
      it("returns correct body", function(done) { 
        request.get(base_url, function(error, response, body) {      
          expect(response.body).toBe("{\"message\":\"mockData\"}");
          done();
        });
      });

});
