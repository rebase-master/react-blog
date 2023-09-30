import articles from "./article-content";
import ArticlesList from "../Components/ArticlesList";

const ArticlesPage = () => {
    return (
        <>
        <h1>Articles</h1>
        <ArticlesList articles={articles} />
        </>
    );
}

export default ArticlesPage;