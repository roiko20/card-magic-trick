import React from 'react';
import { CardLayout} from "../Layout.components";

export default class Card extends React.Component {

    render() {
        return (
            <CardLayout>
                <img className={`${this.props.class}`} alt="card" src={this.props.imageUrl} />
            </CardLayout>
        );
    }
}
