/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'miri makes things'
export const siteDescription = 'Personal portfolio + blog of Miriam Nadler'
export const siteURL = 'miri.page'
export const siteLink = 'miri.page'
export const siteAuthor = 'Miriam Nadler'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10
export const workPerPage = 20

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Things',
		route: '/work'
	},
	{
		title: 'Blog',
		route: '/blog'
	}, {
		title: 'Contact',
		route: '/contact' 
	}, {
		title: 'Pinball',
		route: '/pinball' 
	}  
]