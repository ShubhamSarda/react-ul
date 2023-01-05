import { useEffect, useState, useRef } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard } from "../components";

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const postsRef = useRef(collection(db, "posts"));

  useEffect(() => {
    async function getPosts(){
      const data = await getDocs(postsRef.current);
      setPosts(data.docs.map((document) => (
        {...document.data(), id: document.id}
        )
      ));
    }
    getPosts();
  }, [postsRef, toggle]);

  return (
    <section>
      { posts.map((post) => (
        <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
      )) }      
    </section>
  )
}
