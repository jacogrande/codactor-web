import { API_URL } from '$lib/config/api_config';
import { json } from '@sveltejs/kit';
import axios from 'axios';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { email, password } = await request.json();
		const response = await axios.post(`${API_URL}/users/login`, {
			email,
			password
		});

		if (response.status === 200) {
			return json({ error: null, userData: response.data });
		}
		const errorText = response.data;
		console.log(errorText);
		return json({ error: errorText });
	} catch (err: any) {
		if (err.response && err.response.data) {
			return json({ error: err.response.data });
		}
		return json({ error: (err as Error).message });
	}
};
