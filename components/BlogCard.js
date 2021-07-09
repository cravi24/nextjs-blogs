import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const BlogCard = ({ blog }) => {
  const { title, slug, blogContent, thumbnail } = blog.fields;
  return (
    <div className={styles.card}>
      <Link href={`/blogs/${slug}`}>
        <a>
          <Image
            alt="ds"
            src={'https:' + blog.fields.thumbnail.fields.file.url}
            width={blog.fields.thumbnail.fields.file.details.image.width}
            height={blog.fields.thumbnail.fields.file.details.image.height}
          />
          <h3>{title}</h3>
          <p>
            {blogContent.content
              .reduce((acc, cur) => acc + cur.content[0].value, '')
              .substring(0, 200)}
          </p>
        </a>
      </Link>
    </div>
  );
};

export default BlogCard;
