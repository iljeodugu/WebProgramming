function Floating(FloatingObj,MarginX,MarginY,Percentage,setTime) 
{
    this.FloatingObj = FloatingObj;
    this.MarginX = (MarginX) ? MarginX : 0;
    this.MarginY = (MarginY) ? MarginY : 0;
    this.Percentage = (Percentage) ? Percentage : 20;
    this.setTime = (setTime) ? setTime : 10;
    this.FloatingObj.style.position = "absolute";
    this.Body = null;
    this.setTimeOut = null;
    this.FloatingObj.style.left = MarginX + "px";
    this.FloatingObj.style.margin = "0px 0px 0px 0px";
    this.Run();
}

Floating.prototype.Run = function () 
{
    if ((document.documentElement.scrollLeft + document.documentElement.scrollTop) > (document.body.scrollLeft + document.body.scrollTop)) {
        this.Body = document.documentElement;
    } else {
        this.Body = document.body;
    }

    var This = this;
    var FloatingObjLeft = (this.FloatingObj.style.left) ? parseInt(this.FloatingObj.style.left,10) : this.FloatingObj.offsetLeft;
    var FloatingObjTop = (this.FloatingObj.style.top) ? parseInt(this.FloatingObj.style.top,10) : this.FloatingObj.offsetTop;
    var DocLeft = this.Body.scrollLeft + this.MarginX;
    var DocTop = this.Body.scrollTop + this.MarginY;

    var MoveX = Math.abs(FloatingObjLeft - DocLeft);
    MoveX = Math.ceil(MoveX / this.Percentage);
    var MoveY = Math.abs(FloatingObjTop - DocTop);
    MoveY = Math.ceil(MoveY / this.Percentage);

    if(MoveX > 1)
    {
        if (FloatingObjLeft < DocLeft) {
            this.FloatingObj.style.left = FloatingObjLeft + MoveX + "px";
        } else {
            this.FloatingObj.style.left = FloatingObjLeft - MoveX + "px";
        }
    }

    if(MoveY > 1)
    {
        if (FloatingObjTop < DocTop) {
            this.FloatingObj.style.top = FloatingObjTop + MoveY + "px";
        } else {
            this.FloatingObj.style.top = FloatingObjTop - MoveY + "px";
        }
    }

    window.clearTimeout(this.setTimeOut);
    this.setTimeOut = window.setTimeout(function () { This.Run(); },this.setTime);
}

function random_click(tear_document, count)
{
    
    if(tear_document.innerText == "돌리기")
    {
        tear_document.innerText = "한번더"       
        var random_content = document.getElementById("random_content")
        var choice_number = Math.floor(Math.random() * (count -1)) + 1
        var want_content =  document.getElementById(choice_number)
        content = "<div class='tear_header'>" + want_content.childNodes[1].innerText + "</div>"
        content2 = '<div class="tear_img">' + want_content.childNodes[3].innerHTML  + "</div>"
        content3 = '<div class="tear_content" style="width: 500px; height: 250px; text-align: left;">' + want_content.childNodes[5].innerHTML + "</div>"
        content4 = '<div class="tear_map">' + want_content.childNodes[7].innerHTML + "</div>"
        random_content.innerHTML =  content + content2 + content3 + content4
    }
    else
    {
        alert("바꿔주지 않습니다. \n오늘은 이거 먹으세요!")
    }
}

function find_road(content)
{
    locate = content.text.split(":")
    locate_url= "https://www.google.co.kr/maps/place/" + locate[1]
    window.open(locate_url, '_blacnk');
}
