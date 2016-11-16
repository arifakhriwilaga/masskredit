import { Component } 	from '@angular/core';

export class Menu {
	id: number;
	name: string;
}

export class Button {
	id: number;
	name: string;
}
const MENUS: Menu[] = [
	{ id: 1, name: 'Pinjaman' }, 
	{ id: 2, name: 'FAQ' }, 
	{ id: 3, name: 'Tentang Kami' }, 
	{ id: 4, name: 'Hubungi Kami' }, 
	{ id: 5, name: 'Karir' }
];
const BUTTONS: Button[] = [
	{ id:1, name: 'Login' }, 
	{ id:2, name: 'Daftar' } 
];

@Component({
	moduleId: module.id,
	selector: 'header',
	templateUrl: 'header.component.html'
})

export class HeaderComponent { 
	menus = MENUS;
	buttons = BUTTONS;
}