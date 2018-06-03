import { RouterModule, Routes } from '@angular/router';
import { CrosswordRiddleComponent } from './riddles/crossword-riddle/crossword-riddle.component';
import { HexRiddleComponent } from './riddles/hex-riddle/hex-riddle.component';
import { NumbersRiddleComponent } from './riddles/numbers-riddle/numbers-riddle.component';
import { PoeticRiddleComponent } from './riddles/poetic-riddle/poetic-riddle.component';
import { SolutionRiddleComponent } from './riddles/solution-riddle/solution-riddle.component';
import { RiddlesComponent } from './riddles/riddles.component';

const APP_ROUTES: Routes = [
    {path: '', component: RiddlesComponent},
    {path: 'Keiner', component: CrosswordRiddleComponent},
    {path: 'Liebe', component: HexRiddleComponent},
    {path: 'Start', component: NumbersRiddleComponent},
    {path: '16', component: PoeticRiddleComponent},
    {path: 'Lebensfroh', component: SolutionRiddleComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
