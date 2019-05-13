import React from 'react';
import "./Writes.scss"
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
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
            items.forEach(i=>i.thumbnail = unpackthum(i))
            this.setState({
                items: items.filter(i => i.thumbnail).slice(0, 6)
            })
        })();
    }
    onCardClick(e) {
        console.log(e)
    }
    renderCell(idx, img, title) {
        return (
            <Cell columns={3} key={idx.toString()}>
                <Card className='writecard'>
                    <CardPrimaryContent onClick={this.onCardClick}>
                        <CardMedia square imageUrl={img}/>                            
                        <span className='writetitle'>{title}</span>
                    </CardPrimaryContent>
                </Card>
            </Cell>
        );
    }
    render() {
        return (
            <Grid>
                <Row>
                    {this.state.items.map((item, idx)=>this.renderCell(idx, item.thumbnail, item.title))}
                </Row>
            </Grid>
        );
    }
}

class Writes extends React.Component {
    render() {
        return (
            <div className="Writes">
                <h1 className='title'>I WRITE THINGS</h1>
                <WritesGrid />
            </div>
        );
    }
}

export default Writes;