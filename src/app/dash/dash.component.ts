import { Component } from "@angular/core";
import { MENU_ITEMS } from "./dash-menu";

@Component({
    selector: 'ngx-dash',
    template: `
    <ngx-sample-layout>
        <nb-menu [items]='menu'></nb-menu>
        <router-outlet></router-outlet>
    </ngx-sample-layout>
`
})
export class DashComponent {
    menu = MENU_ITEMS;
}