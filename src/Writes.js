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

class WritesGrid extends React.Component {
    renderCell(img, title, desc) {
        return (
            <Cell columns={4}>
                <Card>
                    <CardMedia imageUrl={img} />
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </Card>
            </Cell>
        );
    }
    render() {
        return (
            <Grid>
                <Row>
                    {this.renderCell("", "Global", "전 세계 개발자들과의 활발한 소통")}
                    {this.renderCell("", "Global", "전 세계 개발자들과의 활발한 소통")}
                    {this.renderCell("", "Global", "전 세계 개발자들과의 활발한 소통")}
                    {this.renderCell("", "Global", "전 세계 개발자들과의 활발한 소통")}
                </Row>
            </Grid>
        );
    }
}

class Writes extends React.Component {
    render() {
        return (
            <div className="Writes">
                <h1>I WRITE THINGS</h1>
                <WritesGrid/>
            </div>
        );
    }
}

export default Writes;