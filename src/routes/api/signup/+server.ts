import { API_URL } from '$lib/config/api_config';
import { json } from '@sveltejs/kit';
import axios from 'axios';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { firstName, lastName, email, password } = await request.json();
		const response = await axios.post(`${API_URL}/users/new`, {
			firstName,
			lastName,
			email,
			password
		});

		if (response.status === 200) {
			return json({ error: null });
		}
		const errorText = await response.data();
		console.log(errorText);
		return json({ error: errorText });
	} catch (err: any) {
		if (err.response && err.response.data) {
			return json({ error: err.response.data.split(':')[1] || 'Oops... something went wrong' });
		}
		return json({ error: (err as Error).message });
	}
};
