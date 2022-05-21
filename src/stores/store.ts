import type { AnyNsRecord } from 'dns';
import { readable, writable, get } from 'svelte/store';

export const array = writable<any | []>(["Backend","Frontend"]);
export const cont = writable(0);

export const contReadable = readable(null, function start(set) {
	const interval = setInterval(() => {
        const length = get(array).length
        let c = get(cont)
        // console.log(length)
        // console.log(c)
        if(c >= length-1 ) cont.set(0)
        else cont.set(c+1)
		set(get(cont));
	}, 2500);

	return function stop() {
		clearInterval(interval);
	};
});
