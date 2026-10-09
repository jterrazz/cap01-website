/** Resolve an explicit web destination without exposing a development URL in production. */
export function appLink(development: boolean, configured: string): null | string {
    if (development) {
        return 'http://localhost:4320';
    }
    const url = URL.parse(configured);
    if (
        url?.protocol !== 'https:' ||
        url.username ||
        url.password ||
        url.hostname === 'localhost' ||
        url.hostname === '127.0.0.1'
    ) {
        return null;
    }
    return url.href;
}
