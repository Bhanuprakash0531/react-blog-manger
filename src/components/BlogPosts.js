import React, { useEffect, useState } from "react";
function BlogPosts(){
    //const [blogcount,setBlogcount]=useState(0);
    //useEffect(()=>{console.log("Blog count is ",blogcount)},[blogcount]);
    //console.log("blog count",blogcount);// here didn't use useeffect it gives the output in console 2 times because of re-rendering.
    
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            try{
                const response =await fetch('http://localhost:3001/api/blog-list');
                const data =await response.json();
                setBlogs(data.dummyBlogPosts);
                if(Array.isArray(data.dummyBlogPosts)){
                    console.log(data.dummyBlogPosts);
                setBlogs(data.dummyBlogPosts);
                }else{
                    console.log("Unexcepted data format",data)
                    setBlogs([]);
                }
            }catch(error){
                console.log("error fetching data ",error);
                setBlogs([]);
            }  
        }
        fetchData();
    },[]);

    return (
    <div>
        {/*<div style={{ padding:'1rem'}}>
            <h2>Blog Posts</h2>
            <p>List of blog posts will go here!</p>
            <button onClick={()=>setBlogcount(blogcount+1)}>Actuall Blog count</button>
        </div>*/}

        <div>
            {blogs.length ===0 ?(<p>No blog posts found</p>):(
                <ul>
                    {blogs.map((blog,index)=>(
                        <li key={index}>
                            <h3>{blog.title}</h3>
                            <p>{blog.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>

    </div>
    );
}
export default BlogPosts;
