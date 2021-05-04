const worker = new Worker( getURL() );
worker.onmessage = (evt) => console.log(evt.data);


function getURL() {
  const txt = document.getElementById( 'source' ).textContent;
  return URL.createObjectURL( new Blob( [ txt ] ) );
}
