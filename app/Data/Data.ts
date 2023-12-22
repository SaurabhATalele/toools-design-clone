
interface ICategory {
    name: string;
    image: string;
    link:string;
}

interface Ilatest{
    name:string;
    image:string;
    description:string;
}

const categories : Array<ICategory> =[
    {
        name: 'Inspiration',
        image:"https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f61fd700b26ceae11ad7c_icon-large-inspiration.svg",
        link:'https://www.toools.design/ui-web-design-inspiration-websites'
    },
    {
        name:'Illustrations',
        image:'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f61f5c9c05ddd99a4368d_icon-large-illustrations.svg',
        link:'https://www.toools.design/free-open-source-illustrations'
    },
    {
        name:'Icons',
        image:'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f6211dcfb053643bcdc5c_icon-large-icons.svg',
        link:''

    },
    {
        name:'Mockups+Kits',
        image:'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f62099391c34c9db1a0a0_icon-large-mockups.svg',
        link:''

    },
    {
        name:'Typography',
        image: 'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f62198c7072c91a3f64e6_icon-large-typography.svg',
        link:''

    },
    {
        name:'Stock Photos',
        image:'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f61eda65f5a21e029a4c1_icon-large-photos.svg',
        link:''

    },
    {
        name:'Learning',
        image:'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f613195019a45df1c3fb4_icon-large-learning.svg',
        link:''

    },
    {
        name:'Blogs',
        image:'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f61e496cbac2441f85c5b_icon-large-blogs.svg',
        link:''

    },
    {
        name:'Podcasts',
        image:'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f61d359c289730fb2b9ea_icon-large-podcasts.svg',
        link:''

    },
    {
        name:'Books',
        image:'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f61dbab4753bcbf4e999c_icon-large-books.svg',
        link:''

    },
    {
        name:'Accessibility',
        image:'https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/656f611b532287d1b3fc619d_icon-large-accessibility.svg',
        link:''

    },
   
]


const latest : Array<Ilatest> =[
    {
        name:"Design Systems Database",
        image:"https://assets-global.website-files.com/5ce10a4d0b5f0b560c22e756/65818009062834ab35d70596_design-systems-database.svg",
        description:"Best-in-class Design Systems with components and foundations references."
    }
]


export {categories}