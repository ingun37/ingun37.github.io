import React from 'react';
import "./Writes.scss"
import "./cards.scss"
import "./contentpanel.scss"
import { BlogItemsScroll } from "./BlogItemsScroll";
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Button from '@material/react-button';
import Title, {SubTitle} from './Title'
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";

function MyGrid() {
    function handleClick(path) {
        return (e) => {
            window.open(path, '_blank')
        }
    }
    return (
        <Grid>
            <Row>
                <Cell width={4}>
                    <Card className="card" onClick={handleClick("https://dev.to/ingun37/file-s-owner-is-not-for-uiview-3n9g")}>
                            <div className="cardtitle">File's Owner is not for UIView</div>
                    </Card>
                </Cell>
                <Cell width={4}>
                    <Card className="card" onClick={handleClick("https://dev.to/ingun37/monad-being-monoid-explained-without-math-30he")}>
                            <div className="cardtitle">Monad is Monoid - explained without math</div>
                    </Card>
                </Cell>
                <Cell width={4}>
                    <Card className="card" onClick={handleClick("https://dev.to/ingun37/why-and-how-to-see-algebra-in-programming-model-6bn")}>
                            <div className="cardtitle">Why and how to see algebra in programming?</div>
                    </Card>
                </Cell>
                <Cell width={4}>
                    <Card className="card" onClick={handleClick("https://dev.to/ingun37/stop-using-dollar-sign-as-delimiter-for-tex-24bf")}>
                            <div className="cardtitle">Stop using $(Dollar Sign) as delimiter for Tex in Markdown</div>
                    </Card>
                </Cell>
            </Row>
        </Grid>
    );
}

class Writes extends React.Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
    }

    componentDidMount() {
    }

    render() {
        // Create menu from items
        return (
            <div className="writings">
                <Title className="writingstitle">WRITINGS</Title>
                <SubTitle className="writingssubtitle">ENTHUSIASTIC WRITER ON PROGRAMMING AND MATHEMATICS</SubTitle>
                <div className="contentpanel panel" align="center">
                    <MyGrid />
                </div>
            </div>
        );
    }
}

export default Writes;