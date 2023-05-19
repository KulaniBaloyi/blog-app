"use client"

import { useEffect } from "react";
import { NextResponse } from 'next/server';

export default function Home() {


  async function getUsers(e) {
    
    const res = await fetch(`http://localost:3000/api/users`);
    const user = await res.json();
    console.log(user)
    return NextResponse.json(user)
  }

  const createUser=(e)=>{
    e.preventDefault()
  }

 
 

  return (
   <main className="p-5">
    <section className="shadow-sm shadow-gray-400 p-2 rounded-md w-1/2 m-auto">
      <form onSubmit={createUser}>
        <div className="flex flex-col p-2">
          <label className="text-semibold text-lg">Name</label>
          <input required type="text" placeholder="Enter Name" className="border rounded-md p-2"/>
        </div>
        <div className="flex flex-col  p-2">
          <label className="text-semibold text-lg">Email</label>
          <input required type="email" placeholder="Enter Name" className="border rounded-md p-2"/>
          <button type="submit" className=" my-4 rounded-md bg-orange-500 text-white p-2 cursor-pointer">Create a new User</button>
        </div>
      </form>
      
    </section>
    <section className="my-5 p-2 rounded-md">
      <button className="bg-blue-600 rounded-md p-2 text-white cursor-pointer">Show all users</button>
      <div className="p-5 border rounded-md my-4"></div>
    </section>
   </main>
  )
}
