import { useRouter } from 'next/router';
import withLayout from '../../src/components/Layout';

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
};

export default withLayout(Page);