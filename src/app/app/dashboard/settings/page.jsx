// `app/dashboard/page.js` is the UI for the `/dashboard` URL
export default function Page() {
    // sleep for 5 seconds synchronously
    function sleep(ms) {
        const start = Date.now();
        while (Date.now() < start + ms);
    }

    sleep(5000);

    return <h1>Hello, Settings Page!</h1>
}