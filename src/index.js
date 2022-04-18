// tree shaking只支持ES module 静态引入，不支持commonjs动态引入
import {add} from "./math"

add(1,2);