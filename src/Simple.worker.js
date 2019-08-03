// Worker.js
import _ from 'lodash'
import { addTwoNumbers } from './util';

const obj = { foo: 'foo' }

_.has(obj, 'foo')


// Respond to message from parent thread
self.addEventListener('message', (event) => {
    console.log(event.data, 'received');
    // Post data to parent thread
    self.postMessage({ ...event.data, message: 'Hello from Worker', addedNumbers: addTwoNumbers(1,2) });
});