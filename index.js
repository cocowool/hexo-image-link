'use strict';

// match markdown image and covert to asset_img 
hexo.extend.filter.register('before_post_render', function(data){

    // detect ![]() pattern and convert path
    data.content = data.content.replace(/!{1}\[([^\[\]]*)\]\((.*)\s?(?:".*")?\)/g,
        function(match_str, label, path){

            // if only one /
            if( (path.split("/")).length == 2){
                console.debug("Markdown Image Path: " + match_str);
                console.debug("asset_img string: " + "{% asset_img " + (path.split("/"))[1] + " " +  label + " %}" );
                return "{% asset_img \"" + (path.split("/"))[1] + "\" \"" +  label + "\" %}" 
            }else if( (path.split("/")).length == 3  && path.substring(0,2) == "./" ){
                console.debug("Markdown Image Path: " + match_str);
                return "{% asset_img \"" + (path.split("/"))[2] + "\" \"" +  label + "\" %}" 
            }else{
                console.debug(match_str);
                console.debug("Label :"+label);
                console.debug(path);
                console.debug("Markdown Image Path does not exists!");
                return match_str;
            }

        });

    // detect <img > pattern and convert path
    data.content = data.content.replace(/<img[^>]+src="([^"]+)"/g, 
        function(matchstr,  path){
            console.debug("img tag found")
            console.debug(data.source_dir)
            console.debug(data.path)
            return "<img src=\"/" + data.path + path.split("/")[1] + "\" "
        });

    return data;
});
