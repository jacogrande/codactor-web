// src/userStore.ts
import { writable } from 'svelte/store';
import { setUserName, getUserName, removeUserName } from './session_manager';

const userName = writable(getUserName());

export const user = {
	subscribe: userName.subscribe,

	setName: (name: string, expiresInDays: number = 7) => {
		setUserName(name, expiresInDays);
		userName.set(name);
	},

	removeName: () => {
		removeUserName();
		userName.set(null);
	}
};
