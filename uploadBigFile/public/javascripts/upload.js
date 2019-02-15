var files = []
self.onmessage = function (e) {
  console.log(e.data.files)
  files = e.data.files
}
function upload (blobFile) {
  var xhr = new XMLHttpRequest()
  xhr.open('post', '/upload', false)
  xhr.onload = function () {

  }
  xhr.send(blobFile)
}
function process () {

}