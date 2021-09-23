import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import glamorous from "glamorous";
import { css } from 'glamor';

import ViewLayout from 'components/ViewLayout';
import ControlPanel from '../Main/components/system/ControlPanel';
import CbtLayout from "../../shared/components/CbtLayout";

export default class SituationScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <CbtLayout
                controlPanel={<ControlPanel />}
            />
        )
    }
}
