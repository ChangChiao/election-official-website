import { derived, writable } from 'svelte/store';

export const globalStore = writable({
	activeArea: ''
});

export const activeArea = derived(globalStore, (state) => {
	return state.activeArea;
});

export const setActiveArea = (payload: string) => {
	globalStore.set({
		activeArea: payload
	});
};
