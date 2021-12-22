// domain.com/news
import Link from "next/link";

const News = () => {
  return (
    <>
      <h1>News</h1>
      <ul>
        <li>
          <Link href="news/clickbait-pretentious-title">
            This is some clickbait pretentious title
          </Link>
        </li>
        <li>
          <Link href="news/elf-on-a-shelf">
            You've heard of elf on a shelf...
          </Link>
        </li>
        <li>
          <Link href="news/naruto-running">
            Naruto-running: what they've never told you
          </Link>
        </li>
      </ul>
    </>
  );
};

export default News;
