import { Router } from 'director/build/director';

export function createRouter(store) {
    let { view } = store;
    const router = Router({
        "/": view.openSessionsPage,
        "/sessions": view.openSessionsPage,
        "/definitions": view.openDefinitionsPage,
        "/devices": view.openDevicesPage,
        "/systems": view.openSystemsPage,
        "/add-situation": view.openSituationsPage,
        "/situation-detail": view.openSituationsPage,
        "/manage-situation": view.openSituationsPage,
        "/run-situation": view.openSituationsPage,
        "/situations": view.openSituationsPage
        

    })
    router.configure({
        notfound: () => store.view.openSessionsPage(),
        html5history: true
    });
    router.init()
}