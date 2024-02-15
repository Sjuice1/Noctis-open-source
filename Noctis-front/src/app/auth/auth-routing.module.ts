import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";

export const routes : Routes = [
    {path : '', component : AuthComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AuthRoutinModule{
  
  isLogin : boolean = false;

}