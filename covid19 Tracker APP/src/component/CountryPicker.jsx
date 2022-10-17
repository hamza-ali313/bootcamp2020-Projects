import React,{useState,useEffect} from 'react'

import {FormControl,NativeSelect} from "@material-ui/core"
import styles from "./CountryPicker.module.css"
import {fetchcountries} from "./api"

export const CountryPicker = () => {
    const [countriesData,setCountriesData] = useState([]);

 useEffect( ()=>{
  const fetchedCountriesData = async()=>{
    setCountriesData(await fetchcountries())
  }
   fetchedCountriesData();
 },[setCountriesData])//this will enable us to fetch the data of diffrent countries

 console.log(countriesData)
    return (
        <FormControl className={styles.container}>
            <NativeSelect>
       <option value ="global">Global</option>
     {countriesData?(countriesData.map((country,i)=><option key={i} value={country}>{country}</option>)):null}
            </NativeSelect>
        </FormControl>
    )
}
