import { useRouter } from "next/router";

// domain.com/news/[newsId]

const Details = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>Details for News {newsId}</h1>;
};

export default Details;
