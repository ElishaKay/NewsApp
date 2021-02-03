exports.awesomeTemplateHTML = ({headlines}) => {
	console.log('headlines in HTML', headlines);

	// const loadOptions = () => {
	// 	return allFolders.map((folder, i) => `
 //            <a href="/${folder}">${folder}</a>
 //        `).join('');
	// }

	const loadNews = () => {
		return headlines.map((article, i) => `
            <li>
		       <h1>${article.title}</h1>
		        <p>
			        ${article.contentSnippet}
		        </p>
		        <a target="_blank" href="${article.link}">Read</a>
	      </li>
        `).join('');
	}

	return `
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1">
		</head>
		<main class="wrapper">
		  <section class="hero">
		    <h1>Daily Beast</h1>
		    <article>
		      <p>
				Your Favorite News. Anytime.
		      </p>
		    </article>
		  </section>
		  <section class="the-images" id="the-images">
		    <ul>
		      ${loadNews(headlines)}
		    </ul>
		  </section>
		</main>
		<footer>
		  <p>&copy; 2021. Made with ❤ and CSS Grid.</p>
		</footer>
	`
}