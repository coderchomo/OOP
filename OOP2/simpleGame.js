class Bae{
    constructor(image,top,left,size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }
    getBaeElement(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    moveRight(){
        this.left += 30;
        console.log('cho to xin ' + this.left+' k ban nhe');
    }
}

let bae = new Bae('https://gaixinh24h.com/wp-content/uploads/2020/10/anh-gai-dep-toc-ngan-gaixinh24h-8.jpg', 20, 30, 200);

function start(){
    if(bae.left < window.innerWidth - bae.size){
        bae.moveRight();
    }
    document.getElementById('game').innerHTML = bae.getBaeElement();
    setTimeout(start, 500);
}

start();