import React,{useState,useEffect} from 'react'
import { fetchDailyData } from './api'
import {Line} from "react-chartjs-2"
import styles from "./Graph.module.css"

const Graph = () => {
    const[dailyData,setDailyData] = useState([]);

     
useEffect(()=>{
 
    const  fetchAPI =  async()=>{
        setDailyData(await fetchDailyData());
        } 
fetchAPI();

});
 
const lineChart=(
    dailyData.length 
    ?(<Line
      data={{
       labels:dailyData.map(({date})=>date),
       datasets:[{
         data:dailyData.map(({confirmed})=>confirmed),
         label:"Infected",
         borderColor:"green",
         fill:true
       },{
        data:dailyData.map(({deaths})=>deaths),
        label:"Deaths",
        borderColor:"red",
        fill:true
      

      }],
    }}
        />):null
);





    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Graph
