// Check if running in Chrome extension context
const isExtension = typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getURL;

export const injectMicrophonePermissionIframe = () => {
  // Only inject the iframe if we're in a Chrome extension context
  if (isExtension) {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("hidden", "hidden");
    iframe.setAttribute("id", "permissionsIFrame");
    iframe.setAttribute("allow", "microphone");
    iframe.src = chrome.runtime.getURL("/src/pages/permission/index.html");
    document.body.appendChild(iframe);
  }
};

// Only run extension-specific code if we're in a Chrome extension context
if (isExtension) {
  // Inject the iframe when the content script runs
  injectMicrophonePermissionIframe();

  // Listen for messages from the iframe
  window.addEventListener('message', (event) => {
    if (event.data.type === 'MICROPHONE_PERMISSION_GRANTED') {
      console.log('Microphone permission granted');
      // You can add any additional logic here when permission is granted
    }
  });
}
