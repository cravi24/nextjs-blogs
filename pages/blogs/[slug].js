import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import style from './slug.module.css';

const client = createClient({
  space: 'ok393afkpeyf',
  accessToken: 'EM99PUFNBPBr88KBSjbYUDJwgnCSWEOHfx0c_5XZKqo',
});

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: 'blog',
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug,
  });

  console.log(items[0]);
  return {
    props: { blog: items[0] },
  };
}

export default function BlogDetails({ blog }) {
  return (
    <div className={style.BlogDetails}>
      <Image
        alt="ds"
        src={'https:' + blog.fields.featuresImage.fields.file.url}
        width={blog.fields.featuresImage.fields.file.details.image.width}
        height={blog.fields.featuresImage.fields.file.details.image.height}
      />
      <h2>{blog.fields.title}</h2>
      <div className={style.content}>
        {documentToReactComponents(blog.fields.blogContent)}
      </div>
    </div>
  );
}
