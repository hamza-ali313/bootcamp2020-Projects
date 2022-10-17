
import React from 'react'
import {CardPaper} from "./CardPaper"
import {CountryPicker} from "./CountryPicker"
import Graph from "./Graph"
import styles from "./App.module.css"
import { fetchedData } from './api'


class App extends React.Component{
  state={
    data :{}
  }
  async componentDidMount(){
    const  FetchedData  =await fetchedData()
    this.setState({
      data:FetchedData
    })
  }


render(){
  const {data} = this.state;
  return (
    <div className={styles.container}>
      
  <CardPaper data={data}/>
  <CountryPicker/>
  <Graph/>
     </div>
  );
  }}

export default App


