import React from 'react';
import "./Reads.scss"
import "./cards.scss"
import "./contentpanel.scss"
import Card, {
    CardMedia,
} from "@material/react-card";
import ScrollMenu from 'react-horizontal-scrolling-menu';

const MenuItem = ({ idx }) => {
    const url = process.env.PUBLIC_URL + `/books/${idx}.jpg`
    console.log(url)
    return (
        <Card key={idx.toString()} className='readcard roundcard'>
            <CardMedia className='readcardmedia' imageUrl={url} />
        </Card>
    );
};

const Menu = (booknum) =>
    (new Array(booknum).fill(null)).map((_, idx) => <MenuItem idx={idx} key={idx.toString()} />);



const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

class Reads extends React.Component {
    render() {
        // Create menu from items
        const menu = Menu(12);
        return (
            <div>
                <h1 className='sectiontitle readtitle'>I READ THINGS</h1>
                <div className="Reads contentpanel">
                    <ScrollMenu data={menu} />
                </div>
            </div>
        );
    }
}

export default Reads;