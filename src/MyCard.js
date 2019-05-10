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
        <Card>
            <CardPrimaryContent>
                <h1>Header</h1>
                <CardMedia square imageUrl='./my/fancy/image.png' />
            </CardPrimaryContent>

            <CardActions>
                <CardActionButtons>
                    <button>Click Me</button>
                </CardActionButtons>

                <CardActionIcons>
                    <i>Click Me Too!</i>
                </CardActionIcons>
            </CardActions>
        </Card>
    );
}

export default MyCard;
