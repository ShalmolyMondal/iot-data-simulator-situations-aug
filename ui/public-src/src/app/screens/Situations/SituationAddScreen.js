import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import glamorous from "glamorous";
import { css } from 'glamor';

import ViewLayout from 'components/ViewLayout';
import ControlPanel from '../Main/components/system/ControlPanel';
import CbtLayout from "../../shared/components/CbtLayout";

@inject("store")
@observer
export default class SituationAddScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        console.log(this.props.store)
        return (
            <CbtLayout
                page={this.props.store.view.page}
                {...this.props}
            />
        )
    }
}
