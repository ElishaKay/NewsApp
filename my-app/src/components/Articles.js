import React from 'react'

export const Articles = ({articles}) => {

    console.log('articles length:::', articles.length)
    if (articles.length === 0) return null

    const ArticleRow = (article,index) => {
        return(
              <li key = {index}>
                 <h1>{article.title}</h1>
                  <p>
                    {article.contentSnippet}
                  </p>
                  <a href={article.link}>Read</a>
              </li>
          )
    }

    const articleTable = articles.map((article,index) => ArticleRow(article,index))

    return(
        <div className="container">
            <h2>Articles</h2>

            <section className="articles-container" id="articles-container">
              <ul>
                {articleTable}
              </ul>
            </section>
        </div>
    )
}