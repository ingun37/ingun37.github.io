import React from 'react';
import "./Paintings.scss"
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
import {BlogItemsScroll} from './BlogItemsScroll'
function OpenNewTab(url) {
    window.open(url, '_blank');
}
class Paintings extends React.Component {
    render() {
        return (
            <div className="Math">
                <Title className="title">PAINTINGS</Title>
                <div className="contentpanel panel" align="center">
                    <BlogItemsScroll></BlogItemsScroll>
                    <div className='sectionh3 moretitle' onClick={() => OpenNewTab("https://ingun37.tumblr.com/")}>
                        MORE PAINTINGS
                    </div>
                </div>
            </div>
        );
    }
}

export default Paintings;