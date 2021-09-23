import { Router } from 'director/build/director';

export function createRouter(store) {
    let { view } = store;
    const router = Router({
        "/": view.openSessionsPage,
        "/sessions": view.openSessionsPage,
        "/definitions": view.openDefinitionsPage,
        "/devices": view.openDevicesPage,
        "/systems": view.openSystemsPage,
        "/situations": view.openSituationsPage
    })
    router.configure({
        notfound: () => store.view.openSessionsPage(),
        html5history: true
    });
    router.init()
}