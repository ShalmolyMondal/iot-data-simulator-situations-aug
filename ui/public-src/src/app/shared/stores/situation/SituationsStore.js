import { observable, computed, action } from "mobx";
import { fromPromise } from 'mobx-utils';

import DeviceEntry from 'models/device/DeviceEntry';

export default class SituationStore {
    appStore;
    @observable.ref items;
    @observable nameFilter = "";

    constructor(appStore) {
        this.appStore = appStore;
    }

    getAll() {
        console.log('...loading situation');
        return null;
        return this.appStore.transportLayer.get('/api/devices')
            .then(({ data = [] }) => {
                console.log('devices loaded: ', data);
                this.items = data.map((params) => {
                    return new DeviceEntry(params);
                });
            });
    }
}   