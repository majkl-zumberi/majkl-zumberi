import { writable } from 'svelte/store';

function createModalStatus(){
    const {subscribe,set,update}= writable(undefined);
    return {
		subscribe,
		close: () => update(status => status=false),
        open: ()  => update(status => status=true),
        toggle: ()=> update(status => status=!status),
		reset: () => set(undefined)
	};
}
export const modalStatus = createModalStatus();