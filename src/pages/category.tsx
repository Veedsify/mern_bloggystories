import { useParams } from "react-router-dom";
import ArticleContainer from "./components/article_container";
import CategoryHero from "./components/category_hero";
import Footer from "./components/footer";

const CategoryPage = () => {
  const { id } = useParams();
  console.log(id)
  return (
    <>
      <CategoryHero />
      <ArticleContainer />
      <Footer />
    </>
  );
};

export default CategoryPage;
