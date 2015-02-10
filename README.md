# bootstrap-cookie-consent

This is a simple widget to handle implicit cookie consent in a Bootstrap-styled widget.

I needed to do implicit cookie consent for a Boostrap-based web site, and the 
existing widgets I found were limited by:

- complexity, offering options for explicit consent and more
- hosted JS, some even including trackers of their own
- styling, plenty were done with with jQueryUI but I found no Boostrap-friendly options

This widget takes some handy JS functions I found at http://www.creare.co.uk/js-eu-cookie-law-banner
and quickly rebuilds them to work with Bootstrap-friendly HTML. 

The result isn't packaged as professionally as a bootstrap widget should be, so that's the
biggest TODO. Rebuilding this as a widget using the boostrap data-api would be great. In 
the meantime I thought I'd release it here in case anyone uses it, which would
motivate me to make it better.

A demo of this widget in action can be found here: http://www.cycletraining.co.uk

To use it, simply add the JS to your website and edit the properties within the file.
You can tweak the HTML to alter the widget position.
