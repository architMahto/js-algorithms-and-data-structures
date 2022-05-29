process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';

require('babel-register')();
require('@babel/polyfill');
