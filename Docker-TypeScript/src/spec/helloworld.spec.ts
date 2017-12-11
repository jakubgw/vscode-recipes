import { ReflectiveInjector } from 'injection-js';
import {} from 'jasmine';
import 'reflect-metadata';
import { ServiceTest } from '../ServiceTest'
import { App } from '../App'

import * as request from 'request';



describe("Hello World Server", function() {
   
      let base_url = "http://localhost:3000/"
      let injector = null;
      let app = null;

      beforeEach(() => {
        
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

        injector = ReflectiveInjector.resolveAndCreate([  
            { provide: ServiceTest, useValue: { getText :  () : string => { return "mockData" }} },
            App
        ]);
        
        app = injector.get(App) as App;    
        app.init(3000);
 

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
