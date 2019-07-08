This package provides functions to send pageview information to the google analytics tracking id currently installed on the site.

Unlike some of the other scripts that require you to hard code the google analytics tracking ID, it will auto detect the Google Analytics Tracking ID, so it could be installed either via Google Tag Manager ( gtag ) or Just directly via the Google Analytics script.

```javascript

import MacsSeoModule from "macs-seo-module"

//Call this method on initial page load AND when the route is changed
MacsSeoModule.trackPageView();

```