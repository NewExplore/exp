/**
 * Created by wdn on 2015/11/21.
 */
function $(id){
    return typeof id==='string'?document.getElementById(id):id;
}

window.onload=tab;

function tab(){
    // ��ǰ������ʾ��ҳǩ������
    var index=0;
    var timer=null;

    // ��ȡ���е�ҳǩ��Ҫ�л�������
    var lis=$('content_nav').getElementsByTagName('li');
    var divs=$('container').getElementsByClassName('mod');

    // ����ÿһ��ҳǩ�Ҹ����ǰ��¼�
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
    // ���Ӷ�ʱ�����ı䵱ǰ����������
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
        // ������ʾ��ǰҳǩ
        lis[curIndex].className='select';
        divs[curIndex].style.display='block';
        index=curIndex;
    }
}