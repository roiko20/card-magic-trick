import React from 'react';
import { PileCardLayout} from "../Layout.components";

export default class PileCard extends React.Component {

    render() {
        return (
            <PileCardLayout>
                <img className="pileCard" alt="card" src={this.props.imageUrl} />
            </PileCardLayout>
        );
    }
}
