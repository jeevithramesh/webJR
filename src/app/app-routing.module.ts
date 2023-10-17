import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import loadRemoteModule from '../../module-federation';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: async () => import('./app.module').then((u) => u.AppModule),
  },
  {
    path: 'work-experience',
    loadChildren: async () => {
      return loadRemoteModule('mfe_1/work-experience.module').then(
        (remoteModule) => {
          console.log(remoteModule);
          return remoteModule.WorkExperienceModule;
        }
      );
    },
  },
  {
    path: 'about-me',
    loadChildren: async () => {
      return loadRemoteModule('mfe_2/about-me.module').then((remoteModule) => {
        console.log(remoteModule);
        return remoteModule.AboutMeModule;
      });
    },
  },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
