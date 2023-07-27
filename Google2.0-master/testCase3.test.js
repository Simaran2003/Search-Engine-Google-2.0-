import customData from './public/data.json'
import 'regenerator-runtime/runtime';
import React from 'react';

async function fetchData() {
const response=await fetch('data.json',{
    headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
})
const data=await response.json();
return data;
}
// describe('data from json', () => {
//     it('should check whether data is being fetched from json', (done) => {
//       try {
//         expect().toEqual(customData)
//       } catch (error) {
//        done(error)
//       }
//     });
//   });
  
test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe(customData);
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});



