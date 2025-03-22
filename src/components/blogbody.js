import React, {useState} from "react";
import './blogbody.css';


function BlogBody(){

    const [title, setTitle]= useState('');
    const [posts, setPosts]= useState([]);
    const [body, setBody]=useState('');
    const [date, setDate]=useState('');
    const [time, setTime]=useState('');
    const [statusMessage, setStatusMessage]=useState('');
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
        const updatePosts= posts.filter((_,index)=>index !==indexToRemove);
        setPosts(updatePosts);
    }

    async function handlePost(){
        

       if(title === ''){
        alert('Please enter a title');
        return;
       }
       if (body === ''){
        alert('Please enter a body');
        return;
       }

       const newPost={title:title,body:body,date:date,time:time};
       setPosts([...posts,newPost]);
       alert("New Post Object: Your Title is "+newPost.title+" and your body is "+newPost.body);
       console.log("New post object: ",newPost);
       setTitle('');
       setBody('');
       setDate('');
       setTime('');

       try{
        console.log('send blog post to backend:',{title:newPost.title, body:newPost.body});
        const response =await fetch('http://localhost:3001/api/blog-post',{
        method:'POST',
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify({
            title:newPost.title,
            body:newPost.body
        })
        });
        const data =await response.json();
        console.log('Response from backend:',data);
        if(data.success){
            setStatusMessage(`Blog post "${newPost.title}" sucessfully saved to server`);
            setTimeout(()=>setStatusMessage(''),5000)
        }else{
            setStatusMessage('Server returned an unexpected response');
            setTimeout(()=>setStatusMessage(''),5000);
        }
       }catch(e){
       console.log('Error sending blog post to API:',e);
       const errorMessage={
        title:'Sorry, there was an error communicating with the blog post. Please try again.',
        body:'Sorry, there was an error communicating with the blog post. Please try again.',
        timestamp: new Date().toLocaleString()
       }
       setStatusMessage(errorMessage.title);
       }
    }
    return(
        <main>
            <h2>Create a New Blog Post</h2>
            <p>{statusMessage}</p>
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
            <label>
                Date:
                 <input type="date"
                   value={date}
                   onChange={(e)=>setDate(e.target.value)}
                 />
            </label>
            <label>
                Time:
                 <input 
                 type="time"
                 value={time}
                  onChange={(e)=>setTime(e.target.value)}
                 />
            </label>
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
                <h3>Create your own ideas</h3>
            <p>
                "A blog is more than just words—it’s your personal brand, your creativity, and your mark on the internet."
            </p>
            <img className="blog-pic" alt="Blog" src="/blog.jpg"></img>
            </form>
        </main>
    );
}
export default BlogBody;



