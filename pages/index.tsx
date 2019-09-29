import withLayout from '../src/components/Layout';
import Link from 'next/link';

interface IPost {
  id?: any;
}

const PostLink: React.FC<IPost> = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Blog = () => {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </div>
  );
};

export default withLayout(Blog)