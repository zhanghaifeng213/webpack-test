import avatar from './timg.jpg';
import styles from './index.scss';
import createAvatar from './createAvatar';
import "./font.scss"

createAvatar()

var img = new Image();
img.src = avatar;
img.classList.add(styles.avatar)

var root = document.getElementById("root");
root.append(img);
root.innerHTML = "<div class='iconfont icon-changjingguanli'></div>";