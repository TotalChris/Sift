chrome.app.runtime.onLaunched.addListener(function() {
  //Add some onboarding checks here. Flag list? Use IFs
  chrome.app.window.create('siftpref.htm', {
    'outerBounds': {
      'width': 400,
      'height': 500
    },
    'frame': {
      'color': '#232323',
    }
  });
});
