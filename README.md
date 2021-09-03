
# To Merge Separate Work to a Single Repo
### If each team member has worked separately and you need to combine your work to complete the project, follow these steps for seamless check-in.

One-at-a-time, each team member should do the following :
1) Clone the repo from GitHub (as described previously)

```
$ git clone paste-copied-url-here
```

2) Create and check out a new branch (branch can be your name)
```
$ git checkout -b your_branch_name
```

3) Copy the files you want to upload into the relevant folders (README into the main folder, notebooks into code, images into images, etc)
4) Add the files to git. To be safe, add each individually instead of ‘add -a’ to ensure you are only adding the files you want to be included in the final check-in.
```
$ git add your_file_name
```

4) Commit the set of files to git
```
$ git commit
```

5) Push your branch to Github (push your branch name — NOT master)
```
$ git push -u origin your_branch_name
```

6) Go to GitHub, find your branch, issue a Pull Request

7) Reviewers review and approve the request

8) Merge the code with the main branch

9) Repeat for the next person



### Contributing

0. Fork it 
 ``` (https://github.com/yourname/yourproject/fork) ```
2. Create your feature branch 
``` (git checkout -b feature/fooBar) ```
2. Commit your changes 
```(git commit -am 'Add some fooBar') ```
3. Push to the branch 
 ``` (git push origin feature/fooBar) ```
4. Create a new Pull Request

