import withLayout from '../src/components/Layout';
import Link from 'next/link';

interface IPost {
  title?: any;
}

const PostLink: React.FC<IPost> = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Blog = () => {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </div>
  );
};

export default withLayout(Blog)