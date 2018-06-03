import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RiddlesComponent } from './riddles/riddles.component';
import { SolutionRiddleComponent } from './riddles/solution-riddle/solution-riddle.component';
import { CrosswordRiddleComponent } from './riddles/crossword-riddle/crossword-riddle.component';
import { HexRiddleComponent } from './riddles/hex-riddle/hex-riddle.component';
import { NumbersRiddleComponent } from './riddles/numbers-riddle/numbers-riddle.component';
import { PoeticRiddleComponent } from './riddles/poetic-riddle/poetic-riddle.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    RiddlesComponent,
    SolutionRiddleComponent,
    CrosswordRiddleComponent,
    HexRiddleComponent,
    NumbersRiddleComponent,
    PoeticRiddleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
