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
class WritesGrid extends React.Component {
    state = { items: [] }
    constructor(props) {
        super(props);

        (async () => {
            let feed = await parser.parseURL(process.env.PUBLIC_URL + `/wordpress-rss.xml`);
            let items = feed.items;
            items.forEach(i => i.thumbnail = unpackthum(i))
            this.setState({
                items: items.filter(i => i.thumbnail).slice(0, 6)
            })
        })();
    }
    onCardClick(idx) {
        const url = this.state.items[idx].link;
        window.open(url, '_blank');
    }
    onMoreClick() {
        const url = 'https://ingun37.wordpress.com';
        window.open(url, '_blank');
    }
    renderCell(idx, img, title, date) {
        return (
            <Card key={idx.toString()} className='writecard roundcard'>
                <CardPrimaryContent onClick={() => this.onCardClick(idx)}>
                    <CardMedia square imageUrl={img} />
                    <span className='writetitle'>{title}</span>
                    <span className='writedate'>{date}</span>
                </CardPrimaryContent>
            </Card>
        );
    }
    render() {
        return (
            <div className='horizdiv'>
                {this.state.items.map((item, idx) => this.renderCell(idx, item.thumbnail, item.title, item.pubDate.slice(0, 'Tue, 02 Apr 2019'.length)))}
                <div className='morediv'>
                    <h1 className='moretitle'></h1>
                    <Button className='morebutton' raised={true} trailingIcon={<MaterialIcon icon='forward' />} onClick={this.onMoreClick}>
                        SEE MORE
                    </Button>
                </div>
            </div>
        );
    }
}

class Writes extends React.Component {
    render() {
        return (
            <div>
                <h1 className='sectiontitle'>I WRITE THINGS</h1>
                <div className="Writes contentpanel">
                    <WritesGrid />
                </div>
            </div>
        );
    }
}

export default Writes;