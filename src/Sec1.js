import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import MyCard from "./MyCard";
import "./Sec1.scss"
function Sec1() {
    return (
        <Grid className="Sec1">
            <Row>
                <Cell columns={12}><h1>개발자 전인건을 소개합니다.</h1></Cell>
            </Row>
            <Row>
                <Cell columns={3}><MyCard /></Cell>
                <Cell columns={3}><MyCard /></Cell>
                <Cell columns={3}><MyCard /></Cell>
                <Cell columns={3}><MyCard /></Cell>
            </Row>
        </Grid>
    );
}

export default Sec1;
