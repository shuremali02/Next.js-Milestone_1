import Link from "next/link"

export default function Milestone1
() {
  return (
    <div className=' bg-black min-h-screen '>
        <h1 className=' text-white text-3xl font-semibold flex justify-center'>Milestone...1 </h1>
    <br/>
    <br/>
    <br/>
    <br />
    <br />
    
<div className="bg-yellow-300">
     <h1 className= "flex justify-center font-extrabold text-3xl animate-pulse text-blue-600 hover:uppercase hover:text-red-400 "> Hello </h1>
  </div>
   <div className="bg-green-600">  
     <h1 className= "flex justify-center font-extrabold text-4xl animate-bounce text-red-600 hover:uppercase hover:text-blue-400 "> World!</h1>
     </div>
     <br /> 
     <br />
     <br />
     <p className="text-white flex justify-center gap-2">
        created by GIAIC student:{" "}
        <Link href={"//github.com/shuremali02"}>
         <>SYED SHUREM ALI</>
        </Link>
      </p>

    </div>
  )
}
