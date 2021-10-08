import { observable, computed, action } from "mobx";
import { fromPromise } from 'mobx-utils';
import axios from "axios";
import DeviceEntry from 'models/device/DeviceEntry';

const api = axios.create({
    baseURL: 'http://localhost:8080/api_v2/'
})
export default class SituationStore {
    appStore;
    @observable.ref items;
    @observable nameFilter = "";

    constructor(appStore) {
        this.appStore = appStore;
    }

    getAll() {
        console.log('...loading situation');
        api.get('/situation/all').then(res => {
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