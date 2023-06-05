import cryptoo from '../assets/images/cryptoo.png'
import jhakaas from '../assets/images/jhakaas.png'
import portfolio from '../assets/images/portfolio.png'

export const myProjects = [
    {
        title: 'My Porfolio',
        description: "My portfolio website showcases my skills, recent projects, and contact information, reflecting my passion for technology and innovation.",
        imgSrc: `${portfolio}`,
        link: 'https://shivamjha.vercel.app/',
        githubCode: 'https://github.com/shivamjhaaa/portfolio'
    },
    {
        title: 'Cryptoo',
        link: 'https://cryptoo-eight.vercel.app/',
        description: "Cryptoo is a website that allows users to search for information about various cryptocurrencies in real-time. The website is designed to provide users with accurate and up-to-date information about the price, market cap, trading volume, and other key metrics of cryptocurrencies. The website is connected to the Coingecko API, which is a popular source of data for cryptocurrency information",
        imgSrc: `${cryptoo}`,
        githubCode: 'https://github.com/shivamjhaaa/cryptoo'
    },
    {
        title: 'Jhakaas',
        description: "Jhakaas is an online learning platform! It has various types of courses. There is User authentication and Course lectures are extra secured for Premium members. It is integrated with razorpay for purchasing of course. Admin dashboard is there for viewing statistics, adding,deleting & changing courses & lectures.",
        imgSrc: `${jhakaas}`,
        githubCode: 'https://github.com/shivamjhaaa/jhakaas'
    }
]