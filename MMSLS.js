/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=24595440&pid=14fb31b982caf83f4fd526ed918208c9&tid=649e94756403a7ee52050e3f6ddb6271",
    "https://www.maimemo.com/share/page?uid=24595440&pid=14fb31b982caf83f4fd526ed918208c9&tid=649e94756403a7ee52050e3f6ddb6271",
    "https://www.maimemo.com/share/page?uid=24595440&pid=14fb31b982caf83f4fd526ed918208c9&tid=649e94756403a7ee52050e3f6ddb6271",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=24595440&pid=14fb31b982caf83f4fd526ed918208c9&tid=649e94756403a7ee52050e3f6ddb6271",
    "https://www.maimemo.com/share/page?uid=24595440&pid=14fb31b982caf83f4fd526ed918208c9&tid=649e94756403a7ee52050e3f6ddb6271",
    "https://www.maimemo.com/share/page?uid=24595440&pid=14fb31b982caf83f4fd526ed918208c9&tid=649e94756403a7ee52050e3f6ddb6271",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
