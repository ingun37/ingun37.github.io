import React from 'react';
import Card, {
    CardPrimaryContent,
    CardMedia,
} from "@material/react-card";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import "./BlogItemsScroll.scss"
function unpackthum(item) {
    try {
        return item['media:thumbnail'] || ((item['media:thumbnail'] || {}).$ || {}).url || null;
    } catch (err) {
        console.error(err)
        return null
    }
}

function OpenNewTab(url) {
    window.open(url, '_blank');
}
const Menu = (rssItemlist) =>
    rssItemlist.map((item, idx) => {
        return (
            <div key={idx.toString()} className='itemframe'>
                <Card className='writecard roundcard'>
                    <CardMedia square imageUrl={process.env.PUBLIC_URL + item.thumbnail} />
                </Card>
            </div>
        )
    });


let Parser = require('rss-parser');
let parser = new Parser({
    customFields: {
        item: [
            'media:thumbnail',
        ],
    }
});

export class BlogItemsScroll extends React.Component {
    rssContent = parser.parseURL(process.env.PUBLIC_URL + `/tumblr-rss.xml`)
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.state = { items: [] }
    }
    componentDidMount() {
        this.rssContent.then(feed => {
            let items = feed.items;
            console.log(items)
            items.forEach(i => i.thumbnail = unpackthum(i))
            console.log(items)
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