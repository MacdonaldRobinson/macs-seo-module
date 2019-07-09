This package provides functions to send pageview information to the google analytics tracking id currently installed on the site.

Unlike some of the other modules that require you to hard code the google analytics tracking ID, this module will auto detect the Google Analytics Tracking ID currently installed on the site either via the Google Tag Manager ( gtag ) script or  directly via the Google Analytics script.

```javascript

import MacsSeoModule from "macs-seo-module"

//Call this method on initial page load AND when the route is changed
MacsSeoModule.trackPageView();

```