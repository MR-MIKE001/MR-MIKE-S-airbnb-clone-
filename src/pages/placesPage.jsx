
import { Link } from "react-router-dom";


import AccountNav from "../accountNav";
import { useEffect, useState } from "react";
import axios from "axios";


export default function PlacesPage() {
  const [places,setPlaces]=useState([])  

  useEffect(()=>{
axios.get('/user-places').then(({data})=>{
  setPlaces(data)

})
},[])
   

  return (
    <div>
    <AccountNav/>
    <div className="text-center">
     <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>add new place</Link>
    </div>
   <div className="mt-4">
    {places.length>0 && places.map(place=>{
      return <Link to={'/account/places/'+place._id} className="flex gap-4 cursor-pointer bg-gray-200 p-4 rounded-2xl " key={place}>
       <div className="w-32 h-32 flex  bg-gray-100 shrink-0">
        {place.photos.length >0 &&
        <img 
        className="rounded-2xl h-32 w-32 object-cover"
         src={import.meta.env.VITE_PUBLIC_API_URL+ 'uploads/'+place.photos[0]}/>}
       </div>
       <div className="grow-0 shrink">
       <h2 className="text-xl"> {place.title}</h2>
       <p className="text-sm mt-2 ">{place.description}</p>
       </div>
      </Link>
    })}
   </div> 
   
    </div>
  )
}