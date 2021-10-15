import React from 'react'

function TextCard({film}) {
  console.log(film)
  return (
    <article className="anime-card">
			<a 
				href={`films/${film.id}`}
				target="_blank" 
				rel="noreferrer">
				<h3>{film.title}</h3>
			</a>
		</article>
  )
}

export default TextCard
