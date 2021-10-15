import React, { useRef, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

const headerNav =[
	{
		display: 'Films',
		path: '/films'
	},
	{
		display: 'Locations',
		path: '/locations'
	},
	{
		display: 'People',
		path: '/people'
	},
	{
		display: 'Species',
		path: '/species'
	},
	{
		display: 'Vehicles',
		path: '/vehicles'
	},
]

const Header = () => {
	const { pathname } = useLocation();
	const headerRef = useRef(null);

	const active = headerNav.findIndex(e => e.path === pathname);

	useEffect(() => {
		const shrinkHeader = () => {
			if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				headerRef.current.classList.add('shrink');
			} else {
				headerRef.current.classList.remove('shrink');
			}
		}
		window.addEventListener('scroll', shrinkHeader);
		return () => {
			window.removeEventListener('scroll', shrinkHeader);
		};
	}, []);

	return (
		<div ref={headerRef} className="header">
			<div className="header__wrap container">
				<div className="logo">
					<Link to='/'>
						<img src="white logo.png" alt="Studio Ghibli Logo"></img>
					</Link>
				</div>
				<ul className="header__nav">
					{
						headerNav.map((e, i) => (
							<li key={i} className={`${i === active ? 'active' : ''}`}>
								<Link to={e.path}>
									{e.display}
								</Link>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}

export default Header
