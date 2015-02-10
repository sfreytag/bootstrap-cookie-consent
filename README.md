# bootstrap-cookie-consent

A simple widget to handle implicit cookie consent in a bootstrap-styled widget.

I needed to do implicit cookie consent for a boostrap-based web site, and the 
existing widgets I found were limited by:

- complexity, offering options for explicit consent and more
- hosted JS, some even including trackers of their own
- styling; plenty with jQueryUI but no Boostrap-friendly options

This widget takes some handy functions I found at http://www.creare.co.uk/js-eu-cookie-law-banner
and quickly rebuilds them to work with bootstrap-friendly HTML. The result isn't
packaged as professionally as a bootstrap widget should be, so that's the
biggest TODO. A widget using the boostrap data-api would be great.

Meantime, I thought I'd release it here in case anyone uses it, in which case that
will motivate me to make it better.

Demo of this widget in action: http://www.cycletraining.co.uk
