import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizelChatBotComponent } from './components/pizel-chat-bot/pizel-chat-bot.component';

const routes: Routes = [
  {path:'',component:PizelChatBotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
