import React from 'react';
import Card, {
    CardPrimaryContent,
    CardMedia,
} from "@material/react-card";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import "./BlogItemsScroll.scss"
function unpackthum(item) {
    try {
        const th = ((item.thumbnail || {}).$ || {}).url || null;
        if (th) return th;
        return item.contents.map(c => (c.$ || {}).url).filter(u => u).find(u => u.includes('.png') || u.includes('.jpg')) || null
    } catch (err) {
        console.error(err)
        return null
    }
}

const MenuItem = ({ idx, img, title, date }) => {
    return (
        <Card key={idx.toString()} className='writecard roundcard'>
            <CardMedia square imageUrl={img} />
            <span className='blogItemTitle'>{title}</span>
            <span className='blogItemDate'>{date}</span>
        </Card>
    );
};

const Menu = (rssItemlist) =>
    rssItemlist.map((item, idx) => {
        return <MenuItem idx={idx} key={idx.toString()} img={item.thumbnail} title={item.title} date={item.pubDate.slice(0, 'Tue, 02 Apr 2019'.length)} />;
    }).concat([(
        <div className='morediv ' key={rssItemlist.length.toString()}>
            <div className='sectionh3 moretitle'>CHECK OUT MORE</div>
        </div>
    )]);


let Parser = require('rss-parser');
let parser = new Parser({
    customFields: {
        item: [
            ['media:thumbnail', 'thumbnail'],
            ['media:content', 'contents', { keepArray: true }],
        ],
    }
});

export class BlogItemsScroll extends React.Component {
    rssContent = parser.parseURL(process.env.PUBLIC_URL + `/wordpress-rss.xml`)
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.state = { items: [] }
    }
    componentDidMount() {
        this.rssContent.then(feed => {
            let items = feed.items;
            items.forEach(i => i.thumbnail = unpackthum(i))
            this.setState({
                items: items.filter(i => i.thumbnail).slice(0, 6)
            })
        })
    }
    onCardClick(idx) {
        const url = this.state.items[idx].link;
        window.open(url, '_blank');
    }
    onMoreClick() {
        const url = 'https://ingun37.wordpress.com';
        window.open(url, '_blank');
    }
    onSelect = key => {
        const idx = parseInt(key)
        if (idx == this.state.items.length) {
            this.onMoreClick()
        } else {
            this.onCardClick(idx)
        }
    }
    render() {
        // Create menu from items
        const menu = Menu(this.state.items);
        return <ScrollMenu data={menu} onSelect={this.onSelect} />
    }
}