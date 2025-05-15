import dynamic from 'next/dynamic';

export const components = {
	all_services: dynamic(() => import('./ServiceItem')),
	start_screen: dynamic(() => import('./StartScreen')),
};
