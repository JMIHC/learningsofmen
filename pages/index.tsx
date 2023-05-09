import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";

export default function Home({ posts }) {
  return (
    <div>
      <h1 className="mt-24 mb-12 font-bold text-3xl">Hello friend,</h1>
      <p className="prose lg:prose-xl prose-stone">
        This is a work in progress. I&apos;ll be gathering questions and working out answers both from 
        within myself and from others on that pathway into healthy manhood. 
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