import React from 'react'

function Card({title, image, link}) {
  return (
    <article className="anime-card">
			<a 
				href={link}
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={"home images/" + image}
						alt={title + "Image"} />
				</figure>
				<h3>{title}</h3>
			</a>
		</article>
  )
}

export default Card
