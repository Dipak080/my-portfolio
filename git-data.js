/* ============================================================
   Git command reference — the commands you actually use,
   grouped by task, each with a plain-English explanation of
   what it really does. Rendered by git.js.
   Each item: { cat, cmd, desc }
   ============================================================ */
window.GIT_COMMANDS = [

  /* ===== Configuration & Setup ===== */
  { cat:"Setup", cmd:`git config --global user.name "Dipak Barman"`, desc:"Sets the author name attached to every commit you make on this machine." },
  { cat:"Setup", cmd:`git config --global user.email "you@example.com"`, desc:"Sets the email recorded on your commits (GitHub uses it to link commits to your account)." },
  { cat:"Setup", cmd:`git config --global init.defaultBranch main`, desc:"Makes new repositories start with a branch called 'main' instead of 'master'." },
  { cat:"Setup", cmd:`git config --list`, desc:"Prints every Git setting currently in effect (global + local) so you can verify your config." },
  { cat:"Setup", cmd:`git config --global core.editor "code --wait"`, desc:"Tells Git to open VS Code for commit messages and waits until you close the tab." },
  { cat:"Setup", cmd:`git config --global alias.co checkout`, desc:"Creates a shortcut so 'git co' runs 'git checkout'. Aliases save typing on common commands." },
  { cat:"Setup", cmd:`git --version`, desc:"Shows the installed Git version — useful when a feature depends on a newer release." },

  /* ===== Starting a Repository ===== */
  { cat:"Start a Repo", cmd:`git init`, desc:"Turns the current folder into a Git repository by creating a hidden .git directory that tracks history." },
  { cat:"Start a Repo", cmd:`git clone https://github.com/user/repo.git`, desc:"Downloads a full copy of a remote repository, including all branches and history, into a new folder." },
  { cat:"Start a Repo", cmd:`git clone <url> myfolder`, desc:"Clones a repository into a folder you name yourself instead of the default repo name." },
  { cat:"Start a Repo", cmd:`git clone --depth 1 <url>`, desc:"Shallow clone — grabs only the latest commit, not the full history. Much faster for large repos." },

  /* ===== Basic Snapshotting ===== */
  { cat:"Snapshotting", cmd:`git status`, desc:"Shows what's changed: which files are staged, modified but unstaged, or untracked. Your most-used command." },
  { cat:"Snapshotting", cmd:`git add index.html`, desc:"Stages one specific file — marks its current changes to be included in the next commit." },
  { cat:"Snapshotting", cmd:`git add .`, desc:"Stages all new and modified files in the current directory and below (does not stage deletions in older Git)." },
  { cat:"Snapshotting", cmd:`git add -A`, desc:"Stages everything across the whole repo — new files, edits, and deletions." },
  { cat:"Snapshotting", cmd:`git add -p`, desc:"Interactively walks through each change ('hunk') so you can stage parts of a file and leave the rest." },
  { cat:"Snapshotting", cmd:`git commit -m "Add login form"`, desc:"Permanently saves the staged changes as a new commit with the given message." },
  { cat:"Snapshotting", cmd:`git commit -am "Fix typo"`, desc:"Stages all already-tracked files and commits them in one step (skips untracked files)." },
  { cat:"Snapshotting", cmd:`git commit --amend`, desc:"Replaces the last commit — use it to fix the message or add forgotten changes. Rewrites history, so avoid after pushing." },
  { cat:"Snapshotting", cmd:`git rm oldfile.txt`, desc:"Deletes a file from disk and stages the removal so the next commit records it." },
  { cat:"Snapshotting", cmd:`git rm --cached secret.env`, desc:"Stops tracking a file but keeps it on disk — perfect for files you accidentally committed and want to gitignore." },
  { cat:"Snapshotting", cmd:`git mv old.txt new.txt`, desc:"Renames or moves a file and stages the change in one step." },

  /* ===== Branching & Merging ===== */
  { cat:"Branching", cmd:`git branch`, desc:"Lists all local branches; the current one is marked with an asterisk." },
  { cat:"Branching", cmd:`git branch feature-login`, desc:"Creates a new branch from the current commit but does NOT switch to it." },
  { cat:"Branching", cmd:`git checkout -b feature-login`, desc:"Creates a new branch AND switches to it immediately — the classic one-liner to start work." },
  { cat:"Branching", cmd:`git switch feature-login`, desc:"Switches to an existing branch. Newer, clearer alternative to 'git checkout'." },
  { cat:"Branching", cmd:`git switch -c feature-login`, desc:"Creates and switches to a new branch (the modern equivalent of 'checkout -b')." },
  { cat:"Branching", cmd:`git branch -m new-name`, desc:"Renames the branch you're currently on." },
  { cat:"Branching", cmd:`git branch -d feature-login`, desc:"Deletes a branch — but only if it's already been merged, protecting you from losing work." },
  { cat:"Branching", cmd:`git branch -D feature-login`, desc:"Force-deletes a branch even if it isn't merged. Use with care — unmerged commits can be lost." },
  { cat:"Branching", cmd:`git merge feature-login`, desc:"Merges the named branch into your current branch, combining their histories." },
  { cat:"Branching", cmd:`git merge --no-ff feature-login`, desc:"Merges but always creates a merge commit, preserving the fact that a branch existed." },
  { cat:"Branching", cmd:`git merge --abort`, desc:"Cancels an in-progress merge that hit conflicts and returns to the state before you started." },
  { cat:"Branching", cmd:`git rebase main`, desc:"Re-applies your branch's commits on top of the latest 'main', producing a clean, linear history." },
  { cat:"Branching", cmd:`git rebase -i HEAD~3`, desc:"Interactive rebase — lets you squash, reorder, edit, or drop the last 3 commits before sharing them." },
  { cat:"Branching", cmd:`git cherry-pick a1b2c3d`, desc:"Copies a single commit from another branch onto your current branch by its hash." },

  /* ===== Remote Repositories ===== */
  { cat:"Remotes", cmd:`git remote -v`, desc:"Lists the remote repositories you're connected to and their fetch/push URLs." },
  { cat:"Remotes", cmd:`git remote add origin <url>`, desc:"Links your local repo to a remote (conventionally named 'origin') so you can push and pull." },
  { cat:"Remotes", cmd:`git remote set-url origin <url>`, desc:"Changes the URL of an existing remote — e.g. switching from HTTPS to SSH." },
  { cat:"Remotes", cmd:`git remote remove origin`, desc:"Disconnects a remote from your local repository." },
  { cat:"Remotes", cmd:`git push`, desc:"Uploads your committed changes to the matching branch on the remote." },
  { cat:"Remotes", cmd:`git push -u origin main`, desc:"Pushes 'main' and sets it as the upstream, so future 'git push'/'git pull' need no arguments." },
  { cat:"Remotes", cmd:`git push --force-with-lease`, desc:"A safer force-push: overwrites remote history only if no one else has pushed since you last fetched." },
  { cat:"Remotes", cmd:`git push origin --delete old-branch`, desc:"Deletes a branch on the remote." },
  { cat:"Remotes", cmd:`git pull`, desc:"Fetches remote changes and merges them into your current branch in one step." },
  { cat:"Remotes", cmd:`git pull --rebase`, desc:"Fetches remote changes and replays your local commits on top, avoiding a noisy merge commit." },
  { cat:"Remotes", cmd:`git fetch`, desc:"Downloads new commits and branches from the remote but does NOT change your working files." },
  { cat:"Remotes", cmd:`git fetch --prune`, desc:"Fetches updates and removes remote-tracking branches that no longer exist on the server." },

  /* ===== Inspecting & Comparing ===== */
  { cat:"Inspect", cmd:`git log`, desc:"Shows the full commit history with author, date, and message for the current branch." },
  { cat:"Inspect", cmd:`git log --oneline`, desc:"Condenses each commit to a single line (short hash + message) for a quick overview." },
  { cat:"Inspect", cmd:`git log --oneline --graph --all`, desc:"Draws an ASCII graph of all branches and merges — great for visualizing history." },
  { cat:"Inspect", cmd:`git log -p`, desc:"Shows the history along with the exact line-by-line diff introduced by each commit." },
  { cat:"Inspect", cmd:`git log --author="Dipak"`, desc:"Filters the history to commits made by a specific author." },
  { cat:"Inspect", cmd:`git show a1b2c3d`, desc:"Displays the full details and diff of one specific commit." },
  { cat:"Inspect", cmd:`git diff`, desc:"Shows changes in your working directory that haven't been staged yet." },
  { cat:"Inspect", cmd:`git diff --staged`, desc:"Shows changes that ARE staged — i.e. exactly what will go into your next commit." },
  { cat:"Inspect", cmd:`git diff main feature`, desc:"Compares two branches and shows what differs between them." },
  { cat:"Inspect", cmd:`git blame index.html`, desc:"Annotates each line of a file with the commit and author that last changed it." },
  { cat:"Inspect", cmd:`git shortlog -sn`, desc:"Summarizes the number of commits per contributor, sorted by count." },

  /* ===== Undoing Changes ===== */
  { cat:"Undo", cmd:`git restore index.html`, desc:"Discards unstaged changes in a file, reverting it to the last committed version. (Cannot be undone.)" },
  { cat:"Undo", cmd:`git restore --staged index.html`, desc:"Unstages a file — removes it from the next commit but keeps your edits intact." },
  { cat:"Undo", cmd:`git reset --soft HEAD~1`, desc:"Undoes the last commit but keeps all its changes staged, ready to re-commit." },
  { cat:"Undo", cmd:`git reset --mixed HEAD~1`, desc:"Undoes the last commit and unstages its changes, but keeps them in your working files (the default reset)." },
  { cat:"Undo", cmd:`git reset --hard HEAD~1`, desc:"Undoes the last commit AND permanently deletes its changes. Powerful and destructive — double-check first." },
  { cat:"Undo", cmd:`git revert a1b2c3d`, desc:"Creates a NEW commit that undoes a previous one. The safe way to undo on shared/pushed history." },
  { cat:"Undo", cmd:`git clean -fd`, desc:"Deletes all untracked files and folders. Irreversible — run 'git clean -nd' first to preview." },
  { cat:"Undo", cmd:`git checkout -- index.html`, desc:"Older syntax to discard local changes in a file (replaced by 'git restore')." },

  /* ===== Stashing ===== */
  { cat:"Stash", cmd:`git stash`, desc:"Shelves your uncommitted changes and gives you a clean working directory to switch tasks." },
  { cat:"Stash", cmd:`git stash -u`, desc:"Stashes your changes including untracked files." },
  { cat:"Stash", cmd:`git stash list`, desc:"Shows all the stashes you've saved, each with an index like stash@{0}." },
  { cat:"Stash", cmd:`git stash pop`, desc:"Re-applies your most recent stash and removes it from the stash list." },
  { cat:"Stash", cmd:`git stash apply`, desc:"Re-applies a stash but keeps it in the list, so you can apply it elsewhere too." },
  { cat:"Stash", cmd:`git stash drop`, desc:"Deletes a single stash entry you no longer need." },
  { cat:"Stash", cmd:`git stash clear`, desc:"Removes every stash at once. Cannot be undone." },

  /* ===== Tags & Releases ===== */
  { cat:"Tags", cmd:`git tag`, desc:"Lists all tags in the repository (usually version markers like v1.0.0)." },
  { cat:"Tags", cmd:`git tag v1.0.0`, desc:"Creates a lightweight tag pointing at the current commit." },
  { cat:"Tags", cmd:`git tag -a v1.0.0 -m "Release 1.0"`, desc:"Creates an annotated tag that stores a message, author, and date — preferred for releases." },
  { cat:"Tags", cmd:`git push origin v1.0.0`, desc:"Pushes a single tag to the remote (tags aren't pushed by default)." },
  { cat:"Tags", cmd:`git push --tags`, desc:"Pushes all your local tags to the remote at once." },

  /* ===== Advanced & Recovery ===== */
  { cat:"Advanced", cmd:`git reflog`, desc:"Shows everywhere HEAD has pointed recently — your safety net for recovering 'lost' commits after a bad reset." },
  { cat:"Advanced", cmd:`git bisect start`, desc:"Begins a binary search through history to pinpoint the commit that introduced a bug." },
  { cat:"Advanced", cmd:`git worktree add ../hotfix main`, desc:"Checks out another branch into a separate folder so you can work on two branches at once." },
  { cat:"Advanced", cmd:`git gc`, desc:"Runs garbage collection to compress history and clean up unneeded files, shrinking the repo." },
  { cat:"Advanced", cmd:`git archive -o site.zip HEAD`, desc:"Exports the current code as a zip file without the .git history — handy for sharing a snapshot." },
  { cat:"Advanced", cmd:`git rebase --onto main old new`, desc:"Surgically moves a range of commits onto a different base branch." },
];
