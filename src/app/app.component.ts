import { Component } from '@angular/core';
import { GitHistoryService } from './git-history.service';
import { Branch, Commit } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'take-home-project';
  commits : Commit[] = [];
  // This will be helpful when we want to implement pagination
  last_sha : string = "";
  constructor(private gitHistory: GitHistoryService){ }
  ngOnInit(){
    this.gitHistory.fetchAllBranches()
    .subscribe((branches: Branch[])=>{
      branches.forEach((br: Branch)=>{
        this.gitHistory.fetchAllCommits(br.commit.sha)
          .subscribe((v: Commit[])=> {
            this.commits = v;
            this.last_sha = v[v.length - 1].sha;
          });
      });
    });
  }

  fetchNextCommits(){
    this.gitHistory.fetchAllCommits(this.last_sha)
    .subscribe((v: any)=> {
      this.commits = v;
      this.last_sha = v[v.length - 1].sha;
    });
  }
}
