/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-geolocation-setclasses !*/
 !function(n,e,o){function s(n,e){return typeof n===e}function a(){var n,e,o,a,i,f,r;for(var c in l)if(l.hasOwnProperty(c)){if(n=[],e=l[c],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(o=0;o<e.options.aliases.length;o++)n.push(e.options.aliases[o].toLowerCase());for(a=s(e.fn,"function")?e.fn():e.fn,i=0;i<n.length;i++)f=n[i],r=f.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),t.push((a?"":"no-")+r.join("-"))}}function i(n){var e=r.className,o=Modernizr._config.classPrefix||"";if(c&&(e=e.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");e=e.replace(s,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(e+=" "+o+n.join(" "+o),c?r.className.baseVal=e:r.className=e)}var t=[],l=[],f={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var o=this;setTimeout(function(){e(o[n])},0)},addTest:function(n,e,o){l.push({name:n,fn:e,options:o})},addAsyncTest:function(n){l.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var r=e.documentElement,c="svg"===r.nodeName.toLowerCase();Modernizr.addTest("geolocation","geolocation"in navigator),a(),i(t),delete f.addTest,delete f.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();n.Modernizr=Modernizr}(window,document);



function catGet() {
    var pageMain = document.getElementsByTagName("main")[0];
    var newImg = document.createElement("img");
    newImg.src = "./img/scratchy-cat.jpg";
    newImg.style.width = "450px";
    pageMain.appendChild(newImg);
};



function dogGet() {
    var pageMain = document.getElementsByTagName("main")[0];
    var newImg = document.createElement("img");
    newImg.src = "./img/doggo.jpg";
    newImg.style.width = "450px";
    pageMain.appendChild(newImg);
};



if (Modernizr.geolocation) {
    catGet();
} else {
    dogGet();
};



if(history.length!=1) {
    document.bgColor = "lightsalmon";
} else {
    document.bgColor = "lightblue";
}; 



var pageTitle = document.getElementById("title");
pageTitle.style.textTransform = "uppercase";
pageTitle.style.fontFamily = "sans-serif";
pageTitle.style.fontSize = "1em";


var wrapper = document.getElementById("wrapper");
wrapper.style.width = "80%";
wrapper.style.maxWidth = "900px";
wrapper.style.margin = "0 auto";


var list = document.getElementsByTagName("ul")[0];
list.style.paddingLeft = "0";
list.style.display = "flex";
list.style.flexWrap = "wrap";
list.style.textTransform = "uppercase";
list.style.fontFamily = "sans-serif";
list.style.fontWeight = "700";



var listItems = document.getElementsByTagName("li");
for(var i = 0; i < listItems.length; i++) {
    listItems[i].style.listStyleType = "none";
    listItems[i].style.margin = "15px 0";
}

var mainTitle = document.getElementById("mainTitle");
mainTitle.style.textTransform = "uppercase";
mainTitle.style.fontFamily = "sans-serif";
mainTitle.style.fontSize = "2.5em";

var mainText = document.getElementsByTagName("p")[0];
mainText.style.fontFamily = "sans-serif";
mainText.style.fontSize = "1.5em";

var links = document.getElementsByTagName("a");
for(var i = 0; i < links.length; i++) {
    links[i].style.marginRight = "15px"
    links[i].style.padding = "10px 15px";
    links[i].style.textDecoration = "none";

    if(i % 2 === 0) {
        links[i].style.border = "2px solid black";
        links[i].style.color = "black";
    } else {
        links[i].style.border = "2px solid black";
        links[i].style.backgroundColor = "black";
        links[i].style.color = "white";
    }
};
