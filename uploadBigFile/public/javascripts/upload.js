var files = []
self.onmessage = function (e) {
  console.log(e.data.files)
  files = e.data.files
  process(files)
}
function upload (blobFile) {
  var xhr = new XMLHttpRequest()
  xhr.open('post', '/upload', false)
  xhr.onload = function () {

  }
  xhr.send(blobFile)
}
function process (fileList) {
  for (let file of fileList) {
    let fileSplit
    let start = 0
    let end = 1024 * 50
    const step = 1024 * 50
    while (end < file.size) {
      fileSplit = file.slice(start, end)
      const sendObj = {
        fileName: file.fileName,
        fileContent: fileSplit
      }
      upload(fileSplit)
      start = end
      end += step
    }
  }
}