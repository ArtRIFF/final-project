export const sendRequest = async (url) => {
	const response = await fetch(url);
	const result = await response.json();
	return result;
}