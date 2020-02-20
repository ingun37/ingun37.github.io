import React from 'react';
import "./Math.scss"
import "./contentpanel.scss"
import "./font.scss"
import Button from '@material/react-button';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
import Title, {SubTitle} from './Title'

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
                    <Card className="card" onClick={handleClick("/answers/?sha1=b614f31d04b3bc2b3d23ee4337475251429e5a9f")}>
                            <div className="cardtitle">I love Category Theory</div>
                    </Card>
                </Cell>
                <Cell width={4}>
                    <Card className="card" onClick={handleClick("/answers/?sha1=4c1513c92422dc16b3c5f13bd03d34ba0feeb6df")}>
                            <div className="cardtitle">I love Topology</div>
                    </Card>
                </Cell>
                <Cell width={4}>
                    <Card className="card" onClick={handleClick("https://youtu.be/SmRLWwmBgQU")}>
                            <div className="cardtitle">I made a 3D Engine</div>
                    </Card>
                </Cell>
                <Cell width={4}>
                    <Card className="card" onClick={handleClick("https://github.com/ingun37/mat4ipad")}>
                            <div className="cardtitle">I made an Algebraic Calculator</div>
                    </Card>
                </Cell>
            </Row>
        </Grid>
    );
}
class Math extends React.Component {
    render() {
        return (
            <div className="Math">
                <Title className="mathtitle">MATHEMATICS</Title>
                <SubTitle className="mathsubtitle">WIDE BACKGROUND IN MATHEMATICS INCLUDING LOTS OF APPLICATIONS IN COMPUTER SCIENCE</SubTitle>
                <div className="contentpanel panel" align="center">
                    <MyGrid></MyGrid>
                </div>
            </div>
        );
    }
}

export default Math;