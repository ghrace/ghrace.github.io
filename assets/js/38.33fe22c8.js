(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{93:function(t,i,a){"use strict";a.r(i);var e=a(0),_=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"关联git本地和远端仓库步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联git本地和远端仓库步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 关联git本地和远端仓库步骤")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("打开git，输入mkdir newProject 新建一个文件夹。")])]),t._v(" "),a("li",[a("p",[t._v("git init 初始化本地文件夹为一个可以管理的git仓库。")])]),t._v(" "),a("li",[a("p",[t._v("关联本地仓库和远端仓库："),a("code",[t._v("git remote add origin http://${path}.git.")])])]),t._v(" "),a("li",[a("p",[t._v("把文件放入本地仓库")]),t._v(" "),a("ul",[a("li",[t._v("git status          // 列出没有被git管理或者修改但还没有未被提交的文件")]),t._v(" "),a("li",[t._v("git add .           // 将未被管理的文件添加到git")]),t._v(" "),a("li",[t._v('git commit -am "提交文件"')])])]),t._v(" "),a("li",[a("p",[t._v("把本地库推送到远端仓库")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git push -u origin master")])]),t._v(" "),a("li",[t._v("ps：当远端仓库使用Readme文件初始化项目，需要先"),a("code",[t._v("git pull origin master")]),t._v("，有固定格式时需手动编辑，按i修改，:wq退出")])])]),t._v(" "),a("li",[a("p",[t._v("切换本地开发分支并管理远端分支")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git checkout -b topic")]),t._v("      // 创建并切换到topic新分支，相当于git branch topic 和git checkout topic 组合")]),t._v(" "),a("li",[a("code",[t._v("git push origin topic:topic")]),t._v("      // 关联本地topic分支和远端topic分支 （没有将自动创建topic分支并关联）")])])])]),t._v(" "),a("h2",{attrs:{id:"git-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-常用命令","aria-hidden":"true"}},[t._v("#")]),t._v(" git 常用命令")]),t._v(" "),a("h3",{attrs:{id:"开发四部曲。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发四部曲。","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发四部曲。")]),t._v(" "),a("ol",[a("li",[t._v("git add .")]),t._v(" "),a("li",[a("code",[t._v('git commit -a "commit" / git commit -am "commit"')])]),t._v(" "),a("li",[a("code",[t._v("git pull origin master")])]),t._v(" "),a("li",[a("code",[t._v("git push origin master")])])]),t._v(" "),a("h3",{attrs:{id:"代码冲突。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码冲突。","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码冲突。")]),t._v(" "),a("ol",[a("li",[t._v("解决冲突")]),t._v(" "),a("li",[a("code",[t._v("git add .")])]),t._v(" "),a("li",[a("code",[t._v("git rebase --continue")]),t._v(" （或者再次git commit）")]),t._v(" "),a("li",[a("code",[t._v("git push origin master")])])]),t._v(" "),a("h3",{attrs:{id:"git-分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-分支管理","aria-hidden":"true"}},[t._v("#")]),t._v(" git 分支管理")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("git fetch （-p）")]),t._v("              // branch在服务器上的最新状态")]),t._v(" "),a("li",[a("code",[t._v("git branch (-a)")]),t._v("                // 查看所有branch")]),t._v(" "),a("li",[a("code",[t._v("git branch newBranch")]),t._v("    // 本地创建branch")]),t._v(" "),a("li",[a("code",[t._v("git checkout branch")]),t._v("        // 切换branch")]),t._v(" "),a("li",[a("code",[t._v("git checkout -b topic")]),t._v("     // 创建并切换到topic新分支")]),t._v(" "),a("li",[a("code",[t._v("git push origin topic:topic")]),t._v("       // 关联本地topic分支和远端topic分支")]),t._v(" "),a("li",[a("code",[t._v("git branch --set-upstream-to=origin/topic topic")]),t._v("     //设置本地topic的上游及远端分支（设置之后git pull将默认从远端topic分支可拉取代码，git push将默认推送代码到远端topic分支）")]),t._v(" "),a("li",[t._v("......")])]),t._v(" "),a("h3",{attrs:{id:"git版本管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git版本管理","aria-hidden":"true"}},[t._v("#")]),t._v(" git版本管理")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git reset --hard HEAD^")]),t._v("           // 回退上一个版本")]),t._v(" "),a("li",[a("code",[t._v("git reset --hard HEAD~3")]),t._v("           // 回退上三个版本")]),t._v(" "),a("li",[a("code",[t._v("git reset --hard 版本号")]),t._v("           // 回退指定版本")])]),t._v(" "),a("h3",{attrs:{id:"git远端版本回退"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git远端版本回退","aria-hidden":"true"}},[t._v("#")]),t._v(" git远端版本回退")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("git checkout target_branch")]),t._v("             // 切换到需要回滚的分支")]),t._v(" "),a("li",[a("code",[t._v("git pull")]),t._v("\t\t                                                    //更新代码")]),t._v(" "),a("li",[a("code",[t._v("git branch target_branch_copy")]),t._v("            //备份一下这个分支当前的情况")]),t._v(" "),a("li",[a("code",[t._v("git reset --hard target_commit_id")]),t._v("    //把target_branch本地回滚到target_commit_id")]),t._v(" "),a("li",[a("code",[t._v("git push origin :target_branch")]),t._v("             //删除远程 target_branch")]),t._v(" "),a("li",[a("code",[t._v("git push origin target_branch")]),t._v("          //用回滚后的本地分支重新建立远程分支")]),t._v(" "),a("li",[a("code",[t._v("git push origin :target_branch_copy")]),t._v("      //如果前面都成功了，删除这个备份分支")])]),t._v(" "),a("h3",{attrs:{id:"git-大小写不敏感问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-大小写不敏感问题","aria-hidden":"true"}},[t._v("#")]),t._v(" git 大小写不敏感问题")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("修改配置项")]),t._v(" "),a("ul",[a("li",[t._v("项目根目录下，ll -a")]),t._v(" "),a("li",[t._v("cd .git/ 进入.git/文件下，ll -a")]),t._v(" "),a("li",[t._v("修改config配置文件 vim config")]),t._v(" "),a("li",[t._v("ignorecase = false")]),t._v(" "),a("li",[t._v(":wq退出保存")]),t._v(" "),a("li",[t._v("修改文件名，提交。")]),t._v(" "),a("li",[t._v("ps:多人协作时不建议使用，大小写不统一时更新会报错。建议提交后再把配置项修改为true。")])])]),t._v(" "),a("li",[a("p",[t._v("重命名")]),t._v(" "),a("ul",[a("li",[t._v("git mv oldName newName")]),t._v(" "),a("li",[t._v("git status")]),t._v(" "),a("li",[t._v("可以看到rename的提示，此时正常提交即可。")])])])]),t._v(" "),a("h3",{attrs:{id:"stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stash","aria-hidden":"true"}},[t._v("#")]),t._v(" stash")]),t._v(" "),a("p",[t._v("stash 用于临时保存工作目录的改动。开发中可能会遇到代码写一半需要切分支打包的问题，如果这时候你不想 commit 的话，就可以使用该命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//暂存你的工作目录\ngit stash \n//恢复工作目录\ngit stash pop\n")])])]),a("h3",{attrs:{id:"rest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest","aria-hidden":"true"}},[t._v("#")]),t._v(" rest")]),t._v(" "),a("p",[t._v("删除刚写的 commit，重新设置了 HEAD 和它指向的 branch")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git  reset --hard HEAD^\n")])])]),a("h3",{attrs:{id:"reflog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflog","aria-hidden":"true"}},[t._v("#")]),t._v(" reflog")]),t._v(" "),a("p",[t._v("通过 git reflog 看到移动 HEAD 的哈希值 ,保存一段时间内的记录")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//找回分支\ngit checkout 37d9aca\ngit checkout -b new\n")])])]),a("h3",{attrs:{id:"rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase","aria-hidden":"true"}},[t._v("#")]),t._v(" rebase")]),t._v(" "),a("p",[t._v("Rebase 对比 merge，优势在于合并后的结果很清晰，只有一条线，劣势在于如果一旦出现冲突，解决冲突很麻烦")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git rebase master\ngit checkout master\n// 用于将 `master` 上的 HEAD 移动到最新的 commit\ngit merge develop\n")])])])])}],!1,null,null,null);i.default=_.exports}}]);