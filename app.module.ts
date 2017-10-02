import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormationAppComponent } from './app.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ FormationAppComponent ],
    bootstrap: [ FormationAppComponent ]          // composant racine appeller en premier
})

export class AppModule { }