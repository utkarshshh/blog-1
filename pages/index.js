import Layout from "../components/layouts/main";
import Link from "next/link";
import { posts } from "../posts";

export function getStaticProps() { //returns static page and url map for all posts in ../posts
  return {
    props: {
      posts: posts.map(post => ({
        ...post,
        url: `${new Date(post.date).getFullYear()}/${post.id}`,
      })),
    },
  };
}
// Post Attributes: id, date, url, title

const Home = ({ posts, date }) => (
  <Layout>
    <ul>
      {posts.map(post => (
        <li key={post.id}> //list of posts using post id as uid
          <span>{post.date}</span> //// TODO: how is span being used here?
          <Link href={post.url}> //hyperlink post url with post title
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
//style tag has span style -> being used for date; 
    <style jsx>{`
      ul li {
        padding: 10px 15px;
      }

      ul li span {
        color: #5b5b5b;
        display: block;
        font-size: 13px;
      }

      ul li a {
        font-weight: bold;
        color: var(--link-color);
        text-decoration: none;
      }

      @media (any-hover: hover) {
        ul li a:hover {
          background: #eee;
        }

        ul li a:active {
          background: #ccc;
        }
      }

      @media (min-width: 500px) {
        ul {
          padding: 20px 0;
          max-width: 42rem;
          margin: auto;
        }

        ul li {
          padding-left: 0;
        }

        ul li a {
          padding: 10px 15px;
          transition: 150ms background-color ease-in;
        }

        ul li span {
          display: inline-block;
          width: 160px;
          padding-right: 10px;
          text-align: right;
          font-size: inherit;
        }
      }
    `}</style>
  </Layout>
);

export default Home;
