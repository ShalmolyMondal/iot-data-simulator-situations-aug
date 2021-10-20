import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import glamorous from "glamorous";
import { css } from 'glamor';

import ViewLayout from 'components/ViewLayout';
import ControlPanel from '../Main/components/system/ControlPanel';
import CbtLayout from "../../shared/components/CbtLayout";

@inject("store")
@observer
export default class SituationDetailScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <CbtLayout
                page={this.props.store.view.page}
                situations={this.props.store.situationsStore.items}
                situation={this.props.store.SituationDetailStore.item}
                {...this.props}
            />
        )
    }
}
