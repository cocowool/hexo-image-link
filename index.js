'use strict';

// match markdown image and covert to asset_img 
hexo.extend.filter.register('before_post_render', function(data){

    data.content = data.content.replace(/!{1}\[([^\[\]]*)\]\((\S*)\s?(?:".*")?\)/g,
        function(match_str, label, path){

            // if only one /
            if( (path.split("/")).length == 2){
                console.debug("Markdown Image Path: " + match_str);
                console.debug("asset_img string: " + "{% asset_img " + (path.split("/"))[1] + " " +  label + " %}" );
                return "{% asset_img " + (path.split("/"))[1] + " " +  label + " %}" 
            }else{
                console.debug("Markdown Image Path does not exists!");
                return match_str;
            }

        });

    return data;
});