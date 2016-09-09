import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use.basicConfiguration();
  aurelia.start().then(() => aurelia.setRoot());
}

/*
When working with TypeScript, in this simple setup, you may see some "squigglies" in your code editor.
This results from the fact that this simple setup isn't configured in a way that the code editor can find
the type definition files. It's nothing to worry about and everything will work correctly. In the next
tutorial, when we set up a production-ready project, this issue will go away. If you have experience with
this before, you can use Typings to install them yourself at any point.
*/
