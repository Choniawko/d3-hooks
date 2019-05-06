import { ajax } from "rxjs/ajax"

const getBaseHeaders = () => ({
	"Content-Type": "application/json",
})

const get = (url, headers) => ajax.get(url, { ...getBaseHeaders(), ...headers })
const post = (url, body, headers) =>
	ajax.post(url, body, { ...getBaseHeaders(), ...headers })

const put = (url, body, headers) =>
	ajax.put(url, body, { ...getBaseHeaders(), ...headers })

const patch = (url, body, headers) =>
	ajax.patch(url, body, { ...getBaseHeaders(), ...headers })
const remove = (url, headers) =>
	ajax.delete(url, { ...getBaseHeaders(), ...headers })

export default {
	get,
	post,
	put,
	patch,
	delete: remove,
}
