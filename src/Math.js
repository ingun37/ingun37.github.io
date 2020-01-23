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
                    <Card className="card" href="/answers" onClick={handleClick("/answers/?sha1=b614f31d04b3bc2b3d23ee4337475251429e5a9f")}>
                            <div className="cardtitle">My original answers to "Category Theory For Programmers"</div>
                    </Card>
                </Cell>
                <Cell width={4}>
                    <Card className="card" href="/answers" onClick={handleClick("/answers/?sha1=4c1513c92422dc16b3c5f13bd03d34ba0feeb6df")}>
                            <div className="cardtitle">My original answers to "Topology Without Tears"</div>
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
                <Title className="title">MATHEMATICS</Title>
                <SubTitle className="subtitle">I'm enthusiastic about math in various applications including declarative programming, 3D graphics, CG</SubTitle>
                <div className="contentpanel panel" align="center">
                    <MyGrid></MyGrid>
                </div>
            </div>
        );
    }
}

export default Math;