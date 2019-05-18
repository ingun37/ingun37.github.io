import React from 'react';
import "./Writes.scss"
import "./cards.scss"
import "./contentpanel.scss"
import IconButton from '@material/react-icon-button';

import MaterialIcon from '@material/react-material-icon';
import Card, {
    CardPrimaryContent,
    CardMedia,
} from "@material/react-card";
import Button from '@material/react-button';
import ScrollMenu from 'react-horizontal-scrolling-menu';

let Parser = require('rss-parser');
let parser = new Parser({
    customFields: {
        item: [
            ['media:thumbnail', 'thumbnail'],
            ['media:content', 'contents', { keepArray: true }],
        ],
    }
});
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
            <span className='writetitle'>{title}</span>
            <span className='writedate'>{date}</span>
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


const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

class Writes extends React.Component {
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
        return (
            <div>
                <h1 className='sectiontitle writetitle'>I WRITE THINGS</h1>
                <div className="Writes contentpanel">
                    <ScrollMenu
                        data={menu}
                        onSelect={this.onSelect}

                    />
                </div>
            </div>
        );
    }
}

export default Writes;