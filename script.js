var input = document.getElementById('secretmsg');
var e = document.getElementById('e')
var d = document.getElementById('d')
function encode(){
    var encoded = btoa(input.value)
    e.style.display = 'block';
    e.innerHTML = `Message Encoded: ${encoded}`
    d.style.display = 'none';
    input.value = ''
}
function decode(){
    var decoded = atob(input.value)
    d.style.display = 'block';
    d.innerHTML = `Message Decoded: ${decoded}`
    e.style.display = 'none';
    input.value = ''
}