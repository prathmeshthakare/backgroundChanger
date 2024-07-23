import React, {useState} from 'react'

function App() {

  const [color , setColor] = useState("gray");
  return (
    <>
      <div className="container h-screen w-screen relative flex justify-center" style={{backgroundColor:color}}>

        <div className="btn-holder text-center bottom-10 absolute  bg-slate-400 p-2  px-4 rounded-full ">
          <button className=" m-2 px-3  p-1 rounded-full cursor-pointer " style={{backgroundColor:"black", color:'white'}} onClick={()=> setColor('black')}> Black  </button>
          <button className=" m-2 px-3  p-1 rounded-full cursor-pointer " style={{backgroundColor:"yellow", color:'black'}} onClick={()=> setColor('yellow')}> Yellow </button>
          <button className=" m-2 px-3  p-1 rounded-full cursor-pointer " style={{backgroundColor:"green", color:'white'}} onClick={ ()=>setColor('green')}> Green </button>
          <button className=" m-2 px-3  p-1 rounded-full cursor-pointer " style={{backgroundColor:"orange ", color:'white'}} onClick={()=>setColor('orange')}> Orange </button>
          <button className=" m-2 px-3  p-1 rounded-full cursor-pointer " style={{backgroundColor:"cyan", color:'white'}} onClick={()=>setColor('cyan')}> Cyan </button>
          <button className=" m-2 px-3  p-1 rounded-full cursor-pointer " style={{backgroundColor:"purple", color:'white'}} onClick={()=>setColor('purple')}> Purple  </button>
          <button className=" m-2 px-3  p-1 rounded-full cursor-pointer " style={{backgroundColor:"white ", color:'black '}} onClick={()=>setColor('white')}> White </button>
          <button className=" m-2 px-3  p-1 rounded-full cursor-pointer " style={{backgroundColor:"blue", color:'white'}} onClick={()=>setColor('blue')}> Blue  </button>
        </div>


      </div>
    </>
  )
}

export default App
