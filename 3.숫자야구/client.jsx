// const React = require('react');
// const ReactDom= require('react-dom');

import React from 'react';
import ReactDom from 'react-dom';
import NumberBaseballClass from './NumberBaseballClass';
import NumberBaseballHooks from './NumberBaseballHooks';

// const NumberBaseball = require('./NumberBaseballClass')

ReactDom.render(<NumberBaseballHooks />, document.querySelector('#root'));