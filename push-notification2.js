const public_vapid_key = "BJfiHyy_qFOmXwlk4ntA7BYLWFSWYDC-5Yv6lD6Di7TwmNwpIcJbtWlyIRwIHIRDgtRtXdh2jtrMEgxaCzVUP9c";

//check for service worker

if('serviceWorker' in navigator){
    send().catch(err => console.log(err));
}

async function send() {
    const register = await navigator.serviceWorker.register('./worker.js',{
        scope: '/'
    });

const subscription = await register.pushManager.subscribe({
    userVisibleOnly:true,
    applicationServerKey:urlBase64ToUint8Array(public_vapid_key)
});
  
console.log('Push Registered...')
