export const LOCALES = ['en', 'de'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const getLocaleFromPath = (pathname: string): Locale => {
	const segment = pathname.split('/').filter(Boolean)[0];
	return segment === 'de' ? 'de' : 'en';
};

export const getAlternateLocale = (locale: Locale): Locale => (locale === 'en' ? 'de' : 'en');

export const stripLocale = (pathname: string): string => {
	const parts = pathname.split('/').filter(Boolean);
	if (parts[0] === 'en' || parts[0] === 'de') {
		parts.shift();
	}
	const stripped = `/${parts.join('/')}`;
	return stripped === '/' ? '/' : stripped.replace(/\/$/, '');
};

export const withLocale = (pathname: string, locale: Locale): string => {
	const base = stripLocale(pathname);
	const hasTrailingSlash = pathname.endsWith('/');
	let localized = base === '/' ? `/${locale}` : `/${locale}${base}`;
	if (hasTrailingSlash && !localized.endsWith('/')) {
		localized += '/';
	}
	return localized;
};
