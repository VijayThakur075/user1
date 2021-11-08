import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Post (){
    const[num , setNum]= useState([]);

        useEffect(()=>{
            axios.get("http://localhost:3008/posts").then((response) =>{
                setNum(response.data);
            });
    })
return(

    <>
       <div>
              <ul>
                  <h3>Posts</h3>
                    <div>{num.map(posts => (
                      <li key={posts.id}>{posts.title}</li>
                  ))}</div>
              </ul>
          </div>
    </>
)
}
