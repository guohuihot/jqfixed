/**
* author : ahuing
* date   : 2015-8-7
* name   : jqfixed v1.0
* modify : 2015-8-20 15:14:57
 */
!function(a){function c(c){return this.each(function(){var d=a(this),e=d.data("jqFixed"),f="object"==typeof c&&c;e||(d.data("jqFixed",e=new b(this,f)),e.init())})}var d,b=function(c,d){this.o=a.extend(!0,{},b.defaults,d),this.$self=a(c)};b.defaults={css:{},fixed:0,margintop:0,bottom:0,fade:0,close:".btn-close"},b.prototype={init:function(){var b,c,d,e,g,h,i,j,k,l;this.$self.length&&(b=this,c=a(window),d=!-[1,]&&!window.XMLHttpRequest,e=c.height(),a("body").height(),g=b.o,h=b.$self.outerHeight(!0),i=0,j={position:d?"absolute":"fixed",marginTop:0,display:"block",zIndex:parseInt((new Date).getTime()/1e3)},g.css.zIndex=g.css.zIndex||b.$self.css("z-index"),g.css.position=g.css.position||b.$self.css("position"),b.$self.css(g.css),k=b.$self.offset().top,"fixed"==g.css.position?(g.css.marginTop=j.marginTop=g.css.bottom>=0?e-h-g.css.bottom:k,g.css.bottom="auto"):"absolute"==g.css.position?g.css.marginTop=k:(a('<div style="height:'+h+'px"></div>').insertBefore(b.$self),g.css.marginTop=-h),"fixed"!=g.css.position&&(g.fixed?j.marginTop=g.fixed>k?g.margintop:k-g.fixed:g.fixed=k),d&&"fixed"==g.css.position&&(g.css.position="absolute"),g.css.top=0,g.css.width=g.css.width||b.$self.width(),b.$self.css(g.css),b.$self.find(g.close).click(function(){b.$self.css("display","none"),c.off("scroll.fixed")}),g.fade&&b.$self.on("unfixed",function(){b.$self.one("fixed",function(){b.$self.css("display","none").animate({opacity:"show"})})}),l=function(){var a=c.scrollTop();j.top=d?a:0,b.$self.css(a>=g.fixed&&j||g.css),a>g.fixed&&b.$self.trigger("fixed",[a,h]).trigger(a>i?"scrollUp":"scrollDown")||b.$self.trigger("unfixed"),setTimeout(function(){i=a},0)},l(),c.on("scroll.fixed",l))}},d=a.fn.jqFixed,a.fn.jqFixed=c,a.fn.jqFixed.Constructor=b,a.fn.jqFixed.noConflict=function(){return a.fn.jqFixed=d,this},a(window).on("load",function(){a(".jqFixed").each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery);