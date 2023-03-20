// sessionManager.ts
import Cookies from 'js-cookie';

// Set the name of the cookie used to store the user's name
const USER_NAME_COOKIE = 'user_name';

// Store the user's name in a cookie
export function setUserName(name: string, expiresInDays: number = 14): void {
	Cookies.set(USER_NAME_COOKIE, name, { expires: expiresInDays });
}

// Retrieve the user's name from the cookie or return null if it doesn't exist
export function getUserName(): string | null {
	const name = Cookies.get(USER_NAME_COOKIE);
	return name || null;
}

// Remove the user's name from the cookie when they log out
export function removeUserName(): void {
	Cookies.remove(USER_NAME_COOKIE);
}
