import Model from './models/Model.js';
import Controller from './controllers/Controller.js';
import View from './views/View.js';

const myModel = new Model();
const myView = new View(myModel, 'root');
const myController = new Controller(myModel, myView);