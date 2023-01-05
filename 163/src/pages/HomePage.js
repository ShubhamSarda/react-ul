import { PostCard } from "../components";

export const HomePage = () => {
  const posts = [
    {id: 1, title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quidem magnam vitae, deserunt facilis, commodi accusamus doloribus fugiat, soluta debitis illo nostrum quo tempora consequatur quas illum nobis laboriosam recusandae distinctio nihil ratione. Minima reprehenderit maiores fugiat cupiditate dolorem, consequuntur asperiores nostrum voluptatem laboriosam temporibus obcaecati, nesciunt beatae possimus tenetur.", author: "Shubham"}, 
    {id: 2, title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quidem magnam vitae, deserunt facilis, commodi accusamus doloribus fugiat, soluta debitis illo nostrum quo tempora consequatur quas illum nobis laboriosam recusandae distinctio nihil ratione. Minima reprehenderit maiores fugiat cupiditate dolorem, consequuntur asperiores nostrum voluptatem.", author: "Shubham"}
  ]

  return (
    <section>
      { posts.map((post) => (
        <PostCard key={post.id} post={post} />
      )) }      
    </section>
  )
}
