var images = require.context('../assets/img',false,/^profiles\d+.jpg$/);
export default function(path){
    return images(path);
}