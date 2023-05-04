const logo = document.getElementById('logoName');
const confirmBtn = document.getElementById('confirm-btn');

confirmBtn.addEventListener('click', () => {
    confirmBtn.style.opacity = '0';
    logo.style.textShadow = 'white 0px 0px 20px';
    logo.style.color = 'white';
    logo.style.fontSize = '140px';
    setTimeout(() => {
        window.location.href = `http://127.0.0.1:5500/client/config_user_page/config_user.html`;
    }, 1500);
});

// (function () {
//     window.google = {
//         kEI: 'l90hZMP_GoGL5OUPq5WwkAI',
//         kEXPI: '31',
//         u: '5fff7696',
//         kBL: 'VEUU',
//         kOPI: 89978449,
//     };
//     google.sn = 'webhp';
//     google.kHL = 'pt-BR';
// })();
// (function () {
//     var f = this || self;
//     var h,
//         k = [];
//     function l(a) {
//         for (var b; a && (!a.getAttribute || !(b = a.getAttribute('eid'))); )
//             a = a.parentNode;
//         return b || h;
//     }
//     function m(a) {
//         for (
//             var b = null;
//             a && (!a.getAttribute || !(b = a.getAttribute('leid')));

//         )
//             a = a.parentNode;
//         return b;
//     }
//     function n(a, b, c, d, g) {
//         var e = '';
//         c ||
//             -1 !== b.search('&ei=') ||
//             ((e = '&ei=' + l(d)),
//             -1 === b.search('&lei=') && (d = m(d)) && (e += '&lei=' + d));
//         d = '';
//         !c &&
//             f._cshid &&
//             -1 === b.search('&cshid=') &&
//             'slh' !== a &&
//             (d = '&cshid=' + f._cshid);
//         c =
//             c ||
//             '/' +
//                 (g || 'gen_204') +
//                 '?atyp=i&ct=' +
//                 a +
//                 '&cad=' +
//                 b +
//                 e +
//                 '&zx=' +
//                 Date.now() +
//                 d;
//         /^http:/i.test(c) &&
//             'https:' === window.location.protocol &&
//             (google.ml && google.ml(Error('a'), !1, { src: c, glmm: 1 }),
//             (c = ''));
//         return c;
//     }
//     h = google.kEI;
//     google.getEI = l;
//     google.getLEI = m;
//     google.ml = function () {
//         return null;
//     };
//     google.log = function (a, b, c, d, g) {
//         if ((c = n(a, b, c, d, g))) {
//             a = new Image();
//             var e = k.length;
//             k[e] = a;
//             a.onerror =
//                 a.onload =
//                 a.onabort =
//                     function () {
//                         delete k[e];
//                     };
//             a.src = c;
//         }
//     };
//     google.logUrl = n;
// }.call(this));
// (function () {
//     google.y = {};
//     google.sy = [];
//     google.x = function (a, b) {
//         if (a) var c = a.id;
//         else {
//             do c = Math.random();
//             while (google.y[c]);
//         }
//         google.y[c] = [a, b];
//         return !1;
//     };
//     google.sx = function (a) {
//         google.sy.push(a);
//     };
//     google.lm = [];
//     google.plm = function (a) {
//         google.lm.push.apply(google.lm, a);
//     };
//     google.lq = [];
//     google.load = function (a, b, c) {
//         google.lq.push([[a], b, c]);
//     };
//     google.loadAll = function (a, b) {
//         google.lq.push([a, b]);
//     };
//     google.bx = !1;
//     google.lx = function () {};
// }.call(this));
// google.f = {};
// (function () {
//     document.documentElement.addEventListener(
//         'submit',
//         function (b) {
//             var a;
//             if ((a = b.target)) {
//                 var c = a.getAttribute('data-submitfalse');
//                 a = '1' === c || ('q' === c && !a.elements.q.value) ? !0 : !1;
//             } else a = !1;
//             a && (b.preventDefault(), b.stopPropagation());
//         },
//         !0
//     );
//     document.documentElement.addEventListener(
//         'click',
//         function (b) {
//             var a;
//             a: {
//                 for (
//                     a = b.target;
//                     a && a !== document.documentElement;
//                     a = a.parentElement
//                 )
//                     if ('A' === a.tagName) {
//                         a = '1' === a.getAttribute('data-nohref');
//                         break a;
//                     }
//                 a = !1;
//             }
//             a && b.preventDefault();
//         },
//         !0
//     );
// }.call(this));
// (function () {
//     google.hs = { h: true, nhs: false, sie: false };
// })();
// (function () {
//     google.c = {
//         bfrt: false,
//         bofr: false,
//         btfi: false,
//         c4t: false,
//         cap: 2000,
//         frt: false,
//         frvt: false,
//         gl: true,
//         lhc: false,
//         llt: false,
//         lrt: false,
//         raf: false,
//         sxs: false,
//         taf: false,
//         taff: true,
//         timl: false,
//         wh0: false,
//         whu: false,
//     };
// })();
// (function () {
//     var f = this || self;
//     var g = window.performance;
//     function h(a, b, d, c) {
//         a.addEventListener
//             ? a.addEventListener(b, d, c || !1)
//             : a.attachEvent && a.attachEvent('on' + b, d);
//     }
//     function k(a, b, d, c) {
//         'addEventListener' in a
//             ? a.removeEventListener(b, d, c || !1)
//             : a.attachEvent && a.detachEvent('on' + b, d);
//     }
//     google.c.iim = google.c.iim || {};
//     function l(a) {
//         a && f.google.aft(a.target);
//     }
//     var m;
//     function n() {
//         k(document.documentElement, 'load', m, !0);
//         k(document.documentElement, 'error', m, !0);
//     }
//     google.timers = {};
//     google.startTick = function (a) {
//         google.timers[a] = { t: { start: Date.now() }, e: {}, m: {} };
//     };
//     google.tick = function (a, b, d) {
//         google.timers[a] || google.startTick(a);
//         d = void 0 !== d ? d : Date.now();
//         b instanceof Array || (b = [b]);
//         for (var c = 0, e; (e = b[c++]); ) google.timers[a].t[e] = d;
//     };
//     google.c.e = function (a, b, d) {
//         google.timers[a].e[b] = d;
//     };
//     google.c.b = function (a, b) {
//         b = google.timers[b || 'load'].m;
//         b[a] && google.ml(Error('a'), !1, { m: a });
//         b[a] = !0;
//     };
//     google.c.u = function (a, b) {
//         var d = google.timers[b || 'load'],
//             c = d.m;
//         if (c[a]) {
//             c[a] = !1;
//             for (a in c) if (c[a]) return;
//             google.csiReport(d, 'load2' === b ? 'all2' : 'all');
//         } else {
//             b = '';
//             for (var e in c) b += e + ':' + c[e] + ';';
//             google.ml(Error('b'), !1, { m: a, b: !1 === c[a], s: b });
//         }
//     };
//     google.rll = function (a, b, d) {
//         function c(e) {
//             d(e);
//             k(a, 'load', c);
//             k(a, 'error', c);
//         }
//         h(a, 'load', c);
//         b && h(a, 'error', c);
//     };
//     f.google.aft = function (a) {
//         a.setAttribute('data-iml', String(Date.now()));
//     };
//     google.startTick('load');
//     var p = google.timers.load;
//     a: {
//         var q = p.t;
//         if (g) {
//             var r = g.timing;
//             if (r) {
//                 var t = r.navigationStart,
//                     u = r.responseStart;
//                 if (u > t && u <= q.start) {
//                     q.start = u;
//                     p.wsrt = u - t;
//                     break a;
//                 }
//             }
//             g.now && (p.wsrt = Math.floor(g.now()));
//         }
//     }
//     google.c.b('pr', 'load');
//     google.c.b('xe', 'load');
//     function v(a) {
//         if ('hidden' === document.visibilityState) {
//             google.c.fh = a;
//             var b;
//             window.performance &&
//                 window.performance.timing &&
//                 (b = Math.floor(window.performance.timing.navigationStart + a));
//             google.tick('load', 'fht', b);
//             return !0;
//         }
//         return !1;
//     }
//     function w(a) {
//         v(a.timeStamp) && k(document, 'visibilitychange', w, !0);
//     }
//     google.c.fh = Infinity;
//     h(document, 'visibilitychange', w, !0);
//     v(0);
//     google.c.gl &&
//         ((m = l),
//         h(document.documentElement, 'load', m, !0),
//         (google.c.glu = n));
// }.call(this));
// (function () {
//     function g(a) {
//         try {
//             a();
//         } catch (b) {
//             google.ml(b, !1);
//         }
//     }
//     google.caft = function (a, b) {
//         null === google.aftq
//             ? g(a)
//             : ((google.aftq = google.aftq || []),
//               google.aftq.push(a),
//               b &&
//                   window.setTimeout(function () {
//                       google.aftq &&
//                           ((google.aftq = google.aftq.filter(function (c) {
//                               return a !== c;
//                           })),
//                           g(a));
//                   }, b));
//     };
//     function h() {
//         return (
//             window.performance &&
//             window.performance.navigation &&
//             window.performance.navigation.type
//         );
//     }
//     function m(a) {
//         if (!a || q(a)) return 0;
//         if (!a.getBoundingClientRect) return 1;
//         var b = function (c) {
//             return c.getBoundingClientRect();
//         };
//         return r(a, b) ? 0 : u(a, b);
//     }
//     function r(a, b) {
//         var c;
//         a: {
//             for (c = a; c && void 0 !== c; c = c.parentElement)
//                 if (
//                     'hidden' === c.style.overflow ||
//                     ('G-EXPANDABLE-CONTENT' === c.tagName &&
//                         'hidden' ===
//                             getComputedStyle(c).getPropertyValue('overflow'))
//                 )
//                     break a;
//             c = null;
//         }
//         if (!c) return !1;
//         a = b(a);
//         b = b(c);
//         return (
//             a.bottom < b.top ||
//             a.top >= b.bottom ||
//             a.right < b.left ||
//             a.left >= b.right
//         );
//     }
//     function q(a) {
//         return 'none' === a.style.display
//             ? !0
//             : document.defaultView && document.defaultView.getComputedStyle
//             ? ((a = document.defaultView.getComputedStyle(a)),
//               !!a &&
//                   ('hidden' === a.visibility ||
//                       ('0px' === a.height && '0px' === a.width)))
//             : !1;
//     }
//     function u(a, b) {
//         var c = b(a);
//         a = c.left + window.pageXOffset;
//         b = c.top + window.pageYOffset;
//         var d = c.width;
//         c = c.height;
//         var e = 0;
//         if (0 >= c && 0 >= d) return e;
//         var f = window.innerHeight || document.documentElement.clientHeight;
//         0 > b + c ? (e = 2) : b >= f && (e = 4);
//         if (
//             0 > a + d ||
//             a >= (window.innerWidth || document.documentElement.clientWidth)
//         )
//             e |= 8;
//         e || ((e = 1), b + c > f && (e |= 4));
//         return e;
//     }
//     var aa = window.location,
//         ba = 'aft afti aftr afts cbs cbt fht frt frts frvt hct prt sct'.split(
//             ' '
//         );
//     function v(a) {
//         return (a = aa.search.match(new RegExp('[?&]' + a + '=(\\d+)')))
//             ? Number(a[1])
//             : -1;
//     }
//     function w(a, b) {
//         var c = google.timers[b || 'load'];
//         b = c.m;
//         if (!b || !b.prs) {
//             var d = h() ? 0 : v('qsubts');
//             0 < d && ((b = v('fbts')), 0 < b && (c.t.start = Math.max(d, b)));
//             var e = c.t,
//                 f = e.start;
//             b = { wsrt: c.wsrt || 0 };
//             if (f)
//                 for (var p = 0, n; (n = ba[p++]); ) {
//                     var k = e[n];
//                     k && (b[n] = Math.max(k - f, 0));
//                 }
//             0 < d && (b.gsasrt = c.t.start - d);
//             c = c.e;
//             a =
//                 '/gen_204?s=' +
//                 google.sn +
//                 '&t=' +
//                 a +
//                 '&atyp=csi&ei=' +
//                 google.kEI +
//                 '&rt=';
//             d = '';
//             for (l in b) (a += '' + d + l + '.' + b[l]), (d = ',');
//             for (var t in c) a += '&' + t + '=' + c[t];
//             window._cshid && (a += '&cshid=' + window._cshid);
//             2 === h() && (a += '&bb=1');
//             1 === h() && (a += '&r=1');
//             if ('gsasrt' in b) {
//                 var l = v('qsd');
//                 0 < l && (a += '&qsd=' + l);
//             }
//             google.kBL && (a += '&bl=' + google.kBL);
//             l = a;
//             navigator.sendBeacon
//                 ? navigator.sendBeacon(l, '')
//                 : google.log('', '', l);
//         }
//     }
//     function x(a) {
//         a && google.tick('load', 'cbs', a);
//         google.tick('load', 'cbt');
//         w('cap');
//     }
//     var y = 'src bsrc url ll image img-url'.split(' ');
//     function ca(a) {
//         for (var b = 0; b < y.length; ++b)
//             if (a.getAttribute('data-' + y[b])) return !0;
//         return !1;
//     }
//     function da(a) {
//         var b = a.parentElement;
//         if (
//             b &&
//             ('G-IMG' === b.tagName || b.classList.contains('uhHOwf')) &&
//             (b.style.height || b.style.width)
//         ) {
//             var c = b.getBoundingClientRect(),
//                 d = a.getBoundingClientRect();
//             if (c.height <= d.height || c.width <= d.width) a = b;
//         }
//         return m(a);
//     }
//     google.c.iim = google.c.iim || {};
//     var z = window.performance;
//     var A = window.innerHeight || document.documentElement.clientHeight,
//         B = 0,
//         C = 0,
//         D = 0,
//         E = 0,
//         F = 0,
//         G = 0,
//         H = 0,
//         I = 0,
//         J = 0,
//         K = 0,
//         L = !0,
//         M = !0,
//         N = -1,
//         O,
//         P = google.c.sxs ? 'load2' : 'load';
//     function Q(a, b, c, d) {
//         var e = google.timers[P].t[a];
//         (e && (c || (d && null != b && b < e))) || google.tick(P, a, b);
//     }
//     function R(a, b, c) {
//         var d = '1' === a.getAttribute('data-frt');
//         google.c.frt && d && (Q('frt', c, !1, !0), ++E, S());
//         b &&
//             (google.c.frvt && d && (Q('frvt', c, !1, !0), ++G),
//             Q('aft', c, !1, !0),
//             Q('afti', c, !1, !0),
//             ++I,
//             L || (N = A),
//             S());
//         google.c.timl && Q('iml', c, !1, !0);
//         ++C;
//         a.setAttribute('data-frt', '0');
//         (google.c.timl || b || (google.c.bfrt && d)) && T();
//     }
//     function T() {
//         var a = I === H,
//             b = E === D;
//         a = google.c.bfrt ? a && b : a;
//         a = google.c.timl ? C === B : a;
//         !M && a && google.c.u('il', P);
//     }
//     function S() {
//         if (!L) {
//             var a = I === H,
//                 b = E === D,
//                 c = google.c.frvt && G === F;
//             a &&
//                 (google.c.e(P, 'aft', '1'),
//                 google.c.e(P, 'aftp', String(Math.round(N))));
//             if (
//                 a &&
//                 b &&
//                 (O && clearTimeout(O),
//                 w(google.c.sxs ? 'aft2' : 'aft', P),
//                 !google.c.sxs && google.c.c4t && z && z.mark && z.timing)
//             ) {
//                 var d = google.timers.load,
//                     e = d.wsrt;
//                 d = d.t.aft;
//                 e &&
//                     0 < e &&
//                     d &&
//                     0 < d &&
//                     ((d -= z.timing.navigationStart),
//                     0 < d &&
//                         (z.mark('SearchAFTStart', { startTime: e }),
//                         z.mark('trigger:SearchAFTEnd', { startTime: d })));
//             }
//             'hidden' === document.visibilityState && google.c.e(P, 'hddn', '1');
//             if (
//                 !google.c.sxs &&
//                 null !== google.aftq &&
//                 (2 === google.fevent || 3 === google.fevent
//                     ? google.fevent
//                     : 1) &
//                     ((a ? 1 : 0) | (c || b ? 2 : 0))
//             ) {
//                 google.tick('load', 'aftqf', Date.now());
//                 var f;
//                 for (a = 0; (b = null == (f = google.aftq) ? void 0 : f[a++]); )
//                     g(b);
//                 google.aftq = null;
//             }
//         }
//     }
//     function W() {
//         L &&
//             !google.c.bofr &&
//             ((L = !1),
//             L ||
//                 (google.c.e(P, 'ima', String(H)),
//                 google.c.e(P, 'imad', String(J)),
//                 google.c.e(P, 'imac', String(K)),
//                 google.c.e(P, 'imf', String(D)),
//                 document.getElementsByClassName('Ib7Efc').length &&
//                     google.c.e(P, 'ddl', '1')),
//             S());
//     }
//     function X(a, b) {
//         0 === b ||
//             b & 8 ||
//             (a.setAttribute('data-frt', '1'), google.c.frt && ++D);
//     }
//     if (0 < google.c.cap && !google.c.sxs)
//         a: {
//             var ea = google.c.cap;
//             if (
//                 window.performance &&
//                 window.performance.timing &&
//                 'navigationStart' in window.performance.timing
//             ) {
//                 var Y = window.performance.now(),
//                     Z = ea - Y;
//                 if (0 < Z) {
//                     O = setTimeout(
//                         x,
//                         Z,
//                         Math.floor(
//                             window.performance.timing.navigationStart + Y
//                         )
//                     );
//                     break a;
//                 }
//                 x();
//             }
//             O = void 0;
//         }
//     google.c.wh = Math.floor(
//         window.innerHeight || document.documentElement.clientHeight
//     );
//     google.c.e(P, 'wh', String(google.c.wh));
//     google.c.b('il', P);
//     google.c.setup = function (a, b, c) {
//         var d = a.getAttribute('data-atf');
//         if (d)
//             return (
//                 (c = Number(d)), b && !a.hasAttribute('data-frt') && X(a, c), c
//             );
//         var e = 'string' !== typeof a.src || !a.src,
//             f = !!a.getAttribute('data-bsrc'),
//             p = !!a.getAttribute('data-deferred'),
//             n = !p && ca(a);
//         n && a.setAttribute('data-lzy_', '1');
//         d = da(a);
//         a.setAttribute('data-atf', String(d));
//         var k = !!(d & 1);
//         e = (e || a.complete) && !p && !f && !(k && n);
//         f = (!google.c.lhc && Number(a.getAttribute('data-iml'))) || 0;
//         ++B;
//         if ((e && !f) || a.hasAttribute('data-noaft'))
//             a.setAttribute('data-frt', '0'), ++C, k && ++K;
//         else {
//             var t = d & 4,
//                 l = google.c.btfi && t && f && N < A;
//             if (l) {
//                 var U = a.getBoundingClientRect().top + window.pageYOffset;
//                 !c || 0 > c || U < c ? (N = k ? A : U) : (l = !1);
//             }
//             k && (++H, p && ++J);
//             b && X(a, d);
//             google.c.frvt && k && b && ++F;
//             l && (Q('aft', f, !1, !0), Q('aftb', f, !1, !0));
//             if (e && f) R(a, k, google.c.btfi ? 0 : f);
//             else {
//                 k &&
//                     (!((google.c.taff && google.c.taf) || c) ||
//                         t ||
//                         (c && (0 > c || c >= A))) &&
//                     (N = A);
//                 var V = a.src;
//                 google.rll(a, !0, function () {
//                     (p || n) && V && V === a.src
//                         ? google.rll(a, !0, function () {
//                               R(a, k, Date.now());
//                           })
//                         : R(a, k, Date.now());
//                 });
//             }
//         }
//         return d;
//     };
//     google.c.ubr = function (a, b, c, d) {
//         google.c.taf && N < A
//             ? ((N = c || -1), Q('aft', b))
//             : 0 > N && (c && (N = c), google.c.btfi && Q('aft', b));
//         a || Q('afts', b, !0);
//         d ||
//             (Q('aft', b, !0),
//             a && M
//                 ? (Q('prt', b),
//                   google.c.timl && Q('iml', b, !0),
//                   (M = !1),
//                   W(),
//                   T(),
//                   (google.c.setup = function () {
//                       retur;
//                   }),
//                   (google.c.ubr = function () {}))
//                 : W());
//     };
// }.call(this));
// (function () {
//     var b = [
//         function () {
//             google.tick && google.tick('load', 'dcl');
//         },
//     ];
//     google.dclc = function (a) {
//         b.length ? b.push(a) : a();
//     };
//     function c() {
//         for (var a = b.shift(); a; ) a(), (a = b.shift());
//     }
//     window.addEventListener
//         ? (document.addEventListener('DOMContentLoaded', c, !1),
//           window.addEventListener('load', c, !1))
//         : window.attachEvent && window.attachEvent('onload', c);
// }.call(this));
// (function () {
//     var b = [];
//     google.jsc = {
//         xx: b,
//         x: function (a) {
//             b.push(a);
//         },
//         mm: [],
//         m: function (a) {
//             google.jsc.mm.length || (google.jsc.mm = a);
//         },
//     };
// }.call(this));
// (function () {
//     var e = this || self;
//     var f = {};
//     function w(a, c) {
//         if (null === c) return !1;
//         if ('contains' in a && 1 == c.nodeType) return a.contains(c);
//         if ('compareDocumentPosition' in a)
//             return a == c || !!(a.compareDocumentPosition(c) & 16);
//         for (; c && a != c; ) c = c.parentNode;
//         return c == a;
//     }
//     var y = function (a, c) {
//             return function (d) {
//                 d || (d = window.event);
//                 return c.call(a, d);
//             };
//         },
//         z =
//             'undefined' != typeof navigator &&
//             /Macintosh/.test(navigator.userAgent),
//         E = function () {
//             this._mouseEventsPrevented = !0;
//         };
//     var F = function (a) {
//             this.g = a;
//             this.h = [];
//         },
//         G = function (a) {
//             for (var c = 0; c < a.h.length; ++c) {
//                 var d = a.g,
//                     b = a.h[c];
//                 d.removeEventListener
//                     ? d.removeEventListener(b.eventType, b.o, b.capture)
//                     : d.detachEvent && d.detachEvent('on' + b.eventType, b.o);
//             }
//             a.h = [];
//         };
//     var H = e._jsa || {};
//     H._cfc = void 0;
//     H._aeh = void 0;
//     var I = function () {
//             this.h = this.g = null;
//         },
//         K = function (a, c) {
//             var d = J;
//             d.g = a;
//             d.h = c;
//             return d;
//         };
//     I.prototype.i = function () {
//         var a = this.g;
//         this.g && this.g != this.h
//             ? (this.g = this.g.__owner || this.g.parentNode)
//             : (this.g = null);
//         return a;
//     };
//     var L = function () {
//             var a;
//             this.j = a = void 0 === a ? [] : a;
//             this.g = 0;
//             this.h = null;
//             this.l = !1;
//         },
//         N = function (a, c) {
//             var d = M;
//             d.j = a;
//             d.g = 0;
//             d.h = c;
//             d.l = !1;
//             return d;
//         };
//     L.prototype.i = function () {
//         if (this.l) return J.i();
//         if (this.g != this.j.length) {
//             var a = this.j[this.g];
//             this.g++;
//             a != this.h &&
//                 a &&
//                 a.__owner &&
//                 ((this.l = !0), K(a.__owner, this.h));
//             return a;
//         }
//         return null;
//     };
//     var J = new I(),
//         M = new L();
//     var Q = function () {
//             this.s = [];
//             this.g = [];
//             this.h = [];
//             this.l = {};
//             this.i = null;
//             this.j = [];
//             P(this, '_custom');
//         },
//         R = function (a) {
//             return String.prototype.trim
//                 ? a.trim()
//                 : a.replace(/^\s+/, '').replace(/\s+$/, '');
//         },
//         ia = function (a, c) {
//             return function m(b, g) {
//                 g = void 0 === g ? !0 : g;
//                 var l = c;
//                 if ('_custom' == l) {
//                     l = b.detail;
//                     if (!l || !l._type) return;
//                     l = l._type;
//                 }
//                 var k = l;
//                 'click' == k &&
//                 ((z && b.metaKey) ||
//                     (!z && b.ctrlKey) ||
//                     2 == b.which ||
//                     (null == b.which && 4 == b.button) ||
//                     b.shiftKey)
//                     ? (k = 'clickmod')
//                     : 'keydown' == k && !b.a11ysc && (k = 'maybe_click');
//                 var u = b.srcElement || b.target;
//                 l = S(k, b, u, '', null);
//                 var aa = b.path
//                     ? N(b.path, this)
//                     : b.composedPath
//                     ? N(b.composedPath(), this)
//                     : K(u, this);
//                 for (var r; (r = aa.i()); ) {
//                     var h = r;
//                     var p = void 0;
//                     r = h;
//                     var q = k,
//                         ba = b;
//                     var n = r.__jsaction;
//                     if (!n) {
//                         var x;
//                         n = null;
//                         'getAttribute' in r && (n = r.getAttribute('jsaction'));
//                         if ((x = n)) {
//                             n = f[x];
//                             if (!n) {
//                                 n = {};
//                                 for (
//                                     var A = x.split(ca),
//                                         da = A ? A.length : 0,
//                                         B = 0;
//                                     B < da;
//                                     B++
//                                 ) {
//                                     var v = A[B];
//                                     if (v) {
//                                         var C = v.indexOf(':'),
//                                             O = -1 != C,
//                                             fa = O ? R(v.substr(0, C)) : ea;
//                                         v = O ? R(v.substr(C + 1)) : v;
//                                         n[fa] = v;
//                                     }
//                                 }
//                                 f[x] = n;
//                             }
//                             r.__jsaction = n;
//                         } else (n = ha), (r.__jsaction = n);
//                     }
//                     'maybe_click' == q && n.click
//                         ? ((p = q), (q = 'click'))
//                         : 'clickkey' == q
//                         ? (q = 'click')
//                         : 'click' != q || n.click || (q = 'clickonly');
//                     p =
//                         H._cfc && n.click
//                             ? H._cfc(r, ba, n, q, p)
//                             : {
//                                   eventType: p ? p : q,
//                                   action: n[q] || '',
//                                   event: null,
//                                   ignore: !1,
//                               };
//                     l = S(
//                         p.eventType,
//                         p.event || b,
//                         u,
//                         p.action || '',
//                         h,
//                         l.timeStamp
//                     );
//                     if (p.ignore || p.action) break;
//                 }
//                 l &&
//                     'touchend' == l.eventType &&
//                     (l.event._preventMouseEvents = E);
//                 if (p && p.action) {
//                     if (
//                         'mouseenter' == k ||
//                         'mouseleave' == k ||
//                         'pointerenter' == k ||
//                         'pointerleave' == k
//                     )
//                         if (
//                             ((u = b.relatedTarget),
//                             !(
//                                 ('mouseover' == b.type && 'mouseenter' == k) ||
//                                 ('mouseout' == b.type && 'mouseleave' == k) ||
//                                 ('pointerover' == b.type &&
//                                     'pointerenter' == k) ||
//                                 ('pointerout' == b.type && 'pointerleave' == k)
//                             ) ||
//                                 (u && (u === h || w(h, u))))
//                         )
//                             (l.action = ''), (l.actionElement = null);
//                         else {
//                             k = {};
//                             for (var t in b)
//                                 'function' !== typeof b[t] &&
//                                     'srcElement' !== t &&
//                                     'target' !== t &&
//                                     (k[t] = b[t]);
//                             k.type =
//                                 'mouseover' == b.type
//                                     ? 'mouseenter'
//                                     : 'mouseout' == b.type
//                                     ? 'mouseleave'
//                                     : 'pointerover' == b.type
//                                     ? 'pointerenter'
//                                     : 'pointerleave';
//                             k.target = k.srcElement = h;
//                             k.bubbles = !1;
//                             l.event = k;
//                             l.targetElement = h;
//                         }
//                 } else (l.action = ''), (l.actionElement = null);
//                 h = l;
//                 a.i &&
//                     !h.event.a11ysgd &&
//                     ((t = S(
//                         h.eventType,
//                         h.event,
//                         h.targetElement,
//                         h.action,
//                         h.actionElement,
//                         h.timeStamp
//                     )),
//                     'clickonly' == t.eventType && (t.eventType = 'click'),
//                     a.i(t, !0));
//                 if (h.actionElement || 'maybe_click' == h.eventType) {
//                     if (a.i) {
//                         if (
//                             (!h.actionElement ||
//                                 'A' != h.actionElement.tagName ||
//                                 ('click' != h.eventType &&
//                                     'clickmod' != h.eventType) ||
//                                 (b.preventDefault
//                                     ? b.preventDefault()
//                                     : (b.returnValue = !1)),
//                             (b = a.i(h)) && g)
//                         ) {
//                             m.call(this, b, !1);
//                             return;
//                         }
//                     } else {
//                         if (
//                             (g = e.document) &&
//                             !g.createEvent &&
//                             g.createEventObject
//                         )
//                             try {
//                                 var D = g.createEventObject(b);
//                             } catch (la) {
//                                 D = b;
//                             }
//                         else D = b;
//                         h.event = D;
//                         a.j.push(h);
//                     }
//                     H._aeh && H._aeh(h);
//                 }
//             };
//         },
//         S = function (a, c, d, b, g, m) {
//             return {
//                 eventType: a,
//                 event: c,
//                 targetElement: d,
//                 action: b,
//                 actionElement: g,
//                 timeStamp: m || Date.now(),
//             };
//         },
//         ja = function (a, c) {
//             return function (d) {
//                 var b = a,
//                     g = c,
//                     m = !1;
//                 'mouseenter' == b
//                     ? (b = 'mouseover')
//                     : 'mouseleave' == b
//                     ? (b = 'mouseout')
//                     : 'pointerenter' == b
//                     ? (b = 'pointerover')
//                     : 'pointerleave' == b && (b = 'pointerout');
//                 if (d.addEventListener) {
//                     if (
//                         'focus' == b ||
//                         'blur' == b ||
//                         'error' == b ||
//                         'load' == b ||
//                         'toggle' == b
//                     )
//                         m = !0;
//                     d.addEventListener(b, g, m);
//                 } else
//                     d.attachEvent &&
//                         ('focus' == b
//                             ? (b = 'focusin')
//                             : 'blur' == b && (b = 'focusout'),
//                         (g = y(d, g)),
//                         d.attachEvent('on' + b, g));
//                 return { eventType: b, o: g, capture: m };
//             };
//         },
//         P = function (a, c) {
//             if (!a.l.hasOwnProperty(c)) {
//                 var d = ia(a, c),
//                     b = ja(c, d);
//                 a.l[c] = d;
//                 a.s.push(b);
//                 for (d = 0; d < a.g.length; ++d) {
//                     var g = a.g[d];
//                     g.h.push(b.call(null, g.g));
//                 }
//                 'click' == c && P(a, 'keydown');
//             }
//         };
//     Q.prototype.o = function (a) {
//         return this.l[a];
//     };
//     var W = function (a, c) {
//             var d = new F(c);
//             a: {
//                 for (var b = 0; b < a.g.length; b++)
//                     if (T(a.g[b].g, c)) {
//                         c = !0;
//                         break a;
//                     }
//                 c = !1;
//             }
//             if (c) return a.h.push(d), d;
//             U(a, d);
//             a.g.push(d);
//             V(a);
//             return d;
//         },
//         V = function (a) {
//             for (
//                 var c = a.h.concat(a.g), d = [], b = [], g = 0;
//                 g < a.g.length;
//                 ++g
//             ) {
//                 var m = a.g[g];
//                 X(m, c) ? (d.push(m), G(m)) : b.push(m);
//             }
//             for (g = 0; g < a.h.length; ++g)
//                 (m = a.h[g]), X(m, c) ? d.push(m) : (b.push(m), U(a, m));
//             a.g = b;
//             a.h = d;
//         },
//         U = function (a, c) {
//             var d = c.g;
//             ka && (d.style.cursor = 'pointer');
//             for (d = 0; d < a.s.length; ++d) c.h.push(a.s[d].call(null, c.g));
//         },
//         Y = function (a, c) {
//             a.i = c;
//             a.j && (0 < a.j.length && c(a.j), (a.j = null));
//         },
//         X = function (a, c) {
//             for (var d = 0; d < c.length; ++d)
//                 if (c[d].g != a.g && T(c[d].g, a.g)) return !0;
//             return !1;
//         },
//         T = function (a, c) {
//             for (; a != c && c.parentNode; ) c = c.parentNode;
//             return a == c;
//         },
//         ka =
//             'undefined' != typeof navigator &&
//             /iPhone|iPad|iPod/.test(navigator.userAgent),
//         ca = /\s*;\s*/,
//         ea = 'click',
//         ha = {};
//     var Z = new Q();
//     W(Z, window.document.documentElement);
//     P(Z, 'click');
//     P(Z, 'focus');
//     P(Z, 'focusin');
//     P(Z, 'blur');
//     P(Z, 'focusout');
//     P(Z, 'error');
//     P(Z, 'load');
//     P(Z, 'auxclick');
//     P(Z, 'change');
//     P(Z, 'dblclick');
//     P(Z, 'beforeinput');
//     P(Z, 'input');
//     P(Z, 'keyup');
//     P(Z, 'keydown');
//     P(Z, 'keypress');
//     P(Z, 'mousedown');
//     P(Z, 'mouseenter');
//     P(Z, 'mouseleave');
//     P(Z, 'mouseout');
//     P(Z, 'mouseover');
//     P(Z, 'mouseup');
//     P(Z, 'paste');
//     P(Z, 'pointerenter');
//     P(Z, 'pointerleave');
//     P(Z, 'touchstart');
//     P(Z, 'touchend');
//     P(Z, 'touchcancel');
//     P(Z, 'transitioncancel');
//     P(Z, 'transitionend');
//     P(Z, 'transitionrun');
//     P(Z, 'transitionstart');
//     P(Z, 'dragover');
//     P(Z, 'dragenter');
//     P(Z, 'dragleave');
//     P(Z, 'drop');
//     P(Z, 'dragstart');
//     P(Z, 'dragend');
//     P(Z, 'speech');
//     (function (a) {
//         google.jsad = function (c) {
//             Y(a, c);
//         };
//         google.jsaac = function (c) {
//             return W(a, c);
//         };
//         google.jsarc = function (c) {
//             G(c);
//             for (var d = !1, b = 0; b < a.g.length; ++b)
//                 if (a.g[b] === c) {
//                     a.g.splice(b, 1);
//                     d = !0;
//                     break;
//                 }
//             if (!d)
//                 for (d = 0; d < a.h.length; ++d)
//                     if (a.h[d] === c) {
//                         a.h.splice(d, 1);
//                         break;
//                     }
//             V(a);
//         };
//     })(Z);
//     e.gws_wizbind = (function (a) {
//         return {
//             trigger: function (c) {
//                 var d = a.o(c.type);
//                 d || (P(a, c.type), (d = a.o(c.type)));
//                 var b = c.target || c.srcElement;
//                 d && d.call(b.ownerDocument.documentElement, c);
//             },
//             bind: function (c) {
//                 Y(a, c);
//             },
//         };
//     })(Z);
// }.call(this));
// (function () {
//     function b(c) {
//         var a;
//         a: {
//             for (
//                 a = c.target;
//                 a && a !== document.documentElement;
//                 a = a.parentElement
//             )
//                 if ('A' === a.tagName && '1' === a.getAttribute('data-jsarwt'))
//                     break a;
//             a = null;
//         }
//         a && window.jsarwt(a, null, c);
//         return !0;
//     }
//     window.document.documentElement.addEventListener('mousedown', b, !0);
//     window.document.documentElement.addEventListener('touchstart', b, !0);
// }.call(this));
