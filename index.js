module.exports.trackPageView = function() {

	setTimeout(function () {

	  if (typeof ga == 'undefined') {
		console.log("Google Analytics Not installed! No PageViews will be tracked!");
		return;
	  }

	  var trackingId = "";

	  ga(function () {
		ga.getAll().forEach(function (tracker) {
		  trackingId = tracker.get("trackingId");
		});
		if (trackingId == "") {
		  console.log("Error: Unable to get Google Analytics Tracking ID");
		  return;
		}

		console.log("Found Google Analytics Tracking ID ( " + trackingId + " )!");

		if (typeof gtag != 'undefined') {

		  console.log("Found gtag");

		  gtag('config', trackingId, {
			'page_title': document.title,
			'page_path': document.location.pathname
		  });

		  console.log("Sent PageView for - " + document.location.pathname);

		}
		else if (typeof ga != 'undefined') {
		  console.log("No 'gtag' found, falling back to 'ga'");

		  ga('create', trackingId, 'auto');
		  ga('set', 'page', location.pathname);
		  ga('send', 'pageview');

		  //ga('send', 'pageview', location.pathname);

		  console.log("Sent PageView for - " + document.location.pathname);
		}
		else {
		  console.log("Error tracking no ga or gtag were found, No PageViews will be tracked!");
		}
	  });

	}, 1000);
  }