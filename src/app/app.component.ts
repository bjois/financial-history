import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { GoogleDriveService } from './google/google-drive.service';
import { from, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isSignedin: boolean = true;

  revisions: any;

  private fileId: string = "18_Zpn_w8lHk25leplzTWXykjuWSZy_AhQLpbTfvVzME";
  private accessToken: string = "";

  constructor(
    private socialAuthService: SocialAuthService,
    private googleDriveService: GoogleDriveService
  ) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory(): void {
    this.socialAuthService.initState.pipe(
      switchMap(() => this.socialAuthService.getAccessToken(GoogleLoginProvider.PROVIDER_ID)),
      tap(accessToken => this.accessToken = accessToken),
      switchMap((accessToken) => this.googleDriveService.revisions(accessToken, this.fileId))
    ).subscribe((result) => {
      this.revisions = result.revisions;
      console.log(result);
    });
  }

  loadRevision(revision: { id: string }) {
    this.googleDriveService.revision(this.accessToken, this.fileId, revision.id)
      .subscribe(result => {
        console.log(result);
      });
  }
}
