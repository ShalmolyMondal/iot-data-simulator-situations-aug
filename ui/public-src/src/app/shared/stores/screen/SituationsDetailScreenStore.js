export default class SituationsDetailScreenStore {
    appStore;
    consoleExpandedSize = 400;
    consoleCollapsedSize = 78;


    constructor(appStore) {
        this.appStore = appStore;
        // this.consoleSize = this.consoleCollapsedSize;
    }

    load(id) {
        this.appStore.situationsStore.getAll();
        this.appStore.SituationDetailStore.getById(id);
    }

    delete(id) {
        this.appStore.SituationDetailStore.delete(id);
    }
}