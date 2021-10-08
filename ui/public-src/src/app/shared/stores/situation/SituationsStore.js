import { observable, computed, action } from "mobx";
import { fromPromise } from 'mobx-utils';

import DeviceEntry from 'models/device/DeviceEntry';
import API from "../../api/axiosApiConfig";

export default class SituationStore {
    appStore;
    @observable.ref items;
    @observable nameFilter = "";

    constructor(appStore) {
        this.appStore = appStore;
    }

    getAll() {
        console.log('...loading situation');
        API.get('/situation/all').then(res => {
            console.log('Situations loaded:') 
            console.log(res.data);
        })
        // return this.appStore.transportLayer.get('/api_v2/situation/all')
        //     .then(({ data = [] }) => {
        //         console.log('devices loaded: ', data);
        //         this.items = data.map((params) => {
        //             return new DeviceEntry(params);
        //         });
        //     });
    }
}   