import React from 'react';
import "./Writes.scss"
import "./cards.scss"
import "./contentpanel.scss"
import { BlogItemsScroll } from "./BlogItemsScroll";
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Button from '@material/react-button';


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
            <div>
                <h1 className='sectiontitle writetitle'>I WRITE THINGS</h1>
                <div className="Writes contentpanel">
                    <BlogItemsScroll />
                    
                </div>
            </div>
        );
    }
}

export default Writes;