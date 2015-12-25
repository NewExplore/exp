/**
 * Created by wdn on 2015/11/21.
 */
function $(id){
    return typeof id==='string'?document.getElementById(id):id;
}

window.onload=tab;

function tab(){
    // 当前高亮显示的页签的索引
    var index=0;
    var timer=null;

    // 获取所有的页签和要切换的内容
    var lis=$('content_nav').getElementsByTagName('li');
    var divs=$('container').getElementsByClassName('mod');

    // 遍历每一个页签且给他们绑定事件
    for(var i=0;i<lis.length;i++){
        lis[i].id=i;
        lis[i].onmouseover=function(){
            clearInterval(timer);
            changeOption(this.id);
        }
        lis[i].onmouseout=function(){
            timer=setInterval(autoPlay,5000);
        }
    }

    if(timer){
        clearInterval(timer);
        timer=null;
    }
    // 添加定时器，改变当前高亮的索引
    timer=setInterval(autoPlay,5000);

    function autoPlay(){
        index++;
        if(index>=lis.length){
            index=0;
        }
        changeOption(index);
    }

    function changeOption(curIndex){
        for(var j=0;j<lis.length;j++){
            lis[j].className='';
            divs[j].style.display='none';
        }
        // 高亮显示当前页签
        lis[curIndex].className='select';
        divs[curIndex].style.display='block';
        index=curIndex;
    }
}