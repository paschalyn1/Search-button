import { Axios } from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("")

  useEffect(() => {
    async function getData(){
      const response = await Axios.get("https://disease.sh/v3/covid-19/countries")
      setData(response.data)
    }
    getData()
  }, [])

  useEffect(() => {
    setOutput([])
    data.filter(val => {
      if(val.country.toLowerCase().includes(input.toLowerCase()))
      {
        setOutput(output => [...output, val])
      }})
  }, [input])
    return (
    <div className="App">
      <h1>Search for the details here:</h1>
      <input 
      type="text"placeholder="Search here..." 
      onChange={e => setData(e.target.value)} />
          
        <div>
            {output.map(item => {
            <p>{item.country}</p>
            }
            )}
       </div>
    </div>
  );
}
