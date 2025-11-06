---
highlight: atelier-cave-light
---
# 自动部署
# 创建Vuepress项目。并通过 GitHub Actions 工作流自动部署

## 1、注册并登录github账号，设置SSH keys
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/4f085a9301ef4727882c316c8fe4adeb~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5ouc6KeB6Zi_6Iy25aSn5Lq6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzIyNzgyMTg2OTM2OTM0MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1762494844&x-orig-sign=%2FajDWvyi5%2FRfCci3UKJE0nfDJjU%3D)

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/c89032d95bdc4fce8c57e2616f3f903f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5ouc6KeB6Zi_6Iy25aSn5Lq6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzIyNzgyMTg2OTM2OTM0MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1762494949&x-orig-sign=YOi%2BKCXUn%2B30RSeEo2WhTtGaJyQ%3D)

![设置sshkeys.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/dca209d8a2d24daf84e38c5d979f0959~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5ouc6KeB6Zi_6Iy25aSn5Lq6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzIyNzgyMTg2OTM2OTM0MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1762496115&x-orig-sign=%2BiqBHqxl5IQMir2hXgKXfSJGJ3g%3D)

## 2、查询/生成/设置sshkey

### 2.1、安装git[自行百度]

### 2.2、打开Git Bash查看电脑上是否已经存在SSH密钥

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/a08ac7cde76d4cc88f2fa35d053f09e3~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5ouc6KeB6Zi_6Iy25aSn5Lq6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzIyNzgyMTg2OTM2OTM0MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1762496240&x-orig-sign=0zv2yhcL9KDptWoOpLVEqqC1Yak%3D)

如图显示即为初次安装的的显示（默认没有）

### 2.3、创建SSH key

```
ssh-keygen -t rsa -C "your_email@youremail.com"
```
执行这条命令会如上图提示文件保存路径，可以直接按Enter，然后提示输入密码，输入两次（可以不输直接两次Enter），执行完之后会在 .ssh 目录生产两个文件：id_rsa和id_rsa.pub

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/f7a55536b9e948f5a162d01de2521d9d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5ouc6KeB6Zi_6Iy25aSn5Lq6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzIyNzgyMTg2OTM2OTM0MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1762496411&x-orig-sign=dCreinPKA5IXwYTkRLJpzm4%2BVko%3D)

可以在相应的位置看到生成的文件。

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/cc51478d8b3442c180bb9271f41d6058~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5ouc6KeB6Zi_6Iy25aSn5Lq6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzIyNzgyMTg2OTM2OTM0MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1762496450&x-orig-sign=%2BbN%2BueIglgeiG3r4jFkWAq0UNAQ%3D)


### 2.4、添加SSH公钥到github
将上图生成的id_rsa.pub里的内容复制到github的 Add new SSH key 操作的key输入框里。

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/f6caf3119ecd489b8f05e61128963dce~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5ouc6KeB6Zi_6Iy25aSn5Lq6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzIyNzgyMTg2OTM2OTM0MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1762497342&x-orig-sign=Zie7CfDd2RtIcuvNzoPo2gqm558%3D)

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/edf3b87d3e3040b48a919171db8cbeef~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5ouc6KeB6Zi_6Iy25aSn5Lq6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzIyNzgyMTg2OTM2OTM0MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1762497366&x-orig-sign=mizBx%2FpAMhoQWJQHu%2B2DrmzpFf8%3D)

### 2.5、测试并添加主机信息

```
ssh -T git@github.com
```

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/62c9f66c36224d098da7c19953988635~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5ouc6KeB6Zi_6Iy25aSn5Lq6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzIyNzgyMTg2OTM2OTM0MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1762496654&x-orig-sign=MbkyTpGbcxZgdS0xQuqVc602Rg4%3D)

如果提示“Hi xss-pgy!You've successfully authenticated, but GitHub does not provide shell access”。那么恭喜你已经完成了 SSH key 的配置，后面就可以自由的进行 Push 提交操作。

### 2.6、配置全局的git信息

```
git config --global user.name "Firstname Lastname" 
git config --global user.email "your_email@youremail.com"
```

## 3、将密钥添加到本地主机的 ssh-agent 服务

生产了密钥之后，本地主机需要将私钥添加到 ssh-agent 服务中。

1️⃣ 首先，需要启动 ssh-agent 服务。在 Win10 中可以在管理员权限下通过 `Set-Service -StartupType Automatic ssh-agent` 将 ssh-agent 服务的启动类型设为自启，然后使用 `Start-Service ssh-agent` 命令启动当前会话下的 ssh-agent 服务。

```
Set-Service -StartupType Automatic ssh-agent
Start-Service ssh-agent
Get-Service ssh-agent # 查看服务是否启动成功
```

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/b18f91c7e7fb46e588afe8f273e814bb~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5ouc6KeB6Zi_6Iy25aSn5Lq6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzIyNzgyMTg2OTM2OTM0MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1762497065&x-orig-sign=WnL1bGGPHxJExMRPrne57Xm262w%3D)

2️⃣ 然后使用 `ssh-add` 命令将新建的密钥添加到 ssh-agent 服务中

```
ssh-add C:/Users/用户名/.ssh/id_rsa # 修改为你的密钥文件路径
```
最后，在终端里面输入如下命令，测试一下本地与Github 的 SSH key 配置是否成功

```
ssh -T git@github.com
```

显示内容和下图相似，那么恭喜你已经完成了 SSH key 的配置，后面就可以自由的进行 Push 提交操作。（如果配置完成之后还发现需要验证用户名和密码，请检查一下项目的克隆方式是 HTTPS 还是 SSH）。

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/aca6270dfbb8402ea44fe7f84fc64b7b~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5ouc6KeB6Zi_6Iy25aSn5Lq6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzIyNzgyMTg2OTM2OTM0MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1762497531&x-orig-sign=xOyNT42hS6iU7fufEuuhQUhAVU8%3D)

如果已经使用 HTTP 方式克隆了仓库，则执行如下命令需要修改远程仓库地址。

```
git remote set-url origin <url>
```


参见1：[git for windows配置SSH key ](https://www.cnblogs.com/zjfjava/p/10080569.html)

参见2：[使用 VuePress + GitHub Pages + GitHub Actions 搭建个人博客](https://juejin.cn/post/7239536753971724344)

参见3：[使用 Vuepress + GitHub Pages 搭建项目文档（2）- 使用 GitHub Actions 工作流自动部署](https://juejin.cn/post/7536319934542184511?searchId=202511051731420D8B6A5C67B4F0D089BF)

