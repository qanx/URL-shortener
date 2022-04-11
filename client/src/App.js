
import { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import logo from './Untitled.shortpng.png'
import './App.css';

function Result({finalURL,result }) {
  // const [text, setText] = useState(finalURL);


  const copy = async () => {
    await navigator.clipboard.writeText(finalURL);
    alert('Text copied');
  }
  return (
    <div className={result? "main-search-input fl-wrap slide-in-blurred-tr" : " main-search-input fl-wrap"}>
       <h1>{finalURL}</h1> 
<button className='copyBut' onClick={()=>copy()}>copy</button>

    </div>
    
  )
}


function App() {

  const [result, setResult] = useState(null)
  const longURL = useRef()

  const fetchRes = async (e) => {
    e.preventDefault()

    try {
      await axios.post("https://btyeurl.herokuapp.com/api/url/shorten", { longUrl: longURL.current.value })
        .then((response) => {
          setResult(response.data)
        })}
    catch (error) {
        console.log(error)
      }



    }
  // useEffect(()=>{
  //   const fetchRes=async()=>{
  //     const res = await axios.post("http://localhost:5000/api/url/shorten",{longUrl:longURL.current.value}).then(res=>console.log(res.data))
  //   }
  //   fetchRes()
  // },[longURL])

  return (
      <div className="main-search-input-wrap">
        <img  className="logo" src={logo}/>
        <h1  className='title'> URL shortener</h1>
        <div className="main-search-input fl-wrap">
          <div className="main-search-input-item"> <input ref={longURL} type="text" placeholder="Search Products..." />
          </div>
          <button onClick={(e) => fetchRes(e)} className="main-search-button">Search</button>
        </div>
        {/* {result?.shortUrl} */}
        {result ? <Result  result={result}finalURL={result.shortUrl} /> : ""}
        {/* <h1 className='shadow-drop-2-center'>sss</h1> */}


      </div>
    );
  }

  export default App;
