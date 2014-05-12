
var ua = navigator.userAgent

// modernizr's crazy shit
var supported

if ((ua.indexOf('Android 2.') !== -1 ||
    (ua.indexOf('Android 4.0') !== -1)) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1) {
  supported = false
} else {
  supported = window.history && 'pushState' in window.history
}

document.documentElement.className += ' ' + (supported ? '' : 'no-') + 'history'

export default supported
