$(function() {

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    function Birth() {
        this.sum = parseInt(rand(500, 1000));
    }
    Birth.prototype.suiji = function() {
        this.x = parseInt(rand(0, 50));
        this.y = parseInt(rand(0, 50));
        this.w = parseInt(rand(1, 3));
        this.color = parseInt(rand(0, 255));
        return this;
    }
    const qiu = new Birth();
    const jsbox = document.createDocumentFragment();
    for (var i = 0; i < qiu.sum; i++) {
        var x = qiu.suiji().x;
        var y = qiu.suiji().y;
        var w = qiu.suiji().w;
        $(jsbox).append('<span></span>').children().eq(i).css({ 'background': `rgb(${qiu.suiji().color},${qiu.suiji().color},${qiu.suiji().color})`, 'width': w, 'height': w, 'left': x, 'top': y });
    }
    $('.box').append(jsbox);


    const arr = ['虎虎生威', '财源滚滚', '虎年大运', '虎气冲天', '虎越新春', '虎虎虎虎','如虎添翼','生龙活虎','瑞虎运财','虎年大吉','虎兆丰年','虎报佳音','瑞虎迎春'];
    let ind = 0;
    let isok = false;
    let t;

    function setZf() {
        t = setInterval(function() {
            if (ind >= arr.length - 1) {
                ind = 0;
            } else {
                ind++;
            }
            $('#blessing')[0].innerHTML = arr[ind];
        }, 10);
    }
    setZf();
    $('#btn')[0].onclick = function() {
        if (isok) {
            setZf();
            isok = false;
        } else {
            clearInterval(t);
            isok = true;
        }
    }

    const box = $('.box');
    const fire = $('#fire');
    let count;
    fire[0].onclick = function() {
        $('audio')[1].play();
        fire[0].disabled = true;
    }
    fire.click(function() {
        $('audio')[0].play();
        box.css({
            left: '50%',
            transform: 'translateX(-50%)',
        })
        box.animate({
            top: '100px',
        }, function() {
            box.addClass('fire');
            count = setInterval(() => {
                if (Math.abs(box.offset().top) == 100) {
                    box.css({ 'opacity': '0' })
                    $('.he').hide();
                    $('.title')[0].style.display = 'block';
                    $('.greetings')[0].style.opacity = '1';
                    $('body').css({

                    })
                    clearInterval(count);
                }
            }, 100);
        });
    })
})



// animation: suofang 3s linear infinite;