function zip(id) {
    return document.getElementById(id);
}
function codeZip(obj) {
    this.S = function () {
        var code = obj.value;
        if (!this.codeZ || this.codeZ == "")
            this.codeZ = code;
        if (code == "")
            alert('请粘贴CSS样式表(Please paste CSS style sheet)');
        code = code.replace(/(\n|\t|\s)*/ig, '$1');
        code = code.replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig, '$1');
        code = code.replace(/(\{|\}|\,|\:|\;)\s/ig, '$1');
        return code;
    }
    this.A = function () {
        var code = this.S();
        return code;
    }
    this.B = function () {
        var code = this.S();
        code = code.replace(/(\{)/ig, ' $1');
        code = code.replace(/(\{|\;)/ig, '$1\n\t');
        code = code.replace(/\t*(\})/ig, '$1\n');
        code = code.replace(/(\*\/)/ig, '$1\n');
        return code;
    }
    this.C = function () {
        var code = this.S();
        code = code.replace(/(\})/ig, '$1\n');
        code = code.replace(/(\*\/)/ig, '$1\n');
        return code;
    }
    this.Z = function () {
        return (this.codeZ) ? this.codeZ : obj.value;
    }
    var my = this;
    obj.onkeydown = function () {
        my.codeZ = "";
    }
}
var code = new codeZip(zip('codeText'));

var cssbtn = document.querySelector('.css')
var csszip = document.querySelector('.csszip')
var jsbtn = document.querySelector('.js')
var jszip = document.querySelector('.jszip')

cssbtn.onclick = function(){
    cssbtn.style.color = '#a6d73a'
    jsbtn.style.color = '#000000'
    csszip.style.display = 'block'
    jszip.style.display = 'none'
}
jsbtn.onclick = function(){
    cssbtn.style.color = '#000000'
    jsbtn.style.color = '#a6d73a'
    csszip.style.display = 'none'
    jszip.style.display = 'block'
}
console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);
