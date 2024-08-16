import { useState, useEffect, useMemo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
require("dotenv").config();
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
const imagesRaw = await fetch(process.env.VALUE_OF_FETCH)
const imagesDataLista = await imagesRaw.json();
function Card({title, url, func}){
  return (<div id={title} className='card' onClick={()=>func(title)} >
  <img src={url} />
</div>)
}
// async function goku(){
//   const imagesRaw = await fetch("https://api.giphy.com/v1/gifs/search?api_key=AtNKqVAxubIRW9Dwf2leh6d45eXY2xt1&limit=12&offset=12&q=soccer")
//   const imagesDataLista = await imagesRaw.json()
//   return  imagesDataLista
  
// }
let current1 = 0;
let highest1 = 0;
let selectedList = [];
function App(){
  const [current, setCurrent] = useState(0);
  const [highest, setHighest] = useState(0);
  const [re, setRe] = useState(0);
  
  
  

  const [data, setData] = useState('')
  
  let nums = [];
  let cards = [];
//   useEffect(() => {
//     async function getToken() {
//         const raw = await fetch("https://api.giphy.com/v1/gifs/search?api_key=AtNKqVAxubIRW9Dwf2leh6d45eXY2xt1&limit=12&offset=12&q=soccer");
//         const imagesDataLista = await raw.json()
//         setData(imagesDataLista);
//     }
//     getToken();
//  }, [])
  // let imagesDataList =  goku();
  
  // imagesDataList.then((dt) => {
  //   change(dt)
  // })

  // let kaka = fetch("https://api.giphy.com/v1/gifs/search?api_key=AtNKqVAxubIRW9Dwf2leh6d45eXY2xt1&limit=12&offset=12&q=soccer").then((raw)=>{
  //   raw.json()
  // }).then((dt)=>{
  //   return dt
  // })

  
  function roro(title){
    selectedList.push(title)
    const uniqueElements = new Set();
    const duplicates = [];

  selectedList.forEach(item => {
    if (uniqueElements.has(item)) {
    duplicates.push(item);
  } else {
    uniqueElements.add(item);
  }
  });
  if (duplicates.length > 0){
    
    if (current1 > highest1){
      highest1 = current1
    }
    current1 = 0
    selectedList = [];
  }else if (duplicates.length == 0){
    current1 = current1 + 1
  }
    console.log(title)
    setRe(re + 1)
  }

  for (let i = 0; i<12;i++){

    let num = Number(Math.floor(Math.random() * 12))
    while (nums.includes(Number(num))){
      num = Number(Math.floor(Math.random() * 12))
    }
    nums[nums.length] = num;
    cards[cards.length] = <Card 
    title={imagesDataLista.data[num].title}
     url={imagesDataLista.data[num].images.original.url}
     func={roro}/>
    
  }
  return <>
  <h3>{highest1}</h3>
  <h3>{current1}</h3>
  <div className='all'>

{/* <img src="https://media3.giphy.com/media/xYRvkBcJhbSr6/giphy.gif?cid=63484821lv6hf1oi3cizch1gfhswzsgy7k3p7w27lgnky6gb&ep=v1_gifs_search&rid=giphy.gif&ct=g"/> */}
{cards}
      </div></> 
}

export default App
