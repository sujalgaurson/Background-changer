import { useState } from "react"

function App() {
  const [color, setcolor] = useState("olive")

  return (
    
      <div className="w-screen h-screen duration-200" style={{backgroundColor:color}}>
        <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2 fixed">
          <div className="bg-white border border-black border-x-2 rounded-3xl flex flex-wrap justify-center gap-3 px-3 py-2">
            <button onClick={() => setcolor("red")} 
            className="bg-red-600 px-4 py-1 rounded-full outline-none shadow-xl" 
            style={{backgroundColor:"red"}}>Red</button>

            <button onClick={() => setcolor("yellow")} 
            className="bg-yellow-600 px-4 py-1 rounded-full outline-none shadow-xl text-black"
            style={{backgroundColor:"yellow"}}>yellow</button>

           <button onClick={() => setcolor("green")} 
            className=" px-4 py-1 rounded-full outline-none shadow-xl text-black"
            style={{backgroundColor:"green"}}>green</button>

           <button onClick={() => setcolor("gray")} 
            className=" px-4 py-1 rounded-full outline-none shadow-xl text-black"
            style={{backgroundColor:"gray"}}>gray</button>

            <button onClick={() => setcolor("purple")} 
            className=" px-4 py-1 rounded-full outline-none shadow-xl text-black"
            style={{backgroundColor:"purple"}}>purple</button>

            <button onClick={() => setcolor("pink")} 
            className=" px-4 py-1 rounded-full outline-none shadow-xl text-black"
            style={{backgroundColor:"pink"}}>pink</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
