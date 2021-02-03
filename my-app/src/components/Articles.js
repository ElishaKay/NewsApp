import React from 'react'

export const Articles = ({articles}) => {

    console.log('articles length:::', articles.length)
    if (articles.length === 0) return null

    const ArticleRow = (article,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{article.title}</td>
                  <td>{article.contentSnippet}</td>
                  <td>{article.link}</td>
              </tr>
          )
    }

    const articleTable = articles.map((article,index) => ArticleRow(article,index))

    return(
        <div className="container">
            <h2>Articles</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Article Id</th>
                    <th>Title</th>
                    <th>Snippet</th>
                    <th>Link</th>
                </tr>
                </thead>
                <tbody>
                    {articleTable}
                </tbody>
            </table>
        </div>
    )
}