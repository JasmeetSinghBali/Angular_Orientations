> Angular dev. facts

- [x] **class based components system just like react class based components**
- [x] **the main/parent component is app component**
- [x] **whatever child components we make will be embeded inside of the app component**
- [x] **just like react main root tag their is a root element in angular where everything is loaded client side via javascript bundle that is formed after the app build, this root app could be found inside index.html as <app-root>**
- [x] **to understand how a regular angular component looks like refer app.component.ts**
- [x] **To generate a header component inside a seperate components dir**

                ng generate component components/header

- [x] **To load something when the components mount refer the ngonInit lifecycle method inside header.component.ts**
- [x] **a constructor method that runs whenever the component is initialized**
- [x] **since header is a child component it will be embedded inside of the app parent component**

                    # * parent, - child componenet
                    *appComponent
                     - headerComponent

> **we can use the selector as tags to embed the child components inside of parent Component**

                    # inside app.component.html
                    <app-header><app-header>

> **make sure to add option in tsconfig.json to prevent the unwanted initialization errros**

                    "strictPropertyInitialization": false

> to add event to buttons we do refer button.component.html

                (click)="onclick"

> **Important To make sure that the button component event is reusable use Output event emitter that sets the event dynamically so that this button can be reused a/c to that purpose/event refer button.component.ts & header.component.html,header.component.ts**
