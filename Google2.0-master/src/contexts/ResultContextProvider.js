import React,{createContext,useContext,useState} from 'react';

const ResultContext=createContext();
const baseURL='https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider=({children})=>{
    const [results,setResults]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [searchTerm,setSearchTerm]=useState('');
    
    //videos/search/images
    const getResults=async(type)=>{
        setIsLoading(true);
        const response=await fetch('data.json',{
            method: 'GET',
            headers: {
                "access-control-allow-credentials": "true",
                "access-control-allow-origin": "http://localhost:3000/videos",
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
        })
        const data=await response.json();
        console.log(data)
        if(type.includes("/news"))
        setResults(data);
        else if(type.includes('/images'))
        setResults(data.image_results);
        else
        setResults(data.results)

        setResults(data);
        setIsLoading(false);
    }
    return(
        <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,isLoading}}>
          {children}
        </ResultContext.Provider>
    )
}

export const useResultContext=()=>useContext(ResultContext);