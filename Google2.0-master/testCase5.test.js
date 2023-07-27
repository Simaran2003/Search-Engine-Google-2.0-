// // import React, { Children } from 'react';
// // import ReactDOM from 'react-dom';
// // import App from './src/App';
// // import { unmountComponentAtNode } from "react-dom";
// // import 'regenerator-runtime/runtime';
// // import { render,screen } from "@testing-library/react";
// // import "@testing-library/jest-dom";
// // import Results from './src/components/Results'
// // import ResultContextProvider from './src/contexts/ResultContextProvider'
// // import {createContext} from 'react';

// // const ResultContext=createContext();
// // let container = null;
// // beforeEach(() => {
// //   // setup a DOM element as a render target
// //   container = document.createElement("div");
// //   document.body.appendChild(container);
// // });

// // afterEach(() => {
// //   // cleanup on exiting
// //   unmountComponentAtNode(container);
// //   container.remove();
// //   container = null;
// // });

// // it('renders without crashing', (done) => {
// //   try{
// //   ReactDOM.render(<App />, container);
// //   const linkel=screen.getByText(/2021 Google,Inc./i)
// //   expect(linkel).toBeInTheDocument()
// //   done();
// //   }catch(error){
// //     console.log('App crashed');
// //     done(error)
// //   }
// // });

// // it("renders fake data", async () => {
//   const fakeData = {
//     "results":[
//       {
//           "title": "Indira Gandhi - Wikipedia",
//           "link": "https://en.wikipedia.org/wiki/Indira_Gandhi",
//           "description": "Gandhi was the daughter of Jawaharlal Nehru, the 1st prime minister of India. She served as prime minister from January 1966 to March 1977 and again from ...Date of death: 31 October 1984Born: 19 November 1917, AllahabadParents: Jawaharlal Nehru",
//           "additional_links": [
//               {
//                   "text": "Indira Gandhi - Wikipediahttps://en.wikipedia.org › wiki › Indira_Gandhi",
//                   "href": "https://en.wikipedia.org/wiki/Indira_Gandhi"
//               },
//               {
//                   "text": "Jawaharlal Nehru",
//                   "href": "http://en.wikipedia.org/wiki/Jawaharlal_Nehru"
//               }
//           ],
//           "cite": {
//               "domain": "https://en.wikipedia.org › wiki › Indira_Gandhi",
//               "span": " › wiki › Indira_Gandhi"
//           }
//       }],
//     "entries":[
//       {
//           "title": "Indira Gandhi: The iron-willed stateswoman - The Hans India",
//           "title_detail": {
//               "type": "text/plain",
//               "language": null,
//               "base": "",
//               "value": "Indira Gandhi: The iron-willed stateswoman - The Hans India"
//           },
//           "links": [
//               {
//                   "rel": "alternate",
//                   "type": "text/html",
//                   "href": "https://www.thehansindia.com/featured/sunday-hans/indira-gandhi-the-iron-willed-stateswoman-719248"
//               }
//           ],
//           "link": "https://www.thehansindia.com/featured/sunday-hans/indira-gandhi-the-iron-willed-stateswoman-719248",
//           "id": "CAIiEMxlqo0l9Shzn95y-abPGhIqGQgEKhAIACoHCAowqefeCjDG7dYBMJCFygY",
//           "guidislink": false,
//           "published": "Sat, 11 Dec 2021 18:25:39 GMT",
//           "published_parsed": [
//               2021,
//               12,
//               11,
//               18,
//               25,
//               39,
//               5,
//               345,
//               0
//           ],
//           "summary": "<a href=\"https://www.thehansindia.com/featured/sunday-hans/indira-gandhi-the-iron-willed-stateswoman-719248\" target=\"_blank\">Indira Gandhi: The iron-willed stateswoman</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Hans India</font>",
//           "summary_detail": {
//               "type": "text/html",
//               "language": null,
//               "base": "",
//               "value": "<a href=\"https://www.thehansindia.com/featured/sunday-hans/indira-gandhi-the-iron-willed-stateswoman-719248\" target=\"_blank\">Indira Gandhi: The iron-willed stateswoman</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Hans India</font>"
//           },
//           "source": {
//               "href": "https://www.thehansindia.com",
//               "title": "The Hans India"
//           },
//           "sub_articles": []
//       }
//     ],
//     "image_results":[
//       {
//           "image": {
//               "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7BZPHBS12zpo4eISScisO_AnZMk82CRSR--O8DJGuetIkYbwkhJhwBx6GtQ&s",
//               "alt": ""
//           },
//           "link": {
//               "href": "https://www.google.com/url?q=https://www.biography.com/political-figure/indira-gandhi&sa=U&ved=2ahUKEwjR8Zu739z0AhVaHs0KHac7BuEQr4kDegQIARAC&usg=AOvVaw3U6e_8fFWgKF2N0jR4oWor",
//               "title": "Indira Gandhi - Husband,...   www.biography.com",
//               "domain": "Indira Gandhi - Husband,...   www.biography.com"
//           }
//         }
//         ], 
//     "videos":[{
//       "href": "https://www.youtube.com/watch?v=VdxhQ8ZkzMw"
//       }]
//   };
// //     const isLoading = jest.fn();
// //     window.HTMLElement.prototype.isLoading = isLoading;

// //     const { rerender } = render(
// //       <ResultContext.Provider value={{ getResults:{}, results: {},searchTerm:{},setSearchTerm:{},isLoading:{} }}>
// //       {Children}
// //       </ResultContext.Provider>
// //     )
// //     expect(setIsLoading).toBeTruthy();

// //     rerender(
// //       <ResultContext.Provider value={{ getResults:{}, results: {fakeData},searchTerm:{Indira},setSearchTerm:{Indira},isLoading:{} }}>
// //       {Children}
// //       </ResultContext.Provider>
// //     );
// //     expect(setIsLoading).not.toBeTruthy();
// // });
// import customData from './public/data.json'
// import 'regenerator-runtime/runtime';
// import React from 'react';
// const fetch= jest.fn()

// async function fetchData() {
// // const response=await fetch('data.json',{
// //     headers : { 
// //         'Content-Type': 'application/json',
// //         'Accept': 'application/json'
// //        }
// // })
//  await fetch.mockResponseOnce(JSON.stringify({customData}));
// }
// // describe('data from json', () => {
// //     it('should check whether data is being fetched from json', (done) => {
// //       try {
// //         expect().toEqual(customData)
// //       } catch (error) {
// //        done(error)
// //       }
// //     });
// //   });

// test('the data is peanut butter', done => {
//   function callback(fakeData) {
//     try {
//       expect(fakeData).toBe(customData);
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData(callback);
// });


