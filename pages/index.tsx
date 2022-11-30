import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";

export default function Home({ posts }) {
  return (
    <div>
      <h1 className="mt-24 mb-12 font-bold text-3xl">Greetings,</h1>
      <p className="prose lg:prose-xl prose-stone">
        What follows is what I&apos;ve been learning about being a man. Long after 
        my Father&apos;s passing, I get to find out what he wants me to know, 
        what I imagine he wanted from his Father, what any man would want from 
        a Father or a mentor. It&apos;s a long line of men, my ancestors, 
        each generation doing the work as best they can and passing it down
        to the next when they can&apos;t.
        </p>
        <br/>
        <p className="prose lg:prose-xl prose-stone">
        Welcome to the journey.
        </p>
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.data.title}
          date={post.data.date}
          description={post.data.description}
          slug={post.slug}
        />
      ))}
    </div>
  );
}

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};