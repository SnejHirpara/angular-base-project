import { Component } from "@angular/core";
import { Constants } from "../constants";

@Component({
    selector: 'app-base',
    template: ''
})
export class BaseComponent {
    splashScreenTimeout = 200;
    constants = Constants;
}