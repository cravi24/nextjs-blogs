import { createClient } from 'contentful';
import BlogCard from '../components/BlogCard';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const client = createClient({
    space: 'ok393afkpeyf',
    accessToken: 'EM99PUFNBPBr88KBSjbYUDJwgnCSWEOHfx0c_5XZKqo',
  });

  const res = await client.getEntries({
    content_type: 'blog',
    locale: 'de'
  });

  return {
    props: {
      blogs: res.items,
    },
  };
}

export default function Blogs({ blogs }) {
  return (
    <div className={`${styles.main}`}>
      {blogs.map((blog, i) => (
        <BlogCard key={i} blog={blog} />
      ))}
    </div>
  );
}
