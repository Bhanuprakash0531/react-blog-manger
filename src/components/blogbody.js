import React, {useState} from "react";
import './blogbody.css';


function BlogBody(){

    const [title, setTitle]= useState('');
    const [posts, setPosts]= useState([]);
    const [body, setBody]=useState('');
    const [date, setDate]=useState('');
    const [time, setTime]=useState('');
    const currentDateTime = new Date().toLocaleString();

    function handleTitleChange(event){
        setTitle(event.target.value);
    }

    function  handleBodyChange(event){
        setBody(event.target.value);
    }
    function handleDeletePost(indexToRemove){
        const confirmed = window.confirm("Are you sure you want to delete this post?");
        if(!confirmed){
            return;
        }
        const updatePosts= posts.filter((_,index)=>index !=indexToRemove);
        setPosts(updatePosts);
    }

    function handlePost(){
       /* //alert("You clicked the post button!:");
        const dummypost = { title:"sample Title",author: "Myself"};
        // alert("Created a dumpy:"+ dumpypost.title);
        console.log("created a dummy posts: ",dummypost.title);
        if(dummypost.title){
            console.log("The dummy post has a title:",dummypost.title);
        }*/
       if(title === ''){
        alert('please enter a title');
        return;
       }

       if (body === ''){
        alert('Please enter a body');
        return;
       }

       const newPost={title:title,body:body,date:date,time:time};
       setPosts([...posts,newPost]);
       alert("Your title is: "+ newPost.title);
       setTitle('');
       setBody('');
       setDate('');
       setTime('');
    }
    /* function handleTest(){
            const testPost ={title:"Hello",author:"Bhanu", date:"02-28-2025"};
            console.log("Post title: ",testPost.title);
            console.log("Post Author: ",testPost.author);
            console.log("Post dated on: ",testPost.date);
        }  
    */
    

    return(
        <main>
            <h2>Create a New Blog Post</h2>
            <form>
                
            <label>
                Title:
                <input
                 type="text"
                 value={title}
                 onChange={handleTitleChange} 
                 placeholder="Enter your blog title"
                />
            </label>
            <label>
                Body:
                <textarea
                 name="body"
                 value={body}
                 onChange={handleBodyChange}
                 placeholder="Start writing the content here...">
                </textarea>
            </label>
            <input type="date"
                   value={date}
                   onChange={(e)=>setDate(e.target.value)}
            />
            <input 
            type="time"
            value={time}
            onChange={(e)=>setTime(e.target.value)}
            />
               <br></br>
                <button className="post-button" type="button" onClick={handlePost}>Post</button>

                {posts.map((post, index)=>(
                <div key={index}>
                    <h4>{post.title}</h4>
                    <h5>{post.body}</h5>
                    <h6>{post.date}</h6>
                    <h7>{post.time}</h7>
                    <button className="post-button" onClick={
                        ()=>{if(window.confirm("Are you sure?"))
                        {handleDeletePost(index)}
                        }}>Delete</button>
                </div>))}
                <p>Blog posted at {currentDateTime}</p>

                {/*<h4>Create Another Post</h4>

                <label>
                    Title:
                    <input type="text" name="title" placeholder="Enter your awesome blog title"></input>
                </label>
                <br></br>
                <label>
                    Body:
                    <textarea name="body" placeholder="Start writing the content here..."></textarea>
                </label>
                <br></br>
                <button className="post-button" type="button" onClick={handleTest}>TestPost</button>
                */}

                <h3>Create your own ideas</h3>
            <p>
                "A blog is more than just words—it’s your personal brand, your creativity, and your mark on the internet."
            </p>
            <img className="blog-pic" src="/blog.jpg"></img>
            </form>
            

        </main>
    );
}
export default BlogBody;