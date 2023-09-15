import ArticleContainer from "./components/article_container";
import ArticleHero from "./components/article_hero";
import BlogHeader from "./components/blog_header";
import FeaturedArticles from "./components/featured_articles";
import Footer from "./components/footer";

const Articles = () => {
  return (
    <>
      <ArticleHero />
      <FeaturedArticles />
      <BlogHeader />
      <ArticleContainer />
      <Footer />
    </>
  );
};

export default Articles;
