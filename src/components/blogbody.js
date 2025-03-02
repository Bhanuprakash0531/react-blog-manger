import React, {useState} from "react";
import './blogbody.css';


function BlogBody(){

    const [title, setTitle]= useState('');
    const [posts, setPosts]= useState([]);


    function handleTitleChange(event){
        setTitle(event.target.value);
        console.log("Current title:", title);
    }

    function handlePost(){
       /* //alert("You clicked the post button!:");
        const dummypost = { title:"sample Title",author: "Myself"};
        // alert("Created a dumpy:"+ dumpypost.title);
        console.log("created a dummy posts: ",dummypost.title);
        if(dummypost.title){
            console.log("The dummy post has a title:",dummypost.title);
        }*/
       if(title == ''){
        alert('please enter a title');
        return;
       }
       const newPost={title:title};
       //console.log("New post object", newPost);
       setPosts([...posts,newPost]);
       alert("Your title is: "+ newPost.title);
       setTitle('');
      
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
                <input type="text" value={title} onChange={handleTitleChange} placeholder="Enter your blog title"/>
            </label>
                {/* 
                <br></br>
                <label>
                    Body:
                    <textarea name="body" placeholder="Start writing the content here..."></textarea>
                </label>
                <br></br>
                */}
                <button className="post-button" type="button" onClick={handlePost}>Post</button>

                {posts.map((post, index)=>(
                <div key={index}>
                    <h4>{post.title}</h4>
                </div>))}

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