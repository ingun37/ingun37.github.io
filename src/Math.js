import React from 'react';
import { default as scss } from "./Math.scss"
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

function MyGrid() {
    return (
        <Grid>
            <Row>
                <Cell width={4}>
                    <Card>
                            <p>Category Theory For Programmers</p>
                            <p>Milew</p>
                    </Card>
                </Cell>
                <Cell width={4}>
                    <Card>
                        <CardPrimaryContent>
                            <p>Category Theory For Programmers</p>
                            <p>Milew</p>
                        </CardPrimaryContent>
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
                <h1 className="sectiontitle title">MATHEMATICS</h1>
                <div className="contentpanel panel" align="center">
                    <div className='sectionh3 subtitle'>Code is seasonal and only mathematical structure wears it. Math matters most.</div>
                    <div className='sectionh3 subtitle'>Checkout my posts on various areas</div>
                    <Button raised="true" href="/answers/?sha1=b614f31d04b3bc2b3d23ee4337475251429e5a9f">Category Theory</Button>
                    <Button raised="true" href="/answers/?sha1=4c1513c92422dc16b3c5f13bd03d34ba0feeb6df">Topology</Button>
                </div>
            </div>
        );
    }
}

export default Math;