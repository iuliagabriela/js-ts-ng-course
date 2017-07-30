/* Copyright (C) 2017 Centroida & ITCE - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Prometheus courses license.
 *
 * You should have received a copy of the Prometheus courses
 * license.If not, please write to: info@itce.com
 * or to prometheus@itce.com
 */

import { Component }     from '@angular/core'

@Component({
    selector: 'contacts',
    template: `
        <router-outlet name="ContactsList"></router-outlet>
        
        <a id="add" class="text-danger" [routerLink]="['/contacts', -1]"><span class="glyphicon glyphicon-plus"></span>Add</a>
        
        <router-outlet></router-outlet>
    `
})
export class ContactsComponent {}