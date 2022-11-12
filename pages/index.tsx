import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";

export default function Home({ posts }) {
  return (
    <div>
      <h2 className="mt-24 mb-12 font-bold text-3xl">Starting up soon</h2>
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