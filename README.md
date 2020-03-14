# hexo-image-link 

When enabled hexo `post_asset_folder: true`, convert the image path to absolutly path in the html file.

在Hexo启用`post_asset_folder: true`选项后，当MD中引用本地文件图片时，将生成的html中的图片链接转换为绝对路径，使图片能够正常显示。

网上很多资料提示使用 `hexo-asset-image` 插件，但是在 `hexo 4.2.0` 环境下，生成的路径不对，如下：

```sh
update link as:-->/.cn//Screenshot-150-1-20200314081849804.png
update link as:-->/.cn//image-20200314080935503.png
```

# Usage 用法

# Example 示例

# 参考资料
1. [hexo-asset-image](https://github.com/xcodebuild/hexo-asset-image)
2. []()