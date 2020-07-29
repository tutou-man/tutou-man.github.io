function zip(id) {
    return document.getElementById(id);
}
function codeZip(obj) {
    this.S = function () {
        var code = obj.value;
        if (!this.codeZ || this.codeZ == "")
            this.codeZ = code;
        if (code == "")
            alert('请粘贴CSS样式表');
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
