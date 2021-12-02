$(function () {

    //声明变量
    var clickNum = 0;
    let timeNow;
    let timeLog = 0;
    let textNow = 0;
    let textLog = 0;

    //给页面创建点击事件
    $("html").click(function (e) {

        //每当鼠标点击页面增加点击数
        clickNum++;
        if (clickNum % 6 == 0) {
            alert("你这小子，在偷看我对吧！")
        }

        //创建颜色库
        //随机颜色
        //创建颜色码
        const startColors = new Array('00', '11', '22', '33', '44', '55', '66', '77', '88', '99',
            'aa', 'bb', 'cc', 'dd', 'ee', 'ff');
        const middleColors = new Array('00', '11', '22', '33', '44', '55', '66', '77', '88', '99',
            'aa', 'bb', 'cc', 'dd', 'ee', 'ff');
        const endColors = new Array('00', '11', '22', '33', '44', '55', '66', '77', '88', '99',
            'aa', 'bb', 'cc', 'dd', 'ee', 'ff');

        //从颜色库选取一种颜色;当然这是数组的方式;随机性
        var startColor = Math.floor(Math.random() * startColors.length);
        var middleColor = Math.floor(Math.random() * middleColors.length);
        var endColor = Math.floor(Math.random() * endColors.length);

        // console.log("前颜色码 = " + 前颜色码 + "; 中颜色码 = " + 中颜色码 + "; 后颜色码 = " + 后颜色码 + ";")
        // console.log("#" + 前颜色码库[前颜色码] + 中颜色码库[中颜色码] + 后颜色码库[后颜色码]);

        //创建元素; 创建的元素是span元素,这个元素的内容是"鼠标点击了第" + 点击数(这个是一个变量) + "次"
        const TXT = new Array('Java', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript', 'MarkDown', 'JSP', 'SQL', 'PHP', 'Rust', 'TypeScript', 'Go', 'C', 'C#');
        let num = Math.round(Math.random() * (TXT.length - 1))
        var createElement = $("<span>").text(TXT[num]);
        //在页面上添加span元素
        $("html").append(createElement);

        //获取鼠标点击坐标
        var X_Size = e.pageX;
        var Y_size = e.pageY;

        //给span元素添加css样式
        createElement.css({
            "z-index": 999, //设置或获取定位对象的堆叠次序(z-index):999
            "top": Y_size - 20, //上(top):y-20
            "left": X_Size, //左:x
            "position": "absolute", //定位:绝对定位
            "font-weight": "bold", //字体粗细:粗体
            "color": "#" + startColors[startColor] + middleColors[middleColor] + endColors[endColor], //颜色:绿色
            "user-select": "none", //使文字不被选中
        });

        //
        createElement.animate({
            "top": Y_size - 130, //上:y-180 
            "left": X_Size - 150 + Math.random() * 300,
            "opacity": 0 //透明度(opacity):0 
        }, Math.round(Math.random() * 1000) + 1000, //1500,调节动画速度 
            function () { //功能函数 
                createElement.remove(); //$i的删除
            }
        );

    })
})