module.exports = [
  // if it says it's a webview, let's go with that
  'WebView',
  // iOS webview will be the same as safari but missing "Safari"
  '(iPhone|iPod|iPad)(?!.*Safari)',
  // https://developer.chrome.com/docs/multidevice/user-agent/#webview_user_agent
  'Android.*Version/[0-9]\.[0-9]',
  // Android Lollipop and Above: webview will be the same as native but it will contain "wv"
  'Android.*wv',
  // old chrome android webview agent
  'Linux; U; Android'
]
