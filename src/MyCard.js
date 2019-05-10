import React from 'react';
import './MyCard.scss';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";

function MyCard() {
    return (
        <Card className="MyCard">
            <CardPrimaryContent>
                <h1>Header</h1>
            </CardPrimaryContent>

        </Card>
    );
}

export default MyCard;
