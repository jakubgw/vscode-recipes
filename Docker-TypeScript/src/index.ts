import * as http from 'http';
import * as express from 'express'
import 'reflect-metadata';


import { ServiceTest } from './ServiceTest'
import { ReflectiveInjector } from 'injection-js';


import { App } from './App'

const injector = ReflectiveInjector.resolveAndCreate([  
    ServiceTest,
    App
]);


let app = injector.get(App) as App;
app.init(3000);

