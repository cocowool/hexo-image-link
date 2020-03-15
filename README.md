# hexo-image-link 

When enabled hexo `post_asset_folder: true`, convert the markdown image path to asset_img syntax, to make the image display both in typora and hexo.

`![image file label](./markdown-file-name/local-image.png)` -> `{% asset_img label local-image.png %}`

在Hexo启用`post_asset_folder: true`选项后，将Markdown语法的图片路径转换为asset_img的方式，使图片能够在使用typora编辑和hexo预览发布时都能正常显示。

# hexo-asset-image's problem

网上很多资料提示使用 `hexo-asset-image` 插件，但是在 `hexo 4.2.0` 环境下，生成的路径不对，如下：

```sh
update link as:-->/.cn//Screenshot-150-1-20200314081849804.png
update link as:-->/.cn//image-20200314080935503.png
```

# Usage 用法

```sh
$ npm install hexo-image-link --save
```

Enable `hexo-asset-folder: true`. 

```sh
$ hexo new 20200315-es-monitoring-guide
INFO  Created: ~/Projects/hexo-blog/blog/source/_posts/20200315-es-monitoring-guide.md
$ ls -lh source/_posts/
total 56
drwxr-xr-x@  9 shiqiang  staff   288B  3 15 10:28 ./
drwx------+ 32 shiqiang  staff   1.0K  3 14 07:52 ../
drwxr-xr-x@  2 shiqiang  staff    64B  3 15 10:28 20200315-es-monitoring-guide/
-rw-r--r--@  1 shiqiang  staff    76B  3 15 10:28 20200315-es-monitoring-guide.md
```

Edit Markdown and insert image.
```markdown
![label](./20200315-es-monitoring-guide/image-name.jpg)
```

Then generate public files.
```sh
$ hexo generate
```

# 参考资料
1. [hexo-asset-image](https://github.com/xcodebuild/hexo-asset-image)
2. [hexo-simple-image](https://github.com/Aragakiiii/hexo-simple-image)