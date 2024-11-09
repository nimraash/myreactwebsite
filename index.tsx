import Link from "next/link"


export default function Home () {
  return (
    <div>
      <Link className="mr-5 hover:text-green-500" href={"https://localhost:3000/"}> Home</Link>
      <Link className="mr-5 hover:text-red-200" href={"http://localhost:3000/aboutus"}>About Us</Link>
      <Link className="mr-5 hover:text-yellow-500" href={"https://localhost:3000/contactus"}>Contact  Us</Link>   
      <Link className="mr-5 hover:text-orange-600" href={"https://localhost:3000/privacypolicy"}>privacy policy</Link>


<p style={{color:"purple", fontSize:"20px", height:30,backgroundColor:"yellow-300"}}>wel come to my website</p>



 </div>
  )
}