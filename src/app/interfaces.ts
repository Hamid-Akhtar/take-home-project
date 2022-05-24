export interface Commit {
    author: null | string;
    comments_url: string;
    commit: any;
    committer: null | string;
    html_url: string;
    node_id: string;
    parents: any;
    sha: string;
    url: string;
  }
  
export interface Branch {
    commit: {
        sha: string,
        url: string
    };
    name: string;
    protected: boolean;
}