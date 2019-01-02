define("page/mobile", function(a, t, e) {
    (function() {
        var t, n, o, i, r, l, p, c, s, u, f, d, h, m, g, w, v, D, b, k, y, x, P, E, j, z, _, N, O, F;
        u = a("common"),
        f = a("loading"),
        h = a("pageManagement"),
        a("zepto/touch"),
        s = a("bounceFix"),
        m = a("slideProgress"),
        a("animation/animation.async.css"),
        g = a("stat"),
        n = null,
        p = null,
        o = null,
        c = null,
        r = null,
        i = null,
        t = null,
        l = null,
        j = function() {
            var a, e, u, d, g;
            if (v(),
            window.prehidePage = E(pageData),
            p = $(window),
            n = $(document),
            c = $("#wrapper"),
            o = $(document.documentElement),
            r = $(".view-count"),
            i = $(".link-report-abuse"),
            l = $(".view-count-paragraph"),
            t = $("#app-bottom"),
            "white" === pageData.theme ? t.addClass("app-bottom-white") : "black" === pageData.theme && t.addClass("app-bottom-black"),
            "off" === pageData.report && i.hide(),
            "off" === pageData.views && l.hide(),
            "off" === pageData.layer && t.css("background", "rgba(0, 0, 0, 0) !important"),
            s.add("wrapper"),
            null == pageData.viewcount && (pageData.viewcount = 0),
            !pageData.music && pageData.musiccfg) {
                e = pageData.musiccfg;
                try {
                    e = JSON.parse(e)
                } catch (w) {
                    a = w,
                    e = {}
                }
                e = e || {},
                pageData.musiccfg = e,
                pageData.music = e.mid,
                pageData.musicPath = e.src
            }
            return window.updateWinFontSize(),
            f.init({
                src: (pageData.level || 0) >= 2 ? null != (d = pageData.logoPath) ? d : "" : null,
                company: (pageData.level || 0) >= 2 ? null != (g = pageData.company) ? g : "" : null
            }),
            h.init({
                cb: function() {
                    return f.update(1, function() {
                        return f.hide()
                    })
                },
                onProgress: function(a) {
                    return f.update(.9 * a + .1)
                }
            }),
            m.init(),
            c.on("swipeUp", function() {
                return h.next()
            }).on("swipeDown", function() {
                return h.prev()
            }).on("swipeLeft", function() {
                return h.left()
            }).on("swipeRight", function() {
                return h.right()
            }),
            window.nextPage = function() {
                return h.next()
            }
            ,
            window.prevPage = function() {
                return h.prev()
            }
            ,
            window.go = function(a) {
                return a || 0 === a ? h.go(a) : void 0
            }
            ,
            D(),
            F(),
            O(),
            N(),
            pageData && pageData.imgPath && pageData.imgPath.indexOf("http") < 0 && (pageData.imgPath = window.location.protocol + pageData.imgPath),
            u = (pageData.name || "").replace("{{count}}", pageData.viewcount),
            z(u, pageData.desc, pageData.imgPath)
        }
        ,
        O = function() {
            return pageData.show_report !== !1 && 0 !== pageData.show_report || !pageData.domain_url || -1 === location.href.indexOf(pageData.org_domain) ? void 0 : i.css("display", "none")
        }
        ,
        b = function() {
            var a;
            return a = '<div class="cs-mask">\n <p>根据平台规则，当前作品不符合规范要求，请停止传播！</p>\n  <p>联系客服（微信）：songze678</p>\n</div>',
            9 === Number("undefined" != typeof pageData && null !== pageData ? pageData.state : void 0) ? $("body").append($(a)) : void 0
        }
        ,
        v = function() {
            return 9 === Number("undefined" != typeof pageData && null !== pageData ? pageData.state : void 0) || pageData.ad ? u.loadScript("http://tenc1.rabbitpre.com/taobao/6099.js?_=" + (new Date).valueOf()) : void 0
        }
        ,
        y = function(a) {
            return a >= 1e5 ? Math.floor(a / 1e4) + "万" : a
        }
        ,
        F = function() {
            return r.text(y(pageData.viewcount)),
            pageData.showviewcount === !1 || 0 === pageData.showviewcount ? l.css("display", "none") : void 0
        }
        ,
        x = [{
            value: "免费创作这样的展示",
            desc: "http://v3.rabbitpre.com/mspa/z26vqmf",
            dataId: "worksarea_scenes_bottom1_click"
        }, {
            value: "免费创作这样的展示",
            desc: "http://v3.rabbitpre.com/mspa/z26vqmf",
            dataId: "worksarea_scenes_bottom1_click"
        }],
        k = function(a) {
            var t;
            return (t = a) ? (-1 === a.indexOf("http://") && -1 === a.indexOf("https://") && (t = "http://" + a),
            t) : null
        }
        ,
        w = {
            otf: {
                company: "135编辑器",
                link: "http://www.135editor.com/"
            },
            ott: {
                company: "123微导航",
                link: "http://www.123vdh.com/"
            },
            youzan: {
                company: "有赞",
                link: "http://kdt.im/2o6ZPr"
            },
            drip: {
                company: "水滴微信平台",
                link: "http://weixin.drip.im/"
            },
            EPS59: {
                company: "趣现场",
                link: "http://www.wxscreen.com/"
            },
            EPS61: {
                company: "展酷",
                link: "http://m.zhankoo.com/"
            },
            EPS62: {
                company: "精准云销",
                link: "http://www.aimapp.net/solution/%E7%B2%BE%E9%94%80"
            }
        },
        d = {
            KUWO: {
                company: "酷我音乐授权",
                link: "http://m.kuwo.cn?from=tuzhan",
                shares: [{
                    value: "免费听音乐",
                    desc: "http://m.kuwo.cn?from=tuzhan&text=1"
                }, {
                    value: "点我听音乐",
                    desc: "http://m.kuwo.cn?from=tuzhan&text=2"
                }, {
                    value: "更多好声音",
                    desc: "http://m.kuwo.cn?from=tuzhan&text=3"
                }]
            }
        },
        N = function() {
            var a, e, n, o, i, r, l, p, c, s, u, f, h, m, v;
            return s = k(pageData.link),
            l = w[pageData.user_from],
            f = pageData.musiccfg || {},
            u = d[f.type],
            c = parseInt(pageData.level || 0),
            isNaN(c) && (c = 0),
            "on" === pageData.word ? (n = "<a class='link' rel='nofollow' href='http://v1.rabbitpre.com/m/yF3jVvEJx?mobile=1'>兔展技术支持</a>",
            t.find(".free-show").html(n)) : c >= 3 ? pageData.company ? t.find(".free-show").html("<a class='link' rel='nofollow' href='" + (s || "javascript:void()") + "'>" + pageData.company + "</a>") : t.find(".free-show").hide() : c >= 2 ? (n = pageData.company ? "<a class='link' rel='nofollow' href='" + (s || "javascript:void()") + "'>" + pageData.company + "</a> | <a class='link' rel='nofollow' href='http://v1.rabbitpre.com/m/yF3jVvEJx?mobile=1'>兔展技术支持</a>" : '<a href="http://v1.rabbitpre.com/m/yF3jVvEJx?mobile=1" rel="nofollow" class="j-free-show-link">&nbsp;&nbsp;<span class="j-free-show-span">免费创作这样的展示</span> >> <span class="link">兔展</span></a>',
            t.find(".free-show").html(n)) : null != l ? (n = "<a class='link' rel='nofollow' href='" + l.link + "'>" + l.company + "</a> | <a class='link' rel='nofollow' href='http://v1.rabbitpre.com/m/yF3jVvEJx?mobile=1'>兔展技术支持</a>",
            t.find(".free-show").html(n)) : null != u ? (m = u.shares,
            s = f.link || u.link,
            i = s,
            o = u.company,
            null != m && (p = Math.floor(Math.random() * m.length),
            h = null != (v = m[p]) ? v : m[0],
            s = f.link || h.desc,
            i = h.desc,
            o = h.value),
            n = "<a class='link' data-href='" + i + "' rel='nofollow' href='" + s + "'>" + o + "</a> | <a class='link' rel='nofollow' href='http://v1.rabbitpre.com/m/yF3jVvEJx?mobile=1'>兔展技术支持</a>",
            t.find(".free-show").html(n)) : (p = Math.floor(Math.random() * (x.length - .002)),
            (r = x[p]) ? (e = t.find(".j-free-show-span"),
            a = t.find(".j-free-show-link"),
            e.length && r.value && e.text(r.value),
            a.length && r.desc && (a.attr("href", "javascript:void(0);"),
            a.attr("data-href", r.desc)),
            t.on("click", ".j-free-show-link", function(a) {
                var t, e, n;
                return a.preventDefault(),
                a.stopPropagation(),
                t = $(this),
                e = t.attr("data-href"),
                n = t.text(),
                g.sendComponent("LINK", "" + e + "[" + window.location.href + "]", "" + n, g.ACTION_UPD, {
                    id: r.dataId,
                    appid: pageData.id
                }),
                setTimeout(function() {
                    return self.location.href = e
                }, 50)
            })) : void 0)
        }
        ,
        D = function() {
            var a;
            return a = null,
            window.addEventListener("resize", function() {
                var t;
                return a && clearTimeout(a),
                t = document.activeElement,
                "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName ? a = setTimeout(function() {
                    return window.updateWinFontSize(),
                    n.trigger("winResize")
                }, 50) : void 0
            })
        }
        ,
        P = function(a) {
            var t, e, n, o, i;
            if (e = [],
            !a || !a.trigger || 0 === a.trigger.length)
                return e;
            for (i = a.trigger,
            n = 0,
            o = i.length; o > n; n++)
                t = i[n],
                "go" === t.type && t.prehide && e.push(t.go);
            return e
        }
        ,
        _ = function(a) {
            var t, e, n, o;
            for (e = [],
            a.sort(function(a, t) {
                return a - t
            }),
            n = 0,
            o = a.length; o > n; n++)
                t = a[n],
                -1 === e.indexOf(t) && e.push(t);
            return e
        }
        ,
        E = function(a) {
            var t, e, n, o, i, r, l, p, c, s, u;
            for (i = a.pages,
            n = i.length,
            r = [],
            e = null,
            l = 0,
            c = i.length; c > l; l++)
                if (o = i[l],
                o.cmps.length)
                    for (u = o.cmps,
                    p = 0,
                    s = u.length; s > p; p++)
                        t = u[p],
                        e = P(t),
                        e && n > e && (r = r.concat(e));
            return r = _(r)
        }
        ,
        z = function(a, t, e) {
            var n, o, i, r, l, p;
            if (pageData && pageData.deepshare) {
                for (a = a || "兔展",
                t = t || "兔展提供技术支持",
                e = e || "" + window.location.protocol + "//file.rabbitpre.com/default.png",
                o = u.b64DecodeUnicode(pageData.deepshare),
                $("title").before(o),
                l = $("meta"),
                p = [],
                i = 0,
                r = l.length; r > i; i++)
                    n = l[i],
                    p.push(n.content ? /^{{title}}$/.test(n.content) ? n.content = a : /^{{desc}}$/.test(n.content) ? n.content = t : /^{{imgUrl}}$/.test(n.content) ? n.content = e : void 0 : void 0);
                return p
            }
        }
        ,
        e.exports = {
            init: j
        }
    }
    ).call(this)
});
;define("common", function(e, t, r) {
    (function() {
        var t, o, n, i, a, l, d, u;
        t = e("async"),
        e("common/requestAnimationFrame"),
        n = {},
        n.processImageUrl = function(e) {
            return e
        }
        ,
        i = function(e) {
            return function(t) {
                var r, o, n;
                return r = new Image,
                r.onload = r.onerror = function() {
                    return t()
                }
                ,
                "string" == typeof e ? (n = e,
                o = {}) : (n = e.url,
                o = e.opts || {}),
                o.crossOrigin && (r.crossOrigin = "Anonymous"),
                r.src = n
            }
        }
        ,
        n.preloadImages = function(e, r, o) {
            var n;
            return t.parallel(function() {
                var t, r, o;
                for (o = [],
                t = 0,
                r = e.length; r > t; t++)
                    n = e[t],
                    o.push(i(n));
                return o
            }(), function() {
                return "function" == typeof r ? r() : void 0
            }, $.extend({}, {
                timeout: 3e3
            }, o))
        }
        ,
        l = document.body.clientWidth,
        a = document.body.clientHeight,
        o = .8,
        d = null,
        u = window.devicePixelRatio,
        n.calOuterStyle = function(e) {
            var t, r, o, n, i, a, l, d, u, s, c, h, f, p, g, b, m, w;
            for (i = e.animation,
            r = [],
            o = .5,
            null == i ? i = [] : "[object Array]" !== Object.prototype.toString.call(i) && (i = [i]),
            n = "both",
            d = f = 0,
            p = i.length; p > f; d = ++f)
                u = i[d],
                c = null != (g = null != u ? u.name : void 0) ? g : "none",
                "none" !== c && (a = null != (b = u.count) ? b : 1,
                "infinite" === a && d !== i.length - 1 && (a = 1),
                l = null != (m = u.duration) ? m : 1,
                0 === l && (l = .1),
                o += null != (w = u.delay) ? w : 0,
                s = "" + c + " " + l + "s " + o + "s " + a + " " + n,
                o += l * a,
                r.push(s),
                n = "forwards");
            return t = r.join(","),
            h = {
                width: e.style.width / window.defaultWidth * 100 + "%",
                height: "auto" === e.style.height ? e.style.height : e.style.height / window.defaultHeight * 100 + "%",
                left: e.style.left / window.defaultWidth * 100 + "%",
                top: e.style.top / window.defaultHeight * 100 + "%",
                "z-index": e.zIndex || 0,
                "-webkit-animation": t,
                "-moz-animation": t,
                animation: t
            },
            e.visible === !1 && (h.display = "none"),
            h
        }
        ,
        n.calInnerStyle = function(e) {
            var t, r;
            return e.style["font-size"] || "text" !== e.cmpType || (e.style["font-size"] = 14),
            e.style["border-width"] && !e.style["border-color"] && (e.style["border-color"] = "#000000"),
            t = "",
            e.style.rotate && (t = "rotate(" + e.style.rotate + "deg)"),
            t = t || null,
            {
                "background-color": e.style["background-color"] || null,
                color: e.style.color || "black",
                "border-radius": e.style["border-radius"] ? -1 !== ("" + e.style["border-radius"]).indexOf("%") ? e.style["border-radius"] : "" + e.style["border-radius"] + "px" : "0",
                "-webkit-border-radius": e.style["border-radius"] ? -1 !== ("" + e.style["border-radius"]).indexOf("%") ? e.style["border-radius"] : "" + e.style["border-radius"] + "px" : "0",
                "border-width": e.style["border-width"] + "px",
                "border-style": e.style["border-style"],
                "border-color": e.style["border-color"] || "transparent",
                "font-size": e.style["font-size"] ? e.style["font-size"] / (window.defaultWidth / window.remSlice) + "rem" : "1rem",
                "-webkit-box-shadow": e.style["box-shadow"] || null,
                "box-shadow": e.style["box-shadow"] || null,
                "-webkit-transform": t,
                "-moz-transform": t,
                transform: t,
                opacity: null != (r = e.style.opacity) ? r : 1,
                "font-family": e.style["font-family"] || null
            }
        }
        ,
        n.calStyle = function(e) {
            var t, r, o, n;
            return e ? (e.rotate && (r = "rotate(" + e.rotate + "deg)"),
            r = r || null,
            t = e.height,
            "auto" !== e.height && (t = isNaN(parseInt(e.height)) ? e.height : e.height / window.defaultHeight * 100 + "%"),
            o = e.width,
            "auto" !== e.width && (o = e.width / window.defaultWidth * 100 + "%"),
            {
                width: o,
                height: t,
                "background-color": e["background-color"] || null,
                color: e.color || "black",
                "border-radius": e["border-radius"] ? -1 !== ("" + e["border-radius"]).indexOf("%") ? e["border-radius"] : "" + e["border-radius"] + "px" : null,
                "line-height": e["line-height"] + "px",
                "border-width": e["border-width"] + "px",
                "border-style": e["border-style"],
                "border-color": e["border-color"] || "transparent",
                "font-size": e["font-size"] ? e["font-size"] / (window.defaultWidth / window.remSlice) + "rem" : void 0,
                "-webkit-box-shadow": e["box-shadow"] || null,
                "box-shadow": e["box-shadow"] || null,
                "-webkit-transform": r,
                "-moz-transform": r,
                transform: r,
                opacity: null != (n = e.opacity) ? n : 1,
                "font-family": e["font-family"] || null
            }) : {}
        }
        ,
        n.selectStyle = function(e) {
            var t;
            return t = {},
            e ? (t = {
                "font-size": e["font-size"] ? e["font-size"] / (window.defaultWidth / window.remSlice) + "rem" : "1rem",
                "border-color": e["border-color"],
                "border-style": e["border-style"],
                "border-width": e["border-width"] + "px",
                "border-radius": e["border-radius"] ? e["border-radius"] + "px" : 0,
                "background-color": e["background-color"],
                color: e.color,
                opacity: e.opacity
            },
            n.formatStyleJSONToString(t)) : ""
        }
        ,
        n.shouldAddCORS = function(e) {
            return -1 !== n.getLocation(e).host.indexOf("rabbitpre")
        }
        ,
        n.formatStyleJSONToString = function(e) {
            var t, r, o;
            r = "";
            for (t in e)
                o = e[t],
                null !== o && void 0 !== o && (r += "" + t + ":" + o + ";");
            return r
        }
        ,
        n.calStyleStr = function(e) {
            return n.formatStyleJSONToString(n.calStyle(e))
        }
        ,
        n.calImageActuralWidth = function(e) {
            return null == e && (e = l),
            parseInt(e * d.width / defaultWidth * u)
        }
        ,
        n.loadScript = function(e, t, r, o) {
            var n, i, a;
            null == o && (o = {}),
            n = document.createElement("script"),
            n.onload = t,
            n.onerror = r;
            for (i in o)
                a = o[i],
                n[i] = a;
            return n.src = e,
            document.head.appendChild(n)
        }
        ,
        n.appendStyle = function(e) {
            var t;
            return e ? (t = document.createElement("style"),
            t.innerHTML = e,
            document.head.appendChild(t)) : void 0
        }
        ,
        n.calPageSize = function() {
            var e, t;
            return l = document.body.clientWidth,
            a = document.body.clientHeight,
            l / a > defaultWidth / defaultHeight ? (e = a,
            t = defaultWidth * e / defaultHeight) : (t = l,
            e = defaultHeight * t / defaultWidth),
            d = {
                width: t,
                height: e
            }
        }
        ,
        n.getPageSize = function() {
            return d
        }
        ,
        n.defaultWidth = defaultWidth,
        n.bom = {
            query: function(e) {
                var t;
                return t = window.location.search.match(new RegExp("(\\?|&)" + e + "=([^&]*)(&|$)")),
                t ? decodeURIComponent(t[2]) : ""
            },
            getHash: function(e) {
                var t;
                return t = window.location.hash.match(new RegExp("(#|&)" + e + "=([^&]*)(&|$)")),
                t ? decodeURIComponent(t[2]) : ""
            }
        },
        n.str = {
            filterInAttr: function(e) {
                return e.replace(/"/g, "&quot;")
            },
            trim: function(e) {
                return e.replace(/(^\s+)|(\s+$)/g, "")
            },
            xss: function(e) {
                return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
        },
        n.getLocation = function(e) {
            var t;
            return t = document.createElement("a"),
            t.href = e,
            t
        }
        ,
        n.formatDate = function(e, t) {
            var r, o;
            t = new Date(t),
            o = {
                "M+": t.getMonth() + 1,
                "d+": t.getDate(),
                "h+": t.getHours(),
                "m+": t.getMinutes(),
                "s+": t.getSeconds(),
                "q+": Math.floor((t.getMonth() + 3) / 3),
                S: t.getMilliseconds()
            },
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (r in o)
                new RegExp("(" + r + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? o[r] : ("00" + o[r]).substr(("" + o[r]).length)));
            return e
        }
        ,
        n.showBigMap = function(e) {
            var t, r, o, n, i, a;
            return i = this.calPageSize(),
            a = i.width,
            t = i.height,
            n = $("#big-map-wrap"),
            0 === n.length ? ($("body").append("<div id='big-map-wrap'>                                             <div id='big-map-wrap-close'></div>                                         </div>"),
            $("#big-map-wrap-close").tap(function() {
                return $("#big-map-wrap").hide()
            }),
            this.map || (o = new AMap.Map("big-map-wrap",{
                resizeEnable: !0,
                layers: [new AMap.TileLayer],
                view: new AMap.View2D({})
            }),
            o.plugin(["AMap.ToolBar"], function() {
                var e;
                return e = new AMap.ToolBar,
                o.addControl(e)
            }),
            this.map = o)) : n.show(),
            r = e.split(","),
            this.markMap(r)
        }
        ,
        n.markMap = function(e) {
            return this.map.clearMap(),
            new AMap.Marker({
                map: this.map,
                position: e,
                icon: "http://webapi.amap.com/images/0.png"
            }),
            this.map.setCenter(e),
            this.map.setFitView()
        }
        ,
        n.detectDevice = function() {
            var e, t, r, o;
            return t = {
                isPc: !1,
                isMac: !1,
                isLinux: !1,
                isIPad: !1
            },
            e = navigator.platform,
            r = navigator.userAgent,
            t.isPc = 0 === e.indexOf("Win"),
            t.isMac = 0 === e.indexOf("Mac"),
            t.isLinux = 0 === e.indexOf("Linux"),
            t.isIPad = (null != (o = null !== r.match(/iPad/i)) ? o : !0) ? !1 : void 0,
            t
        }
        ,
        n.b64DecodeUnicode = function(e) {
            return decodeURIComponent(atob(e).split("").map(function(e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
            }).join(""))
        }
        ,
        r.exports = n
    }
    ).call(this)
});
;define("loading", function(n, t, e) {
    (function() {
        var t, r, i, o, u, l, d, a, s, c, f, p, g, h, m, w, b, v;
        t = n("zepto"),
        n("zepto/fx"),
        n("zepto/fx.method"),
        f = n("animation"),
        c = null,
        o = null,
        i = null,
        d = null,
        a = null,
        l = null,
        r = null,
        u = null,
        s = null,
        g = 0,
        p = null,
        w = window.devicePixelRatio,
        m = function(n) {
            var e;
            return null == n && (n = {}),
            c = t("#loading-wrapper"),
            o = c.find(".loading"),
            i = c.find(".background"),
            d = c.find(".percent"),
            a = c.find(".progress"),
            l = c.find(".logo"),
            r = c.find(".loading-bottom"),
            u = c.find(".loading-img"),
            s = c.find(".unit"),
            i.attr({
                width: o.width() * w,
                height: o.height() * w
            }),
            s.show(),
            e = "",
            e = 3 === +pageData.level ? n.company || "" : "使用兔展制作",
            r.text(e),
            null != n.src && ("" !== n.src ? l.css("backgroundImage", "url(" + n.src + ")") : l.css("rabbitpre")),
            v(.1)
        }
        ,
        h = function() {
            return c.fadeOut(400, function() {
                return c.remove()
            })
        }
        ,
        v = function(n, t) {
            return p && p.stop(),
            p = f({
                start: g,
                end: n,
                duration: 500,
                onProgress: function(n) {
                    return g = n,
                    b(n),
                    d.text(parseInt(100 * n))
                },
                onComplete: function() {
                    return g = n,
                    n >= 1 ? (l.show(),
                    a.hide(),
                    setTimeout(function() {
                        return "function" == typeof t ? t() : void 0
                    }, 0)) : void 0
                }
            }),
            p.start()
        }
        ,
        b = function(n) {
            return t(".progress-bar .progress-inner-bar").css({
                width: 100 * n + "%"
            })
        }
        ,
        e.exports = {
            init: m,
            hide: h,
            update: v,
            redrawSector: b
        }
    }
    ).call(this)
});
;define("pageManagement", function(e, t, n) {
    (function() {
        var t, i, a, r, o, l, s, d, p, c, u, g, m, f, h, v, y, w, S, b, x, k, D, T, O, C, j, P, I, N, z, M, J, R, A, K, F, q, U, V, E, _, B, L, $, Q, W, G, H, Z, X, Y, et, tt, nt, it, at, rt, ot, lt, st, dt, pt, ct, ut, gt, mt, ft, ht, vt, yt, wt, St, bt, xt, kt, Dt, Tt, Ot, Ct, jt, Pt, It, Nt, zt, Mt, Jt, Rt, At, Kt, Ft, qt, Ut, Vt, Et, _t, Bt, Lt, $t, Qt, Wt, Gt, Ht, Zt, Xt, Yt, en, tn, nn, an, rn, on, ln, sn, dn, pn, cn;
        t = e("zepto"),
        o = e("common"),
        c = e("point"),
        d = e("db"),
        l = e("common/cdnmap"),
        u = e("stat"),
        e("zepto/touch"),
        p = e("pageManagement/lastads"),
        s = null,
        Z = c.create(0, 0),
        Nt = 3,
        r = t("#page-list"),
        i = t("#app-bottom"),
        a = t(document),
        Ft = {},
        Lt = {},
        k = {},
        m = !1,
        g = !1,
        lt = [],
        ot = [],
        qt = {},
        rt = {
            tag: null,
            older: !1,
            msg: null
        },
        Bt = [],
        d.formSubmit = d.registerMethod({
            type: "POST",
            url: "/form/data"
        }),
        d.getPraise = d.registerMethod({
            type: "GET",
            url: "/cmp/count"
        }),
        d.postPraise = d.registerMethod({
            type: "POST",
            url: "/cmp/count"
        }),
        d.postComment = d.registerMethod({
            url: "/comment",
            type: "post"
        }),
        d.getSelect = d.registerMethod({
            type: "GET",
            url: "/cmp/getlinkage"
        }),
        d.gatherSubmit = d.registerMethod({
            type: "POST",
            url: "/form/freedata"
        }),
        Ht = function() {
            var e, t, n;
            return e = {},
            t = location.search.substr(1),
            t && (n = t.split("&"),
            n.map(function(t) {
                var n, i;
                return n = t.split("=")[0],
                i = t.split("=")[1],
                e[n] = decodeURIComponent(i)
            })),
            e
        }(),
        x = function(t) {
            var n;
            if (-1 !== t.target.className.indexOf("cmp ") && (n = ft(t.target.id),
            null != n ? n.effect : void 0))
                return e.async(["effect"], function(e) {
                    return e.init(n, t.target)
                })
        }
        ,
        Ot = function(n) {
            e.async(["effect"], function(e) {
                var i, a, r, o, l;
                for (o = n.cmps,
                a = 0,
                r = o.length; r > a; a++)
                    i = o[a],
                    (null != (l = i.effect) ? l.name : void 0) && e.init(i, t("#cmp-" + i.id)[0]),
                    "praise" === i.cmpType && jt(n, i)
            })
        }
        ,
        jt = function(e, t) {
            return d.getPraise({
                data: {
                    app: "undefined" != typeof pageData && null !== pageData ? pageData.id : void 0,
                    page: null != e ? e.id : void 0,
                    cmp: null != t ? t.cmp_id : void 0
                },
                success: function(e) {
                    var n;
                    return t.count = null != (n = e.data) ? n : 0,
                    Zt(t)
                }
            })
        }
        ,
        Zt = function(e) {
            return t("#cmp-" + e.id + " .j-icon-text").text(e.count)
        }
        ,
        ft = function(e) {
            var t;
            return t = e.substr(4),
            k[t]
        }
        ,
        At = {},
        vt = function(e, n) {
            var i;
            return i = ("number" == typeof e ? c.create(e, n) : e).toString(),
            At[i] = At[i] || t("#page-" + i)
        }
        ,
        yt = function(e, t) {
            var n;
            return n = ("number" == typeof e ? c.create(e, t) : e).toString(),
            Ft[n]
        }
        ,
        kt = function() {
            return Dt(),
            Tt()
        }
        ,
        Dt = function() {
            var e, t, n, i, a, r, o, l;
            for (a = {
                Default: "320*480",
                "iPhone 4": "320*416",
                "iPhone 5": "320*504",
                "iPhone 6": "375*603",
                "iPhone 6 Plus": "414*672"
            },
            n = "iPhone 5",
            t = a[pageData.device].split("*"),
            i = a[n].split("*"),
            pageData.pages.length < 2 ? pageData.pages[0].needlitads = !0 : pageData.pages[1].needlitads = !0,
            p.appid = pageData.id,
            p.row = pageData.pages.length,
            p.point = c.create(p.row, 0),
            l = p.cmps,
            r = 0,
            o = l.length; o > r; r++)
                e = l[r],
                e.style.left = e.style.left + (t[0] - i[0]) / 2,
                e.style.top = e.style.top + (t[1] - i[1]) / 2;
            return pageData.pages.push(p)
        }
        ,
        Tt = function() {
            var e, t;
            return e = document.getElementsByTagName("head")[0],
            t = document.createElement("script"),
            t.type = "text/javascript",
            t.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
            t.onload = function() {
                return g = !0,
                console.log("adsGoogleReady:" + g)
            }
            ,
            e.appendChild(t)
        }
        ,
        sn = function() {
            var e;
            return console.log("triggerAds"),
            (e = window.adsbygoogle || []).push({})
        }
        ,
        ht = function() {
            var e, t, n;
            return n = "http://proj3.rabbitpre.com:8088/xinmei?from=tuzhan",
            t = "//static.szzbmy.com/nmedie/500w.jpg",
            e = "<div class='j-little-ads little-ads' style='background-image:url(" + t + ");'>                     <div class='j-little-ads-remove little-ads-remove'></div>                       <!-- <div class='little-ads-tip'>                           <span>广告</span>                     </div>-->                       <a class='little-ads-a' href='" + n + "'></a>                   </div>"
        }
        ,
        xt = function(n) {
            var i, a, r, o, l, d;
            if (null == n && (n = {}),
            o = pageData.pages.length,
            a = pageData,
            r = 0,
            !o)
                return void ("function" == typeof n.cb && n.cb());
            if ($t(pageData),
            Ct(pageData),
            prehidePage)
                for (i = l = 0,
                d = pageData.maxRow + 1; d >= 0 ? d > l : l > d; i = d >= 0 ? ++l : --l)
                    if (-1 === prehidePage.indexOf(i)) {
                        r = i;
                        break
                    }
            return Z = c.create(r, 0),
            _t(Z, function(e) {
                return Et(),
                "function" == typeof n.cb && n.cb(),
                Ot(e),
                setTimeout(function() {
                    return vt(e.point).addClass("current"),
                    t(document).trigger("changedTo", [Z]),
                    an()
                }, 16)
            }, {
                onProgress: n.onProgress
            }),
            pageData.comment && e.async("comment", function(e) {
                return s = e,
                s.init()
            }),
            h()
        }
        ,
        D = function(e) {
            var t;
            return (t = e) ? (-1 === e.indexOf("http://") && -1 === e.indexOf("https://") && (t = "http://" + e),
            t) : null
        }
        ,
        dn = {},
        dn.link = function(e, n) {
            var i, a;
            return a = D(e),
            a ? (a = a.replace(/{([^}]+)}/g, function(e, t) {
                return encodeURIComponent(Ht[t]) || ""
            }),
            i = n.name,
            n.text && (i = t(n.text).text()),
            window.fiboSDK ? window.fiboSDK.btnClick(pageData.id + n.id, "" + i + " - " + a) : window.dataSDK && window.dataSDK.btnClick(pageData.id + n.id, "" + i + " - " + a),
            window.location.href = a) : void 0
        }
        ,
        dn.deeplink = function(e) {
            var n, i, a, r, l;
            if (pageData && pageData.deeplink) {
                if (r = null != (l = window.navigator) ? l.userAgent : void 0,
                -1 !== r.toLowerCase().indexOf("micromessenger") && r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
                    return void t("#deeplink-tip").show();
                i = o.b64DecodeUnicode(pageData.deeplink),
                n = document.createElement("script");
                try {
                    n.appendChild(document.createTextNode(i))
                } catch (s) {
                    a = s,
                    n.text = i
                }
                return document.head.appendChild(n),
                gotoApp(e)
            }
        }
        ,
        dn.toggle = function(e) {
            var n, i, a, r, o, l;
            for (i = null,
            n = JSON.parse(e),
            l = [],
            r = 0,
            o = n.length; o > r; r++)
                a = n[r],
                i = t(".cmp[data-tid='" + a.tid + "']"),
                0 === a.type && i.show(),
                1 === a.type && i.hide(),
                l.push(2 === a.type ? i.toggle() : void 0);
            return l
        }
        ,
        dn.go = function(e) {
            var t, n, i, a, r, o;
            if (Z.x !== e) {
                for (n = Z.x > e ? "prev" : "next",
                i = [],
                o = window.prehidePage,
                a = 0,
                r = o.length; r > a; a++)
                    t = o[a],
                    t !== e && i.push(t);
                return window.prehidePage = i,
                w(c.create(e, 0), n)
            }
        }
        ,
        Gt = function(e, t) {
            var n;
            return n = e.type,
            dn[n] ? dn[n](e[n], t) : void 0
        }
        ,
        mt = function(e, t) {
            var n, i, a, r, o;
            if (i = null,
            null != e ? e.trigger : void 0) {
                for (o = e.trigger,
                a = 0,
                r = o.length; r > a; a++)
                    n = o[a],
                    n.event === t && (i = n);
                return i && "none" === i.type && (i = null),
                i
            }
        }
        ,
        h = function() {
            var n, r, l, p, c, g, f;
            return a.on("winResize", function() {
                return pn(o.calPageSize())
            }),
            a.on("changedTo", function(e, t) {
                var n, a, r, o;
                if (n = pageData.maxRow,
                prehidePage)
                    for (a = r = o = pageData.maxRow; 0 >= o ? 0 > r : r > 0; a = 0 >= o ? ++r : --r)
                        if (-1 === prehidePage.indexOf(a)) {
                            n = a;
                            break
                        }
                return ("undefined" != typeof pageData && null !== pageData ? pageData.delBottom : void 0) ? i.remove() : i[t.x === n ? "fadeIn" : "fadeOut"]()
            }),
            a.on("tap", ".cmp", function() {
                var n, i, a, r, l, p, c, u, g;
                if (a = ft(this.id),
                l = a.cmpType,
                r = mt(a, "click"),
                ("image" === l || "text" === l || "shape" === l) && r && r.type && "none" !== r.type)
                    return t(this).hasClass("trigger-tips") && t(this).removeClass("trigger-tips"),
                    void Gt(r, a);
                if (a.link && "深度链接" !== a.linkType)
                    window.fiboSDK ? window.fiboSDK.btnClick(pageData.id + a.id, "" + a.text + " - " + a.link) : window.dataSDK && window.dataSDK.btnClick(pageData.id + a.id, "" + a.text + " - " + a.link),
                    setTimeout(function() {
                        return window.location.href = a.link
                    }, 800);
                else if ("深度链接" === a.linkType && (window.fiboSDK ? window.fiboSDK.btnClick(pageData.id + a.id, "" + a.text + " - " + a.deeplink) : window.dataSDK && window.dataSDK.btnClick(pageData.id + a.id, "" + a.text + " - " + a.deeplink),
                "深度链接" === a.linkType && pageData && pageData.deeplink)) {
                    if (u = null != (g = window.navigator) ? g.userAgent : void 0,
                    -1 !== u.toLowerCase().indexOf("micromessenger") && u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
                        return void t("#deeplink-tip").show();
                    p = o.b64DecodeUnicode(pageData.deeplink),
                    i = document.createElement("script");
                    try {
                        i.appendChild(document.createTextNode(p))
                    } catch (f) {
                        c = f,
                        i.text = p
                    }
                    document.head.appendChild(i),
                    gotoApp(a.deeplink)
                }
                if ("fingerprint" === a.cmpType && (n = t(this),
                n.addClass("tapped"),
                e.async("fingerprintDialog", function(e) {
                    return new e({
                        cmp: a,
                        viewcount: pageData.viewcount
                    })
                })),
                "video" === a.cmpType && e.async("music", function(e) {
                    return e.stop()
                }),
                "bless" === a.cmpType && e.async("blessingList", function(e) {
                    return m = !0,
                    e.show({
                        data: a,
                        onHide: function() {
                            return m = !1
                        },
                        addComment: function(e) {
                            return null != s ? s.addComment(e) : void 0
                        }
                    })
                }),
                "praise" === a.cmpType) {
                    if (a.clicked === !0)
                        return;
                    "icon" === a.content.state && t(this).find(".icon-v").addClass("active"),
                    t(this).find(".j-icon-text").addClass("active"),
                    a.count++,
                    a.clicked = !0,
                    Zt(a),
                    d.postPraise({
                        data: {
                            app: pageData.id,
                            page: a.page,
                            cmp: a.cmp_id
                        }
                    })
                }
                return "applink" === a.cmpType && a.appid ? location.href = et[a.appid] : void 0
            }),
            a.on("input", "input", function(e) {
                var n, i, a, r;
                return i = t(this),
                t(e.target).hasClass("j-comment-input-input") ? void S(e) : (n = i.closest(".cmp"),
                n.length && (a = ft(n.attr("id")),
                "ginput" !== a.cmpType) ? (a.$submit || (a.$submit = n.find('input[type="submit"]')),
                r = dt(a, n),
                r ? a.$submit.removeAttr("disabled") : a.$submit.attr("disabled", !0)) : void 0)
            }),
            f = {},
            c = null,
            a.on("submit", "form", function(n) {
                var i, a, r, l, s, p, g, m, h, v, y, w, S, b, x, k, D;
                if (n.preventDefault(),
                t(n.target).hasClass("j-comment-form"))
                    return void rn(n);
                if (r = t(this),
                i = r.closest(".cmp"),
                i.length) {
                    if (g = i.attr("id"),
                    s = ft(g),
                    S = "",
                    rt.older = !1,
                    c = {},
                    isNaN(Number(s.id)) && (rt.older = !0),
                    "FORM_1" === s.id && (rt.older = !1),
                    s.message && (rt.msg = s.message),
                    rt.older) {
                        if (b = dt(s, i),
                        f[s.id])
                            return;
                        f[s.id] = !0
                    } else
                        b = pt(s);
                    if (b) {
                        if ((pageData.level || 0) >= 2 && (S = pageData.logoPath ? "background: url('" + pageData.logoPath + "') no-repeat center center;background-size: contain;" : "display: none;"),
                        a = t(e("pageManagement/loading.tpl")({
                            style: S
                        })),
                        a.appendTo(i),
                        v = {
                            data: {},
                            appid: pageData.id
                        },
                        rt.older)
                            for (v.formid = s.id,
                            D = s.items,
                            x = 0,
                            k = D.length; k > x; x++)
                                m = D[x],
                                "input" === m.type && (v.data[m.name] = m.$input.val(),
                                c[m.name] = {},
                                c[m.name][m.placeholder] = m.$input.val());
                        else {
                            s.fuckid && (v.formid = s.fuckid),
                            rt.tag && (v.tag = rt.tag),
                            y = null,
                            l = [];
                            for (w in qt)
                                h = qt[w],
                                ("input" === h.type || "star" === h.type) && (y = encodeURIComponent(h.el.val())),
                                "answer" === h.type && (y = h.el.filter(":checked").val()),
                                "answers" === h.type && (l = [],
                                h.el.each(function() {
                                    return t(this).is(":checked") ? l.push(t(this).val()) : void 0
                                }),
                                y = l.join(",")),
                                y && "" !== y && (v.data[w] = y,
                                c[w] = {},
                                c[w][h.label] = y)
                        }
                        return v.formid && v.appid ? (p = o.bom.query("cnl"),
                        p && (v.cnl = p),
                        v.data = JSON.stringify(v.data),
                        d.formSubmit({
                            data: v,
                            success: function(e) {
                                var t, n;
                                if (null != e && null != (n = e.data) ? n.tag : void 0) {
                                    if (rt.tag = e.data.tag,
                                    qt)
                                        for (h in qt)
                                            t = qt[h],
                                            c[h] || (c[h] = {},
                                            c[h][t.label] = "");
                                    nn(c, rt.tag)
                                }
                                return e.errormessage ? Mt(e.errormessage, i) : (e.data.message || (e.data.message = rt.msg),
                                Mt(e.data.message, i))
                            },
                            error: function(e) {
                                return alert("提交失败, 请重试!"),
                                u.sendComponent("ERROR", "FORMSUBMIT", "[" + e.errorCode + "] " + e.errorMsg)
                            },
                            complete: function() {
                                return f[s.id] = !1,
                                a.remove()
                            }
                        })) : void alert("提交失败: 缺少必要参数.")
                    }
                }
            }),
            a.on("tap", ".j-form-star", function() {
                var e, n, i, a;
                return e = t(this),
                a = e.data("parent"),
                i = e.data("index"),
                t("#" + a).val(i),
                i -= 1,
                n = e.parents(".j-form-stars"),
                n.find(".j-form-star").each(function(e) {
                    return i >= e ? t(this).addClass("stared") : t(this).removeClass("stared")
                })
            }),
            a.on("tap", ".j-gather-star", function() {
                var e, n, i;
                return e = t(this),
                i = e.data("parent"),
                n = e.data("index"),
                t("input[name='" + i + "']").val(n),
                n--,
                e.parents(".j-star-group").find(".j-gather-star").each(function(e) {
                    return n >= e ? t(this).addClass("active") : t(this).removeClass("active")
                })
            }),
            p = !1,
            n = [],
            r = null,
            l = [],
            g = function(e) {
                var n, i, a;
                return a = "",
                e ? i = e.message || "提交成功！感谢您的参与" : (i = "网络不给力，请重新提交",
                a = "color: #fa3544"),
                n = "<div class='gather-success'>                   <div class='gather-content'>                        <p style=" + a + ">" + tt(i) + "</p>                        <button class='gather-btn'>确定</button>                  </div>              </div>",
                t("body").append(n),
                t("body").on("click", ".gather-btn", function() {
                    return t(".gather-success").remove()
                })
            }
            ,
            a.on("tap", ".j-gsubmit", function() {
                var e, i, a, s, c, m, f, h, v, y, w, S, b, x, k, D, T, O, C, j, P, I, N, z, M, J, R;
                if (v = JSON.parse(pageData.gather),
                v = v.strict,
                m = {},
                x = {},
                T = [],
                f = null,
                y = t(this).data("id"),
                i = ft(y),
                k = {},
                e = t(this),
                h = {},
                s = ["ginput", "gselect", "gchoose", "gstar"],
                e.hasClass("submited"))
                    return void alert("您已经提交过, 请勿重复提交.");
                if (!p) {
                    for (J = pageData.pages,
                    O = 0,
                    I = J.length; I > O; O++)
                        for (b = J[O],
                        R = b.cmps,
                        C = 0,
                        N = R.length; N > C; C++)
                            a = R[C],
                            s.indexOf(a.cmpType) >= 0 && a.required && n.push(a.tid),
                            "ginput" === a.cmpType && l.push(a);
                    p = !0
                }
                for (S in v)
                    T = v[S],
                    f = t("input[name='" + S + "'], select[name='" + S + "']"),
                    "checkbox" !== f.attr("type") && "radio" !== f.attr("type") ? f && 2 === f.length ? (T = [],
                    f.each(function() {
                        var e;
                        return e = t(this).val(),
                        e ? T.push(e) : void 0
                    }),
                    T && T.length >= 1 && (m[S] = T.join(","))) : f && f.val() && (m[S] = f.val()) : (T = [],
                    f.each(function() {
                        return t(this).is(":checked") ? T.push(t(this).val()) : void 0
                    }),
                    T && T.length >= 1 && (m[S] = T.join(",")));
                for (j = 0,
                z = n.length; z > j; j++)
                    if (w = n[j],
                    !m[w])
                        return void alert("提交失败，有必填项未填写！");
                for (P = 0,
                M = l.length; M > P; P++) {
                    if (w = l[P],
                    m[w.tid] && "tel" === w.inptype && !/^1[3-8]\d{9}$/.test(m[w.tid]))
                        return void alert("请输入正确的号码");
                    if (m[w.tid] && "email" === w.inptype && !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(m[w.tid]))
                        return void alert("请输入正确的邮箱");
                    h[w.tid] = w.inptype
                }
                if ("{}" === JSON.stringify(m))
                    return void alert("请填写表单");
                for (S in m)
                    T = m[S],
                    m[S] = tt(T);
                for (S in v)
                    T = v[S],
                    k[S] = {},
                    k[S][T] = m[S] || "",
                    D = T,
                    h[S] && (D = h[S]),
                    ot.push({
                        value: m[S] || "",
                        name: T,
                        type: D
                    });
                return c = o.bom.query("cnl"),
                c && (x.cnl = c),
                x.appid = pageData.id,
                x.data = JSON.stringify(m),
                r && (x.tag = r),
                e.addClass("submited"),
                d.gatherSubmit({
                    data: x,
                    success: function(e) {
                        var t;
                        return pageData.custom_form && window.sendFormData && window.sendFormData(ot),
                        (null != e && null != (t = e.data) ? t.tag : void 0) && (r = e.data.tag),
                        nn(k, r),
                        g(i)
                    },
                    error: function(t) {
                        return e.removeClass("submited"),
                        g(),
                        u.sendComponent("ERROR", "FORMSUBMIT", "[" + t.errorCode + "] " + t.errorMsg)
                    }
                })
            }),
            window.onunload = function() {
                var e, t;
                window.dataSDK ? "function" == typeof (e = window.dataSDK).exitPage && e.exitPage(Z.x + 1) : window.fiboSDK && "function" == typeof (t = window.fiboSDK).exitPage && t.exitPage(Z.x + 1)
            }
            ,
            a.on("tap", "#comment-edit", function() {
                var e, n;
                return m = !0,
                n = t("#wrapper"),
                e = t("#comment-input"),
                e.length < 1 && (e = t("<div id='comment-input' class='comment-input'><form class='j-comment-form comment-form'><input class='j-comment-input-input comment-input-input' placeholder='发布弹幕(不超过30字)' type='text'><input id='comment-submit' class='j-comment-submit comment-submit' type='submit' value='发送'></form></div>"),
                n.append(e)),
                e.show(),
                setTimeout(function() {
                    return e.find(".j-comment-input-input").focus()
                }, 1)
            }),
            a.on("tap", "#comment-input", function(e) {
                var n;
                return e.stopPropagation(),
                t(e.target).hasClass("j-comment-input-input") || t(e.target).hasClass("j-comment-form") || t(e.target).hasClass("j-comment-submit") ? void 0 : (n = t("#comment-input"),
                n.hide(),
                n.find(".j-comment-input-input").blur(),
                m = !1)
            }),
            a.on("tap", "#comment-submit", function(e) {
                return e.stopPropagation(),
                rn(e)
            }),
            a.on("tap", ".j-little-ads-remove", function(e) {
                return e.stopPropagation(),
                e.preventDefault(),
                t(this).parents(".j-little-ads").remove()
            }),
            a.on("tap", ".j-ads-img", function() {
                var e, n, i, a, r, o, l;
                return r = t(this).index(),
                a = yt(Z),
                n = a.cmps,
                i = n[r],
                e = i.ad,
                window.fiboSDK ? "undefined" != typeof window && null !== window && null != (o = window.fiboSDK) ? o.pushView(e.pfid, e.id) : void 0 : "undefined" != typeof window && null !== window && null != (l = window.dataSDK) ? l.pushView(e.pfid, e.id) : void 0
            }),
            a.on("tap", ".j-small-google", function() {
                var e, t, n, i;
                return t = yt(Z),
                e = t.ad,
                window.fiboSDK ? "undefined" != typeof window && null !== window && null != (n = window.fiboSDK) ? n.pushView(e.pfid, e.id) : void 0 : "undefined" != typeof window && null !== window && null != (i = window.dataSDK) ? i.pushView(e.pfid, e.id) : void 0
            }),
            a.on("tap", "#deeplink-tip", function() {
                return t("#deeplink-tip").hide()
            })
        }
        ,
        S = function(e) {
            var n;
            return n = t(e.target).val(),
            n.length > 30 ? (n = n.slice(0, 30),
            t(e.target).val(n)) : void 0
        }
        ,
        rn = function() {
            var e, n, i, a;
            return e = t("#comment-input"),
            n = e.find(".j-comment-input-input"),
            a = n.val().trim(),
            a = o.str.xss(a),
            i = "匿名",
            a.length ? (d.postComment({
                data: {
                    appid: pageData.id,
                    nickname: i,
                    content: a
                },
                success: function() {
                    var e;
                    return e = {
                        content: a,
                        now: !0
                    },
                    s.addCurComment(e)
                }
            }),
            n.val(""),
            e.hide(),
            e.find(".j-comment-input-input").blur(),
            m = !1) : void 0
        }
        ,
        nn = function(e, t) {
            var n, i, a;
            return n = {
                data: e
            },
            t && (n.tag = t),
            (null != (i = window.dataSDK) ? i.saveFormInfo : void 0) ? window.dataSDK.saveFormInfo(n) : (null != (a = window.fiboSDK) ? a.saveFormInfo : void 0) ? window.fiboSDK.saveFormInfo(n) : void 0
        }
        ,
        Mt = function(n, i) {
            var a, r, o;
            return o = "",
            r = "",
            (pageData.level || 0) >= 2 && (pageData.logoPath ? o = "background: url('" + pageData.logoPath + "') no-repeat center center;background-size: contain;" : (o = "display: none;",
            r = "top: 30%;")),
            a = t(e("pageManagement/formSubmitSuccess.tpl")({
                message: n || "提交成功",
                style: o,
                messagestyle: r
            })),
            a.appendTo(i)
        }
        ,
        dt = function(e, t) {
            var n, i, a, r, l;
            for (i = !0,
            l = e.items,
            a = 0,
            r = l.length; r > a; a++)
                if (n = l[a],
                "input" === n.type && (n.$input || (n.$input = t.find("input[name='" + n.name + "']")),
                n.isRequired && "" === o.str.trim(n.$input.val()))) {
                    i = !1;
                    break
                }
            return i
        }
        ,
        pt = function(e) {
            var n, i, a, r, l, s, d, p, c, u;
            for (l = !0,
            n = null,
            a = null,
            s = 0,
            p = lt.length; p > s; s++)
                if (i = lt[s],
                ("question" === i.type || "title" === i.type) && (a = i.text),
                i.name && "" !== i.name && ("input" === i.type && (a = i.placeholder),
                qt[i.name] = {
                    el: t("input[name='" + i.name + "']"),
                    type: i.type,
                    label: a || i.name
                },
                a && (a = null)),
                i.isRequired && "input" === i.type)
                    for (u = e.items,
                    d = 0,
                    c = u.length; c > d; d++)
                        if (r = u[d],
                        r.name === i.name && "" === o.str.trim(qt[i.name].el.val()))
                            return !1;
            return l
        }
        ,
        Pt = function() {
            var e, t;
            return e = document.getElementsByTagName("head")[0],
            t = document.createElement("script"),
            t.type = "text/javascript",
            t.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
            t.onload = function() {
                return g = !0
            }
            ,
            e.appendChild(t)
        }
        ,
        $t = function(e) {
            var t, n, i, a, o;
            for ("8" === e.state && e.viewcount >= 1e5 && (window.adsenable = !0,
            kt()),
            (null != e ? e.ad : void 0) && (window.adsenable = !0,
            Pt()),
            t = 0,
            o = e.pages,
            i = 0,
            a = o.length; a > i; i++)
                n = o[i],
                n.point = c.create(n.row, n.col),
                Ft[n.point.toString()] = n,
                n.row > t && (t = n.row);
            return e.maxRow = t,
            e.loop && e.pages.length > 1 ? r.data("loop", !0) : void 0
        }
        ,
        Ct = function(e) {
            var t, n;
            return n = "",
            1 !== e.switch_guide && (n = "noSwitch"),
            r.html(function() {
                var i, a, r, o;
                for (r = e.pages,
                o = [],
                i = 0,
                a = r.length; a > i; i++)
                    t = r[i],
                    o.push("<li id='page-" + t.point.toString() + "' class='page " + n + "'><div id='page-inner-" + t.point.toString() + "' class='page-inner'></div></li>");
                return o
            }().join("")),
            pn(o.calPageSize())
        }
        ,
        Kt = null,
        pn = function(e) {
            return Kt && (document.head.removeChild(Kt),
            Kt = null),
            Kt = document.createElement("style"),
            Kt.innerHTML = ".page-inner{        width: " + e.width + "px;       height: " + e.height + "px;     margin-left: -" + e.width / 2 + "px;        margin-top: -" + e.height / 2 + "px;    }",
            document.head.appendChild(Kt)
        }
        ,
        _t = function(e, t, n) {
            var i, a;
            if (!Lt[e])
                return Qt(e),
                i = yt(e),
                a = i.point.toString(),
                Lt[a] = !0,
                Vt(e, function() {
                    return E(e),
                    "function" == typeof t ? t(i) : void 0
                }, n)
        }
        ,
        Qt = function(e) {
            var t, n, i, a, r, s, d, p, c, u, g, m;
            for (r = yt(e),
            r.bgimage && ("Q" === r.bgserver ? -1 !== r.bgimage.indexOf("?imageMogr2") ? r.bgimage += "/q/70" : -1 === r.bgimage.indexOf("?imageView2") && (r.bgimage += "?imageView2/0/q/70") : "A" === r.bgserver && (-1 !== r.bgimage.indexOf("@") ? (a = r.bgimage.lastIndexOf("."),
            -1 !== a && a > r.bgimage.indexOf("@") ? (i = r.bgimage.substring(a),
            r.bgimage = r.bgimage.substring(0, a) + "_70Q" + i + "?crossorigin=1") : r.bgimage += "_70Q?crossorigin=1") : r.bgimage += "@70Q?crossorigin=1")),
            c = r.cmps,
            m = [],
            d = 0,
            p = c.length; p > d; d++)
                n = c[d],
                n.dynamicPath ? (s = n.dynamicPath,
                s = s.replace(/\{shorturl\}/g, null != (u = pageData.shorturl) ? u : pageData.id),
                s = s.replace(/\{id\}/g, pageData.id),
                s = s.replace(/\{userid\}/g, pageData.userid),
                null == n.file && (n.file = {}),
                n.file.url = s) : (null != (g = n.file) ? g.key : void 0) && (n.file.server || (n.file.server = l(n.file.key)),
                n.file.ignorezip === !0 ? n.file.url = n.file.key : "Q" === n.file.server ? (t = ["quality/70"],
                n.file.key = n.file.key.replace("?imageMogr2/auto-orient", ""),
                t.push(n.file.a ? "crop/!" + n.file.a : "auto-orient"),
                n.file.url = t.length ? "" + n.file.key + "?imageMogr2/" + t.join("/") : "" + n.file.key) : "A" === n.file.server ? (t = [],
                n.file.a && t.push(n.file.a + "a"),
                t.push(o.calImageActuralWidth(n.style.width) + "w"),
                t.push("70Q"),
                n.file.url = "" + n.file.key + "@" + t.join("_") + "_1an.src?crossorigin=1") : n.file.url = n.file.key),
                n.link ? (n.link = n.link.replace(/{([^}]+)}/g, function(e, t) {
                    return encodeURIComponent(Ht[t]) || ""
                }),
                m.push(/^https?:/.test(n.link) ? void 0 : n.link = "http://" + n.link)) : m.push(void 0);
            return m
        }
        ,
        Vt = function(e, t, n) {
            var i, a, r, l, s, d, p, c, u;
            for (null == n && (n = {}),
            r = yt(e),
            a = [],
            r.bgimage && a.push(r.bgimage),
            d = r.cmps,
            l = 0,
            s = d.length; s > l; l++)
                i = d[l],
                "image" === i.cmpType && a.push({
                    url: null != i && null != (p = i.file) && null != (c = p.url) ? c.replace(/(http:|https:)/g, "") : void 0,
                    opts: {
                        crossOrigin: !0
                    }
                }),
                "shape" === i.cmpType && a.push({
                    url: null != i && null != (u = i.src) ? u.replace(/(http:|https:)/g, "") : void 0,
                    opts: {
                        crossOrigin: !0
                    }
                });
            return 0 === a.length ? "function" == typeof t ? t(r) : void 0 : o.preloadImages(a, function() {
                return "function" == typeof t ? t(r) : void 0
            }, n)
        }
        ,
        at = {
            1: 12,
            2: 13,
            3: 16,
            4: 18,
            5: 24,
            6: 32,
            7: 48
        },
        Ut = function(e) {
            var t, n, i, a, r, o, l, s, d, p;
            if (a = [],
            i = null,
            e.trigger) {
                for (d = e.trigger,
                r = 0,
                l = d.length; l > r; r++)
                    t = d[r],
                    "go" === t.type && t.go >= 0 && a.push(t.go);
                for (p = [],
                o = 0,
                s = a.length; s > o; o++)
                    n = a[o],
                    n >= 0 && "" !== n && n <= pageData.maxRow ? (i = c.create(n, 0),
                    p.push(Lt[i] ? void 0 : _t(i))) : p.push(void 0);
                return p
            }
        }
        ,
        St = function(e) {
            var t, n, i, a, r, o, l, s, d;
            if (a = [],
            e.trigger) {
                for (d = e.trigger,
                r = 0,
                l = d.length; l > r; r++)
                    if (n = d[r],
                    "toggle" === n.type && n.toggle)
                        for (t = JSON.parse(n.toggle),
                        o = 0,
                        s = t.length; s > o; o++)
                            i = t[o],
                            0 === i.type && a.push(i.tid);
                return a
            }
        }
        ,
        Q = {},
        ct = [],
        et = {},
        X = {},
        Y = function(e) {
            var n, i;
            if (!X[e])
                return X[e] = !0,
                n = {},
                i = JSON.stringify(n),
                t.post("https://fds.so/v2/url/" + e, i, function(t) {
                    return et[e] = t.url
                })
        }
        ,
        E = function(e) {
            var n, i, a, r, l, s, d, p, c, u, g, m, f, h, v, y, w, S, b, x, D, I, E, W, G;
            if (!Q[e]) {
                if (i = vt(e),
                n = i.find(".page-inner"),
                u = yt(e),
                c = [],
                v = [],
                f = [],
                m = [],
                g = "",
                u.bgimage && i.css({
                    backgroundImage: "url(" + u.bgimage + ")"
                }),
                u.bgcol && i.css({
                    backgroundColor: u.bgcol
                }),
                n.html(function() {
                    var e, t, n, i;
                    for (n = u.cmps,
                    i = [],
                    e = 0,
                    t = n.length; t > e; e++)
                        switch (l = n[e],
                        l.id = (l.id || ut()) + "",
                        k[l.id] = l,
                        ("image" === l.cmpType || "text" === l.cmpType || "shape" === l.cmpType) && l.trigger && (Ut(l),
                        r = St(l),
                        v = v.concat(r)),
                        l.cmpType) {
                        case "image":
                            i.push(q(l));
                            break;
                        case "text":
                            i.push(L(l));
                            break;
                        case "btn":
                            i.push(P(l));
                            break;
                        case "form":
                            i.push(z(l));
                            break;
                        case "video":
                            i.push($(l));
                            break;
                        case "onecall":
                            i.push(V(l));
                            break;
                        case "fingerprint":
                            i.push(N(l));
                            break;
                        case "applink":
                            l.appid || C(l),
                            a = l.appid,
                            Y(a),
                            i.push(C(l));
                            break;
                        case "map":
                            c.push(l),
                            i.push(U(l));
                            break;
                        case "bless":
                            i.push(j(l));
                            break;
                        case "praise":
                            i.push(_(u, l));
                            break;
                        case "ginput":
                            h = J(l),
                            g += h.phCss,
                            i.push(h.tpl);
                            break;
                        case "gsubmit":
                            i.push(F(l));
                            break;
                        case "gselect":
                            l.pageid = u.id,
                            m.push(l),
                            i.push(A(l));
                            break;
                        case "gstar":
                            i.push(K(l));
                            break;
                        case "gchoose":
                            i.push(M(l));
                            break;
                        case "shape":
                            f.push(l),
                            i.push(B(l));
                            break;
                        case "adsgoogle":
                            i.push(T(l));
                            break;
                        case "google":
                            i.push(R(l));
                            break;
                        case "adsImg":
                            i.push(O(l));
                            break;
                        default:
                            i.push("")
                        }
                    return i
                }().join("")),
                o.appendStyle(g),
                Q[e] = !0,
                v)
                    for (S = 0,
                    I = v.length; I > S; S++)
                        d = v[S],
                        s = t(".cmp[data-tid='" + d + "']"),
                        s && s.length > 0 && s.hide();
                for (y = function(e) {
                    return t("#cmp-" + e.id).tap(function() {
                        return o.showBigMap(e.coordinate)
                    })
                }
                ,
                b = 0,
                E = c.length; E > b; b++)
                    l = c[b],
                    y(l);
                for (w = function(e) {
                    var n, i, a;
                    return n = t("#cmp-" + e.id).find(".cmp-inner"),
                    i = e.fill,
                    t.ajax({
                        url: null != e && null != (a = e.src) ? a.replace(/(http:|https:)/g, "") : void 0,
                        dataType: "html",
                        success: function(e) {
                            var a, r, o;
                            return n.html(e),
                            r = n.find("svg"),
                            r.attr({
                                width: "100%",
                                height: "100%"
                            }),
                            null != (o = r[0]) && o.setAttribute("preserveAspectRatio", "none"),
                            a = r.find("path"),
                            a.each(function(e, n) {
                                var a;
                                return (a = i[e]) ? t(n).attr("fill", a) : void 0
                            })
                        }
                    })
                }
                ,
                x = 0,
                W = f.length; W > x; x++)
                    l = f[x],
                    w(l);
                for (D = 0,
                G = m.length; G > D; D++)
                    l = m[D],
                    Yt(l);
                return n.find("font").each(function(e, t) {
                    var n;
                    return t.getAttribute("size") && (n = at[t.size]) ? (t.style.fontSize = n / (window.defaultWidth / window.remSlice) + "rem",
                    t.removeAttribute("size")) : void 0
                }),
                u.needlitads === !0 ? (p = ht(),
                i.append(p)) : void 0
            }
        }
        ,
        W = 1,
        ut = function() {
            return W += 1,
            W - 1
        }
        ,
        bt = function(e) {
            var t, n, i, a;
            if (n = "",
            e) {
                for (i = 0,
                a = e.length; a > i; i++)
                    t = e[i],
                    "none" !== t.type && t.tips && (n = "trigger-tips"),
                    "toggle" !== t.type || "" !== t.toggle && "[]" !== t.toggle || (n = ""),
                    "link" === t.type && "" === t.link && (n = ""),
                    "go" === t.type && ("" === t.go || t.go > pageData.maxRow) && (n = "");
                return n
            }
        }
        ,
        J = function(e) {
            var t, n, i, a;
            return n = o.calOuterStyle(e),
            t = o.calInnerStyle(e),
            i = e.text,
            a = e.inptype,
            e.required && (i += "(必填)"),
            "name" === a && (a = "text"),
            {
                phCss: "            .cmp-" + e.tid + "::-webkit-input-placeholder {             color: " + (e.style.color || "black") + ";          }           .cmp-" + e.tid + "::-moz-placeholder {              color: " + (e.style.color || "black") + ";          }           .cmp-" + e.tid + "::-moz-placeholder {              color: " + (e.style.color || "black") + ";          }           .cmp-" + e.tid + "::-ms-input-placeholder {             color: " + (e.style.color || "black") + ";          }       ",
                tpl: "<div          id='cmp-" + e.id + "'           data-tid='" + e.tid + "'            class='cmp ginput'          style='" + o.formatStyleJSONToString(n) + "'>           <input              name='" + e.tid + "'                class='cmp-inner cmp-" + e.tid + "'             style='" + o.formatStyleJSONToString(t) + "'                placeholder='" + i + "'             type='" + a + "'            />      </div>"
            }
        }
        ,
        F = function(e) {
            var t, n;
            return n = o.calOuterStyle(e),
            t = o.calInnerStyle(e),
            "<div id='cmp-" + e.id + "'     data-tid='" + e.tid + "'        class='cmp gsubmit'     style='" + o.formatStyleJSONToString(n) + "'>       <button data-id='cmp-" + e.id + "' class='cmp-inner j-gsubmit' style='" + o.formatStyleJSONToString(t) + "'>" + tt(e.text) + "</button> </div>"
        }
        ,
        wt = function(e, t) {
            var n, i, a, r, l, s, d, p, c, u, g;
            if (i = "",
            l = "",
            s = "",
            a = "",
            p = "",
            d = o.selectStyle(e.style),
            n = 1 === t.label.length ? "single" : "multi",
            t.options) {
                for (l += "<option value=''>请选择" + tt(t.label[0]) + "</option>",
                g = t.options,
                c = 0,
                u = g.length; u > c; c++)
                    r = g[c],
                    a = tt(r.name),
                    p = tt(r.value),
                    l += "<option value='" + p + "'>" + a + "</option>";
                i += "<select class='" + n + " j-first-sel' style='" + d + "' name='" + e.tid + "'>" + l + "</select>"
            }
            return 2 === t.label.length && (s = "<option value=''>请选择" + tt(t.label[1]) + "</option>",
            i += "<select class='" + n + " j-second-sel' style='" + d + "' name='" + e.tid + "'>" + s + "</select>"),
            i
        }
        ,
        tt = function(e) {
            return e ? e.replace(/</g, "&lt;").replace(/>/g, "&gt;") : e
        }
        ,
        Yt = function(e) {
            var n, i, a;
            return i = "",
            a = "",
            e.originlink ? void t.ajax({
                type: "GET",
                url: e.originlink,
                dataType: "jsonp",
                success: function(n) {
                    var r;
                    return i = "",
                    n ? (a = n,
                    i = wt(e, a),
                    r = t("#cmp-" + e.id + " .cmp-inner"),
                    r.html(i),
                    2 === a.label.length ? v(r, a) : void 0) : void 0
                }
            }) : (a = JSON.parse(e.selector),
            i = wt(e, a),
            n = t("#cmp-" + e.id + " .cmp-inner"),
            n.html(i),
            2 === a.label.length ? v(n, a) : void 0)
        }
        ,
        v = function(e, n) {
            return e.on("change", ".j-first-sel", function() {
                var i, a, r, o, l, s, d, p, c, u, g, m, f;
                for (d = t(this).val(),
                s = e.find(".j-second-sel"),
                i = null,
                a = "",
                o = "",
                p = "",
                f = n.options,
                c = 0,
                g = f.length; g > c; c++)
                    if (r = f[c],
                    r.value === d) {
                        i = r.children;
                        break
                    }
                if (a += "<option value=''>请选择" + n.label[1] + "</option>",
                i)
                    for (u = 0,
                    m = i.length; m > u; u++)
                        l = i[u],
                        o = tt(l.name),
                        p = tt(l.value),
                        a += "<option value='" + p + "'>" + o + "</option>";
                return s.html(a)
            })
        }
        ,
        A = function(e) {
            var t, n;
            return n = o.calOuterStyle(e),
            t = o.calInnerStyle(e),
            "<div       id='cmp-" + e.id + "'       data-tid='" + e.tid + "'        class='cmp gselect'     style='" + o.formatStyleJSONToString(n) + "'>       <div class='cmp-inner'>     </div>  </div>"
        }
        ,
        K = function(e) {
            var t, n, i, a, r;
            for (a = o.calOuterStyle(e),
            n = o.calInnerStyle(e),
            t = "",
            i = r = 1; 5 >= r; i = ++r)
                t += "<i class='iconfont icon-" + e.icontype + " j-gather-star' data-index='" + i + "' data-parent='" + e.tid + "' style='font-size: " + n["font-size"] + "px;'></i>";
            return "<div        id='cmp-" + e.id + "'       data-tid='" + e.tid + "'        class='cmp gstar'       style='" + o.formatStyleJSONToString(a) + "'>       <div class='cmp-inner' style='" + o.formatStyleJSONToString(n) + "'>            <div class='star-group j-star-group'>               <input type='hidden' value='' name='" + e.tid + "'/>                " + t + "           </div>      </div>  </div>"
        }
        ,
        gt = function(e) {
            var t, n, i, a, r, o, l, s, d;
            for (n = "",
            a = "",
            o = "",
            "checkbox" === e.answertype && (t = "choose-checkbox"),
            (e.answertitle || e.nickname) && (e.required === !0 && (a = "（必填）"),
            o = "" + (e.answertitle || e.nickname) + a,
            n += "<div class='choose-title' style='color:" + e.style.color + ";'>" + o + "</div>"),
            d = e.item,
            i = l = 0,
            s = d.length; s > l; i = ++l)
                r = d[i],
                n += "<div class='field choose-item " + t + "'>                         <div class='checkbox radio'>                                <input type='" + e.answertype + "' class='hidden' id='" + e.tid + "-" + i + "' name='" + e.tid + "' value='" + r + "'/>                             <label for='" + e.tid + "-" + i + "'>" + r + "</label>                          </div>                      </div>";
            return n
        }
        ,
        M = function(e) {
            var t, n, i;
            return i = o.calOuterStyle(e),
            t = o.calInnerStyle(e),
            n = gt(e),
            "<div       id='cmp-" + e.id + "'       data-tid='" + e.tid + "'        class='cmp gchoose'     style='" + o.formatStyleJSONToString(i) + "'>       <div class='cmp-inner' style='" + o.formatStyleJSONToString(t) + "'>            " + n + "       </div>  </div>"
        }
        ,
        q = function(e) {
            var t, n, i, a, r, l, s, d;
            return (null != (l = e.file) ? l.url : void 0) ? (i = o.calOuterStyle(e),
            n = o.calInnerStyle(e),
            n.position = "absolute",
            a = e.trigger ? bt(e.trigger) : "",
            r = parseInt(parseFloat(i.width) * o.getPageSize().width / 100),
            t = parseInt(parseInt(i.height) * o.getPageSize().height / 100),
            "<div id='cmp-" + e.id + "'             data-tid='" + e.tid + "'                class='cmp image " + a + "'             style='" + o.formatStyleJSONToString(i) + "'                width='" + r + "'               height='" + t + "'>     <img                class='cmp-inner'               src='" + (null != e && null != (s = e.file) && null != (d = s.url) ? d : void 0) + "'                style='" + o.formatStyleJSONToString(n) + "'                width='" + r + "'               height='" + t + "'              " + (o.shouldAddCORS(e.file.url) ? 'crossorigin="anonymous"' : "") + "              ondragstart='return false;'     />  </div>") : ""
        }
        ,
        B = function(e) {
            var t, n, i, a, r;
            return i = o.calOuterStyle(e),
            n = o.calInnerStyle(e),
            a = e.trigger ? bt(e.trigger) : "",
            r = parseInt(parseFloat(i.width) * o.getPageSize().width / 100),
            t = parseInt(parseInt(i.height) * o.getPageSize().height / 100),
            "<div id='cmp-" + e.id + "'             data-tid='" + e.tid + "'                class='cmp shape " + a + "'             style='" + o.formatStyleJSONToString(i) + "'                width='" + r + "'               height='" + t + "'>         <div class='cmp-inner'              style='" + o.formatStyleJSONToString(n) + "'                width='" + r + "'               height='" + t + "'>         </div>  </div>"
        }
        ,
        L = function(e) {
            var n, i, a, r, l, s;
            return e.text ? (r = o.calOuterStyle(e),
            i = o.calInnerStyle(e),
            a = null,
            l = e.trigger ? bt(e.trigger) : "",
            e.style["line-height"] && (a = e.style["line-height"] / (window.defaultWidth / window.remSlice) + "rem"),
            t.extend(i, {
                color: e.style.color || "black",
                "line-height": a,
                "text-align": e.style["text-align"] || null
            }),
            "image" === e.textType ? "<div                      id='cmp-" + e.id + "'                       data-tid='" + e.tid + "'                        class='cmp text " + l + "'                      style=\"" + o.formatStyleJSONToString(r) + "\">             <div class='cmp-inner'                      style=\"" + o.formatStyleJSONToString(i) + "\"              >                   <img src='" + (null != e && null != (s = e.imageLink) ? s.replace(/(http:|https:)/g, "") : void 0) + "' />              </div>          </div>" : (n = t("<div>" + e.text + "</div>"),
            n.find("div,span,font").each(function() {
                var e, n, i;
                return n = t(this),
                e = n.css("fontSize"),
                "-webkit-xxx-large" === e && (e = 48),
                i = parseInt(e, 10),
                n.css("fontSize", i / (window.defaultWidth / window.remSlice) + "rem")
            }),
            e.text = n.html(),
            n = null,
            "<div                       id='cmp-" + e.id + "'                       data-tid='" + e.tid + "'                        class='cmp text " + l + "'                      style=\"" + o.formatStyleJSONToString(r) + "\">                 <div class='cmp-inner'                          style=\"" + o.formatStyleJSONToString(i) + '"                   >' + e.text + "</div>               </div>")) : ""
        }
        ,
        P = function(e) {
            var t, n;
            return n = o.calOuterStyle(e),
            t = o.calInnerStyle(e),
            "<div   id='cmp-" + e.id + "'   data-tid='" + e.tid + "'    class='cmp btn' style='" + o.formatStyleJSONToString(n) + "'>       <button class='cmp-inner' style='" + o.formatStyleJSONToString(t) + "; overflow:hidden;'>" + escapeHTML(e.text) + "</button>    </div>"
        }
        ,
        C = function(e) {
            var t, n;
            return n = o.calOuterStyle(e),
            t = o.calInnerStyle(e),
            "<div   id='cmp-" + e.id + "'   data-tid='" + e.tid + "'    class='cmp btn applink' style='" + o.formatStyleJSONToString(n) + "'>       <button class='cmp-inner' style='" + o.formatStyleJSONToString(t) + "; overflow:hidden;'>" + e.text + "</button>    </div>"
        }
        ,
        st = e("pageManagement/form.tpl"),
        z = function(e) {
            var t, n, i, a, r, l, s, d;
            for (r = o.calOuterStyle(e),
            i = o.calInnerStyle(e),
            t = o.calStyle(e.btnStyle),
            n = !1,
            d = e.items,
            l = 0,
            s = d.length; s > l; l++)
                a = d[l],
                a.isRequired && (n = !0);
            return lt = lt.concat(e.items),
            st(e, {
                C: o,
                outerStyle: r,
                innerStyle: i,
                btnStyle: t,
                disabled: n
            })
        }
        ,
        cn = e("pageManagement/video.tpl"),
        $ = function(e) {
            var t, n, i, a;
            return (null != (i = e.video) ? i.embed : void 0) ? (n = o.calOuterStyle(e),
            t = o.calInnerStyle(e),
            window.isPC && (null != (a = e.video) ? a.swf : void 0) && (e.video.embed = e.video.swf),
            "https:" === location.protocol && (e.video.embed = e.video.embed.replace(/^(http:)/i, location.protocol)),
            cn(e, {
                C: o,
                outerStyle: n,
                innerStyle: t
            })) : ""
        }
        ,
        Jt = e("pageManagement/oneCall.tpl"),
        Rt = e("pageManagement/oneCallPic.tpl"),
        V = function(e) {
            var t, n;
            switch (n = o.calOuterStyle(e),
            t = o.calInnerStyle(e),
            e.version) {
            case "pic":
                return Rt(e, {
                    C: o,
                    outerStyle: n,
                    innerStyle: t
                });
            default:
                return Jt(e, {
                    C: o,
                    outerStyle: n,
                    innerStyle: t
                })
            }
        }
        ,
        nt = e("pageManagement/fingerprint.tpl"),
        it = e("pageManagement/fingerprintwhite.tpl"),
        N = function(e) {
            switch (e.version) {
            case "white":
                return it(e, {
                    C: o,
                    outerStyle: o.calOuterStyle(e),
                    innerStyle: o.calInnerStyle(e)
                });
            default:
                return nt(e, {
                    C: o,
                    outerStyle: o.calOuterStyle(e),
                    innerStyle: o.calInnerStyle(e)
                })
            }
        }
        ,
        U = function(e) {
            var t, n, i, a;
            return i = o.calOuterStyle(e),
            n = o.calInnerStyle(e),
            a = parseInt(parseFloat(i.width) * o.getPageSize().width / 100),
            t = parseInt(parseInt(i.height) * o.getPageSize().height / 100),
            "<div id='cmp-" + e.id + "'             data-tid='" + e.tid + "'                class='cmp map'             style='" + o.formatStyleJSONToString(i) + "'                width='" + a + "'               height='" + t + "'>     <img                class='cmp-inner'               src='http://restapi.amap.com/v3/staticmap?location=" + e.coordinate + "&zoom=16&size=" + a + "*" + t + "&markers=mid,,A:" + e.coordinate + "&key=ee95e52bf08006f63fd29bcfbcf21df0'              style='" + o.formatStyleJSONToString(n) + "'                width='" + a + "'               height='" + t + "'              ondragstart='return false;'     />  </div>"
        }
        ,
        y = e("pageManagement/blessing.tpl"),
        j = function(e) {
            var n, i;
            return i = o.calOuterStyle(e),
            n = o.calInnerStyle(e),
            t.extend(n, {
                color: e.style.color || "black",
                "line-height": e.style["line-height"] ? e.style["line-height"] / (window.defaultWidth / window.remSlice) + "rem" || null : void 0,
                "text-align": e.style["text-align"] || null,
                "word-break": e.style["word-break"] || null,
                overflow: e.style.overflow || null
            }),
            y(e, {
                C: o,
                outerStyle: i,
                innerStyle: n
            })
        }
        ,
        I = function(e) {
            var t, n, i, a, r, o, l;
            for (l = [],
            r = 0,
            o = e.length; o > r; r++)
                t = e[r],
                n = t.coordinate.split(","),
                i = new AMap.Map("cmp-" + t.id + "-inner",{
                    resizeEnable: !0,
                    layers: [new AMap.TileLayer],
                    view: new AMap.View2D({})
                }),
                i.plugin(["AMap.ToolBar"], function() {
                    var e;
                    return e = new AMap.ToolBar,
                    i.addControl(e)
                }),
                a = new AMap.Marker({
                    map: i,
                    position: n,
                    icon: "http://webapi.amap.com/images/0.png"
                }),
                i.setCenter(n),
                l.push(i.setFitView());
            return l
        }
        ,
        _ = function(e, t) {
            var n, i, a, r, l, s, d;
            return l = o.calOuterStyle(t),
            r = o.calInnerStyle(t),
            i = "",
            a = "",
            t.page = e.id,
            "icon" === t.content.state && (i = "icon-" + t.content.icon),
            "img" === t.content.state && (n = "width: " + t.content.size + "px;height: " + t.content.size + "px;",
            a = "<img src='" + (null != t && null != (s = t.content) && null != (d = s.img) ? d.replace(/(http:|https:)/g, "") : void 0) + "' style='" + n + "'/>"),
            "<div id='cmp-" + t.id + "'             data-tid='" + t.tid + "'                class='cmp praise'              style='" + o.formatStyleJSONToString(l) + "'>       <div class='cmp-inner " + t.layout + "' style='" + o.formatStyleJSONToString(r) + "font-size:" + t.content.size + "px;'>            <i class='iconfont icon-v " + i + "'>               " + a + "           </i>            <span class='j-icon-text icon-text' style='font-size:" + .5 * t.content.size + "px;line-height: " + t.content.size + "px;'>0</span>     </div>  </div>"
        }
        ,
        T = function(e) {
            var t, n;
            return n = o.calOuterStyle(e),
            t = o.calInnerStyle(e),
            "<div id='cmp-" + e.id + "'             data-tid='" + e.tid + "'                class='cmp ads-google'              style='" + o.formatStyleJSONToString(n) + "'>       <div class='cmp-inner' style='" + o.formatStyleJSONToString(t) + "'>            <ins class='adsbygoogle'            style='display:block'               data-ad-client='" + e.client + "'               data-ad-slot='" + e.slot + "'               data-ad-format='auto'>          </ins>      </div>  </div>"
        }
        ,
        R = function(e) {
            return "<div id='cmp-" + e.id + "'      data-tid='" + e.tid + "'        class='cmp small-google j-small-google'     style='width:300px;height:600px;top:50%;left:50%;margin-left:-150px;margin-top:-300px;' >       <div class='cmp-inner tz-iframe-container'          style='display: flex;align-items: center;justify-content: center'       >           <ins class='adsbygoogle'            style='display:inline-block;width:300px;height:600px;'              data-ad-client='" + e.client + "'               data-ad-slot='" + e.slot + "'               data-ad-format='auto'>          </ins>      </div>  </div>"
        }
        ,
        O = function(e) {
            return "<div data-id='cmp-" + e.id + "' class='ads-img j-ads-img'>      <a          class='cmp-inner ads-img-inner ads-inner-" + e.index + "'           style='background:url(" + e.ad_imgpath + ");background-size:100% 100%;'         href='" + e.ad_link + "'        >       </a>    </div>"
        }
        ,
        Et = function() {
            var e, t, n, i, a;
            for (a = [],
            e = i = 1; Nt >= 1 ? Nt >= i : i >= Nt; e = Nt >= 1 ? ++i : --i)
                t = c.create(Z.x + e, Z.y),
                yt(t) && !Lt[t.toString()] && _t(t),
                n = c.create(Z.x, Z.y + e),
                a.push(yt(n) && !Lt[n.toString()] ? _t(n) : void 0);
            return a
        }
        ,
        G = {
            next: "pt-page-moveToTop",
            prev: "pt-page-moveToBottom",
            left: "pt-page-moveToLeft",
            right: "pt-page-moveToRight"
        },
        on = {
            next: "pt-page-moveFromBottom",
            prev: "pt-page-moveFromTop",
            left: "pt-page-moveFromRight",
            right: "pt-page-moveFromLeft"
        },
        H = {
            next: "Up",
            prev: "Down",
            left: "Left",
            right: "Right"
        },
        ln = {
            next: "Down",
            prev: "Up",
            left: "Left",
            right: "Right"
        },
        Xt = function(t) {
            var n, i, a, r, o;
            for (r = t.cmps,
            o = [],
            i = 0,
            a = r.length; a > i; i++)
                n = r[i],
                n.effect && o.push(e.async(["effect"], function(e) {
                    return e.destroy(n, document.getElementById("cmp-" + n.id))
                }));
            return o
        }
        ,
        en = function(e) {
            var n, i, a, r, o, l, s;
            for (l = e.cmps,
            s = [],
            r = 0,
            o = l.length; o > r; r++)
                i = l[r],
                "video" === i.cmpType ? (n = t("#cmp-" + i.id),
                a = n.html(),
                s.push(n.html("").html(a))) : s.push(void 0);
            return s
        }
        ,
        f = null,
        an = function() {
            return pageData.timeinterval ? f = setTimeout(function() {
                return zt()
            }, 1e3 * pageData.timeinterval) : void 0
        }
        ,
        b = function() {
            return f ? clearTimeout(f) : void 0
        }
        ,
        w = function(e, n) {
            var i, a, r, o, l, s, d, p, u, f, h, v, y, S, x, k, D;
            if (v = pageData.pages.length,
            prehidePage && prehidePage.indexOf(e.x) >= 0)
                return "next" === n && e.x < v - 1 && w(c.create(e.x + 1, 0), "next"),
                void ("prev" === n && e.x > 0 && w(c.create(e.x - 1, 0), "prev"));
            if (!m && yt(e.toString())) {
                if (!Lt[e])
                    return Bt.push(e.x),
                    void _t(e, function() {
                        return 0 === Bt.indexOf(e.x) ? (dn.go(e.x),
                        Bt.shift()) : void 0
                    });
                if (d = yt(Z),
                f = yt(e),
                d.needToCheckAllowMoveToNext)
                    for (x = d.cmps,
                    y = 0,
                    S = x.length; S > y; y++)
                        if (s = x[y],
                        s.notAllowMoveToNext)
                            return;
                if (b(),
                m = !0,
                l = f["in"] || pageData["in"] || "move",
                p = "pt-page-" + l + "Out" + H[n],
                h = "pt-page-" + l + "In" + ln[n] + " pt-page-onTop",
                i = vt(Z),
                a = vt(e),
                en(d),
                Xt(d),
                Ot(f),
                a.show().addClass(h),
                i.addClass(p),
                f.needads === !0 && g)
                    try {
                        sn()
                    } catch (T) {
                        u = T,
                        console.log(u)
                    }
                if ((null != f ? f.ad : void 0) && g)
                    try {
                        sn()
                    } catch (T) {
                        u = T,
                        console.log(u)
                    }
                if (setTimeout(function() {
                    return m = !1,
                    a.removeClass(h).addClass("current"),
                    i.removeClass("current " + p),
                    i.hide(),
                    Z = e,
                    Et(),
                    t(document).trigger("changedTo", [e]),
                    an()
                }, 800),
                r = window.fiboSDK || window.dataSDK,
                r && r.switchPage(Z.x + 1, e.x + 1, pageData.pages.length),
                window.adsenable === !0 && 1 === e.x && "function" == typeof r.pushView && r.pushView("UqAFqbzv", "4a58fea8-1085-4467-b829-2bc62d6936e3"),
                window.adsenable === !0 && e.x === (null != (k = pageData.pages) ? k.length : void 0) - 1 && "function" == typeof r.pushView && r.pushView("UqAFqbzv", "4a58fea8-1085-4467-b829-2bc62d6936e2"),
                null != (null != f ? f.ad : void 0)) {
                    if (null != f && null != (D = f.ad) ? D.hasView : void 0)
                        return;
                    return f.ad.hasView = !0,
                    o = f.ad,
                    "function" == typeof r.pushView ? r.pushView(o.pfid, o.id) : void 0
                }
            }
        }
        ,
        zt = function() {
            return w(c.create(Z.x + 1 > pageData.maxRow && pageData.loop && pageData.pages.length > 1 ? 0 : Z.x + 1, 0), "next")
        }
        ,
        Wt = function() {
            return w(c.create(Z.x - 1 < 0 && pageData.loop && pageData.pages.length > 1 ? pageData.maxRow : Z.x - 1, 0), "prev")
        }
        ,
        It = function() {
            return w(c.create(Z.x, Z.y + 1), "left")
        }
        ,
        tn = function() {
            return w(c.create(Z.x, Z.y - 1), "right")
        }
        ,
        n.exports = {
            init: xt,
            next: zt,
            prev: Wt,
            left: It,
            right: tn,
            go: dn.go
        }
    }
    ).call(this)
});
;define("zepto/touch", function(e) {
    (function() {
        var t, n, o, i, r, u, l, a, c, p, s, g, d, f, v = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e)
                    return t;
            return -1
        }
        ;
        t = e("zepto"),
        d = {},
        f = null,
        g = null,
        s = null,
        i = null,
        c = null,
        a = 750,
        p = function(e, t, n, o) {
            return Math.abs(e - t) >= Math.abs(n - o) ? e - t > 0 ? "Left" : "Right" : n - o > 0 ? "Up" : "Down"
        }
        ,
        l = function() {
            return c = null,
            d.last ? (d.el.trigger("longTap"),
            d = {}) : void 0
        }
        ,
        o = function() {
            return c && clearTimeout(c),
            c = null
        }
        ,
        n = function() {
            return f && clearTimeout(f),
            g && clearTimeout(g),
            s && clearTimeout(s),
            c && clearTimeout(c),
            f = g = s = c = null,
            d = {}
        }
        ,
        u = function() {
            return ("touch" === event.pointerType || event.pointerType === event.MSPOINTER_TYPE_TOUCH) && event.isPrimary
        }
        ,
        r = function(e, t) {
            return e.type === "pointer" + t || e.type.toLowerCase() === "mspointer" + t
        }
        ,
        t(function() {
            var e, h, m, T, w, y, M, x, b, P, S;
            return P = null,
            e = null,
            T = null,
            S = null,
            h = 0,
            m = 0,
            b = !1,
            x = !1,
            M = function(t, n) {
                return f && clearTimeout(f),
                P = Date.now(),
                e = P - (d.last || P),
                e > 0 && 250 >= e && (d.isDoubleTap = !0),
                d.last = P,
                c = setTimeout(l, a),
                i && n ? i.addPointer(t.pointerId) : void 0
            }
            ,
            y = function() {
                return h += Math.abs(d.x1 - d.x2),
                m += Math.abs(d.y1 - d.y2),
                d.x2 && Math.abs(d.x1 - d.x2) > 30 || d.y2 && Math.abs(d.y1 - d.y2) > 30 ? (s = setTimeout(function() {
                    return d.el ? (d.el.trigger("swipe"),
                    d.el.trigger("swipe" + p(d.x1, d.x2, d.y1, d.y2))) : void 0
                }, 0),
                d.swiped = !0) : void 0
            }
            ,
            w = function() {
                return d.swiped ? d = {} : "last"in d && (30 > h && 30 > m ? (g && clearTimeout(g),
                g = setTimeout(function() {
                    var e;
                    return e = t.Event("tap"),
                    e.cancelTouch = n,
                    d.el.trigger(e),
                    d.isDoubleTap ? (d.el && d.el.trigger("doubleTap"),
                    d = {}) : f = setTimeout(function() {
                        return f = null,
                        d.el && d.el.trigger("singleTap"),
                        d = {}
                    }, 250)
                }, 0)) : d = {}),
                h = m = 0
            }
            ,
            v.call(window, "MSGesture") >= 0 && (i = new MSGesture,
            i.target = document.body),
            t(document).on("MSGestureEnd", function(e) {
                var t;
                return t = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null,
                t && d.el ? (d.el.trigger("swipe"),
                d.el.trigger("swipe" + t)) : void 0
            }).on("touchstart MSPointerDown pointerdown", function(e) {
                clearInterval(window.__autoplay.setInter)
                return !(S = r(e, "down")) || u(e) ? (T = S ? e : e.touches[0],
                e.touches && 1 === e.touches.length && d.x2 && (d.x2 = d.y2 = void 0),
                d.el = t("tagName"in T.target ? T.target : T.target.parentNode),
                d.x1 = T.pageX,
                d.y1 = T.pageY,
                x = !0,
                M(e, S)) : void 0
            }).on("mousedown", function(e) {
                return x ? void 0 : (b = !0,
                d.el = t("tagName"in e.target ? e.target : e.target.parentNode),
                d.x1 = e.pageX,
                d.y1 = e.pageY,
                M(e))
            }).on("touchmove MSPointerMove pointermove", function(e) {
                return (S = r(e, "move")) && !u(e) || d.swiped ? void 0 : (o(),
                T = S ? e : e.touches[0],
                d.x2 = T.pageX,
                d.y2 = T.pageY,
                x = !0,
                y(e))
            }).on("mousemove", function(e) {
                return !x && b ? (d.x2 = e.pageX,
                d.y2 = e.pageY,
                y(e)) : void 0
            }).on("touchend MSPointerUp pointerup", function(e) {
                window.__autoplay();
                return !(S = r(e, "up")) || u(e) ? (o(),
                w(),
                x = !0) : void 0
            }).on("mouseup", function() {
                return x ? void 0 : (b = !1,
                o(),
                w())
            }).on("touchcancel MSPointerCancel pointercancel", n),
            t.map(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"], function(e) {
                return t.fn[e] = function(t) {
                    return this.on(e, t)
                }
            })
        })
    }
    ).call(this)
});
;define("bounceFix", function(e, t, n) {
    var r;
    r = function() {
        function e(e, t, n, r) {
            this.el = e,
            this.eventName = t,
            this.handler = n,
            this.context = r,
            this.add()
        }
        return e.prototype._handler = function(e, t) {
            var n = {};
            for (var r in e)
                n[r] = e[r];
            n.stopPropagation = function() {
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            }
            ,
            n.preventDefault = function() {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }
            ,
            this.handler.call(this.context || t, n)
        }
        ,
        e.prototype.add = function() {
            var e = this;
            e.cachedHandler = function(t) {
                e._handler.call(e, t, this)
            }
            ,
            e.el.addEventListener(e.eventName, e.cachedHandler, !1)
        }
        ,
        e.prototype.remove = function() {
            this.el.removeEventListener(this.eventName, this.cachedHandler)
        }
        ,
        e
    }();
    var o;
    o = function() {
        var e = {};
        return e.getTargetedEl = function(e, t) {
            for (; ; ) {
                if (e.classList.contains(t))
                    break;
                if (!(e = e.parentElement))
                    break
            }
            return e
        }
        ,
        e.isScrollable = function(e) {
            return e.scrollHeight > e.offsetHeight
        }
        ,
        e.scrollToEnd = function(e) {
            var t = e.scrollTop
              , n = e.offsetHeight
              , r = e.scrollHeight;
            0 >= t && (e.scrollTop = 1),
            t + n >= r && (e.scrollTop = r - n - 1)
        }
        ,
        e
    }();
    var i;
    i = function(e, t) {
        var n = function(t) {
            if (!(this instanceof n))
                return new n(t);
            if (!t)
                throw new Error('"className" argument is required');
            this.className = t,
            this.startListener = new e(document,"touchstart",this.touchStart,this),
            this.endListener = new e(document,"touchend",this.touchEnd,this)
        };
        return n.prototype.touchStart = function(n) {
            var r = t.getTargetedEl(n.target, this.className);
            return r && t.isScrollable(r) ? t.scrollToEnd(r) : void (r && !this.moveListener && (this.moveListener = new e(r,"touchmove",this.touchMove,this)))
        }
        ,
        n.prototype.touchMove = function(e) {
            e.preventDefault()
        }
        ,
        n.prototype.touchEnd = function() {
            this.moveListener && (this.moveListener.remove(),
            delete this.moveListener)
        }
        ,
        n.prototype.remove = function() {
            this.startListener.remove(),
            this.endListener.remove()
        }
        ,
        n
    }(r, o);
    var s;
    s = function(e) {
        var t = {
            cache: {}
        };
        return t.add = function(t) {
            this.cache[t] || (this.cache[t] = new e(t))
        }
        ,
        t.remove = function(e) {
            this.cache[e] && (this.cache[e].remove(),
            delete this.cache[e])
        }
        ,
        t
    }(i),
    n.exports = s
});
;define("slideProgress", function(e, r, n) {
    (function() {
        var r, s, i, o, t, l, a;
        a = 0,
        r = e("zepto"),
        i = null,
        s = null,
        t = function() {
            return a = pageData.pages.length,
            i = r("#slide-progress"),
            l(),
            s = i.children(),
            o(),
            r(document).on("changedTo", function(e, r) {
                return o(r.x)
            })
        }
        ,
        o = function(e) {
            return s.removeClass("current").eq(e).removeClass("hidden").addClass("current")
        }
        ,
        l = function() {
            var e, n, s, o, t;
            if (prehidePage) {
                for (e = "",
                n = t = 0; a >= 0 ? a > t : t > a; n = a >= 0 ? ++t : --t)
                    e += -1 === prehidePage.indexOf(n) ? '<li class="progress-dot">' : '<li class="progress-dot hidden">';
                i.html(e)
            } else
                i.html(Array(a + 1).join('<li class="progress-dot">'));
            return s = i.height(),
            o = r("#wrapper").height(),
            i.css("marginTop", 0 - s / window.rem / 2 + "rem"),
            s > o ? i.css({
                height: o,
                marginTop: 0 - o / window.rem / 2 + "rem"
            }) : void 0
        }
        ,
        n.exports = {
            init: t
        }
    }
    ).call(this)
});
;define('animation/animation.async.css', function(require, exports, module) {
    function importStyle(css, id) {
        var ele = document.createElement('style');
        ele.id = id;
        document.getElementsByTagName('head')[0].appendChild(ele);
        if (ele.styleSheet) {
            ele.styleSheet.cssText = css;
        } else {
            ele.appendChild(document.createTextNode(css));
        }
    }
    ;importStyle(".animate{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.bounceOut{-webkit-animation-name:bounceOut;animation-name:bounceOut}@-webkit-keyframes bounceOut{0%,20%,40%,60%,80%,100%{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}30%{-webkit-transform:scale3d(1.5,1.5,1.5);transform:scale3d(1.5,1.5,1.5)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;filter:alpha(opacity=100);-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.bounceIn{-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,100%{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{opacity:1;filter:alpha(opacity=100);-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.rotate2d{-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:rotate2d;animation-name:rotate2d}@-webkit-keyframes rotate2d{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate2d{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.translate{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-name:translate;animation-name:translate}@-webkit-keyframes translate{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}to{opacity:1;filter:alpha(opacity=100);-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes translate{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}to{opacity:1;filter:alpha(opacity=100);-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.translateReverse{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-name:translateReverse;animation-name:translateReverse}@-webkit-keyframes translateReverse{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{opacity:1;filter:alpha(opacity=100);-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}@keyframes translateReverse{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{opacity:1;filter:alpha(opacity=100);-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes fadeOut{from{opacity:1;filter:alpha(opacity=100)}to{opacity:0;filter:alpha(opacity=0)}}@keyframes fadeOut{from{opacity:1;filter:alpha(opacity=100)}to{opacity:0;filter:alpha(opacity=0)}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes fadeIn{0%{opacity:0;filter:alpha(opacity=0)}100%{opacity:1;filter:alpha(opacity=100)}}@keyframes fadeIn{0%{opacity:0;filter:alpha(opacity=0)}100%{opacity:1;filter:alpha(opacity=100)}}.flip{-webkit-animation-name:flip;animation-name:flip}@-webkit-keyframes flip{0%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-360deg);transform:perspective(400px) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes flip{0%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-360deg);transform:perspective(400px) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.rotateInDownLeft{-webkit-animation-timing-function:cubic-bezier(.05,.45,.64,.94);animation-timing-function:cubic-bezier(.05,.45,.64,.94);-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft}@-webkit-keyframes rotateInDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0;filter:alpha(opacity=0)}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1;filter:alpha(opacity=100)}}@keyframes rotateInDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0;filter:alpha(opacity=0)}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1;filter:alpha(opacity=100)}}.rotateInUpLeft{-webkit-animation-timing-function:cubic-bezier(.05,.45,.64,.94);animation-timing-function:cubic-bezier(.05,.45,.64,.94);-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft}@-webkit-keyframes rotateInUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0;filter:alpha(opacity=0)}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1;filter:alpha(opacity=100)}}@keyframes rotateInUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0;filter:alpha(opacity=0)}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1;filter:alpha(opacity=100)}}.rotateInDownRight{-webkit-animation-timing-function:cubic-bezier(.05,.45,.64,.94);animation-timing-function:cubic-bezier(.05,.45,.64,.94);-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight}@-webkit-keyframes rotateInDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0;filter:alpha(opacity=0)}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1;filter:alpha(opacity=100)}}@keyframes rotateInDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0;filter:alpha(opacity=0)}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1;filter:alpha(opacity=100)}}.rotateInUpRight{-webkit-animation-timing-function:cubic-bezier(.05,.45,.64,.94);animation-timing-function:cubic-bezier(.05,.45,.64,.94);-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight}@-webkit-keyframes rotateInUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,-90deg);transform:rotate3d(0,0,1,-90deg);opacity:0;filter:alpha(opacity=0)}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1;filter:alpha(opacity=100)}}@keyframes rotateInUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,-90deg);transform:rotate3d(0,0,1,-90deg);opacity:0;filter:alpha(opacity=0)}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1;filter:alpha(opacity=100)}}.bounceInLeft{-webkit-animation-timing-function:cubic-bezier(0,.74,.73,1);animation-timing-function:cubic-bezier(0,.74,.73,1);-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft}@-webkit-keyframes bounceInLeft{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(-400%,0,0);transform:translate3d(-400%,0,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}@keyframes bounceInLeft{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(-400%,0,0);transform:translate3d(-400%,0,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}.bounceInRight{-webkit-animation-timing-function:cubic-bezier(0,.74,.73,1);animation-timing-function:cubic-bezier(0,.74,.73,1);-webkit-animation-name:bounceInRight;animation-name:bounceInRight}@-webkit-keyframes bounceInRight{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(400%,0,0);transform:translate3d(400%,0,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}@keyframes bounceInRight{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(400%,0,0);transform:translate3d(400%,0,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}.bounceInUp{-webkit-animation-timing-function:cubic-bezier(0,.74,.73,1);animation-timing-function:cubic-bezier(0,.74,.73,1);-webkit-animation-name:bounceInUp;animation-name:bounceInUp}@-webkit-keyframes bounceInUp{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,-400%,0);transform:translate3d(0,-400%,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}@keyframes bounceInUp{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,-400%,0);transform:translate3d(0,-400%,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}.bounceInDown{-webkit-animation-timing-function:cubic-bezier(0,.74,.73,1);animation-timing-function:cubic-bezier(0,.74,.73,1);-webkit-animation-name:bounceInDown;animation-name:bounceInDown}@-webkit-keyframes bounceInDown{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,400%,0);transform:translate3d(0,400%,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}@keyframes bounceInDown{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,400%,0);transform:translate3d(0,400%,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}.zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes zoomIn{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1;filter:alpha(opacity=100)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes zoomIn{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1;filter:alpha(opacity=100)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.zoomOut{-webkit-animation-timing-function:cubic-bezier(0,.44,.75,.99);animation-timing-function:cubic-bezier(0,.44,.75,.99);-webkit-animation-name:zoomOut;animation-name:zoomOut}@-webkit-keyframes zoomOut{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}2%{opacity:1;filter:alpha(opacity=100)}80%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes zoomOut{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}2%{opacity:1;filter:alpha(opacity=100)}80%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.float{-webkit-animation-name:float;animation-name:float;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes float{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}25%{-webkit-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0)}75%{-webkit-transform:translate3d(0,10%,0);transform:translate3d(0,10%,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes float{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}25%{-webkit-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0)}75%{-webkit-transform:translate3d(0,10%,0);transform:translate3d(0,10%,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.float2{-webkit-animation-name:float2;animation-name:float2;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes float2{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}25%{-webkit-transform:translate3d(-10%,0,0);transform:translate3d(-10%,0,0)}75%{-webkit-transform:translate3d(10%,0,0);transform:translate3d(10%,0,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes float2{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}25%{-webkit-transform:translate3d(-10%,0,0);transform:translate3d(-10%,0,0)}75%{-webkit-transform:translate3d(10%,0,0);transform:translate3d(10%,0,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.slideLeft{-webkit-animation-name:slideLeft;animation-name:slideLeft}@-webkit-keyframes slideLeft{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translateX(150%);transform:translateX(150%)}50%{-webkit-transform:translateX(-8%);transform:translateX(-8%)}65%{-webkit-transform:translateX(4%);transform:translateX(4%)}80%{-webkit-transform:translateX(-4%);transform:translateX(-4%)}95%{-webkit-transform:translateX(2%);transform:translateX(2%)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slideLeft{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translateX(150%);transform:translateX(150%)}50%{-webkit-transform:translateX(-8%);transform:translateX(-8%)}65%{-webkit-transform:translateX(4%);transform:translateX(4%)}80%{-webkit-transform:translateX(-4%);transform:translateX(-4%)}95%{-webkit-transform:translateX(2%);transform:translateX(2%)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translateX(0);transform:translateX(0)}}.slideRight{-webkit-animation-name:slideRight;animation-name:slideRight}@-webkit-keyframes slideRight{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translateX(-150%);transform:translateX(-150%)}50%{-webkit-transform:translateX(8%);transform:translateX(8%)}65%{-webkit-transform:translateX(-4%);transform:translateX(-4%)}80%{-webkit-transform:translateX(4%);transform:translateX(4%)}95%{-webkit-transform:translateX(-2%);transform:translateX(-2%)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slideRight{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translateX(-150%);transform:translateX(-150%)}50%{-webkit-transform:translateX(8%);transform:translateX(8%)}65%{-webkit-transform:translateX(-4%);transform:translateX(-4%)}80%{-webkit-transform:translateX(4%);transform:translateX(4%)}95%{-webkit-transform:translateX(-2%);transform:translateX(-2%)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translateX(0);transform:translateX(0)}}.slideUp{-webkit-animation-name:slideUp;animation-name:slideUp}@-webkit-keyframes slideUp{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translateY(150%);transform:translateY(150%)}50%{-webkit-transform:translateY(-8%);transform:translateY(-8%)}65%{-webkit-transform:translateY(4%);transform:translateY(4%)}80%{-webkit-transform:translateY(-4%);transform:translateY(-4%)}95%{-webkit-transform:translateY(2%);transform:translateY(2%)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slideUp{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translateY(150%);transform:translateY(150%)}50%{-webkit-transform:translateY(-8%);transform:translateY(-8%)}65%{-webkit-transform:translateY(4%);transform:translateY(4%)}80%{-webkit-transform:translateY(-4%);transform:translateY(-4%)}95%{-webkit-transform:translateY(2%);transform:translateY(2%)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translateY(0);transform:translateY(0)}}.slideDown{-webkit-animation-name:slideDown;animation-name:slideDown}@-webkit-keyframes slideDown{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translateY(-150%);transform:translateY(-150%)}50%{-webkit-transform:translateY(8%);transform:translateY(8%)}65%{-webkit-transform:translateY(-4%);transform:translateY(-4%)}80%{-webkit-transform:translateY(4%);transform:translateY(4%)}95%{-webkit-transform:translateY(-2%);transform:translateY(-2%)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slideDown{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translateY(-150%);transform:translateY(-150%)}50%{-webkit-transform:translateY(8%);transform:translateY(8%)}65%{-webkit-transform:translateY(-4%);transform:translateY(-4%)}80%{-webkit-transform:translateY(4%);transform:translateY(4%)}95%{-webkit-transform:translateY(-2%);transform:translateY(-2%)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translateY(0);transform:translateY(0)}}.shake{-webkit-animation-name:shake;animation-name:shake}@-webkit-keyframes shake{0%{-webkit-transform:translate(0,0) rotate(0deg);transform:translate(0,0) rotate(0deg)}2%{-webkit-transform:translate(-1px,3px) rotate(-1.5deg);transform:translate(-1px,3px) rotate(-1.5deg)}4%{-webkit-transform:translate(-4px,5px) rotate(-1.5deg);transform:translate(-4px,5px) rotate(-1.5deg)}6%{-webkit-transform:translate(-1px,6px) rotate(-.5deg);transform:translate(-1px,6px) rotate(-.5deg)}8%{-webkit-transform:translate(5px,-4px) rotate(-3.5deg);transform:translate(5px,-4px) rotate(-3.5deg)}10%{-webkit-transform:translate(-7px,-3px) rotate(-3.5deg);transform:translate(-7px,-3px) rotate(-3.5deg)}12%{-webkit-transform:translate(-1px,8px) rotate(2.5deg);transform:translate(-1px,8px) rotate(2.5deg)}14%{-webkit-transform:translate(3px,-5px) rotate(-1.5deg);transform:translate(3px,-5px) rotate(-1.5deg)}16%{-webkit-transform:translate(1px,0) rotate(2.5deg);transform:translate(1px,0) rotate(2.5deg)}18%{-webkit-transform:translate(-6px,-10px) rotate(-.5deg);transform:translate(-6px,-10px) rotate(-.5deg)}20%{-webkit-transform:translate(3px,-2px) rotate(1.5deg);transform:translate(3px,-2px) rotate(1.5deg)}22%{-webkit-transform:translate(0,0) rotate(-2.5deg);transform:translate(0,0) rotate(-2.5deg)}24%{-webkit-transform:translate(-5px,-4px) rotate(1.5deg);transform:translate(-5px,-4px) rotate(1.5deg)}26%{-webkit-transform:translate(-1px,3px) rotate(-3.5deg);transform:translate(-1px,3px) rotate(-3.5deg)}28%{-webkit-transform:translate(1px,1px) rotate(-3.5deg);transform:translate(1px,1px) rotate(-3.5deg)}30%{-webkit-transform:translate(-4px,8px) rotate(1.5deg);transform:translate(-4px,8px) rotate(1.5deg)}32%{-webkit-transform:translate(-9px,7px) rotate(-3.5deg);transform:translate(-9px,7px) rotate(-3.5deg)}34%{-webkit-transform:translate(4px,-9px) rotate(-2.5deg);transform:translate(4px,-9px) rotate(-2.5deg)}36%{-webkit-transform:translate(1px,-6px) rotate(-2.5deg);transform:translate(1px,-6px) rotate(-2.5deg)}38%{-webkit-transform:translate(-4px,0) rotate(-2.5deg);transform:translate(-4px,0) rotate(-2.5deg)}40%{-webkit-transform:translate(3px,-7px) rotate(.5deg);transform:translate(3px,-7px) rotate(.5deg)}42%{-webkit-transform:translate(4px,4px) rotate(-.5deg);transform:translate(4px,4px) rotate(-.5deg)}44%{-webkit-transform:translate(8px,-4px) rotate(-2.5deg);transform:translate(8px,-4px) rotate(-2.5deg)}46%{-webkit-transform:translate(9px,9px) rotate(-3.5deg);transform:translate(9px,9px) rotate(-3.5deg)}48%{-webkit-transform:translate(6px,-8px) rotate(-.5deg);transform:translate(6px,-8px) rotate(-.5deg)}50%{-webkit-transform:translate(-1px,4px) rotate(-3.5deg);transform:translate(-1px,4px) rotate(-3.5deg)}52%{-webkit-transform:translate(4px,6px) rotate(-1.5deg);transform:translate(4px,6px) rotate(-1.5deg)}54%{-webkit-transform:translate(9px,-3px) rotate(2.5deg);transform:translate(9px,-3px) rotate(2.5deg)}56%{-webkit-transform:translate(8px,-2px) rotate(-3.5deg);transform:translate(8px,-2px) rotate(-3.5deg)}58%{-webkit-transform:translate(-2px,-9px) rotate(-.5deg);transform:translate(-2px,-9px) rotate(-.5deg)}60%{-webkit-transform:translate(-1px,-5px) rotate(2.5deg);transform:translate(-1px,-5px) rotate(2.5deg)}62%{-webkit-transform:translate(-8px,3px) rotate(2.5deg);transform:translate(-8px,3px) rotate(2.5deg)}64%{-webkit-transform:translate(6px,-2px) rotate(-3.5deg);transform:translate(6px,-2px) rotate(-3.5deg)}66%{-webkit-transform:translate(-5px,9px) rotate(-1.5deg);transform:translate(-5px,9px) rotate(-1.5deg)}68%{-webkit-transform:translate(3px,1px) rotate(-.5deg);transform:translate(3px,1px) rotate(-.5deg)}70%{-webkit-transform:translate(6px,4px) rotate(-1.5deg);transform:translate(6px,4px) rotate(-1.5deg)}72%{-webkit-transform:translate(-6px,-5px) rotate(1.5deg);transform:translate(-6px,-5px) rotate(1.5deg)}74%{-webkit-transform:translate(-8px,0) rotate(-.5deg);transform:translate(-8px,0) rotate(-.5deg)}76%{-webkit-transform:translate(-5px,-8px) rotate(1.5deg);transform:translate(-5px,-8px) rotate(1.5deg)}78%{-webkit-transform:translate(5px,-3px) rotate(-1.5deg);transform:translate(5px,-3px) rotate(-1.5deg)}80%{-webkit-transform:translate(-6px,-3px) rotate(-1.5deg);transform:translate(-6px,-3px) rotate(-1.5deg)}82%{-webkit-transform:translate(7px,8px) rotate(-1.5deg);transform:translate(7px,8px) rotate(-1.5deg)}84%{-webkit-transform:translate(-6px,9px) rotate(.5deg);transform:translate(-6px,9px) rotate(.5deg)}86%{-webkit-transform:translate(1px,8px) rotate(-3.5deg);transform:translate(1px,8px) rotate(-3.5deg)}88%{-webkit-transform:translate(-9px,-2px) rotate(1.5deg);transform:translate(-9px,-2px) rotate(1.5deg)}90%{-webkit-transform:translate(4px,-6px) rotate(-1.5deg);transform:translate(4px,-6px) rotate(-1.5deg)}92%{-webkit-transform:translate(0,-1px) rotate(.5deg);transform:translate(0,-1px) rotate(.5deg)}94%{-webkit-transform:translate(2px,-9px) rotate(2.5deg);transform:translate(2px,-9px) rotate(2.5deg)}96%{-webkit-transform:translate(-9px,1px) rotate(-2.5deg);transform:translate(-9px,1px) rotate(-2.5deg)}98%{-webkit-transform:translate(-9px,-5px) rotate(-3.5deg);transform:translate(-9px,-5px) rotate(-3.5deg)}}@keyframes shake{0%{-webkit-transform:translate(0,0) rotate(0deg);transform:translate(0,0) rotate(0deg)}2%{-webkit-transform:translate(-1px,3px) rotate(-1.5deg);transform:translate(-1px,3px) rotate(-1.5deg)}4%{-webkit-transform:translate(-4px,5px) rotate(-1.5deg);transform:translate(-4px,5px) rotate(-1.5deg)}6%{-webkit-transform:translate(-1px,6px) rotate(-.5deg);transform:translate(-1px,6px) rotate(-.5deg)}8%{-webkit-transform:translate(5px,-4px) rotate(-3.5deg);transform:translate(5px,-4px) rotate(-3.5deg)}10%{-webkit-transform:translate(-7px,-3px) rotate(-3.5deg);transform:translate(-7px,-3px) rotate(-3.5deg)}12%{-webkit-transform:translate(-1px,8px) rotate(2.5deg);transform:translate(-1px,8px) rotate(2.5deg)}14%{-webkit-transform:translate(3px,-5px) rotate(-1.5deg);transform:translate(3px,-5px) rotate(-1.5deg)}16%{-webkit-transform:translate(1px,0) rotate(2.5deg);transform:translate(1px,0) rotate(2.5deg)}18%{-webkit-transform:translate(-6px,-10px) rotate(-.5deg);transform:translate(-6px,-10px) rotate(-.5deg)}20%{-webkit-transform:translate(3px,-2px) rotate(1.5deg);transform:translate(3px,-2px) rotate(1.5deg)}22%{-webkit-transform:translate(0,0) rotate(-2.5deg);transform:translate(0,0) rotate(-2.5deg)}24%{-webkit-transform:translate(-5px,-4px) rotate(1.5deg);transform:translate(-5px,-4px) rotate(1.5deg)}26%{-webkit-transform:translate(-1px,3px) rotate(-3.5deg);transform:translate(-1px,3px) rotate(-3.5deg)}28%{-webkit-transform:translate(1px,1px) rotate(-3.5deg);transform:translate(1px,1px) rotate(-3.5deg)}30%{-webkit-transform:translate(-4px,8px) rotate(1.5deg);transform:translate(-4px,8px) rotate(1.5deg)}32%{-webkit-transform:translate(-9px,7px) rotate(-3.5deg);transform:translate(-9px,7px) rotate(-3.5deg)}34%{-webkit-transform:translate(4px,-9px) rotate(-2.5deg);transform:translate(4px,-9px) rotate(-2.5deg)}36%{-webkit-transform:translate(1px,-6px) rotate(-2.5deg);transform:translate(1px,-6px) rotate(-2.5deg)}38%{-webkit-transform:translate(-4px,0) rotate(-2.5deg);transform:translate(-4px,0) rotate(-2.5deg)}40%{-webkit-transform:translate(3px,-7px) rotate(.5deg);transform:translate(3px,-7px) rotate(.5deg)}42%{-webkit-transform:translate(4px,4px) rotate(-.5deg);transform:translate(4px,4px) rotate(-.5deg)}44%{-webkit-transform:translate(8px,-4px) rotate(-2.5deg);transform:translate(8px,-4px) rotate(-2.5deg)}46%{-webkit-transform:translate(9px,9px) rotate(-3.5deg);transform:translate(9px,9px) rotate(-3.5deg)}48%{-webkit-transform:translate(6px,-8px) rotate(-.5deg);transform:translate(6px,-8px) rotate(-.5deg)}50%{-webkit-transform:translate(-1px,4px) rotate(-3.5deg);transform:translate(-1px,4px) rotate(-3.5deg)}52%{-webkit-transform:translate(4px,6px) rotate(-1.5deg);transform:translate(4px,6px) rotate(-1.5deg)}54%{-webkit-transform:translate(9px,-3px) rotate(2.5deg);transform:translate(9px,-3px) rotate(2.5deg)}56%{-webkit-transform:translate(8px,-2px) rotate(-3.5deg);transform:translate(8px,-2px) rotate(-3.5deg)}58%{-webkit-transform:translate(-2px,-9px) rotate(-.5deg);transform:translate(-2px,-9px) rotate(-.5deg)}60%{-webkit-transform:translate(-1px,-5px) rotate(2.5deg);transform:translate(-1px,-5px) rotate(2.5deg)}62%{-webkit-transform:translate(-8px,3px) rotate(2.5deg);transform:translate(-8px,3px) rotate(2.5deg)}64%{-webkit-transform:translate(6px,-2px) rotate(-3.5deg);transform:translate(6px,-2px) rotate(-3.5deg)}66%{-webkit-transform:translate(-5px,9px) rotate(-1.5deg);transform:translate(-5px,9px) rotate(-1.5deg)}68%{-webkit-transform:translate(3px,1px) rotate(-.5deg);transform:translate(3px,1px) rotate(-.5deg)}70%{-webkit-transform:translate(6px,4px) rotate(-1.5deg);transform:translate(6px,4px) rotate(-1.5deg)}72%{-webkit-transform:translate(-6px,-5px) rotate(1.5deg);transform:translate(-6px,-5px) rotate(1.5deg)}74%{-webkit-transform:translate(-8px,0) rotate(-.5deg);transform:translate(-8px,0) rotate(-.5deg)}76%{-webkit-transform:translate(-5px,-8px) rotate(1.5deg);transform:translate(-5px,-8px) rotate(1.5deg)}78%{-webkit-transform:translate(5px,-3px) rotate(-1.5deg);transform:translate(5px,-3px) rotate(-1.5deg)}80%{-webkit-transform:translate(-6px,-3px) rotate(-1.5deg);transform:translate(-6px,-3px) rotate(-1.5deg)}82%{-webkit-transform:translate(7px,8px) rotate(-1.5deg);transform:translate(7px,8px) rotate(-1.5deg)}84%{-webkit-transform:translate(-6px,9px) rotate(.5deg);transform:translate(-6px,9px) rotate(.5deg)}86%{-webkit-transform:translate(1px,8px) rotate(-3.5deg);transform:translate(1px,8px) rotate(-3.5deg)}88%{-webkit-transform:translate(-9px,-2px) rotate(1.5deg);transform:translate(-9px,-2px) rotate(1.5deg)}90%{-webkit-transform:translate(4px,-6px) rotate(-1.5deg);transform:translate(4px,-6px) rotate(-1.5deg)}92%{-webkit-transform:translate(0,-1px) rotate(.5deg);transform:translate(0,-1px) rotate(.5deg)}94%{-webkit-transform:translate(2px,-9px) rotate(2.5deg);transform:translate(2px,-9px) rotate(2.5deg)}96%{-webkit-transform:translate(-9px,1px) rotate(-2.5deg);transform:translate(-9px,1px) rotate(-2.5deg)}98%{-webkit-transform:translate(-9px,-5px) rotate(-3.5deg);transform:translate(-9px,-5px) rotate(-3.5deg)}}.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInRight{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}@keyframes fadeInRight{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}.fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}@-webkit-keyframes fadeInLeft{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}@keyframes fadeInLeft{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInDown{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}@keyframes fadeInDown{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInUp{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}@keyframes fadeInUp{0%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:none;transform:none}}.flash{-webkit-animation-name:flash;animation-name:flash}@-webkit-keyframes flash{0%,50%,100%{opacity:1;filter:alpha(opacity=100)}25%,75%{opacity:0;filter:alpha(opacity=0)}}@keyframes flash{0%,50%,100%{opacity:1;filter:alpha(opacity=100)}25%,75%{opacity:0;filter:alpha(opacity=0)}}.swing{-webkit-transform-origin:top center;-ms-transform-origin:top center;transform-origin:top center;-webkit-animation-name:swing;animation-name:swing}@-webkit-keyframes swing{20%{-webkit-transform:rotate3d(0,0,1,15deg);transform:rotate3d(0,0,1,15deg)}40%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg)}60%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg)}80%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg)}100%{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}}@keyframes swing{20%{-webkit-transform:rotate3d(0,0,1,15deg);transform:rotate3d(0,0,1,15deg)}40%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg)}60%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg)}80%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg)}100%{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}}.tada{-webkit-animation-name:tada;animation-name:tada}@-webkit-keyframes tada{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes tada{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble}@-webkit-keyframes wobble{0%{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg);transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg);transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg);transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg);transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg);transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}100%{-webkit-transform:none;transform:none}}@keyframes wobble{0%{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg);transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg);transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg);transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg);transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg);transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}100%{-webkit-transform:none;transform:none}}.rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand}@-webkit-keyframes rubberBand{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes rubberBand{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.jello{-webkit-animation-name:jello;animation-name:jello}@-webkit-keyframes jello{11.1%{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}100%{-webkit-transform:none;transform:none}}@keyframes jello{11.1%{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}100%{-webkit-transform:none;transform:none}}@-webkit-keyframes zoomInDown{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;filter:alpha(opacity=100);-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInDown{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;filter:alpha(opacity=100);-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown}@-webkit-keyframes zoomInLeft{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;filter:alpha(opacity=100);-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInLeft{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;filter:alpha(opacity=100);-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}@-webkit-keyframes zoomInRight{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;filter:alpha(opacity=100);-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInRight{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;filter:alpha(opacity=100);-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight}@-webkit-keyframes zoomInUp{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;filter:alpha(opacity=100);-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInUp{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;filter:alpha(opacity=100);-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp}@-webkit-keyframes fadeOutUp{0%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}99%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}100%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fadeOutUp{0%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}99%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}100%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeOutRight{0%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}99%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}100%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fadeOutRight{0%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}99%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}100%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@-webkit-keyframes fadeOutLeft{0%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}99%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}100%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fadeOutLeft{0%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}99%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}100%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}@-webkit-keyframes fadeOutDown{0%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}99%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}100%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fadeOutDown{0%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}99%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}100%{opacity:0;filter:alpha(opacity=0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}", "animation/animation.async.css");
});
require("animation/animation.async.css");
define("stat", function(t, e, n) {
    (function() {
        var e, i, u;
        e = t("zepto"),
        i = window.location,
        u = {
            START_TIME: new Date,
            SERVER: "//tongji.szzbmy.com/tj.gif",
            ORIGIN: "" + i.protocol + "//" + i.host,
            PATHNAME: i.pathname,
            HREF: i.href,
            MAX_COUNT: 1,
            queue: [],
            CLASS_INTO: "INTO",
            CLASS_DURATION: "DURATION",
            CLASS_RELOAD: "RELOAD",
            CLASS_CMP: "COMPONENT",
            CLASS_LINK_INTO: "LINK_TO",
            CLASS_REQUEST: "REQUEST",
            ACTION_INIT: "INIT",
            ACTION_CLICK: "CLICK",
            ACTION_UPD: "UPDATE",
            calQueryStr: function(t) {
                var e, n, i;
                e = [];
                for (n in t)
                    i = t[n],
                    e.push("" + encodeURIComponent(n) + "=" + encodeURIComponent(null != i ? i : ""));
                return e.join("&")
            },
            init: function(t) {
                return null == t && (t = {}),
                this.inited = !0,
                this.authid = t.authid
            },
            getUser: function() {},
            checkQueue: function() {
                var t, e;
                return e = this.queue,
                t = e.length,
                t < this.MAX_COUNT ? void 0 : this.post()
            },
            post: function() {
                var t, e, n, i, u, s, r, o;
                for (u = this.queue,
                this.queue = [],
                o = [],
                s = 0,
                r = u.length; r > s; s++)
                    e = u[s],
                    t = e.ajax,
                    delete e.ajax,
                    i = this.calQueryStr(e),
                    n = "" + this.SERVER + "?" + i,
                    o.push(this.request(n, t));
                return o
            },
            request: function(t, n) {
                var i;
                return n !== !0 ? (i = new Image,
                i.onload = function() {
                    return e(i).remove()
                }
                ,
                void (i.src = t)) : e.ajax({
                    url: t,
                    async: !1,
                    timeout: 1e3
                })
            },
            send: function(t, e, n, i) {
                var u, s, r, o, h, a, c, l;
                if (null == i && (i = {}),
                this.inited === !0 && t) {
                    h = new Date,
                    s = this.ORIGIN,
                    r = this.HREF,
                    a = r.replace(s, ""),
                    c = i.user,
                    delete i.user,
                    u = {
                        authid: this.authid,
                        host: s,
                        url: a,
                        time: h.toISOString(),
                        "class": t,
                        name: e,
                        action: n,
                        user: c || this.getUser()
                    };
                    for (o in i)
                        l = i[o],
                        u[o] = l;
                    return this.queue.push(u),
                    this.checkQueue()
                }
            },
            getOthersAgent: function(t) {
                return ""
            },
            getUserAgent: function() {
                var t, e;
                return e = window.navigator.userAgent,
                t = this.getOthersAgent(e),
                e += " " + t
            },
            sendInto: function() {
                return this.send(this.CLASS_INTO, this.getUserAgent(), null, {
                    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                    screen_width: window.screen.availWidth,
                    screen_height: window.screen.availHeight
                })
            },
            sendReload: function() {
                var t, e;
                return e = this.START_TIME,
                t = new Date,
                this.send(this.CLASS_RELOAD, t.getTime() - e.getTime(), null, {
                    ajax: !0
                })
            },
            sendRequest: function(t, e, n, i, u, s) {
                var r;
                return null == n && (n = {}),
                null != t ? (r = {
                    params: JSON.stringify(n),
                    duration: i,
                    result: u,
                    msg: s
                },
                this.send(this.CLASS_REQUEST, t, e, r)) : void 0
            },
            sendLinkTo: function(t, e, n, i, u) {
                var s, r, o, h;
                if (null == u && (u = {}),
                null != t) {
                    s = this.ACTION_INIT,
                    n || (n = this.PATHNAME),
                    i || (i = "_self"),
                    o = {
                        desc: e,
                        from: n,
                        target: i
                    };
                    for (r in u)
                        h = u[r],
                        o[r] = h;
                    return u = o,
                    this.send(this.CLASS_LINK_INTO, t, s, u)
                }
            },
            sendComponent: function(t, e, n, i, u) {
                var s, r, o;
                if (null == u && (u = {}),
                null != t) {
                    null == i && (i = this.ACTION_INIT),
                    r = {
                        cmpclass: e,
                        cmpvalue: n
                    };
                    for (s in u)
                        o = u[s],
                        r[s] = o;
                    return u = r,
                    this.send(this.CLASS_CMP, t, i, u)
                }
            }
        },
        n.exports = u
    }
    ).call(this)
});
;define("async", function(n, t, o) {
    function e(n, t, o) {
        t = t || function() {}
        ,
        o = o || {};
        for (var e, l = 0, u = [], i = !1, r = 0; r < n.length; r++)
            !function(r) {
                n[r](function(c) {
                    l++,
                    u[r] = c,
                    o.onProgress && !i && o.onProgress(l / n.length),
                    l >= n.length && !i && (e && (clearTimeout(e),
                    e = null),
                    t.apply(null, u),
                    i = !0)
                })
            }(r);
        o.timeout && (e = setTimeout(function() {
            t.apply(null, u),
            i = !0
        }, o.timeout))
    }
    o.exports = {
        parallel: e
    }
});
;define("common/requestAnimationFrame", function() {
    !function() {
        for (var n = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i)
            window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
            var i = (new Date).getTime()
              , o = Math.max(0, 16 - (i - n))
              , a = window.setTimeout(function() {
                e(i + o)
            }, o);
            return n = i + o,
            a
        }
        ),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) {
            clearTimeout(n)
        }
        )
    }()
});
;define("zepto/fx", function() {
    !function(t, n) {
        function i(t) {
            return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
        }
        function e(t) {
            return a ? a + t : t.toLowerCase()
        }
        var a, o, s, r, f, u, c, d, l, m, p = "", h = {
            Webkit: "webkit",
            Moz: "",
            O: "o"
        }, y = document.createElement("div"), x = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, b = {};
        t.each(h, function(t, i) {
            return y.style[t + "TransitionProperty"] !== n ? (p = "-" + t.toLowerCase() + "-",
            a = i,
            !1) : void 0
        }),
        o = p + "transform",
        b[s = p + "transition-property"] = b[r = p + "transition-duration"] = b[u = p + "transition-delay"] = b[f = p + "transition-timing-function"] = b[c = p + "animation-name"] = b[d = p + "animation-duration"] = b[m = p + "animation-delay"] = b[l = p + "animation-timing-function"] = "",
        t.fx = {
            off: a === n && y.style.transitionProperty === n,
            speeds: {
                _default: 400,
                fast: 200,
                slow: 600
            },
            cssPrefix: p,
            transitionEnd: e("TransitionEnd"),
            animationEnd: e("AnimationEnd")
        },
        t.fn.animate = function(i, e, a, o, s) {
            return t.isFunction(e) && (o = e,
            a = n,
            e = n),
            t.isFunction(a) && (o = a,
            a = n),
            t.isPlainObject(e) && (a = e.easing,
            o = e.complete,
            s = e.delay,
            e = e.duration),
            e && (e = ("number" == typeof e ? e : t.fx.speeds[e] || t.fx.speeds._default) / 1e3),
            s && (s = parseFloat(s) / 1e3),
            this.anim(i, e, a, o, s)
        }
        ,
        t.fn.anim = function(e, a, p, h, y) {
            var g, E, w, v = {}, T = "", z = this, L = t.fx.transitionEnd, P = !1;
            if (a === n && (a = t.fx.speeds._default / 1e3),
            y === n && (y = 0),
            t.fx.off && (a = 0),
            "string" == typeof e)
                v[c] = e,
                v[d] = a + "s",
                v[m] = y + "s",
                v[l] = p || "linear",
                L = t.fx.animationEnd;
            else {
                E = [];
                for (g in e)
                    x.test(g) ? T += g + "(" + e[g] + ") " : (v[g] = e[g],
                    E.push(i(g)));
                T && (v[o] = T,
                E.push(o)),
                a > 0 && "object" == typeof e && (v[s] = E.join(", "),
                v[r] = a + "s",
                v[u] = y + "s",
                v[f] = p || "linear")
            }
            return w = function(n) {
                if ("undefined" != typeof n) {
                    if (n.target !== n.currentTarget)
                        return;
                    t(n.target).unbind(L, w)
                } else
                    t(this).unbind(L, w);
                P = !0,
                t(this).css(b),
                h && h.call(this)
            }
            ,
            a > 0 && (this.bind(L, w),
            setTimeout(function() {
                P || w.call(z)
            }, 1e3 * (a + y) + 25)),
            this.size() && this.get(0).clientLeft,
            this.css(v),
            0 >= a && setTimeout(function() {
                z.each(function() {
                    w.call(this)
                })
            }, 0),
            this
        }
        ,
        y = null
    }(Zepto)
});
;define("zepto/fx.method", function() {
    !function(n, t) {
        function i(i, e, o, f, c) {
            "function" != typeof e || c || (c = e,
            e = t);
            var s = {
                opacity: o
            };
            return f && (s.scale = f,
            i.css(n.fx.cssPrefix + "transform-origin", "0 0")),
            i.animate(s, e, null, c)
        }
        function e(t, e, o, f) {
            return i(t, e, 0, o, function() {
                c.call(n(this)),
                f && f.call(this)
            })
        }
        var o = window.document
          , f = (o.documentElement,
        n.fn.show)
          , c = n.fn.hide
          , s = n.fn.toggle;
        n.fn.toggle = function(i, e) {
            return i === t || "boolean" == typeof i ? s.call(this, i) : this.each(function() {
                var t = n(this);
                t["none" == t.css("display") ? "show" : "hide"](i, e)
            })
        }
        ,
        n.fn.fadeTo = function(n, t, e) {
            return i(this, n, t, null, e)
        }
        ,
        n.fn.fadeIn = function(n, t) {
            var i = this.css("opacity");
            return i > 0 ? this.css("opacity", 0) : i = 1,
            f.call(this).fadeTo(n, i, t)
        }
        ,
        n.fn.fadeOut = function(n, t) {
            return e(this, n, null, t)
        }
        ,
        n.fn.fadeToggle = function(t, i) {
            return this.each(function() {
                var e = n(this);
                e[0 == e.css("opacity") || "none" == e.css("display") ? "fadeIn" : "fadeOut"](t, i)
            })
        }
    }(Zepto)
});
;define("animation", function(t, n, i) {
    (function() {
        var t;
        t = function(n) {
            var i = this;
            return this === window ? new t(n) : (this.startTime = null,
            this.animId = null,
            this.animationCb = function() {
                var t, e;
                return t = (new Date).getTime(),
                e = (t - i.startTime) / n.duration * (n.end - n.start) + n.start,
                e = n.end >= n.start ? e > n.end ? n.end : e : e < n.end ? n.end : e,
                n.onProgress(e),
                n.end >= n.start && e >= n.end || n.end < n.start && e <= n.end ? ("function" == typeof n.onComplete && n.onComplete(e),
                cancelAnimationFrame(i.animId),
                i.startTime = null) : i.animId = requestAnimationFrame(i.animationCb)
            }
            ,
            this)
        }
        ,
        t.prototype.start = function() {
            return this.startTime = (new Date).getTime(),
            this.animId = requestAnimationFrame(this.animationCb)
        }
        ,
        t.prototype.stop = function() {
            return cancelAnimationFrame(this.animId),
            this.startTime = null
        }
        ,
        t.prototype.pause = function() {
            return this.stopTime = (new Date).getTime(),
            this.animId ? (cancelAnimationFrame(this.animId),
            this.animId = null) : void 0
        }
        ,
        t.prototype["continue"] = function() {
            return this.stopTime ? (this.startTime = (new Date).getTime() - this.stopTime + this.startTime,
            this.animId = requestAnimationFrame(this.animationCb)) : void 0
        }
        ,
        i.exports = t
    }
    ).call(this)
});
;define("point", function(t, n, i) {
    (function() {
        var t;
        t = function() {
            function t(t, n) {
                this.x = t,
                this.y = n
            }
            return t.prototype.toString = function() {
                return "" + this.x + "-" + this.y
            }
            ,
            t
        }(),
        i.exports = {
            create: function(n, i) {
                return new t(n,i)
            }
        }
    }
    ).call(this)
});
;define("db", function(e, r, t) {
    (function() {
        var r, o;
        r = e("zepto"),
        o = {},
        o.request = function(e) {
            var t, o;
            return null == e && (e = {}),
            e.data = e.data || {},
            e.data.isAjax = !0,
            e.type = (null != (o = e.type) ? o.toUpperCase() : void 0) || "GET",
            e.dataType = e.dataType || "json",
            r.extend(t = {}, e),
            delete t.complete,
            t.success = function(r) {
                return r && r.errorcode ? "function" == typeof e.error && e.error({
                    errorCode: r.errorcode,
                    errorMsg: r.errormessage
                }) : "function" == typeof e.success && e.success(r),
                "function" == typeof e.complete ? e.complete(r) : void 0
            }
            ,
            t.error = function(r) {
                var t;
                return t = {
                    errorCode: r.status,
                    xhr: r,
                    errorMsg: r.responseText
                },
                "function" == typeof e.error && e.error(t),
                "function" == typeof e.complete ? e.complete(t) : void 0
            }
            ,
            r.ajax(t)
        }
        ,
        o.registerMethod = function(e) {
            return function(t) {
                return o.request(r.extend({}, e, t))
            }
        }
        ,
        t.exports = o
    }
    ).call(this)
});
;define("common/cdnmap", function(r, b, c) {
    (function() {
        var r;
        r = {
            A: {
                "rp-test": ["//oss1.rabbitpre.com/"],
                rabbitpre: ["//ali1.rabbitpre.com/", "//ali2.rabbitpre.com/", "//ali3.rabbitpre.com/", "//tenc1.rabbitpre.com/", "//tenc2.rabbitpre.com/", "//tenc3.rabbitpre.com/", "//ali1.rabbitpre.com/", "//ali2.rabbitpre.com/", "//ali3.rabbitpre.com/", "//tenc1.rabbitpre.com/", "//tenc2.rabbitpre.com/", "//tenc3.rabbitpre.com/", "//fw.rabbitpre.com/", "//cdn5.rabbitpre.com/", "//cdn6.rabbitpre.com/"],
                "static": ["//static.szzbmy.com/"]
            },
            Q: {
                upload: ["//7xiklo.com2.z0.glb.qiniucdn.com/"],
                test: ["//testfile.rabbitpre.com/"],
                rabbitpre: ["//file.rabbitpre.com/", "//file1.rabbitpre.com/", "//file2.rabbitpre.com/", "//file3.rabbitpre.com/", "//wscdn.rabbitpre.com/", "//cdn2.rabbitpre.com/", "//cdn3.rabbitpre.com/", "//cdn4.rabbitpre.com/", "//wscdn.rabbitpre.com/", "//cdn2.rabbitpre.com/", "//cdn3.rabbitpre.com/", "//cdn4.rabbitpre.com/", "//wscdn.rabbitpre.com/", "//cdn2.rabbitpre.com/", "//cdn3.rabbitpre.com/", "//cdn4.rabbitpre.com/"]
            }
        },
        c.exports = function(b) {
            var c, i, t, e, a, o, m;
            if (!b)
                return null;
            for (i in r) {
                t = r[i];
                for (c in t)
                    for (a = t[c],
                    o = 0,
                    m = a.length; m > o; o++)
                        if (e = a[o],
                        b.indexOf(e) >= 0)
                            return i
            }
            return null
        }
    }
    ).call(this)
});
;define("pageManagement/lastads", function(e, t, r) {
    (function() {
        var e;
        e = {
            id: "e1cb7570-4ef1-4a9b-a6a7-dfaa40fd8790",
            appid: "33208289-37ce-497e-8843-b8a14d86c698",
            needads: !0,
            row: 0,
            col: 0,
            "in": null,
            out: null,
            bgcol: null,
            bgimage: "http://tenc2.rabbitpre.com/fe7ae01b-20ab-482b-8175-ecf671e28f4f.jpg@0-0-0-0a_70Q.src?crossorigin=1",
            bgserver: "A",
            bgleft: 0,
            bgtop: 0,
            cmps: [{
                tid: 1478662300528,
                style: {
                    position: "absolute",
                    width: 68,
                    height: 35,
                    left: 126,
                    top: 38,
                    "border-radius": 0,
                    "border-width": 0,
                    "border-style": "solid",
                    rotate: 0,
                    transform: "rotate(0deg)",
                    "border-color": ""
                },
                file: {
                    key: "http://ali1.rabbitpre.com/8e126a7d-c746-4452-b166-622206a2c504.png",
                    filtereffect: "original",
                    a: "0-0-0-0",
                    server: "A",
                    p: ".src",
                    orikey: "http://ali1.rabbitpre.com/8e126a7d-c746-4452-b166-622206a2c504.png@0-0-0-0a.src",
                    url: "http://ali1.rabbitpre.com/8e126a7d-c746-4452-b166-622206a2c504.png@0-0-0-0a_263w_70Q_1an.src?crossorigin=1"
                },
                animation: [],
                effect: {},
                link: null,
                remark: {
                    key: "",
                    name: ""
                },
                trigger: [{
                    event: "click",
                    type: "none",
                    link: "",
                    deeplink: "",
                    go: "",
                    toggle: "",
                    tips: !1,
                    prehide: !1
                }],
                cmpType: "image",
                name: "图片08"
            }, {
                tid: 1478662309029,
                style: {
                    position: "absolute",
                    width: 160,
                    height: 19,
                    left: 80,
                    top: 87,
                    "border-radius": 0,
                    "border-width": 0,
                    "border-style": "solid",
                    rotate: 0,
                    transform: "rotate(0deg)",
                    "border-color": ""
                },
                file: {
                    key: "http://tenc3.rabbitpre.com/01eaf3b6-b441-4e74-bad2-178074d77fe9.png",
                    filtereffect: "original",
                    a: "0-0-0-0",
                    server: "A",
                    p: ".src",
                    orikey: "http://tenc3.rabbitpre.com/01eaf3b6-b441-4e74-bad2-178074d77fe9.png@0-0-0-0a.src",
                    url: "http://tenc3.rabbitpre.com/01eaf3b6-b441-4e74-bad2-178074d77fe9.png@0-0-0-0a_621w_70Q_1an.src?crossorigin=1"
                },
                animation: [],
                effect: {},
                link: null,
                remark: {
                    key: "",
                    name: ""
                },
                trigger: [{
                    event: "click",
                    type: "none",
                    link: "",
                    deeplink: "",
                    go: "",
                    toggle: "",
                    tips: !1,
                    prehide: !1
                }],
                cmpType: "image",
                name: "图片09"
            }, {
                tid: 1478662315607,
                style: {
                    position: "absolute",
                    width: 160,
                    height: 25,
                    left: 80,
                    top: 119,
                    "border-radius": 0,
                    "border-width": 0,
                    "border-style": "solid",
                    rotate: 0,
                    transform: "rotate(0deg)",
                    "border-color": ""
                },
                file: {
                    key: "http://fw.rabbitpre.com/a2f2a88b-df37-40bf-9563-6ecc96b50a02.png",
                    filtereffect: "original",
                    a: "0-0-0-0",
                    server: "A",
                    p: ".src",
                    orikey: "http://fw.rabbitpre.com/a2f2a88b-df37-40bf-9563-6ecc96b50a02.png@0-0-0-0a.src",
                    url: "http://fw.rabbitpre.com/a2f2a88b-df37-40bf-9563-6ecc96b50a02.png@0-0-0-0a_621w_70Q_1an.src?crossorigin=1"
                },
                animation: [],
                effect: {},
                link: null,
                remark: {
                    key: "",
                    name: ""
                },
                trigger: [{
                    event: "click",
                    type: "none",
                    link: "",
                    deeplink: "",
                    go: "",
                    toggle: "",
                    tips: !1,
                    prehide: !1
                }],
                cmpType: "image",
                name: "图片10"
            }, {
                tid: null,
                style: {
                    height: 30,
                    width: 169,
                    "background-color": "rgba(0, 0, 0, 0)",
                    "border-width": 1,
                    "border-style": "solid",
                    "border-color": "rgba(0, 0, 0, 0)",
                    "border-radius": 4,
                    position: "absolute",
                    left: 76,
                    top: 116,
                    color: "rgba(0, 0, 0, 0)",
                    rotate: 0,
                    "font-size": 16,
                    opacity: 0,
                    transform: "rotate(0deg)"
                },
                text: "按钮",
                animation: [{
                    name: "fadeInDown",
                    duration: 1,
                    active: !0
                }],
                remark: {
                    key: "",
                    name: ""
                },
                link: "http://www.rabbitpre.com/mobile?Mobile=guanggaoye",
                cmpType: "btn",
                name: "按钮11"
            }, {
                tid: null,
                style: {
                    height: 250,
                    width: 250,
                    position: "absolute",
                    left: 35,
                    top: 224,
                    rotate: 0,
                    opacity: 1,
                    transform: "rotate(0deg)"
                },
                animation: [{
                    name: "none",
                    active: !0
                }],
                remark: {
                    key: "",
                    name: ""
                },
                cmpType: "adsgoogle",
                name: "ads1",
                client: "ca-pub-3563784790125235",
                slot: "1748731103"
            }],
            createtime: "2016-11-09T03:03:34.000Z",
            updatetime: "2016-11-09T03:41:37.000Z",
            point: {
                x: 0,
                y: 0
            }
        },
        r.exports = e
    }
    ).call(this)
});
;define("pageManagement/loading.tpl", function(n, i, e) {
    e.exports = function(n) {
        n = n || {};
        var i = [];
        return i.push('<div class="full-screen-loading"> <i class="icon icon-rabbitpre" style="', n.style, '"></i></div>'),
        i.join("")
    }
});
;define("pageManagement/formSubmitSuccess.tpl", function(s, e, i) {
    i.exports = function(s) {
        s = s || {};
        var e = [];
        return e.push('<div class="form-submit-success"> <i class="icon icon-rabbitpre" style="', s.style, '"></i> <p style="', s.messagestyle, '">', s.message, "</p></div>"),
        e.join("")
    }
});
;define("pageManagement/form.tpl", function(e, i, s) {
    s.exports = function(e, i) {
        e = e || {};
        var s = [];
        s.push('<div id="cmp-', e.id, '" data-tid="', e.tid, '" class="cmp form" style="', i.C.formatStyleJSONToString(i.outerStyle), '"> <form class="cmp-inner" style="', i.C.formatStyleJSONToString(i.innerStyle), '"> ');
        for (var t = 0, a = e.items.length; a > t; t++) {
            s.push(" ");
            var r = e.items[t];
            if (s.push(" "),
            "input" == r.type)
                s.push(' <div class="form-item"> <input type="', r.dataType, '" class="form-input" placeholder="', i.C.str.filterInAttr(r.placeholder) + (r.isRequired ? "(必填)" : ""), '" name="', i.C.str.filterInAttr(r.name), '" ', r.isRequired ? "required" : "", " /> </div> ");
            else if ("title" == r.type)
                s.push(' <div class="form-item"> <div class="form-title">', r.text, "</div> </div> ");
            else if ("question" == r.type)
                s.push(' <div class="form-item"> <div class="form-ques"> <b>', r.bage, "</b>", r.text, " </div> </div> ");
            else if ("answer" == r.type) {
                s.push(' <div class="form-answer"> ');
                for (var d = 0, l = r.group.length; l > d; d++)
                    s.push(' <div class="field answer-item"> <div class="ui radio checkbox"> <input type="radio" tabindex="0" class="hidden" id="', r.name, "-", d, '" value="', r.group[d], '" name="', r.name, '"> <label for="', r.name, "-", d, '">', r.group[d], "</label> </div> </div> ");
                s.push(" </div> ")
            } else if ("answers" == r.type) {
                s.push(' <div class="form-answer"> ');
                for (var d = 0, n = r.group.length; n > d; d++)
                    s.push(' <div class="field answer-item"> <div class="ui checkbox multi-box"> <input type="checkbox" tabindex="0" class="hidden" id="', r.name, "-", d, '" value="', r.group[d], '" name="', r.name, '"> <label for="', r.name, "-", d, '">', r.group[d], "</label> </div> </div> ");
                s.push(" </div> ")
            } else if ("star" == r.type) {
                s.push(' <div class="form-item"> <div class="form-star j-form-stars"> <input type="hidden" id="', r.name, '" name="', r.name, '" value=""/> ');
                for (var p = 1; 6 > p; p++)
                    s.push(' <i class="icon24 star j-form-star" data-index="', p, '" data-parent="', r.name, '"></i> ');
                s.push(" </div> </div> ")
            } else
                "submit" == r.type && s.push(' <div class="form-item"> <input type="submit" style="', i.C.formatStyleJSONToString(i.btnStyle), '" value="', r.text, '" ', i.disabled ? "disabled" : "", "/> </div> ");
            s.push(" ")
        }
        return s.push(" </form></div>"),
        s.join("")
    }
});
;define("pageManagement/video.tpl", function(e, t, i) {
    i.exports = function(e, t) {
        e = e || {};
        var i = [];
        return i.push('<div id="cmp-', e.id, '" data-tid="', e.tid, '" class="cmp video" style="', t.C.formatStyleJSONToString(t.outerStyle), '"> <iframe class="cmp-inner tz-iframe" style="', t.C.formatStyleJSONToString(t.innerStyle), '" src="', e.video.embed, '" frameborder=0 allowfullscreen></iframe></div>'),
        i.join("")
    }
});
;define("pageManagement/oneCall.tpl", function(t, e, n) {
    n.exports = function(t, e) {
        t = t || {};
        var n = [];
        return n.push('<div id="cmp-', t.id, '" data-tid="', t.tid, '" class="cmp one-call" style="', e.C.formatStyleJSONToString(e.outerStyle), '"> <a class="cmp-inner" href="tel:', t.telNum, '"> <button class="content" style="', e.C.formatStyleJSONToString(e.innerStyle), '">', t.text, "</button> </a></div>"),
        n.join("")
    }
});
;define("pageManagement/oneCallPic.tpl", function(t, e, n) {
    n.exports = function(t, e) {
        t = t || {};
        var n = [];
        return n.push('<div id="cmp-', t.id, '" data-tid="', t.tid, '" class="cmp one-call-pic" style="', e.C.formatStyleJSONToString(e.outerStyle), '"> <a class="cmp-inner" href="tel:', t.telNum, '"> <button class="content" style="', e.C.formatStyleJSONToString(e.innerStyle), '">', escapeHTML(t.text), "</button> </a></div>"),
        n.join("")
    }
});
;define("pageManagement/fingerprint.tpl", function(n, t, i) {
    i.exports = function(n, t) {
        n = n || {};
        var i = [];
        return i.push('<div id="cmp-', n.id, '" data-tid="', n.tid, '" class="cmp fingerprint" style="', t.C.formatStyleJSONToString(t.outerStyle), '"> <a class="cmp-inner" style="display:block;', t.C.formatStyleJSONToString(t.innerStyle), '" href="javascript:void(0);"> <span class="fingerprint-scan"></span> </a></div>'),
        i.join("")
    }
});
;define("pageManagement/fingerprintwhite.tpl", function(r, i, n) {
    n.exports = function(r, i) {
        r = r || {};
        var n = [];
        return n.push('<div id="cmp-', r.id, '" data-tid="', r.tid, '" class="cmp fingerprint_white" style="', i.C.formatStyleJSONToString(i.outerStyle), '"> <a class="cmp-inner" style="display:block;', i.C.formatStyleJSONToString(i.innerStyle), "\" href=\"javascript:void(0);\"> <div class='fingerprint-corner fingerprint-corner-right-top'></div> <div class='fingerprint-corner fingerprint-corner-right-bottom'></div> <div class='fingerprint-corner fingerprint-corner-left-top'></div> <div class='fingerprint-corner fingerprint-corner-left-bottom'></div> <span class=\"fingerprint-scan\"></span> </a></div>"),
        n.join("")
    }
});
;define("pageManagement/blessing.tpl", function(t, e, n) {
    n.exports = function(t, e) {
        t = t || {};
        var n = [];
        return n.push('<div id="cmp-', t.id, '" data-tid="', t.tid, '" class="cmp blessing" style="', e.C.formatStyleJSONToString(e.outerStyle), '"> <button class="cmp-inner" style="', e.C.formatStyleJSONToString(e.innerStyle), '">', escapeHTML(t.text), "</button></div>"),
        n.join("")
    }
});
