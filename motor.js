(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        n(s);
    new MutationObserver(s => {
        for (const r of s)
            if (r.type === "childList")
                for (const o of r.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function e(s) {
        const r = {};
        return s.integrity && (r.integrity = s.integrity),
        s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function n(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const r = e(s);
        fetch(s.href, r)
    }
}
)();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ko = "160"
  , Rh = 0
  , _a = 1
  , Ch = 2
  , mc = 1
  , Lh = 2
  , Vn = 3
  , ai = 0
  , Je = 1
  , bn = 2
  , ii = 0
  , rs = 1
  , Do = 2
  , va = 3
  , xa = 4
  , Ph = 5
  , yi = 100
  , Dh = 101
  , Ih = 102
  , Ma = 103
  , ya = 104
  , Uh = 200
  , Oh = 201
  , Nh = 202
  , Fh = 203
  , Io = 204
  , Uo = 205
  , kh = 206
  , Bh = 207
  , zh = 208
  , Gh = 209
  , Hh = 210
  , Vh = 211
  , Wh = 212
  , Xh = 213
  , qh = 214
  , Kh = 0
  , Yh = 1
  , $h = 2
  , Ar = 3
  , jh = 4
  , Zh = 5
  , Jh = 6
  , Qh = 7
  , Yo = 0
  , tu = 1
  , eu = 2
  , si = 0
  , nu = 1
  , iu = 2
  , su = 3
  , ru = 4
  , ou = 5
  , au = 6
  , gc = 300
  , cs = 301
  , hs = 302
  , Oo = 303
  , No = 304
  , Or = 306
  , Us = 1e3
  , En = 1001
  , Fo = 1002
  , he = 1003
  , Sa = 1004
  , Yr = 1005
  , _n = 1006
  , lu = 1007
  , Os = 1008
  , ri = 1009
  , cu = 1010
  , hu = 1011
  , $o = 1012
  , _c = 1013
  , ei = 1014
  , ni = 1015
  , Ns = 1016
  , vc = 1017
  , xc = 1018
  , bi = 1020
  , uu = 1021
  , Tn = 1023
  , fu = 1024
  , du = 1025
  , Ei = 1026
  , us = 1027
  , pu = 1028
  , Mc = 1029
  , mu = 1030
  , yc = 1031
  , Sc = 1033
  , $r = 33776
  , jr = 33777
  , Zr = 33778
  , Jr = 33779
  , ba = 35840
  , Ea = 35841
  , Ta = 35842
  , wa = 35843
  , bc = 36196
  , Aa = 37492
  , Ra = 37496
  , Ca = 37808
  , La = 37809
  , Pa = 37810
  , Da = 37811
  , Ia = 37812
  , Ua = 37813
  , Oa = 37814
  , Na = 37815
  , Fa = 37816
  , ka = 37817
  , Ba = 37818
  , za = 37819
  , Ga = 37820
  , Ha = 37821
  , Qr = 36492
  , Va = 36494
  , Wa = 36495
  , gu = 36283
  , Xa = 36284
  , qa = 36285
  , Ka = 36286
  , Ec = 3e3
  , Ti = 3001
  , _u = 3200
  , vu = 3201
  , Tc = 0
  , xu = 1
  , vn = ""
  , Me = "srgb"
  , qn = "srgb-linear"
  , jo = "display-p3"
  , Nr = "display-p3-linear"
  , Rr = "linear"
  , _e = "srgb"
  , Cr = "rec709"
  , Lr = "p3"
  , Di = 7680
  , Ya = 519
  , Mu = 512
  , yu = 513
  , Su = 514
  , wc = 515
  , bu = 516
  , Eu = 517
  , Tu = 518
  , wu = 519
  , ko = 35044
  , $a = 35048
  , ja = "300 es"
  , Bo = 1035
  , Xn = 2e3
  , Pr = 2001;
class ds {
    addEventListener(t, e) {
        this._listeners === void 0 && (this._listeners = {});
        const n = this._listeners;
        n[t] === void 0 && (n[t] = []),
        n[t].indexOf(e) === -1 && n[t].push(e)
    }
    hasEventListener(t, e) {
        if (this._listeners === void 0)
            return !1;
        const n = this._listeners;
        return n[t] !== void 0 && n[t].indexOf(e) !== -1
    }
    removeEventListener(t, e) {
        if (this._listeners === void 0)
            return;
        const s = this._listeners[t];
        if (s !== void 0) {
            const r = s.indexOf(e);
            r !== -1 && s.splice(r, 1)
        }
    }
    dispatchEvent(t) {
        if (this._listeners === void 0)
            return;
        const n = this._listeners[t.type];
        if (n !== void 0) {
            t.target = this;
            const s = n.slice(0);
            for (let r = 0, o = s.length; r < o; r++)
                s[r].call(this, t);
            t.target = null
        }
    }
}
const We = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]
  , Tr = Math.PI / 180
  , zo = 180 / Math.PI;
function oi() {
    const i = Math.random() * 4294967295 | 0
      , t = Math.random() * 4294967295 | 0
      , e = Math.random() * 4294967295 | 0
      , n = Math.random() * 4294967295 | 0;
    return (We[i & 255] + We[i >> 8 & 255] + We[i >> 16 & 255] + We[i >> 24 & 255] + "-" + We[t & 255] + We[t >> 8 & 255] + "-" + We[t >> 16 & 15 | 64] + We[t >> 24 & 255] + "-" + We[e & 63 | 128] + We[e >> 8 & 255] + "-" + We[e >> 16 & 255] + We[e >> 24 & 255] + We[n & 255] + We[n >> 8 & 255] + We[n >> 16 & 255] + We[n >> 24 & 255]).toLowerCase()
}
function en(i, t, e) {
    return Math.max(t, Math.min(e, i))
}
function Au(i, t) {
    return (i % t + t) % t
}
function to(i, t, e) {
    return (1 - e) * i + e * t
}
function Za(i) {
    return (i & i - 1) === 0 && i !== 0
}
function Go(i) {
    return Math.pow(2, Math.floor(Math.log(i) / Math.LN2))
}
function Wn(i, t) {
    switch (t.constructor) {
    case Float32Array:
        return i;
    case Uint32Array:
        return i / 4294967295;
    case Uint16Array:
        return i / 65535;
    case Uint8Array:
        return i / 255;
    case Int32Array:
        return Math.max(i / 2147483647, -1);
    case Int16Array:
        return Math.max(i / 32767, -1);
    case Int8Array:
        return Math.max(i / 127, -1);
    default:
        throw new Error("Invalid component type.")
    }
}
function le(i, t) {
    switch (t.constructor) {
    case Float32Array:
        return i;
    case Uint32Array:
        return Math.round(i * 4294967295);
    case Uint16Array:
        return Math.round(i * 65535);
    case Uint8Array:
        return Math.round(i * 255);
    case Int32Array:
        return Math.round(i * 2147483647);
    case Int16Array:
        return Math.round(i * 32767);
    case Int8Array:
        return Math.round(i * 127);
    default:
        throw new Error("Invalid component type.")
    }
}
class Kt {
    constructor(t=0, e=0) {
        Kt.prototype.isVector2 = !0,
        this.x = t,
        this.y = e
    }
    get width() {
        return this.x
    }
    set width(t) {
        this.x = t
    }
    get height() {
        return this.y
    }
    set height(t) {
        this.y = t
    }
    set(t, e) {
        return this.x = t,
        this.y = e,
        this
    }
    setScalar(t) {
        return this.x = t,
        this.y = t,
        this
    }
    setX(t) {
        return this.x = t,
        this
    }
    setY(t) {
        return this.y = t,
        this
    }
    setComponent(t, e) {
        switch (t) {
        case 0:
            this.x = e;
            break;
        case 1:
            this.y = e;
            break;
        default:
            throw new Error("index is out of range: " + t)
        }
        return this
    }
    getComponent(t) {
        switch (t) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw new Error("index is out of range: " + t)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y)
    }
    copy(t) {
        return this.x = t.x,
        this.y = t.y,
        this
    }
    add(t) {
        return this.x += t.x,
        this.y += t.y,
        this
    }
    addScalar(t) {
        return this.x += t,
        this.y += t,
        this
    }
    addVectors(t, e) {
        return this.x = t.x + e.x,
        this.y = t.y + e.y,
        this
    }
    addScaledVector(t, e) {
        return this.x += t.x * e,
        this.y += t.y * e,
        this
    }
    sub(t) {
        return this.x -= t.x,
        this.y -= t.y,
        this
    }
    subScalar(t) {
        return this.x -= t,
        this.y -= t,
        this
    }
    subVectors(t, e) {
        return this.x = t.x - e.x,
        this.y = t.y - e.y,
        this
    }
    multiply(t) {
        return this.x *= t.x,
        this.y *= t.y,
        this
    }
    multiplyScalar(t) {
        return this.x *= t,
        this.y *= t,
        this
    }
    divide(t) {
        return this.x /= t.x,
        this.y /= t.y,
        this
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }
    applyMatrix3(t) {
        const e = this.x
          , n = this.y
          , s = t.elements;
        return this.x = s[0] * e + s[3] * n + s[6],
        this.y = s[1] * e + s[4] * n + s[7],
        this
    }
    min(t) {
        return this.x = Math.min(this.x, t.x),
        this.y = Math.min(this.y, t.y),
        this
    }
    max(t) {
        return this.x = Math.max(this.x, t.x),
        this.y = Math.max(this.y, t.y),
        this
    }
    clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)),
        this.y = Math.max(t.y, Math.min(e.y, this.y)),
        this
    }
    clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)),
        this.y = Math.max(t, Math.min(e, this.y)),
        this
    }
    clampLength(t, e) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    }
    dot(t) {
        return this.x * t.x + this.y * t.y
    }
    cross(t) {
        return this.x * t.y - this.y * t.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    angleTo(t) {
        const e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (e === 0)
            return Math.PI / 2;
        const n = this.dot(t) / e;
        return Math.acos(en(n, -1, 1))
    }
    distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t))
    }
    distanceToSquared(t) {
        const e = this.x - t.x
          , n = this.y - t.y;
        return e * e + n * n
    }
    manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e,
        this.y += (t.y - this.y) * e,
        this
    }
    lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n,
        this.y = t.y + (e.y - t.y) * n,
        this
    }
    equals(t) {
        return t.x === this.x && t.y === this.y
    }
    fromArray(t, e=0) {
        return this.x = t[e],
        this.y = t[e + 1],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this.x,
        t[e + 1] = this.y,
        t
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e),
        this.y = t.getY(e),
        this
    }
    rotateAround(t, e) {
        const n = Math.cos(e)
          , s = Math.sin(e)
          , r = this.x - t.x
          , o = this.y - t.y;
        return this.x = r * n - o * s + t.x,
        this.y = r * s + o * n + t.y,
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y
    }
}
class Jt {
    constructor(t, e, n, s, r, o, a, l, c) {
        Jt.prototype.isMatrix3 = !0,
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        t !== void 0 && this.set(t, e, n, s, r, o, a, l, c)
    }
    set(t, e, n, s, r, o, a, l, c) {
        const h = this.elements;
        return h[0] = t,
        h[1] = s,
        h[2] = a,
        h[3] = e,
        h[4] = r,
        h[5] = l,
        h[6] = n,
        h[7] = o,
        h[8] = c,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    }
    copy(t) {
        const e = this.elements
          , n = t.elements;
        return e[0] = n[0],
        e[1] = n[1],
        e[2] = n[2],
        e[3] = n[3],
        e[4] = n[4],
        e[5] = n[5],
        e[6] = n[6],
        e[7] = n[7],
        e[8] = n[8],
        this
    }
    extractBasis(t, e, n) {
        return t.setFromMatrix3Column(this, 0),
        e.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
    }
    setFromMatrix4(t) {
        const e = t.elements;
        return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
        this
    }
    multiply(t) {
        return this.multiplyMatrices(this, t)
    }
    premultiply(t) {
        return this.multiplyMatrices(t, this)
    }
    multiplyMatrices(t, e) {
        const n = t.elements
          , s = e.elements
          , r = this.elements
          , o = n[0]
          , a = n[3]
          , l = n[6]
          , c = n[1]
          , h = n[4]
          , u = n[7]
          , f = n[2]
          , p = n[5]
          , g = n[8]
          , _ = s[0]
          , m = s[3]
          , d = s[6]
          , x = s[1]
          , v = s[4]
          , S = s[7]
          , L = s[2]
          , A = s[5]
          , R = s[8];
        return r[0] = o * _ + a * x + l * L,
        r[3] = o * m + a * v + l * A,
        r[6] = o * d + a * S + l * R,
        r[1] = c * _ + h * x + u * L,
        r[4] = c * m + h * v + u * A,
        r[7] = c * d + h * S + u * R,
        r[2] = f * _ + p * x + g * L,
        r[5] = f * m + p * v + g * A,
        r[8] = f * d + p * S + g * R,
        this
    }
    multiplyScalar(t) {
        const e = this.elements;
        return e[0] *= t,
        e[3] *= t,
        e[6] *= t,
        e[1] *= t,
        e[4] *= t,
        e[7] *= t,
        e[2] *= t,
        e[5] *= t,
        e[8] *= t,
        this
    }
    determinant() {
        const t = this.elements
          , e = t[0]
          , n = t[1]
          , s = t[2]
          , r = t[3]
          , o = t[4]
          , a = t[5]
          , l = t[6]
          , c = t[7]
          , h = t[8];
        return e * o * h - e * a * c - n * r * h + n * a * l + s * r * c - s * o * l
    }
    invert() {
        const t = this.elements
          , e = t[0]
          , n = t[1]
          , s = t[2]
          , r = t[3]
          , o = t[4]
          , a = t[5]
          , l = t[6]
          , c = t[7]
          , h = t[8]
          , u = h * o - a * c
          , f = a * l - h * r
          , p = c * r - o * l
          , g = e * u + n * f + s * p;
        if (g === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const _ = 1 / g;
        return t[0] = u * _,
        t[1] = (s * c - h * n) * _,
        t[2] = (a * n - s * o) * _,
        t[3] = f * _,
        t[4] = (h * e - s * l) * _,
        t[5] = (s * r - a * e) * _,
        t[6] = p * _,
        t[7] = (n * l - c * e) * _,
        t[8] = (o * e - n * r) * _,
        this
    }
    transpose() {
        let t;
        const e = this.elements;
        return t = e[1],
        e[1] = e[3],
        e[3] = t,
        t = e[2],
        e[2] = e[6],
        e[6] = t,
        t = e[5],
        e[5] = e[7],
        e[7] = t,
        this
    }
    getNormalMatrix(t) {
        return this.setFromMatrix4(t).invert().transpose()
    }
    transposeIntoArray(t) {
        const e = this.elements;
        return t[0] = e[0],
        t[1] = e[3],
        t[2] = e[6],
        t[3] = e[1],
        t[4] = e[4],
        t[5] = e[7],
        t[6] = e[2],
        t[7] = e[5],
        t[8] = e[8],
        this
    }
    setUvTransform(t, e, n, s, r, o, a) {
        const l = Math.cos(r)
          , c = Math.sin(r);
        return this.set(n * l, n * c, -n * (l * o + c * a) + o + t, -s * c, s * l, -s * (-c * o + l * a) + a + e, 0, 0, 1),
        this
    }
    scale(t, e) {
        return this.premultiply(eo.makeScale(t, e)),
        this
    }
    rotate(t) {
        return this.premultiply(eo.makeRotation(-t)),
        this
    }
    translate(t, e) {
        return this.premultiply(eo.makeTranslation(t, e)),
        this
    }
    makeTranslation(t, e) {
        return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
        this
    }
    makeRotation(t) {
        const e = Math.cos(t)
          , n = Math.sin(t);
        return this.set(e, -n, 0, n, e, 0, 0, 0, 1),
        this
    }
    makeScale(t, e) {
        return this.set(t, 0, 0, 0, e, 0, 0, 0, 1),
        this
    }
    equals(t) {
        const e = this.elements
          , n = t.elements;
        for (let s = 0; s < 9; s++)
            if (e[s] !== n[s])
                return !1;
        return !0
    }
    fromArray(t, e=0) {
        for (let n = 0; n < 9; n++)
            this.elements[n] = t[n + e];
        return this
    }
    toArray(t=[], e=0) {
        const n = this.elements;
        return t[e] = n[0],
        t[e + 1] = n[1],
        t[e + 2] = n[2],
        t[e + 3] = n[3],
        t[e + 4] = n[4],
        t[e + 5] = n[5],
        t[e + 6] = n[6],
        t[e + 7] = n[7],
        t[e + 8] = n[8],
        t
    }
    clone() {
        return new this.constructor().fromArray(this.elements)
    }
}
const eo = new Jt;
function Ac(i) {
    for (let t = i.length - 1; t >= 0; --t)
        if (i[t] >= 65535)
            return !0;
    return !1
}
function Dr(i) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", i)
}
function Ru() {
    const i = Dr("canvas");
    return i.style.display = "block",
    i
}
const Ja = {};
function Ds(i) {
    i in Ja || (Ja[i] = !0,
    console.warn(i))
}
const Qa = new Jt().set(.8224621, .177538, 0, .0331941, .9668058, 0, .0170827, .0723974, .9105199)
  , tl = new Jt().set(1.2249401, -.2249404, 0, -.0420569, 1.0420571, 0, -.0196376, -.0786361, 1.0982735)
  , Xs = {
    [qn]: {
        transfer: Rr,
        primaries: Cr,
        toReference: i => i,
        fromReference: i => i
    },
    [Me]: {
        transfer: _e,
        primaries: Cr,
        toReference: i => i.convertSRGBToLinear(),
        fromReference: i => i.convertLinearToSRGB()
    },
    [Nr]: {
        transfer: Rr,
        primaries: Lr,
        toReference: i => i.applyMatrix3(tl),
        fromReference: i => i.applyMatrix3(Qa)
    },
    [jo]: {
        transfer: _e,
        primaries: Lr,
        toReference: i => i.convertSRGBToLinear().applyMatrix3(tl),
        fromReference: i => i.applyMatrix3(Qa).convertLinearToSRGB()
    }
}
  , Cu = new Set([qn, Nr])
  , ae = {
    enabled: !0,
    _workingColorSpace: qn,
    get workingColorSpace() {
        return this._workingColorSpace
    },
    set workingColorSpace(i) {
        if (!Cu.has(i))
            throw new Error(`Unsupported working color space, "${i}".`);
        this._workingColorSpace = i
    },
    convert: function(i, t, e) {
        if (this.enabled === !1 || t === e || !t || !e)
            return i;
        const n = Xs[t].toReference
          , s = Xs[e].fromReference;
        return s(n(i))
    },
    fromWorkingColorSpace: function(i, t) {
        return this.convert(i, this._workingColorSpace, t)
    },
    toWorkingColorSpace: function(i, t) {
        return this.convert(i, t, this._workingColorSpace)
    },
    getPrimaries: function(i) {
        return Xs[i].primaries
    },
    getTransfer: function(i) {
        return i === vn ? Rr : Xs[i].transfer
    }
};
function os(i) {
    return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014, 2.4)
}
function no(i) {
    return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055
}
let Ii;
class Rc {
    static getDataURL(t) {
        if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
            return t.src;
        let e;
        if (t instanceof HTMLCanvasElement)
            e = t;
        else {
            Ii === void 0 && (Ii = Dr("canvas")),
            Ii.width = t.width,
            Ii.height = t.height;
            const n = Ii.getContext("2d");
            t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height),
            e = Ii
        }
        return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t),
        e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
    }
    static sRGBToLinear(t) {
        if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
            const e = Dr("canvas");
            e.width = t.width,
            e.height = t.height;
            const n = e.getContext("2d");
            n.drawImage(t, 0, 0, t.width, t.height);
            const s = n.getImageData(0, 0, t.width, t.height)
              , r = s.data;
            for (let o = 0; o < r.length; o++)
                r[o] = os(r[o] / 255) * 255;
            return n.putImageData(s, 0, 0),
            e
        } else if (t.data) {
            const e = t.data.slice(0);
            for (let n = 0; n < e.length; n++)
                e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(os(e[n] / 255) * 255) : e[n] = os(e[n]);
            return {
                data: e,
                width: t.width,
                height: t.height
            }
        } else
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
            t
    }
}
let Lu = 0;
class Cc {
    constructor(t=null) {
        this.isSource = !0,
        Object.defineProperty(this, "id", {
            value: Lu++
        }),
        this.uuid = oi(),
        this.data = t,
        this.version = 0
    }
    set needsUpdate(t) {
        t === !0 && this.version++
    }
    toJSON(t) {
        const e = t === void 0 || typeof t == "string";
        if (!e && t.images[this.uuid] !== void 0)
            return t.images[this.uuid];
        const n = {
            uuid: this.uuid,
            url: ""
        }
          , s = this.data;
        if (s !== null) {
            let r;
            if (Array.isArray(s)) {
                r = [];
                for (let o = 0, a = s.length; o < a; o++)
                    s[o].isDataTexture ? r.push(io(s[o].image)) : r.push(io(s[o]))
            } else
                r = io(s);
            n.url = r
        }
        return e || (t.images[this.uuid] = n),
        n
    }
}
function io(i) {
    return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Rc.getDataURL(i) : i.data ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."),
    {})
}
let Pu = 0;
class nn extends ds {
    constructor(t=nn.DEFAULT_IMAGE, e=nn.DEFAULT_MAPPING, n=En, s=En, r=_n, o=Os, a=Tn, l=ri, c=nn.DEFAULT_ANISOTROPY, h=vn) {
        super(),
        this.isTexture = !0,
        Object.defineProperty(this, "id", {
            value: Pu++
        }),
        this.uuid = oi(),
        this.name = "",
        this.source = new Cc(t),
        this.mipmaps = [],
        this.mapping = e,
        this.channel = 0,
        this.wrapS = n,
        this.wrapT = s,
        this.magFilter = r,
        this.minFilter = o,
        this.anisotropy = c,
        this.format = a,
        this.internalFormat = null,
        this.type = l,
        this.offset = new Kt(0,0),
        this.repeat = new Kt(1,1),
        this.center = new Kt(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new Jt,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        typeof h == "string" ? this.colorSpace = h : (Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
        this.colorSpace = h === Ti ? Me : vn),
        this.userData = {},
        this.version = 0,
        this.onUpdate = null,
        this.isRenderTargetTexture = !1,
        this.needsPMREMUpdate = !1
    }
    get image() {
        return this.source.data
    }
    set image(t=null) {
        this.source.data = t
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        return this.name = t.name,
        this.source = t.source,
        this.mipmaps = t.mipmaps.slice(0),
        this.mapping = t.mapping,
        this.channel = t.channel,
        this.wrapS = t.wrapS,
        this.wrapT = t.wrapT,
        this.magFilter = t.magFilter,
        this.minFilter = t.minFilter,
        this.anisotropy = t.anisotropy,
        this.format = t.format,
        this.internalFormat = t.internalFormat,
        this.type = t.type,
        this.offset.copy(t.offset),
        this.repeat.copy(t.repeat),
        this.center.copy(t.center),
        this.rotation = t.rotation,
        this.matrixAutoUpdate = t.matrixAutoUpdate,
        this.matrix.copy(t.matrix),
        this.generateMipmaps = t.generateMipmaps,
        this.premultiplyAlpha = t.premultiplyAlpha,
        this.flipY = t.flipY,
        this.unpackAlignment = t.unpackAlignment,
        this.colorSpace = t.colorSpace,
        this.userData = JSON.parse(JSON.stringify(t.userData)),
        this.needsUpdate = !0,
        this
    }
    toJSON(t) {
        const e = t === void 0 || typeof t == "string";
        if (!e && t.textures[this.uuid] !== void 0)
            return t.textures[this.uuid];
        const n = {
            metadata: {
                version: 4.6,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(t).uuid,
            mapping: this.mapping,
            channel: this.channel,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            internalFormat: this.internalFormat,
            type: this.type,
            colorSpace: this.colorSpace,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        e || (t.textures[this.uuid] = n),
        n
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    transformUv(t) {
        if (this.mapping !== gc)
            return t;
        if (t.applyMatrix3(this.matrix),
        t.x < 0 || t.x > 1)
            switch (this.wrapS) {
            case Us:
                t.x = t.x - Math.floor(t.x);
                break;
            case En:
                t.x = t.x < 0 ? 0 : 1;
                break;
            case Fo:
                Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
                break
            }
        if (t.y < 0 || t.y > 1)
            switch (this.wrapT) {
            case Us:
                t.y = t.y - Math.floor(t.y);
                break;
            case En:
                t.y = t.y < 0 ? 0 : 1;
                break;
            case Fo:
                Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
                break
            }
        return this.flipY && (t.y = 1 - t.y),
        t
    }
    set needsUpdate(t) {
        t === !0 && (this.version++,
        this.source.needsUpdate = !0)
    }
    get encoding() {
        return Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
        this.colorSpace === Me ? Ti : Ec
    }
    set encoding(t) {
        Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
        this.colorSpace = t === Ti ? Me : vn
    }
}
nn.DEFAULT_IMAGE = null;
nn.DEFAULT_MAPPING = gc;
nn.DEFAULT_ANISOTROPY = 1;
class Ge {
    constructor(t=0, e=0, n=0, s=1) {
        Ge.prototype.isVector4 = !0,
        this.x = t,
        this.y = e,
        this.z = n,
        this.w = s
    }
    get width() {
        return this.z
    }
    set width(t) {
        this.z = t
    }
    get height() {
        return this.w
    }
    set height(t) {
        this.w = t
    }
    set(t, e, n, s) {
        return this.x = t,
        this.y = e,
        this.z = n,
        this.w = s,
        this
    }
    setScalar(t) {
        return this.x = t,
        this.y = t,
        this.z = t,
        this.w = t,
        this
    }
    setX(t) {
        return this.x = t,
        this
    }
    setY(t) {
        return this.y = t,
        this
    }
    setZ(t) {
        return this.z = t,
        this
    }
    setW(t) {
        return this.w = t,
        this
    }
    setComponent(t, e) {
        switch (t) {
        case 0:
            this.x = e;
            break;
        case 1:
            this.y = e;
            break;
        case 2:
            this.z = e;
            break;
        case 3:
            this.w = e;
            break;
        default:
            throw new Error("index is out of range: " + t)
        }
        return this
    }
    getComponent(t) {
        switch (t) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw new Error("index is out of range: " + t)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    }
    copy(t) {
        return this.x = t.x,
        this.y = t.y,
        this.z = t.z,
        this.w = t.w !== void 0 ? t.w : 1,
        this
    }
    add(t) {
        return this.x += t.x,
        this.y += t.y,
        this.z += t.z,
        this.w += t.w,
        this
    }
    addScalar(t) {
        return this.x += t,
        this.y += t,
        this.z += t,
        this.w += t,
        this
    }
    addVectors(t, e) {
        return this.x = t.x + e.x,
        this.y = t.y + e.y,
        this.z = t.z + e.z,
        this.w = t.w + e.w,
        this
    }
    addScaledVector(t, e) {
        return this.x += t.x * e,
        this.y += t.y * e,
        this.z += t.z * e,
        this.w += t.w * e,
        this
    }
    sub(t) {
        return this.x -= t.x,
        this.y -= t.y,
        this.z -= t.z,
        this.w -= t.w,
        this
    }
    subScalar(t) {
        return this.x -= t,
        this.y -= t,
        this.z -= t,
        this.w -= t,
        this
    }
    subVectors(t, e) {
        return this.x = t.x - e.x,
        this.y = t.y - e.y,
        this.z = t.z - e.z,
        this.w = t.w - e.w,
        this
    }
    multiply(t) {
        return this.x *= t.x,
        this.y *= t.y,
        this.z *= t.z,
        this.w *= t.w,
        this
    }
    multiplyScalar(t) {
        return this.x *= t,
        this.y *= t,
        this.z *= t,
        this.w *= t,
        this
    }
    applyMatrix4(t) {
        const e = this.x
          , n = this.y
          , s = this.z
          , r = this.w
          , o = t.elements;
        return this.x = o[0] * e + o[4] * n + o[8] * s + o[12] * r,
        this.y = o[1] * e + o[5] * n + o[9] * s + o[13] * r,
        this.z = o[2] * e + o[6] * n + o[10] * s + o[14] * r,
        this.w = o[3] * e + o[7] * n + o[11] * s + o[15] * r,
        this
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }
    setAxisAngleFromQuaternion(t) {
        this.w = 2 * Math.acos(t.w);
        const e = Math.sqrt(1 - t.w * t.w);
        return e < 1e-4 ? (this.x = 1,
        this.y = 0,
        this.z = 0) : (this.x = t.x / e,
        this.y = t.y / e,
        this.z = t.z / e),
        this
    }
    setAxisAngleFromRotationMatrix(t) {
        let e, n, s, r;
        const l = t.elements
          , c = l[0]
          , h = l[4]
          , u = l[8]
          , f = l[1]
          , p = l[5]
          , g = l[9]
          , _ = l[2]
          , m = l[6]
          , d = l[10];
        if (Math.abs(h - f) < .01 && Math.abs(u - _) < .01 && Math.abs(g - m) < .01) {
            if (Math.abs(h + f) < .1 && Math.abs(u + _) < .1 && Math.abs(g + m) < .1 && Math.abs(c + p + d - 3) < .1)
                return this.set(1, 0, 0, 0),
                this;
            e = Math.PI;
            const v = (c + 1) / 2
              , S = (p + 1) / 2
              , L = (d + 1) / 2
              , A = (h + f) / 4
              , R = (u + _) / 4
              , K = (g + m) / 4;
            return v > S && v > L ? v < .01 ? (n = 0,
            s = .707106781,
            r = .707106781) : (n = Math.sqrt(v),
            s = A / n,
            r = R / n) : S > L ? S < .01 ? (n = .707106781,
            s = 0,
            r = .707106781) : (s = Math.sqrt(S),
            n = A / s,
            r = K / s) : L < .01 ? (n = .707106781,
            s = .707106781,
            r = 0) : (r = Math.sqrt(L),
            n = R / r,
            s = K / r),
            this.set(n, s, r, e),
            this
        }
        let x = Math.sqrt((m - g) * (m - g) + (u - _) * (u - _) + (f - h) * (f - h));
        return Math.abs(x) < .001 && (x = 1),
        this.x = (m - g) / x,
        this.y = (u - _) / x,
        this.z = (f - h) / x,
        this.w = Math.acos((c + p + d - 1) / 2),
        this
    }
    min(t) {
        return this.x = Math.min(this.x, t.x),
        this.y = Math.min(this.y, t.y),
        this.z = Math.min(this.z, t.z),
        this.w = Math.min(this.w, t.w),
        this
    }
    max(t) {
        return this.x = Math.max(this.x, t.x),
        this.y = Math.max(this.y, t.y),
        this.z = Math.max(this.z, t.z),
        this.w = Math.max(this.w, t.w),
        this
    }
    clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)),
        this.y = Math.max(t.y, Math.min(e.y, this.y)),
        this.z = Math.max(t.z, Math.min(e.z, this.z)),
        this.w = Math.max(t.w, Math.min(e.w, this.w)),
        this
    }
    clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)),
        this.y = Math.max(t, Math.min(e, this.y)),
        this.z = Math.max(t, Math.min(e, this.z)),
        this.w = Math.max(t, Math.min(e, this.w)),
        this
    }
    clampLength(t, e) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this.w = Math.trunc(this.w),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    }
    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e,
        this.y += (t.y - this.y) * e,
        this.z += (t.z - this.z) * e,
        this.w += (t.w - this.w) * e,
        this
    }
    lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n,
        this.y = t.y + (e.y - t.y) * n,
        this.z = t.z + (e.z - t.z) * n,
        this.w = t.w + (e.w - t.w) * n,
        this
    }
    equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
    }
    fromArray(t, e=0) {
        return this.x = t[e],
        this.y = t[e + 1],
        this.z = t[e + 2],
        this.w = t[e + 3],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this.x,
        t[e + 1] = this.y,
        t[e + 2] = this.z,
        t[e + 3] = this.w,
        t
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e),
        this.y = t.getY(e),
        this.z = t.getZ(e),
        this.w = t.getW(e),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this.w = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z,
        yield this.w
    }
}
class Du extends ds {
    constructor(t=1, e=1, n={}) {
        super(),
        this.isRenderTarget = !0,
        this.width = t,
        this.height = e,
        this.depth = 1,
        this.scissor = new Ge(0,0,t,e),
        this.scissorTest = !1,
        this.viewport = new Ge(0,0,t,e);
        const s = {
            width: t,
            height: e,
            depth: 1
        };
        n.encoding !== void 0 && (Ds("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),
        n.colorSpace = n.encoding === Ti ? Me : vn),
        n = Object.assign({
            generateMipmaps: !1,
            internalFormat: null,
            minFilter: _n,
            depthBuffer: !0,
            stencilBuffer: !1,
            depthTexture: null,
            samples: 0
        }, n),
        this.texture = new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),
        this.texture.isRenderTargetTexture = !0,
        this.texture.flipY = !1,
        this.texture.generateMipmaps = n.generateMipmaps,
        this.texture.internalFormat = n.internalFormat,
        this.depthBuffer = n.depthBuffer,
        this.stencilBuffer = n.stencilBuffer,
        this.depthTexture = n.depthTexture,
        this.samples = n.samples
    }
    setSize(t, e, n=1) {
        (this.width !== t || this.height !== e || this.depth !== n) && (this.width = t,
        this.height = e,
        this.depth = n,
        this.texture.image.width = t,
        this.texture.image.height = e,
        this.texture.image.depth = n,
        this.dispose()),
        this.viewport.set(0, 0, t, e),
        this.scissor.set(0, 0, t, e)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        this.width = t.width,
        this.height = t.height,
        this.depth = t.depth,
        this.scissor.copy(t.scissor),
        this.scissorTest = t.scissorTest,
        this.viewport.copy(t.viewport),
        this.texture = t.texture.clone(),
        this.texture.isRenderTargetTexture = !0;
        const e = Object.assign({}, t.texture.image);
        return this.texture.source = new Cc(e),
        this.depthBuffer = t.depthBuffer,
        this.stencilBuffer = t.stencilBuffer,
        t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()),
        this.samples = t.samples,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
class Ai extends Du {
    constructor(t=1, e=1, n={}) {
        super(t, e, n),
        this.isWebGLRenderTarget = !0
    }
}
class Lc extends nn {
    constructor(t=null, e=1, n=1, s=1) {
        super(null),
        this.isDataArrayTexture = !0,
        this.image = {
            data: t,
            width: e,
            height: n,
            depth: s
        },
        this.magFilter = he,
        this.minFilter = he,
        this.wrapR = En,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
class Iu extends nn {
    constructor(t=null, e=1, n=1, s=1) {
        super(null),
        this.isData3DTexture = !0,
        this.image = {
            data: t,
            width: e,
            height: n,
            depth: s
        },
        this.magFilter = he,
        this.minFilter = he,
        this.wrapR = En,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
class Bs {
    constructor(t=0, e=0, n=0, s=1) {
        this.isQuaternion = !0,
        this._x = t,
        this._y = e,
        this._z = n,
        this._w = s
    }
    static slerpFlat(t, e, n, s, r, o, a) {
        let l = n[s + 0]
          , c = n[s + 1]
          , h = n[s + 2]
          , u = n[s + 3];
        const f = r[o + 0]
          , p = r[o + 1]
          , g = r[o + 2]
          , _ = r[o + 3];
        if (a === 0) {
            t[e + 0] = l,
            t[e + 1] = c,
            t[e + 2] = h,
            t[e + 3] = u;
            return
        }
        if (a === 1) {
            t[e + 0] = f,
            t[e + 1] = p,
            t[e + 2] = g,
            t[e + 3] = _;
            return
        }
        if (u !== _ || l !== f || c !== p || h !== g) {
            let m = 1 - a;
            const d = l * f + c * p + h * g + u * _
              , x = d >= 0 ? 1 : -1
              , v = 1 - d * d;
            if (v > Number.EPSILON) {
                const L = Math.sqrt(v)
                  , A = Math.atan2(L, d * x);
                m = Math.sin(m * A) / L,
                a = Math.sin(a * A) / L
            }
            const S = a * x;
            if (l = l * m + f * S,
            c = c * m + p * S,
            h = h * m + g * S,
            u = u * m + _ * S,
            m === 1 - a) {
                const L = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
                l *= L,
                c *= L,
                h *= L,
                u *= L
            }
        }
        t[e] = l,
        t[e + 1] = c,
        t[e + 2] = h,
        t[e + 3] = u
    }
    static multiplyQuaternionsFlat(t, e, n, s, r, o) {
        const a = n[s]
          , l = n[s + 1]
          , c = n[s + 2]
          , h = n[s + 3]
          , u = r[o]
          , f = r[o + 1]
          , p = r[o + 2]
          , g = r[o + 3];
        return t[e] = a * g + h * u + l * p - c * f,
        t[e + 1] = l * g + h * f + c * u - a * p,
        t[e + 2] = c * g + h * p + a * f - l * u,
        t[e + 3] = h * g - a * u - l * f - c * p,
        t
    }
    get x() {
        return this._x
    }
    set x(t) {
        this._x = t,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(t) {
        this._y = t,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(t) {
        this._z = t,
        this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(t) {
        this._w = t,
        this._onChangeCallback()
    }
    set(t, e, n, s) {
        return this._x = t,
        this._y = e,
        this._z = n,
        this._w = s,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    }
    copy(t) {
        return this._x = t.x,
        this._y = t.y,
        this._z = t.z,
        this._w = t.w,
        this._onChangeCallback(),
        this
    }
    setFromEuler(t, e=!0) {
        const n = t._x
          , s = t._y
          , r = t._z
          , o = t._order
          , a = Math.cos
          , l = Math.sin
          , c = a(n / 2)
          , h = a(s / 2)
          , u = a(r / 2)
          , f = l(n / 2)
          , p = l(s / 2)
          , g = l(r / 2);
        switch (o) {
        case "XYZ":
            this._x = f * h * u + c * p * g,
            this._y = c * p * u - f * h * g,
            this._z = c * h * g + f * p * u,
            this._w = c * h * u - f * p * g;
            break;
        case "YXZ":
            this._x = f * h * u + c * p * g,
            this._y = c * p * u - f * h * g,
            this._z = c * h * g - f * p * u,
            this._w = c * h * u + f * p * g;
            break;
        case "ZXY":
            this._x = f * h * u - c * p * g,
            this._y = c * p * u + f * h * g,
            this._z = c * h * g + f * p * u,
            this._w = c * h * u - f * p * g;
            break;
        case "ZYX":
            this._x = f * h * u - c * p * g,
            this._y = c * p * u + f * h * g,
            this._z = c * h * g - f * p * u,
            this._w = c * h * u + f * p * g;
            break;
        case "YZX":
            this._x = f * h * u + c * p * g,
            this._y = c * p * u + f * h * g,
            this._z = c * h * g - f * p * u,
            this._w = c * h * u - f * p * g;
            break;
        case "XZY":
            this._x = f * h * u - c * p * g,
            this._y = c * p * u - f * h * g,
            this._z = c * h * g + f * p * u,
            this._w = c * h * u + f * p * g;
            break;
        default:
            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o)
        }
        return e === !0 && this._onChangeCallback(),
        this
    }
    setFromAxisAngle(t, e) {
        const n = e / 2
          , s = Math.sin(n);
        return this._x = t.x * s,
        this._y = t.y * s,
        this._z = t.z * s,
        this._w = Math.cos(n),
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(t) {
        const e = t.elements
          , n = e[0]
          , s = e[4]
          , r = e[8]
          , o = e[1]
          , a = e[5]
          , l = e[9]
          , c = e[2]
          , h = e[6]
          , u = e[10]
          , f = n + a + u;
        if (f > 0) {
            const p = .5 / Math.sqrt(f + 1);
            this._w = .25 / p,
            this._x = (h - l) * p,
            this._y = (r - c) * p,
            this._z = (o - s) * p
        } else if (n > a && n > u) {
            const p = 2 * Math.sqrt(1 + n - a - u);
            this._w = (h - l) / p,
            this._x = .25 * p,
            this._y = (s + o) / p,
            this._z = (r + c) / p
        } else if (a > u) {
            const p = 2 * Math.sqrt(1 + a - n - u);
            this._w = (r - c) / p,
            this._x = (s + o) / p,
            this._y = .25 * p,
            this._z = (l + h) / p
        } else {
            const p = 2 * Math.sqrt(1 + u - n - a);
            this._w = (o - s) / p,
            this._x = (r + c) / p,
            this._y = (l + h) / p,
            this._z = .25 * p
        }
        return this._onChangeCallback(),
        this
    }
    setFromUnitVectors(t, e) {
        let n = t.dot(e) + 1;
        return n < Number.EPSILON ? (n = 0,
        Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y,
        this._y = t.x,
        this._z = 0,
        this._w = n) : (this._x = 0,
        this._y = -t.z,
        this._z = t.y,
        this._w = n)) : (this._x = t.y * e.z - t.z * e.y,
        this._y = t.z * e.x - t.x * e.z,
        this._z = t.x * e.y - t.y * e.x,
        this._w = n),
        this.normalize()
    }
    angleTo(t) {
        return 2 * Math.acos(Math.abs(en(this.dot(t), -1, 1)))
    }
    rotateTowards(t, e) {
        const n = this.angleTo(t);
        if (n === 0)
            return this;
        const s = Math.min(1, e / n);
        return this.slerp(t, s),
        this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this._onChangeCallback(),
        this
    }
    dot(t) {
        return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let t = this.length();
        return t === 0 ? (this._x = 0,
        this._y = 0,
        this._z = 0,
        this._w = 1) : (t = 1 / t,
        this._x = this._x * t,
        this._y = this._y * t,
        this._z = this._z * t,
        this._w = this._w * t),
        this._onChangeCallback(),
        this
    }
    multiply(t) {
        return this.multiplyQuaternions(this, t)
    }
    premultiply(t) {
        return this.multiplyQuaternions(t, this)
    }
    multiplyQuaternions(t, e) {
        const n = t._x
          , s = t._y
          , r = t._z
          , o = t._w
          , a = e._x
          , l = e._y
          , c = e._z
          , h = e._w;
        return this._x = n * h + o * a + s * c - r * l,
        this._y = s * h + o * l + r * a - n * c,
        this._z = r * h + o * c + n * l - s * a,
        this._w = o * h - n * a - s * l - r * c,
        this._onChangeCallback(),
        this
    }
    slerp(t, e) {
        if (e === 0)
            return this;
        if (e === 1)
            return this.copy(t);
        const n = this._x
          , s = this._y
          , r = this._z
          , o = this._w;
        let a = o * t._w + n * t._x + s * t._y + r * t._z;
        if (a < 0 ? (this._w = -t._w,
        this._x = -t._x,
        this._y = -t._y,
        this._z = -t._z,
        a = -a) : this.copy(t),
        a >= 1)
            return this._w = o,
            this._x = n,
            this._y = s,
            this._z = r,
            this;
        const l = 1 - a * a;
        if (l <= Number.EPSILON) {
            const p = 1 - e;
            return this._w = p * o + e * this._w,
            this._x = p * n + e * this._x,
            this._y = p * s + e * this._y,
            this._z = p * r + e * this._z,
            this.normalize(),
            this
        }
        const c = Math.sqrt(l)
          , h = Math.atan2(c, a)
          , u = Math.sin((1 - e) * h) / c
          , f = Math.sin(e * h) / c;
        return this._w = o * u + this._w * f,
        this._x = n * u + this._x * f,
        this._y = s * u + this._y * f,
        this._z = r * u + this._z * f,
        this._onChangeCallback(),
        this
    }
    slerpQuaternions(t, e, n) {
        return this.copy(t).slerp(e, n)
    }
    random() {
        const t = Math.random()
          , e = Math.sqrt(1 - t)
          , n = Math.sqrt(t)
          , s = 2 * Math.PI * Math.random()
          , r = 2 * Math.PI * Math.random();
        return this.set(e * Math.cos(s), n * Math.sin(r), n * Math.cos(r), e * Math.sin(s))
    }
    equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
    }
    fromArray(t, e=0) {
        return this._x = t[e],
        this._y = t[e + 1],
        this._z = t[e + 2],
        this._w = t[e + 3],
        this._onChangeCallback(),
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this._x,
        t[e + 1] = this._y,
        t[e + 2] = this._z,
        t[e + 3] = this._w,
        t
    }
    fromBufferAttribute(t, e) {
        return this._x = t.getX(e),
        this._y = t.getY(e),
        this._z = t.getZ(e),
        this._w = t.getW(e),
        this._onChangeCallback(),
        this
    }
    toJSON() {
        return this.toArray()
    }
    _onChange(t) {
        return this._onChangeCallback = t,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._w
    }
}
class I {
    constructor(t=0, e=0, n=0) {
        I.prototype.isVector3 = !0,
        this.x = t,
        this.y = e,
        this.z = n
    }
    set(t, e, n) {
        return n === void 0 && (n = this.z),
        this.x = t,
        this.y = e,
        this.z = n,
        this
    }
    setScalar(t) {
        return this.x = t,
        this.y = t,
        this.z = t,
        this
    }
    setX(t) {
        return this.x = t,
        this
    }
    setY(t) {
        return this.y = t,
        this
    }
    setZ(t) {
        return this.z = t,
        this
    }
    setComponent(t, e) {
        switch (t) {
        case 0:
            this.x = e;
            break;
        case 1:
            this.y = e;
            break;
        case 2:
            this.z = e;
            break;
        default:
            throw new Error("index is out of range: " + t)
        }
        return this
    }
    getComponent(t) {
        switch (t) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw new Error("index is out of range: " + t)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z)
    }
    copy(t) {
        return this.x = t.x,
        this.y = t.y,
        this.z = t.z,
        this
    }
    add(t) {
        return this.x += t.x,
        this.y += t.y,
        this.z += t.z,
        this
    }
    addScalar(t) {
        return this.x += t,
        this.y += t,
        this.z += t,
        this
    }
    addVectors(t, e) {
        return this.x = t.x + e.x,
        this.y = t.y + e.y,
        this.z = t.z + e.z,
        this
    }
    addScaledVector(t, e) {
        return this.x += t.x * e,
        this.y += t.y * e,
        this.z += t.z * e,
        this
    }
    sub(t) {
        return this.x -= t.x,
        this.y -= t.y,
        this.z -= t.z,
        this
    }
    subScalar(t) {
        return this.x -= t,
        this.y -= t,
        this.z -= t,
        this
    }
    subVectors(t, e) {
        return this.x = t.x - e.x,
        this.y = t.y - e.y,
        this.z = t.z - e.z,
        this
    }
    multiply(t) {
        return this.x *= t.x,
        this.y *= t.y,
        this.z *= t.z,
        this
    }
    multiplyScalar(t) {
        return this.x *= t,
        this.y *= t,
        this.z *= t,
        this
    }
    multiplyVectors(t, e) {
        return this.x = t.x * e.x,
        this.y = t.y * e.y,
        this.z = t.z * e.z,
        this
    }
    applyEuler(t) {
        return this.applyQuaternion(el.setFromEuler(t))
    }
    applyAxisAngle(t, e) {
        return this.applyQuaternion(el.setFromAxisAngle(t, e))
    }
    applyMatrix3(t) {
        const e = this.x
          , n = this.y
          , s = this.z
          , r = t.elements;
        return this.x = r[0] * e + r[3] * n + r[6] * s,
        this.y = r[1] * e + r[4] * n + r[7] * s,
        this.z = r[2] * e + r[5] * n + r[8] * s,
        this
    }
    applyNormalMatrix(t) {
        return this.applyMatrix3(t).normalize()
    }
    applyMatrix4(t) {
        const e = this.x
          , n = this.y
          , s = this.z
          , r = t.elements
          , o = 1 / (r[3] * e + r[7] * n + r[11] * s + r[15]);
        return this.x = (r[0] * e + r[4] * n + r[8] * s + r[12]) * o,
        this.y = (r[1] * e + r[5] * n + r[9] * s + r[13]) * o,
        this.z = (r[2] * e + r[6] * n + r[10] * s + r[14]) * o,
        this
    }
    applyQuaternion(t) {
        const e = this.x
          , n = this.y
          , s = this.z
          , r = t.x
          , o = t.y
          , a = t.z
          , l = t.w
          , c = 2 * (o * s - a * n)
          , h = 2 * (a * e - r * s)
          , u = 2 * (r * n - o * e);
        return this.x = e + l * c + o * u - a * h,
        this.y = n + l * h + a * c - r * u,
        this.z = s + l * u + r * h - o * c,
        this
    }
    project(t) {
        return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
    }
    unproject(t) {
        return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
    }
    transformDirection(t) {
        const e = this.x
          , n = this.y
          , s = this.z
          , r = t.elements;
        return this.x = r[0] * e + r[4] * n + r[8] * s,
        this.y = r[1] * e + r[5] * n + r[9] * s,
        this.z = r[2] * e + r[6] * n + r[10] * s,
        this.normalize()
    }
    divide(t) {
        return this.x /= t.x,
        this.y /= t.y,
        this.z /= t.z,
        this
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }
    min(t) {
        return this.x = Math.min(this.x, t.x),
        this.y = Math.min(this.y, t.y),
        this.z = Math.min(this.z, t.z),
        this
    }
    max(t) {
        return this.x = Math.max(this.x, t.x),
        this.y = Math.max(this.y, t.y),
        this.z = Math.max(this.z, t.z),
        this
    }
    clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)),
        this.y = Math.max(t.y, Math.min(e.y, this.y)),
        this.z = Math.max(t.z, Math.min(e.z, this.z)),
        this
    }
    clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)),
        this.y = Math.max(t, Math.min(e, this.y)),
        this.z = Math.max(t, Math.min(e, this.z)),
        this
    }
    clampLength(t, e) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    }
    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e,
        this.y += (t.y - this.y) * e,
        this.z += (t.z - this.z) * e,
        this
    }
    lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n,
        this.y = t.y + (e.y - t.y) * n,
        this.z = t.z + (e.z - t.z) * n,
        this
    }
    cross(t) {
        return this.crossVectors(this, t)
    }
    crossVectors(t, e) {
        const n = t.x
          , s = t.y
          , r = t.z
          , o = e.x
          , a = e.y
          , l = e.z;
        return this.x = s * l - r * a,
        this.y = r * o - n * l,
        this.z = n * a - s * o,
        this
    }
    projectOnVector(t) {
        const e = t.lengthSq();
        if (e === 0)
            return this.set(0, 0, 0);
        const n = t.dot(this) / e;
        return this.copy(t).multiplyScalar(n)
    }
    projectOnPlane(t) {
        return so.copy(this).projectOnVector(t),
        this.sub(so)
    }
    reflect(t) {
        return this.sub(so.copy(t).multiplyScalar(2 * this.dot(t)))
    }
    angleTo(t) {
        const e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (e === 0)
            return Math.PI / 2;
        const n = this.dot(t) / e;
        return Math.acos(en(n, -1, 1))
    }
    distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t))
    }
    distanceToSquared(t) {
        const e = this.x - t.x
          , n = this.y - t.y
          , s = this.z - t.z;
        return e * e + n * n + s * s
    }
    manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    }
    setFromSpherical(t) {
        return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
    }
    setFromSphericalCoords(t, e, n) {
        const s = Math.sin(e) * t;
        return this.x = s * Math.sin(n),
        this.y = Math.cos(e) * t,
        this.z = s * Math.cos(n),
        this
    }
    setFromCylindrical(t) {
        return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
    }
    setFromCylindricalCoords(t, e, n) {
        return this.x = t * Math.sin(e),
        this.y = n,
        this.z = t * Math.cos(e),
        this
    }
    setFromMatrixPosition(t) {
        const e = t.elements;
        return this.x = e[12],
        this.y = e[13],
        this.z = e[14],
        this
    }
    setFromMatrixScale(t) {
        const e = this.setFromMatrixColumn(t, 0).length()
          , n = this.setFromMatrixColumn(t, 1).length()
          , s = this.setFromMatrixColumn(t, 2).length();
        return this.x = e,
        this.y = n,
        this.z = s,
        this
    }
    setFromMatrixColumn(t, e) {
        return this.fromArray(t.elements, e * 4)
    }
    setFromMatrix3Column(t, e) {
        return this.fromArray(t.elements, e * 3)
    }
    setFromEuler(t) {
        return this.x = t._x,
        this.y = t._y,
        this.z = t._z,
        this
    }
    setFromColor(t) {
        return this.x = t.r,
        this.y = t.g,
        this.z = t.b,
        this
    }
    equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z
    }
    fromArray(t, e=0) {
        return this.x = t[e],
        this.y = t[e + 1],
        this.z = t[e + 2],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this.x,
        t[e + 1] = this.y,
        t[e + 2] = this.z,
        t
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e),
        this.y = t.getY(e),
        this.z = t.getZ(e),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this
    }
    randomDirection() {
        const t = (Math.random() - .5) * 2
          , e = Math.random() * Math.PI * 2
          , n = Math.sqrt(1 - t ** 2);
        return this.x = n * Math.cos(e),
        this.y = n * Math.sin(e),
        this.z = t,
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z
    }
}
const so = new I
  , el = new Bs;
class ps {
    constructor(t=new I(1 / 0,1 / 0,1 / 0), e=new I(-1 / 0,-1 / 0,-1 / 0)) {
        this.isBox3 = !0,
        this.min = t,
        this.max = e
    }
    set(t, e) {
        return this.min.copy(t),
        this.max.copy(e),
        this
    }
    setFromArray(t) {
        this.makeEmpty();
        for (let e = 0, n = t.length; e < n; e += 3)
            this.expandByPoint(xn.fromArray(t, e));
        return this
    }
    setFromBufferAttribute(t) {
        this.makeEmpty();
        for (let e = 0, n = t.count; e < n; e++)
            this.expandByPoint(xn.fromBufferAttribute(t, e));
        return this
    }
    setFromPoints(t) {
        this.makeEmpty();
        for (let e = 0, n = t.length; e < n; e++)
            this.expandByPoint(t[e]);
        return this
    }
    setFromCenterAndSize(t, e) {
        const n = xn.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(n),
        this.max.copy(t).add(n),
        this
    }
    setFromObject(t, e=!1) {
        return this.makeEmpty(),
        this.expandByObject(t, e)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        return this.min.copy(t.min),
        this.max.copy(t.max),
        this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -1 / 0,
        this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
    }
    expandByPoint(t) {
        return this.min.min(t),
        this.max.max(t),
        this
    }
    expandByVector(t) {
        return this.min.sub(t),
        this.max.add(t),
        this
    }
    expandByScalar(t) {
        return this.min.addScalar(-t),
        this.max.addScalar(t),
        this
    }
    expandByObject(t, e=!1) {
        t.updateWorldMatrix(!1, !1);
        const n = t.geometry;
        if (n !== void 0) {
            const r = n.getAttribute("position");
            if (e === !0 && r !== void 0 && t.isInstancedMesh !== !0)
                for (let o = 0, a = r.count; o < a; o++)
                    t.isMesh === !0 ? t.getVertexPosition(o, xn) : xn.fromBufferAttribute(r, o),
                    xn.applyMatrix4(t.matrixWorld),
                    this.expandByPoint(xn);
            else
                t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(),
                qs.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(),
                qs.copy(n.boundingBox)),
                qs.applyMatrix4(t.matrixWorld),
                this.union(qs)
        }
        const s = t.children;
        for (let r = 0, o = s.length; r < o; r++)
            this.expandByObject(s[r], e);
        return this
    }
    containsPoint(t) {
        return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
    }
    containsBox(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
    }
    getParameter(t, e) {
        return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(t) {
        return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
    }
    intersectsSphere(t) {
        return this.clampPoint(t.center, xn),
        xn.distanceToSquared(t.center) <= t.radius * t.radius
    }
    intersectsPlane(t) {
        let e, n;
        return t.normal.x > 0 ? (e = t.normal.x * this.min.x,
        n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
        n = t.normal.x * this.min.x),
        t.normal.y > 0 ? (e += t.normal.y * this.min.y,
        n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
        n += t.normal.y * this.min.y),
        t.normal.z > 0 ? (e += t.normal.z * this.min.z,
        n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
        n += t.normal.z * this.min.z),
        e <= -t.constant && n >= -t.constant
    }
    intersectsTriangle(t) {
        if (this.isEmpty())
            return !1;
        this.getCenter(vs),
        Ks.subVectors(this.max, vs),
        Ui.subVectors(t.a, vs),
        Oi.subVectors(t.b, vs),
        Ni.subVectors(t.c, vs),
        Kn.subVectors(Oi, Ui),
        Yn.subVectors(Ni, Oi),
        pi.subVectors(Ui, Ni);
        let e = [0, -Kn.z, Kn.y, 0, -Yn.z, Yn.y, 0, -pi.z, pi.y, Kn.z, 0, -Kn.x, Yn.z, 0, -Yn.x, pi.z, 0, -pi.x, -Kn.y, Kn.x, 0, -Yn.y, Yn.x, 0, -pi.y, pi.x, 0];
        return !ro(e, Ui, Oi, Ni, Ks) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        !ro(e, Ui, Oi, Ni, Ks)) ? !1 : (Ys.crossVectors(Kn, Yn),
        e = [Ys.x, Ys.y, Ys.z],
        ro(e, Ui, Oi, Ni, Ks))
    }
    clampPoint(t, e) {
        return e.copy(t).clamp(this.min, this.max)
    }
    distanceToPoint(t) {
        return this.clampPoint(t, xn).distanceTo(t)
    }
    getBoundingSphere(t) {
        return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center),
        t.radius = this.getSize(xn).length() * .5),
        t
    }
    intersect(t) {
        return this.min.max(t.min),
        this.max.min(t.max),
        this.isEmpty() && this.makeEmpty(),
        this
    }
    union(t) {
        return this.min.min(t.min),
        this.max.max(t.max),
        this
    }
    applyMatrix4(t) {
        return this.isEmpty() ? this : (Fn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
        Fn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
        Fn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
        Fn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
        Fn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
        Fn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
        Fn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
        Fn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
        this.setFromPoints(Fn),
        this)
    }
    translate(t) {
        return this.min.add(t),
        this.max.add(t),
        this
    }
    equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max)
    }
}
const Fn = [new I, new I, new I, new I, new I, new I, new I, new I]
  , xn = new I
  , qs = new ps
  , Ui = new I
  , Oi = new I
  , Ni = new I
  , Kn = new I
  , Yn = new I
  , pi = new I
  , vs = new I
  , Ks = new I
  , Ys = new I
  , mi = new I;
function ro(i, t, e, n, s) {
    for (let r = 0, o = i.length - 3; r <= o; r += 3) {
        mi.fromArray(i, r);
        const a = s.x * Math.abs(mi.x) + s.y * Math.abs(mi.y) + s.z * Math.abs(mi.z)
          , l = t.dot(mi)
          , c = e.dot(mi)
          , h = n.dot(mi);
        if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a)
            return !1
    }
    return !0
}
const Uu = new ps
  , xs = new I
  , oo = new I;
class zs {
    constructor(t=new I, e=-1) {
        this.isSphere = !0,
        this.center = t,
        this.radius = e
    }
    set(t, e) {
        return this.center.copy(t),
        this.radius = e,
        this
    }
    setFromPoints(t, e) {
        const n = this.center;
        e !== void 0 ? n.copy(e) : Uu.setFromPoints(t).getCenter(n);
        let s = 0;
        for (let r = 0, o = t.length; r < o; r++)
            s = Math.max(s, n.distanceToSquared(t[r]));
        return this.radius = Math.sqrt(s),
        this
    }
    copy(t) {
        return this.center.copy(t.center),
        this.radius = t.radius,
        this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0),
        this.radius = -1,
        this
    }
    containsPoint(t) {
        return t.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(t) {
        return t.distanceTo(this.center) - this.radius
    }
    intersectsSphere(t) {
        const e = this.radius + t.radius;
        return t.center.distanceToSquared(this.center) <= e * e
    }
    intersectsBox(t) {
        return t.intersectsSphere(this)
    }
    intersectsPlane(t) {
        return Math.abs(t.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(t, e) {
        const n = this.center.distanceToSquared(t);
        return e.copy(t),
        n > this.radius * this.radius && (e.sub(this.center).normalize(),
        e.multiplyScalar(this.radius).add(this.center)),
        e
    }
    getBoundingBox(t) {
        return this.isEmpty() ? (t.makeEmpty(),
        t) : (t.set(this.center, this.center),
        t.expandByScalar(this.radius),
        t)
    }
    applyMatrix4(t) {
        return this.center.applyMatrix4(t),
        this.radius = this.radius * t.getMaxScaleOnAxis(),
        this
    }
    translate(t) {
        return this.center.add(t),
        this
    }
    expandByPoint(t) {
        if (this.isEmpty())
            return this.center.copy(t),
            this.radius = 0,
            this;
        xs.subVectors(t, this.center);
        const e = xs.lengthSq();
        if (e > this.radius * this.radius) {
            const n = Math.sqrt(e)
              , s = (n - this.radius) * .5;
            this.center.addScaledVector(xs, s / n),
            this.radius += s
        }
        return this
    }
    union(t) {
        return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t),
        this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (oo.subVectors(t.center, this.center).setLength(t.radius),
        this.expandByPoint(xs.copy(t.center).add(oo)),
        this.expandByPoint(xs.copy(t.center).sub(oo))),
        this)
    }
    equals(t) {
        return t.center.equals(this.center) && t.radius === this.radius
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const kn = new I
  , ao = new I
  , $s = new I
  , $n = new I
  , lo = new I
  , js = new I
  , co = new I;
class Fr {
    constructor(t=new I, e=new I(0,0,-1)) {
        this.origin = t,
        this.direction = e
    }
    set(t, e) {
        return this.origin.copy(t),
        this.direction.copy(e),
        this
    }
    copy(t) {
        return this.origin.copy(t.origin),
        this.direction.copy(t.direction),
        this
    }
    at(t, e) {
        return e.copy(this.origin).addScaledVector(this.direction, t)
    }
    lookAt(t) {
        return this.direction.copy(t).sub(this.origin).normalize(),
        this
    }
    recast(t) {
        return this.origin.copy(this.at(t, kn)),
        this
    }
    closestPointToPoint(t, e) {
        e.subVectors(t, this.origin);
        const n = e.dot(this.direction);
        return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n)
    }
    distanceToPoint(t) {
        return Math.sqrt(this.distanceSqToPoint(t))
    }
    distanceSqToPoint(t) {
        const e = kn.subVectors(t, this.origin).dot(this.direction);
        return e < 0 ? this.origin.distanceToSquared(t) : (kn.copy(this.origin).addScaledVector(this.direction, e),
        kn.distanceToSquared(t))
    }
    distanceSqToSegment(t, e, n, s) {
        ao.copy(t).add(e).multiplyScalar(.5),
        $s.copy(e).sub(t).normalize(),
        $n.copy(this.origin).sub(ao);
        const r = t.distanceTo(e) * .5
          , o = -this.direction.dot($s)
          , a = $n.dot(this.direction)
          , l = -$n.dot($s)
          , c = $n.lengthSq()
          , h = Math.abs(1 - o * o);
        let u, f, p, g;
        if (h > 0)
            if (u = o * l - a,
            f = o * a - l,
            g = r * h,
            u >= 0)
                if (f >= -g)
                    if (f <= g) {
                        const _ = 1 / h;
                        u *= _,
                        f *= _,
                        p = u * (u + o * f + 2 * a) + f * (o * u + f + 2 * l) + c
                    } else
                        f = r,
                        u = Math.max(0, -(o * f + a)),
                        p = -u * u + f * (f + 2 * l) + c;
                else
                    f = -r,
                    u = Math.max(0, -(o * f + a)),
                    p = -u * u + f * (f + 2 * l) + c;
            else
                f <= -g ? (u = Math.max(0, -(-o * r + a)),
                f = u > 0 ? -r : Math.min(Math.max(-r, -l), r),
                p = -u * u + f * (f + 2 * l) + c) : f <= g ? (u = 0,
                f = Math.min(Math.max(-r, -l), r),
                p = f * (f + 2 * l) + c) : (u = Math.max(0, -(o * r + a)),
                f = u > 0 ? r : Math.min(Math.max(-r, -l), r),
                p = -u * u + f * (f + 2 * l) + c);
        else
            f = o > 0 ? -r : r,
            u = Math.max(0, -(o * f + a)),
            p = -u * u + f * (f + 2 * l) + c;
        return n && n.copy(this.origin).addScaledVector(this.direction, u),
        s && s.copy(ao).addScaledVector($s, f),
        p
    }
    intersectSphere(t, e) {
        kn.subVectors(t.center, this.origin);
        const n = kn.dot(this.direction)
          , s = kn.dot(kn) - n * n
          , r = t.radius * t.radius;
        if (s > r)
            return null;
        const o = Math.sqrt(r - s)
          , a = n - o
          , l = n + o;
        return l < 0 ? null : a < 0 ? this.at(l, e) : this.at(a, e)
    }
    intersectsSphere(t) {
        return this.distanceSqToPoint(t.center) <= t.radius * t.radius
    }
    distanceToPlane(t) {
        const e = t.normal.dot(this.direction);
        if (e === 0)
            return t.distanceToPoint(this.origin) === 0 ? 0 : null;
        const n = -(this.origin.dot(t.normal) + t.constant) / e;
        return n >= 0 ? n : null
    }
    intersectPlane(t, e) {
        const n = this.distanceToPlane(t);
        return n === null ? null : this.at(n, e)
    }
    intersectsPlane(t) {
        const e = t.distanceToPoint(this.origin);
        return e === 0 || t.normal.dot(this.direction) * e < 0
    }
    intersectBox(t, e) {
        let n, s, r, o, a, l;
        const c = 1 / this.direction.x
          , h = 1 / this.direction.y
          , u = 1 / this.direction.z
          , f = this.origin;
        return c >= 0 ? (n = (t.min.x - f.x) * c,
        s = (t.max.x - f.x) * c) : (n = (t.max.x - f.x) * c,
        s = (t.min.x - f.x) * c),
        h >= 0 ? (r = (t.min.y - f.y) * h,
        o = (t.max.y - f.y) * h) : (r = (t.max.y - f.y) * h,
        o = (t.min.y - f.y) * h),
        n > o || r > s || ((r > n || isNaN(n)) && (n = r),
        (o < s || isNaN(s)) && (s = o),
        u >= 0 ? (a = (t.min.z - f.z) * u,
        l = (t.max.z - f.z) * u) : (a = (t.max.z - f.z) * u,
        l = (t.min.z - f.z) * u),
        n > l || a > s) || ((a > n || n !== n) && (n = a),
        (l < s || s !== s) && (s = l),
        s < 0) ? null : this.at(n >= 0 ? n : s, e)
    }
    intersectsBox(t) {
        return this.intersectBox(t, kn) !== null
    }
    intersectTriangle(t, e, n, s, r) {
        lo.subVectors(e, t),
        js.subVectors(n, t),
        co.crossVectors(lo, js);
        let o = this.direction.dot(co), a;
        if (o > 0) {
            if (s)
                return null;
            a = 1
        } else if (o < 0)
            a = -1,
            o = -o;
        else
            return null;
        $n.subVectors(this.origin, t);
        const l = a * this.direction.dot(js.crossVectors($n, js));
        if (l < 0)
            return null;
        const c = a * this.direction.dot(lo.cross($n));
        if (c < 0 || l + c > o)
            return null;
        const h = -a * $n.dot(co);
        return h < 0 ? null : this.at(h / o, r)
    }
    applyMatrix4(t) {
        return this.origin.applyMatrix4(t),
        this.direction.transformDirection(t),
        this
    }
    equals(t) {
        return t.origin.equals(this.origin) && t.direction.equals(this.direction)
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class be {
    constructor(t, e, n, s, r, o, a, l, c, h, u, f, p, g, _, m) {
        be.prototype.isMatrix4 = !0,
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        t !== void 0 && this.set(t, e, n, s, r, o, a, l, c, h, u, f, p, g, _, m)
    }
    set(t, e, n, s, r, o, a, l, c, h, u, f, p, g, _, m) {
        const d = this.elements;
        return d[0] = t,
        d[4] = e,
        d[8] = n,
        d[12] = s,
        d[1] = r,
        d[5] = o,
        d[9] = a,
        d[13] = l,
        d[2] = c,
        d[6] = h,
        d[10] = u,
        d[14] = f,
        d[3] = p,
        d[7] = g,
        d[11] = _,
        d[15] = m,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    clone() {
        return new be().fromArray(this.elements)
    }
    copy(t) {
        const e = this.elements
          , n = t.elements;
        return e[0] = n[0],
        e[1] = n[1],
        e[2] = n[2],
        e[3] = n[3],
        e[4] = n[4],
        e[5] = n[5],
        e[6] = n[6],
        e[7] = n[7],
        e[8] = n[8],
        e[9] = n[9],
        e[10] = n[10],
        e[11] = n[11],
        e[12] = n[12],
        e[13] = n[13],
        e[14] = n[14],
        e[15] = n[15],
        this
    }
    copyPosition(t) {
        const e = this.elements
          , n = t.elements;
        return e[12] = n[12],
        e[13] = n[13],
        e[14] = n[14],
        this
    }
    setFromMatrix3(t) {
        const e = t.elements;
        return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1),
        this
    }
    extractBasis(t, e, n) {
        return t.setFromMatrixColumn(this, 0),
        e.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
    }
    makeBasis(t, e, n) {
        return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1),
        this
    }
    extractRotation(t) {
        const e = this.elements
          , n = t.elements
          , s = 1 / Fi.setFromMatrixColumn(t, 0).length()
          , r = 1 / Fi.setFromMatrixColumn(t, 1).length()
          , o = 1 / Fi.setFromMatrixColumn(t, 2).length();
        return e[0] = n[0] * s,
        e[1] = n[1] * s,
        e[2] = n[2] * s,
        e[3] = 0,
        e[4] = n[4] * r,
        e[5] = n[5] * r,
        e[6] = n[6] * r,
        e[7] = 0,
        e[8] = n[8] * o,
        e[9] = n[9] * o,
        e[10] = n[10] * o,
        e[11] = 0,
        e[12] = 0,
        e[13] = 0,
        e[14] = 0,
        e[15] = 1,
        this
    }
    makeRotationFromEuler(t) {
        const e = this.elements
          , n = t.x
          , s = t.y
          , r = t.z
          , o = Math.cos(n)
          , a = Math.sin(n)
          , l = Math.cos(s)
          , c = Math.sin(s)
          , h = Math.cos(r)
          , u = Math.sin(r);
        if (t.order === "XYZ") {
            const f = o * h
              , p = o * u
              , g = a * h
              , _ = a * u;
            e[0] = l * h,
            e[4] = -l * u,
            e[8] = c,
            e[1] = p + g * c,
            e[5] = f - _ * c,
            e[9] = -a * l,
            e[2] = _ - f * c,
            e[6] = g + p * c,
            e[10] = o * l
        } else if (t.order === "YXZ") {
            const f = l * h
              , p = l * u
              , g = c * h
              , _ = c * u;
            e[0] = f + _ * a,
            e[4] = g * a - p,
            e[8] = o * c,
            e[1] = o * u,
            e[5] = o * h,
            e[9] = -a,
            e[2] = p * a - g,
            e[6] = _ + f * a,
            e[10] = o * l
        } else if (t.order === "ZXY") {
            const f = l * h
              , p = l * u
              , g = c * h
              , _ = c * u;
            e[0] = f - _ * a,
            e[4] = -o * u,
            e[8] = g + p * a,
            e[1] = p + g * a,
            e[5] = o * h,
            e[9] = _ - f * a,
            e[2] = -o * c,
            e[6] = a,
            e[10] = o * l
        } else if (t.order === "ZYX") {
            const f = o * h
              , p = o * u
              , g = a * h
              , _ = a * u;
            e[0] = l * h,
            e[4] = g * c - p,
            e[8] = f * c + _,
            e[1] = l * u,
            e[5] = _ * c + f,
            e[9] = p * c - g,
            e[2] = -c,
            e[6] = a * l,
            e[10] = o * l
        } else if (t.order === "YZX") {
            const f = o * l
              , p = o * c
              , g = a * l
              , _ = a * c;
            e[0] = l * h,
            e[4] = _ - f * u,
            e[8] = g * u + p,
            e[1] = u,
            e[5] = o * h,
            e[9] = -a * h,
            e[2] = -c * h,
            e[6] = p * u + g,
            e[10] = f - _ * u
        } else if (t.order === "XZY") {
            const f = o * l
              , p = o * c
              , g = a * l
              , _ = a * c;
            e[0] = l * h,
            e[4] = -u,
            e[8] = c * h,
            e[1] = f * u + _,
            e[5] = o * h,
            e[9] = p * u - g,
            e[2] = g * u - p,
            e[6] = a * h,
            e[10] = _ * u + f
        }
        return e[3] = 0,
        e[7] = 0,
        e[11] = 0,
        e[12] = 0,
        e[13] = 0,
        e[14] = 0,
        e[15] = 1,
        this
    }
    makeRotationFromQuaternion(t) {
        return this.compose(Ou, t, Nu)
    }
    lookAt(t, e, n) {
        const s = this.elements;
        return an.subVectors(t, e),
        an.lengthSq() === 0 && (an.z = 1),
        an.normalize(),
        jn.crossVectors(n, an),
        jn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? an.x += 1e-4 : an.z += 1e-4,
        an.normalize(),
        jn.crossVectors(n, an)),
        jn.normalize(),
        Zs.crossVectors(an, jn),
        s[0] = jn.x,
        s[4] = Zs.x,
        s[8] = an.x,
        s[1] = jn.y,
        s[5] = Zs.y,
        s[9] = an.y,
        s[2] = jn.z,
        s[6] = Zs.z,
        s[10] = an.z,
        this
    }
    multiply(t) {
        return this.multiplyMatrices(this, t)
    }
    premultiply(t) {
        return this.multiplyMatrices(t, this)
    }
    multiplyMatrices(t, e) {
        const n = t.elements
          , s = e.elements
          , r = this.elements
          , o = n[0]
          , a = n[4]
          , l = n[8]
          , c = n[12]
          , h = n[1]
          , u = n[5]
          , f = n[9]
          , p = n[13]
          , g = n[2]
          , _ = n[6]
          , m = n[10]
          , d = n[14]
          , x = n[3]
          , v = n[7]
          , S = n[11]
          , L = n[15]
          , A = s[0]
          , R = s[4]
          , K = s[8]
          , y = s[12]
          , T = s[1]
          , U = s[5]
          , k = s[9]
          , G = s[13]
          , P = s[2]
          , O = s[6]
          , N = s[10]
          , B = s[14]
          , z = s[3]
          , Y = s[7]
          , $ = s[11]
          , Q = s[15];
        return r[0] = o * A + a * T + l * P + c * z,
        r[4] = o * R + a * U + l * O + c * Y,
        r[8] = o * K + a * k + l * N + c * $,
        r[12] = o * y + a * G + l * B + c * Q,
        r[1] = h * A + u * T + f * P + p * z,
        r[5] = h * R + u * U + f * O + p * Y,
        r[9] = h * K + u * k + f * N + p * $,
        r[13] = h * y + u * G + f * B + p * Q,
        r[2] = g * A + _ * T + m * P + d * z,
        r[6] = g * R + _ * U + m * O + d * Y,
        r[10] = g * K + _ * k + m * N + d * $,
        r[14] = g * y + _ * G + m * B + d * Q,
        r[3] = x * A + v * T + S * P + L * z,
        r[7] = x * R + v * U + S * O + L * Y,
        r[11] = x * K + v * k + S * N + L * $,
        r[15] = x * y + v * G + S * B + L * Q,
        this
    }
    multiplyScalar(t) {
        const e = this.elements;
        return e[0] *= t,
        e[4] *= t,
        e[8] *= t,
        e[12] *= t,
        e[1] *= t,
        e[5] *= t,
        e[9] *= t,
        e[13] *= t,
        e[2] *= t,
        e[6] *= t,
        e[10] *= t,
        e[14] *= t,
        e[3] *= t,
        e[7] *= t,
        e[11] *= t,
        e[15] *= t,
        this
    }
    determinant() {
        const t = this.elements
          , e = t[0]
          , n = t[4]
          , s = t[8]
          , r = t[12]
          , o = t[1]
          , a = t[5]
          , l = t[9]
          , c = t[13]
          , h = t[2]
          , u = t[6]
          , f = t[10]
          , p = t[14]
          , g = t[3]
          , _ = t[7]
          , m = t[11]
          , d = t[15];
        return g * (+r * l * u - s * c * u - r * a * f + n * c * f + s * a * p - n * l * p) + _ * (+e * l * p - e * c * f + r * o * f - s * o * p + s * c * h - r * l * h) + m * (+e * c * u - e * a * p - r * o * u + n * o * p + r * a * h - n * c * h) + d * (-s * a * h - e * l * u + e * a * f + s * o * u - n * o * f + n * l * h)
    }
    transpose() {
        const t = this.elements;
        let e;
        return e = t[1],
        t[1] = t[4],
        t[4] = e,
        e = t[2],
        t[2] = t[8],
        t[8] = e,
        e = t[6],
        t[6] = t[9],
        t[9] = e,
        e = t[3],
        t[3] = t[12],
        t[12] = e,
        e = t[7],
        t[7] = t[13],
        t[13] = e,
        e = t[11],
        t[11] = t[14],
        t[14] = e,
        this
    }
    setPosition(t, e, n) {
        const s = this.elements;
        return t.isVector3 ? (s[12] = t.x,
        s[13] = t.y,
        s[14] = t.z) : (s[12] = t,
        s[13] = e,
        s[14] = n),
        this
    }
    invert() {
        const t = this.elements
          , e = t[0]
          , n = t[1]
          , s = t[2]
          , r = t[3]
          , o = t[4]
          , a = t[5]
          , l = t[6]
          , c = t[7]
          , h = t[8]
          , u = t[9]
          , f = t[10]
          , p = t[11]
          , g = t[12]
          , _ = t[13]
          , m = t[14]
          , d = t[15]
          , x = u * m * c - _ * f * c + _ * l * p - a * m * p - u * l * d + a * f * d
          , v = g * f * c - h * m * c - g * l * p + o * m * p + h * l * d - o * f * d
          , S = h * _ * c - g * u * c + g * a * p - o * _ * p - h * a * d + o * u * d
          , L = g * u * l - h * _ * l - g * a * f + o * _ * f + h * a * m - o * u * m
          , A = e * x + n * v + s * S + r * L;
        if (A === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const R = 1 / A;
        return t[0] = x * R,
        t[1] = (_ * f * r - u * m * r - _ * s * p + n * m * p + u * s * d - n * f * d) * R,
        t[2] = (a * m * r - _ * l * r + _ * s * c - n * m * c - a * s * d + n * l * d) * R,
        t[3] = (u * l * r - a * f * r - u * s * c + n * f * c + a * s * p - n * l * p) * R,
        t[4] = v * R,
        t[5] = (h * m * r - g * f * r + g * s * p - e * m * p - h * s * d + e * f * d) * R,
        t[6] = (g * l * r - o * m * r - g * s * c + e * m * c + o * s * d - e * l * d) * R,
        t[7] = (o * f * r - h * l * r + h * s * c - e * f * c - o * s * p + e * l * p) * R,
        t[8] = S * R,
        t[9] = (g * u * r - h * _ * r - g * n * p + e * _ * p + h * n * d - e * u * d) * R,
        t[10] = (o * _ * r - g * a * r + g * n * c - e * _ * c - o * n * d + e * a * d) * R,
        t[11] = (h * a * r - o * u * r - h * n * c + e * u * c + o * n * p - e * a * p) * R,
        t[12] = L * R,
        t[13] = (h * _ * s - g * u * s + g * n * f - e * _ * f - h * n * m + e * u * m) * R,
        t[14] = (g * a * s - o * _ * s - g * n * l + e * _ * l + o * n * m - e * a * m) * R,
        t[15] = (o * u * s - h * a * s + h * n * l - e * u * l - o * n * f + e * a * f) * R,
        this
    }
    scale(t) {
        const e = this.elements
          , n = t.x
          , s = t.y
          , r = t.z;
        return e[0] *= n,
        e[4] *= s,
        e[8] *= r,
        e[1] *= n,
        e[5] *= s,
        e[9] *= r,
        e[2] *= n,
        e[6] *= s,
        e[10] *= r,
        e[3] *= n,
        e[7] *= s,
        e[11] *= r,
        this
    }
    getMaxScaleOnAxis() {
        const t = this.elements
          , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
          , n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
          , s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
        return Math.sqrt(Math.max(e, n, s))
    }
    makeTranslation(t, e, n) {
        return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
        this
    }
    makeRotationX(t) {
        const e = Math.cos(t)
          , n = Math.sin(t);
        return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1),
        this
    }
    makeRotationY(t) {
        const e = Math.cos(t)
          , n = Math.sin(t);
        return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1),
        this
    }
    makeRotationZ(t) {
        const e = Math.cos(t)
          , n = Math.sin(t);
        return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    makeRotationAxis(t, e) {
        const n = Math.cos(e)
          , s = Math.sin(e)
          , r = 1 - n
          , o = t.x
          , a = t.y
          , l = t.z
          , c = r * o
          , h = r * a;
        return this.set(c * o + n, c * a - s * l, c * l + s * a, 0, c * a + s * l, h * a + n, h * l - s * o, 0, c * l - s * a, h * l + s * o, r * l * l + n, 0, 0, 0, 0, 1),
        this
    }
    makeScale(t, e, n) {
        return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
        this
    }
    makeShear(t, e, n, s, r, o) {
        return this.set(1, n, r, 0, t, 1, o, 0, e, s, 1, 0, 0, 0, 0, 1),
        this
    }
    compose(t, e, n) {
        const s = this.elements
          , r = e._x
          , o = e._y
          , a = e._z
          , l = e._w
          , c = r + r
          , h = o + o
          , u = a + a
          , f = r * c
          , p = r * h
          , g = r * u
          , _ = o * h
          , m = o * u
          , d = a * u
          , x = l * c
          , v = l * h
          , S = l * u
          , L = n.x
          , A = n.y
          , R = n.z;
        return s[0] = (1 - (_ + d)) * L,
        s[1] = (p + S) * L,
        s[2] = (g - v) * L,
        s[3] = 0,
        s[4] = (p - S) * A,
        s[5] = (1 - (f + d)) * A,
        s[6] = (m + x) * A,
        s[7] = 0,
        s[8] = (g + v) * R,
        s[9] = (m - x) * R,
        s[10] = (1 - (f + _)) * R,
        s[11] = 0,
        s[12] = t.x,
        s[13] = t.y,
        s[14] = t.z,
        s[15] = 1,
        this
    }
    decompose(t, e, n) {
        const s = this.elements;
        let r = Fi.set(s[0], s[1], s[2]).length();
        const o = Fi.set(s[4], s[5], s[6]).length()
          , a = Fi.set(s[8], s[9], s[10]).length();
        this.determinant() < 0 && (r = -r),
        t.x = s[12],
        t.y = s[13],
        t.z = s[14],
        Mn.copy(this);
        const c = 1 / r
          , h = 1 / o
          , u = 1 / a;
        return Mn.elements[0] *= c,
        Mn.elements[1] *= c,
        Mn.elements[2] *= c,
        Mn.elements[4] *= h,
        Mn.elements[5] *= h,
        Mn.elements[6] *= h,
        Mn.elements[8] *= u,
        Mn.elements[9] *= u,
        Mn.elements[10] *= u,
        e.setFromRotationMatrix(Mn),
        n.x = r,
        n.y = o,
        n.z = a,
        this
    }
    makePerspective(t, e, n, s, r, o, a=Xn) {
        const l = this.elements
          , c = 2 * r / (e - t)
          , h = 2 * r / (n - s)
          , u = (e + t) / (e - t)
          , f = (n + s) / (n - s);
        let p, g;
        if (a === Xn)
            p = -(o + r) / (o - r),
            g = -2 * o * r / (o - r);
        else if (a === Pr)
            p = -o / (o - r),
            g = -o * r / (o - r);
        else
            throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
        return l[0] = c,
        l[4] = 0,
        l[8] = u,
        l[12] = 0,
        l[1] = 0,
        l[5] = h,
        l[9] = f,
        l[13] = 0,
        l[2] = 0,
        l[6] = 0,
        l[10] = p,
        l[14] = g,
        l[3] = 0,
        l[7] = 0,
        l[11] = -1,
        l[15] = 0,
        this
    }
    makeOrthographic(t, e, n, s, r, o, a=Xn) {
        const l = this.elements
          , c = 1 / (e - t)
          , h = 1 / (n - s)
          , u = 1 / (o - r)
          , f = (e + t) * c
          , p = (n + s) * h;
        let g, _;
        if (a === Xn)
            g = (o + r) * u,
            _ = -2 * u;
        else if (a === Pr)
            g = r * u,
            _ = -1 * u;
        else
            throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
        return l[0] = 2 * c,
        l[4] = 0,
        l[8] = 0,
        l[12] = -f,
        l[1] = 0,
        l[5] = 2 * h,
        l[9] = 0,
        l[13] = -p,
        l[2] = 0,
        l[6] = 0,
        l[10] = _,
        l[14] = -g,
        l[3] = 0,
        l[7] = 0,
        l[11] = 0,
        l[15] = 1,
        this
    }
    equals(t) {
        const e = this.elements
          , n = t.elements;
        for (let s = 0; s < 16; s++)
            if (e[s] !== n[s])
                return !1;
        return !0
    }
    fromArray(t, e=0) {
        for (let n = 0; n < 16; n++)
            this.elements[n] = t[n + e];
        return this
    }
    toArray(t=[], e=0) {
        const n = this.elements;
        return t[e] = n[0],
        t[e + 1] = n[1],
        t[e + 2] = n[2],
        t[e + 3] = n[3],
        t[e + 4] = n[4],
        t[e + 5] = n[5],
        t[e + 6] = n[6],
        t[e + 7] = n[7],
        t[e + 8] = n[8],
        t[e + 9] = n[9],
        t[e + 10] = n[10],
        t[e + 11] = n[11],
        t[e + 12] = n[12],
        t[e + 13] = n[13],
        t[e + 14] = n[14],
        t[e + 15] = n[15],
        t
    }
}
const Fi = new I
  , Mn = new be
  , Ou = new I(0,0,0)
  , Nu = new I(1,1,1)
  , jn = new I
  , Zs = new I
  , an = new I
  , nl = new be
  , il = new Bs;
class kr {
    constructor(t=0, e=0, n=0, s=kr.DEFAULT_ORDER) {
        this.isEuler = !0,
        this._x = t,
        this._y = e,
        this._z = n,
        this._order = s
    }
    get x() {
        return this._x
    }
    set x(t) {
        this._x = t,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(t) {
        this._y = t,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(t) {
        this._z = t,
        this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(t) {
        this._order = t,
        this._onChangeCallback()
    }
    set(t, e, n, s=this._order) {
        return this._x = t,
        this._y = e,
        this._z = n,
        this._order = s,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    }
    copy(t) {
        return this._x = t._x,
        this._y = t._y,
        this._z = t._z,
        this._order = t._order,
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(t, e=this._order, n=!0) {
        const s = t.elements
          , r = s[0]
          , o = s[4]
          , a = s[8]
          , l = s[1]
          , c = s[5]
          , h = s[9]
          , u = s[2]
          , f = s[6]
          , p = s[10];
        switch (e) {
        case "XYZ":
            this._y = Math.asin(en(a, -1, 1)),
            Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, p),
            this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(f, c),
            this._z = 0);
            break;
        case "YXZ":
            this._x = Math.asin(-en(h, -1, 1)),
            Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, p),
            this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r),
            this._z = 0);
            break;
        case "ZXY":
            this._x = Math.asin(en(f, -1, 1)),
            Math.abs(f) < .9999999 ? (this._y = Math.atan2(-u, p),
            this._z = Math.atan2(-o, c)) : (this._y = 0,
            this._z = Math.atan2(l, r));
            break;
        case "ZYX":
            this._y = Math.asin(-en(u, -1, 1)),
            Math.abs(u) < .9999999 ? (this._x = Math.atan2(f, p),
            this._z = Math.atan2(l, r)) : (this._x = 0,
            this._z = Math.atan2(-o, c));
            break;
        case "YZX":
            this._z = Math.asin(en(l, -1, 1)),
            Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c),
            this._y = Math.atan2(-u, r)) : (this._x = 0,
            this._y = Math.atan2(a, p));
            break;
        case "XZY":
            this._z = Math.asin(-en(o, -1, 1)),
            Math.abs(o) < .9999999 ? (this._x = Math.atan2(f, c),
            this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, p),
            this._y = 0);
            break;
        default:
            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
        }
        return this._order = e,
        n === !0 && this._onChangeCallback(),
        this
    }
    setFromQuaternion(t, e, n) {
        return nl.makeRotationFromQuaternion(t),
        this.setFromRotationMatrix(nl, e, n)
    }
    setFromVector3(t, e=this._order) {
        return this.set(t.x, t.y, t.z, e)
    }
    reorder(t) {
        return il.setFromEuler(this),
        this.setFromQuaternion(il, t)
    }
    equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
    }
    fromArray(t) {
        return this._x = t[0],
        this._y = t[1],
        this._z = t[2],
        t[3] !== void 0 && (this._order = t[3]),
        this._onChangeCallback(),
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this._x,
        t[e + 1] = this._y,
        t[e + 2] = this._z,
        t[e + 3] = this._order,
        t
    }
    _onChange(t) {
        return this._onChangeCallback = t,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._order
    }
}
kr.DEFAULT_ORDER = "XYZ";
class Pc {
    constructor() {
        this.mask = 1
    }
    set(t) {
        this.mask = (1 << t | 0) >>> 0
    }
    enable(t) {
        this.mask |= 1 << t | 0
    }
    enableAll() {
        this.mask = -1
    }
    toggle(t) {
        this.mask ^= 1 << t | 0
    }
    disable(t) {
        this.mask &= ~(1 << t | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(t) {
        return (this.mask & t.mask) !== 0
    }
    isEnabled(t) {
        return (this.mask & (1 << t | 0)) !== 0
    }
}
let Fu = 0;
const sl = new I
  , ki = new Bs
  , Bn = new be
  , Js = new I
  , Ms = new I
  , ku = new I
  , Bu = new Bs
  , rl = new I(1,0,0)
  , ol = new I(0,1,0)
  , al = new I(0,0,1)
  , zu = {
    type: "added"
}
  , Gu = {
    type: "removed"
};
class De extends ds {
    constructor() {
        super(),
        this.isObject3D = !0,
        Object.defineProperty(this, "id", {
            value: Fu++
        }),
        this.uuid = oi(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = De.DEFAULT_UP.clone();
        const t = new I
          , e = new kr
          , n = new Bs
          , s = new I(1,1,1);
        function r() {
            n.setFromEuler(e, !1)
        }
        function o() {
            e.setFromQuaternion(n, void 0, !1)
        }
        e._onChange(r),
        n._onChange(o),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: s
            },
            modelViewMatrix: {
                value: new be
            },
            normalMatrix: {
                value: new Jt
            }
        }),
        this.matrix = new be,
        this.matrixWorld = new be,
        this.matrixAutoUpdate = De.DEFAULT_MATRIX_AUTO_UPDATE,
        this.matrixWorldAutoUpdate = De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new Pc,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.animations = [],
        this.userData = {}
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(t) {
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(t),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(t) {
        return this.quaternion.premultiply(t),
        this
    }
    setRotationFromAxisAngle(t, e) {
        this.quaternion.setFromAxisAngle(t, e)
    }
    setRotationFromEuler(t) {
        this.quaternion.setFromEuler(t, !0)
    }
    setRotationFromMatrix(t) {
        this.quaternion.setFromRotationMatrix(t)
    }
    setRotationFromQuaternion(t) {
        this.quaternion.copy(t)
    }
    rotateOnAxis(t, e) {
        return ki.setFromAxisAngle(t, e),
        this.quaternion.multiply(ki),
        this
    }
    rotateOnWorldAxis(t, e) {
        return ki.setFromAxisAngle(t, e),
        this.quaternion.premultiply(ki),
        this
    }
    rotateX(t) {
        return this.rotateOnAxis(rl, t)
    }
    rotateY(t) {
        return this.rotateOnAxis(ol, t)
    }
    rotateZ(t) {
        return this.rotateOnAxis(al, t)
    }
    translateOnAxis(t, e) {
        return sl.copy(t).applyQuaternion(this.quaternion),
        this.position.add(sl.multiplyScalar(e)),
        this
    }
    translateX(t) {
        return this.translateOnAxis(rl, t)
    }
    translateY(t) {
        return this.translateOnAxis(ol, t)
    }
    translateZ(t) {
        return this.translateOnAxis(al, t)
    }
    localToWorld(t) {
        return this.updateWorldMatrix(!0, !1),
        t.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(t) {
        return this.updateWorldMatrix(!0, !1),
        t.applyMatrix4(Bn.copy(this.matrixWorld).invert())
    }
    lookAt(t, e, n) {
        t.isVector3 ? Js.copy(t) : Js.set(t, e, n);
        const s = this.parent;
        this.updateWorldMatrix(!0, !1),
        Ms.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight ? Bn.lookAt(Ms, Js, this.up) : Bn.lookAt(Js, Ms, this.up),
        this.quaternion.setFromRotationMatrix(Bn),
        s && (Bn.extractRotation(s.matrixWorld),
        ki.setFromRotationMatrix(Bn),
        this.quaternion.premultiply(ki.invert()))
    }
    add(t) {
        if (arguments.length > 1) {
            for (let e = 0; e < arguments.length; e++)
                this.add(arguments[e]);
            return this
        }
        return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
        this) : (t && t.isObject3D ? (t.parent !== null && t.parent.remove(t),
        t.parent = this,
        this.children.push(t),
        t.dispatchEvent(zu)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
        this)
    }
    remove(t) {
        if (arguments.length > 1) {
            for (let n = 0; n < arguments.length; n++)
                this.remove(arguments[n]);
            return this
        }
        const e = this.children.indexOf(t);
        return e !== -1 && (t.parent = null,
        this.children.splice(e, 1),
        t.dispatchEvent(Gu)),
        this
    }
    removeFromParent() {
        const t = this.parent;
        return t !== null && t.remove(this),
        this
    }
    clear() {
        return this.remove(...this.children)
    }
    attach(t) {
        return this.updateWorldMatrix(!0, !1),
        Bn.copy(this.matrixWorld).invert(),
        t.parent !== null && (t.parent.updateWorldMatrix(!0, !1),
        Bn.multiply(t.parent.matrixWorld)),
        t.applyMatrix4(Bn),
        this.add(t),
        t.updateWorldMatrix(!1, !0),
        this
    }
    getObjectById(t) {
        return this.getObjectByProperty("id", t)
    }
    getObjectByName(t) {
        return this.getObjectByProperty("name", t)
    }
    getObjectByProperty(t, e) {
        if (this[t] === e)
            return this;
        for (let n = 0, s = this.children.length; n < s; n++) {
            const o = this.children[n].getObjectByProperty(t, e);
            if (o !== void 0)
                return o
        }
    }
    getObjectsByProperty(t, e, n=[]) {
        this[t] === e && n.push(this);
        const s = this.children;
        for (let r = 0, o = s.length; r < o; r++)
            s[r].getObjectsByProperty(t, e, n);
        return n
    }
    getWorldPosition(t) {
        return this.updateWorldMatrix(!0, !1),
        t.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(t) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(Ms, t, ku),
        t
    }
    getWorldScale(t) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(Ms, Bu, t),
        t
    }
    getWorldDirection(t) {
        this.updateWorldMatrix(!0, !1);
        const e = this.matrixWorld.elements;
        return t.set(e[8], e[9], e[10]).normalize()
    }
    raycast() {}
    traverse(t) {
        t(this);
        const e = this.children;
        for (let n = 0, s = e.length; n < s; n++)
            e[n].traverse(t)
    }
    traverseVisible(t) {
        if (this.visible === !1)
            return;
        t(this);
        const e = this.children;
        for (let n = 0, s = e.length; n < s; n++)
            e[n].traverseVisible(t)
    }
    traverseAncestors(t) {
        const e = this.parent;
        e !== null && (t(e),
        e.traverseAncestors(t))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(t) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || t) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        this.matrixWorldNeedsUpdate = !1,
        t = !0);
        const e = this.children;
        for (let n = 0, s = e.length; n < s; n++) {
            const r = e[n];
            (r.matrixWorldAutoUpdate === !0 || t === !0) && r.updateMatrixWorld(t)
        }
    }
    updateWorldMatrix(t, e) {
        const n = this.parent;
        if (t === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        e === !0) {
            const s = this.children;
            for (let r = 0, o = s.length; r < o; r++) {
                const a = s[r];
                a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0)
            }
        }
    }
    toJSON(t) {
        const e = t === void 0 || typeof t == "string"
          , n = {};
        e && (t = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        },
        n.metadata = {
            version: 4.6,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const s = {};
        s.uuid = this.uuid,
        s.type = this.type,
        this.name !== "" && (s.name = this.name),
        this.castShadow === !0 && (s.castShadow = !0),
        this.receiveShadow === !0 && (s.receiveShadow = !0),
        this.visible === !1 && (s.visible = !1),
        this.frustumCulled === !1 && (s.frustumCulled = !1),
        this.renderOrder !== 0 && (s.renderOrder = this.renderOrder),
        Object.keys(this.userData).length > 0 && (s.userData = this.userData),
        s.layers = this.layers.mask,
        s.matrix = this.matrix.toArray(),
        s.up = this.up.toArray(),
        this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1),
        this.isInstancedMesh && (s.type = "InstancedMesh",
        s.count = this.count,
        s.instanceMatrix = this.instanceMatrix.toJSON(),
        this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh && (s.type = "BatchedMesh",
        s.perObjectFrustumCulled = this.perObjectFrustumCulled,
        s.sortObjects = this.sortObjects,
        s.drawRanges = this._drawRanges,
        s.reservedRanges = this._reservedRanges,
        s.visibility = this._visibility,
        s.active = this._active,
        s.bounds = this._bounds.map(a => ({
            boxInitialized: a.boxInitialized,
            boxMin: a.box.min.toArray(),
            boxMax: a.box.max.toArray(),
            sphereInitialized: a.sphereInitialized,
            sphereRadius: a.sphere.radius,
            sphereCenter: a.sphere.center.toArray()
        })),
        s.maxGeometryCount = this._maxGeometryCount,
        s.maxVertexCount = this._maxVertexCount,
        s.maxIndexCount = this._maxIndexCount,
        s.geometryInitialized = this._geometryInitialized,
        s.geometryCount = this._geometryCount,
        s.matricesTexture = this._matricesTexture.toJSON(t),
        this.boundingSphere !== null && (s.boundingSphere = {
            center: s.boundingSphere.center.toArray(),
            radius: s.boundingSphere.radius
        }),
        this.boundingBox !== null && (s.boundingBox = {
            min: s.boundingBox.min.toArray(),
            max: s.boundingBox.max.toArray()
        }));
        function r(a, l) {
            return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(t)),
            l.uuid
        }
        if (this.isScene)
            this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)),
            this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(t).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            s.geometry = r(t.geometries, this.geometry);
            const a = this.geometry.parameters;
            if (a !== void 0 && a.shapes !== void 0) {
                const l = a.shapes;
                if (Array.isArray(l))
                    for (let c = 0, h = l.length; c < h; c++) {
                        const u = l[c];
                        r(t.shapes, u)
                    }
                else
                    r(t.shapes, l)
            }
        }
        if (this.isSkinnedMesh && (s.bindMode = this.bindMode,
        s.bindMatrix = this.bindMatrix.toArray(),
        this.skeleton !== void 0 && (r(t.skeletons, this.skeleton),
        s.skeleton = this.skeleton.uuid)),
        this.material !== void 0)
            if (Array.isArray(this.material)) {
                const a = [];
                for (let l = 0, c = this.material.length; l < c; l++)
                    a.push(r(t.materials, this.material[l]));
                s.material = a
            } else
                s.material = r(t.materials, this.material);
        if (this.children.length > 0) {
            s.children = [];
            for (let a = 0; a < this.children.length; a++)
                s.children.push(this.children[a].toJSON(t).object)
        }
        if (this.animations.length > 0) {
            s.animations = [];
            for (let a = 0; a < this.animations.length; a++) {
                const l = this.animations[a];
                s.animations.push(r(t.animations, l))
            }
        }
        if (e) {
            const a = o(t.geometries)
              , l = o(t.materials)
              , c = o(t.textures)
              , h = o(t.images)
              , u = o(t.shapes)
              , f = o(t.skeletons)
              , p = o(t.animations)
              , g = o(t.nodes);
            a.length > 0 && (n.geometries = a),
            l.length > 0 && (n.materials = l),
            c.length > 0 && (n.textures = c),
            h.length > 0 && (n.images = h),
            u.length > 0 && (n.shapes = u),
            f.length > 0 && (n.skeletons = f),
            p.length > 0 && (n.animations = p),
            g.length > 0 && (n.nodes = g)
        }
        return n.object = s,
        n;
        function o(a) {
            const l = [];
            for (const c in a) {
                const h = a[c];
                delete h.metadata,
                l.push(h)
            }
            return l
        }
    }
    clone(t) {
        return new this.constructor().copy(this, t)
    }
    copy(t, e=!0) {
        if (this.name = t.name,
        this.up.copy(t.up),
        this.position.copy(t.position),
        this.rotation.order = t.rotation.order,
        this.quaternion.copy(t.quaternion),
        this.scale.copy(t.scale),
        this.matrix.copy(t.matrix),
        this.matrixWorld.copy(t.matrixWorld),
        this.matrixAutoUpdate = t.matrixAutoUpdate,
        this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate,
        this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
        this.layers.mask = t.layers.mask,
        this.visible = t.visible,
        this.castShadow = t.castShadow,
        this.receiveShadow = t.receiveShadow,
        this.frustumCulled = t.frustumCulled,
        this.renderOrder = t.renderOrder,
        this.animations = t.animations.slice(),
        this.userData = JSON.parse(JSON.stringify(t.userData)),
        e === !0)
            for (let n = 0; n < t.children.length; n++) {
                const s = t.children[n];
                this.add(s.clone())
            }
        return this
    }
}
De.DEFAULT_UP = new I(0,1,0);
De.DEFAULT_MATRIX_AUTO_UPDATE = !0;
De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const yn = new I
  , zn = new I
  , ho = new I
  , Gn = new I
  , Bi = new I
  , zi = new I
  , ll = new I
  , uo = new I
  , fo = new I
  , po = new I;
let Qs = !1;
class un {
    constructor(t=new I, e=new I, n=new I) {
        this.a = t,
        this.b = e,
        this.c = n
    }
    static getNormal(t, e, n, s) {
        s.subVectors(n, e),
        yn.subVectors(t, e),
        s.cross(yn);
        const r = s.lengthSq();
        return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0)
    }
    static getBarycoord(t, e, n, s, r) {
        yn.subVectors(s, e),
        zn.subVectors(n, e),
        ho.subVectors(t, e);
        const o = yn.dot(yn)
          , a = yn.dot(zn)
          , l = yn.dot(ho)
          , c = zn.dot(zn)
          , h = zn.dot(ho)
          , u = o * c - a * a;
        if (u === 0)
            return r.set(0, 0, 0),
            null;
        const f = 1 / u
          , p = (c * l - a * h) * f
          , g = (o * h - a * l) * f;
        return r.set(1 - p - g, g, p)
    }
    static containsPoint(t, e, n, s) {
        return this.getBarycoord(t, e, n, s, Gn) === null ? !1 : Gn.x >= 0 && Gn.y >= 0 && Gn.x + Gn.y <= 1
    }
    static getUV(t, e, n, s, r, o, a, l) {
        return Qs === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),
        Qs = !0),
        this.getInterpolation(t, e, n, s, r, o, a, l)
    }
    static getInterpolation(t, e, n, s, r, o, a, l) {
        return this.getBarycoord(t, e, n, s, Gn) === null ? (l.x = 0,
        l.y = 0,
        "z" in l && (l.z = 0),
        "w" in l && (l.w = 0),
        null) : (l.setScalar(0),
        l.addScaledVector(r, Gn.x),
        l.addScaledVector(o, Gn.y),
        l.addScaledVector(a, Gn.z),
        l)
    }
    static isFrontFacing(t, e, n, s) {
        return yn.subVectors(n, e),
        zn.subVectors(t, e),
        yn.cross(zn).dot(s) < 0
    }
    set(t, e, n) {
        return this.a.copy(t),
        this.b.copy(e),
        this.c.copy(n),
        this
    }
    setFromPointsAndIndices(t, e, n, s) {
        return this.a.copy(t[e]),
        this.b.copy(t[n]),
        this.c.copy(t[s]),
        this
    }
    setFromAttributeAndIndices(t, e, n, s) {
        return this.a.fromBufferAttribute(t, e),
        this.b.fromBufferAttribute(t, n),
        this.c.fromBufferAttribute(t, s),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        return this.a.copy(t.a),
        this.b.copy(t.b),
        this.c.copy(t.c),
        this
    }
    getArea() {
        return yn.subVectors(this.c, this.b),
        zn.subVectors(this.a, this.b),
        yn.cross(zn).length() * .5
    }
    getMidpoint(t) {
        return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(t) {
        return un.getNormal(this.a, this.b, this.c, t)
    }
    getPlane(t) {
        return t.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(t, e) {
        return un.getBarycoord(t, this.a, this.b, this.c, e)
    }
    getUV(t, e, n, s, r) {
        return Qs === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),
        Qs = !0),
        un.getInterpolation(t, this.a, this.b, this.c, e, n, s, r)
    }
    getInterpolation(t, e, n, s, r) {
        return un.getInterpolation(t, this.a, this.b, this.c, e, n, s, r)
    }
    containsPoint(t) {
        return un.containsPoint(t, this.a, this.b, this.c)
    }
    isFrontFacing(t) {
        return un.isFrontFacing(this.a, this.b, this.c, t)
    }
    intersectsBox(t) {
        return t.intersectsTriangle(this)
    }
    closestPointToPoint(t, e) {
        const n = this.a
          , s = this.b
          , r = this.c;
        let o, a;
        Bi.subVectors(s, n),
        zi.subVectors(r, n),
        uo.subVectors(t, n);
        const l = Bi.dot(uo)
          , c = zi.dot(uo);
        if (l <= 0 && c <= 0)
            return e.copy(n);
        fo.subVectors(t, s);
        const h = Bi.dot(fo)
          , u = zi.dot(fo);
        if (h >= 0 && u <= h)
            return e.copy(s);
        const f = l * u - h * c;
        if (f <= 0 && l >= 0 && h <= 0)
            return o = l / (l - h),
            e.copy(n).addScaledVector(Bi, o);
        po.subVectors(t, r);
        const p = Bi.dot(po)
          , g = zi.dot(po);
        if (g >= 0 && p <= g)
            return e.copy(r);
        const _ = p * c - l * g;
        if (_ <= 0 && c >= 0 && g <= 0)
            return a = c / (c - g),
            e.copy(n).addScaledVector(zi, a);
        const m = h * g - p * u;
        if (m <= 0 && u - h >= 0 && p - g >= 0)
            return ll.subVectors(r, s),
            a = (u - h) / (u - h + (p - g)),
            e.copy(s).addScaledVector(ll, a);
        const d = 1 / (m + _ + f);
        return o = _ * d,
        a = f * d,
        e.copy(n).addScaledVector(Bi, o).addScaledVector(zi, a)
    }
    equals(t) {
        return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
    }
}
const Dc = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}
  , Zn = {
    h: 0,
    s: 0,
    l: 0
}
  , tr = {
    h: 0,
    s: 0,
    l: 0
};
function mo(i, t, e) {
    return e < 0 && (e += 1),
    e > 1 && (e -= 1),
    e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i
}
class Bt {
    constructor(t, e, n) {
        return this.isColor = !0,
        this.r = 1,
        this.g = 1,
        this.b = 1,
        this.set(t, e, n)
    }
    set(t, e, n) {
        if (e === void 0 && n === void 0) {
            const s = t;
            s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s)
        } else
            this.setRGB(t, e, n);
        return this
    }
    setScalar(t) {
        return this.r = t,
        this.g = t,
        this.b = t,
        this
    }
    setHex(t, e=Me) {
        return t = Math.floor(t),
        this.r = (t >> 16 & 255) / 255,
        this.g = (t >> 8 & 255) / 255,
        this.b = (t & 255) / 255,
        ae.toWorkingColorSpace(this, e),
        this
    }
    setRGB(t, e, n, s=ae.workingColorSpace) {
        return this.r = t,
        this.g = e,
        this.b = n,
        ae.toWorkingColorSpace(this, s),
        this
    }
    setHSL(t, e, n, s=ae.workingColorSpace) {
        if (t = Au(t, 1),
        e = en(e, 0, 1),
        n = en(n, 0, 1),
        e === 0)
            this.r = this.g = this.b = n;
        else {
            const r = n <= .5 ? n * (1 + e) : n + e - n * e
              , o = 2 * n - r;
            this.r = mo(o, r, t + 1 / 3),
            this.g = mo(o, r, t),
            this.b = mo(o, r, t - 1 / 3)
        }
        return ae.toWorkingColorSpace(this, s),
        this
    }
    setStyle(t, e=Me) {
        function n(r) {
            r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
        }
        let s;
        if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
            let r;
            const o = s[1]
              , a = s[2];
            switch (o) {
            case "rgb":
            case "rgba":
                if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
                    return n(r[4]),
                    this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
                if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
                    return n(r[4]),
                    this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
                break;
            case "hsl":
            case "hsla":
                if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
                    return n(r[4]),
                    this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
                break;
            default:
                console.warn("THREE.Color: Unknown color model " + t)
            }
        } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
            const r = s[1]
              , o = r.length;
            if (o === 3)
                return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, e);
            if (o === 6)
                return this.setHex(parseInt(r, 16), e);
            console.warn("THREE.Color: Invalid hex color " + t)
        } else if (t && t.length > 0)
            return this.setColorName(t, e);
        return this
    }
    setColorName(t, e=Me) {
        const n = Dc[t.toLowerCase()];
        return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t),
        this
    }
    clone() {
        return new this.constructor(this.r,this.g,this.b)
    }
    copy(t) {
        return this.r = t.r,
        this.g = t.g,
        this.b = t.b,
        this
    }
    copySRGBToLinear(t) {
        return this.r = os(t.r),
        this.g = os(t.g),
        this.b = os(t.b),
        this
    }
    copyLinearToSRGB(t) {
        return this.r = no(t.r),
        this.g = no(t.g),
        this.b = no(t.b),
        this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this),
        this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this),
        this
    }
    getHex(t=Me) {
        return ae.fromWorkingColorSpace(Xe.copy(this), t),
        Math.round(en(Xe.r * 255, 0, 255)) * 65536 + Math.round(en(Xe.g * 255, 0, 255)) * 256 + Math.round(en(Xe.b * 255, 0, 255))
    }
    getHexString(t=Me) {
        return ("000000" + this.getHex(t).toString(16)).slice(-6)
    }
    getHSL(t, e=ae.workingColorSpace) {
        ae.fromWorkingColorSpace(Xe.copy(this), e);
        const n = Xe.r
          , s = Xe.g
          , r = Xe.b
          , o = Math.max(n, s, r)
          , a = Math.min(n, s, r);
        let l, c;
        const h = (a + o) / 2;
        if (a === o)
            l = 0,
            c = 0;
        else {
            const u = o - a;
            switch (c = h <= .5 ? u / (o + a) : u / (2 - o - a),
            o) {
            case n:
                l = (s - r) / u + (s < r ? 6 : 0);
                break;
            case s:
                l = (r - n) / u + 2;
                break;
            case r:
                l = (n - s) / u + 4;
                break
            }
            l /= 6
        }
        return t.h = l,
        t.s = c,
        t.l = h,
        t
    }
    getRGB(t, e=ae.workingColorSpace) {
        return ae.fromWorkingColorSpace(Xe.copy(this), e),
        t.r = Xe.r,
        t.g = Xe.g,
        t.b = Xe.b,
        t
    }
    getStyle(t=Me) {
        ae.fromWorkingColorSpace(Xe.copy(this), t);
        const e = Xe.r
          , n = Xe.g
          , s = Xe.b;
        return t !== Me ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`
    }
    offsetHSL(t, e, n) {
        return this.getHSL(Zn),
        this.setHSL(Zn.h + t, Zn.s + e, Zn.l + n)
    }
    add(t) {
        return this.r += t.r,
        this.g += t.g,
        this.b += t.b,
        this
    }
    addColors(t, e) {
        return this.r = t.r + e.r,
        this.g = t.g + e.g,
        this.b = t.b + e.b,
        this
    }
    addScalar(t) {
        return this.r += t,
        this.g += t,
        this.b += t,
        this
    }
    sub(t) {
        return this.r = Math.max(0, this.r - t.r),
        this.g = Math.max(0, this.g - t.g),
        this.b = Math.max(0, this.b - t.b),
        this
    }
    multiply(t) {
        return this.r *= t.r,
        this.g *= t.g,
        this.b *= t.b,
        this
    }
    multiplyScalar(t) {
        return this.r *= t,
        this.g *= t,
        this.b *= t,
        this
    }
    lerp(t, e) {
        return this.r += (t.r - this.r) * e,
        this.g += (t.g - this.g) * e,
        this.b += (t.b - this.b) * e,
        this
    }
    lerpColors(t, e, n) {
        return this.r = t.r + (e.r - t.r) * n,
        this.g = t.g + (e.g - t.g) * n,
        this.b = t.b + (e.b - t.b) * n,
        this
    }
    lerpHSL(t, e) {
        this.getHSL(Zn),
        t.getHSL(tr);
        const n = to(Zn.h, tr.h, e)
          , s = to(Zn.s, tr.s, e)
          , r = to(Zn.l, tr.l, e);
        return this.setHSL(n, s, r),
        this
    }
    setFromVector3(t) {
        return this.r = t.x,
        this.g = t.y,
        this.b = t.z,
        this
    }
    applyMatrix3(t) {
        const e = this.r
          , n = this.g
          , s = this.b
          , r = t.elements;
        return this.r = r[0] * e + r[3] * n + r[6] * s,
        this.g = r[1] * e + r[4] * n + r[7] * s,
        this.b = r[2] * e + r[5] * n + r[8] * s,
        this
    }
    equals(t) {
        return t.r === this.r && t.g === this.g && t.b === this.b
    }
    fromArray(t, e=0) {
        return this.r = t[e],
        this.g = t[e + 1],
        this.b = t[e + 2],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this.r,
        t[e + 1] = this.g,
        t[e + 2] = this.b,
        t
    }
    fromBufferAttribute(t, e) {
        return this.r = t.getX(e),
        this.g = t.getY(e),
        this.b = t.getZ(e),
        this
    }
    toJSON() {
        return this.getHex()
    }
    *[Symbol.iterator]() {
        yield this.r,
        yield this.g,
        yield this.b
    }
}
const Xe = new Bt;
Bt.NAMES = Dc;
let Hu = 0;
class ci extends ds {
    constructor() {
        super(),
        this.isMaterial = !0,
        Object.defineProperty(this, "id", {
            value: Hu++
        }),
        this.uuid = oi(),
        this.name = "",
        this.type = "Material",
        this.blending = rs,
        this.side = ai,
        this.vertexColors = !1,
        this.opacity = 1,
        this.transparent = !1,
        this.alphaHash = !1,
        this.blendSrc = Io,
        this.blendDst = Uo,
        this.blendEquation = yi,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.blendColor = new Bt(0,0,0),
        this.blendAlpha = 0,
        this.depthFunc = Ar,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.stencilWriteMask = 255,
        this.stencilFunc = Ya,
        this.stencilRef = 0,
        this.stencilFuncMask = 255,
        this.stencilFail = Di,
        this.stencilZFail = Di,
        this.stencilZPass = Di,
        this.stencilWrite = !1,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaToCoverage = !1,
        this.premultipliedAlpha = !1,
        this.forceSinglePass = !1,
        this.visible = !0,
        this.toneMapped = !0,
        this.userData = {},
        this.version = 0,
        this._alphaTest = 0
    }
    get alphaTest() {
        return this._alphaTest
    }
    set alphaTest(t) {
        this._alphaTest > 0 != t > 0 && this.version++,
        this._alphaTest = t
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }
    setValues(t) {
        if (t !== void 0)
            for (const e in t) {
                const n = t[e];
                if (n === void 0) {
                    console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
                    continue
                }
                const s = this[e];
                if (s === void 0) {
                    console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
                    continue
                }
                s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[e] = n
            }
    }
    toJSON(t) {
        const e = t === void 0 || typeof t == "string";
        e && (t = {
            textures: {},
            images: {}
        });
        const n = {
            metadata: {
                version: 4.6,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        n.uuid = this.uuid,
        n.type = this.type,
        this.name !== "" && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        this.roughness !== void 0 && (n.roughness = this.roughness),
        this.metalness !== void 0 && (n.metalness = this.metalness),
        this.sheen !== void 0 && (n.sheen = this.sheen),
        this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness),
        this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity),
        this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity),
        this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (n.shininess = this.shininess),
        this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
        this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
        this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid,
        n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
        this.iridescence !== void 0 && (n.iridescence = this.iridescence),
        this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR),
        this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
        this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid),
        this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
        this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
        this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid),
        this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
        this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid,
        n.lightMapIntensity = this.lightMapIntensity),
        this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid,
        n.aoMapIntensity = this.aoMapIntensity),
        this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid,
        n.bumpScale = this.bumpScale),
        this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid,
        n.normalMapType = this.normalMapType,
        n.normalScale = this.normalScale.toArray()),
        this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid,
        n.displacementScale = this.displacementScale,
        n.displacementBias = this.displacementBias),
        this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
        this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
        this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
        this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
        this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
        this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
        this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid,
        this.combine !== void 0 && (n.combine = this.combine)),
        this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio),
        this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
        this.transmission !== void 0 && (n.transmission = this.transmission),
        this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
        this.thickness !== void 0 && (n.thickness = this.thickness),
        this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
        this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (n.size = this.size),
        this.shadowSide !== null && (n.shadowSide = this.shadowSide),
        this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
        this.blending !== rs && (n.blending = this.blending),
        this.side !== ai && (n.side = this.side),
        this.vertexColors === !0 && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        this.transparent === !0 && (n.transparent = !0),
        this.blendSrc !== Io && (n.blendSrc = this.blendSrc),
        this.blendDst !== Uo && (n.blendDst = this.blendDst),
        this.blendEquation !== yi && (n.blendEquation = this.blendEquation),
        this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
        this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
        this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha),
        this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()),
        this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
        this.depthFunc !== Ar && (n.depthFunc = this.depthFunc),
        this.depthTest === !1 && (n.depthTest = this.depthTest),
        this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
        this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
        this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask),
        this.stencilFunc !== Ya && (n.stencilFunc = this.stencilFunc),
        this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
        this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask),
        this.stencilFail !== Di && (n.stencilFail = this.stencilFail),
        this.stencilZFail !== Di && (n.stencilZFail = this.stencilZFail),
        this.stencilZPass !== Di && (n.stencilZPass = this.stencilZPass),
        this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
        this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation),
        this.polygonOffset === !0 && (n.polygonOffset = !0),
        this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
        this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth),
        this.dashSize !== void 0 && (n.dashSize = this.dashSize),
        this.gapSize !== void 0 && (n.gapSize = this.gapSize),
        this.scale !== void 0 && (n.scale = this.scale),
        this.dithering === !0 && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        this.alphaHash === !0 && (n.alphaHash = !0),
        this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
        this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
        this.forceSinglePass === !0 && (n.forceSinglePass = !0),
        this.wireframe === !0 && (n.wireframe = !0),
        this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading === !0 && (n.flatShading = !0),
        this.visible === !1 && (n.visible = !1),
        this.toneMapped === !1 && (n.toneMapped = !1),
        this.fog === !1 && (n.fog = !1),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData);
        function s(r) {
            const o = [];
            for (const a in r) {
                const l = r[a];
                delete l.metadata,
                o.push(l)
            }
            return o
        }
        if (e) {
            const r = s(t.textures)
              , o = s(t.images);
            r.length > 0 && (n.textures = r),
            o.length > 0 && (n.images = o)
        }
        return n
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        this.name = t.name,
        this.blending = t.blending,
        this.side = t.side,
        this.vertexColors = t.vertexColors,
        this.opacity = t.opacity,
        this.transparent = t.transparent,
        this.blendSrc = t.blendSrc,
        this.blendDst = t.blendDst,
        this.blendEquation = t.blendEquation,
        this.blendSrcAlpha = t.blendSrcAlpha,
        this.blendDstAlpha = t.blendDstAlpha,
        this.blendEquationAlpha = t.blendEquationAlpha,
        this.blendColor.copy(t.blendColor),
        this.blendAlpha = t.blendAlpha,
        this.depthFunc = t.depthFunc,
        this.depthTest = t.depthTest,
        this.depthWrite = t.depthWrite,
        this.stencilWriteMask = t.stencilWriteMask,
        this.stencilFunc = t.stencilFunc,
        this.stencilRef = t.stencilRef,
        this.stencilFuncMask = t.stencilFuncMask,
        this.stencilFail = t.stencilFail,
        this.stencilZFail = t.stencilZFail,
        this.stencilZPass = t.stencilZPass,
        this.stencilWrite = t.stencilWrite;
        const e = t.clippingPlanes;
        let n = null;
        if (e !== null) {
            const s = e.length;
            n = new Array(s);
            for (let r = 0; r !== s; ++r)
                n[r] = e[r].clone()
        }
        return this.clippingPlanes = n,
        this.clipIntersection = t.clipIntersection,
        this.clipShadows = t.clipShadows,
        this.shadowSide = t.shadowSide,
        this.colorWrite = t.colorWrite,
        this.precision = t.precision,
        this.polygonOffset = t.polygonOffset,
        this.polygonOffsetFactor = t.polygonOffsetFactor,
        this.polygonOffsetUnits = t.polygonOffsetUnits,
        this.dithering = t.dithering,
        this.alphaTest = t.alphaTest,
        this.alphaHash = t.alphaHash,
        this.alphaToCoverage = t.alphaToCoverage,
        this.premultipliedAlpha = t.premultipliedAlpha,
        this.forceSinglePass = t.forceSinglePass,
        this.visible = t.visible,
        this.toneMapped = t.toneMapped,
        this.userData = JSON.parse(JSON.stringify(t.userData)),
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    set needsUpdate(t) {
        t === !0 && this.version++
    }
}
class Fs extends ci {
    constructor(t) {
        super(),
        this.isMeshBasicMaterial = !0,
        this.type = "MeshBasicMaterial",
        this.color = new Bt(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = Yo,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.fog = !0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.fog = t.fog,
        this
    }
}
const Ce = new I
  , er = new Kt;
class ze {
    constructor(t, e, n=!1) {
        if (Array.isArray(t))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.isBufferAttribute = !0,
        this.name = "",
        this.array = t,
        this.itemSize = e,
        this.count = t !== void 0 ? t.length / e : 0,
        this.normalized = n,
        this.usage = ko,
        this._updateRange = {
            offset: 0,
            count: -1
        },
        this.updateRanges = [],
        this.gpuType = ni,
        this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(t) {
        t === !0 && this.version++
    }
    get updateRange() {
        return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),
        this._updateRange
    }
    setUsage(t) {
        return this.usage = t,
        this
    }
    addUpdateRange(t, e) {
        this.updateRanges.push({
            start: t,
            count: e
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    copy(t) {
        return this.name = t.name,
        this.array = new t.array.constructor(t.array),
        this.itemSize = t.itemSize,
        this.count = t.count,
        this.normalized = t.normalized,
        this.usage = t.usage,
        this.gpuType = t.gpuType,
        this
    }
    copyAt(t, e, n) {
        t *= this.itemSize,
        n *= e.itemSize;
        for (let s = 0, r = this.itemSize; s < r; s++)
            this.array[t + s] = e.array[n + s];
        return this
    }
    copyArray(t) {
        return this.array.set(t),
        this
    }
    applyMatrix3(t) {
        if (this.itemSize === 2)
            for (let e = 0, n = this.count; e < n; e++)
                er.fromBufferAttribute(this, e),
                er.applyMatrix3(t),
                this.setXY(e, er.x, er.y);
        else if (this.itemSize === 3)
            for (let e = 0, n = this.count; e < n; e++)
                Ce.fromBufferAttribute(this, e),
                Ce.applyMatrix3(t),
                this.setXYZ(e, Ce.x, Ce.y, Ce.z);
        return this
    }
    applyMatrix4(t) {
        for (let e = 0, n = this.count; e < n; e++)
            Ce.fromBufferAttribute(this, e),
            Ce.applyMatrix4(t),
            this.setXYZ(e, Ce.x, Ce.y, Ce.z);
        return this
    }
    applyNormalMatrix(t) {
        for (let e = 0, n = this.count; e < n; e++)
            Ce.fromBufferAttribute(this, e),
            Ce.applyNormalMatrix(t),
            this.setXYZ(e, Ce.x, Ce.y, Ce.z);
        return this
    }
    transformDirection(t) {
        for (let e = 0, n = this.count; e < n; e++)
            Ce.fromBufferAttribute(this, e),
            Ce.transformDirection(t),
            this.setXYZ(e, Ce.x, Ce.y, Ce.z);
        return this
    }
    set(t, e=0) {
        return this.array.set(t, e),
        this
    }
    getComponent(t, e) {
        let n = this.array[t * this.itemSize + e];
        return this.normalized && (n = Wn(n, this.array)),
        n
    }
    setComponent(t, e, n) {
        return this.normalized && (n = le(n, this.array)),
        this.array[t * this.itemSize + e] = n,
        this
    }
    getX(t) {
        let e = this.array[t * this.itemSize];
        return this.normalized && (e = Wn(e, this.array)),
        e
    }
    setX(t, e) {
        return this.normalized && (e = le(e, this.array)),
        this.array[t * this.itemSize] = e,
        this
    }
    getY(t) {
        let e = this.array[t * this.itemSize + 1];
        return this.normalized && (e = Wn(e, this.array)),
        e
    }
    setY(t, e) {
        return this.normalized && (e = le(e, this.array)),
        this.array[t * this.itemSize + 1] = e,
        this
    }
    getZ(t) {
        let e = this.array[t * this.itemSize + 2];
        return this.normalized && (e = Wn(e, this.array)),
        e
    }
    setZ(t, e) {
        return this.normalized && (e = le(e, this.array)),
        this.array[t * this.itemSize + 2] = e,
        this
    }
    getW(t) {
        let e = this.array[t * this.itemSize + 3];
        return this.normalized && (e = Wn(e, this.array)),
        e
    }
    setW(t, e) {
        return this.normalized && (e = le(e, this.array)),
        this.array[t * this.itemSize + 3] = e,
        this
    }
    setXY(t, e, n) {
        return t *= this.itemSize,
        this.normalized && (e = le(e, this.array),
        n = le(n, this.array)),
        this.array[t + 0] = e,
        this.array[t + 1] = n,
        this
    }
    setXYZ(t, e, n, s) {
        return t *= this.itemSize,
        this.normalized && (e = le(e, this.array),
        n = le(n, this.array),
        s = le(s, this.array)),
        this.array[t + 0] = e,
        this.array[t + 1] = n,
        this.array[t + 2] = s,
        this
    }
    setXYZW(t, e, n, s, r) {
        return t *= this.itemSize,
        this.normalized && (e = le(e, this.array),
        n = le(n, this.array),
        s = le(s, this.array),
        r = le(r, this.array)),
        this.array[t + 0] = e,
        this.array[t + 1] = n,
        this.array[t + 2] = s,
        this.array[t + 3] = r,
        this
    }
    onUpload(t) {
        return this.onUploadCallback = t,
        this
    }
    clone() {
        return new this.constructor(this.array,this.itemSize).copy(this)
    }
    toJSON() {
        const t = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
        };
        return this.name !== "" && (t.name = this.name),
        this.usage !== ko && (t.usage = this.usage),
        t
    }
}
class Ic extends ze {
    constructor(t, e, n) {
        super(new Uint16Array(t), e, n)
    }
}
class Uc extends ze {
    constructor(t, e, n) {
        super(new Uint32Array(t), e, n)
    }
}
class sn extends ze {
    constructor(t, e, n) {
        super(new Float32Array(t), e, n)
    }
}
let Vu = 0;
const pn = new be
  , go = new De
  , Gi = new I
  , ln = new ps
  , ys = new ps
  , ke = new I;
class Qe extends ds {
    constructor() {
        super(),
        this.isBufferGeometry = !0,
        Object.defineProperty(this, "id", {
            value: Vu++
        }),
        this.uuid = oi(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.morphTargetsRelative = !1,
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(t) {
        return Array.isArray(t) ? this.index = new (Ac(t) ? Uc : Ic)(t,1) : this.index = t,
        this
    }
    getAttribute(t) {
        return this.attributes[t]
    }
    setAttribute(t, e) {
        return this.attributes[t] = e,
        this
    }
    deleteAttribute(t) {
        return delete this.attributes[t],
        this
    }
    hasAttribute(t) {
        return this.attributes[t] !== void 0
    }
    addGroup(t, e, n=0) {
        this.groups.push({
            start: t,
            count: e,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(t, e) {
        this.drawRange.start = t,
        this.drawRange.count = e
    }
    applyMatrix4(t) {
        const e = this.attributes.position;
        e !== void 0 && (e.applyMatrix4(t),
        e.needsUpdate = !0);
        const n = this.attributes.normal;
        if (n !== void 0) {
            const r = new Jt().getNormalMatrix(t);
            n.applyNormalMatrix(r),
            n.needsUpdate = !0
        }
        const s = this.attributes.tangent;
        return s !== void 0 && (s.transformDirection(t),
        s.needsUpdate = !0),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
    }
    applyQuaternion(t) {
        return pn.makeRotationFromQuaternion(t),
        this.applyMatrix4(pn),
        this
    }
    rotateX(t) {
        return pn.makeRotationX(t),
        this.applyMatrix4(pn),
        this
    }
    rotateY(t) {
        return pn.makeRotationY(t),
        this.applyMatrix4(pn),
        this
    }
    rotateZ(t) {
        return pn.makeRotationZ(t),
        this.applyMatrix4(pn),
        this
    }
    translate(t, e, n) {
        return pn.makeTranslation(t, e, n),
        this.applyMatrix4(pn),
        this
    }
    scale(t, e, n) {
        return pn.makeScale(t, e, n),
        this.applyMatrix4(pn),
        this
    }
    lookAt(t) {
        return go.lookAt(t),
        go.updateMatrix(),
        this.applyMatrix4(go.matrix),
        this
    }
    center() {
        return this.computeBoundingBox(),
        this.boundingBox.getCenter(Gi).negate(),
        this.translate(Gi.x, Gi.y, Gi.z),
        this
    }
    setFromPoints(t) {
        const e = [];
        for (let n = 0, s = t.length; n < s; n++) {
            const r = t[n];
            e.push(r.x, r.y, r.z || 0)
        }
        return this.setAttribute("position", new sn(e,3)),
        this
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new ps);
        const t = this.attributes.position
          , e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
            this.boundingBox.set(new I(-1 / 0,-1 / 0,-1 / 0), new I(1 / 0,1 / 0,1 / 0));
            return
        }
        if (t !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(t),
            e)
                for (let n = 0, s = e.length; n < s; n++) {
                    const r = e[n];
                    ln.setFromBufferAttribute(r),
                    this.morphTargetsRelative ? (ke.addVectors(this.boundingBox.min, ln.min),
                    this.boundingBox.expandByPoint(ke),
                    ke.addVectors(this.boundingBox.max, ln.max),
                    this.boundingBox.expandByPoint(ke)) : (this.boundingBox.expandByPoint(ln.min),
                    this.boundingBox.expandByPoint(ln.max))
                }
        } else
            this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new zs);
        const t = this.attributes.position
          , e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
            this.boundingSphere.set(new I, 1 / 0);
            return
        }
        if (t) {
            const n = this.boundingSphere.center;
            if (ln.setFromBufferAttribute(t),
            e)
                for (let r = 0, o = e.length; r < o; r++) {
                    const a = e[r];
                    ys.setFromBufferAttribute(a),
                    this.morphTargetsRelative ? (ke.addVectors(ln.min, ys.min),
                    ln.expandByPoint(ke),
                    ke.addVectors(ln.max, ys.max),
                    ln.expandByPoint(ke)) : (ln.expandByPoint(ys.min),
                    ln.expandByPoint(ys.max))
                }
            ln.getCenter(n);
            let s = 0;
            for (let r = 0, o = t.count; r < o; r++)
                ke.fromBufferAttribute(t, r),
                s = Math.max(s, n.distanceToSquared(ke));
            if (e)
                for (let r = 0, o = e.length; r < o; r++) {
                    const a = e[r]
                      , l = this.morphTargetsRelative;
                    for (let c = 0, h = a.count; c < h; c++)
                        ke.fromBufferAttribute(a, c),
                        l && (Gi.fromBufferAttribute(t, c),
                        ke.add(Gi)),
                        s = Math.max(s, n.distanceToSquared(ke))
                }
            this.boundingSphere.radius = Math.sqrt(s),
            isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }
    computeTangents() {
        const t = this.index
          , e = this.attributes;
        if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
            console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return
        }
        const n = t.array
          , s = e.position.array
          , r = e.normal.array
          , o = e.uv.array
          , a = s.length / 3;
        this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new ze(new Float32Array(4 * a),4));
        const l = this.getAttribute("tangent").array
          , c = []
          , h = [];
        for (let T = 0; T < a; T++)
            c[T] = new I,
            h[T] = new I;
        const u = new I
          , f = new I
          , p = new I
          , g = new Kt
          , _ = new Kt
          , m = new Kt
          , d = new I
          , x = new I;
        function v(T, U, k) {
            u.fromArray(s, T * 3),
            f.fromArray(s, U * 3),
            p.fromArray(s, k * 3),
            g.fromArray(o, T * 2),
            _.fromArray(o, U * 2),
            m.fromArray(o, k * 2),
            f.sub(u),
            p.sub(u),
            _.sub(g),
            m.sub(g);
            const G = 1 / (_.x * m.y - m.x * _.y);
            isFinite(G) && (d.copy(f).multiplyScalar(m.y).addScaledVector(p, -_.y).multiplyScalar(G),
            x.copy(p).multiplyScalar(_.x).addScaledVector(f, -m.x).multiplyScalar(G),
            c[T].add(d),
            c[U].add(d),
            c[k].add(d),
            h[T].add(x),
            h[U].add(x),
            h[k].add(x))
        }
        let S = this.groups;
        S.length === 0 && (S = [{
            start: 0,
            count: n.length
        }]);
        for (let T = 0, U = S.length; T < U; ++T) {
            const k = S[T]
              , G = k.start
              , P = k.count;
            for (let O = G, N = G + P; O < N; O += 3)
                v(n[O + 0], n[O + 1], n[O + 2])
        }
        const L = new I
          , A = new I
          , R = new I
          , K = new I;
        function y(T) {
            R.fromArray(r, T * 3),
            K.copy(R);
            const U = c[T];
            L.copy(U),
            L.sub(R.multiplyScalar(R.dot(U))).normalize(),
            A.crossVectors(K, U);
            const G = A.dot(h[T]) < 0 ? -1 : 1;
            l[T * 4] = L.x,
            l[T * 4 + 1] = L.y,
            l[T * 4 + 2] = L.z,
            l[T * 4 + 3] = G
        }
        for (let T = 0, U = S.length; T < U; ++T) {
            const k = S[T]
              , G = k.start
              , P = k.count;
            for (let O = G, N = G + P; O < N; O += 3)
                y(n[O + 0]),
                y(n[O + 1]),
                y(n[O + 2])
        }
    }
    computeVertexNormals() {
        const t = this.index
          , e = this.getAttribute("position");
        if (e !== void 0) {
            let n = this.getAttribute("normal");
            if (n === void 0)
                n = new ze(new Float32Array(e.count * 3),3),
                this.setAttribute("normal", n);
            else
                for (let f = 0, p = n.count; f < p; f++)
                    n.setXYZ(f, 0, 0, 0);
            const s = new I
              , r = new I
              , o = new I
              , a = new I
              , l = new I
              , c = new I
              , h = new I
              , u = new I;
            if (t)
                for (let f = 0, p = t.count; f < p; f += 3) {
                    const g = t.getX(f + 0)
                      , _ = t.getX(f + 1)
                      , m = t.getX(f + 2);
                    s.fromBufferAttribute(e, g),
                    r.fromBufferAttribute(e, _),
                    o.fromBufferAttribute(e, m),
                    h.subVectors(o, r),
                    u.subVectors(s, r),
                    h.cross(u),
                    a.fromBufferAttribute(n, g),
                    l.fromBufferAttribute(n, _),
                    c.fromBufferAttribute(n, m),
                    a.add(h),
                    l.add(h),
                    c.add(h),
                    n.setXYZ(g, a.x, a.y, a.z),
                    n.setXYZ(_, l.x, l.y, l.z),
                    n.setXYZ(m, c.x, c.y, c.z)
                }
            else
                for (let f = 0, p = e.count; f < p; f += 3)
                    s.fromBufferAttribute(e, f + 0),
                    r.fromBufferAttribute(e, f + 1),
                    o.fromBufferAttribute(e, f + 2),
                    h.subVectors(o, r),
                    u.subVectors(s, r),
                    h.cross(u),
                    n.setXYZ(f + 0, h.x, h.y, h.z),
                    n.setXYZ(f + 1, h.x, h.y, h.z),
                    n.setXYZ(f + 2, h.x, h.y, h.z);
            this.normalizeNormals(),
            n.needsUpdate = !0
        }
    }
    normalizeNormals() {
        const t = this.attributes.normal;
        for (let e = 0, n = t.count; e < n; e++)
            ke.fromBufferAttribute(t, e),
            ke.normalize(),
            t.setXYZ(e, ke.x, ke.y, ke.z)
    }
    toNonIndexed() {
        function t(a, l) {
            const c = a.array
              , h = a.itemSize
              , u = a.normalized
              , f = new c.constructor(l.length * h);
            let p = 0
              , g = 0;
            for (let _ = 0, m = l.length; _ < m; _++) {
                a.isInterleavedBufferAttribute ? p = l[_] * a.data.stride + a.offset : p = l[_] * h;
                for (let d = 0; d < h; d++)
                    f[g++] = c[p++]
            }
            return new ze(f,h,u)
        }
        if (this.index === null)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
            this;
        const e = new Qe
          , n = this.index.array
          , s = this.attributes;
        for (const a in s) {
            const l = s[a]
              , c = t(l, n);
            e.setAttribute(a, c)
        }
        const r = this.morphAttributes;
        for (const a in r) {
            const l = []
              , c = r[a];
            for (let h = 0, u = c.length; h < u; h++) {
                const f = c[h]
                  , p = t(f, n);
                l.push(p)
            }
            e.morphAttributes[a] = l
        }
        e.morphTargetsRelative = this.morphTargetsRelative;
        const o = this.groups;
        for (let a = 0, l = o.length; a < l; a++) {
            const c = o[a];
            e.addGroup(c.start, c.count, c.materialIndex)
        }
        return e
    }
    toJSON() {
        const t = {
            metadata: {
                version: 4.6,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (t.uuid = this.uuid,
        t.type = this.type,
        this.name !== "" && (t.name = this.name),
        Object.keys(this.userData).length > 0 && (t.userData = this.userData),
        this.parameters !== void 0) {
            const l = this.parameters;
            for (const c in l)
                l[c] !== void 0 && (t[c] = l[c]);
            return t
        }
        t.data = {
            attributes: {}
        };
        const e = this.index;
        e !== null && (t.data.index = {
            type: e.array.constructor.name,
            array: Array.prototype.slice.call(e.array)
        });
        const n = this.attributes;
        for (const l in n) {
            const c = n[l];
            t.data.attributes[l] = c.toJSON(t.data)
        }
        const s = {};
        let r = !1;
        for (const l in this.morphAttributes) {
            const c = this.morphAttributes[l]
              , h = [];
            for (let u = 0, f = c.length; u < f; u++) {
                const p = c[u];
                h.push(p.toJSON(t.data))
            }
            h.length > 0 && (s[l] = h,
            r = !0)
        }
        r && (t.data.morphAttributes = s,
        t.data.morphTargetsRelative = this.morphTargetsRelative);
        const o = this.groups;
        o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
        const a = this.boundingSphere;
        return a !== null && (t.data.boundingSphere = {
            center: a.center.toArray(),
            radius: a.radius
        }),
        t
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null;
        const e = {};
        this.name = t.name;
        const n = t.index;
        n !== null && this.setIndex(n.clone(e));
        const s = t.attributes;
        for (const c in s) {
            const h = s[c];
            this.setAttribute(c, h.clone(e))
        }
        const r = t.morphAttributes;
        for (const c in r) {
            const h = []
              , u = r[c];
            for (let f = 0, p = u.length; f < p; f++)
                h.push(u[f].clone(e));
            this.morphAttributes[c] = h
        }
        this.morphTargetsRelative = t.morphTargetsRelative;
        const o = t.groups;
        for (let c = 0, h = o.length; c < h; c++) {
            const u = o[c];
            this.addGroup(u.start, u.count, u.materialIndex)
        }
        const a = t.boundingBox;
        a !== null && (this.boundingBox = a.clone());
        const l = t.boundingSphere;
        return l !== null && (this.boundingSphere = l.clone()),
        this.drawRange.start = t.drawRange.start,
        this.drawRange.count = t.drawRange.count,
        this.userData = t.userData,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
const cl = new be
  , gi = new Fr
  , nr = new zs
  , hl = new I
  , Hi = new I
  , Vi = new I
  , Wi = new I
  , _o = new I
  , ir = new I
  , sr = new Kt
  , rr = new Kt
  , or = new Kt
  , ul = new I
  , fl = new I
  , dl = new I
  , ar = new I
  , lr = new I;
class Pe extends De {
    constructor(t=new Qe, e=new Fs) {
        super(),
        this.isMesh = !0,
        this.type = "Mesh",
        this.geometry = t,
        this.material = e,
        this.updateMorphTargets()
    }
    copy(t, e) {
        return super.copy(t, e),
        t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
        t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
        this.material = Array.isArray(t.material) ? t.material.slice() : t.material,
        this.geometry = t.geometry,
        this
    }
    updateMorphTargets() {
        const e = this.geometry.morphAttributes
          , n = Object.keys(e);
        if (n.length > 0) {
            const s = e[n[0]];
            if (s !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let r = 0, o = s.length; r < o; r++) {
                    const a = s[r].name || String(r);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[a] = r
                }
            }
        }
    }
    getVertexPosition(t, e) {
        const n = this.geometry
          , s = n.attributes.position
          , r = n.morphAttributes.position
          , o = n.morphTargetsRelative;
        e.fromBufferAttribute(s, t);
        const a = this.morphTargetInfluences;
        if (r && a) {
            ir.set(0, 0, 0);
            for (let l = 0, c = r.length; l < c; l++) {
                const h = a[l]
                  , u = r[l];
                h !== 0 && (_o.fromBufferAttribute(u, t),
                o ? ir.addScaledVector(_o, h) : ir.addScaledVector(_o.sub(e), h))
            }
            e.add(ir)
        }
        return e
    }
    raycast(t, e) {
        const n = this.geometry
          , s = this.material
          , r = this.matrixWorld;
        s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(),
        nr.copy(n.boundingSphere),
        nr.applyMatrix4(r),
        gi.copy(t.ray).recast(t.near),
        !(nr.containsPoint(gi.origin) === !1 && (gi.intersectSphere(nr, hl) === null || gi.origin.distanceToSquared(hl) > (t.far - t.near) ** 2)) && (cl.copy(r).invert(),
        gi.copy(t.ray).applyMatrix4(cl),
        !(n.boundingBox !== null && gi.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, gi)))
    }
    _computeIntersections(t, e, n) {
        let s;
        const r = this.geometry
          , o = this.material
          , a = r.index
          , l = r.attributes.position
          , c = r.attributes.uv
          , h = r.attributes.uv1
          , u = r.attributes.normal
          , f = r.groups
          , p = r.drawRange;
        if (a !== null)
            if (Array.isArray(o))
                for (let g = 0, _ = f.length; g < _; g++) {
                    const m = f[g]
                      , d = o[m.materialIndex]
                      , x = Math.max(m.start, p.start)
                      , v = Math.min(a.count, Math.min(m.start + m.count, p.start + p.count));
                    for (let S = x, L = v; S < L; S += 3) {
                        const A = a.getX(S)
                          , R = a.getX(S + 1)
                          , K = a.getX(S + 2);
                        s = cr(this, d, t, n, c, h, u, A, R, K),
                        s && (s.faceIndex = Math.floor(S / 3),
                        s.face.materialIndex = m.materialIndex,
                        e.push(s))
                    }
                }
            else {
                const g = Math.max(0, p.start)
                  , _ = Math.min(a.count, p.start + p.count);
                for (let m = g, d = _; m < d; m += 3) {
                    const x = a.getX(m)
                      , v = a.getX(m + 1)
                      , S = a.getX(m + 2);
                    s = cr(this, o, t, n, c, h, u, x, v, S),
                    s && (s.faceIndex = Math.floor(m / 3),
                    e.push(s))
                }
            }
        else if (l !== void 0)
            if (Array.isArray(o))
                for (let g = 0, _ = f.length; g < _; g++) {
                    const m = f[g]
                      , d = o[m.materialIndex]
                      , x = Math.max(m.start, p.start)
                      , v = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count));
                    for (let S = x, L = v; S < L; S += 3) {
                        const A = S
                          , R = S + 1
                          , K = S + 2;
                        s = cr(this, d, t, n, c, h, u, A, R, K),
                        s && (s.faceIndex = Math.floor(S / 3),
                        s.face.materialIndex = m.materialIndex,
                        e.push(s))
                    }
                }
            else {
                const g = Math.max(0, p.start)
                  , _ = Math.min(l.count, p.start + p.count);
                for (let m = g, d = _; m < d; m += 3) {
                    const x = m
                      , v = m + 1
                      , S = m + 2;
                    s = cr(this, o, t, n, c, h, u, x, v, S),
                    s && (s.faceIndex = Math.floor(m / 3),
                    e.push(s))
                }
            }
    }
}
function Wu(i, t, e, n, s, r, o, a) {
    let l;
    if (t.side === Je ? l = n.intersectTriangle(o, r, s, !0, a) : l = n.intersectTriangle(s, r, o, t.side === ai, a),
    l === null)
        return null;
    lr.copy(a),
    lr.applyMatrix4(i.matrixWorld);
    const c = e.ray.origin.distanceTo(lr);
    return c < e.near || c > e.far ? null : {
        distance: c,
        point: lr.clone(),
        object: i
    }
}
function cr(i, t, e, n, s, r, o, a, l, c) {
    i.getVertexPosition(a, Hi),
    i.getVertexPosition(l, Vi),
    i.getVertexPosition(c, Wi);
    const h = Wu(i, t, e, n, Hi, Vi, Wi, ar);
    if (h) {
        s && (sr.fromBufferAttribute(s, a),
        rr.fromBufferAttribute(s, l),
        or.fromBufferAttribute(s, c),
        h.uv = un.getInterpolation(ar, Hi, Vi, Wi, sr, rr, or, new Kt)),
        r && (sr.fromBufferAttribute(r, a),
        rr.fromBufferAttribute(r, l),
        or.fromBufferAttribute(r, c),
        h.uv1 = un.getInterpolation(ar, Hi, Vi, Wi, sr, rr, or, new Kt),
        h.uv2 = h.uv1),
        o && (ul.fromBufferAttribute(o, a),
        fl.fromBufferAttribute(o, l),
        dl.fromBufferAttribute(o, c),
        h.normal = un.getInterpolation(ar, Hi, Vi, Wi, ul, fl, dl, new I),
        h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
        const u = {
            a,
            b: l,
            c,
            normal: new I,
            materialIndex: 0
        };
        un.getNormal(Hi, Vi, Wi, u.normal),
        h.face = u
    }
    return h
}
class Rn extends Qe {
    constructor(t=1, e=1, n=1, s=1, r=1, o=1) {
        super(),
        this.type = "BoxGeometry",
        this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: s,
            heightSegments: r,
            depthSegments: o
        };
        const a = this;
        s = Math.floor(s),
        r = Math.floor(r),
        o = Math.floor(o);
        const l = []
          , c = []
          , h = []
          , u = [];
        let f = 0
          , p = 0;
        g("z", "y", "x", -1, -1, n, e, t, o, r, 0),
        g("z", "y", "x", 1, -1, n, e, -t, o, r, 1),
        g("x", "z", "y", 1, 1, t, n, e, s, o, 2),
        g("x", "z", "y", 1, -1, t, n, -e, s, o, 3),
        g("x", "y", "z", 1, -1, t, e, n, s, r, 4),
        g("x", "y", "z", -1, -1, t, e, -n, s, r, 5),
        this.setIndex(l),
        this.setAttribute("position", new sn(c,3)),
        this.setAttribute("normal", new sn(h,3)),
        this.setAttribute("uv", new sn(u,2));
        function g(_, m, d, x, v, S, L, A, R, K, y) {
            const T = S / R
              , U = L / K
              , k = S / 2
              , G = L / 2
              , P = A / 2
              , O = R + 1
              , N = K + 1;
            let B = 0
              , z = 0;
            const Y = new I;
            for (let $ = 0; $ < N; $++) {
                const Q = $ * U - G;
                for (let et = 0; et < O; et++) {
                    const H = et * T - k;
                    Y[_] = H * x,
                    Y[m] = Q * v,
                    Y[d] = P,
                    c.push(Y.x, Y.y, Y.z),
                    Y[_] = 0,
                    Y[m] = 0,
                    Y[d] = A > 0 ? 1 : -1,
                    h.push(Y.x, Y.y, Y.z),
                    u.push(et / R),
                    u.push(1 - $ / K),
                    B += 1
                }
            }
            for (let $ = 0; $ < K; $++)
                for (let Q = 0; Q < R; Q++) {
                    const et = f + Q + O * $
                      , H = f + Q + O * ($ + 1)
                      , J = f + (Q + 1) + O * ($ + 1)
                      , lt = f + (Q + 1) + O * $;
                    l.push(et, H, lt),
                    l.push(H, J, lt),
                    z += 6
                }
            a.addGroup(p, z, y),
            p += z,
            f += B
        }
    }
    copy(t) {
        return super.copy(t),
        this.parameters = Object.assign({}, t.parameters),
        this
    }
    static fromJSON(t) {
        return new Rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)
    }
}
function fs(i) {
    const t = {};
    for (const e in i) {
        t[e] = {};
        for (const n in i[e]) {
            const s = i[e][n];
            s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),
            t[e][n] = null) : t[e][n] = s.clone() : Array.isArray(s) ? t[e][n] = s.slice() : t[e][n] = s
        }
    }
    return t
}
function $e(i) {
    const t = {};
    for (let e = 0; e < i.length; e++) {
        const n = fs(i[e]);
        for (const s in n)
            t[s] = n[s]
    }
    return t
}
function Xu(i) {
    const t = [];
    for (let e = 0; e < i.length; e++)
        t.push(i[e].clone());
    return t
}
function Oc(i) {
    return i.getRenderTarget() === null ? i.outputColorSpace : ae.workingColorSpace
}
const qu = {
    clone: fs,
    merge: $e
};
var Ku = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`
  , Yu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Cn extends ci {
    constructor(t) {
        super(),
        this.isShaderMaterial = !0,
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.uniformsGroups = [],
        this.vertexShader = Ku,
        this.fragmentShader = Yu,
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.forceSinglePass = !0,
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1,
            clipCullDistance: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv1: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        this.glslVersion = null,
        t !== void 0 && this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.fragmentShader = t.fragmentShader,
        this.vertexShader = t.vertexShader,
        this.uniforms = fs(t.uniforms),
        this.uniformsGroups = Xu(t.uniformsGroups),
        this.defines = Object.assign({}, t.defines),
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.fog = t.fog,
        this.lights = t.lights,
        this.clipping = t.clipping,
        this.extensions = Object.assign({}, t.extensions),
        this.glslVersion = t.glslVersion,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        e.glslVersion = this.glslVersion,
        e.uniforms = {};
        for (const s in this.uniforms) {
            const o = this.uniforms[s].value;
            o && o.isTexture ? e.uniforms[s] = {
                type: "t",
                value: o.toJSON(t).uuid
            } : o && o.isColor ? e.uniforms[s] = {
                type: "c",
                value: o.getHex()
            } : o && o.isVector2 ? e.uniforms[s] = {
                type: "v2",
                value: o.toArray()
            } : o && o.isVector3 ? e.uniforms[s] = {
                type: "v3",
                value: o.toArray()
            } : o && o.isVector4 ? e.uniforms[s] = {
                type: "v4",
                value: o.toArray()
            } : o && o.isMatrix3 ? e.uniforms[s] = {
                type: "m3",
                value: o.toArray()
            } : o && o.isMatrix4 ? e.uniforms[s] = {
                type: "m4",
                value: o.toArray()
            } : e.uniforms[s] = {
                value: o
            }
        }
        Object.keys(this.defines).length > 0 && (e.defines = this.defines),
        e.vertexShader = this.vertexShader,
        e.fragmentShader = this.fragmentShader,
        e.lights = this.lights,
        e.clipping = this.clipping;
        const n = {};
        for (const s in this.extensions)
            this.extensions[s] === !0 && (n[s] = !0);
        return Object.keys(n).length > 0 && (e.extensions = n),
        e
    }
}
class Nc extends De {
    constructor() {
        super(),
        this.isCamera = !0,
        this.type = "Camera",
        this.matrixWorldInverse = new be,
        this.projectionMatrix = new be,
        this.projectionMatrixInverse = new be,
        this.coordinateSystem = Xn
    }
    copy(t, e) {
        return super.copy(t, e),
        this.matrixWorldInverse.copy(t.matrixWorldInverse),
        this.projectionMatrix.copy(t.projectionMatrix),
        this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
        this.coordinateSystem = t.coordinateSystem,
        this
    }
    getWorldDirection(t) {
        return super.getWorldDirection(t).negate()
    }
    updateMatrixWorld(t) {
        super.updateMatrixWorld(t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(t, e) {
        super.updateWorldMatrix(t, e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class fn extends Nc {
    constructor(t=50, e=1, n=.1, s=2e3) {
        super(),
        this.isPerspectiveCamera = !0,
        this.type = "PerspectiveCamera",
        this.fov = t,
        this.zoom = 1,
        this.near = n,
        this.far = s,
        this.focus = 10,
        this.aspect = e,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    copy(t, e) {
        return super.copy(t, e),
        this.fov = t.fov,
        this.zoom = t.zoom,
        this.near = t.near,
        this.far = t.far,
        this.focus = t.focus,
        this.aspect = t.aspect,
        this.view = t.view === null ? null : Object.assign({}, t.view),
        this.filmGauge = t.filmGauge,
        this.filmOffset = t.filmOffset,
        this
    }
    setFocalLength(t) {
        const e = .5 * this.getFilmHeight() / t;
        this.fov = zo * 2 * Math.atan(e),
        this.updateProjectionMatrix()
    }
    getFocalLength() {
        const t = Math.tan(Tr * .5 * this.fov);
        return .5 * this.getFilmHeight() / t
    }
    getEffectiveFOV() {
        return zo * 2 * Math.atan(Math.tan(Tr * .5 * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    setViewOffset(t, e, n, s, r, o) {
        this.aspect = t / e,
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = t,
        this.view.fullHeight = e,
        this.view.offsetX = n,
        this.view.offsetY = s,
        this.view.width = r,
        this.view.height = o,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const t = this.near;
        let e = t * Math.tan(Tr * .5 * this.fov) / this.zoom
          , n = 2 * e
          , s = this.aspect * n
          , r = -.5 * s;
        const o = this.view;
        if (this.view !== null && this.view.enabled) {
            const l = o.fullWidth
              , c = o.fullHeight;
            r += o.offsetX * s / l,
            e -= o.offsetY * n / c,
            s *= o.width / l,
            n *= o.height / c
        }
        const a = this.filmOffset;
        a !== 0 && (r += t * a / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(r, r + s, e, e - n, t, this.far, this.coordinateSystem),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.fov = this.fov,
        e.object.zoom = this.zoom,
        e.object.near = this.near,
        e.object.far = this.far,
        e.object.focus = this.focus,
        e.object.aspect = this.aspect,
        this.view !== null && (e.object.view = Object.assign({}, this.view)),
        e.object.filmGauge = this.filmGauge,
        e.object.filmOffset = this.filmOffset,
        e
    }
}
const Xi = -90
  , qi = 1;
class $u extends De {
    constructor(t, e, n) {
        super(),
        this.type = "CubeCamera",
        this.renderTarget = n,
        this.coordinateSystem = null,
        this.activeMipmapLevel = 0;
        const s = new fn(Xi,qi,t,e);
        s.layers = this.layers,
        this.add(s);
        const r = new fn(Xi,qi,t,e);
        r.layers = this.layers,
        this.add(r);
        const o = new fn(Xi,qi,t,e);
        o.layers = this.layers,
        this.add(o);
        const a = new fn(Xi,qi,t,e);
        a.layers = this.layers,
        this.add(a);
        const l = new fn(Xi,qi,t,e);
        l.layers = this.layers,
        this.add(l);
        const c = new fn(Xi,qi,t,e);
        c.layers = this.layers,
        this.add(c)
    }
    updateCoordinateSystem() {
        const t = this.coordinateSystem
          , e = this.children.concat()
          , [n,s,r,o,a,l] = e;
        for (const c of e)
            this.remove(c);
        if (t === Xn)
            n.up.set(0, 1, 0),
            n.lookAt(1, 0, 0),
            s.up.set(0, 1, 0),
            s.lookAt(-1, 0, 0),
            r.up.set(0, 0, -1),
            r.lookAt(0, 1, 0),
            o.up.set(0, 0, 1),
            o.lookAt(0, -1, 0),
            a.up.set(0, 1, 0),
            a.lookAt(0, 0, 1),
            l.up.set(0, 1, 0),
            l.lookAt(0, 0, -1);
        else if (t === Pr)
            n.up.set(0, -1, 0),
            n.lookAt(-1, 0, 0),
            s.up.set(0, -1, 0),
            s.lookAt(1, 0, 0),
            r.up.set(0, 0, 1),
            r.lookAt(0, 1, 0),
            o.up.set(0, 0, -1),
            o.lookAt(0, -1, 0),
            a.up.set(0, -1, 0),
            a.lookAt(0, 0, 1),
            l.up.set(0, -1, 0),
            l.lookAt(0, 0, -1);
        else
            throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
        for (const c of e)
            this.add(c),
            c.updateMatrixWorld()
    }
    update(t, e) {
        this.parent === null && this.updateMatrixWorld();
        const {renderTarget: n, activeMipmapLevel: s} = this;
        this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem,
        this.updateCoordinateSystem());
        const [r,o,a,l,c,h] = this.children
          , u = t.getRenderTarget()
          , f = t.getActiveCubeFace()
          , p = t.getActiveMipmapLevel()
          , g = t.xr.enabled;
        t.xr.enabled = !1;
        const _ = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1,
        t.setRenderTarget(n, 0, s),
        t.render(e, r),
        t.setRenderTarget(n, 1, s),
        t.render(e, o),
        t.setRenderTarget(n, 2, s),
        t.render(e, a),
        t.setRenderTarget(n, 3, s),
        t.render(e, l),
        t.setRenderTarget(n, 4, s),
        t.render(e, c),
        n.texture.generateMipmaps = _,
        t.setRenderTarget(n, 5, s),
        t.render(e, h),
        t.setRenderTarget(u, f, p),
        t.xr.enabled = g,
        n.texture.needsPMREMUpdate = !0
    }
}
class Fc extends nn {
    constructor(t, e, n, s, r, o, a, l, c, h) {
        t = t !== void 0 ? t : [],
        e = e !== void 0 ? e : cs,
        super(t, e, n, s, r, o, a, l, c, h),
        this.isCubeTexture = !0,
        this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(t) {
        this.image = t
    }
}
class ju extends Ai {
    constructor(t=1, e={}) {
        super(t, t, e),
        this.isWebGLCubeRenderTarget = !0;
        const n = {
            width: t,
            height: t,
            depth: 1
        }
          , s = [n, n, n, n, n, n];
        e.encoding !== void 0 && (Ds("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),
        e.colorSpace = e.encoding === Ti ? Me : vn),
        this.texture = new Fc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),
        this.texture.isRenderTargetTexture = !0,
        this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1,
        this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : _n
    }
    fromEquirectangularTexture(t, e) {
        this.texture.type = e.type,
        this.texture.colorSpace = e.colorSpace,
        this.texture.generateMipmaps = e.generateMipmaps,
        this.texture.minFilter = e.minFilter,
        this.texture.magFilter = e.magFilter;
        const n = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
            fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
        }
          , s = new Rn(5,5,5)
          , r = new Cn({
            name: "CubemapFromEquirect",
            uniforms: fs(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: Je,
            blending: ii
        });
        r.uniforms.tEquirect.value = e;
        const o = new Pe(s,r)
          , a = e.minFilter;
        return e.minFilter === Os && (e.minFilter = _n),
        new $u(1,10,this).update(t, o),
        e.minFilter = a,
        o.geometry.dispose(),
        o.material.dispose(),
        this
    }
    clear(t, e, n, s) {
        const r = t.getRenderTarget();
        for (let o = 0; o < 6; o++)
            t.setRenderTarget(this, o),
            t.clear(e, n, s);
        t.setRenderTarget(r)
    }
}
const vo = new I
  , Zu = new I
  , Ju = new Jt;
class xi {
    constructor(t=new I(1,0,0), e=0) {
        this.isPlane = !0,
        this.normal = t,
        this.constant = e
    }
    set(t, e) {
        return this.normal.copy(t),
        this.constant = e,
        this
    }
    setComponents(t, e, n, s) {
        return this.normal.set(t, e, n),
        this.constant = s,
        this
    }
    setFromNormalAndCoplanarPoint(t, e) {
        return this.normal.copy(t),
        this.constant = -e.dot(this.normal),
        this
    }
    setFromCoplanarPoints(t, e, n) {
        const s = vo.subVectors(n, e).cross(Zu.subVectors(t, e)).normalize();
        return this.setFromNormalAndCoplanarPoint(s, t),
        this
    }
    copy(t) {
        return this.normal.copy(t.normal),
        this.constant = t.constant,
        this
    }
    normalize() {
        const t = 1 / this.normal.length();
        return this.normal.multiplyScalar(t),
        this.constant *= t,
        this
    }
    negate() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    }
    distanceToPoint(t) {
        return this.normal.dot(t) + this.constant
    }
    distanceToSphere(t) {
        return this.distanceToPoint(t.center) - t.radius
    }
    projectPoint(t, e) {
        return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t))
    }
    intersectLine(t, e) {
        const n = t.delta(vo)
          , s = this.normal.dot(n);
        if (s === 0)
            return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
        const r = -(t.start.dot(this.normal) + this.constant) / s;
        return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r)
    }
    intersectsLine(t) {
        const e = this.distanceToPoint(t.start)
          , n = this.distanceToPoint(t.end);
        return e < 0 && n > 0 || n < 0 && e > 0
    }
    intersectsBox(t) {
        return t.intersectsPlane(this)
    }
    intersectsSphere(t) {
        return t.intersectsPlane(this)
    }
    coplanarPoint(t) {
        return t.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(t, e) {
        const n = e || Ju.getNormalMatrix(t)
          , s = this.coplanarPoint(vo).applyMatrix4(t)
          , r = this.normal.applyMatrix3(n).normalize();
        return this.constant = -s.dot(r),
        this
    }
    translate(t) {
        return this.constant -= t.dot(this.normal),
        this
    }
    equals(t) {
        return t.normal.equals(this.normal) && t.constant === this.constant
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const _i = new zs
  , hr = new I;
class Zo {
    constructor(t=new xi, e=new xi, n=new xi, s=new xi, r=new xi, o=new xi) {
        this.planes = [t, e, n, s, r, o]
    }
    set(t, e, n, s, r, o) {
        const a = this.planes;
        return a[0].copy(t),
        a[1].copy(e),
        a[2].copy(n),
        a[3].copy(s),
        a[4].copy(r),
        a[5].copy(o),
        this
    }
    copy(t) {
        const e = this.planes;
        for (let n = 0; n < 6; n++)
            e[n].copy(t.planes[n]);
        return this
    }
    setFromProjectionMatrix(t, e=Xn) {
        const n = this.planes
          , s = t.elements
          , r = s[0]
          , o = s[1]
          , a = s[2]
          , l = s[3]
          , c = s[4]
          , h = s[5]
          , u = s[6]
          , f = s[7]
          , p = s[8]
          , g = s[9]
          , _ = s[10]
          , m = s[11]
          , d = s[12]
          , x = s[13]
          , v = s[14]
          , S = s[15];
        if (n[0].setComponents(l - r, f - c, m - p, S - d).normalize(),
        n[1].setComponents(l + r, f + c, m + p, S + d).normalize(),
        n[2].setComponents(l + o, f + h, m + g, S + x).normalize(),
        n[3].setComponents(l - o, f - h, m - g, S - x).normalize(),
        n[4].setComponents(l - a, f - u, m - _, S - v).normalize(),
        e === Xn)
            n[5].setComponents(l + a, f + u, m + _, S + v).normalize();
        else if (e === Pr)
            n[5].setComponents(a, u, _, v).normalize();
        else
            throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
        return this
    }
    intersectsObject(t) {
        if (t.boundingSphere !== void 0)
            t.boundingSphere === null && t.computeBoundingSphere(),
            _i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
        else {
            const e = t.geometry;
            e.boundingSphere === null && e.computeBoundingSphere(),
            _i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)
        }
        return this.intersectsSphere(_i)
    }
    intersectsSprite(t) {
        return _i.center.set(0, 0, 0),
        _i.radius = .7071067811865476,
        _i.applyMatrix4(t.matrixWorld),
        this.intersectsSphere(_i)
    }
    intersectsSphere(t) {
        const e = this.planes
          , n = t.center
          , s = -t.radius;
        for (let r = 0; r < 6; r++)
            if (e[r].distanceToPoint(n) < s)
                return !1;
        return !0
    }
    intersectsBox(t) {
        const e = this.planes;
        for (let n = 0; n < 6; n++) {
            const s = e[n];
            if (hr.x = s.normal.x > 0 ? t.max.x : t.min.x,
            hr.y = s.normal.y > 0 ? t.max.y : t.min.y,
            hr.z = s.normal.z > 0 ? t.max.z : t.min.z,
            s.distanceToPoint(hr) < 0)
                return !1
        }
        return !0
    }
    containsPoint(t) {
        const e = this.planes;
        for (let n = 0; n < 6; n++)
            if (e[n].distanceToPoint(t) < 0)
                return !1;
        return !0
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
function kc() {
    let i = null
      , t = !1
      , e = null
      , n = null;
    function s(r, o) {
        e(r, o),
        n = i.requestAnimationFrame(s)
    }
    return {
        start: function() {
            t !== !0 && e !== null && (n = i.requestAnimationFrame(s),
            t = !0)
        },
        stop: function() {
            i.cancelAnimationFrame(n),
            t = !1
        },
        setAnimationLoop: function(r) {
            e = r
        },
        setContext: function(r) {
            i = r
        }
    }
}
function Qu(i, t) {
    const e = t.isWebGL2
      , n = new WeakMap;
    function s(c, h) {
        const u = c.array
          , f = c.usage
          , p = u.byteLength
          , g = i.createBuffer();
        i.bindBuffer(h, g),
        i.bufferData(h, u, f),
        c.onUploadCallback();
        let _;
        if (u instanceof Float32Array)
            _ = i.FLOAT;
        else if (u instanceof Uint16Array)
            if (c.isFloat16BufferAttribute)
                if (e)
                    _ = i.HALF_FLOAT;
                else
                    throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
            else
                _ = i.UNSIGNED_SHORT;
        else if (u instanceof Int16Array)
            _ = i.SHORT;
        else if (u instanceof Uint32Array)
            _ = i.UNSIGNED_INT;
        else if (u instanceof Int32Array)
            _ = i.INT;
        else if (u instanceof Int8Array)
            _ = i.BYTE;
        else if (u instanceof Uint8Array)
            _ = i.UNSIGNED_BYTE;
        else if (u instanceof Uint8ClampedArray)
            _ = i.UNSIGNED_BYTE;
        else
            throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
        return {
            buffer: g,
            type: _,
            bytesPerElement: u.BYTES_PER_ELEMENT,
            version: c.version,
            size: p
        }
    }
    function r(c, h, u) {
        const f = h.array
          , p = h._updateRange
          , g = h.updateRanges;
        if (i.bindBuffer(u, c),
        p.count === -1 && g.length === 0 && i.bufferSubData(u, 0, f),
        g.length !== 0) {
            for (let _ = 0, m = g.length; _ < m; _++) {
                const d = g[_];
                e ? i.bufferSubData(u, d.start * f.BYTES_PER_ELEMENT, f, d.start, d.count) : i.bufferSubData(u, d.start * f.BYTES_PER_ELEMENT, f.subarray(d.start, d.start + d.count))
            }
            h.clearUpdateRanges()
        }
        p.count !== -1 && (e ? i.bufferSubData(u, p.offset * f.BYTES_PER_ELEMENT, f, p.offset, p.count) : i.bufferSubData(u, p.offset * f.BYTES_PER_ELEMENT, f.subarray(p.offset, p.offset + p.count)),
        p.count = -1),
        h.onUploadCallback()
    }
    function o(c) {
        return c.isInterleavedBufferAttribute && (c = c.data),
        n.get(c)
    }
    function a(c) {
        c.isInterleavedBufferAttribute && (c = c.data);
        const h = n.get(c);
        h && (i.deleteBuffer(h.buffer),
        n.delete(c))
    }
    function l(c, h) {
        if (c.isGLBufferAttribute) {
            const f = n.get(c);
            (!f || f.version < c.version) && n.set(c, {
                buffer: c.buffer,
                type: c.type,
                bytesPerElement: c.elementSize,
                version: c.version
            });
            return
        }
        c.isInterleavedBufferAttribute && (c = c.data);
        const u = n.get(c);
        if (u === void 0)
            n.set(c, s(c, h));
        else if (u.version < c.version) {
            if (u.size !== c.array.byteLength)
                throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
            r(u.buffer, c, h),
            u.version = c.version
        }
    }
    return {
        get: o,
        remove: a,
        update: l
    }
}
class wi extends Qe {
    constructor(t=1, e=1, n=1, s=1) {
        super(),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: s
        };
        const r = t / 2
          , o = e / 2
          , a = Math.floor(n)
          , l = Math.floor(s)
          , c = a + 1
          , h = l + 1
          , u = t / a
          , f = e / l
          , p = []
          , g = []
          , _ = []
          , m = [];
        for (let d = 0; d < h; d++) {
            const x = d * f - o;
            for (let v = 0; v < c; v++) {
                const S = v * u - r;
                g.push(S, -x, 0),
                _.push(0, 0, 1),
                m.push(v / a),
                m.push(1 - d / l)
            }
        }
        for (let d = 0; d < l; d++)
            for (let x = 0; x < a; x++) {
                const v = x + c * d
                  , S = x + c * (d + 1)
                  , L = x + 1 + c * (d + 1)
                  , A = x + 1 + c * d;
                p.push(v, S, A),
                p.push(S, L, A)
            }
        this.setIndex(p),
        this.setAttribute("position", new sn(g,3)),
        this.setAttribute("normal", new sn(_,3)),
        this.setAttribute("uv", new sn(m,2))
    }
    copy(t) {
        return super.copy(t),
        this.parameters = Object.assign({}, t.parameters),
        this
    }
    static fromJSON(t) {
        return new wi(t.width,t.height,t.widthSegments,t.heightSegments)
    }
}
var tf = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`
  , ef = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`
  , nf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`
  , sf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , rf = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`
  , of = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`
  , af = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`
  , lf = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`
  , cf = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`
  , hf = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`
  , uf = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`
  , ff = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`
  , df = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`
  , pf = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`
  , mf = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`
  , gf = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`
  , _f = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`
  , vf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`
  , xf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`
  , Mf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`
  , yf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`
  , Sf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`
  , bf = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`
  , Ef = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`
  , Tf = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`
  , wf = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`
  , Af = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`
  , Rf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`
  , Cf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`
  , Lf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`
  , Pf = "gl_FragColor = linearToOutputTexel( gl_FragColor );"
  , Df = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`
  , If = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`
  , Uf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`
  , Of = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`
  , Nf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`
  , Ff = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`
  , kf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`
  , Bf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`
  , zf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`
  , Gf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`
  , Hf = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`
  , Vf = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`
  , Wf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`
  , Xf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`
  , qf = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`
  , Kf = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`
  , Yf = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`
  , $f = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`
  , jf = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`
  , Zf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`
  , Jf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`
  , Qf = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`
  , td = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`
  , ed = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`
  , nd = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`
  , id = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`
  , sd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`
  , rd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , od = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`
  , ad = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`
  , ld = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`
  , cd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`
  , hd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`
  , ud = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , fd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`
  , dd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`
  , pd = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`
  , md = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`
  , gd = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`
  , _d = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`
  , vd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`
  , xd = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`
  , Md = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , yd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , Sd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`
  , bd = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`
  , Ed = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`
  , Td = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`
  , wd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`
  , Ad = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`
  , Rd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`
  , Cd = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`
  , Ld = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`
  , Pd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`
  , Dd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`
  , Id = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`
  , Ud = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`
  , Od = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`
  , Nd = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`
  , Fd = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`
  , kd = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`
  , Bd = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`
  , zd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`
  , Gd = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`
  , Hd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`
  , Vd = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`
  , Wd = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`
  , Xd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`
  , qd = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`
  , Kd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`
  , Yd = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`
  , $d = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`
  , jd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , Zd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , Jd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`
  , Qd = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const tp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`
  , ep = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , np = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , ip = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , sp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , rp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , op = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`
  , ap = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`
  , lp = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`
  , cp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`
  , hp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`
  , up = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , fp = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , dp = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , pp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`
  , mp = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , gp = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , _p = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , vp = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`
  , xp = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Mp = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`
  , yp = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`
  , Sp = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , bp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Ep = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`
  , Tp = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , wp = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , Ap = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Rp = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`
  , Cp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , Lp = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , Pp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , Dp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , Ip = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , qt = {
    alphahash_fragment: tf,
    alphahash_pars_fragment: ef,
    alphamap_fragment: nf,
    alphamap_pars_fragment: sf,
    alphatest_fragment: rf,
    alphatest_pars_fragment: of,
    aomap_fragment: af,
    aomap_pars_fragment: lf,
    batching_pars_vertex: cf,
    batching_vertex: hf,
    begin_vertex: uf,
    beginnormal_vertex: ff,
    bsdfs: df,
    iridescence_fragment: pf,
    bumpmap_pars_fragment: mf,
    clipping_planes_fragment: gf,
    clipping_planes_pars_fragment: _f,
    clipping_planes_pars_vertex: vf,
    clipping_planes_vertex: xf,
    color_fragment: Mf,
    color_pars_fragment: yf,
    color_pars_vertex: Sf,
    color_vertex: bf,
    common: Ef,
    cube_uv_reflection_fragment: Tf,
    defaultnormal_vertex: wf,
    displacementmap_pars_vertex: Af,
    displacementmap_vertex: Rf,
    emissivemap_fragment: Cf,
    emissivemap_pars_fragment: Lf,
    colorspace_fragment: Pf,
    colorspace_pars_fragment: Df,
    envmap_fragment: If,
    envmap_common_pars_fragment: Uf,
    envmap_pars_fragment: Of,
    envmap_pars_vertex: Nf,
    envmap_physical_pars_fragment: Yf,
    envmap_vertex: Ff,
    fog_vertex: kf,
    fog_pars_vertex: Bf,
    fog_fragment: zf,
    fog_pars_fragment: Gf,
    gradientmap_pars_fragment: Hf,
    lightmap_fragment: Vf,
    lightmap_pars_fragment: Wf,
    lights_lambert_fragment: Xf,
    lights_lambert_pars_fragment: qf,
    lights_pars_begin: Kf,
    lights_toon_fragment: $f,
    lights_toon_pars_fragment: jf,
    lights_phong_fragment: Zf,
    lights_phong_pars_fragment: Jf,
    lights_physical_fragment: Qf,
    lights_physical_pars_fragment: td,
    lights_fragment_begin: ed,
    lights_fragment_maps: nd,
    lights_fragment_end: id,
    logdepthbuf_fragment: sd,
    logdepthbuf_pars_fragment: rd,
    logdepthbuf_pars_vertex: od,
    logdepthbuf_vertex: ad,
    map_fragment: ld,
    map_pars_fragment: cd,
    map_particle_fragment: hd,
    map_particle_pars_fragment: ud,
    metalnessmap_fragment: fd,
    metalnessmap_pars_fragment: dd,
    morphcolor_vertex: pd,
    morphnormal_vertex: md,
    morphtarget_pars_vertex: gd,
    morphtarget_vertex: _d,
    normal_fragment_begin: vd,
    normal_fragment_maps: xd,
    normal_pars_fragment: Md,
    normal_pars_vertex: yd,
    normal_vertex: Sd,
    normalmap_pars_fragment: bd,
    clearcoat_normal_fragment_begin: Ed,
    clearcoat_normal_fragment_maps: Td,
    clearcoat_pars_fragment: wd,
    iridescence_pars_fragment: Ad,
    opaque_fragment: Rd,
    packing: Cd,
    premultiplied_alpha_fragment: Ld,
    project_vertex: Pd,
    dithering_fragment: Dd,
    dithering_pars_fragment: Id,
    roughnessmap_fragment: Ud,
    roughnessmap_pars_fragment: Od,
    shadowmap_pars_fragment: Nd,
    shadowmap_pars_vertex: Fd,
    shadowmap_vertex: kd,
    shadowmask_pars_fragment: Bd,
    skinbase_vertex: zd,
    skinning_pars_vertex: Gd,
    skinning_vertex: Hd,
    skinnormal_vertex: Vd,
    specularmap_fragment: Wd,
    specularmap_pars_fragment: Xd,
    tonemapping_fragment: qd,
    tonemapping_pars_fragment: Kd,
    transmission_fragment: Yd,
    transmission_pars_fragment: $d,
    uv_pars_fragment: jd,
    uv_pars_vertex: Zd,
    uv_vertex: Jd,
    worldpos_vertex: Qd,
    background_vert: tp,
    background_frag: ep,
    backgroundCube_vert: np,
    backgroundCube_frag: ip,
    cube_vert: sp,
    cube_frag: rp,
    depth_vert: op,
    depth_frag: ap,
    distanceRGBA_vert: lp,
    distanceRGBA_frag: cp,
    equirect_vert: hp,
    equirect_frag: up,
    linedashed_vert: fp,
    linedashed_frag: dp,
    meshbasic_vert: pp,
    meshbasic_frag: mp,
    meshlambert_vert: gp,
    meshlambert_frag: _p,
    meshmatcap_vert: vp,
    meshmatcap_frag: xp,
    meshnormal_vert: Mp,
    meshnormal_frag: yp,
    meshphong_vert: Sp,
    meshphong_frag: bp,
    meshphysical_vert: Ep,
    meshphysical_frag: Tp,
    meshtoon_vert: wp,
    meshtoon_frag: Ap,
    points_vert: Rp,
    points_frag: Cp,
    shadow_vert: Lp,
    shadow_frag: Pp,
    sprite_vert: Dp,
    sprite_frag: Ip
}
  , ht = {
    common: {
        diffuse: {
            value: new Bt(16777215)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new Jt
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Jt
        },
        alphaTest: {
            value: 0
        }
    },
    specularmap: {
        specularMap: {
            value: null
        },
        specularMapTransform: {
            value: new Jt
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        ior: {
            value: 1.5
        },
        refractionRatio: {
            value: .98
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        },
        aoMapTransform: {
            value: new Jt
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        },
        lightMapTransform: {
            value: new Jt
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpMapTransform: {
            value: new Jt
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalMapTransform: {
            value: new Jt
        },
        normalScale: {
            value: new Kt(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementMapTransform: {
            value: new Jt
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        },
        emissiveMapTransform: {
            value: new Jt
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        },
        metalnessMapTransform: {
            value: new Jt
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        },
        roughnessMapTransform: {
            value: new Jt
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new Bt(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotLightMap: {
            value: []
        },
        spotShadowMap: {
            value: []
        },
        spotLightMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        }
    },
    points: {
        diffuse: {
            value: new Bt(16777215)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Jt
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new Jt
        }
    },
    sprite: {
        diffuse: {
            value: new Bt(16777215)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new Kt(.5,.5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new Jt
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Jt
        },
        alphaTest: {
            value: 0
        }
    }
}
  , In = {
    basic: {
        uniforms: $e([ht.common, ht.specularmap, ht.envmap, ht.aomap, ht.lightmap, ht.fog]),
        vertexShader: qt.meshbasic_vert,
        fragmentShader: qt.meshbasic_frag
    },
    lambert: {
        uniforms: $e([ht.common, ht.specularmap, ht.envmap, ht.aomap, ht.lightmap, ht.emissivemap, ht.bumpmap, ht.normalmap, ht.displacementmap, ht.fog, ht.lights, {
            emissive: {
                value: new Bt(0)
            }
        }]),
        vertexShader: qt.meshlambert_vert,
        fragmentShader: qt.meshlambert_frag
    },
    phong: {
        uniforms: $e([ht.common, ht.specularmap, ht.envmap, ht.aomap, ht.lightmap, ht.emissivemap, ht.bumpmap, ht.normalmap, ht.displacementmap, ht.fog, ht.lights, {
            emissive: {
                value: new Bt(0)
            },
            specular: {
                value: new Bt(1118481)
            },
            shininess: {
                value: 30
            }
        }]),
        vertexShader: qt.meshphong_vert,
        fragmentShader: qt.meshphong_frag
    },
    standard: {
        uniforms: $e([ht.common, ht.envmap, ht.aomap, ht.lightmap, ht.emissivemap, ht.bumpmap, ht.normalmap, ht.displacementmap, ht.roughnessmap, ht.metalnessmap, ht.fog, ht.lights, {
            emissive: {
                value: new Bt(0)
            },
            roughness: {
                value: 1
            },
            metalness: {
                value: 0
            },
            envMapIntensity: {
                value: 1
            }
        }]),
        vertexShader: qt.meshphysical_vert,
        fragmentShader: qt.meshphysical_frag
    },
    toon: {
        uniforms: $e([ht.common, ht.aomap, ht.lightmap, ht.emissivemap, ht.bumpmap, ht.normalmap, ht.displacementmap, ht.gradientmap, ht.fog, ht.lights, {
            emissive: {
                value: new Bt(0)
            }
        }]),
        vertexShader: qt.meshtoon_vert,
        fragmentShader: qt.meshtoon_frag
    },
    matcap: {
        uniforms: $e([ht.common, ht.bumpmap, ht.normalmap, ht.displacementmap, ht.fog, {
            matcap: {
                value: null
            }
        }]),
        vertexShader: qt.meshmatcap_vert,
        fragmentShader: qt.meshmatcap_frag
    },
    points: {
        uniforms: $e([ht.points, ht.fog]),
        vertexShader: qt.points_vert,
        fragmentShader: qt.points_frag
    },
    dashed: {
        uniforms: $e([ht.common, ht.fog, {
            scale: {
                value: 1
            },
            dashSize: {
                value: 1
            },
            totalSize: {
                value: 2
            }
        }]),
        vertexShader: qt.linedashed_vert,
        fragmentShader: qt.linedashed_frag
    },
    depth: {
        uniforms: $e([ht.common, ht.displacementmap]),
        vertexShader: qt.depth_vert,
        fragmentShader: qt.depth_frag
    },
    normal: {
        uniforms: $e([ht.common, ht.bumpmap, ht.normalmap, ht.displacementmap, {
            opacity: {
                value: 1
            }
        }]),
        vertexShader: qt.meshnormal_vert,
        fragmentShader: qt.meshnormal_frag
    },
    sprite: {
        uniforms: $e([ht.sprite, ht.fog]),
        vertexShader: qt.sprite_vert,
        fragmentShader: qt.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new Jt
            },
            t2D: {
                value: null
            },
            backgroundIntensity: {
                value: 1
            }
        },
        vertexShader: qt.background_vert,
        fragmentShader: qt.background_frag
    },
    backgroundCube: {
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            backgroundBlurriness: {
                value: 0
            },
            backgroundIntensity: {
                value: 1
            }
        },
        vertexShader: qt.backgroundCube_vert,
        fragmentShader: qt.backgroundCube_frag
    },
    cube: {
        uniforms: {
            tCube: {
                value: null
            },
            tFlip: {
                value: -1
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: qt.cube_vert,
        fragmentShader: qt.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: qt.equirect_vert,
        fragmentShader: qt.equirect_frag
    },
    distanceRGBA: {
        uniforms: $e([ht.common, ht.displacementmap, {
            referencePosition: {
                value: new I
            },
            nearDistance: {
                value: 1
            },
            farDistance: {
                value: 1e3
            }
        }]),
        vertexShader: qt.distanceRGBA_vert,
        fragmentShader: qt.distanceRGBA_frag
    },
    shadow: {
        uniforms: $e([ht.lights, ht.fog, {
            color: {
                value: new Bt(0)
            },
            opacity: {
                value: 1
            }
        }]),
        vertexShader: qt.shadow_vert,
        fragmentShader: qt.shadow_frag
    }
};
In.physical = {
    uniforms: $e([In.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatMapTransform: {
            value: new Jt
        },
        clearcoatNormalMap: {
            value: null
        },
        clearcoatNormalMapTransform: {
            value: new Jt
        },
        clearcoatNormalScale: {
            value: new Kt(1,1)
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatRoughnessMapTransform: {
            value: new Jt
        },
        iridescence: {
            value: 0
        },
        iridescenceMap: {
            value: null
        },
        iridescenceMapTransform: {
            value: new Jt
        },
        iridescenceIOR: {
            value: 1.3
        },
        iridescenceThicknessMinimum: {
            value: 100
        },
        iridescenceThicknessMaximum: {
            value: 400
        },
        iridescenceThicknessMap: {
            value: null
        },
        iridescenceThicknessMapTransform: {
            value: new Jt
        },
        sheen: {
            value: 0
        },
        sheenColor: {
            value: new Bt(0)
        },
        sheenColorMap: {
            value: null
        },
        sheenColorMapTransform: {
            value: new Jt
        },
        sheenRoughness: {
            value: 1
        },
        sheenRoughnessMap: {
            value: null
        },
        sheenRoughnessMapTransform: {
            value: new Jt
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        },
        transmissionMapTransform: {
            value: new Jt
        },
        transmissionSamplerSize: {
            value: new Kt
        },
        transmissionSamplerMap: {
            value: null
        },
        thickness: {
            value: 0
        },
        thicknessMap: {
            value: null
        },
        thicknessMapTransform: {
            value: new Jt
        },
        attenuationDistance: {
            value: 0
        },
        attenuationColor: {
            value: new Bt(0)
        },
        specularColor: {
            value: new Bt(1,1,1)
        },
        specularColorMap: {
            value: null
        },
        specularColorMapTransform: {
            value: new Jt
        },
        specularIntensity: {
            value: 1
        },
        specularIntensityMap: {
            value: null
        },
        specularIntensityMapTransform: {
            value: new Jt
        },
        anisotropyVector: {
            value: new Kt
        },
        anisotropyMap: {
            value: null
        },
        anisotropyMapTransform: {
            value: new Jt
        }
    }]),
    vertexShader: qt.meshphysical_vert,
    fragmentShader: qt.meshphysical_frag
};
const ur = {
    r: 0,
    b: 0,
    g: 0
};
function Up(i, t, e, n, s, r, o) {
    const a = new Bt(0);
    let l = r === !0 ? 0 : 1, c, h, u = null, f = 0, p = null;
    function g(m, d) {
        let x = !1
          , v = d.isScene === !0 ? d.background : null;
        v && v.isTexture && (v = (d.backgroundBlurriness > 0 ? e : t).get(v)),
        v === null ? _(a, l) : v && v.isColor && (_(v, 1),
        x = !0);
        const S = i.xr.getEnvironmentBlendMode();
        S === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : S === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o),
        (i.autoClear || x) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil),
        v && (v.isCubeTexture || v.mapping === Or) ? (h === void 0 && (h = new Pe(new Rn(1,1,1),new Cn({
            name: "BackgroundCubeMaterial",
            uniforms: fs(In.backgroundCube.uniforms),
            vertexShader: In.backgroundCube.vertexShader,
            fragmentShader: In.backgroundCube.fragmentShader,
            side: Je,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })),
        h.geometry.deleteAttribute("normal"),
        h.geometry.deleteAttribute("uv"),
        h.onBeforeRender = function(L, A, R) {
            this.matrixWorld.copyPosition(R.matrixWorld)
        }
        ,
        Object.defineProperty(h.material, "envMap", {
            get: function() {
                return this.uniforms.envMap.value
            }
        }),
        s.update(h)),
        h.material.uniforms.envMap.value = v,
        h.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1,
        h.material.uniforms.backgroundBlurriness.value = d.backgroundBlurriness,
        h.material.uniforms.backgroundIntensity.value = d.backgroundIntensity,
        h.material.toneMapped = ae.getTransfer(v.colorSpace) !== _e,
        (u !== v || f !== v.version || p !== i.toneMapping) && (h.material.needsUpdate = !0,
        u = v,
        f = v.version,
        p = i.toneMapping),
        h.layers.enableAll(),
        m.unshift(h, h.geometry, h.material, 0, 0, null)) : v && v.isTexture && (c === void 0 && (c = new Pe(new wi(2,2),new Cn({
            name: "BackgroundMaterial",
            uniforms: fs(In.background.uniforms),
            vertexShader: In.background.vertexShader,
            fragmentShader: In.background.fragmentShader,
            side: ai,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })),
        c.geometry.deleteAttribute("normal"),
        Object.defineProperty(c.material, "map", {
            get: function() {
                return this.uniforms.t2D.value
            }
        }),
        s.update(c)),
        c.material.uniforms.t2D.value = v,
        c.material.uniforms.backgroundIntensity.value = d.backgroundIntensity,
        c.material.toneMapped = ae.getTransfer(v.colorSpace) !== _e,
        v.matrixAutoUpdate === !0 && v.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(v.matrix),
        (u !== v || f !== v.version || p !== i.toneMapping) && (c.material.needsUpdate = !0,
        u = v,
        f = v.version,
        p = i.toneMapping),
        c.layers.enableAll(),
        m.unshift(c, c.geometry, c.material, 0, 0, null))
    }
    function _(m, d) {
        m.getRGB(ur, Oc(i)),
        n.buffers.color.setClear(ur.r, ur.g, ur.b, d, o)
    }
    return {
        getClearColor: function() {
            return a
        },
        setClearColor: function(m, d=1) {
            a.set(m),
            l = d,
            _(a, l)
        },
        getClearAlpha: function() {
            return l
        },
        setClearAlpha: function(m) {
            l = m,
            _(a, l)
        },
        render: g
    }
}
function Op(i, t, e, n) {
    const s = i.getParameter(i.MAX_VERTEX_ATTRIBS)
      , r = n.isWebGL2 ? null : t.get("OES_vertex_array_object")
      , o = n.isWebGL2 || r !== null
      , a = {}
      , l = m(null);
    let c = l
      , h = !1;
    function u(P, O, N, B, z) {
        let Y = !1;
        if (o) {
            const $ = _(B, N, O);
            c !== $ && (c = $,
            p(c.object)),
            Y = d(P, B, N, z),
            Y && x(P, B, N, z)
        } else {
            const $ = O.wireframe === !0;
            (c.geometry !== B.id || c.program !== N.id || c.wireframe !== $) && (c.geometry = B.id,
            c.program = N.id,
            c.wireframe = $,
            Y = !0)
        }
        z !== null && e.update(z, i.ELEMENT_ARRAY_BUFFER),
        (Y || h) && (h = !1,
        K(P, O, N, B),
        z !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(z).buffer))
    }
    function f() {
        return n.isWebGL2 ? i.createVertexArray() : r.createVertexArrayOES()
    }
    function p(P) {
        return n.isWebGL2 ? i.bindVertexArray(P) : r.bindVertexArrayOES(P)
    }
    function g(P) {
        return n.isWebGL2 ? i.deleteVertexArray(P) : r.deleteVertexArrayOES(P)
    }
    function _(P, O, N) {
        const B = N.wireframe === !0;
        let z = a[P.id];
        z === void 0 && (z = {},
        a[P.id] = z);
        let Y = z[O.id];
        Y === void 0 && (Y = {},
        z[O.id] = Y);
        let $ = Y[B];
        return $ === void 0 && ($ = m(f()),
        Y[B] = $),
        $
    }
    function m(P) {
        const O = []
          , N = []
          , B = [];
        for (let z = 0; z < s; z++)
            O[z] = 0,
            N[z] = 0,
            B[z] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: O,
            enabledAttributes: N,
            attributeDivisors: B,
            object: P,
            attributes: {},
            index: null
        }
    }
    function d(P, O, N, B) {
        const z = c.attributes
          , Y = O.attributes;
        let $ = 0;
        const Q = N.getAttributes();
        for (const et in Q)
            if (Q[et].location >= 0) {
                const J = z[et];
                let lt = Y[et];
                if (lt === void 0 && (et === "instanceMatrix" && P.instanceMatrix && (lt = P.instanceMatrix),
                et === "instanceColor" && P.instanceColor && (lt = P.instanceColor)),
                J === void 0 || J.attribute !== lt || lt && J.data !== lt.data)
                    return !0;
                $++
            }
        return c.attributesNum !== $ || c.index !== B
    }
    function x(P, O, N, B) {
        const z = {}
          , Y = O.attributes;
        let $ = 0;
        const Q = N.getAttributes();
        for (const et in Q)
            if (Q[et].location >= 0) {
                let J = Y[et];
                J === void 0 && (et === "instanceMatrix" && P.instanceMatrix && (J = P.instanceMatrix),
                et === "instanceColor" && P.instanceColor && (J = P.instanceColor));
                const lt = {};
                lt.attribute = J,
                J && J.data && (lt.data = J.data),
                z[et] = lt,
                $++
            }
        c.attributes = z,
        c.attributesNum = $,
        c.index = B
    }
    function v() {
        const P = c.newAttributes;
        for (let O = 0, N = P.length; O < N; O++)
            P[O] = 0
    }
    function S(P) {
        L(P, 0)
    }
    function L(P, O) {
        const N = c.newAttributes
          , B = c.enabledAttributes
          , z = c.attributeDivisors;
        N[P] = 1,
        B[P] === 0 && (i.enableVertexAttribArray(P),
        B[P] = 1),
        z[P] !== O && ((n.isWebGL2 ? i : t.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](P, O),
        z[P] = O)
    }
    function A() {
        const P = c.newAttributes
          , O = c.enabledAttributes;
        for (let N = 0, B = O.length; N < B; N++)
            O[N] !== P[N] && (i.disableVertexAttribArray(N),
            O[N] = 0)
    }
    function R(P, O, N, B, z, Y, $) {
        $ === !0 ? i.vertexAttribIPointer(P, O, N, z, Y) : i.vertexAttribPointer(P, O, N, B, z, Y)
    }
    function K(P, O, N, B) {
        if (n.isWebGL2 === !1 && (P.isInstancedMesh || B.isInstancedBufferGeometry) && t.get("ANGLE_instanced_arrays") === null)
            return;
        v();
        const z = B.attributes
          , Y = N.getAttributes()
          , $ = O.defaultAttributeValues;
        for (const Q in Y) {
            const et = Y[Q];
            if (et.location >= 0) {
                let H = z[Q];
                if (H === void 0 && (Q === "instanceMatrix" && P.instanceMatrix && (H = P.instanceMatrix),
                Q === "instanceColor" && P.instanceColor && (H = P.instanceColor)),
                H !== void 0) {
                    const J = H.normalized
                      , lt = H.itemSize
                      , mt = e.get(H);
                    if (mt === void 0)
                        continue;
                    const _t = mt.buffer
                      , wt = mt.type
                      , Ot = mt.bytesPerElement
                      , At = n.isWebGL2 === !0 && (wt === i.INT || wt === i.UNSIGNED_INT || H.gpuType === _c);
                    if (H.isInterleavedBufferAttribute) {
                        const Qt = H.data
                          , V = Qt.stride
                          , Oe = H.offset;
                        if (Qt.isInstancedInterleavedBuffer) {
                            for (let Tt = 0; Tt < et.locationSize; Tt++)
                                L(et.location + Tt, Qt.meshPerAttribute);
                            P.isInstancedMesh !== !0 && B._maxInstanceCount === void 0 && (B._maxInstanceCount = Qt.meshPerAttribute * Qt.count)
                        } else
                            for (let Tt = 0; Tt < et.locationSize; Tt++)
                                S(et.location + Tt);
                        i.bindBuffer(i.ARRAY_BUFFER, _t);
                        for (let Tt = 0; Tt < et.locationSize; Tt++)
                            R(et.location + Tt, lt / et.locationSize, wt, J, V * Ot, (Oe + lt / et.locationSize * Tt) * Ot, At)
                    } else {
                        if (H.isInstancedBufferAttribute) {
                            for (let Qt = 0; Qt < et.locationSize; Qt++)
                                L(et.location + Qt, H.meshPerAttribute);
                            P.isInstancedMesh !== !0 && B._maxInstanceCount === void 0 && (B._maxInstanceCount = H.meshPerAttribute * H.count)
                        } else
                            for (let Qt = 0; Qt < et.locationSize; Qt++)
                                S(et.location + Qt);
                        i.bindBuffer(i.ARRAY_BUFFER, _t);
                        for (let Qt = 0; Qt < et.locationSize; Qt++)
                            R(et.location + Qt, lt / et.locationSize, wt, J, lt * Ot, lt / et.locationSize * Qt * Ot, At)
                    }
                } else if ($ !== void 0) {
                    const J = $[Q];
                    if (J !== void 0)
                        switch (J.length) {
                        case 2:
                            i.vertexAttrib2fv(et.location, J);
                            break;
                        case 3:
                            i.vertexAttrib3fv(et.location, J);
                            break;
                        case 4:
                            i.vertexAttrib4fv(et.location, J);
                            break;
                        default:
                            i.vertexAttrib1fv(et.location, J)
                        }
                }
            }
        }
        A()
    }
    function y() {
        k();
        for (const P in a) {
            const O = a[P];
            for (const N in O) {
                const B = O[N];
                for (const z in B)
                    g(B[z].object),
                    delete B[z];
                delete O[N]
            }
            delete a[P]
        }
    }
    function T(P) {
        if (a[P.id] === void 0)
            return;
        const O = a[P.id];
        for (const N in O) {
            const B = O[N];
            for (const z in B)
                g(B[z].object),
                delete B[z];
            delete O[N]
        }
        delete a[P.id]
    }
    function U(P) {
        for (const O in a) {
            const N = a[O];
            if (N[P.id] === void 0)
                continue;
            const B = N[P.id];
            for (const z in B)
                g(B[z].object),
                delete B[z];
            delete N[P.id]
        }
    }
    function k() {
        G(),
        h = !0,
        c !== l && (c = l,
        p(c.object))
    }
    function G() {
        l.geometry = null,
        l.program = null,
        l.wireframe = !1
    }
    return {
        setup: u,
        reset: k,
        resetDefaultState: G,
        dispose: y,
        releaseStatesOfGeometry: T,
        releaseStatesOfProgram: U,
        initAttributes: v,
        enableAttribute: S,
        disableUnusedAttributes: A
    }
}
function Np(i, t, e, n) {
    const s = n.isWebGL2;
    let r;
    function o(h) {
        r = h
    }
    function a(h, u) {
        i.drawArrays(r, h, u),
        e.update(u, r, 1)
    }
    function l(h, u, f) {
        if (f === 0)
            return;
        let p, g;
        if (s)
            p = i,
            g = "drawArraysInstanced";
        else if (p = t.get("ANGLE_instanced_arrays"),
        g = "drawArraysInstancedANGLE",
        p === null) {
            console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            return
        }
        p[g](r, h, u, f),
        e.update(u, r, f)
    }
    function c(h, u, f) {
        if (f === 0)
            return;
        const p = t.get("WEBGL_multi_draw");
        if (p === null)
            for (let g = 0; g < f; g++)
                this.render(h[g], u[g]);
        else {
            p.multiDrawArraysWEBGL(r, h, 0, u, 0, f);
            let g = 0;
            for (let _ = 0; _ < f; _++)
                g += u[_];
            e.update(g, r, 1)
        }
    }
    this.setMode = o,
    this.render = a,
    this.renderInstances = l,
    this.renderMultiDraw = c
}
function Fp(i, t, e) {
    let n;
    function s() {
        if (n !== void 0)
            return n;
        if (t.has("EXT_texture_filter_anisotropic") === !0) {
            const R = t.get("EXT_texture_filter_anisotropic");
            n = i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        } else
            n = 0;
        return n
    }
    function r(R) {
        if (R === "highp") {
            if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
                return "highp";
            R = "mediump"
        }
        return R === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
    }
    const o = typeof WebGL2RenderingContext < "u" && i.constructor.name === "WebGL2RenderingContext";
    let a = e.precision !== void 0 ? e.precision : "highp";
    const l = r(a);
    l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."),
    a = l);
    const c = o || t.has("WEBGL_draw_buffers")
      , h = e.logarithmicDepthBuffer === !0
      , u = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS)
      , f = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
      , p = i.getParameter(i.MAX_TEXTURE_SIZE)
      , g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE)
      , _ = i.getParameter(i.MAX_VERTEX_ATTRIBS)
      , m = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS)
      , d = i.getParameter(i.MAX_VARYING_VECTORS)
      , x = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS)
      , v = f > 0
      , S = o || t.has("OES_texture_float")
      , L = v && S
      , A = o ? i.getParameter(i.MAX_SAMPLES) : 0;
    return {
        isWebGL2: o,
        drawBuffers: c,
        getMaxAnisotropy: s,
        getMaxPrecision: r,
        precision: a,
        logarithmicDepthBuffer: h,
        maxTextures: u,
        maxVertexTextures: f,
        maxTextureSize: p,
        maxCubemapSize: g,
        maxAttributes: _,
        maxVertexUniforms: m,
        maxVaryings: d,
        maxFragmentUniforms: x,
        vertexTextures: v,
        floatFragmentTextures: S,
        floatVertexTextures: L,
        maxSamples: A
    }
}
function kp(i) {
    const t = this;
    let e = null
      , n = 0
      , s = !1
      , r = !1;
    const o = new xi
      , a = new Jt
      , l = {
        value: null,
        needsUpdate: !1
    };
    this.uniform = l,
    this.numPlanes = 0,
    this.numIntersection = 0,
    this.init = function(u, f) {
        const p = u.length !== 0 || f || n !== 0 || s;
        return s = f,
        n = u.length,
        p
    }
    ,
    this.beginShadows = function() {
        r = !0,
        h(null)
    }
    ,
    this.endShadows = function() {
        r = !1
    }
    ,
    this.setGlobalState = function(u, f) {
        e = h(u, f, 0)
    }
    ,
    this.setState = function(u, f, p) {
        const g = u.clippingPlanes
          , _ = u.clipIntersection
          , m = u.clipShadows
          , d = i.get(u);
        if (!s || g === null || g.length === 0 || r && !m)
            r ? h(null) : c();
        else {
            const x = r ? 0 : n
              , v = x * 4;
            let S = d.clippingState || null;
            l.value = S,
            S = h(g, f, v, p);
            for (let L = 0; L !== v; ++L)
                S[L] = e[L];
            d.clippingState = S,
            this.numIntersection = _ ? this.numPlanes : 0,
            this.numPlanes += x
        }
    }
    ;
    function c() {
        l.value !== e && (l.value = e,
        l.needsUpdate = n > 0),
        t.numPlanes = n,
        t.numIntersection = 0
    }
    function h(u, f, p, g) {
        const _ = u !== null ? u.length : 0;
        let m = null;
        if (_ !== 0) {
            if (m = l.value,
            g !== !0 || m === null) {
                const d = p + _ * 4
                  , x = f.matrixWorldInverse;
                a.getNormalMatrix(x),
                (m === null || m.length < d) && (m = new Float32Array(d));
                for (let v = 0, S = p; v !== _; ++v,
                S += 4)
                    o.copy(u[v]).applyMatrix4(x, a),
                    o.normal.toArray(m, S),
                    m[S + 3] = o.constant
            }
            l.value = m,
            l.needsUpdate = !0
        }
        return t.numPlanes = _,
        t.numIntersection = 0,
        m
    }
}
function Bp(i) {
    let t = new WeakMap;
    function e(o, a) {
        return a === Oo ? o.mapping = cs : a === No && (o.mapping = hs),
        o
    }
    function n(o) {
        if (o && o.isTexture) {
            const a = o.mapping;
            if (a === Oo || a === No)
                if (t.has(o)) {
                    const l = t.get(o).texture;
                    return e(l, o.mapping)
                } else {
                    const l = o.image;
                    if (l && l.height > 0) {
                        const c = new ju(l.height / 2);
                        return c.fromEquirectangularTexture(i, o),
                        t.set(o, c),
                        o.addEventListener("dispose", s),
                        e(c.texture, o.mapping)
                    } else
                        return null
                }
        }
        return o
    }
    function s(o) {
        const a = o.target;
        a.removeEventListener("dispose", s);
        const l = t.get(a);
        l !== void 0 && (t.delete(a),
        l.dispose())
    }
    function r() {
        t = new WeakMap
    }
    return {
        get: n,
        dispose: r
    }
}
class Bc extends Nc {
    constructor(t=-1, e=1, n=1, s=-1, r=.1, o=2e3) {
        super(),
        this.isOrthographicCamera = !0,
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = t,
        this.right = e,
        this.top = n,
        this.bottom = s,
        this.near = r,
        this.far = o,
        this.updateProjectionMatrix()
    }
    copy(t, e) {
        return super.copy(t, e),
        this.left = t.left,
        this.right = t.right,
        this.top = t.top,
        this.bottom = t.bottom,
        this.near = t.near,
        this.far = t.far,
        this.zoom = t.zoom,
        this.view = t.view === null ? null : Object.assign({}, t.view),
        this
    }
    setViewOffset(t, e, n, s, r, o) {
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = t,
        this.view.fullHeight = e,
        this.view.offsetX = n,
        this.view.offsetY = s,
        this.view.width = r,
        this.view.height = o,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const t = (this.right - this.left) / (2 * this.zoom)
          , e = (this.top - this.bottom) / (2 * this.zoom)
          , n = (this.right + this.left) / 2
          , s = (this.top + this.bottom) / 2;
        let r = n - t
          , o = n + t
          , a = s + e
          , l = s - e;
        if (this.view !== null && this.view.enabled) {
            const c = (this.right - this.left) / this.view.fullWidth / this.zoom
              , h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += c * this.view.offsetX,
            o = r + c * this.view.width,
            a -= h * this.view.offsetY,
            l = a - h * this.view.height
        }
        this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far, this.coordinateSystem),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.zoom = this.zoom,
        e.object.left = this.left,
        e.object.right = this.right,
        e.object.top = this.top,
        e.object.bottom = this.bottom,
        e.object.near = this.near,
        e.object.far = this.far,
        this.view !== null && (e.object.view = Object.assign({}, this.view)),
        e
    }
}
const ns = 4
  , pl = [.125, .215, .35, .446, .526, .582]
  , Si = 20
  , xo = new Bc
  , ml = new Bt;
let Mo = null
  , yo = 0
  , So = 0;
const Mi = (1 + Math.sqrt(5)) / 2
  , Ki = 1 / Mi
  , gl = [new I(1,1,1), new I(-1,1,1), new I(1,1,-1), new I(-1,1,-1), new I(0,Mi,Ki), new I(0,Mi,-Ki), new I(Ki,0,Mi), new I(-Ki,0,Mi), new I(Mi,Ki,0), new I(-Mi,Ki,0)];
class _l {
    constructor(t) {
        this._renderer = t,
        this._pingPongRenderTarget = null,
        this._lodMax = 0,
        this._cubeSize = 0,
        this._lodPlanes = [],
        this._sizeLods = [],
        this._sigmas = [],
        this._blurMaterial = null,
        this._cubemapMaterial = null,
        this._equirectMaterial = null,
        this._compileMaterial(this._blurMaterial)
    }
    fromScene(t, e=0, n=.1, s=100) {
        Mo = this._renderer.getRenderTarget(),
        yo = this._renderer.getActiveCubeFace(),
        So = this._renderer.getActiveMipmapLevel(),
        this._setSize(256);
        const r = this._allocateTargets();
        return r.depthBuffer = !0,
        this._sceneToCubeUV(t, n, s, r),
        e > 0 && this._blur(r, 0, 0, e),
        this._applyPMREM(r),
        this._cleanup(r),
        r
    }
    fromEquirectangular(t, e=null) {
        return this._fromTexture(t, e)
    }
    fromCubemap(t, e=null) {
        return this._fromTexture(t, e)
    }
    compileCubemapShader() {
        this._cubemapMaterial === null && (this._cubemapMaterial = Ml(),
        this._compileMaterial(this._cubemapMaterial))
    }
    compileEquirectangularShader() {
        this._equirectMaterial === null && (this._equirectMaterial = xl(),
        this._compileMaterial(this._equirectMaterial))
    }
    dispose() {
        this._dispose(),
        this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
        this._equirectMaterial !== null && this._equirectMaterial.dispose()
    }
    _setSize(t) {
        this._lodMax = Math.floor(Math.log2(t)),
        this._cubeSize = Math.pow(2, this._lodMax)
    }
    _dispose() {
        this._blurMaterial !== null && this._blurMaterial.dispose(),
        this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
        for (let t = 0; t < this._lodPlanes.length; t++)
            this._lodPlanes[t].dispose()
    }
    _cleanup(t) {
        this._renderer.setRenderTarget(Mo, yo, So),
        t.scissorTest = !1,
        fr(t, 0, 0, t.width, t.height)
    }
    _fromTexture(t, e) {
        t.mapping === cs || t.mapping === hs ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4),
        Mo = this._renderer.getRenderTarget(),
        yo = this._renderer.getActiveCubeFace(),
        So = this._renderer.getActiveMipmapLevel();
        const n = e || this._allocateTargets();
        return this._textureToCubeUV(t, n),
        this._applyPMREM(n),
        this._cleanup(n),
        n
    }
    _allocateTargets() {
        const t = 3 * Math.max(this._cubeSize, 112)
          , e = 4 * this._cubeSize
          , n = {
            magFilter: _n,
            minFilter: _n,
            generateMipmaps: !1,
            type: Ns,
            format: Tn,
            colorSpace: qn,
            depthBuffer: !1
        }
          , s = vl(t, e, n);
        if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
            this._pingPongRenderTarget !== null && this._dispose(),
            this._pingPongRenderTarget = vl(t, e, n);
            const {_lodMax: r} = this;
            ({sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas} = zp(r)),
            this._blurMaterial = Gp(r, t, e)
        }
        return s
    }
    _compileMaterial(t) {
        const e = new Pe(this._lodPlanes[0],t);
        this._renderer.compile(e, xo)
    }
    _sceneToCubeUV(t, e, n, s) {
        const a = new fn(90,1,e,n)
          , l = [1, -1, 1, 1, 1, 1]
          , c = [1, 1, 1, -1, -1, -1]
          , h = this._renderer
          , u = h.autoClear
          , f = h.toneMapping;
        h.getClearColor(ml),
        h.toneMapping = si,
        h.autoClear = !1;
        const p = new Fs({
            name: "PMREM.Background",
            side: Je,
            depthWrite: !1,
            depthTest: !1
        })
          , g = new Pe(new Rn,p);
        let _ = !1;
        const m = t.background;
        m ? m.isColor && (p.color.copy(m),
        t.background = null,
        _ = !0) : (p.color.copy(ml),
        _ = !0);
        for (let d = 0; d < 6; d++) {
            const x = d % 3;
            x === 0 ? (a.up.set(0, l[d], 0),
            a.lookAt(c[d], 0, 0)) : x === 1 ? (a.up.set(0, 0, l[d]),
            a.lookAt(0, c[d], 0)) : (a.up.set(0, l[d], 0),
            a.lookAt(0, 0, c[d]));
            const v = this._cubeSize;
            fr(s, x * v, d > 2 ? v : 0, v, v),
            h.setRenderTarget(s),
            _ && h.render(g, a),
            h.render(t, a)
        }
        g.geometry.dispose(),
        g.material.dispose(),
        h.toneMapping = f,
        h.autoClear = u,
        t.background = m
    }
    _textureToCubeUV(t, e) {
        const n = this._renderer
          , s = t.mapping === cs || t.mapping === hs;
        s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ml()),
        this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = xl());
        const r = s ? this._cubemapMaterial : this._equirectMaterial
          , o = new Pe(this._lodPlanes[0],r)
          , a = r.uniforms;
        a.envMap.value = t;
        const l = this._cubeSize;
        fr(e, 0, 0, 3 * l, 2 * l),
        n.setRenderTarget(e),
        n.render(o, xo)
    }
    _applyPMREM(t) {
        const e = this._renderer
          , n = e.autoClear;
        e.autoClear = !1;
        for (let s = 1; s < this._lodPlanes.length; s++) {
            const r = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1])
              , o = gl[(s - 1) % gl.length];
            this._blur(t, s - 1, s, r, o)
        }
        e.autoClear = n
    }
    _blur(t, e, n, s, r) {
        const o = this._pingPongRenderTarget;
        this._halfBlur(t, o, e, n, s, "latitudinal", r),
        this._halfBlur(o, t, n, n, s, "longitudinal", r)
    }
    _halfBlur(t, e, n, s, r, o, a) {
        const l = this._renderer
          , c = this._blurMaterial;
        o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
        const h = 3
          , u = new Pe(this._lodPlanes[s],c)
          , f = c.uniforms
          , p = this._sizeLods[n] - 1
          , g = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Si - 1)
          , _ = r / g
          , m = isFinite(r) ? 1 + Math.floor(h * _) : Si;
        m > Si && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);
        const d = [];
        let x = 0;
        for (let R = 0; R < Si; ++R) {
            const K = R / _
              , y = Math.exp(-K * K / 2);
            d.push(y),
            R === 0 ? x += y : R < m && (x += 2 * y)
        }
        for (let R = 0; R < d.length; R++)
            d[R] = d[R] / x;
        f.envMap.value = t.texture,
        f.samples.value = m,
        f.weights.value = d,
        f.latitudinal.value = o === "latitudinal",
        a && (f.poleAxis.value = a);
        const {_lodMax: v} = this;
        f.dTheta.value = g,
        f.mipInt.value = v - n;
        const S = this._sizeLods[s]
          , L = 3 * S * (s > v - ns ? s - v + ns : 0)
          , A = 4 * (this._cubeSize - S);
        fr(e, L, A, 3 * S, 2 * S),
        l.setRenderTarget(e),
        l.render(u, xo)
    }
}
function zp(i) {
    const t = []
      , e = []
      , n = [];
    let s = i;
    const r = i - ns + 1 + pl.length;
    for (let o = 0; o < r; o++) {
        const a = Math.pow(2, s);
        e.push(a);
        let l = 1 / a;
        o > i - ns ? l = pl[o - i + ns - 1] : o === 0 && (l = 0),
        n.push(l);
        const c = 1 / (a - 2)
          , h = -c
          , u = 1 + c
          , f = [h, h, u, h, u, u, h, h, u, u, h, u]
          , p = 6
          , g = 6
          , _ = 3
          , m = 2
          , d = 1
          , x = new Float32Array(_ * g * p)
          , v = new Float32Array(m * g * p)
          , S = new Float32Array(d * g * p);
        for (let A = 0; A < p; A++) {
            const R = A % 3 * 2 / 3 - 1
              , K = A > 2 ? 0 : -1
              , y = [R, K, 0, R + 2 / 3, K, 0, R + 2 / 3, K + 1, 0, R, K, 0, R + 2 / 3, K + 1, 0, R, K + 1, 0];
            x.set(y, _ * g * A),
            v.set(f, m * g * A);
            const T = [A, A, A, A, A, A];
            S.set(T, d * g * A)
        }
        const L = new Qe;
        L.setAttribute("position", new ze(x,_)),
        L.setAttribute("uv", new ze(v,m)),
        L.setAttribute("faceIndex", new ze(S,d)),
        t.push(L),
        s > ns && s--
    }
    return {
        lodPlanes: t,
        sizeLods: e,
        sigmas: n
    }
}
function vl(i, t, e) {
    const n = new Ai(i,t,e);
    return n.texture.mapping = Or,
    n.texture.name = "PMREM.cubeUv",
    n.scissorTest = !0,
    n
}
function fr(i, t, e, n, s) {
    i.viewport.set(t, e, n, s),
    i.scissor.set(t, e, n, s)
}
function Gp(i, t, e) {
    const n = new Float32Array(Si)
      , s = new I(0,1,0);
    return new Cn({
        name: "SphericalGaussianBlur",
        defines: {
            n: Si,
            CUBEUV_TEXEL_WIDTH: 1 / t,
            CUBEUV_TEXEL_HEIGHT: 1 / e,
            CUBEUV_MAX_MIP: `${i}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            samples: {
                value: 1
            },
            weights: {
                value: n
            },
            latitudinal: {
                value: !1
            },
            dTheta: {
                value: 0
            },
            mipInt: {
                value: 0
            },
            poleAxis: {
                value: s
            }
        },
        vertexShader: Jo(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
        blending: ii,
        depthTest: !1,
        depthWrite: !1
    })
}
function xl() {
    return new Cn({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            }
        },
        vertexShader: Jo(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
        blending: ii,
        depthTest: !1,
        depthWrite: !1
    })
}
function Ml() {
    return new Cn({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: Jo(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
        blending: ii,
        depthTest: !1,
        depthWrite: !1
    })
}
function Jo() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}
function Hp(i) {
    let t = new WeakMap
      , e = null;
    function n(a) {
        if (a && a.isTexture) {
            const l = a.mapping
              , c = l === Oo || l === No
              , h = l === cs || l === hs;
            if (c || h)
                if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
                    a.needsPMREMUpdate = !1;
                    let u = t.get(a);
                    return e === null && (e = new _l(i)),
                    u = c ? e.fromEquirectangular(a, u) : e.fromCubemap(a, u),
                    t.set(a, u),
                    u.texture
                } else {
                    if (t.has(a))
                        return t.get(a).texture;
                    {
                        const u = a.image;
                        if (c && u && u.height > 0 || h && u && s(u)) {
                            e === null && (e = new _l(i));
                            const f = c ? e.fromEquirectangular(a) : e.fromCubemap(a);
                            return t.set(a, f),
                            a.addEventListener("dispose", r),
                            f.texture
                        } else
                            return null
                    }
                }
        }
        return a
    }
    function s(a) {
        let l = 0;
        const c = 6;
        for (let h = 0; h < c; h++)
            a[h] !== void 0 && l++;
        return l === c
    }
    function r(a) {
        const l = a.target;
        l.removeEventListener("dispose", r);
        const c = t.get(l);
        c !== void 0 && (t.delete(l),
        c.dispose())
    }
    function o() {
        t = new WeakMap,
        e !== null && (e.dispose(),
        e = null)
    }
    return {
        get: n,
        dispose: o
    }
}
function Vp(i) {
    const t = {};
    function e(n) {
        if (t[n] !== void 0)
            return t[n];
        let s;
        switch (n) {
        case "WEBGL_depth_texture":
            s = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
        case "EXT_texture_filter_anisotropic":
            s = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            s = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            s = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        default:
            s = i.getExtension(n)
        }
        return t[n] = s,
        s
    }
    return {
        has: function(n) {
            return e(n) !== null
        },
        init: function(n) {
            n.isWebGL2 ? (e("EXT_color_buffer_float"),
            e("WEBGL_clip_cull_distance")) : (e("WEBGL_depth_texture"),
            e("OES_texture_float"),
            e("OES_texture_half_float"),
            e("OES_texture_half_float_linear"),
            e("OES_standard_derivatives"),
            e("OES_element_index_uint"),
            e("OES_vertex_array_object"),
            e("ANGLE_instanced_arrays")),
            e("OES_texture_float_linear"),
            e("EXT_color_buffer_half_float"),
            e("WEBGL_multisampled_render_to_texture")
        },
        get: function(n) {
            const s = e(n);
            return s === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."),
            s
        }
    }
}
function Wp(i, t, e, n) {
    const s = {}
      , r = new WeakMap;
    function o(u) {
        const f = u.target;
        f.index !== null && t.remove(f.index);
        for (const g in f.attributes)
            t.remove(f.attributes[g]);
        for (const g in f.morphAttributes) {
            const _ = f.morphAttributes[g];
            for (let m = 0, d = _.length; m < d; m++)
                t.remove(_[m])
        }
        f.removeEventListener("dispose", o),
        delete s[f.id];
        const p = r.get(f);
        p && (t.remove(p),
        r.delete(f)),
        n.releaseStatesOfGeometry(f),
        f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
        e.memory.geometries--
    }
    function a(u, f) {
        return s[f.id] === !0 || (f.addEventListener("dispose", o),
        s[f.id] = !0,
        e.memory.geometries++),
        f
    }
    function l(u) {
        const f = u.attributes;
        for (const g in f)
            t.update(f[g], i.ARRAY_BUFFER);
        const p = u.morphAttributes;
        for (const g in p) {
            const _ = p[g];
            for (let m = 0, d = _.length; m < d; m++)
                t.update(_[m], i.ARRAY_BUFFER)
        }
    }
    function c(u) {
        const f = []
          , p = u.index
          , g = u.attributes.position;
        let _ = 0;
        if (p !== null) {
            const x = p.array;
            _ = p.version;
            for (let v = 0, S = x.length; v < S; v += 3) {
                const L = x[v + 0]
                  , A = x[v + 1]
                  , R = x[v + 2];
                f.push(L, A, A, R, R, L)
            }
        } else if (g !== void 0) {
            const x = g.array;
            _ = g.version;
            for (let v = 0, S = x.length / 3 - 1; v < S; v += 3) {
                const L = v + 0
                  , A = v + 1
                  , R = v + 2;
                f.push(L, A, A, R, R, L)
            }
        } else
            return;
        const m = new (Ac(f) ? Uc : Ic)(f,1);
        m.version = _;
        const d = r.get(u);
        d && t.remove(d),
        r.set(u, m)
    }
    function h(u) {
        const f = r.get(u);
        if (f) {
            const p = u.index;
            p !== null && f.version < p.version && c(u)
        } else
            c(u);
        return r.get(u)
    }
    return {
        get: a,
        update: l,
        getWireframeAttribute: h
    }
}
function Xp(i, t, e, n) {
    const s = n.isWebGL2;
    let r;
    function o(p) {
        r = p
    }
    let a, l;
    function c(p) {
        a = p.type,
        l = p.bytesPerElement
    }
    function h(p, g) {
        i.drawElements(r, g, a, p * l),
        e.update(g, r, 1)
    }
    function u(p, g, _) {
        if (_ === 0)
            return;
        let m, d;
        if (s)
            m = i,
            d = "drawElementsInstanced";
        else if (m = t.get("ANGLE_instanced_arrays"),
        d = "drawElementsInstancedANGLE",
        m === null) {
            console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            return
        }
        m[d](r, g, a, p * l, _),
        e.update(g, r, _)
    }
    function f(p, g, _) {
        if (_ === 0)
            return;
        const m = t.get("WEBGL_multi_draw");
        if (m === null)
            for (let d = 0; d < _; d++)
                this.render(p[d] / l, g[d]);
        else {
            m.multiDrawElementsWEBGL(r, g, 0, a, p, 0, _);
            let d = 0;
            for (let x = 0; x < _; x++)
                d += g[x];
            e.update(d, r, 1)
        }
    }
    this.setMode = o,
    this.setIndex = c,
    this.render = h,
    this.renderInstances = u,
    this.renderMultiDraw = f
}
function qp(i) {
    const t = {
        geometries: 0,
        textures: 0
    }
      , e = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    function n(r, o, a) {
        switch (e.calls++,
        o) {
        case i.TRIANGLES:
            e.triangles += a * (r / 3);
            break;
        case i.LINES:
            e.lines += a * (r / 2);
            break;
        case i.LINE_STRIP:
            e.lines += a * (r - 1);
            break;
        case i.LINE_LOOP:
            e.lines += a * r;
            break;
        case i.POINTS:
            e.points += a * r;
            break;
        default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", o);
            break
        }
    }
    function s() {
        e.calls = 0,
        e.triangles = 0,
        e.points = 0,
        e.lines = 0
    }
    return {
        memory: t,
        render: e,
        programs: null,
        autoReset: !0,
        reset: s,
        update: n
    }
}
function Kp(i, t) {
    return i[0] - t[0]
}
function Yp(i, t) {
    return Math.abs(t[1]) - Math.abs(i[1])
}
function $p(i, t, e) {
    const n = {}
      , s = new Float32Array(8)
      , r = new WeakMap
      , o = new Ge
      , a = [];
    for (let c = 0; c < 8; c++)
        a[c] = [c, 0];
    function l(c, h, u) {
        const f = c.morphTargetInfluences;
        if (t.isWebGL2 === !0) {
            const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color
              , _ = g !== void 0 ? g.length : 0;
            let m = r.get(h);
            if (m === void 0 || m.count !== _) {
                let O = function() {
                    G.dispose(),
                    r.delete(h),
                    h.removeEventListener("dispose", O)
                };
                var p = O;
                m !== void 0 && m.texture.dispose();
                const v = h.morphAttributes.position !== void 0
                  , S = h.morphAttributes.normal !== void 0
                  , L = h.morphAttributes.color !== void 0
                  , A = h.morphAttributes.position || []
                  , R = h.morphAttributes.normal || []
                  , K = h.morphAttributes.color || [];
                let y = 0;
                v === !0 && (y = 1),
                S === !0 && (y = 2),
                L === !0 && (y = 3);
                let T = h.attributes.position.count * y
                  , U = 1;
                T > t.maxTextureSize && (U = Math.ceil(T / t.maxTextureSize),
                T = t.maxTextureSize);
                const k = new Float32Array(T * U * 4 * _)
                  , G = new Lc(k,T,U,_);
                G.type = ni,
                G.needsUpdate = !0;
                const P = y * 4;
                for (let N = 0; N < _; N++) {
                    const B = A[N]
                      , z = R[N]
                      , Y = K[N]
                      , $ = T * U * 4 * N;
                    for (let Q = 0; Q < B.count; Q++) {
                        const et = Q * P;
                        v === !0 && (o.fromBufferAttribute(B, Q),
                        k[$ + et + 0] = o.x,
                        k[$ + et + 1] = o.y,
                        k[$ + et + 2] = o.z,
                        k[$ + et + 3] = 0),
                        S === !0 && (o.fromBufferAttribute(z, Q),
                        k[$ + et + 4] = o.x,
                        k[$ + et + 5] = o.y,
                        k[$ + et + 6] = o.z,
                        k[$ + et + 7] = 0),
                        L === !0 && (o.fromBufferAttribute(Y, Q),
                        k[$ + et + 8] = o.x,
                        k[$ + et + 9] = o.y,
                        k[$ + et + 10] = o.z,
                        k[$ + et + 11] = Y.itemSize === 4 ? o.w : 1)
                    }
                }
                m = {
                    count: _,
                    texture: G,
                    size: new Kt(T,U)
                },
                r.set(h, m),
                h.addEventListener("dispose", O)
            }
            let d = 0;
            for (let v = 0; v < f.length; v++)
                d += f[v];
            const x = h.morphTargetsRelative ? 1 : 1 - d;
            u.getUniforms().setValue(i, "morphTargetBaseInfluence", x),
            u.getUniforms().setValue(i, "morphTargetInfluences", f),
            u.getUniforms().setValue(i, "morphTargetsTexture", m.texture, e),
            u.getUniforms().setValue(i, "morphTargetsTextureSize", m.size)
        } else {
            const g = f === void 0 ? 0 : f.length;
            let _ = n[h.id];
            if (_ === void 0 || _.length !== g) {
                _ = [];
                for (let S = 0; S < g; S++)
                    _[S] = [S, 0];
                n[h.id] = _
            }
            for (let S = 0; S < g; S++) {
                const L = _[S];
                L[0] = S,
                L[1] = f[S]
            }
            _.sort(Yp);
            for (let S = 0; S < 8; S++)
                S < g && _[S][1] ? (a[S][0] = _[S][0],
                a[S][1] = _[S][1]) : (a[S][0] = Number.MAX_SAFE_INTEGER,
                a[S][1] = 0);
            a.sort(Kp);
            const m = h.morphAttributes.position
              , d = h.morphAttributes.normal;
            let x = 0;
            for (let S = 0; S < 8; S++) {
                const L = a[S]
                  , A = L[0]
                  , R = L[1];
                A !== Number.MAX_SAFE_INTEGER && R ? (m && h.getAttribute("morphTarget" + S) !== m[A] && h.setAttribute("morphTarget" + S, m[A]),
                d && h.getAttribute("morphNormal" + S) !== d[A] && h.setAttribute("morphNormal" + S, d[A]),
                s[S] = R,
                x += R) : (m && h.hasAttribute("morphTarget" + S) === !0 && h.deleteAttribute("morphTarget" + S),
                d && h.hasAttribute("morphNormal" + S) === !0 && h.deleteAttribute("morphNormal" + S),
                s[S] = 0)
            }
            const v = h.morphTargetsRelative ? 1 : 1 - x;
            u.getUniforms().setValue(i, "morphTargetBaseInfluence", v),
            u.getUniforms().setValue(i, "morphTargetInfluences", s)
        }
    }
    return {
        update: l
    }
}
function jp(i, t, e, n) {
    let s = new WeakMap;
    function r(l) {
        const c = n.render.frame
          , h = l.geometry
          , u = t.get(l, h);
        if (s.get(u) !== c && (t.update(u),
        s.set(u, c)),
        l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a),
        s.get(l) !== c && (e.update(l.instanceMatrix, i.ARRAY_BUFFER),
        l.instanceColor !== null && e.update(l.instanceColor, i.ARRAY_BUFFER),
        s.set(l, c))),
        l.isSkinnedMesh) {
            const f = l.skeleton;
            s.get(f) !== c && (f.update(),
            s.set(f, c))
        }
        return u
    }
    function o() {
        s = new WeakMap
    }
    function a(l) {
        const c = l.target;
        c.removeEventListener("dispose", a),
        e.remove(c.instanceMatrix),
        c.instanceColor !== null && e.remove(c.instanceColor)
    }
    return {
        update: r,
        dispose: o
    }
}
class zc extends nn {
    constructor(t, e, n, s, r, o, a, l, c, h) {
        if (h = h !== void 0 ? h : Ei,
        h !== Ei && h !== us)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        n === void 0 && h === Ei && (n = ei),
        n === void 0 && h === us && (n = bi),
        super(null, s, r, o, a, l, h, n, c),
        this.isDepthTexture = !0,
        this.image = {
            width: t,
            height: e
        },
        this.magFilter = a !== void 0 ? a : he,
        this.minFilter = l !== void 0 ? l : he,
        this.flipY = !1,
        this.generateMipmaps = !1,
        this.compareFunction = null
    }
    copy(t) {
        return super.copy(t),
        this.compareFunction = t.compareFunction,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return this.compareFunction !== null && (e.compareFunction = this.compareFunction),
        e
    }
}
const Gc = new nn
  , Hc = new zc(1,1);
Hc.compareFunction = wc;
const Vc = new Lc
  , Wc = new Iu
  , Xc = new Fc
  , yl = []
  , Sl = []
  , bl = new Float32Array(16)
  , El = new Float32Array(9)
  , Tl = new Float32Array(4);
function ms(i, t, e) {
    const n = i[0];
    if (n <= 0 || n > 0)
        return i;
    const s = t * e;
    let r = yl[s];
    if (r === void 0 && (r = new Float32Array(s),
    yl[s] = r),
    t !== 0) {
        n.toArray(r, 0);
        for (let o = 1, a = 0; o !== t; ++o)
            a += e,
            i[o].toArray(r, a)
    }
    return r
}
function Ie(i, t) {
    if (i.length !== t.length)
        return !1;
    for (let e = 0, n = i.length; e < n; e++)
        if (i[e] !== t[e])
            return !1;
    return !0
}
function Ue(i, t) {
    for (let e = 0, n = t.length; e < n; e++)
        i[e] = t[e]
}
function Br(i, t) {
    let e = Sl[t];
    e === void 0 && (e = new Int32Array(t),
    Sl[t] = e);
    for (let n = 0; n !== t; ++n)
        e[n] = i.allocateTextureUnit();
    return e
}
function Zp(i, t) {
    const e = this.cache;
    e[0] !== t && (i.uniform1f(this.addr, t),
    e[0] = t)
}
function Jp(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y),
        e[0] = t.x,
        e[1] = t.y);
    else {
        if (Ie(e, t))
            return;
        i.uniform2fv(this.addr, t),
        Ue(e, t)
    }
}
function Qp(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z);
    else if (t.r !== void 0)
        (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b),
        e[0] = t.r,
        e[1] = t.g,
        e[2] = t.b);
    else {
        if (Ie(e, t))
            return;
        i.uniform3fv(this.addr, t),
        Ue(e, t)
    }
}
function tm(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z,
        e[3] = t.w);
    else {
        if (Ie(e, t))
            return;
        i.uniform4fv(this.addr, t),
        Ue(e, t)
    }
}
function em(i, t) {
    const e = this.cache
      , n = t.elements;
    if (n === void 0) {
        if (Ie(e, t))
            return;
        i.uniformMatrix2fv(this.addr, !1, t),
        Ue(e, t)
    } else {
        if (Ie(e, n))
            return;
        Tl.set(n),
        i.uniformMatrix2fv(this.addr, !1, Tl),
        Ue(e, n)
    }
}
function nm(i, t) {
    const e = this.cache
      , n = t.elements;
    if (n === void 0) {
        if (Ie(e, t))
            return;
        i.uniformMatrix3fv(this.addr, !1, t),
        Ue(e, t)
    } else {
        if (Ie(e, n))
            return;
        El.set(n),
        i.uniformMatrix3fv(this.addr, !1, El),
        Ue(e, n)
    }
}
function im(i, t) {
    const e = this.cache
      , n = t.elements;
    if (n === void 0) {
        if (Ie(e, t))
            return;
        i.uniformMatrix4fv(this.addr, !1, t),
        Ue(e, t)
    } else {
        if (Ie(e, n))
            return;
        bl.set(n),
        i.uniformMatrix4fv(this.addr, !1, bl),
        Ue(e, n)
    }
}
function sm(i, t) {
    const e = this.cache;
    e[0] !== t && (i.uniform1i(this.addr, t),
    e[0] = t)
}
function rm(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y),
        e[0] = t.x,
        e[1] = t.y);
    else {
        if (Ie(e, t))
            return;
        i.uniform2iv(this.addr, t),
        Ue(e, t)
    }
}
function om(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z);
    else {
        if (Ie(e, t))
            return;
        i.uniform3iv(this.addr, t),
        Ue(e, t)
    }
}
function am(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z,
        e[3] = t.w);
    else {
        if (Ie(e, t))
            return;
        i.uniform4iv(this.addr, t),
        Ue(e, t)
    }
}
function lm(i, t) {
    const e = this.cache;
    e[0] !== t && (i.uniform1ui(this.addr, t),
    e[0] = t)
}
function cm(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y),
        e[0] = t.x,
        e[1] = t.y);
    else {
        if (Ie(e, t))
            return;
        i.uniform2uiv(this.addr, t),
        Ue(e, t)
    }
}
function hm(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z);
    else {
        if (Ie(e, t))
            return;
        i.uniform3uiv(this.addr, t),
        Ue(e, t)
    }
}
function um(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z,
        e[3] = t.w);
    else {
        if (Ie(e, t))
            return;
        i.uniform4uiv(this.addr, t),
        Ue(e, t)
    }
}
function fm(i, t, e) {
    const n = this.cache
      , s = e.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s),
    n[0] = s);
    const r = this.type === i.SAMPLER_2D_SHADOW ? Hc : Gc;
    e.setTexture2D(t || r, s)
}
function dm(i, t, e) {
    const n = this.cache
      , s = e.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s),
    n[0] = s),
    e.setTexture3D(t || Wc, s)
}
function pm(i, t, e) {
    const n = this.cache
      , s = e.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s),
    n[0] = s),
    e.setTextureCube(t || Xc, s)
}
function mm(i, t, e) {
    const n = this.cache
      , s = e.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s),
    n[0] = s),
    e.setTexture2DArray(t || Vc, s)
}
function gm(i) {
    switch (i) {
    case 5126:
        return Zp;
    case 35664:
        return Jp;
    case 35665:
        return Qp;
    case 35666:
        return tm;
    case 35674:
        return em;
    case 35675:
        return nm;
    case 35676:
        return im;
    case 5124:
    case 35670:
        return sm;
    case 35667:
    case 35671:
        return rm;
    case 35668:
    case 35672:
        return om;
    case 35669:
    case 35673:
        return am;
    case 5125:
        return lm;
    case 36294:
        return cm;
    case 36295:
        return hm;
    case 36296:
        return um;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return fm;
    case 35679:
    case 36299:
    case 36307:
        return dm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return pm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return mm
    }
}
function _m(i, t) {
    i.uniform1fv(this.addr, t)
}
function vm(i, t) {
    const e = ms(t, this.size, 2);
    i.uniform2fv(this.addr, e)
}
function xm(i, t) {
    const e = ms(t, this.size, 3);
    i.uniform3fv(this.addr, e)
}
function Mm(i, t) {
    const e = ms(t, this.size, 4);
    i.uniform4fv(this.addr, e)
}
function ym(i, t) {
    const e = ms(t, this.size, 4);
    i.uniformMatrix2fv(this.addr, !1, e)
}
function Sm(i, t) {
    const e = ms(t, this.size, 9);
    i.uniformMatrix3fv(this.addr, !1, e)
}
function bm(i, t) {
    const e = ms(t, this.size, 16);
    i.uniformMatrix4fv(this.addr, !1, e)
}
function Em(i, t) {
    i.uniform1iv(this.addr, t)
}
function Tm(i, t) {
    i.uniform2iv(this.addr, t)
}
function wm(i, t) {
    i.uniform3iv(this.addr, t)
}
function Am(i, t) {
    i.uniform4iv(this.addr, t)
}
function Rm(i, t) {
    i.uniform1uiv(this.addr, t)
}
function Cm(i, t) {
    i.uniform2uiv(this.addr, t)
}
function Lm(i, t) {
    i.uniform3uiv(this.addr, t)
}
function Pm(i, t) {
    i.uniform4uiv(this.addr, t)
}
function Dm(i, t, e) {
    const n = this.cache
      , s = t.length
      , r = Br(e, s);
    Ie(n, r) || (i.uniform1iv(this.addr, r),
    Ue(n, r));
    for (let o = 0; o !== s; ++o)
        e.setTexture2D(t[o] || Gc, r[o])
}
function Im(i, t, e) {
    const n = this.cache
      , s = t.length
      , r = Br(e, s);
    Ie(n, r) || (i.uniform1iv(this.addr, r),
    Ue(n, r));
    for (let o = 0; o !== s; ++o)
        e.setTexture3D(t[o] || Wc, r[o])
}
function Um(i, t, e) {
    const n = this.cache
      , s = t.length
      , r = Br(e, s);
    Ie(n, r) || (i.uniform1iv(this.addr, r),
    Ue(n, r));
    for (let o = 0; o !== s; ++o)
        e.setTextureCube(t[o] || Xc, r[o])
}
function Om(i, t, e) {
    const n = this.cache
      , s = t.length
      , r = Br(e, s);
    Ie(n, r) || (i.uniform1iv(this.addr, r),
    Ue(n, r));
    for (let o = 0; o !== s; ++o)
        e.setTexture2DArray(t[o] || Vc, r[o])
}
function Nm(i) {
    switch (i) {
    case 5126:
        return _m;
    case 35664:
        return vm;
    case 35665:
        return xm;
    case 35666:
        return Mm;
    case 35674:
        return ym;
    case 35675:
        return Sm;
    case 35676:
        return bm;
    case 5124:
    case 35670:
        return Em;
    case 35667:
    case 35671:
        return Tm;
    case 35668:
    case 35672:
        return wm;
    case 35669:
    case 35673:
        return Am;
    case 5125:
        return Rm;
    case 36294:
        return Cm;
    case 36295:
        return Lm;
    case 36296:
        return Pm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return Dm;
    case 35679:
    case 36299:
    case 36307:
        return Im;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return Um;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return Om
    }
}
class Fm {
    constructor(t, e, n) {
        this.id = t,
        this.addr = n,
        this.cache = [],
        this.type = e.type,
        this.setValue = gm(e.type)
    }
}
class km {
    constructor(t, e, n) {
        this.id = t,
        this.addr = n,
        this.cache = [],
        this.type = e.type,
        this.size = e.size,
        this.setValue = Nm(e.type)
    }
}
class Bm {
    constructor(t) {
        this.id = t,
        this.seq = [],
        this.map = {}
    }
    setValue(t, e, n) {
        const s = this.seq;
        for (let r = 0, o = s.length; r !== o; ++r) {
            const a = s[r];
            a.setValue(t, e[a.id], n)
        }
    }
}
const bo = /(\w+)(\])?(\[|\.)?/g;
function wl(i, t) {
    i.seq.push(t),
    i.map[t.id] = t
}
function zm(i, t, e) {
    const n = i.name
      , s = n.length;
    for (bo.lastIndex = 0; ; ) {
        const r = bo.exec(n)
          , o = bo.lastIndex;
        let a = r[1];
        const l = r[2] === "]"
          , c = r[3];
        if (l && (a = a | 0),
        c === void 0 || c === "[" && o + 2 === s) {
            wl(e, c === void 0 ? new Fm(a,i,t) : new km(a,i,t));
            break
        } else {
            let u = e.map[a];
            u === void 0 && (u = new Bm(a),
            wl(e, u)),
            e = u
        }
    }
}
class wr {
    constructor(t, e) {
        this.seq = [],
        this.map = {};
        const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
        for (let s = 0; s < n; ++s) {
            const r = t.getActiveUniform(e, s)
              , o = t.getUniformLocation(e, r.name);
            zm(r, o, this)
        }
    }
    setValue(t, e, n, s) {
        const r = this.map[e];
        r !== void 0 && r.setValue(t, n, s)
    }
    setOptional(t, e, n) {
        const s = e[n];
        s !== void 0 && this.setValue(t, n, s)
    }
    static upload(t, e, n, s) {
        for (let r = 0, o = e.length; r !== o; ++r) {
            const a = e[r]
              , l = n[a.id];
            l.needsUpdate !== !1 && a.setValue(t, l.value, s)
        }
    }
    static seqWithValue(t, e) {
        const n = [];
        for (let s = 0, r = t.length; s !== r; ++s) {
            const o = t[s];
            o.id in e && n.push(o)
        }
        return n
    }
}
function Al(i, t, e) {
    const n = i.createShader(t);
    return i.shaderSource(n, e),
    i.compileShader(n),
    n
}
const Gm = 37297;
let Hm = 0;
function Vm(i, t) {
    const e = i.split(`
`)
      , n = []
      , s = Math.max(t - 6, 0)
      , r = Math.min(t + 6, e.length);
    for (let o = s; o < r; o++) {
        const a = o + 1;
        n.push(`${a === t ? ">" : " "} ${a}: ${e[o]}`)
    }
    return n.join(`
`)
}
function Wm(i) {
    const t = ae.getPrimaries(ae.workingColorSpace)
      , e = ae.getPrimaries(i);
    let n;
    switch (t === e ? n = "" : t === Lr && e === Cr ? n = "LinearDisplayP3ToLinearSRGB" : t === Cr && e === Lr && (n = "LinearSRGBToLinearDisplayP3"),
    i) {
    case qn:
    case Nr:
        return [n, "LinearTransferOETF"];
    case Me:
    case jo:
        return [n, "sRGBTransferOETF"];
    default:
        return console.warn("THREE.WebGLProgram: Unsupported color space:", i),
        [n, "LinearTransferOETF"]
    }
}
function Rl(i, t, e) {
    const n = i.getShaderParameter(t, i.COMPILE_STATUS)
      , s = i.getShaderInfoLog(t).trim();
    if (n && s === "")
        return "";
    const r = /ERROR: 0:(\d+)/.exec(s);
    if (r) {
        const o = parseInt(r[1]);
        return e.toUpperCase() + `

` + s + `

` + Vm(i.getShaderSource(t), o)
    } else
        return s
}
function Xm(i, t) {
    const e = Wm(t);
    return `vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`
}
function qm(i, t) {
    let e;
    switch (t) {
    case nu:
        e = "Linear";
        break;
    case iu:
        e = "Reinhard";
        break;
    case su:
        e = "OptimizedCineon";
        break;
    case ru:
        e = "ACESFilmic";
        break;
    case au:
        e = "AgX";
        break;
    case ou:
        e = "Custom";
        break;
    default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
        e = "Linear"
    }
    return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }"
}
function Km(i) {
    return [i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(is).join(`
`)
}
function Ym(i) {
    return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : ""].filter(is).join(`
`)
}
function $m(i) {
    const t = [];
    for (const e in i) {
        const n = i[e];
        n !== !1 && t.push("#define " + e + " " + n)
    }
    return t.join(`
`)
}
function jm(i, t) {
    const e = {}
      , n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
    for (let s = 0; s < n; s++) {
        const r = i.getActiveAttrib(t, s)
          , o = r.name;
        let a = 1;
        r.type === i.FLOAT_MAT2 && (a = 2),
        r.type === i.FLOAT_MAT3 && (a = 3),
        r.type === i.FLOAT_MAT4 && (a = 4),
        e[o] = {
            type: r.type,
            location: i.getAttribLocation(t, o),
            locationSize: a
        }
    }
    return e
}
function is(i) {
    return i !== ""
}
function Cl(i, t) {
    const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
    return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
}
function Ll(i, t) {
    return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
}
const Zm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ho(i) {
    return i.replace(Zm, Qm)
}
const Jm = new Map([["encodings_fragment", "colorspace_fragment"], ["encodings_pars_fragment", "colorspace_pars_fragment"], ["output_fragment", "opaque_fragment"]]);
function Qm(i, t) {
    let e = qt[t];
    if (e === void 0) {
        const n = Jm.get(t);
        if (n !== void 0)
            e = qt[n],
            console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
        else
            throw new Error("Can not resolve #include <" + t + ">")
    }
    return Ho(e)
}
const t0 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Pl(i) {
    return i.replace(t0, e0)
}
function e0(i, t, e, n) {
    let s = "";
    for (let r = parseInt(t); r < parseInt(e); r++)
        s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
    return s
}
function Dl(i) {
    let t = "precision " + i.precision + ` float;
precision ` + i.precision + " int;";
    return i.precision === "highp" ? t += `
#define HIGH_PRECISION` : i.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (t += `
#define LOW_PRECISION`),
    t
}
function n0(i) {
    let t = "SHADOWMAP_TYPE_BASIC";
    return i.shadowMapType === mc ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Lh ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Vn && (t = "SHADOWMAP_TYPE_VSM"),
    t
}
function i0(i) {
    let t = "ENVMAP_TYPE_CUBE";
    if (i.envMap)
        switch (i.envMapMode) {
        case cs:
        case hs:
            t = "ENVMAP_TYPE_CUBE";
            break;
        case Or:
            t = "ENVMAP_TYPE_CUBE_UV";
            break
        }
    return t
}
function s0(i) {
    let t = "ENVMAP_MODE_REFLECTION";
    if (i.envMap)
        switch (i.envMapMode) {
        case hs:
            t = "ENVMAP_MODE_REFRACTION";
            break
        }
    return t
}
function r0(i) {
    let t = "ENVMAP_BLENDING_NONE";
    if (i.envMap)
        switch (i.combine) {
        case Yo:
            t = "ENVMAP_BLENDING_MULTIPLY";
            break;
        case tu:
            t = "ENVMAP_BLENDING_MIX";
            break;
        case eu:
            t = "ENVMAP_BLENDING_ADD";
            break
        }
    return t
}
function o0(i) {
    const t = i.envMapCubeUVHeight;
    if (t === null)
        return null;
    const e = Math.log2(t) - 2
      , n = 1 / t;
    return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)),
        texelHeight: n,
        maxMip: e
    }
}
function a0(i, t, e, n) {
    const s = i.getContext()
      , r = e.defines;
    let o = e.vertexShader
      , a = e.fragmentShader;
    const l = n0(e)
      , c = i0(e)
      , h = s0(e)
      , u = r0(e)
      , f = o0(e)
      , p = e.isWebGL2 ? "" : Km(e)
      , g = Ym(e)
      , _ = $m(r)
      , m = s.createProgram();
    let d, x, v = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
    e.isRawShaderMaterial ? (d = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _].filter(is).join(`
`),
    d.length > 0 && (d += `
`),
    x = [p, "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _].filter(is).join(`
`),
    x.length > 0 && (x += `
`)) : (d = [Dl(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + h : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", e.morphColors && e.isWebGL2 ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.useLegacyLights ? "#define LEGACY_LIGHTS" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.logarithmicDepthBuffer && e.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(is).join(`
`),
    x = [p, Dl(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + c : "", e.envMap ? "#define " + h : "", e.envMap ? "#define " + u : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.useLegacyLights ? "#define LEGACY_LIGHTS" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.logarithmicDepthBuffer && e.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== si ? "#define TONE_MAPPING" : "", e.toneMapping !== si ? qt.tonemapping_pars_fragment : "", e.toneMapping !== si ? qm("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", qt.colorspace_pars_fragment, Xm("linearToOutputTexel", e.outputColorSpace), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(is).join(`
`)),
    o = Ho(o),
    o = Cl(o, e),
    o = Ll(o, e),
    a = Ho(a),
    a = Cl(a, e),
    a = Ll(a, e),
    o = Pl(o),
    a = Pl(a),
    e.isWebGL2 && e.isRawShaderMaterial !== !0 && (v = `#version 300 es
`,
    d = [g, "precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + d,
    x = ["precision mediump sampler2DArray;", "#define varying in", e.glslVersion === ja ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === ja ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + x);
    const S = v + d + o
      , L = v + x + a
      , A = Al(s, s.VERTEX_SHADER, S)
      , R = Al(s, s.FRAGMENT_SHADER, L);
    s.attachShader(m, A),
    s.attachShader(m, R),
    e.index0AttributeName !== void 0 ? s.bindAttribLocation(m, 0, e.index0AttributeName) : e.morphTargets === !0 && s.bindAttribLocation(m, 0, "position"),
    s.linkProgram(m);
    function K(k) {
        if (i.debug.checkShaderErrors) {
            const G = s.getProgramInfoLog(m).trim()
              , P = s.getShaderInfoLog(A).trim()
              , O = s.getShaderInfoLog(R).trim();
            let N = !0
              , B = !0;
            if (s.getProgramParameter(m, s.LINK_STATUS) === !1)
                if (N = !1,
                typeof i.debug.onShaderError == "function")
                    i.debug.onShaderError(s, m, A, R);
                else {
                    const z = Rl(s, A, "vertex")
                      , Y = Rl(s, R, "fragment");
                    console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(m, s.VALIDATE_STATUS) + `

Program Info Log: ` + G + `
` + z + `
` + Y)
                }
            else
                G !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", G) : (P === "" || O === "") && (B = !1);
            B && (k.diagnostics = {
                runnable: N,
                programLog: G,
                vertexShader: {
                    log: P,
                    prefix: d
                },
                fragmentShader: {
                    log: O,
                    prefix: x
                }
            })
        }
        s.deleteShader(A),
        s.deleteShader(R),
        y = new wr(s,m),
        T = jm(s, m)
    }
    let y;
    this.getUniforms = function() {
        return y === void 0 && K(this),
        y
    }
    ;
    let T;
    this.getAttributes = function() {
        return T === void 0 && K(this),
        T
    }
    ;
    let U = e.rendererExtensionParallelShaderCompile === !1;
    return this.isReady = function() {
        return U === !1 && (U = s.getProgramParameter(m, Gm)),
        U
    }
    ,
    this.destroy = function() {
        n.releaseStatesOfProgram(this),
        s.deleteProgram(m),
        this.program = void 0
    }
    ,
    this.type = e.shaderType,
    this.name = e.shaderName,
    this.id = Hm++,
    this.cacheKey = t,
    this.usedTimes = 1,
    this.program = m,
    this.vertexShader = A,
    this.fragmentShader = R,
    this
}
let l0 = 0;
class c0 {
    constructor() {
        this.shaderCache = new Map,
        this.materialCache = new Map
    }
    update(t) {
        const e = t.vertexShader
          , n = t.fragmentShader
          , s = this._getShaderStage(e)
          , r = this._getShaderStage(n)
          , o = this._getShaderCacheForMaterial(t);
        return o.has(s) === !1 && (o.add(s),
        s.usedTimes++),
        o.has(r) === !1 && (o.add(r),
        r.usedTimes++),
        this
    }
    remove(t) {
        const e = this.materialCache.get(t);
        for (const n of e)
            n.usedTimes--,
            n.usedTimes === 0 && this.shaderCache.delete(n.code);
        return this.materialCache.delete(t),
        this
    }
    getVertexShaderID(t) {
        return this._getShaderStage(t.vertexShader).id
    }
    getFragmentShaderID(t) {
        return this._getShaderStage(t.fragmentShader).id
    }
    dispose() {
        this.shaderCache.clear(),
        this.materialCache.clear()
    }
    _getShaderCacheForMaterial(t) {
        const e = this.materialCache;
        let n = e.get(t);
        return n === void 0 && (n = new Set,
        e.set(t, n)),
        n
    }
    _getShaderStage(t) {
        const e = this.shaderCache;
        let n = e.get(t);
        return n === void 0 && (n = new h0(t),
        e.set(t, n)),
        n
    }
}
class h0 {
    constructor(t) {
        this.id = l0++,
        this.code = t,
        this.usedTimes = 0
    }
}
function u0(i, t, e, n, s, r, o) {
    const a = new Pc
      , l = new c0
      , c = []
      , h = s.isWebGL2
      , u = s.logarithmicDepthBuffer
      , f = s.vertexTextures;
    let p = s.precision;
    const g = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    };
    function _(y) {
        return y === 0 ? "uv" : `uv${y}`
    }
    function m(y, T, U, k, G) {
        const P = k.fog
          , O = G.geometry
          , N = y.isMeshStandardMaterial ? k.environment : null
          , B = (y.isMeshStandardMaterial ? e : t).get(y.envMap || N)
          , z = B && B.mapping === Or ? B.image.height : null
          , Y = g[y.type];
        y.precision !== null && (p = s.getMaxPrecision(y.precision),
        p !== y.precision && console.warn("THREE.WebGLProgram.getParameters:", y.precision, "not supported, using", p, "instead."));
        const $ = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color
          , Q = $ !== void 0 ? $.length : 0;
        let et = 0;
        O.morphAttributes.position !== void 0 && (et = 1),
        O.morphAttributes.normal !== void 0 && (et = 2),
        O.morphAttributes.color !== void 0 && (et = 3);
        let H, J, lt, mt;
        if (Y) {
            const qe = In[Y];
            H = qe.vertexShader,
            J = qe.fragmentShader
        } else
            H = y.vertexShader,
            J = y.fragmentShader,
            l.update(y),
            lt = l.getVertexShaderID(y),
            mt = l.getFragmentShaderID(y);
        const _t = i.getRenderTarget()
          , wt = G.isInstancedMesh === !0
          , Ot = G.isBatchedMesh === !0
          , At = !!y.map
          , Qt = !!y.matcap
          , V = !!B
          , Oe = !!y.aoMap
          , Tt = !!y.lightMap
          , Dt = !!y.bumpMap
          , Mt = !!y.normalMap
          , ue = !!y.displacementMap
          , Gt = !!y.emissiveMap
          , w = !!y.metalnessMap
          , b = !!y.roughnessMap
          , W = y.anisotropy > 0
          , rt = y.clearcoat > 0
          , it = y.iridescence > 0
          , ot = y.sheen > 0
          , yt = y.transmission > 0
          , ft = W && !!y.anisotropyMap
          , xt = rt && !!y.clearcoatMap
          , Rt = rt && !!y.clearcoatNormalMap
          , kt = rt && !!y.clearcoatRoughnessMap
          , nt = it && !!y.iridescenceMap
          , ie = it && !!y.iridescenceThicknessMap
          , zt = ot && !!y.sheenColorMap
          , It = ot && !!y.sheenRoughnessMap
          , bt = !!y.specularMap
          , vt = !!y.specularColorMap
          , Xt = !!y.specularIntensityMap
          , se = yt && !!y.transmissionMap
          , ye = yt && !!y.thicknessMap
          , $t = !!y.gradientMap
          , ct = !!y.alphaMap
          , D = y.alphaTest > 0
          , dt = !!y.alphaHash
          , pt = !!y.extensions
          , Nt = !!O.attributes.uv1
          , Ct = !!O.attributes.uv2
          , fe = !!O.attributes.uv3;
        let de = si;
        return y.toneMapped && (_t === null || _t.isXRRenderTarget === !0) && (de = i.toneMapping),
        {
            isWebGL2: h,
            shaderID: Y,
            shaderType: y.type,
            shaderName: y.name,
            vertexShader: H,
            fragmentShader: J,
            defines: y.defines,
            customVertexShaderID: lt,
            customFragmentShaderID: mt,
            isRawShaderMaterial: y.isRawShaderMaterial === !0,
            glslVersion: y.glslVersion,
            precision: p,
            batching: Ot,
            instancing: wt,
            instancingColor: wt && G.instanceColor !== null,
            supportsVertexTextures: f,
            outputColorSpace: _t === null ? i.outputColorSpace : _t.isXRRenderTarget === !0 ? _t.texture.colorSpace : qn,
            map: At,
            matcap: Qt,
            envMap: V,
            envMapMode: V && B.mapping,
            envMapCubeUVHeight: z,
            aoMap: Oe,
            lightMap: Tt,
            bumpMap: Dt,
            normalMap: Mt,
            displacementMap: f && ue,
            emissiveMap: Gt,
            normalMapObjectSpace: Mt && y.normalMapType === xu,
            normalMapTangentSpace: Mt && y.normalMapType === Tc,
            metalnessMap: w,
            roughnessMap: b,
            anisotropy: W,
            anisotropyMap: ft,
            clearcoat: rt,
            clearcoatMap: xt,
            clearcoatNormalMap: Rt,
            clearcoatRoughnessMap: kt,
            iridescence: it,
            iridescenceMap: nt,
            iridescenceThicknessMap: ie,
            sheen: ot,
            sheenColorMap: zt,
            sheenRoughnessMap: It,
            specularMap: bt,
            specularColorMap: vt,
            specularIntensityMap: Xt,
            transmission: yt,
            transmissionMap: se,
            thicknessMap: ye,
            gradientMap: $t,
            opaque: y.transparent === !1 && y.blending === rs,
            alphaMap: ct,
            alphaTest: D,
            alphaHash: dt,
            combine: y.combine,
            mapUv: At && _(y.map.channel),
            aoMapUv: Oe && _(y.aoMap.channel),
            lightMapUv: Tt && _(y.lightMap.channel),
            bumpMapUv: Dt && _(y.bumpMap.channel),
            normalMapUv: Mt && _(y.normalMap.channel),
            displacementMapUv: ue && _(y.displacementMap.channel),
            emissiveMapUv: Gt && _(y.emissiveMap.channel),
            metalnessMapUv: w && _(y.metalnessMap.channel),
            roughnessMapUv: b && _(y.roughnessMap.channel),
            anisotropyMapUv: ft && _(y.anisotropyMap.channel),
            clearcoatMapUv: xt && _(y.clearcoatMap.channel),
            clearcoatNormalMapUv: Rt && _(y.clearcoatNormalMap.channel),
            clearcoatRoughnessMapUv: kt && _(y.clearcoatRoughnessMap.channel),
            iridescenceMapUv: nt && _(y.iridescenceMap.channel),
            iridescenceThicknessMapUv: ie && _(y.iridescenceThicknessMap.channel),
            sheenColorMapUv: zt && _(y.sheenColorMap.channel),
            sheenRoughnessMapUv: It && _(y.sheenRoughnessMap.channel),
            specularMapUv: bt && _(y.specularMap.channel),
            specularColorMapUv: vt && _(y.specularColorMap.channel),
            specularIntensityMapUv: Xt && _(y.specularIntensityMap.channel),
            transmissionMapUv: se && _(y.transmissionMap.channel),
            thicknessMapUv: ye && _(y.thicknessMap.channel),
            alphaMapUv: ct && _(y.alphaMap.channel),
            vertexTangents: !!O.attributes.tangent && (Mt || W),
            vertexColors: y.vertexColors,
            vertexAlphas: y.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4,
            vertexUv1s: Nt,
            vertexUv2s: Ct,
            vertexUv3s: fe,
            pointsUvs: G.isPoints === !0 && !!O.attributes.uv && (At || ct),
            fog: !!P,
            useFog: y.fog === !0,
            fogExp2: P && P.isFogExp2,
            flatShading: y.flatShading === !0,
            sizeAttenuation: y.sizeAttenuation === !0,
            logarithmicDepthBuffer: u,
            skinning: G.isSkinnedMesh === !0,
            morphTargets: O.morphAttributes.position !== void 0,
            morphNormals: O.morphAttributes.normal !== void 0,
            morphColors: O.morphAttributes.color !== void 0,
            morphTargetsCount: Q,
            morphTextureStride: et,
            numDirLights: T.directional.length,
            numPointLights: T.point.length,
            numSpotLights: T.spot.length,
            numSpotLightMaps: T.spotLightMap.length,
            numRectAreaLights: T.rectArea.length,
            numHemiLights: T.hemi.length,
            numDirLightShadows: T.directionalShadowMap.length,
            numPointLightShadows: T.pointShadowMap.length,
            numSpotLightShadows: T.spotShadowMap.length,
            numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
            numLightProbes: T.numLightProbes,
            numClippingPlanes: o.numPlanes,
            numClipIntersection: o.numIntersection,
            dithering: y.dithering,
            shadowMapEnabled: i.shadowMap.enabled && U.length > 0,
            shadowMapType: i.shadowMap.type,
            toneMapping: de,
            useLegacyLights: i._useLegacyLights,
            decodeVideoTexture: At && y.map.isVideoTexture === !0 && ae.getTransfer(y.map.colorSpace) === _e,
            premultipliedAlpha: y.premultipliedAlpha,
            doubleSided: y.side === bn,
            flipSided: y.side === Je,
            useDepthPacking: y.depthPacking >= 0,
            depthPacking: y.depthPacking || 0,
            index0AttributeName: y.index0AttributeName,
            extensionDerivatives: pt && y.extensions.derivatives === !0,
            extensionFragDepth: pt && y.extensions.fragDepth === !0,
            extensionDrawBuffers: pt && y.extensions.drawBuffers === !0,
            extensionShaderTextureLOD: pt && y.extensions.shaderTextureLOD === !0,
            extensionClipCullDistance: pt && y.extensions.clipCullDistance && n.has("WEBGL_clip_cull_distance"),
            rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
            rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
            rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
            rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
            customProgramCacheKey: y.customProgramCacheKey()
        }
    }
    function d(y) {
        const T = [];
        if (y.shaderID ? T.push(y.shaderID) : (T.push(y.customVertexShaderID),
        T.push(y.customFragmentShaderID)),
        y.defines !== void 0)
            for (const U in y.defines)
                T.push(U),
                T.push(y.defines[U]);
        return y.isRawShaderMaterial === !1 && (x(T, y),
        v(T, y),
        T.push(i.outputColorSpace)),
        T.push(y.customProgramCacheKey),
        T.join()
    }
    function x(y, T) {
        y.push(T.precision),
        y.push(T.outputColorSpace),
        y.push(T.envMapMode),
        y.push(T.envMapCubeUVHeight),
        y.push(T.mapUv),
        y.push(T.alphaMapUv),
        y.push(T.lightMapUv),
        y.push(T.aoMapUv),
        y.push(T.bumpMapUv),
        y.push(T.normalMapUv),
        y.push(T.displacementMapUv),
        y.push(T.emissiveMapUv),
        y.push(T.metalnessMapUv),
        y.push(T.roughnessMapUv),
        y.push(T.anisotropyMapUv),
        y.push(T.clearcoatMapUv),
        y.push(T.clearcoatNormalMapUv),
        y.push(T.clearcoatRoughnessMapUv),
        y.push(T.iridescenceMapUv),
        y.push(T.iridescenceThicknessMapUv),
        y.push(T.sheenColorMapUv),
        y.push(T.sheenRoughnessMapUv),
        y.push(T.specularMapUv),
        y.push(T.specularColorMapUv),
        y.push(T.specularIntensityMapUv),
        y.push(T.transmissionMapUv),
        y.push(T.thicknessMapUv),
        y.push(T.combine),
        y.push(T.fogExp2),
        y.push(T.sizeAttenuation),
        y.push(T.morphTargetsCount),
        y.push(T.morphAttributeCount),
        y.push(T.numDirLights),
        y.push(T.numPointLights),
        y.push(T.numSpotLights),
        y.push(T.numSpotLightMaps),
        y.push(T.numHemiLights),
        y.push(T.numRectAreaLights),
        y.push(T.numDirLightShadows),
        y.push(T.numPointLightShadows),
        y.push(T.numSpotLightShadows),
        y.push(T.numSpotLightShadowsWithMaps),
        y.push(T.numLightProbes),
        y.push(T.shadowMapType),
        y.push(T.toneMapping),
        y.push(T.numClippingPlanes),
        y.push(T.numClipIntersection),
        y.push(T.depthPacking)
    }
    function v(y, T) {
        a.disableAll(),
        T.isWebGL2 && a.enable(0),
        T.supportsVertexTextures && a.enable(1),
        T.instancing && a.enable(2),
        T.instancingColor && a.enable(3),
        T.matcap && a.enable(4),
        T.envMap && a.enable(5),
        T.normalMapObjectSpace && a.enable(6),
        T.normalMapTangentSpace && a.enable(7),
        T.clearcoat && a.enable(8),
        T.iridescence && a.enable(9),
        T.alphaTest && a.enable(10),
        T.vertexColors && a.enable(11),
        T.vertexAlphas && a.enable(12),
        T.vertexUv1s && a.enable(13),
        T.vertexUv2s && a.enable(14),
        T.vertexUv3s && a.enable(15),
        T.vertexTangents && a.enable(16),
        T.anisotropy && a.enable(17),
        T.alphaHash && a.enable(18),
        T.batching && a.enable(19),
        y.push(a.mask),
        a.disableAll(),
        T.fog && a.enable(0),
        T.useFog && a.enable(1),
        T.flatShading && a.enable(2),
        T.logarithmicDepthBuffer && a.enable(3),
        T.skinning && a.enable(4),
        T.morphTargets && a.enable(5),
        T.morphNormals && a.enable(6),
        T.morphColors && a.enable(7),
        T.premultipliedAlpha && a.enable(8),
        T.shadowMapEnabled && a.enable(9),
        T.useLegacyLights && a.enable(10),
        T.doubleSided && a.enable(11),
        T.flipSided && a.enable(12),
        T.useDepthPacking && a.enable(13),
        T.dithering && a.enable(14),
        T.transmission && a.enable(15),
        T.sheen && a.enable(16),
        T.opaque && a.enable(17),
        T.pointsUvs && a.enable(18),
        T.decodeVideoTexture && a.enable(19),
        y.push(a.mask)
    }
    function S(y) {
        const T = g[y.type];
        let U;
        if (T) {
            const k = In[T];
            U = qu.clone(k.uniforms)
        } else
            U = y.uniforms;
        return U
    }
    function L(y, T) {
        let U;
        for (let k = 0, G = c.length; k < G; k++) {
            const P = c[k];
            if (P.cacheKey === T) {
                U = P,
                ++U.usedTimes;
                break
            }
        }
        return U === void 0 && (U = new a0(i,T,y,r),
        c.push(U)),
        U
    }
    function A(y) {
        if (--y.usedTimes === 0) {
            const T = c.indexOf(y);
            c[T] = c[c.length - 1],
            c.pop(),
            y.destroy()
        }
    }
    function R(y) {
        l.remove(y)
    }
    function K() {
        l.dispose()
    }
    return {
        getParameters: m,
        getProgramCacheKey: d,
        getUniforms: S,
        acquireProgram: L,
        releaseProgram: A,
        releaseShaderCache: R,
        programs: c,
        dispose: K
    }
}
function f0() {
    let i = new WeakMap;
    function t(r) {
        let o = i.get(r);
        return o === void 0 && (o = {},
        i.set(r, o)),
        o
    }
    function e(r) {
        i.delete(r)
    }
    function n(r, o, a) {
        i.get(r)[o] = a
    }
    function s() {
        i = new WeakMap
    }
    return {
        get: t,
        remove: e,
        update: n,
        dispose: s
    }
}
function d0(i, t) {
    return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id
}
function Il(i, t) {
    return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id
}
function Ul() {
    const i = [];
    let t = 0;
    const e = []
      , n = []
      , s = [];
    function r() {
        t = 0,
        e.length = 0,
        n.length = 0,
        s.length = 0
    }
    function o(u, f, p, g, _, m) {
        let d = i[t];
        return d === void 0 ? (d = {
            id: u.id,
            object: u,
            geometry: f,
            material: p,
            groupOrder: g,
            renderOrder: u.renderOrder,
            z: _,
            group: m
        },
        i[t] = d) : (d.id = u.id,
        d.object = u,
        d.geometry = f,
        d.material = p,
        d.groupOrder = g,
        d.renderOrder = u.renderOrder,
        d.z = _,
        d.group = m),
        t++,
        d
    }
    function a(u, f, p, g, _, m) {
        const d = o(u, f, p, g, _, m);
        p.transmission > 0 ? n.push(d) : p.transparent === !0 ? s.push(d) : e.push(d)
    }
    function l(u, f, p, g, _, m) {
        const d = o(u, f, p, g, _, m);
        p.transmission > 0 ? n.unshift(d) : p.transparent === !0 ? s.unshift(d) : e.unshift(d)
    }
    function c(u, f) {
        e.length > 1 && e.sort(u || d0),
        n.length > 1 && n.sort(f || Il),
        s.length > 1 && s.sort(f || Il)
    }
    function h() {
        for (let u = t, f = i.length; u < f; u++) {
            const p = i[u];
            if (p.id === null)
                break;
            p.id = null,
            p.object = null,
            p.geometry = null,
            p.material = null,
            p.group = null
        }
    }
    return {
        opaque: e,
        transmissive: n,
        transparent: s,
        init: r,
        push: a,
        unshift: l,
        finish: h,
        sort: c
    }
}
function p0() {
    let i = new WeakMap;
    function t(n, s) {
        const r = i.get(n);
        let o;
        return r === void 0 ? (o = new Ul,
        i.set(n, [o])) : s >= r.length ? (o = new Ul,
        r.push(o)) : o = r[s],
        o
    }
    function e() {
        i = new WeakMap
    }
    return {
        get: t,
        dispose: e
    }
}
function m0() {
    const i = {};
    return {
        get: function(t) {
            if (i[t.id] !== void 0)
                return i[t.id];
            let e;
            switch (t.type) {
            case "DirectionalLight":
                e = {
                    direction: new I,
                    color: new Bt
                };
                break;
            case "SpotLight":
                e = {
                    position: new I,
                    direction: new I,
                    color: new Bt,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0
                };
                break;
            case "PointLight":
                e = {
                    position: new I,
                    color: new Bt,
                    distance: 0,
                    decay: 0
                };
                break;
            case "HemisphereLight":
                e = {
                    direction: new I,
                    skyColor: new Bt,
                    groundColor: new Bt
                };
                break;
            case "RectAreaLight":
                e = {
                    color: new Bt,
                    position: new I,
                    halfWidth: new I,
                    halfHeight: new I
                };
                break
            }
            return i[t.id] = e,
            e
        }
    }
}
function g0() {
    const i = {};
    return {
        get: function(t) {
            if (i[t.id] !== void 0)
                return i[t.id];
            let e;
            switch (t.type) {
            case "DirectionalLight":
                e = {
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Kt
                };
                break;
            case "SpotLight":
                e = {
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Kt
                };
                break;
            case "PointLight":
                e = {
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Kt,
                    shadowCameraNear: 1,
                    shadowCameraFar: 1e3
                };
                break
            }
            return i[t.id] = e,
            e
        }
    }
}
let _0 = 0;
function v0(i, t) {
    return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0)
}
function x0(i, t) {
    const e = new m0
      , n = g0()
      , s = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
            numSpotMaps: -1,
            numLightProbes: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
        numLightProbes: 0
    };
    for (let h = 0; h < 9; h++)
        s.probe.push(new I);
    const r = new I
      , o = new be
      , a = new be;
    function l(h, u) {
        let f = 0
          , p = 0
          , g = 0;
        for (let k = 0; k < 9; k++)
            s.probe[k].set(0, 0, 0);
        let _ = 0
          , m = 0
          , d = 0
          , x = 0
          , v = 0
          , S = 0
          , L = 0
          , A = 0
          , R = 0
          , K = 0
          , y = 0;
        h.sort(v0);
        const T = u === !0 ? Math.PI : 1;
        for (let k = 0, G = h.length; k < G; k++) {
            const P = h[k]
              , O = P.color
              , N = P.intensity
              , B = P.distance
              , z = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
            if (P.isAmbientLight)
                f += O.r * N * T,
                p += O.g * N * T,
                g += O.b * N * T;
            else if (P.isLightProbe) {
                for (let Y = 0; Y < 9; Y++)
                    s.probe[Y].addScaledVector(P.sh.coefficients[Y], N);
                y++
            } else if (P.isDirectionalLight) {
                const Y = e.get(P);
                if (Y.color.copy(P.color).multiplyScalar(P.intensity * T),
                P.castShadow) {
                    const $ = P.shadow
                      , Q = n.get(P);
                    Q.shadowBias = $.bias,
                    Q.shadowNormalBias = $.normalBias,
                    Q.shadowRadius = $.radius,
                    Q.shadowMapSize = $.mapSize,
                    s.directionalShadow[_] = Q,
                    s.directionalShadowMap[_] = z,
                    s.directionalShadowMatrix[_] = P.shadow.matrix,
                    S++
                }
                s.directional[_] = Y,
                _++
            } else if (P.isSpotLight) {
                const Y = e.get(P);
                Y.position.setFromMatrixPosition(P.matrixWorld),
                Y.color.copy(O).multiplyScalar(N * T),
                Y.distance = B,
                Y.coneCos = Math.cos(P.angle),
                Y.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)),
                Y.decay = P.decay,
                s.spot[d] = Y;
                const $ = P.shadow;
                if (P.map && (s.spotLightMap[R] = P.map,
                R++,
                $.updateMatrices(P),
                P.castShadow && K++),
                s.spotLightMatrix[d] = $.matrix,
                P.castShadow) {
                    const Q = n.get(P);
                    Q.shadowBias = $.bias,
                    Q.shadowNormalBias = $.normalBias,
                    Q.shadowRadius = $.radius,
                    Q.shadowMapSize = $.mapSize,
                    s.spotShadow[d] = Q,
                    s.spotShadowMap[d] = z,
                    A++
                }
                d++
            } else if (P.isRectAreaLight) {
                const Y = e.get(P);
                Y.color.copy(O).multiplyScalar(N),
                Y.halfWidth.set(P.width * .5, 0, 0),
                Y.halfHeight.set(0, P.height * .5, 0),
                s.rectArea[x] = Y,
                x++
            } else if (P.isPointLight) {
                const Y = e.get(P);
                if (Y.color.copy(P.color).multiplyScalar(P.intensity * T),
                Y.distance = P.distance,
                Y.decay = P.decay,
                P.castShadow) {
                    const $ = P.shadow
                      , Q = n.get(P);
                    Q.shadowBias = $.bias,
                    Q.shadowNormalBias = $.normalBias,
                    Q.shadowRadius = $.radius,
                    Q.shadowMapSize = $.mapSize,
                    Q.shadowCameraNear = $.camera.near,
                    Q.shadowCameraFar = $.camera.far,
                    s.pointShadow[m] = Q,
                    s.pointShadowMap[m] = z,
                    s.pointShadowMatrix[m] = P.shadow.matrix,
                    L++
                }
                s.point[m] = Y,
                m++
            } else if (P.isHemisphereLight) {
                const Y = e.get(P);
                Y.skyColor.copy(P.color).multiplyScalar(N * T),
                Y.groundColor.copy(P.groundColor).multiplyScalar(N * T),
                s.hemi[v] = Y,
                v++
            }
        }
        x > 0 && (t.isWebGL2 ? i.has("OES_texture_float_linear") === !0 ? (s.rectAreaLTC1 = ht.LTC_FLOAT_1,
        s.rectAreaLTC2 = ht.LTC_FLOAT_2) : (s.rectAreaLTC1 = ht.LTC_HALF_1,
        s.rectAreaLTC2 = ht.LTC_HALF_2) : i.has("OES_texture_float_linear") === !0 ? (s.rectAreaLTC1 = ht.LTC_FLOAT_1,
        s.rectAreaLTC2 = ht.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (s.rectAreaLTC1 = ht.LTC_HALF_1,
        s.rectAreaLTC2 = ht.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
        s.ambient[0] = f,
        s.ambient[1] = p,
        s.ambient[2] = g;
        const U = s.hash;
        (U.directionalLength !== _ || U.pointLength !== m || U.spotLength !== d || U.rectAreaLength !== x || U.hemiLength !== v || U.numDirectionalShadows !== S || U.numPointShadows !== L || U.numSpotShadows !== A || U.numSpotMaps !== R || U.numLightProbes !== y) && (s.directional.length = _,
        s.spot.length = d,
        s.rectArea.length = x,
        s.point.length = m,
        s.hemi.length = v,
        s.directionalShadow.length = S,
        s.directionalShadowMap.length = S,
        s.pointShadow.length = L,
        s.pointShadowMap.length = L,
        s.spotShadow.length = A,
        s.spotShadowMap.length = A,
        s.directionalShadowMatrix.length = S,
        s.pointShadowMatrix.length = L,
        s.spotLightMatrix.length = A + R - K,
        s.spotLightMap.length = R,
        s.numSpotLightShadowsWithMaps = K,
        s.numLightProbes = y,
        U.directionalLength = _,
        U.pointLength = m,
        U.spotLength = d,
        U.rectAreaLength = x,
        U.hemiLength = v,
        U.numDirectionalShadows = S,
        U.numPointShadows = L,
        U.numSpotShadows = A,
        U.numSpotMaps = R,
        U.numLightProbes = y,
        s.version = _0++)
    }
    function c(h, u) {
        let f = 0
          , p = 0
          , g = 0
          , _ = 0
          , m = 0;
        const d = u.matrixWorldInverse;
        for (let x = 0, v = h.length; x < v; x++) {
            const S = h[x];
            if (S.isDirectionalLight) {
                const L = s.directional[f];
                L.direction.setFromMatrixPosition(S.matrixWorld),
                r.setFromMatrixPosition(S.target.matrixWorld),
                L.direction.sub(r),
                L.direction.transformDirection(d),
                f++
            } else if (S.isSpotLight) {
                const L = s.spot[g];
                L.position.setFromMatrixPosition(S.matrixWorld),
                L.position.applyMatrix4(d),
                L.direction.setFromMatrixPosition(S.matrixWorld),
                r.setFromMatrixPosition(S.target.matrixWorld),
                L.direction.sub(r),
                L.direction.transformDirection(d),
                g++
            } else if (S.isRectAreaLight) {
                const L = s.rectArea[_];
                L.position.setFromMatrixPosition(S.matrixWorld),
                L.position.applyMatrix4(d),
                a.identity(),
                o.copy(S.matrixWorld),
                o.premultiply(d),
                a.extractRotation(o),
                L.halfWidth.set(S.width * .5, 0, 0),
                L.halfHeight.set(0, S.height * .5, 0),
                L.halfWidth.applyMatrix4(a),
                L.halfHeight.applyMatrix4(a),
                _++
            } else if (S.isPointLight) {
                const L = s.point[p];
                L.position.setFromMatrixPosition(S.matrixWorld),
                L.position.applyMatrix4(d),
                p++
            } else if (S.isHemisphereLight) {
                const L = s.hemi[m];
                L.direction.setFromMatrixPosition(S.matrixWorld),
                L.direction.transformDirection(d),
                m++
            }
        }
    }
    return {
        setup: l,
        setupView: c,
        state: s
    }
}
function Ol(i, t) {
    const e = new x0(i,t)
      , n = []
      , s = [];
    function r() {
        n.length = 0,
        s.length = 0
    }
    function o(u) {
        n.push(u)
    }
    function a(u) {
        s.push(u)
    }
    function l(u) {
        e.setup(n, u)
    }
    function c(u) {
        e.setupView(n, u)
    }
    return {
        init: r,
        state: {
            lightsArray: n,
            shadowsArray: s,
            lights: e
        },
        setupLights: l,
        setupLightsView: c,
        pushLight: o,
        pushShadow: a
    }
}
function M0(i, t) {
    let e = new WeakMap;
    function n(r, o=0) {
        const a = e.get(r);
        let l;
        return a === void 0 ? (l = new Ol(i,t),
        e.set(r, [l])) : o >= a.length ? (l = new Ol(i,t),
        a.push(l)) : l = a[o],
        l
    }
    function s() {
        e = new WeakMap
    }
    return {
        get: n,
        dispose: s
    }
}
class y0 extends ci {
    constructor(t) {
        super(),
        this.isMeshDepthMaterial = !0,
        this.type = "MeshDepthMaterial",
        this.depthPacking = _u,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.depthPacking = t.depthPacking,
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this
    }
}
class S0 extends ci {
    constructor(t) {
        super(),
        this.isMeshDistanceMaterial = !0,
        this.type = "MeshDistanceMaterial",
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this
    }
}
const b0 = `void main() {
	gl_Position = vec4( position, 1.0 );
}`
  , E0 = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function T0(i, t, e) {
    let n = new Zo;
    const s = new Kt
      , r = new Kt
      , o = new Ge
      , a = new y0({
        depthPacking: vu
    })
      , l = new S0
      , c = {}
      , h = e.maxTextureSize
      , u = {
        [ai]: Je,
        [Je]: ai,
        [bn]: bn
    }
      , f = new Cn({
        defines: {
            VSM_SAMPLES: 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new Kt
            },
            radius: {
                value: 4
            }
        },
        vertexShader: b0,
        fragmentShader: E0
    })
      , p = f.clone();
    p.defines.HORIZONTAL_PASS = 1;
    const g = new Qe;
    g.setAttribute("position", new ze(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
    const _ = new Pe(g,f)
      , m = this;
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = mc;
    let d = this.type;
    this.render = function(A, R, K) {
        if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || A.length === 0)
            return;
        const y = i.getRenderTarget()
          , T = i.getActiveCubeFace()
          , U = i.getActiveMipmapLevel()
          , k = i.state;
        k.setBlending(ii),
        k.buffers.color.setClear(1, 1, 1, 1),
        k.buffers.depth.setTest(!0),
        k.setScissorTest(!1);
        const G = d !== Vn && this.type === Vn
          , P = d === Vn && this.type !== Vn;
        for (let O = 0, N = A.length; O < N; O++) {
            const B = A[O]
              , z = B.shadow;
            if (z === void 0) {
                console.warn("THREE.WebGLShadowMap:", B, "has no shadow.");
                continue
            }
            if (z.autoUpdate === !1 && z.needsUpdate === !1)
                continue;
            s.copy(z.mapSize);
            const Y = z.getFrameExtents();
            if (s.multiply(Y),
            r.copy(z.mapSize),
            (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / Y.x),
            s.x = r.x * Y.x,
            z.mapSize.x = r.x),
            s.y > h && (r.y = Math.floor(h / Y.y),
            s.y = r.y * Y.y,
            z.mapSize.y = r.y)),
            z.map === null || G === !0 || P === !0) {
                const Q = this.type !== Vn ? {
                    minFilter: he,
                    magFilter: he
                } : {};
                z.map !== null && z.map.dispose(),
                z.map = new Ai(s.x,s.y,Q),
                z.map.texture.name = B.name + ".shadowMap",
                z.camera.updateProjectionMatrix()
            }
            i.setRenderTarget(z.map),
            i.clear();
            const $ = z.getViewportCount();
            for (let Q = 0; Q < $; Q++) {
                const et = z.getViewport(Q);
                o.set(r.x * et.x, r.y * et.y, r.x * et.z, r.y * et.w),
                k.viewport(o),
                z.updateMatrices(B, Q),
                n = z.getFrustum(),
                S(R, K, z.camera, B, this.type)
            }
            z.isPointLightShadow !== !0 && this.type === Vn && x(z, K),
            z.needsUpdate = !1
        }
        d = this.type,
        m.needsUpdate = !1,
        i.setRenderTarget(y, T, U)
    }
    ;
    function x(A, R) {
        const K = t.update(_);
        f.defines.VSM_SAMPLES !== A.blurSamples && (f.defines.VSM_SAMPLES = A.blurSamples,
        p.defines.VSM_SAMPLES = A.blurSamples,
        f.needsUpdate = !0,
        p.needsUpdate = !0),
        A.mapPass === null && (A.mapPass = new Ai(s.x,s.y)),
        f.uniforms.shadow_pass.value = A.map.texture,
        f.uniforms.resolution.value = A.mapSize,
        f.uniforms.radius.value = A.radius,
        i.setRenderTarget(A.mapPass),
        i.clear(),
        i.renderBufferDirect(R, null, K, f, _, null),
        p.uniforms.shadow_pass.value = A.mapPass.texture,
        p.uniforms.resolution.value = A.mapSize,
        p.uniforms.radius.value = A.radius,
        i.setRenderTarget(A.map),
        i.clear(),
        i.renderBufferDirect(R, null, K, p, _, null)
    }
    function v(A, R, K, y) {
        let T = null;
        const U = K.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
        if (U !== void 0)
            T = U;
        else if (T = K.isPointLight === !0 ? l : a,
        i.localClippingEnabled && R.clipShadows === !0 && Array.isArray(R.clippingPlanes) && R.clippingPlanes.length !== 0 || R.displacementMap && R.displacementScale !== 0 || R.alphaMap && R.alphaTest > 0 || R.map && R.alphaTest > 0) {
            const k = T.uuid
              , G = R.uuid;
            let P = c[k];
            P === void 0 && (P = {},
            c[k] = P);
            let O = P[G];
            O === void 0 && (O = T.clone(),
            P[G] = O,
            R.addEventListener("dispose", L)),
            T = O
        }
        if (T.visible = R.visible,
        T.wireframe = R.wireframe,
        y === Vn ? T.side = R.shadowSide !== null ? R.shadowSide : R.side : T.side = R.shadowSide !== null ? R.shadowSide : u[R.side],
        T.alphaMap = R.alphaMap,
        T.alphaTest = R.alphaTest,
        T.map = R.map,
        T.clipShadows = R.clipShadows,
        T.clippingPlanes = R.clippingPlanes,
        T.clipIntersection = R.clipIntersection,
        T.displacementMap = R.displacementMap,
        T.displacementScale = R.displacementScale,
        T.displacementBias = R.displacementBias,
        T.wireframeLinewidth = R.wireframeLinewidth,
        T.linewidth = R.linewidth,
        K.isPointLight === !0 && T.isMeshDistanceMaterial === !0) {
            const k = i.properties.get(T);
            k.light = K
        }
        return T
    }
    function S(A, R, K, y, T) {
        if (A.visible === !1)
            return;
        if (A.layers.test(R.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && T === Vn) && (!A.frustumCulled || n.intersectsObject(A))) {
            A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse, A.matrixWorld);
            const G = t.update(A)
              , P = A.material;
            if (Array.isArray(P)) {
                const O = G.groups;
                for (let N = 0, B = O.length; N < B; N++) {
                    const z = O[N]
                      , Y = P[z.materialIndex];
                    if (Y && Y.visible) {
                        const $ = v(A, Y, y, T);
                        A.onBeforeShadow(i, A, R, K, G, $, z),
                        i.renderBufferDirect(K, null, G, $, A, z),
                        A.onAfterShadow(i, A, R, K, G, $, z)
                    }
                }
            } else if (P.visible) {
                const O = v(A, P, y, T);
                A.onBeforeShadow(i, A, R, K, G, O, null),
                i.renderBufferDirect(K, null, G, O, A, null),
                A.onAfterShadow(i, A, R, K, G, O, null)
            }
        }
        const k = A.children;
        for (let G = 0, P = k.length; G < P; G++)
            S(k[G], R, K, y, T)
    }
    function L(A) {
        A.target.removeEventListener("dispose", L);
        for (const K in c) {
            const y = c[K]
              , T = A.target.uuid;
            T in y && (y[T].dispose(),
            delete y[T])
        }
    }
}
function w0(i, t, e) {
    const n = e.isWebGL2;
    function s() {
        let D = !1;
        const dt = new Ge;
        let pt = null;
        const Nt = new Ge(0,0,0,0);
        return {
            setMask: function(Ct) {
                pt !== Ct && !D && (i.colorMask(Ct, Ct, Ct, Ct),
                pt = Ct)
            },
            setLocked: function(Ct) {
                D = Ct
            },
            setClear: function(Ct, fe, de, Ne, qe) {
                qe === !0 && (Ct *= Ne,
                fe *= Ne,
                de *= Ne),
                dt.set(Ct, fe, de, Ne),
                Nt.equals(dt) === !1 && (i.clearColor(Ct, fe, de, Ne),
                Nt.copy(dt))
            },
            reset: function() {
                D = !1,
                pt = null,
                Nt.set(-1, 0, 0, 0)
            }
        }
    }
    function r() {
        let D = !1
          , dt = null
          , pt = null
          , Nt = null;
        return {
            setTest: function(Ct) {
                Ct ? Ot(i.DEPTH_TEST) : At(i.DEPTH_TEST)
            },
            setMask: function(Ct) {
                dt !== Ct && !D && (i.depthMask(Ct),
                dt = Ct)
            },
            setFunc: function(Ct) {
                if (pt !== Ct) {
                    switch (Ct) {
                    case Kh:
                        i.depthFunc(i.NEVER);
                        break;
                    case Yh:
                        i.depthFunc(i.ALWAYS);
                        break;
                    case $h:
                        i.depthFunc(i.LESS);
                        break;
                    case Ar:
                        i.depthFunc(i.LEQUAL);
                        break;
                    case jh:
                        i.depthFunc(i.EQUAL);
                        break;
                    case Zh:
                        i.depthFunc(i.GEQUAL);
                        break;
                    case Jh:
                        i.depthFunc(i.GREATER);
                        break;
                    case Qh:
                        i.depthFunc(i.NOTEQUAL);
                        break;
                    default:
                        i.depthFunc(i.LEQUAL)
                    }
                    pt = Ct
                }
            },
            setLocked: function(Ct) {
                D = Ct
            },
            setClear: function(Ct) {
                Nt !== Ct && (i.clearDepth(Ct),
                Nt = Ct)
            },
            reset: function() {
                D = !1,
                dt = null,
                pt = null,
                Nt = null
            }
        }
    }
    function o() {
        let D = !1
          , dt = null
          , pt = null
          , Nt = null
          , Ct = null
          , fe = null
          , de = null
          , Ne = null
          , qe = null;
        return {
            setTest: function(pe) {
                D || (pe ? Ot(i.STENCIL_TEST) : At(i.STENCIL_TEST))
            },
            setMask: function(pe) {
                dt !== pe && !D && (i.stencilMask(pe),
                dt = pe)
            },
            setFunc: function(pe, Ke, Ln) {
                (pt !== pe || Nt !== Ke || Ct !== Ln) && (i.stencilFunc(pe, Ke, Ln),
                pt = pe,
                Nt = Ke,
                Ct = Ln)
            },
            setOp: function(pe, Ke, Ln) {
                (fe !== pe || de !== Ke || Ne !== Ln) && (i.stencilOp(pe, Ke, Ln),
                fe = pe,
                de = Ke,
                Ne = Ln)
            },
            setLocked: function(pe) {
                D = pe
            },
            setClear: function(pe) {
                qe !== pe && (i.clearStencil(pe),
                qe = pe)
            },
            reset: function() {
                D = !1,
                dt = null,
                pt = null,
                Nt = null,
                Ct = null,
                fe = null,
                de = null,
                Ne = null,
                qe = null
            }
        }
    }
    const a = new s
      , l = new r
      , c = new o
      , h = new WeakMap
      , u = new WeakMap;
    let f = {}
      , p = {}
      , g = new WeakMap
      , _ = []
      , m = null
      , d = !1
      , x = null
      , v = null
      , S = null
      , L = null
      , A = null
      , R = null
      , K = null
      , y = new Bt(0,0,0)
      , T = 0
      , U = !1
      , k = null
      , G = null
      , P = null
      , O = null
      , N = null;
    const B = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let z = !1
      , Y = 0;
    const $ = i.getParameter(i.VERSION);
    $.indexOf("WebGL") !== -1 ? (Y = parseFloat(/^WebGL (\d)/.exec($)[1]),
    z = Y >= 1) : $.indexOf("OpenGL ES") !== -1 && (Y = parseFloat(/^OpenGL ES (\d)/.exec($)[1]),
    z = Y >= 2);
    let Q = null
      , et = {};
    const H = i.getParameter(i.SCISSOR_BOX)
      , J = i.getParameter(i.VIEWPORT)
      , lt = new Ge().fromArray(H)
      , mt = new Ge().fromArray(J);
    function _t(D, dt, pt, Nt) {
        const Ct = new Uint8Array(4)
          , fe = i.createTexture();
        i.bindTexture(D, fe),
        i.texParameteri(D, i.TEXTURE_MIN_FILTER, i.NEAREST),
        i.texParameteri(D, i.TEXTURE_MAG_FILTER, i.NEAREST);
        for (let de = 0; de < pt; de++)
            n && (D === i.TEXTURE_3D || D === i.TEXTURE_2D_ARRAY) ? i.texImage3D(dt, 0, i.RGBA, 1, 1, Nt, 0, i.RGBA, i.UNSIGNED_BYTE, Ct) : i.texImage2D(dt + de, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, Ct);
        return fe
    }
    const wt = {};
    wt[i.TEXTURE_2D] = _t(i.TEXTURE_2D, i.TEXTURE_2D, 1),
    wt[i.TEXTURE_CUBE_MAP] = _t(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
    n && (wt[i.TEXTURE_2D_ARRAY] = _t(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1),
    wt[i.TEXTURE_3D] = _t(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)),
    a.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    Ot(i.DEPTH_TEST),
    l.setFunc(Ar),
    Gt(!1),
    w(_a),
    Ot(i.CULL_FACE),
    Mt(ii);
    function Ot(D) {
        f[D] !== !0 && (i.enable(D),
        f[D] = !0)
    }
    function At(D) {
        f[D] !== !1 && (i.disable(D),
        f[D] = !1)
    }
    function Qt(D, dt) {
        return p[D] !== dt ? (i.bindFramebuffer(D, dt),
        p[D] = dt,
        n && (D === i.DRAW_FRAMEBUFFER && (p[i.FRAMEBUFFER] = dt),
        D === i.FRAMEBUFFER && (p[i.DRAW_FRAMEBUFFER] = dt)),
        !0) : !1
    }
    function V(D, dt) {
        let pt = _
          , Nt = !1;
        if (D)
            if (pt = g.get(dt),
            pt === void 0 && (pt = [],
            g.set(dt, pt)),
            D.isWebGLMultipleRenderTargets) {
                const Ct = D.texture;
                if (pt.length !== Ct.length || pt[0] !== i.COLOR_ATTACHMENT0) {
                    for (let fe = 0, de = Ct.length; fe < de; fe++)
                        pt[fe] = i.COLOR_ATTACHMENT0 + fe;
                    pt.length = Ct.length,
                    Nt = !0
                }
            } else
                pt[0] !== i.COLOR_ATTACHMENT0 && (pt[0] = i.COLOR_ATTACHMENT0,
                Nt = !0);
        else
            pt[0] !== i.BACK && (pt[0] = i.BACK,
            Nt = !0);
        Nt && (e.isWebGL2 ? i.drawBuffers(pt) : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))
    }
    function Oe(D) {
        return m !== D ? (i.useProgram(D),
        m = D,
        !0) : !1
    }
    const Tt = {
        [yi]: i.FUNC_ADD,
        [Dh]: i.FUNC_SUBTRACT,
        [Ih]: i.FUNC_REVERSE_SUBTRACT
    };
    if (n)
        Tt[Ma] = i.MIN,
        Tt[ya] = i.MAX;
    else {
        const D = t.get("EXT_blend_minmax");
        D !== null && (Tt[Ma] = D.MIN_EXT,
        Tt[ya] = D.MAX_EXT)
    }
    const Dt = {
        [Uh]: i.ZERO,
        [Oh]: i.ONE,
        [Nh]: i.SRC_COLOR,
        [Io]: i.SRC_ALPHA,
        [Hh]: i.SRC_ALPHA_SATURATE,
        [zh]: i.DST_COLOR,
        [kh]: i.DST_ALPHA,
        [Fh]: i.ONE_MINUS_SRC_COLOR,
        [Uo]: i.ONE_MINUS_SRC_ALPHA,
        [Gh]: i.ONE_MINUS_DST_COLOR,
        [Bh]: i.ONE_MINUS_DST_ALPHA,
        [Vh]: i.CONSTANT_COLOR,
        [Wh]: i.ONE_MINUS_CONSTANT_COLOR,
        [Xh]: i.CONSTANT_ALPHA,
        [qh]: i.ONE_MINUS_CONSTANT_ALPHA
    };
    function Mt(D, dt, pt, Nt, Ct, fe, de, Ne, qe, pe) {
        if (D === ii) {
            d === !0 && (At(i.BLEND),
            d = !1);
            return
        }
        if (d === !1 && (Ot(i.BLEND),
        d = !0),
        D !== Ph) {
            if (D !== x || pe !== U) {
                if ((v !== yi || A !== yi) && (i.blendEquation(i.FUNC_ADD),
                v = yi,
                A = yi),
                pe)
                    switch (D) {
                    case rs:
                        i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                        break;
                    case Do:
                        i.blendFunc(i.ONE, i.ONE);
                        break;
                    case va:
                        i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                        break;
                    case xa:
                        i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", D);
                        break
                    }
                else
                    switch (D) {
                    case rs:
                        i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                        break;
                    case Do:
                        i.blendFunc(i.SRC_ALPHA, i.ONE);
                        break;
                    case va:
                        i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                        break;
                    case xa:
                        i.blendFunc(i.ZERO, i.SRC_COLOR);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", D);
                        break
                    }
                S = null,
                L = null,
                R = null,
                K = null,
                y.set(0, 0, 0),
                T = 0,
                x = D,
                U = pe
            }
            return
        }
        Ct = Ct || dt,
        fe = fe || pt,
        de = de || Nt,
        (dt !== v || Ct !== A) && (i.blendEquationSeparate(Tt[dt], Tt[Ct]),
        v = dt,
        A = Ct),
        (pt !== S || Nt !== L || fe !== R || de !== K) && (i.blendFuncSeparate(Dt[pt], Dt[Nt], Dt[fe], Dt[de]),
        S = pt,
        L = Nt,
        R = fe,
        K = de),
        (Ne.equals(y) === !1 || qe !== T) && (i.blendColor(Ne.r, Ne.g, Ne.b, qe),
        y.copy(Ne),
        T = qe),
        x = D,
        U = !1
    }
    function ue(D, dt) {
        D.side === bn ? At(i.CULL_FACE) : Ot(i.CULL_FACE);
        let pt = D.side === Je;
        dt && (pt = !pt),
        Gt(pt),
        D.blending === rs && D.transparent === !1 ? Mt(ii) : Mt(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha),
        l.setFunc(D.depthFunc),
        l.setTest(D.depthTest),
        l.setMask(D.depthWrite),
        a.setMask(D.colorWrite);
        const Nt = D.stencilWrite;
        c.setTest(Nt),
        Nt && (c.setMask(D.stencilWriteMask),
        c.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask),
        c.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)),
        W(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits),
        D.alphaToCoverage === !0 ? Ot(i.SAMPLE_ALPHA_TO_COVERAGE) : At(i.SAMPLE_ALPHA_TO_COVERAGE)
    }
    function Gt(D) {
        k !== D && (D ? i.frontFace(i.CW) : i.frontFace(i.CCW),
        k = D)
    }
    function w(D) {
        D !== Rh ? (Ot(i.CULL_FACE),
        D !== G && (D === _a ? i.cullFace(i.BACK) : D === Ch ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : At(i.CULL_FACE),
        G = D
    }
    function b(D) {
        D !== P && (z && i.lineWidth(D),
        P = D)
    }
    function W(D, dt, pt) {
        D ? (Ot(i.POLYGON_OFFSET_FILL),
        (O !== dt || N !== pt) && (i.polygonOffset(dt, pt),
        O = dt,
        N = pt)) : At(i.POLYGON_OFFSET_FILL)
    }
    function rt(D) {
        D ? Ot(i.SCISSOR_TEST) : At(i.SCISSOR_TEST)
    }
    function it(D) {
        D === void 0 && (D = i.TEXTURE0 + B - 1),
        Q !== D && (i.activeTexture(D),
        Q = D)
    }
    function ot(D, dt, pt) {
        pt === void 0 && (Q === null ? pt = i.TEXTURE0 + B - 1 : pt = Q);
        let Nt = et[pt];
        Nt === void 0 && (Nt = {
            type: void 0,
            texture: void 0
        },
        et[pt] = Nt),
        (Nt.type !== D || Nt.texture !== dt) && (Q !== pt && (i.activeTexture(pt),
        Q = pt),
        i.bindTexture(D, dt || wt[D]),
        Nt.type = D,
        Nt.texture = dt)
    }
    function yt() {
        const D = et[Q];
        D !== void 0 && D.type !== void 0 && (i.bindTexture(D.type, null),
        D.type = void 0,
        D.texture = void 0)
    }
    function ft() {
        try {
            i.compressedTexImage2D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function xt() {
        try {
            i.compressedTexImage3D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function Rt() {
        try {
            i.texSubImage2D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function kt() {
        try {
            i.texSubImage3D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function nt() {
        try {
            i.compressedTexSubImage2D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function ie() {
        try {
            i.compressedTexSubImage3D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function zt() {
        try {
            i.texStorage2D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function It() {
        try {
            i.texStorage3D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function bt() {
        try {
            i.texImage2D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function vt() {
        try {
            i.texImage3D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function Xt(D) {
        lt.equals(D) === !1 && (i.scissor(D.x, D.y, D.z, D.w),
        lt.copy(D))
    }
    function se(D) {
        mt.equals(D) === !1 && (i.viewport(D.x, D.y, D.z, D.w),
        mt.copy(D))
    }
    function ye(D, dt) {
        let pt = u.get(dt);
        pt === void 0 && (pt = new WeakMap,
        u.set(dt, pt));
        let Nt = pt.get(D);
        Nt === void 0 && (Nt = i.getUniformBlockIndex(dt, D.name),
        pt.set(D, Nt))
    }
    function $t(D, dt) {
        const Nt = u.get(dt).get(D);
        h.get(dt) !== Nt && (i.uniformBlockBinding(dt, Nt, D.__bindingPointIndex),
        h.set(dt, Nt))
    }
    function ct() {
        i.disable(i.BLEND),
        i.disable(i.CULL_FACE),
        i.disable(i.DEPTH_TEST),
        i.disable(i.POLYGON_OFFSET_FILL),
        i.disable(i.SCISSOR_TEST),
        i.disable(i.STENCIL_TEST),
        i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
        i.blendEquation(i.FUNC_ADD),
        i.blendFunc(i.ONE, i.ZERO),
        i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
        i.blendColor(0, 0, 0, 0),
        i.colorMask(!0, !0, !0, !0),
        i.clearColor(0, 0, 0, 0),
        i.depthMask(!0),
        i.depthFunc(i.LESS),
        i.clearDepth(1),
        i.stencilMask(4294967295),
        i.stencilFunc(i.ALWAYS, 0, 4294967295),
        i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
        i.clearStencil(0),
        i.cullFace(i.BACK),
        i.frontFace(i.CCW),
        i.polygonOffset(0, 0),
        i.activeTexture(i.TEXTURE0),
        i.bindFramebuffer(i.FRAMEBUFFER, null),
        n === !0 && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        i.bindFramebuffer(i.READ_FRAMEBUFFER, null)),
        i.useProgram(null),
        i.lineWidth(1),
        i.scissor(0, 0, i.canvas.width, i.canvas.height),
        i.viewport(0, 0, i.canvas.width, i.canvas.height),
        f = {},
        Q = null,
        et = {},
        p = {},
        g = new WeakMap,
        _ = [],
        m = null,
        d = !1,
        x = null,
        v = null,
        S = null,
        L = null,
        A = null,
        R = null,
        K = null,
        y = new Bt(0,0,0),
        T = 0,
        U = !1,
        k = null,
        G = null,
        P = null,
        O = null,
        N = null,
        lt.set(0, 0, i.canvas.width, i.canvas.height),
        mt.set(0, 0, i.canvas.width, i.canvas.height),
        a.reset(),
        l.reset(),
        c.reset()
    }
    return {
        buffers: {
            color: a,
            depth: l,
            stencil: c
        },
        enable: Ot,
        disable: At,
        bindFramebuffer: Qt,
        drawBuffers: V,
        useProgram: Oe,
        setBlending: Mt,
        setMaterial: ue,
        setFlipSided: Gt,
        setCullFace: w,
        setLineWidth: b,
        setPolygonOffset: W,
        setScissorTest: rt,
        activeTexture: it,
        bindTexture: ot,
        unbindTexture: yt,
        compressedTexImage2D: ft,
        compressedTexImage3D: xt,
        texImage2D: bt,
        texImage3D: vt,
        updateUBOMapping: ye,
        uniformBlockBinding: $t,
        texStorage2D: zt,
        texStorage3D: It,
        texSubImage2D: Rt,
        texSubImage3D: kt,
        compressedTexSubImage2D: nt,
        compressedTexSubImage3D: ie,
        scissor: Xt,
        viewport: se,
        reset: ct
    }
}
function A0(i, t, e, n, s, r, o) {
    const a = s.isWebGL2
      , l = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null
      , c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent)
      , h = new WeakMap;
    let u;
    const f = new WeakMap;
    let p = !1;
    try {
        p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1,1).getContext("2d") !== null
    } catch {}
    function g(w, b) {
        return p ? new OffscreenCanvas(w,b) : Dr("canvas")
    }
    function _(w, b, W, rt) {
        let it = 1;
        if ((w.width > rt || w.height > rt) && (it = rt / Math.max(w.width, w.height)),
        it < 1 || b === !0)
            if (typeof HTMLImageElement < "u" && w instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && w instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && w instanceof ImageBitmap) {
                const ot = b ? Go : Math.floor
                  , yt = ot(it * w.width)
                  , ft = ot(it * w.height);
                u === void 0 && (u = g(yt, ft));
                const xt = W ? g(yt, ft) : u;
                return xt.width = yt,
                xt.height = ft,
                xt.getContext("2d").drawImage(w, 0, 0, yt, ft),
                console.warn("THREE.WebGLRenderer: Texture has been resized from (" + w.width + "x" + w.height + ") to (" + yt + "x" + ft + ")."),
                xt
            } else
                return "data" in w && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + w.width + "x" + w.height + ")."),
                w;
        return w
    }
    function m(w) {
        return Za(w.width) && Za(w.height)
    }
    function d(w) {
        return a ? !1 : w.wrapS !== En || w.wrapT !== En || w.minFilter !== he && w.minFilter !== _n
    }
    function x(w, b) {
        return w.generateMipmaps && b && w.minFilter !== he && w.minFilter !== _n
    }
    function v(w) {
        i.generateMipmap(w)
    }
    function S(w, b, W, rt, it=!1) {
        if (a === !1)
            return b;
        if (w !== null) {
            if (i[w] !== void 0)
                return i[w];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + w + "'")
        }
        let ot = b;
        if (b === i.RED && (W === i.FLOAT && (ot = i.R32F),
        W === i.HALF_FLOAT && (ot = i.R16F),
        W === i.UNSIGNED_BYTE && (ot = i.R8)),
        b === i.RED_INTEGER && (W === i.UNSIGNED_BYTE && (ot = i.R8UI),
        W === i.UNSIGNED_SHORT && (ot = i.R16UI),
        W === i.UNSIGNED_INT && (ot = i.R32UI),
        W === i.BYTE && (ot = i.R8I),
        W === i.SHORT && (ot = i.R16I),
        W === i.INT && (ot = i.R32I)),
        b === i.RG && (W === i.FLOAT && (ot = i.RG32F),
        W === i.HALF_FLOAT && (ot = i.RG16F),
        W === i.UNSIGNED_BYTE && (ot = i.RG8)),
        b === i.RGBA) {
            const yt = it ? Rr : ae.getTransfer(rt);
            W === i.FLOAT && (ot = i.RGBA32F),
            W === i.HALF_FLOAT && (ot = i.RGBA16F),
            W === i.UNSIGNED_BYTE && (ot = yt === _e ? i.SRGB8_ALPHA8 : i.RGBA8),
            W === i.UNSIGNED_SHORT_4_4_4_4 && (ot = i.RGBA4),
            W === i.UNSIGNED_SHORT_5_5_5_1 && (ot = i.RGB5_A1)
        }
        return (ot === i.R16F || ot === i.R32F || ot === i.RG16F || ot === i.RG32F || ot === i.RGBA16F || ot === i.RGBA32F) && t.get("EXT_color_buffer_float"),
        ot
    }
    function L(w, b, W) {
        return x(w, W) === !0 || w.isFramebufferTexture && w.minFilter !== he && w.minFilter !== _n ? Math.log2(Math.max(b.width, b.height)) + 1 : w.mipmaps !== void 0 && w.mipmaps.length > 0 ? w.mipmaps.length : w.isCompressedTexture && Array.isArray(w.image) ? b.mipmaps.length : 1
    }
    function A(w) {
        return w === he || w === Sa || w === Yr ? i.NEAREST : i.LINEAR
    }
    function R(w) {
        const b = w.target;
        b.removeEventListener("dispose", R),
        y(b),
        b.isVideoTexture && h.delete(b)
    }
    function K(w) {
        const b = w.target;
        b.removeEventListener("dispose", K),
        U(b)
    }
    function y(w) {
        const b = n.get(w);
        if (b.__webglInit === void 0)
            return;
        const W = w.source
          , rt = f.get(W);
        if (rt) {
            const it = rt[b.__cacheKey];
            it.usedTimes--,
            it.usedTimes === 0 && T(w),
            Object.keys(rt).length === 0 && f.delete(W)
        }
        n.remove(w)
    }
    function T(w) {
        const b = n.get(w);
        i.deleteTexture(b.__webglTexture);
        const W = w.source
          , rt = f.get(W);
        delete rt[b.__cacheKey],
        o.memory.textures--
    }
    function U(w) {
        const b = w.texture
          , W = n.get(w)
          , rt = n.get(b);
        if (rt.__webglTexture !== void 0 && (i.deleteTexture(rt.__webglTexture),
        o.memory.textures--),
        w.depthTexture && w.depthTexture.dispose(),
        w.isWebGLCubeRenderTarget)
            for (let it = 0; it < 6; it++) {
                if (Array.isArray(W.__webglFramebuffer[it]))
                    for (let ot = 0; ot < W.__webglFramebuffer[it].length; ot++)
                        i.deleteFramebuffer(W.__webglFramebuffer[it][ot]);
                else
                    i.deleteFramebuffer(W.__webglFramebuffer[it]);
                W.__webglDepthbuffer && i.deleteRenderbuffer(W.__webglDepthbuffer[it])
            }
        else {
            if (Array.isArray(W.__webglFramebuffer))
                for (let it = 0; it < W.__webglFramebuffer.length; it++)
                    i.deleteFramebuffer(W.__webglFramebuffer[it]);
            else
                i.deleteFramebuffer(W.__webglFramebuffer);
            if (W.__webglDepthbuffer && i.deleteRenderbuffer(W.__webglDepthbuffer),
            W.__webglMultisampledFramebuffer && i.deleteFramebuffer(W.__webglMultisampledFramebuffer),
            W.__webglColorRenderbuffer)
                for (let it = 0; it < W.__webglColorRenderbuffer.length; it++)
                    W.__webglColorRenderbuffer[it] && i.deleteRenderbuffer(W.__webglColorRenderbuffer[it]);
            W.__webglDepthRenderbuffer && i.deleteRenderbuffer(W.__webglDepthRenderbuffer)
        }
        if (w.isWebGLMultipleRenderTargets)
            for (let it = 0, ot = b.length; it < ot; it++) {
                const yt = n.get(b[it]);
                yt.__webglTexture && (i.deleteTexture(yt.__webglTexture),
                o.memory.textures--),
                n.remove(b[it])
            }
        n.remove(b),
        n.remove(w)
    }
    let k = 0;
    function G() {
        k = 0
    }
    function P() {
        const w = k;
        return w >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + w + " texture units while this GPU supports only " + s.maxTextures),
        k += 1,
        w
    }
    function O(w) {
        const b = [];
        return b.push(w.wrapS),
        b.push(w.wrapT),
        b.push(w.wrapR || 0),
        b.push(w.magFilter),
        b.push(w.minFilter),
        b.push(w.anisotropy),
        b.push(w.internalFormat),
        b.push(w.format),
        b.push(w.type),
        b.push(w.generateMipmaps),
        b.push(w.premultiplyAlpha),
        b.push(w.flipY),
        b.push(w.unpackAlignment),
        b.push(w.colorSpace),
        b.join()
    }
    function N(w, b) {
        const W = n.get(w);
        if (w.isVideoTexture && ue(w),
        w.isRenderTargetTexture === !1 && w.version > 0 && W.__version !== w.version) {
            const rt = w.image;
            if (rt === null)
                console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
            else if (rt.complete === !1)
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            else {
                lt(W, w, b);
                return
            }
        }
        e.bindTexture(i.TEXTURE_2D, W.__webglTexture, i.TEXTURE0 + b)
    }
    function B(w, b) {
        const W = n.get(w);
        if (w.version > 0 && W.__version !== w.version) {
            lt(W, w, b);
            return
        }
        e.bindTexture(i.TEXTURE_2D_ARRAY, W.__webglTexture, i.TEXTURE0 + b)
    }
    function z(w, b) {
        const W = n.get(w);
        if (w.version > 0 && W.__version !== w.version) {
            lt(W, w, b);
            return
        }
        e.bindTexture(i.TEXTURE_3D, W.__webglTexture, i.TEXTURE0 + b)
    }
    function Y(w, b) {
        const W = n.get(w);
        if (w.version > 0 && W.__version !== w.version) {
            mt(W, w, b);
            return
        }
        e.bindTexture(i.TEXTURE_CUBE_MAP, W.__webglTexture, i.TEXTURE0 + b)
    }
    const $ = {
        [Us]: i.REPEAT,
        [En]: i.CLAMP_TO_EDGE,
        [Fo]: i.MIRRORED_REPEAT
    }
      , Q = {
        [he]: i.NEAREST,
        [Sa]: i.NEAREST_MIPMAP_NEAREST,
        [Yr]: i.NEAREST_MIPMAP_LINEAR,
        [_n]: i.LINEAR,
        [lu]: i.LINEAR_MIPMAP_NEAREST,
        [Os]: i.LINEAR_MIPMAP_LINEAR
    }
      , et = {
        [Mu]: i.NEVER,
        [wu]: i.ALWAYS,
        [yu]: i.LESS,
        [wc]: i.LEQUAL,
        [Su]: i.EQUAL,
        [Tu]: i.GEQUAL,
        [bu]: i.GREATER,
        [Eu]: i.NOTEQUAL
    };
    function H(w, b, W) {
        if (W ? (i.texParameteri(w, i.TEXTURE_WRAP_S, $[b.wrapS]),
        i.texParameteri(w, i.TEXTURE_WRAP_T, $[b.wrapT]),
        (w === i.TEXTURE_3D || w === i.TEXTURE_2D_ARRAY) && i.texParameteri(w, i.TEXTURE_WRAP_R, $[b.wrapR]),
        i.texParameteri(w, i.TEXTURE_MAG_FILTER, Q[b.magFilter]),
        i.texParameteri(w, i.TEXTURE_MIN_FILTER, Q[b.minFilter])) : (i.texParameteri(w, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
        i.texParameteri(w, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE),
        (w === i.TEXTURE_3D || w === i.TEXTURE_2D_ARRAY) && i.texParameteri(w, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE),
        (b.wrapS !== En || b.wrapT !== En) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
        i.texParameteri(w, i.TEXTURE_MAG_FILTER, A(b.magFilter)),
        i.texParameteri(w, i.TEXTURE_MIN_FILTER, A(b.minFilter)),
        b.minFilter !== he && b.minFilter !== _n && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
        b.compareFunction && (i.texParameteri(w, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(w, i.TEXTURE_COMPARE_FUNC, et[b.compareFunction])),
        t.has("EXT_texture_filter_anisotropic") === !0) {
            const rt = t.get("EXT_texture_filter_anisotropic");
            if (b.magFilter === he || b.minFilter !== Yr && b.minFilter !== Os || b.type === ni && t.has("OES_texture_float_linear") === !1 || a === !1 && b.type === Ns && t.has("OES_texture_half_float_linear") === !1)
                return;
            (b.anisotropy > 1 || n.get(b).__currentAnisotropy) && (i.texParameterf(w, rt.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, s.getMaxAnisotropy())),
            n.get(b).__currentAnisotropy = b.anisotropy)
        }
    }
    function J(w, b) {
        let W = !1;
        w.__webglInit === void 0 && (w.__webglInit = !0,
        b.addEventListener("dispose", R));
        const rt = b.source;
        let it = f.get(rt);
        it === void 0 && (it = {},
        f.set(rt, it));
        const ot = O(b);
        if (ot !== w.__cacheKey) {
            it[ot] === void 0 && (it[ot] = {
                texture: i.createTexture(),
                usedTimes: 0
            },
            o.memory.textures++,
            W = !0),
            it[ot].usedTimes++;
            const yt = it[w.__cacheKey];
            yt !== void 0 && (it[w.__cacheKey].usedTimes--,
            yt.usedTimes === 0 && T(b)),
            w.__cacheKey = ot,
            w.__webglTexture = it[ot].texture
        }
        return W
    }
    function lt(w, b, W) {
        let rt = i.TEXTURE_2D;
        (b.isDataArrayTexture || b.isCompressedArrayTexture) && (rt = i.TEXTURE_2D_ARRAY),
        b.isData3DTexture && (rt = i.TEXTURE_3D);
        const it = J(w, b)
          , ot = b.source;
        e.bindTexture(rt, w.__webglTexture, i.TEXTURE0 + W);
        const yt = n.get(ot);
        if (ot.version !== yt.__version || it === !0) {
            e.activeTexture(i.TEXTURE0 + W);
            const ft = ae.getPrimaries(ae.workingColorSpace)
              , xt = b.colorSpace === vn ? null : ae.getPrimaries(b.colorSpace)
              , Rt = b.colorSpace === vn || ft === xt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
            i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, b.flipY),
            i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha),
            i.pixelStorei(i.UNPACK_ALIGNMENT, b.unpackAlignment),
            i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Rt);
            const kt = d(b) && m(b.image) === !1;
            let nt = _(b.image, kt, !1, s.maxTextureSize);
            nt = Gt(b, nt);
            const ie = m(nt) || a
              , zt = r.convert(b.format, b.colorSpace);
            let It = r.convert(b.type)
              , bt = S(b.internalFormat, zt, It, b.colorSpace, b.isVideoTexture);
            H(rt, b, ie);
            let vt;
            const Xt = b.mipmaps
              , se = a && b.isVideoTexture !== !0 && bt !== bc
              , ye = yt.__version === void 0 || it === !0
              , $t = L(b, nt, ie);
            if (b.isDepthTexture)
                bt = i.DEPTH_COMPONENT,
                a ? b.type === ni ? bt = i.DEPTH_COMPONENT32F : b.type === ei ? bt = i.DEPTH_COMPONENT24 : b.type === bi ? bt = i.DEPTH24_STENCIL8 : bt = i.DEPTH_COMPONENT16 : b.type === ni && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
                b.format === Ei && bt === i.DEPTH_COMPONENT && b.type !== $o && b.type !== ei && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                b.type = ei,
                It = r.convert(b.type)),
                b.format === us && bt === i.DEPTH_COMPONENT && (bt = i.DEPTH_STENCIL,
                b.type !== bi && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
                b.type = bi,
                It = r.convert(b.type))),
                ye && (se ? e.texStorage2D(i.TEXTURE_2D, 1, bt, nt.width, nt.height) : e.texImage2D(i.TEXTURE_2D, 0, bt, nt.width, nt.height, 0, zt, It, null));
            else if (b.isDataTexture)
                if (Xt.length > 0 && ie) {
                    se && ye && e.texStorage2D(i.TEXTURE_2D, $t, bt, Xt[0].width, Xt[0].height);
                    for (let ct = 0, D = Xt.length; ct < D; ct++)
                        vt = Xt[ct],
                        se ? e.texSubImage2D(i.TEXTURE_2D, ct, 0, 0, vt.width, vt.height, zt, It, vt.data) : e.texImage2D(i.TEXTURE_2D, ct, bt, vt.width, vt.height, 0, zt, It, vt.data);
                    b.generateMipmaps = !1
                } else
                    se ? (ye && e.texStorage2D(i.TEXTURE_2D, $t, bt, nt.width, nt.height),
                    e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, nt.width, nt.height, zt, It, nt.data)) : e.texImage2D(i.TEXTURE_2D, 0, bt, nt.width, nt.height, 0, zt, It, nt.data);
            else if (b.isCompressedTexture)
                if (b.isCompressedArrayTexture) {
                    se && ye && e.texStorage3D(i.TEXTURE_2D_ARRAY, $t, bt, Xt[0].width, Xt[0].height, nt.depth);
                    for (let ct = 0, D = Xt.length; ct < D; ct++)
                        vt = Xt[ct],
                        b.format !== Tn ? zt !== null ? se ? e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, ct, 0, 0, 0, vt.width, vt.height, nt.depth, zt, vt.data, 0, 0) : e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, ct, bt, vt.width, vt.height, nt.depth, 0, vt.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : se ? e.texSubImage3D(i.TEXTURE_2D_ARRAY, ct, 0, 0, 0, vt.width, vt.height, nt.depth, zt, It, vt.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, ct, bt, vt.width, vt.height, nt.depth, 0, zt, It, vt.data)
                } else {
                    se && ye && e.texStorage2D(i.TEXTURE_2D, $t, bt, Xt[0].width, Xt[0].height);
                    for (let ct = 0, D = Xt.length; ct < D; ct++)
                        vt = Xt[ct],
                        b.format !== Tn ? zt !== null ? se ? e.compressedTexSubImage2D(i.TEXTURE_2D, ct, 0, 0, vt.width, vt.height, zt, vt.data) : e.compressedTexImage2D(i.TEXTURE_2D, ct, bt, vt.width, vt.height, 0, vt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : se ? e.texSubImage2D(i.TEXTURE_2D, ct, 0, 0, vt.width, vt.height, zt, It, vt.data) : e.texImage2D(i.TEXTURE_2D, ct, bt, vt.width, vt.height, 0, zt, It, vt.data)
                }
            else if (b.isDataArrayTexture)
                se ? (ye && e.texStorage3D(i.TEXTURE_2D_ARRAY, $t, bt, nt.width, nt.height, nt.depth),
                e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, nt.width, nt.height, nt.depth, zt, It, nt.data)) : e.texImage3D(i.TEXTURE_2D_ARRAY, 0, bt, nt.width, nt.height, nt.depth, 0, zt, It, nt.data);
            else if (b.isData3DTexture)
                se ? (ye && e.texStorage3D(i.TEXTURE_3D, $t, bt, nt.width, nt.height, nt.depth),
                e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, nt.width, nt.height, nt.depth, zt, It, nt.data)) : e.texImage3D(i.TEXTURE_3D, 0, bt, nt.width, nt.height, nt.depth, 0, zt, It, nt.data);
            else if (b.isFramebufferTexture) {
                if (ye)
                    if (se)
                        e.texStorage2D(i.TEXTURE_2D, $t, bt, nt.width, nt.height);
                    else {
                        let ct = nt.width
                          , D = nt.height;
                        for (let dt = 0; dt < $t; dt++)
                            e.texImage2D(i.TEXTURE_2D, dt, bt, ct, D, 0, zt, It, null),
                            ct >>= 1,
                            D >>= 1
                    }
            } else if (Xt.length > 0 && ie) {
                se && ye && e.texStorage2D(i.TEXTURE_2D, $t, bt, Xt[0].width, Xt[0].height);
                for (let ct = 0, D = Xt.length; ct < D; ct++)
                    vt = Xt[ct],
                    se ? e.texSubImage2D(i.TEXTURE_2D, ct, 0, 0, zt, It, vt) : e.texImage2D(i.TEXTURE_2D, ct, bt, zt, It, vt);
                b.generateMipmaps = !1
            } else
                se ? (ye && e.texStorage2D(i.TEXTURE_2D, $t, bt, nt.width, nt.height),
                e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, zt, It, nt)) : e.texImage2D(i.TEXTURE_2D, 0, bt, zt, It, nt);
            x(b, ie) && v(rt),
            yt.__version = ot.version,
            b.onUpdate && b.onUpdate(b)
        }
        w.__version = b.version
    }
    function mt(w, b, W) {
        if (b.image.length !== 6)
            return;
        const rt = J(w, b)
          , it = b.source;
        e.bindTexture(i.TEXTURE_CUBE_MAP, w.__webglTexture, i.TEXTURE0 + W);
        const ot = n.get(it);
        if (it.version !== ot.__version || rt === !0) {
            e.activeTexture(i.TEXTURE0 + W);
            const yt = ae.getPrimaries(ae.workingColorSpace)
              , ft = b.colorSpace === vn ? null : ae.getPrimaries(b.colorSpace)
              , xt = b.colorSpace === vn || yt === ft ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
            i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, b.flipY),
            i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha),
            i.pixelStorei(i.UNPACK_ALIGNMENT, b.unpackAlignment),
            i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, xt);
            const Rt = b.isCompressedTexture || b.image[0].isCompressedTexture
              , kt = b.image[0] && b.image[0].isDataTexture
              , nt = [];
            for (let ct = 0; ct < 6; ct++)
                !Rt && !kt ? nt[ct] = _(b.image[ct], !1, !0, s.maxCubemapSize) : nt[ct] = kt ? b.image[ct].image : b.image[ct],
                nt[ct] = Gt(b, nt[ct]);
            const ie = nt[0]
              , zt = m(ie) || a
              , It = r.convert(b.format, b.colorSpace)
              , bt = r.convert(b.type)
              , vt = S(b.internalFormat, It, bt, b.colorSpace)
              , Xt = a && b.isVideoTexture !== !0
              , se = ot.__version === void 0 || rt === !0;
            let ye = L(b, ie, zt);
            H(i.TEXTURE_CUBE_MAP, b, zt);
            let $t;
            if (Rt) {
                Xt && se && e.texStorage2D(i.TEXTURE_CUBE_MAP, ye, vt, ie.width, ie.height);
                for (let ct = 0; ct < 6; ct++) {
                    $t = nt[ct].mipmaps;
                    for (let D = 0; D < $t.length; D++) {
                        const dt = $t[D];
                        b.format !== Tn ? It !== null ? Xt ? e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ct, D, 0, 0, dt.width, dt.height, It, dt.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ct, D, vt, dt.width, dt.height, 0, dt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Xt ? e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ct, D, 0, 0, dt.width, dt.height, It, bt, dt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ct, D, vt, dt.width, dt.height, 0, It, bt, dt.data)
                    }
                }
            } else {
                $t = b.mipmaps,
                Xt && se && ($t.length > 0 && ye++,
                e.texStorage2D(i.TEXTURE_CUBE_MAP, ye, vt, nt[0].width, nt[0].height));
                for (let ct = 0; ct < 6; ct++)
                    if (kt) {
                        Xt ? e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ct, 0, 0, 0, nt[ct].width, nt[ct].height, It, bt, nt[ct].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ct, 0, vt, nt[ct].width, nt[ct].height, 0, It, bt, nt[ct].data);
                        for (let D = 0; D < $t.length; D++) {
                            const pt = $t[D].image[ct].image;
                            Xt ? e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ct, D + 1, 0, 0, pt.width, pt.height, It, bt, pt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ct, D + 1, vt, pt.width, pt.height, 0, It, bt, pt.data)
                        }
                    } else {
                        Xt ? e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ct, 0, 0, 0, It, bt, nt[ct]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ct, 0, vt, It, bt, nt[ct]);
                        for (let D = 0; D < $t.length; D++) {
                            const dt = $t[D];
                            Xt ? e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ct, D + 1, 0, 0, It, bt, dt.image[ct]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ct, D + 1, vt, It, bt, dt.image[ct])
                        }
                    }
            }
            x(b, zt) && v(i.TEXTURE_CUBE_MAP),
            ot.__version = it.version,
            b.onUpdate && b.onUpdate(b)
        }
        w.__version = b.version
    }
    function _t(w, b, W, rt, it, ot) {
        const yt = r.convert(W.format, W.colorSpace)
          , ft = r.convert(W.type)
          , xt = S(W.internalFormat, yt, ft, W.colorSpace);
        if (!n.get(b).__hasExternalTextures) {
            const kt = Math.max(1, b.width >> ot)
              , nt = Math.max(1, b.height >> ot);
            it === i.TEXTURE_3D || it === i.TEXTURE_2D_ARRAY ? e.texImage3D(it, ot, xt, kt, nt, b.depth, 0, yt, ft, null) : e.texImage2D(it, ot, xt, kt, nt, 0, yt, ft, null)
        }
        e.bindFramebuffer(i.FRAMEBUFFER, w),
        Mt(b) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, rt, it, n.get(W).__webglTexture, 0, Dt(b)) : (it === i.TEXTURE_2D || it >= i.TEXTURE_CUBE_MAP_POSITIVE_X && it <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, rt, it, n.get(W).__webglTexture, ot),
        e.bindFramebuffer(i.FRAMEBUFFER, null)
    }
    function wt(w, b, W) {
        if (i.bindRenderbuffer(i.RENDERBUFFER, w),
        b.depthBuffer && !b.stencilBuffer) {
            let rt = a === !0 ? i.DEPTH_COMPONENT24 : i.DEPTH_COMPONENT16;
            if (W || Mt(b)) {
                const it = b.depthTexture;
                it && it.isDepthTexture && (it.type === ni ? rt = i.DEPTH_COMPONENT32F : it.type === ei && (rt = i.DEPTH_COMPONENT24));
                const ot = Dt(b);
                Mt(b) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ot, rt, b.width, b.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, ot, rt, b.width, b.height)
            } else
                i.renderbufferStorage(i.RENDERBUFFER, rt, b.width, b.height);
            i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, w)
        } else if (b.depthBuffer && b.stencilBuffer) {
            const rt = Dt(b);
            W && Mt(b) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, rt, i.DEPTH24_STENCIL8, b.width, b.height) : Mt(b) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, rt, i.DEPTH24_STENCIL8, b.width, b.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, b.width, b.height),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, w)
        } else {
            const rt = b.isWebGLMultipleRenderTargets === !0 ? b.texture : [b.texture];
            for (let it = 0; it < rt.length; it++) {
                const ot = rt[it]
                  , yt = r.convert(ot.format, ot.colorSpace)
                  , ft = r.convert(ot.type)
                  , xt = S(ot.internalFormat, yt, ft, ot.colorSpace)
                  , Rt = Dt(b);
                W && Mt(b) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Rt, xt, b.width, b.height) : Mt(b) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Rt, xt, b.width, b.height) : i.renderbufferStorage(i.RENDERBUFFER, xt, b.width, b.height)
            }
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null)
    }
    function Ot(w, b) {
        if (b && b.isWebGLCubeRenderTarget)
            throw new Error("Depth Texture with cube render targets is not supported");
        if (e.bindFramebuffer(i.FRAMEBUFFER, w),
        !(b.depthTexture && b.depthTexture.isDepthTexture))
            throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        (!n.get(b.depthTexture).__webglTexture || b.depthTexture.image.width !== b.width || b.depthTexture.image.height !== b.height) && (b.depthTexture.image.width = b.width,
        b.depthTexture.image.height = b.height,
        b.depthTexture.needsUpdate = !0),
        N(b.depthTexture, 0);
        const rt = n.get(b.depthTexture).__webglTexture
          , it = Dt(b);
        if (b.depthTexture.format === Ei)
            Mt(b) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, rt, 0, it) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, rt, 0);
        else if (b.depthTexture.format === us)
            Mt(b) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, rt, 0, it) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, rt, 0);
        else
            throw new Error("Unknown depthTexture format")
    }
    function At(w) {
        const b = n.get(w)
          , W = w.isWebGLCubeRenderTarget === !0;
        if (w.depthTexture && !b.__autoAllocateDepthBuffer) {
            if (W)
                throw new Error("target.depthTexture not supported in Cube render targets");
            Ot(b.__webglFramebuffer, w)
        } else if (W) {
            b.__webglDepthbuffer = [];
            for (let rt = 0; rt < 6; rt++)
                e.bindFramebuffer(i.FRAMEBUFFER, b.__webglFramebuffer[rt]),
                b.__webglDepthbuffer[rt] = i.createRenderbuffer(),
                wt(b.__webglDepthbuffer[rt], w, !1)
        } else
            e.bindFramebuffer(i.FRAMEBUFFER, b.__webglFramebuffer),
            b.__webglDepthbuffer = i.createRenderbuffer(),
            wt(b.__webglDepthbuffer, w, !1);
        e.bindFramebuffer(i.FRAMEBUFFER, null)
    }
    function Qt(w, b, W) {
        const rt = n.get(w);
        b !== void 0 && _t(rt.__webglFramebuffer, w, w.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0),
        W !== void 0 && At(w)
    }
    function V(w) {
        const b = w.texture
          , W = n.get(w)
          , rt = n.get(b);
        w.addEventListener("dispose", K),
        w.isWebGLMultipleRenderTargets !== !0 && (rt.__webglTexture === void 0 && (rt.__webglTexture = i.createTexture()),
        rt.__version = b.version,
        o.memory.textures++);
        const it = w.isWebGLCubeRenderTarget === !0
          , ot = w.isWebGLMultipleRenderTargets === !0
          , yt = m(w) || a;
        if (it) {
            W.__webglFramebuffer = [];
            for (let ft = 0; ft < 6; ft++)
                if (a && b.mipmaps && b.mipmaps.length > 0) {
                    W.__webglFramebuffer[ft] = [];
                    for (let xt = 0; xt < b.mipmaps.length; xt++)
                        W.__webglFramebuffer[ft][xt] = i.createFramebuffer()
                } else
                    W.__webglFramebuffer[ft] = i.createFramebuffer()
        } else {
            if (a && b.mipmaps && b.mipmaps.length > 0) {
                W.__webglFramebuffer = [];
                for (let ft = 0; ft < b.mipmaps.length; ft++)
                    W.__webglFramebuffer[ft] = i.createFramebuffer()
            } else
                W.__webglFramebuffer = i.createFramebuffer();
            if (ot)
                if (s.drawBuffers) {
                    const ft = w.texture;
                    for (let xt = 0, Rt = ft.length; xt < Rt; xt++) {
                        const kt = n.get(ft[xt]);
                        kt.__webglTexture === void 0 && (kt.__webglTexture = i.createTexture(),
                        o.memory.textures++)
                    }
                } else
                    console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
            if (a && w.samples > 0 && Mt(w) === !1) {
                const ft = ot ? b : [b];
                W.__webglMultisampledFramebuffer = i.createFramebuffer(),
                W.__webglColorRenderbuffer = [],
                e.bindFramebuffer(i.FRAMEBUFFER, W.__webglMultisampledFramebuffer);
                for (let xt = 0; xt < ft.length; xt++) {
                    const Rt = ft[xt];
                    W.__webglColorRenderbuffer[xt] = i.createRenderbuffer(),
                    i.bindRenderbuffer(i.RENDERBUFFER, W.__webglColorRenderbuffer[xt]);
                    const kt = r.convert(Rt.format, Rt.colorSpace)
                      , nt = r.convert(Rt.type)
                      , ie = S(Rt.internalFormat, kt, nt, Rt.colorSpace, w.isXRRenderTarget === !0)
                      , zt = Dt(w);
                    i.renderbufferStorageMultisample(i.RENDERBUFFER, zt, ie, w.width, w.height),
                    i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.RENDERBUFFER, W.__webglColorRenderbuffer[xt])
                }
                i.bindRenderbuffer(i.RENDERBUFFER, null),
                w.depthBuffer && (W.__webglDepthRenderbuffer = i.createRenderbuffer(),
                wt(W.__webglDepthRenderbuffer, w, !0)),
                e.bindFramebuffer(i.FRAMEBUFFER, null)
            }
        }
        if (it) {
            e.bindTexture(i.TEXTURE_CUBE_MAP, rt.__webglTexture),
            H(i.TEXTURE_CUBE_MAP, b, yt);
            for (let ft = 0; ft < 6; ft++)
                if (a && b.mipmaps && b.mipmaps.length > 0)
                    for (let xt = 0; xt < b.mipmaps.length; xt++)
                        _t(W.__webglFramebuffer[ft][xt], w, b, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ft, xt);
                else
                    _t(W.__webglFramebuffer[ft], w, b, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ft, 0);
            x(b, yt) && v(i.TEXTURE_CUBE_MAP),
            e.unbindTexture()
        } else if (ot) {
            const ft = w.texture;
            for (let xt = 0, Rt = ft.length; xt < Rt; xt++) {
                const kt = ft[xt]
                  , nt = n.get(kt);
                e.bindTexture(i.TEXTURE_2D, nt.__webglTexture),
                H(i.TEXTURE_2D, kt, yt),
                _t(W.__webglFramebuffer, w, kt, i.COLOR_ATTACHMENT0 + xt, i.TEXTURE_2D, 0),
                x(kt, yt) && v(i.TEXTURE_2D)
            }
            e.unbindTexture()
        } else {
            let ft = i.TEXTURE_2D;
            if ((w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) && (a ? ft = w.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),
            e.bindTexture(ft, rt.__webglTexture),
            H(ft, b, yt),
            a && b.mipmaps && b.mipmaps.length > 0)
                for (let xt = 0; xt < b.mipmaps.length; xt++)
                    _t(W.__webglFramebuffer[xt], w, b, i.COLOR_ATTACHMENT0, ft, xt);
            else
                _t(W.__webglFramebuffer, w, b, i.COLOR_ATTACHMENT0, ft, 0);
            x(b, yt) && v(ft),
            e.unbindTexture()
        }
        w.depthBuffer && At(w)
    }
    function Oe(w) {
        const b = m(w) || a
          , W = w.isWebGLMultipleRenderTargets === !0 ? w.texture : [w.texture];
        for (let rt = 0, it = W.length; rt < it; rt++) {
            const ot = W[rt];
            if (x(ot, b)) {
                const yt = w.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D
                  , ft = n.get(ot).__webglTexture;
                e.bindTexture(yt, ft),
                v(yt),
                e.unbindTexture()
            }
        }
    }
    function Tt(w) {
        if (a && w.samples > 0 && Mt(w) === !1) {
            const b = w.isWebGLMultipleRenderTargets ? w.texture : [w.texture]
              , W = w.width
              , rt = w.height;
            let it = i.COLOR_BUFFER_BIT;
            const ot = []
              , yt = w.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
              , ft = n.get(w)
              , xt = w.isWebGLMultipleRenderTargets === !0;
            if (xt)
                for (let Rt = 0; Rt < b.length; Rt++)
                    e.bindFramebuffer(i.FRAMEBUFFER, ft.__webglMultisampledFramebuffer),
                    i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Rt, i.RENDERBUFFER, null),
                    e.bindFramebuffer(i.FRAMEBUFFER, ft.__webglFramebuffer),
                    i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Rt, i.TEXTURE_2D, null, 0);
            e.bindFramebuffer(i.READ_FRAMEBUFFER, ft.__webglMultisampledFramebuffer),
            e.bindFramebuffer(i.DRAW_FRAMEBUFFER, ft.__webglFramebuffer);
            for (let Rt = 0; Rt < b.length; Rt++) {
                ot.push(i.COLOR_ATTACHMENT0 + Rt),
                w.depthBuffer && ot.push(yt);
                const kt = ft.__ignoreDepthValues !== void 0 ? ft.__ignoreDepthValues : !1;
                if (kt === !1 && (w.depthBuffer && (it |= i.DEPTH_BUFFER_BIT),
                w.stencilBuffer && (it |= i.STENCIL_BUFFER_BIT)),
                xt && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, ft.__webglColorRenderbuffer[Rt]),
                kt === !0 && (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [yt]),
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [yt])),
                xt) {
                    const nt = n.get(b[Rt]).__webglTexture;
                    i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, nt, 0)
                }
                i.blitFramebuffer(0, 0, W, rt, 0, 0, W, rt, it, i.NEAREST),
                c && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ot)
            }
            if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null),
            e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
            xt)
                for (let Rt = 0; Rt < b.length; Rt++) {
                    e.bindFramebuffer(i.FRAMEBUFFER, ft.__webglMultisampledFramebuffer),
                    i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Rt, i.RENDERBUFFER, ft.__webglColorRenderbuffer[Rt]);
                    const kt = n.get(b[Rt]).__webglTexture;
                    e.bindFramebuffer(i.FRAMEBUFFER, ft.__webglFramebuffer),
                    i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Rt, i.TEXTURE_2D, kt, 0)
                }
            e.bindFramebuffer(i.DRAW_FRAMEBUFFER, ft.__webglMultisampledFramebuffer)
        }
    }
    function Dt(w) {
        return Math.min(s.maxSamples, w.samples)
    }
    function Mt(w) {
        const b = n.get(w);
        return a && w.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && b.__useRenderToTexture !== !1
    }
    function ue(w) {
        const b = o.render.frame;
        h.get(w) !== b && (h.set(w, b),
        w.update())
    }
    function Gt(w, b) {
        const W = w.colorSpace
          , rt = w.format
          , it = w.type;
        return w.isCompressedTexture === !0 || w.isVideoTexture === !0 || w.format === Bo || W !== qn && W !== vn && (ae.getTransfer(W) === _e ? a === !1 ? t.has("EXT_sRGB") === !0 && rt === Tn ? (w.format = Bo,
        w.minFilter = _n,
        w.generateMipmaps = !1) : b = Rc.sRGBToLinear(b) : (rt !== Tn || it !== ri) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", W)),
        b
    }
    this.allocateTextureUnit = P,
    this.resetTextureUnits = G,
    this.setTexture2D = N,
    this.setTexture2DArray = B,
    this.setTexture3D = z,
    this.setTextureCube = Y,
    this.rebindTextures = Qt,
    this.setupRenderTarget = V,
    this.updateRenderTargetMipmap = Oe,
    this.updateMultisampleRenderTarget = Tt,
    this.setupDepthRenderbuffer = At,
    this.setupFrameBufferTexture = _t,
    this.useMultisampledRTT = Mt
}
function R0(i, t, e) {
    const n = e.isWebGL2;
    function s(r, o=vn) {
        let a;
        const l = ae.getTransfer(o);
        if (r === ri)
            return i.UNSIGNED_BYTE;
        if (r === vc)
            return i.UNSIGNED_SHORT_4_4_4_4;
        if (r === xc)
            return i.UNSIGNED_SHORT_5_5_5_1;
        if (r === cu)
            return i.BYTE;
        if (r === hu)
            return i.SHORT;
        if (r === $o)
            return i.UNSIGNED_SHORT;
        if (r === _c)
            return i.INT;
        if (r === ei)
            return i.UNSIGNED_INT;
        if (r === ni)
            return i.FLOAT;
        if (r === Ns)
            return n ? i.HALF_FLOAT : (a = t.get("OES_texture_half_float"),
            a !== null ? a.HALF_FLOAT_OES : null);
        if (r === uu)
            return i.ALPHA;
        if (r === Tn)
            return i.RGBA;
        if (r === fu)
            return i.LUMINANCE;
        if (r === du)
            return i.LUMINANCE_ALPHA;
        if (r === Ei)
            return i.DEPTH_COMPONENT;
        if (r === us)
            return i.DEPTH_STENCIL;
        if (r === Bo)
            return a = t.get("EXT_sRGB"),
            a !== null ? a.SRGB_ALPHA_EXT : null;
        if (r === pu)
            return i.RED;
        if (r === Mc)
            return i.RED_INTEGER;
        if (r === mu)
            return i.RG;
        if (r === yc)
            return i.RG_INTEGER;
        if (r === Sc)
            return i.RGBA_INTEGER;
        if (r === $r || r === jr || r === Zr || r === Jr)
            if (l === _e)
                if (a = t.get("WEBGL_compressed_texture_s3tc_srgb"),
                a !== null) {
                    if (r === $r)
                        return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    if (r === jr)
                        return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    if (r === Zr)
                        return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    if (r === Jr)
                        return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                } else
                    return null;
            else if (a = t.get("WEBGL_compressed_texture_s3tc"),
            a !== null) {
                if (r === $r)
                    return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (r === jr)
                    return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (r === Zr)
                    return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (r === Jr)
                    return a.COMPRESSED_RGBA_S3TC_DXT5_EXT
            } else
                return null;
        if (r === ba || r === Ea || r === Ta || r === wa)
            if (a = t.get("WEBGL_compressed_texture_pvrtc"),
            a !== null) {
                if (r === ba)
                    return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (r === Ea)
                    return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (r === Ta)
                    return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (r === wa)
                    return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            } else
                return null;
        if (r === bc)
            return a = t.get("WEBGL_compressed_texture_etc1"),
            a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
        if (r === Aa || r === Ra)
            if (a = t.get("WEBGL_compressed_texture_etc"),
            a !== null) {
                if (r === Aa)
                    return l === _e ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
                if (r === Ra)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC
            } else
                return null;
        if (r === Ca || r === La || r === Pa || r === Da || r === Ia || r === Ua || r === Oa || r === Na || r === Fa || r === ka || r === Ba || r === za || r === Ga || r === Ha)
            if (a = t.get("WEBGL_compressed_texture_astc"),
            a !== null) {
                if (r === Ca)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (r === La)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (r === Pa)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (r === Da)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (r === Ia)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (r === Ua)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (r === Oa)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (r === Na)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (r === Fa)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (r === ka)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (r === Ba)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (r === za)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (r === Ga)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (r === Ha)
                    return l === _e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR
            } else
                return null;
        if (r === Qr || r === Va || r === Wa)
            if (a = t.get("EXT_texture_compression_bptc"),
            a !== null) {
                if (r === Qr)
                    return l === _e ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                if (r === Va)
                    return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                if (r === Wa)
                    return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT
            } else
                return null;
        if (r === gu || r === Xa || r === qa || r === Ka)
            if (a = t.get("EXT_texture_compression_rgtc"),
            a !== null) {
                if (r === Qr)
                    return a.COMPRESSED_RED_RGTC1_EXT;
                if (r === Xa)
                    return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                if (r === qa)
                    return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
                if (r === Ka)
                    return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
            } else
                return null;
        return r === bi ? n ? i.UNSIGNED_INT_24_8 : (a = t.get("WEBGL_depth_texture"),
        a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : i[r] !== void 0 ? i[r] : null
    }
    return {
        convert: s
    }
}
class C0 extends fn {
    constructor(t=[]) {
        super(),
        this.isArrayCamera = !0,
        this.cameras = t
    }
}
class wn extends De {
    constructor() {
        super(),
        this.isGroup = !0,
        this.type = "Group"
    }
}
const L0 = {
    type: "move"
};
class Eo {
    constructor() {
        this._targetRay = null,
        this._grip = null,
        this._hand = null
    }
    getHandSpace() {
        return this._hand === null && (this._hand = new wn,
        this._hand.matrixAutoUpdate = !1,
        this._hand.visible = !1,
        this._hand.joints = {},
        this._hand.inputState = {
            pinching: !1
        }),
        this._hand
    }
    getTargetRaySpace() {
        return this._targetRay === null && (this._targetRay = new wn,
        this._targetRay.matrixAutoUpdate = !1,
        this._targetRay.visible = !1,
        this._targetRay.hasLinearVelocity = !1,
        this._targetRay.linearVelocity = new I,
        this._targetRay.hasAngularVelocity = !1,
        this._targetRay.angularVelocity = new I),
        this._targetRay
    }
    getGripSpace() {
        return this._grip === null && (this._grip = new wn,
        this._grip.matrixAutoUpdate = !1,
        this._grip.visible = !1,
        this._grip.hasLinearVelocity = !1,
        this._grip.linearVelocity = new I,
        this._grip.hasAngularVelocity = !1,
        this._grip.angularVelocity = new I),
        this._grip
    }
    dispatchEvent(t) {
        return this._targetRay !== null && this._targetRay.dispatchEvent(t),
        this._grip !== null && this._grip.dispatchEvent(t),
        this._hand !== null && this._hand.dispatchEvent(t),
        this
    }
    connect(t) {
        if (t && t.hand) {
            const e = this._hand;
            if (e)
                for (const n of t.hand.values())
                    this._getHandJoint(e, n)
        }
        return this.dispatchEvent({
            type: "connected",
            data: t
        }),
        this
    }
    disconnect(t) {
        return this.dispatchEvent({
            type: "disconnected",
            data: t
        }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
    }
    update(t, e, n) {
        let s = null
          , r = null
          , o = null;
        const a = this._targetRay
          , l = this._grip
          , c = this._hand;
        if (t && e.session.visibilityState !== "visible-blurred") {
            if (c && t.hand) {
                o = !0;
                for (const _ of t.hand.values()) {
                    const m = e.getJointPose(_, n)
                      , d = this._getHandJoint(c, _);
                    m !== null && (d.matrix.fromArray(m.transform.matrix),
                    d.matrix.decompose(d.position, d.rotation, d.scale),
                    d.matrixWorldNeedsUpdate = !0,
                    d.jointRadius = m.radius),
                    d.visible = m !== null
                }
                const h = c.joints["index-finger-tip"]
                  , u = c.joints["thumb-tip"]
                  , f = h.position.distanceTo(u.position)
                  , p = .02
                  , g = .005;
                c.inputState.pinching && f > p + g ? (c.inputState.pinching = !1,
                this.dispatchEvent({
                    type: "pinchend",
                    handedness: t.handedness,
                    target: this
                })) : !c.inputState.pinching && f <= p - g && (c.inputState.pinching = !0,
                this.dispatchEvent({
                    type: "pinchstart",
                    handedness: t.handedness,
                    target: this
                }))
            } else
                l !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n),
                r !== null && (l.matrix.fromArray(r.transform.matrix),
                l.matrix.decompose(l.position, l.rotation, l.scale),
                l.matrixWorldNeedsUpdate = !0,
                r.linearVelocity ? (l.hasLinearVelocity = !0,
                l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1,
                r.angularVelocity ? (l.hasAngularVelocity = !0,
                l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
            a !== null && (s = e.getPose(t.targetRaySpace, n),
            s === null && r !== null && (s = r),
            s !== null && (a.matrix.fromArray(s.transform.matrix),
            a.matrix.decompose(a.position, a.rotation, a.scale),
            a.matrixWorldNeedsUpdate = !0,
            s.linearVelocity ? (a.hasLinearVelocity = !0,
            a.linearVelocity.copy(s.linearVelocity)) : a.hasLinearVelocity = !1,
            s.angularVelocity ? (a.hasAngularVelocity = !0,
            a.angularVelocity.copy(s.angularVelocity)) : a.hasAngularVelocity = !1,
            this.dispatchEvent(L0)))
        }
        return a !== null && (a.visible = s !== null),
        l !== null && (l.visible = r !== null),
        c !== null && (c.visible = o !== null),
        this
    }
    _getHandJoint(t, e) {
        if (t.joints[e.jointName] === void 0) {
            const n = new wn;
            n.matrixAutoUpdate = !1,
            n.visible = !1,
            t.joints[e.jointName] = n,
            t.add(n)
        }
        return t.joints[e.jointName]
    }
}
class P0 extends ds {
    constructor(t, e) {
        super();
        const n = this;
        let s = null
          , r = 1
          , o = null
          , a = "local-floor"
          , l = 1
          , c = null
          , h = null
          , u = null
          , f = null
          , p = null
          , g = null;
        const _ = e.getContextAttributes();
        let m = null
          , d = null;
        const x = []
          , v = []
          , S = new Kt;
        let L = null;
        const A = new fn;
        A.layers.enable(1),
        A.viewport = new Ge;
        const R = new fn;
        R.layers.enable(2),
        R.viewport = new Ge;
        const K = [A, R]
          , y = new C0;
        y.layers.enable(1),
        y.layers.enable(2);
        let T = null
          , U = null;
        this.cameraAutoUpdate = !0,
        this.enabled = !1,
        this.isPresenting = !1,
        this.getController = function(H) {
            let J = x[H];
            return J === void 0 && (J = new Eo,
            x[H] = J),
            J.getTargetRaySpace()
        }
        ,
        this.getControllerGrip = function(H) {
            let J = x[H];
            return J === void 0 && (J = new Eo,
            x[H] = J),
            J.getGripSpace()
        }
        ,
        this.getHand = function(H) {
            let J = x[H];
            return J === void 0 && (J = new Eo,
            x[H] = J),
            J.getHandSpace()
        }
        ;
        function k(H) {
            const J = v.indexOf(H.inputSource);
            if (J === -1)
                return;
            const lt = x[J];
            lt !== void 0 && (lt.update(H.inputSource, H.frame, c || o),
            lt.dispatchEvent({
                type: H.type,
                data: H.inputSource
            }))
        }
        function G() {
            s.removeEventListener("select", k),
            s.removeEventListener("selectstart", k),
            s.removeEventListener("selectend", k),
            s.removeEventListener("squeeze", k),
            s.removeEventListener("squeezestart", k),
            s.removeEventListener("squeezeend", k),
            s.removeEventListener("end", G),
            s.removeEventListener("inputsourceschange", P);
            for (let H = 0; H < x.length; H++) {
                const J = v[H];
                J !== null && (v[H] = null,
                x[H].disconnect(J))
            }
            T = null,
            U = null,
            t.setRenderTarget(m),
            p = null,
            f = null,
            u = null,
            s = null,
            d = null,
            et.stop(),
            n.isPresenting = !1,
            t.setPixelRatio(L),
            t.setSize(S.width, S.height, !1),
            n.dispatchEvent({
                type: "sessionend"
            })
        }
        this.setFramebufferScaleFactor = function(H) {
            r = H,
            n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
        }
        ,
        this.setReferenceSpaceType = function(H) {
            a = H,
            n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
        }
        ,
        this.getReferenceSpace = function() {
            return c || o
        }
        ,
        this.setReferenceSpace = function(H) {
            c = H
        }
        ,
        this.getBaseLayer = function() {
            return f !== null ? f : p
        }
        ,
        this.getBinding = function() {
            return u
        }
        ,
        this.getFrame = function() {
            return g
        }
        ,
        this.getSession = function() {
            return s
        }
        ,
        this.setSession = async function(H) {
            if (s = H,
            s !== null) {
                if (m = t.getRenderTarget(),
                s.addEventListener("select", k),
                s.addEventListener("selectstart", k),
                s.addEventListener("selectend", k),
                s.addEventListener("squeeze", k),
                s.addEventListener("squeezestart", k),
                s.addEventListener("squeezeend", k),
                s.addEventListener("end", G),
                s.addEventListener("inputsourceschange", P),
                _.xrCompatible !== !0 && await e.makeXRCompatible(),
                L = t.getPixelRatio(),
                t.getSize(S),
                s.renderState.layers === void 0 || t.capabilities.isWebGL2 === !1) {
                    const J = {
                        antialias: s.renderState.layers === void 0 ? _.antialias : !0,
                        alpha: !0,
                        depth: _.depth,
                        stencil: _.stencil,
                        framebufferScaleFactor: r
                    };
                    p = new XRWebGLLayer(s,e,J),
                    s.updateRenderState({
                        baseLayer: p
                    }),
                    t.setPixelRatio(1),
                    t.setSize(p.framebufferWidth, p.framebufferHeight, !1),
                    d = new Ai(p.framebufferWidth,p.framebufferHeight,{
                        format: Tn,
                        type: ri,
                        colorSpace: t.outputColorSpace,
                        stencilBuffer: _.stencil
                    })
                } else {
                    let J = null
                      , lt = null
                      , mt = null;
                    _.depth && (mt = _.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24,
                    J = _.stencil ? us : Ei,
                    lt = _.stencil ? bi : ei);
                    const _t = {
                        colorFormat: e.RGBA8,
                        depthFormat: mt,
                        scaleFactor: r
                    };
                    u = new XRWebGLBinding(s,e),
                    f = u.createProjectionLayer(_t),
                    s.updateRenderState({
                        layers: [f]
                    }),
                    t.setPixelRatio(1),
                    t.setSize(f.textureWidth, f.textureHeight, !1),
                    d = new Ai(f.textureWidth,f.textureHeight,{
                        format: Tn,
                        type: ri,
                        depthTexture: new zc(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,J),
                        stencilBuffer: _.stencil,
                        colorSpace: t.outputColorSpace,
                        samples: _.antialias ? 4 : 0
                    });
                    const wt = t.properties.get(d);
                    wt.__ignoreDepthValues = f.ignoreDepthValues
                }
                d.isXRRenderTarget = !0,
                this.setFoveation(l),
                c = null,
                o = await s.requestReferenceSpace(a),
                et.setContext(s),
                et.start(),
                n.isPresenting = !0,
                n.dispatchEvent({
                    type: "sessionstart"
                })
            }
        }
        ,
        this.getEnvironmentBlendMode = function() {
            if (s !== null)
                return s.environmentBlendMode
        }
        ;
        function P(H) {
            for (let J = 0; J < H.removed.length; J++) {
                const lt = H.removed[J]
                  , mt = v.indexOf(lt);
                mt >= 0 && (v[mt] = null,
                x[mt].disconnect(lt))
            }
            for (let J = 0; J < H.added.length; J++) {
                const lt = H.added[J];
                let mt = v.indexOf(lt);
                if (mt === -1) {
                    for (let wt = 0; wt < x.length; wt++)
                        if (wt >= v.length) {
                            v.push(lt),
                            mt = wt;
                            break
                        } else if (v[wt] === null) {
                            v[wt] = lt,
                            mt = wt;
                            break
                        }
                    if (mt === -1)
                        break
                }
                const _t = x[mt];
                _t && _t.connect(lt)
            }
        }
        const O = new I
          , N = new I;
        function B(H, J, lt) {
            O.setFromMatrixPosition(J.matrixWorld),
            N.setFromMatrixPosition(lt.matrixWorld);
            const mt = O.distanceTo(N)
              , _t = J.projectionMatrix.elements
              , wt = lt.projectionMatrix.elements
              , Ot = _t[14] / (_t[10] - 1)
              , At = _t[14] / (_t[10] + 1)
              , Qt = (_t[9] + 1) / _t[5]
              , V = (_t[9] - 1) / _t[5]
              , Oe = (_t[8] - 1) / _t[0]
              , Tt = (wt[8] + 1) / wt[0]
              , Dt = Ot * Oe
              , Mt = Ot * Tt
              , ue = mt / (-Oe + Tt)
              , Gt = ue * -Oe;
            J.matrixWorld.decompose(H.position, H.quaternion, H.scale),
            H.translateX(Gt),
            H.translateZ(ue),
            H.matrixWorld.compose(H.position, H.quaternion, H.scale),
            H.matrixWorldInverse.copy(H.matrixWorld).invert();
            const w = Ot + ue
              , b = At + ue
              , W = Dt - Gt
              , rt = Mt + (mt - Gt)
              , it = Qt * At / b * w
              , ot = V * At / b * w;
            H.projectionMatrix.makePerspective(W, rt, it, ot, w, b),
            H.projectionMatrixInverse.copy(H.projectionMatrix).invert()
        }
        function z(H, J) {
            J === null ? H.matrixWorld.copy(H.matrix) : H.matrixWorld.multiplyMatrices(J.matrixWorld, H.matrix),
            H.matrixWorldInverse.copy(H.matrixWorld).invert()
        }
        this.updateCamera = function(H) {
            if (s === null)
                return;
            y.near = R.near = A.near = H.near,
            y.far = R.far = A.far = H.far,
            (T !== y.near || U !== y.far) && (s.updateRenderState({
                depthNear: y.near,
                depthFar: y.far
            }),
            T = y.near,
            U = y.far);
            const J = H.parent
              , lt = y.cameras;
            z(y, J);
            for (let mt = 0; mt < lt.length; mt++)
                z(lt[mt], J);
            lt.length === 2 ? B(y, A, R) : y.projectionMatrix.copy(A.projectionMatrix),
            Y(H, y, J)
        }
        ;
        function Y(H, J, lt) {
            lt === null ? H.matrix.copy(J.matrixWorld) : (H.matrix.copy(lt.matrixWorld),
            H.matrix.invert(),
            H.matrix.multiply(J.matrixWorld)),
            H.matrix.decompose(H.position, H.quaternion, H.scale),
            H.updateMatrixWorld(!0),
            H.projectionMatrix.copy(J.projectionMatrix),
            H.projectionMatrixInverse.copy(J.projectionMatrixInverse),
            H.isPerspectiveCamera && (H.fov = zo * 2 * Math.atan(1 / H.projectionMatrix.elements[5]),
            H.zoom = 1)
        }
        this.getCamera = function() {
            return y
        }
        ,
        this.getFoveation = function() {
            if (!(f === null && p === null))
                return l
        }
        ,
        this.setFoveation = function(H) {
            l = H,
            f !== null && (f.fixedFoveation = H),
            p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = H)
        }
        ;
        let $ = null;
        function Q(H, J) {
            if (h = J.getViewerPose(c || o),
            g = J,
            h !== null) {
                const lt = h.views;
                p !== null && (t.setRenderTargetFramebuffer(d, p.framebuffer),
                t.setRenderTarget(d));
                let mt = !1;
                lt.length !== y.cameras.length && (y.cameras.length = 0,
                mt = !0);
                for (let _t = 0; _t < lt.length; _t++) {
                    const wt = lt[_t];
                    let Ot = null;
                    if (p !== null)
                        Ot = p.getViewport(wt);
                    else {
                        const Qt = u.getViewSubImage(f, wt);
                        Ot = Qt.viewport,
                        _t === 0 && (t.setRenderTargetTextures(d, Qt.colorTexture, f.ignoreDepthValues ? void 0 : Qt.depthStencilTexture),
                        t.setRenderTarget(d))
                    }
                    let At = K[_t];
                    At === void 0 && (At = new fn,
                    At.layers.enable(_t),
                    At.viewport = new Ge,
                    K[_t] = At),
                    At.matrix.fromArray(wt.transform.matrix),
                    At.matrix.decompose(At.position, At.quaternion, At.scale),
                    At.projectionMatrix.fromArray(wt.projectionMatrix),
                    At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),
                    At.viewport.set(Ot.x, Ot.y, Ot.width, Ot.height),
                    _t === 0 && (y.matrix.copy(At.matrix),
                    y.matrix.decompose(y.position, y.quaternion, y.scale)),
                    mt === !0 && y.cameras.push(At)
                }
            }
            for (let lt = 0; lt < x.length; lt++) {
                const mt = v[lt]
                  , _t = x[lt];
                mt !== null && _t !== void 0 && _t.update(mt, J, c || o)
            }
            $ && $(H, J),
            J.detectedPlanes && n.dispatchEvent({
                type: "planesdetected",
                data: J
            }),
            g = null
        }
        const et = new kc;
        et.setAnimationLoop(Q),
        this.setAnimationLoop = function(H) {
            $ = H
        }
        ,
        this.dispose = function() {}
    }
}
function D0(i, t) {
    function e(m, d) {
        m.matrixAutoUpdate === !0 && m.updateMatrix(),
        d.value.copy(m.matrix)
    }
    function n(m, d) {
        d.color.getRGB(m.fogColor.value, Oc(i)),
        d.isFog ? (m.fogNear.value = d.near,
        m.fogFar.value = d.far) : d.isFogExp2 && (m.fogDensity.value = d.density)
    }
    function s(m, d, x, v, S) {
        d.isMeshBasicMaterial || d.isMeshLambertMaterial ? r(m, d) : d.isMeshToonMaterial ? (r(m, d),
        u(m, d)) : d.isMeshPhongMaterial ? (r(m, d),
        h(m, d)) : d.isMeshStandardMaterial ? (r(m, d),
        f(m, d),
        d.isMeshPhysicalMaterial && p(m, d, S)) : d.isMeshMatcapMaterial ? (r(m, d),
        g(m, d)) : d.isMeshDepthMaterial ? r(m, d) : d.isMeshDistanceMaterial ? (r(m, d),
        _(m, d)) : d.isMeshNormalMaterial ? r(m, d) : d.isLineBasicMaterial ? (o(m, d),
        d.isLineDashedMaterial && a(m, d)) : d.isPointsMaterial ? l(m, d, x, v) : d.isSpriteMaterial ? c(m, d) : d.isShadowMaterial ? (m.color.value.copy(d.color),
        m.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1)
    }
    function r(m, d) {
        m.opacity.value = d.opacity,
        d.color && m.diffuse.value.copy(d.color),
        d.emissive && m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),
        d.map && (m.map.value = d.map,
        e(d.map, m.mapTransform)),
        d.alphaMap && (m.alphaMap.value = d.alphaMap,
        e(d.alphaMap, m.alphaMapTransform)),
        d.bumpMap && (m.bumpMap.value = d.bumpMap,
        e(d.bumpMap, m.bumpMapTransform),
        m.bumpScale.value = d.bumpScale,
        d.side === Je && (m.bumpScale.value *= -1)),
        d.normalMap && (m.normalMap.value = d.normalMap,
        e(d.normalMap, m.normalMapTransform),
        m.normalScale.value.copy(d.normalScale),
        d.side === Je && m.normalScale.value.negate()),
        d.displacementMap && (m.displacementMap.value = d.displacementMap,
        e(d.displacementMap, m.displacementMapTransform),
        m.displacementScale.value = d.displacementScale,
        m.displacementBias.value = d.displacementBias),
        d.emissiveMap && (m.emissiveMap.value = d.emissiveMap,
        e(d.emissiveMap, m.emissiveMapTransform)),
        d.specularMap && (m.specularMap.value = d.specularMap,
        e(d.specularMap, m.specularMapTransform)),
        d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
        const x = t.get(d).envMap;
        if (x && (m.envMap.value = x,
        m.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1,
        m.reflectivity.value = d.reflectivity,
        m.ior.value = d.ior,
        m.refractionRatio.value = d.refractionRatio),
        d.lightMap) {
            m.lightMap.value = d.lightMap;
            const v = i._useLegacyLights === !0 ? Math.PI : 1;
            m.lightMapIntensity.value = d.lightMapIntensity * v,
            e(d.lightMap, m.lightMapTransform)
        }
        d.aoMap && (m.aoMap.value = d.aoMap,
        m.aoMapIntensity.value = d.aoMapIntensity,
        e(d.aoMap, m.aoMapTransform))
    }
    function o(m, d) {
        m.diffuse.value.copy(d.color),
        m.opacity.value = d.opacity,
        d.map && (m.map.value = d.map,
        e(d.map, m.mapTransform))
    }
    function a(m, d) {
        m.dashSize.value = d.dashSize,
        m.totalSize.value = d.dashSize + d.gapSize,
        m.scale.value = d.scale
    }
    function l(m, d, x, v) {
        m.diffuse.value.copy(d.color),
        m.opacity.value = d.opacity,
        m.size.value = d.size * x,
        m.scale.value = v * .5,
        d.map && (m.map.value = d.map,
        e(d.map, m.uvTransform)),
        d.alphaMap && (m.alphaMap.value = d.alphaMap,
        e(d.alphaMap, m.alphaMapTransform)),
        d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest)
    }
    function c(m, d) {
        m.diffuse.value.copy(d.color),
        m.opacity.value = d.opacity,
        m.rotation.value = d.rotation,
        d.map && (m.map.value = d.map,
        e(d.map, m.mapTransform)),
        d.alphaMap && (m.alphaMap.value = d.alphaMap,
        e(d.alphaMap, m.alphaMapTransform)),
        d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest)
    }
    function h(m, d) {
        m.specular.value.copy(d.specular),
        m.shininess.value = Math.max(d.shininess, 1e-4)
    }
    function u(m, d) {
        d.gradientMap && (m.gradientMap.value = d.gradientMap)
    }
    function f(m, d) {
        m.metalness.value = d.metalness,
        d.metalnessMap && (m.metalnessMap.value = d.metalnessMap,
        e(d.metalnessMap, m.metalnessMapTransform)),
        m.roughness.value = d.roughness,
        d.roughnessMap && (m.roughnessMap.value = d.roughnessMap,
        e(d.roughnessMap, m.roughnessMapTransform)),
        t.get(d).envMap && (m.envMapIntensity.value = d.envMapIntensity)
    }
    function p(m, d, x) {
        m.ior.value = d.ior,
        d.sheen > 0 && (m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),
        m.sheenRoughness.value = d.sheenRoughness,
        d.sheenColorMap && (m.sheenColorMap.value = d.sheenColorMap,
        e(d.sheenColorMap, m.sheenColorMapTransform)),
        d.sheenRoughnessMap && (m.sheenRoughnessMap.value = d.sheenRoughnessMap,
        e(d.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
        d.clearcoat > 0 && (m.clearcoat.value = d.clearcoat,
        m.clearcoatRoughness.value = d.clearcoatRoughness,
        d.clearcoatMap && (m.clearcoatMap.value = d.clearcoatMap,
        e(d.clearcoatMap, m.clearcoatMapTransform)),
        d.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap,
        e(d.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
        d.clearcoatNormalMap && (m.clearcoatNormalMap.value = d.clearcoatNormalMap,
        e(d.clearcoatNormalMap, m.clearcoatNormalMapTransform),
        m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),
        d.side === Je && m.clearcoatNormalScale.value.negate())),
        d.iridescence > 0 && (m.iridescence.value = d.iridescence,
        m.iridescenceIOR.value = d.iridescenceIOR,
        m.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0],
        m.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1],
        d.iridescenceMap && (m.iridescenceMap.value = d.iridescenceMap,
        e(d.iridescenceMap, m.iridescenceMapTransform)),
        d.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = d.iridescenceThicknessMap,
        e(d.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
        d.transmission > 0 && (m.transmission.value = d.transmission,
        m.transmissionSamplerMap.value = x.texture,
        m.transmissionSamplerSize.value.set(x.width, x.height),
        d.transmissionMap && (m.transmissionMap.value = d.transmissionMap,
        e(d.transmissionMap, m.transmissionMapTransform)),
        m.thickness.value = d.thickness,
        d.thicknessMap && (m.thicknessMap.value = d.thicknessMap,
        e(d.thicknessMap, m.thicknessMapTransform)),
        m.attenuationDistance.value = d.attenuationDistance,
        m.attenuationColor.value.copy(d.attenuationColor)),
        d.anisotropy > 0 && (m.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)),
        d.anisotropyMap && (m.anisotropyMap.value = d.anisotropyMap,
        e(d.anisotropyMap, m.anisotropyMapTransform))),
        m.specularIntensity.value = d.specularIntensity,
        m.specularColor.value.copy(d.specularColor),
        d.specularColorMap && (m.specularColorMap.value = d.specularColorMap,
        e(d.specularColorMap, m.specularColorMapTransform)),
        d.specularIntensityMap && (m.specularIntensityMap.value = d.specularIntensityMap,
        e(d.specularIntensityMap, m.specularIntensityMapTransform))
    }
    function g(m, d) {
        d.matcap && (m.matcap.value = d.matcap)
    }
    function _(m, d) {
        const x = t.get(d).light;
        m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),
        m.nearDistance.value = x.shadow.camera.near,
        m.farDistance.value = x.shadow.camera.far
    }
    return {
        refreshFogUniforms: n,
        refreshMaterialUniforms: s
    }
}
function I0(i, t, e, n) {
    let s = {}
      , r = {}
      , o = [];
    const a = e.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
    function l(x, v) {
        const S = v.program;
        n.uniformBlockBinding(x, S)
    }
    function c(x, v) {
        let S = s[x.id];
        S === void 0 && (g(x),
        S = h(x),
        s[x.id] = S,
        x.addEventListener("dispose", m));
        const L = v.program;
        n.updateUBOMapping(x, L);
        const A = t.render.frame;
        r[x.id] !== A && (f(x),
        r[x.id] = A)
    }
    function h(x) {
        const v = u();
        x.__bindingPointIndex = v;
        const S = i.createBuffer()
          , L = x.__size
          , A = x.usage;
        return i.bindBuffer(i.UNIFORM_BUFFER, S),
        i.bufferData(i.UNIFORM_BUFFER, L, A),
        i.bindBuffer(i.UNIFORM_BUFFER, null),
        i.bindBufferBase(i.UNIFORM_BUFFER, v, S),
        S
    }
    function u() {
        for (let x = 0; x < a; x++)
            if (o.indexOf(x) === -1)
                return o.push(x),
                x;
        return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),
        0
    }
    function f(x) {
        const v = s[x.id]
          , S = x.uniforms
          , L = x.__cache;
        i.bindBuffer(i.UNIFORM_BUFFER, v);
        for (let A = 0, R = S.length; A < R; A++) {
            const K = Array.isArray(S[A]) ? S[A] : [S[A]];
            for (let y = 0, T = K.length; y < T; y++) {
                const U = K[y];
                if (p(U, A, y, L) === !0) {
                    const k = U.__offset
                      , G = Array.isArray(U.value) ? U.value : [U.value];
                    let P = 0;
                    for (let O = 0; O < G.length; O++) {
                        const N = G[O]
                          , B = _(N);
                        typeof N == "number" || typeof N == "boolean" ? (U.__data[0] = N,
                        i.bufferSubData(i.UNIFORM_BUFFER, k + P, U.__data)) : N.isMatrix3 ? (U.__data[0] = N.elements[0],
                        U.__data[1] = N.elements[1],
                        U.__data[2] = N.elements[2],
                        U.__data[3] = 0,
                        U.__data[4] = N.elements[3],
                        U.__data[5] = N.elements[4],
                        U.__data[6] = N.elements[5],
                        U.__data[7] = 0,
                        U.__data[8] = N.elements[6],
                        U.__data[9] = N.elements[7],
                        U.__data[10] = N.elements[8],
                        U.__data[11] = 0) : (N.toArray(U.__data, P),
                        P += B.storage / Float32Array.BYTES_PER_ELEMENT)
                    }
                    i.bufferSubData(i.UNIFORM_BUFFER, k, U.__data)
                }
            }
        }
        i.bindBuffer(i.UNIFORM_BUFFER, null)
    }
    function p(x, v, S, L) {
        const A = x.value
          , R = v + "_" + S;
        if (L[R] === void 0)
            return typeof A == "number" || typeof A == "boolean" ? L[R] = A : L[R] = A.clone(),
            !0;
        {
            const K = L[R];
            if (typeof A == "number" || typeof A == "boolean") {
                if (K !== A)
                    return L[R] = A,
                    !0
            } else if (K.equals(A) === !1)
                return K.copy(A),
                !0
        }
        return !1
    }
    function g(x) {
        const v = x.uniforms;
        let S = 0;
        const L = 16;
        for (let R = 0, K = v.length; R < K; R++) {
            const y = Array.isArray(v[R]) ? v[R] : [v[R]];
            for (let T = 0, U = y.length; T < U; T++) {
                const k = y[T]
                  , G = Array.isArray(k.value) ? k.value : [k.value];
                for (let P = 0, O = G.length; P < O; P++) {
                    const N = G[P]
                      , B = _(N)
                      , z = S % L;
                    z !== 0 && L - z < B.boundary && (S += L - z),
                    k.__data = new Float32Array(B.storage / Float32Array.BYTES_PER_ELEMENT),
                    k.__offset = S,
                    S += B.storage
                }
            }
        }
        const A = S % L;
        return A > 0 && (S += L - A),
        x.__size = S,
        x.__cache = {},
        this
    }
    function _(x) {
        const v = {
            boundary: 0,
            storage: 0
        };
        return typeof x == "number" || typeof x == "boolean" ? (v.boundary = 4,
        v.storage = 4) : x.isVector2 ? (v.boundary = 8,
        v.storage = 8) : x.isVector3 || x.isColor ? (v.boundary = 16,
        v.storage = 12) : x.isVector4 ? (v.boundary = 16,
        v.storage = 16) : x.isMatrix3 ? (v.boundary = 48,
        v.storage = 48) : x.isMatrix4 ? (v.boundary = 64,
        v.storage = 64) : x.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", x),
        v
    }
    function m(x) {
        const v = x.target;
        v.removeEventListener("dispose", m);
        const S = o.indexOf(v.__bindingPointIndex);
        o.splice(S, 1),
        i.deleteBuffer(s[v.id]),
        delete s[v.id],
        delete r[v.id]
    }
    function d() {
        for (const x in s)
            i.deleteBuffer(s[x]);
        o = [],
        s = {},
        r = {}
    }
    return {
        bind: l,
        update: c,
        dispose: d
    }
}
class qc {
    constructor(t={}) {
        const {canvas: e=Ru(), context: n=null, depth: s=!0, stencil: r=!0, alpha: o=!1, antialias: a=!1, premultipliedAlpha: l=!0, preserveDrawingBuffer: c=!1, powerPreference: h="default", failIfMajorPerformanceCaveat: u=!1} = t;
        this.isWebGLRenderer = !0;
        let f;
        n !== null ? f = n.getContextAttributes().alpha : f = o;
        const p = new Uint32Array(4)
          , g = new Int32Array(4);
        let _ = null
          , m = null;
        const d = []
          , x = [];
        this.domElement = e,
        this.debug = {
            checkShaderErrors: !0,
            onShaderError: null
        },
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this._outputColorSpace = Me,
        this._useLegacyLights = !1,
        this.toneMapping = si,
        this.toneMappingExposure = 1;
        const v = this;
        let S = !1
          , L = 0
          , A = 0
          , R = null
          , K = -1
          , y = null;
        const T = new Ge
          , U = new Ge;
        let k = null;
        const G = new Bt(0);
        let P = 0
          , O = e.width
          , N = e.height
          , B = 1
          , z = null
          , Y = null;
        const $ = new Ge(0,0,O,N)
          , Q = new Ge(0,0,O,N);
        let et = !1;
        const H = new Zo;
        let J = !1
          , lt = !1
          , mt = null;
        const _t = new be
          , wt = new Kt
          , Ot = new I
          , At = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        function Qt() {
            return R === null ? B : 1
        }
        let V = n;
        function Oe(E, F) {
            for (let q = 0; q < E.length; q++) {
                const Z = E[q]
                  , X = e.getContext(Z, F);
                if (X !== null)
                    return X
            }
            return null
        }
        try {
            const E = {
                alpha: !0,
                depth: s,
                stencil: r,
                antialias: a,
                premultipliedAlpha: l,
                preserveDrawingBuffer: c,
                powerPreference: h,
                failIfMajorPerformanceCaveat: u
            };
            if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Ko}`),
            e.addEventListener("webglcontextlost", ct, !1),
            e.addEventListener("webglcontextrestored", D, !1),
            e.addEventListener("webglcontextcreationerror", dt, !1),
            V === null) {
                const F = ["webgl2", "webgl", "experimental-webgl"];
                if (v.isWebGL1Renderer === !0 && F.shift(),
                V = Oe(F, E),
                V === null)
                    throw Oe(F) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
            }
            typeof WebGLRenderingContext < "u" && V instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),
            V.getShaderPrecisionFormat === void 0 && (V.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }
            )
        } catch (E) {
            throw console.error("THREE.WebGLRenderer: " + E.message),
            E
        }
        let Tt, Dt, Mt, ue, Gt, w, b, W, rt, it, ot, yt, ft, xt, Rt, kt, nt, ie, zt, It, bt, vt, Xt, se;
        function ye() {
            Tt = new Vp(V),
            Dt = new Fp(V,Tt,t),
            Tt.init(Dt),
            vt = new R0(V,Tt,Dt),
            Mt = new w0(V,Tt,Dt),
            ue = new qp(V),
            Gt = new f0,
            w = new A0(V,Tt,Mt,Gt,Dt,vt,ue),
            b = new Bp(v),
            W = new Hp(v),
            rt = new Qu(V,Dt),
            Xt = new Op(V,Tt,rt,Dt),
            it = new Wp(V,rt,ue,Xt),
            ot = new jp(V,it,rt,ue),
            zt = new $p(V,Dt,w),
            kt = new kp(Gt),
            yt = new u0(v,b,W,Tt,Dt,Xt,kt),
            ft = new D0(v,Gt),
            xt = new p0,
            Rt = new M0(Tt,Dt),
            ie = new Up(v,b,W,Mt,ot,f,l),
            nt = new T0(v,ot,Dt),
            se = new I0(V,ue,Dt,Mt),
            It = new Np(V,Tt,ue,Dt),
            bt = new Xp(V,Tt,ue,Dt),
            ue.programs = yt.programs,
            v.capabilities = Dt,
            v.extensions = Tt,
            v.properties = Gt,
            v.renderLists = xt,
            v.shadowMap = nt,
            v.state = Mt,
            v.info = ue
        }
        ye();
        const $t = new P0(v,V);
        this.xr = $t,
        this.getContext = function() {
            return V
        }
        ,
        this.getContextAttributes = function() {
            return V.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            const E = Tt.get("WEBGL_lose_context");
            E && E.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            const E = Tt.get("WEBGL_lose_context");
            E && E.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return B
        }
        ,
        this.setPixelRatio = function(E) {
            E !== void 0 && (B = E,
            this.setSize(O, N, !1))
        }
        ,
        this.getSize = function(E) {
            return E.set(O, N)
        }
        ,
        this.setSize = function(E, F, q=!0) {
            if ($t.isPresenting) {
                console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                return
            }
            O = E,
            N = F,
            e.width = Math.floor(E * B),
            e.height = Math.floor(F * B),
            q === !0 && (e.style.width = E + "px",
            e.style.height = F + "px"),
            this.setViewport(0, 0, E, F)
        }
        ,
        this.getDrawingBufferSize = function(E) {
            return E.set(O * B, N * B).floor()
        }
        ,
        this.setDrawingBufferSize = function(E, F, q) {
            O = E,
            N = F,
            B = q,
            e.width = Math.floor(E * q),
            e.height = Math.floor(F * q),
            this.setViewport(0, 0, E, F)
        }
        ,
        this.getCurrentViewport = function(E) {
            return E.copy(T)
        }
        ,
        this.getViewport = function(E) {
            return E.copy($)
        }
        ,
        this.setViewport = function(E, F, q, Z) {
            E.isVector4 ? $.set(E.x, E.y, E.z, E.w) : $.set(E, F, q, Z),
            Mt.viewport(T.copy($).multiplyScalar(B).floor())
        }
        ,
        this.getScissor = function(E) {
            return E.copy(Q)
        }
        ,
        this.setScissor = function(E, F, q, Z) {
            E.isVector4 ? Q.set(E.x, E.y, E.z, E.w) : Q.set(E, F, q, Z),
            Mt.scissor(U.copy(Q).multiplyScalar(B).floor())
        }
        ,
        this.getScissorTest = function() {
            return et
        }
        ,
        this.setScissorTest = function(E) {
            Mt.setScissorTest(et = E)
        }
        ,
        this.setOpaqueSort = function(E) {
            z = E
        }
        ,
        this.setTransparentSort = function(E) {
            Y = E
        }
        ,
        this.getClearColor = function(E) {
            return E.copy(ie.getClearColor())
        }
        ,
        this.setClearColor = function() {
            ie.setClearColor.apply(ie, arguments)
        }
        ,
        this.getClearAlpha = function() {
            return ie.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            ie.setClearAlpha.apply(ie, arguments)
        }
        ,
        this.clear = function(E=!0, F=!0, q=!0) {
            let Z = 0;
            if (E) {
                let X = !1;
                if (R !== null) {
                    const gt = R.texture.format;
                    X = gt === Sc || gt === yc || gt === Mc
                }
                if (X) {
                    const gt = R.texture.type
                      , Et = gt === ri || gt === ei || gt === $o || gt === bi || gt === vc || gt === xc
                      , Ut = ie.getClearColor()
                      , Ft = ie.getClearAlpha()
                      , Yt = Ut.r
                      , Ht = Ut.g
                      , Vt = Ut.b;
                    Et ? (p[0] = Yt,
                    p[1] = Ht,
                    p[2] = Vt,
                    p[3] = Ft,
                    V.clearBufferuiv(V.COLOR, 0, p)) : (g[0] = Yt,
                    g[1] = Ht,
                    g[2] = Vt,
                    g[3] = Ft,
                    V.clearBufferiv(V.COLOR, 0, g))
                } else
                    Z |= V.COLOR_BUFFER_BIT
            }
            F && (Z |= V.DEPTH_BUFFER_BIT),
            q && (Z |= V.STENCIL_BUFFER_BIT,
            this.state.buffers.stencil.setMask(4294967295)),
            V.clear(Z)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            e.removeEventListener("webglcontextlost", ct, !1),
            e.removeEventListener("webglcontextrestored", D, !1),
            e.removeEventListener("webglcontextcreationerror", dt, !1),
            xt.dispose(),
            Rt.dispose(),
            Gt.dispose(),
            b.dispose(),
            W.dispose(),
            ot.dispose(),
            Xt.dispose(),
            se.dispose(),
            yt.dispose(),
            $t.dispose(),
            $t.removeEventListener("sessionstart", qe),
            $t.removeEventListener("sessionend", pe),
            mt && (mt.dispose(),
            mt = null),
            Ke.stop()
        }
        ;
        function ct(E) {
            E.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            S = !0
        }
        function D() {
            console.log("THREE.WebGLRenderer: Context Restored."),
            S = !1;
            const E = ue.autoReset
              , F = nt.enabled
              , q = nt.autoUpdate
              , Z = nt.needsUpdate
              , X = nt.type;
            ye(),
            ue.autoReset = E,
            nt.enabled = F,
            nt.autoUpdate = q,
            nt.needsUpdate = Z,
            nt.type = X
        }
        function dt(E) {
            console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage)
        }
        function pt(E) {
            const F = E.target;
            F.removeEventListener("dispose", pt),
            Nt(F)
        }
        function Nt(E) {
            Ct(E),
            Gt.remove(E)
        }
        function Ct(E) {
            const F = Gt.get(E).programs;
            F !== void 0 && (F.forEach(function(q) {
                yt.releaseProgram(q)
            }),
            E.isShaderMaterial && yt.releaseShaderCache(E))
        }
        this.renderBufferDirect = function(E, F, q, Z, X, gt) {
            F === null && (F = At);
            const Et = X.isMesh && X.matrixWorld.determinant() < 0
              , Ut = Eh(E, F, q, Z, X);
            Mt.setMaterial(Z, Et);
            let Ft = q.index
              , Yt = 1;
            if (Z.wireframe === !0) {
                if (Ft = it.getWireframeAttribute(q),
                Ft === void 0)
                    return;
                Yt = 2
            }
            const Ht = q.drawRange
              , Vt = q.attributes.position;
            let Ee = Ht.start * Yt
              , on = (Ht.start + Ht.count) * Yt;
            gt !== null && (Ee = Math.max(Ee, gt.start * Yt),
            on = Math.min(on, (gt.start + gt.count) * Yt)),
            Ft !== null ? (Ee = Math.max(Ee, 0),
            on = Math.min(on, Ft.count)) : Vt != null && (Ee = Math.max(Ee, 0),
            on = Math.min(on, Vt.count));
            const Fe = on - Ee;
            if (Fe < 0 || Fe === 1 / 0)
                return;
            Xt.setup(X, Z, Ut, q, Ft);
            let Nn, ve = It;
            if (Ft !== null && (Nn = rt.get(Ft),
            ve = bt,
            ve.setIndex(Nn)),
            X.isMesh)
                Z.wireframe === !0 ? (Mt.setLineWidth(Z.wireframeLinewidth * Qt()),
                ve.setMode(V.LINES)) : ve.setMode(V.TRIANGLES);
            else if (X.isLine) {
                let jt = Z.linewidth;
                jt === void 0 && (jt = 1),
                Mt.setLineWidth(jt * Qt()),
                X.isLineSegments ? ve.setMode(V.LINES) : X.isLineLoop ? ve.setMode(V.LINE_LOOP) : ve.setMode(V.LINE_STRIP)
            } else
                X.isPoints ? ve.setMode(V.POINTS) : X.isSprite && ve.setMode(V.TRIANGLES);
            if (X.isBatchedMesh)
                ve.renderMultiDraw(X._multiDrawStarts, X._multiDrawCounts, X._multiDrawCount);
            else if (X.isInstancedMesh)
                ve.renderInstances(Ee, Fe, X.count);
            else if (q.isInstancedBufferGeometry) {
                const jt = q._maxInstanceCount !== void 0 ? q._maxInstanceCount : 1 / 0
                  , Wr = Math.min(q.instanceCount, jt);
                ve.renderInstances(Ee, Fe, Wr)
            } else
                ve.render(Ee, Fe)
        }
        ;
        function fe(E, F, q) {
            E.transparent === !0 && E.side === bn && E.forceSinglePass === !1 ? (E.side = Je,
            E.needsUpdate = !0,
            Ws(E, F, q),
            E.side = ai,
            E.needsUpdate = !0,
            Ws(E, F, q),
            E.side = bn) : Ws(E, F, q)
        }
        this.compile = function(E, F, q=null) {
            q === null && (q = E),
            m = Rt.get(q),
            m.init(),
            x.push(m),
            q.traverseVisible(function(X) {
                X.isLight && X.layers.test(F.layers) && (m.pushLight(X),
                X.castShadow && m.pushShadow(X))
            }),
            E !== q && E.traverseVisible(function(X) {
                X.isLight && X.layers.test(F.layers) && (m.pushLight(X),
                X.castShadow && m.pushShadow(X))
            }),
            m.setupLights(v._useLegacyLights);
            const Z = new Set;
            return E.traverse(function(X) {
                const gt = X.material;
                if (gt)
                    if (Array.isArray(gt))
                        for (let Et = 0; Et < gt.length; Et++) {
                            const Ut = gt[Et];
                            fe(Ut, q, X),
                            Z.add(Ut)
                        }
                    else
                        fe(gt, q, X),
                        Z.add(gt)
            }),
            x.pop(),
            m = null,
            Z
        }
        ,
        this.compileAsync = function(E, F, q=null) {
            const Z = this.compile(E, F, q);
            return new Promise(X => {
                function gt() {
                    if (Z.forEach(function(Et) {
                        Gt.get(Et).currentProgram.isReady() && Z.delete(Et)
                    }),
                    Z.size === 0) {
                        X(E);
                        return
                    }
                    setTimeout(gt, 10)
                }
                Tt.get("KHR_parallel_shader_compile") !== null ? gt() : setTimeout(gt, 10)
            }
            )
        }
        ;
        let de = null;
        function Ne(E) {
            de && de(E)
        }
        function qe() {
            Ke.stop()
        }
        function pe() {
            Ke.start()
        }
        const Ke = new kc;
        Ke.setAnimationLoop(Ne),
        typeof self < "u" && Ke.setContext(self),
        this.setAnimationLoop = function(E) {
            de = E,
            $t.setAnimationLoop(E),
            E === null ? Ke.stop() : Ke.start()
        }
        ,
        $t.addEventListener("sessionstart", qe),
        $t.addEventListener("sessionend", pe),
        this.render = function(E, F) {
            if (F !== void 0 && F.isCamera !== !0) {
                console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                return
            }
            if (S === !0)
                return;
            E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(),
            F.parent === null && F.matrixWorldAutoUpdate === !0 && F.updateMatrixWorld(),
            $t.enabled === !0 && $t.isPresenting === !0 && ($t.cameraAutoUpdate === !0 && $t.updateCamera(F),
            F = $t.getCamera()),
            E.isScene === !0 && E.onBeforeRender(v, E, F, R),
            m = Rt.get(E, x.length),
            m.init(),
            x.push(m),
            _t.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse),
            H.setFromProjectionMatrix(_t),
            lt = this.localClippingEnabled,
            J = kt.init(this.clippingPlanes, lt),
            _ = xt.get(E, d.length),
            _.init(),
            d.push(_),
            Ln(E, F, 0, v.sortObjects),
            _.finish(),
            v.sortObjects === !0 && _.sort(z, Y),
            this.info.render.frame++,
            J === !0 && kt.beginShadows();
            const q = m.state.shadowsArray;
            if (nt.render(q, E, F),
            J === !0 && kt.endShadows(),
            this.info.autoReset === !0 && this.info.reset(),
            ie.render(_, E),
            m.setupLights(v._useLegacyLights),
            F.isArrayCamera) {
                const Z = F.cameras;
                for (let X = 0, gt = Z.length; X < gt; X++) {
                    const Et = Z[X];
                    ua(_, E, Et, Et.viewport)
                }
            } else
                ua(_, E, F);
            R !== null && (w.updateMultisampleRenderTarget(R),
            w.updateRenderTargetMipmap(R)),
            E.isScene === !0 && E.onAfterRender(v, E, F),
            Xt.resetDefaultState(),
            K = -1,
            y = null,
            x.pop(),
            x.length > 0 ? m = x[x.length - 1] : m = null,
            d.pop(),
            d.length > 0 ? _ = d[d.length - 1] : _ = null
        }
        ;
        function Ln(E, F, q, Z) {
            if (E.visible === !1)
                return;
            if (E.layers.test(F.layers)) {
                if (E.isGroup)
                    q = E.renderOrder;
                else if (E.isLOD)
                    E.autoUpdate === !0 && E.update(F);
                else if (E.isLight)
                    m.pushLight(E),
                    E.castShadow && m.pushShadow(E);
                else if (E.isSprite) {
                    if (!E.frustumCulled || H.intersectsSprite(E)) {
                        Z && Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);
                        const Et = ot.update(E)
                          , Ut = E.material;
                        Ut.visible && _.push(E, Et, Ut, q, Ot.z, null)
                    }
                } else if ((E.isMesh || E.isLine || E.isPoints) && (!E.frustumCulled || H.intersectsObject(E))) {
                    const Et = ot.update(E)
                      , Ut = E.material;
                    if (Z && (E.boundingSphere !== void 0 ? (E.boundingSphere === null && E.computeBoundingSphere(),
                    Ot.copy(E.boundingSphere.center)) : (Et.boundingSphere === null && Et.computeBoundingSphere(),
                    Ot.copy(Et.boundingSphere.center)),
                    Ot.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),
                    Array.isArray(Ut)) {
                        const Ft = Et.groups;
                        for (let Yt = 0, Ht = Ft.length; Yt < Ht; Yt++) {
                            const Vt = Ft[Yt]
                              , Ee = Ut[Vt.materialIndex];
                            Ee && Ee.visible && _.push(E, Et, Ee, q, Ot.z, Vt)
                        }
                    } else
                        Ut.visible && _.push(E, Et, Ut, q, Ot.z, null)
                }
            }
            const gt = E.children;
            for (let Et = 0, Ut = gt.length; Et < Ut; Et++)
                Ln(gt[Et], F, q, Z)
        }
        function ua(E, F, q, Z) {
            const X = E.opaque
              , gt = E.transmissive
              , Et = E.transparent;
            m.setupLightsView(q),
            J === !0 && kt.setGlobalState(v.clippingPlanes, q),
            gt.length > 0 && bh(X, gt, F, q),
            Z && Mt.viewport(T.copy(Z)),
            X.length > 0 && Vs(X, F, q),
            gt.length > 0 && Vs(gt, F, q),
            Et.length > 0 && Vs(Et, F, q),
            Mt.buffers.depth.setTest(!0),
            Mt.buffers.depth.setMask(!0),
            Mt.buffers.color.setMask(!0),
            Mt.setPolygonOffset(!1)
        }
        function bh(E, F, q, Z) {
            if ((q.isScene === !0 ? q.overrideMaterial : null) !== null)
                return;
            const gt = Dt.isWebGL2;
            mt === null && (mt = new Ai(1,1,{
                generateMipmaps: !0,
                type: Tt.has("EXT_color_buffer_half_float") ? Ns : ri,
                minFilter: Os,
                samples: gt ? 4 : 0
            })),
            v.getDrawingBufferSize(wt),
            gt ? mt.setSize(wt.x, wt.y) : mt.setSize(Go(wt.x), Go(wt.y));
            const Et = v.getRenderTarget();
            v.setRenderTarget(mt),
            v.getClearColor(G),
            P = v.getClearAlpha(),
            P < 1 && v.setClearColor(16777215, .5),
            v.clear();
            const Ut = v.toneMapping;
            v.toneMapping = si,
            Vs(E, q, Z),
            w.updateMultisampleRenderTarget(mt),
            w.updateRenderTargetMipmap(mt);
            let Ft = !1;
            for (let Yt = 0, Ht = F.length; Yt < Ht; Yt++) {
                const Vt = F[Yt]
                  , Ee = Vt.object
                  , on = Vt.geometry
                  , Fe = Vt.material
                  , Nn = Vt.group;
                if (Fe.side === bn && Ee.layers.test(Z.layers)) {
                    const ve = Fe.side;
                    Fe.side = Je,
                    Fe.needsUpdate = !0,
                    fa(Ee, q, Z, on, Fe, Nn),
                    Fe.side = ve,
                    Fe.needsUpdate = !0,
                    Ft = !0
                }
            }
            Ft === !0 && (w.updateMultisampleRenderTarget(mt),
            w.updateRenderTargetMipmap(mt)),
            v.setRenderTarget(Et),
            v.setClearColor(G, P),
            v.toneMapping = Ut
        }
        function Vs(E, F, q) {
            const Z = F.isScene === !0 ? F.overrideMaterial : null;
            for (let X = 0, gt = E.length; X < gt; X++) {
                const Et = E[X]
                  , Ut = Et.object
                  , Ft = Et.geometry
                  , Yt = Z === null ? Et.material : Z
                  , Ht = Et.group;
                Ut.layers.test(q.layers) && fa(Ut, F, q, Ft, Yt, Ht)
            }
        }
        function fa(E, F, q, Z, X, gt) {
            E.onBeforeRender(v, F, q, Z, X, gt),
            E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse, E.matrixWorld),
            E.normalMatrix.getNormalMatrix(E.modelViewMatrix),
            X.onBeforeRender(v, F, q, Z, E, gt),
            X.transparent === !0 && X.side === bn && X.forceSinglePass === !1 ? (X.side = Je,
            X.needsUpdate = !0,
            v.renderBufferDirect(q, F, Z, X, E, gt),
            X.side = ai,
            X.needsUpdate = !0,
            v.renderBufferDirect(q, F, Z, X, E, gt),
            X.side = bn) : v.renderBufferDirect(q, F, Z, X, E, gt),
            E.onAfterRender(v, F, q, Z, X, gt)
        }
        function Ws(E, F, q) {
            F.isScene !== !0 && (F = At);
            const Z = Gt.get(E)
              , X = m.state.lights
              , gt = m.state.shadowsArray
              , Et = X.state.version
              , Ut = yt.getParameters(E, X.state, gt, F, q)
              , Ft = yt.getProgramCacheKey(Ut);
            let Yt = Z.programs;
            Z.environment = E.isMeshStandardMaterial ? F.environment : null,
            Z.fog = F.fog,
            Z.envMap = (E.isMeshStandardMaterial ? W : b).get(E.envMap || Z.environment),
            Yt === void 0 && (E.addEventListener("dispose", pt),
            Yt = new Map,
            Z.programs = Yt);
            let Ht = Yt.get(Ft);
            if (Ht !== void 0) {
                if (Z.currentProgram === Ht && Z.lightsStateVersion === Et)
                    return pa(E, Ut),
                    Ht
            } else
                Ut.uniforms = yt.getUniforms(E),
                E.onBuild(q, Ut, v),
                E.onBeforeCompile(Ut, v),
                Ht = yt.acquireProgram(Ut, Ft),
                Yt.set(Ft, Ht),
                Z.uniforms = Ut.uniforms;
            const Vt = Z.uniforms;
            return (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (Vt.clippingPlanes = kt.uniform),
            pa(E, Ut),
            Z.needsLights = wh(E),
            Z.lightsStateVersion = Et,
            Z.needsLights && (Vt.ambientLightColor.value = X.state.ambient,
            Vt.lightProbe.value = X.state.probe,
            Vt.directionalLights.value = X.state.directional,
            Vt.directionalLightShadows.value = X.state.directionalShadow,
            Vt.spotLights.value = X.state.spot,
            Vt.spotLightShadows.value = X.state.spotShadow,
            Vt.rectAreaLights.value = X.state.rectArea,
            Vt.ltc_1.value = X.state.rectAreaLTC1,
            Vt.ltc_2.value = X.state.rectAreaLTC2,
            Vt.pointLights.value = X.state.point,
            Vt.pointLightShadows.value = X.state.pointShadow,
            Vt.hemisphereLights.value = X.state.hemi,
            Vt.directionalShadowMap.value = X.state.directionalShadowMap,
            Vt.directionalShadowMatrix.value = X.state.directionalShadowMatrix,
            Vt.spotShadowMap.value = X.state.spotShadowMap,
            Vt.spotLightMatrix.value = X.state.spotLightMatrix,
            Vt.spotLightMap.value = X.state.spotLightMap,
            Vt.pointShadowMap.value = X.state.pointShadowMap,
            Vt.pointShadowMatrix.value = X.state.pointShadowMatrix),
            Z.currentProgram = Ht,
            Z.uniformsList = null,
            Ht
        }
        function da(E) {
            if (E.uniformsList === null) {
                const F = E.currentProgram.getUniforms();
                E.uniformsList = wr.seqWithValue(F.seq, E.uniforms)
            }
            return E.uniformsList
        }
        function pa(E, F) {
            const q = Gt.get(E);
            q.outputColorSpace = F.outputColorSpace,
            q.batching = F.batching,
            q.instancing = F.instancing,
            q.instancingColor = F.instancingColor,
            q.skinning = F.skinning,
            q.morphTargets = F.morphTargets,
            q.morphNormals = F.morphNormals,
            q.morphColors = F.morphColors,
            q.morphTargetsCount = F.morphTargetsCount,
            q.numClippingPlanes = F.numClippingPlanes,
            q.numIntersection = F.numClipIntersection,
            q.vertexAlphas = F.vertexAlphas,
            q.vertexTangents = F.vertexTangents,
            q.toneMapping = F.toneMapping
        }
        function Eh(E, F, q, Z, X) {
            F.isScene !== !0 && (F = At),
            w.resetTextureUnits();
            const gt = F.fog
              , Et = Z.isMeshStandardMaterial ? F.environment : null
              , Ut = R === null ? v.outputColorSpace : R.isXRRenderTarget === !0 ? R.texture.colorSpace : qn
              , Ft = (Z.isMeshStandardMaterial ? W : b).get(Z.envMap || Et)
              , Yt = Z.vertexColors === !0 && !!q.attributes.color && q.attributes.color.itemSize === 4
              , Ht = !!q.attributes.tangent && (!!Z.normalMap || Z.anisotropy > 0)
              , Vt = !!q.morphAttributes.position
              , Ee = !!q.morphAttributes.normal
              , on = !!q.morphAttributes.color;
            let Fe = si;
            Z.toneMapped && (R === null || R.isXRRenderTarget === !0) && (Fe = v.toneMapping);
            const Nn = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color
              , ve = Nn !== void 0 ? Nn.length : 0
              , jt = Gt.get(Z)
              , Wr = m.state.lights;
            if (J === !0 && (lt === !0 || E !== y)) {
                const dn = E === y && Z.id === K;
                kt.setState(Z, E, dn)
            }
            let Se = !1;
            Z.version === jt.__version ? (jt.needsLights && jt.lightsStateVersion !== Wr.state.version || jt.outputColorSpace !== Ut || X.isBatchedMesh && jt.batching === !1 || !X.isBatchedMesh && jt.batching === !0 || X.isInstancedMesh && jt.instancing === !1 || !X.isInstancedMesh && jt.instancing === !0 || X.isSkinnedMesh && jt.skinning === !1 || !X.isSkinnedMesh && jt.skinning === !0 || X.isInstancedMesh && jt.instancingColor === !0 && X.instanceColor === null || X.isInstancedMesh && jt.instancingColor === !1 && X.instanceColor !== null || jt.envMap !== Ft || Z.fog === !0 && jt.fog !== gt || jt.numClippingPlanes !== void 0 && (jt.numClippingPlanes !== kt.numPlanes || jt.numIntersection !== kt.numIntersection) || jt.vertexAlphas !== Yt || jt.vertexTangents !== Ht || jt.morphTargets !== Vt || jt.morphNormals !== Ee || jt.morphColors !== on || jt.toneMapping !== Fe || Dt.isWebGL2 === !0 && jt.morphTargetsCount !== ve) && (Se = !0) : (Se = !0,
            jt.__version = Z.version);
            let fi = jt.currentProgram;
            Se === !0 && (fi = Ws(Z, F, X));
            let ma = !1
              , _s = !1
              , Xr = !1;
            const Ve = fi.getUniforms()
              , di = jt.uniforms;
            if (Mt.useProgram(fi.program) && (ma = !0,
            _s = !0,
            Xr = !0),
            Z.id !== K && (K = Z.id,
            _s = !0),
            ma || y !== E) {
                Ve.setValue(V, "projectionMatrix", E.projectionMatrix),
                Ve.setValue(V, "viewMatrix", E.matrixWorldInverse);
                const dn = Ve.map.cameraPosition;
                dn !== void 0 && dn.setValue(V, Ot.setFromMatrixPosition(E.matrixWorld)),
                Dt.logarithmicDepthBuffer && Ve.setValue(V, "logDepthBufFC", 2 / (Math.log(E.far + 1) / Math.LN2)),
                (Z.isMeshPhongMaterial || Z.isMeshToonMaterial || Z.isMeshLambertMaterial || Z.isMeshBasicMaterial || Z.isMeshStandardMaterial || Z.isShaderMaterial) && Ve.setValue(V, "isOrthographic", E.isOrthographicCamera === !0),
                y !== E && (y = E,
                _s = !0,
                Xr = !0)
            }
            if (X.isSkinnedMesh) {
                Ve.setOptional(V, X, "bindMatrix"),
                Ve.setOptional(V, X, "bindMatrixInverse");
                const dn = X.skeleton;
                dn && (Dt.floatVertexTextures ? (dn.boneTexture === null && dn.computeBoneTexture(),
                Ve.setValue(V, "boneTexture", dn.boneTexture, w)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))
            }
            X.isBatchedMesh && (Ve.setOptional(V, X, "batchingTexture"),
            Ve.setValue(V, "batchingTexture", X._matricesTexture, w));
            const qr = q.morphAttributes;
            if ((qr.position !== void 0 || qr.normal !== void 0 || qr.color !== void 0 && Dt.isWebGL2 === !0) && zt.update(X, q, fi),
            (_s || jt.receiveShadow !== X.receiveShadow) && (jt.receiveShadow = X.receiveShadow,
            Ve.setValue(V, "receiveShadow", X.receiveShadow)),
            Z.isMeshGouraudMaterial && Z.envMap !== null && (di.envMap.value = Ft,
            di.flipEnvMap.value = Ft.isCubeTexture && Ft.isRenderTargetTexture === !1 ? -1 : 1),
            _s && (Ve.setValue(V, "toneMappingExposure", v.toneMappingExposure),
            jt.needsLights && Th(di, Xr),
            gt && Z.fog === !0 && ft.refreshFogUniforms(di, gt),
            ft.refreshMaterialUniforms(di, Z, B, N, mt),
            wr.upload(V, da(jt), di, w)),
            Z.isShaderMaterial && Z.uniformsNeedUpdate === !0 && (wr.upload(V, da(jt), di, w),
            Z.uniformsNeedUpdate = !1),
            Z.isSpriteMaterial && Ve.setValue(V, "center", X.center),
            Ve.setValue(V, "modelViewMatrix", X.modelViewMatrix),
            Ve.setValue(V, "normalMatrix", X.normalMatrix),
            Ve.setValue(V, "modelMatrix", X.matrixWorld),
            Z.isShaderMaterial || Z.isRawShaderMaterial) {
                const dn = Z.uniformsGroups;
                for (let Kr = 0, Ah = dn.length; Kr < Ah; Kr++)
                    if (Dt.isWebGL2) {
                        const ga = dn[Kr];
                        se.update(ga, fi),
                        se.bind(ga, fi)
                    } else
                        console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")
            }
            return fi
        }
        function Th(E, F) {
            E.ambientLightColor.needsUpdate = F,
            E.lightProbe.needsUpdate = F,
            E.directionalLights.needsUpdate = F,
            E.directionalLightShadows.needsUpdate = F,
            E.pointLights.needsUpdate = F,
            E.pointLightShadows.needsUpdate = F,
            E.spotLights.needsUpdate = F,
            E.spotLightShadows.needsUpdate = F,
            E.rectAreaLights.needsUpdate = F,
            E.hemisphereLights.needsUpdate = F
        }
        function wh(E) {
            return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0
        }
        this.getActiveCubeFace = function() {
            return L
        }
        ,
        this.getActiveMipmapLevel = function() {
            return A
        }
        ,
        this.getRenderTarget = function() {
            return R
        }
        ,
        this.setRenderTargetTextures = function(E, F, q) {
            Gt.get(E.texture).__webglTexture = F,
            Gt.get(E.depthTexture).__webglTexture = q;
            const Z = Gt.get(E);
            Z.__hasExternalTextures = !0,
            Z.__hasExternalTextures && (Z.__autoAllocateDepthBuffer = q === void 0,
            Z.__autoAllocateDepthBuffer || Tt.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),
            Z.__useRenderToTexture = !1))
        }
        ,
        this.setRenderTargetFramebuffer = function(E, F) {
            const q = Gt.get(E);
            q.__webglFramebuffer = F,
            q.__useDefaultFramebuffer = F === void 0
        }
        ,
        this.setRenderTarget = function(E, F=0, q=0) {
            R = E,
            L = F,
            A = q;
            let Z = !0
              , X = null
              , gt = !1
              , Et = !1;
            if (E) {
                const Ft = Gt.get(E);
                Ft.__useDefaultFramebuffer !== void 0 ? (Mt.bindFramebuffer(V.FRAMEBUFFER, null),
                Z = !1) : Ft.__webglFramebuffer === void 0 ? w.setupRenderTarget(E) : Ft.__hasExternalTextures && w.rebindTextures(E, Gt.get(E.texture).__webglTexture, Gt.get(E.depthTexture).__webglTexture);
                const Yt = E.texture;
                (Yt.isData3DTexture || Yt.isDataArrayTexture || Yt.isCompressedArrayTexture) && (Et = !0);
                const Ht = Gt.get(E).__webglFramebuffer;
                E.isWebGLCubeRenderTarget ? (Array.isArray(Ht[F]) ? X = Ht[F][q] : X = Ht[F],
                gt = !0) : Dt.isWebGL2 && E.samples > 0 && w.useMultisampledRTT(E) === !1 ? X = Gt.get(E).__webglMultisampledFramebuffer : Array.isArray(Ht) ? X = Ht[q] : X = Ht,
                T.copy(E.viewport),
                U.copy(E.scissor),
                k = E.scissorTest
            } else
                T.copy($).multiplyScalar(B).floor(),
                U.copy(Q).multiplyScalar(B).floor(),
                k = et;
            if (Mt.bindFramebuffer(V.FRAMEBUFFER, X) && Dt.drawBuffers && Z && Mt.drawBuffers(E, X),
            Mt.viewport(T),
            Mt.scissor(U),
            Mt.setScissorTest(k),
            gt) {
                const Ft = Gt.get(E.texture);
                V.framebufferTexture2D(V.FRAMEBUFFER, V.COLOR_ATTACHMENT0, V.TEXTURE_CUBE_MAP_POSITIVE_X + F, Ft.__webglTexture, q)
            } else if (Et) {
                const Ft = Gt.get(E.texture)
                  , Yt = F || 0;
                V.framebufferTextureLayer(V.FRAMEBUFFER, V.COLOR_ATTACHMENT0, Ft.__webglTexture, q || 0, Yt)
            }
            K = -1
        }
        ,
        this.readRenderTargetPixels = function(E, F, q, Z, X, gt, Et) {
            if (!(E && E.isWebGLRenderTarget)) {
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                return
            }
            let Ut = Gt.get(E).__webglFramebuffer;
            if (E.isWebGLCubeRenderTarget && Et !== void 0 && (Ut = Ut[Et]),
            Ut) {
                Mt.bindFramebuffer(V.FRAMEBUFFER, Ut);
                try {
                    const Ft = E.texture
                      , Yt = Ft.format
                      , Ht = Ft.type;
                    if (Yt !== Tn && vt.convert(Yt) !== V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        return
                    }
                    const Vt = Ht === Ns && (Tt.has("EXT_color_buffer_half_float") || Dt.isWebGL2 && Tt.has("EXT_color_buffer_float"));
                    if (Ht !== ri && vt.convert(Ht) !== V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE) && !(Ht === ni && (Dt.isWebGL2 || Tt.has("OES_texture_float") || Tt.has("WEBGL_color_buffer_float"))) && !Vt) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        return
                    }
                    F >= 0 && F <= E.width - Z && q >= 0 && q <= E.height - X && V.readPixels(F, q, Z, X, vt.convert(Yt), vt.convert(Ht), gt)
                } finally {
                    const Ft = R !== null ? Gt.get(R).__webglFramebuffer : null;
                    Mt.bindFramebuffer(V.FRAMEBUFFER, Ft)
                }
            }
        }
        ,
        this.copyFramebufferToTexture = function(E, F, q=0) {
            const Z = Math.pow(2, -q)
              , X = Math.floor(F.image.width * Z)
              , gt = Math.floor(F.image.height * Z);
            w.setTexture2D(F, 0),
            V.copyTexSubImage2D(V.TEXTURE_2D, q, 0, 0, E.x, E.y, X, gt),
            Mt.unbindTexture()
        }
        ,
        this.copyTextureToTexture = function(E, F, q, Z=0) {
            const X = F.image.width
              , gt = F.image.height
              , Et = vt.convert(q.format)
              , Ut = vt.convert(q.type);
            w.setTexture2D(q, 0),
            V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL, q.flipY),
            V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL, q.premultiplyAlpha),
            V.pixelStorei(V.UNPACK_ALIGNMENT, q.unpackAlignment),
            F.isDataTexture ? V.texSubImage2D(V.TEXTURE_2D, Z, E.x, E.y, X, gt, Et, Ut, F.image.data) : F.isCompressedTexture ? V.compressedTexSubImage2D(V.TEXTURE_2D, Z, E.x, E.y, F.mipmaps[0].width, F.mipmaps[0].height, Et, F.mipmaps[0].data) : V.texSubImage2D(V.TEXTURE_2D, Z, E.x, E.y, Et, Ut, F.image),
            Z === 0 && q.generateMipmaps && V.generateMipmap(V.TEXTURE_2D),
            Mt.unbindTexture()
        }
        ,
        this.copyTextureToTexture3D = function(E, F, q, Z, X=0) {
            if (v.isWebGL1Renderer) {
                console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
                return
            }
            const gt = E.max.x - E.min.x + 1
              , Et = E.max.y - E.min.y + 1
              , Ut = E.max.z - E.min.z + 1
              , Ft = vt.convert(Z.format)
              , Yt = vt.convert(Z.type);
            let Ht;
            if (Z.isData3DTexture)
                w.setTexture3D(Z, 0),
                Ht = V.TEXTURE_3D;
            else if (Z.isDataArrayTexture || Z.isCompressedArrayTexture)
                w.setTexture2DArray(Z, 0),
                Ht = V.TEXTURE_2D_ARRAY;
            else {
                console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                return
            }
            V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL, Z.flipY),
            V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Z.premultiplyAlpha),
            V.pixelStorei(V.UNPACK_ALIGNMENT, Z.unpackAlignment);
            const Vt = V.getParameter(V.UNPACK_ROW_LENGTH)
              , Ee = V.getParameter(V.UNPACK_IMAGE_HEIGHT)
              , on = V.getParameter(V.UNPACK_SKIP_PIXELS)
              , Fe = V.getParameter(V.UNPACK_SKIP_ROWS)
              , Nn = V.getParameter(V.UNPACK_SKIP_IMAGES)
              , ve = q.isCompressedTexture ? q.mipmaps[X] : q.image;
            V.pixelStorei(V.UNPACK_ROW_LENGTH, ve.width),
            V.pixelStorei(V.UNPACK_IMAGE_HEIGHT, ve.height),
            V.pixelStorei(V.UNPACK_SKIP_PIXELS, E.min.x),
            V.pixelStorei(V.UNPACK_SKIP_ROWS, E.min.y),
            V.pixelStorei(V.UNPACK_SKIP_IMAGES, E.min.z),
            q.isDataTexture || q.isData3DTexture ? V.texSubImage3D(Ht, X, F.x, F.y, F.z, gt, Et, Ut, Ft, Yt, ve.data) : q.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),
            V.compressedTexSubImage3D(Ht, X, F.x, F.y, F.z, gt, Et, Ut, Ft, ve.data)) : V.texSubImage3D(Ht, X, F.x, F.y, F.z, gt, Et, Ut, Ft, Yt, ve),
            V.pixelStorei(V.UNPACK_ROW_LENGTH, Vt),
            V.pixelStorei(V.UNPACK_IMAGE_HEIGHT, Ee),
            V.pixelStorei(V.UNPACK_SKIP_PIXELS, on),
            V.pixelStorei(V.UNPACK_SKIP_ROWS, Fe),
            V.pixelStorei(V.UNPACK_SKIP_IMAGES, Nn),
            X === 0 && Z.generateMipmaps && V.generateMipmap(Ht),
            Mt.unbindTexture()
        }
        ,
        this.initTexture = function(E) {
            E.isCubeTexture ? w.setTextureCube(E, 0) : E.isData3DTexture ? w.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? w.setTexture2DArray(E, 0) : w.setTexture2D(E, 0),
            Mt.unbindTexture()
        }
        ,
        this.resetState = function() {
            L = 0,
            A = 0,
            R = null,
            Mt.reset(),
            Xt.reset()
        }
        ,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    get coordinateSystem() {
        return Xn
    }
    get outputColorSpace() {
        return this._outputColorSpace
    }
    set outputColorSpace(t) {
        this._outputColorSpace = t;
        const e = this.getContext();
        e.drawingBufferColorSpace = t === jo ? "display-p3" : "srgb",
        e.unpackColorSpace = ae.workingColorSpace === Nr ? "display-p3" : "srgb"
    }
    get outputEncoding() {
        return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),
        this.outputColorSpace === Me ? Ti : Ec
    }
    set outputEncoding(t) {
        console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),
        this.outputColorSpace = t === Ti ? Me : qn
    }
    get useLegacyLights() {
        return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),
        this._useLegacyLights
    }
    set useLegacyLights(t) {
        console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),
        this._useLegacyLights = t
    }
}
class U0 extends qc {
}
U0.prototype.isWebGL1Renderer = !0;
class Nl extends De {
    constructor() {
        super(),
        this.isScene = !0,
        this.type = "Scene",
        this.background = null,
        this.environment = null,
        this.fog = null,
        this.backgroundBlurriness = 0,
        this.backgroundIntensity = 1,
        this.overrideMaterial = null,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    copy(t, e) {
        return super.copy(t, e),
        t.background !== null && (this.background = t.background.clone()),
        t.environment !== null && (this.environment = t.environment.clone()),
        t.fog !== null && (this.fog = t.fog.clone()),
        this.backgroundBlurriness = t.backgroundBlurriness,
        this.backgroundIntensity = t.backgroundIntensity,
        t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()),
        this.matrixAutoUpdate = t.matrixAutoUpdate,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return this.fog !== null && (e.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness),
        this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity),
        e
    }
}
class O0 {
    constructor(t, e) {
        this.isInterleavedBuffer = !0,
        this.array = t,
        this.stride = e,
        this.count = t !== void 0 ? t.length / e : 0,
        this.usage = ko,
        this._updateRange = {
            offset: 0,
            count: -1
        },
        this.updateRanges = [],
        this.version = 0,
        this.uuid = oi()
    }
    onUploadCallback() {}
    set needsUpdate(t) {
        t === !0 && this.version++
    }
    get updateRange() {
        return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),
        this._updateRange
    }
    setUsage(t) {
        return this.usage = t,
        this
    }
    addUpdateRange(t, e) {
        this.updateRanges.push({
            start: t,
            count: e
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    copy(t) {
        return this.array = new t.array.constructor(t.array),
        this.count = t.count,
        this.stride = t.stride,
        this.usage = t.usage,
        this
    }
    copyAt(t, e, n) {
        t *= this.stride,
        n *= e.stride;
        for (let s = 0, r = this.stride; s < r; s++)
            this.array[t + s] = e.array[n + s];
        return this
    }
    set(t, e=0) {
        return this.array.set(t, e),
        this
    }
    clone(t) {
        t.arrayBuffers === void 0 && (t.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = oi()),
        t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid])
          , n = new this.constructor(e,this.stride);
        return n.setUsage(this.usage),
        n
    }
    onUpload(t) {
        return this.onUploadCallback = t,
        this
    }
    toJSON(t) {
        return t.arrayBuffers === void 0 && (t.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = oi()),
        t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))),
        {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        }
    }
}
const Ye = new I;
class Ir {
    constructor(t, e, n, s=!1) {
        this.isInterleavedBufferAttribute = !0,
        this.name = "",
        this.data = t,
        this.itemSize = e,
        this.offset = n,
        this.normalized = s
    }
    get count() {
        return this.data.count
    }
    get array() {
        return this.data.array
    }
    set needsUpdate(t) {
        this.data.needsUpdate = t
    }
    applyMatrix4(t) {
        for (let e = 0, n = this.data.count; e < n; e++)
            Ye.fromBufferAttribute(this, e),
            Ye.applyMatrix4(t),
            this.setXYZ(e, Ye.x, Ye.y, Ye.z);
        return this
    }
    applyNormalMatrix(t) {
        for (let e = 0, n = this.count; e < n; e++)
            Ye.fromBufferAttribute(this, e),
            Ye.applyNormalMatrix(t),
            this.setXYZ(e, Ye.x, Ye.y, Ye.z);
        return this
    }
    transformDirection(t) {
        for (let e = 0, n = this.count; e < n; e++)
            Ye.fromBufferAttribute(this, e),
            Ye.transformDirection(t),
            this.setXYZ(e, Ye.x, Ye.y, Ye.z);
        return this
    }
    setX(t, e) {
        return this.normalized && (e = le(e, this.array)),
        this.data.array[t * this.data.stride + this.offset] = e,
        this
    }
    setY(t, e) {
        return this.normalized && (e = le(e, this.array)),
        this.data.array[t * this.data.stride + this.offset + 1] = e,
        this
    }
    setZ(t, e) {
        return this.normalized && (e = le(e, this.array)),
        this.data.array[t * this.data.stride + this.offset + 2] = e,
        this
    }
    setW(t, e) {
        return this.normalized && (e = le(e, this.array)),
        this.data.array[t * this.data.stride + this.offset + 3] = e,
        this
    }
    getX(t) {
        let e = this.data.array[t * this.data.stride + this.offset];
        return this.normalized && (e = Wn(e, this.array)),
        e
    }
    getY(t) {
        let e = this.data.array[t * this.data.stride + this.offset + 1];
        return this.normalized && (e = Wn(e, this.array)),
        e
    }
    getZ(t) {
        let e = this.data.array[t * this.data.stride + this.offset + 2];
        return this.normalized && (e = Wn(e, this.array)),
        e
    }
    getW(t) {
        let e = this.data.array[t * this.data.stride + this.offset + 3];
        return this.normalized && (e = Wn(e, this.array)),
        e
    }
    setXY(t, e, n) {
        return t = t * this.data.stride + this.offset,
        this.normalized && (e = le(e, this.array),
        n = le(n, this.array)),
        this.data.array[t + 0] = e,
        this.data.array[t + 1] = n,
        this
    }
    setXYZ(t, e, n, s) {
        return t = t * this.data.stride + this.offset,
        this.normalized && (e = le(e, this.array),
        n = le(n, this.array),
        s = le(s, this.array)),
        this.data.array[t + 0] = e,
        this.data.array[t + 1] = n,
        this.data.array[t + 2] = s,
        this
    }
    setXYZW(t, e, n, s, r) {
        return t = t * this.data.stride + this.offset,
        this.normalized && (e = le(e, this.array),
        n = le(n, this.array),
        s = le(s, this.array),
        r = le(r, this.array)),
        this.data.array[t + 0] = e,
        this.data.array[t + 1] = n,
        this.data.array[t + 2] = s,
        this.data.array[t + 3] = r,
        this
    }
    clone(t) {
        if (t === void 0) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
            const e = [];
            for (let n = 0; n < this.count; n++) {
                const s = n * this.data.stride + this.offset;
                for (let r = 0; r < this.itemSize; r++)
                    e.push(this.data.array[s + r])
            }
            return new ze(new this.array.constructor(e),this.itemSize,this.normalized)
        } else
            return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}),
            t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
            new Ir(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)
    }
    toJSON(t) {
        if (t === void 0) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
            const e = [];
            for (let n = 0; n < this.count; n++) {
                const s = n * this.data.stride + this.offset;
                for (let r = 0; r < this.itemSize; r++)
                    e.push(this.data.array[s + r])
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: e,
                normalized: this.normalized
            }
        } else
            return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}),
            t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
            {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            }
    }
}
class Kc extends ci {
    constructor(t) {
        super(),
        this.isSpriteMaterial = !0,
        this.type = "SpriteMaterial",
        this.color = new Bt(16777215),
        this.map = null,
        this.alphaMap = null,
        this.rotation = 0,
        this.sizeAttenuation = !0,
        this.transparent = !0,
        this.fog = !0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.rotation = t.rotation,
        this.sizeAttenuation = t.sizeAttenuation,
        this.fog = t.fog,
        this
    }
}
let Yi;
const Ss = new I
  , $i = new I
  , ji = new I
  , Zi = new Kt
  , bs = new Kt
  , Yc = new be
  , dr = new I
  , Es = new I
  , pr = new I
  , Fl = new Kt
  , To = new Kt
  , kl = new Kt;
class N0 extends De {
    constructor(t=new Kc) {
        if (super(),
        this.isSprite = !0,
        this.type = "Sprite",
        Yi === void 0) {
            Yi = new Qe;
            const e = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1])
              , n = new O0(e,5);
            Yi.setIndex([0, 1, 2, 0, 2, 3]),
            Yi.setAttribute("position", new Ir(n,3,0,!1)),
            Yi.setAttribute("uv", new Ir(n,2,3,!1))
        }
        this.geometry = Yi,
        this.material = t,
        this.center = new Kt(.5,.5)
    }
    raycast(t, e) {
        t.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),
        $i.setFromMatrixScale(this.matrixWorld),
        Yc.copy(t.camera.matrixWorld),
        this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld),
        ji.setFromMatrixPosition(this.modelViewMatrix),
        t.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && $i.multiplyScalar(-ji.z);
        const n = this.material.rotation;
        let s, r;
        n !== 0 && (r = Math.cos(n),
        s = Math.sin(n));
        const o = this.center;
        mr(dr.set(-.5, -.5, 0), ji, o, $i, s, r),
        mr(Es.set(.5, -.5, 0), ji, o, $i, s, r),
        mr(pr.set(.5, .5, 0), ji, o, $i, s, r),
        Fl.set(0, 0),
        To.set(1, 0),
        kl.set(1, 1);
        let a = t.ray.intersectTriangle(dr, Es, pr, !1, Ss);
        if (a === null && (mr(Es.set(-.5, .5, 0), ji, o, $i, s, r),
        To.set(0, 1),
        a = t.ray.intersectTriangle(dr, pr, Es, !1, Ss),
        a === null))
            return;
        const l = t.ray.origin.distanceTo(Ss);
        l < t.near || l > t.far || e.push({
            distance: l,
            point: Ss.clone(),
            uv: un.getInterpolation(Ss, dr, Es, pr, Fl, To, kl, new Kt),
            face: null,
            object: this
        })
    }
    copy(t, e) {
        return super.copy(t, e),
        t.center !== void 0 && this.center.copy(t.center),
        this.material = t.material,
        this
    }
}
function mr(i, t, e, n, s, r) {
    Zi.subVectors(i, e).addScalar(.5).multiply(n),
    s !== void 0 ? (bs.x = r * Zi.x - s * Zi.y,
    bs.y = s * Zi.x + r * Zi.y) : bs.copy(Zi),
    i.copy(t),
    i.x += bs.x,
    i.y += bs.y,
    i.applyMatrix4(Yc)
}
class $c extends ci {
    constructor(t) {
        super(),
        this.isLineBasicMaterial = !0,
        this.type = "LineBasicMaterial",
        this.color = new Bt(16777215),
        this.map = null,
        this.linewidth = 1,
        this.linecap = "round",
        this.linejoin = "round",
        this.fog = !0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.map = t.map,
        this.linewidth = t.linewidth,
        this.linecap = t.linecap,
        this.linejoin = t.linejoin,
        this.fog = t.fog,
        this
    }
}
const Bl = new I
  , zl = new I
  , Gl = new be
  , wo = new Fr
  , gr = new zs;
class F0 extends De {
    constructor(t=new Qe, e=new $c) {
        super(),
        this.isLine = !0,
        this.type = "Line",
        this.geometry = t,
        this.material = e,
        this.updateMorphTargets()
    }
    copy(t, e) {
        return super.copy(t, e),
        this.material = Array.isArray(t.material) ? t.material.slice() : t.material,
        this.geometry = t.geometry,
        this
    }
    computeLineDistances() {
        const t = this.geometry;
        if (t.index === null) {
            const e = t.attributes.position
              , n = [0];
            for (let s = 1, r = e.count; s < r; s++)
                Bl.fromBufferAttribute(e, s - 1),
                zl.fromBufferAttribute(e, s),
                n[s] = n[s - 1],
                n[s] += Bl.distanceTo(zl);
            t.setAttribute("lineDistance", new sn(n,1))
        } else
            console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
    raycast(t, e) {
        const n = this.geometry
          , s = this.matrixWorld
          , r = t.params.Line.threshold
          , o = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(),
        gr.copy(n.boundingSphere),
        gr.applyMatrix4(s),
        gr.radius += r,
        t.ray.intersectsSphere(gr) === !1)
            return;
        Gl.copy(s).invert(),
        wo.copy(t.ray).applyMatrix4(Gl);
        const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , l = a * a
          , c = new I
          , h = new I
          , u = new I
          , f = new I
          , p = this.isLineSegments ? 2 : 1
          , g = n.index
          , m = n.attributes.position;
        if (g !== null) {
            const d = Math.max(0, o.start)
              , x = Math.min(g.count, o.start + o.count);
            for (let v = d, S = x - 1; v < S; v += p) {
                const L = g.getX(v)
                  , A = g.getX(v + 1);
                if (c.fromBufferAttribute(m, L),
                h.fromBufferAttribute(m, A),
                wo.distanceSqToSegment(c, h, f, u) > l)
                    continue;
                f.applyMatrix4(this.matrixWorld);
                const K = t.ray.origin.distanceTo(f);
                K < t.near || K > t.far || e.push({
                    distance: K,
                    point: u.clone().applyMatrix4(this.matrixWorld),
                    index: v,
                    face: null,
                    faceIndex: null,
                    object: this
                })
            }
        } else {
            const d = Math.max(0, o.start)
              , x = Math.min(m.count, o.start + o.count);
            for (let v = d, S = x - 1; v < S; v += p) {
                if (c.fromBufferAttribute(m, v),
                h.fromBufferAttribute(m, v + 1),
                wo.distanceSqToSegment(c, h, f, u) > l)
                    continue;
                f.applyMatrix4(this.matrixWorld);
                const A = t.ray.origin.distanceTo(f);
                A < t.near || A > t.far || e.push({
                    distance: A,
                    point: u.clone().applyMatrix4(this.matrixWorld),
                    index: v,
                    face: null,
                    faceIndex: null,
                    object: this
                })
            }
        }
    }
    updateMorphTargets() {
        const e = this.geometry.morphAttributes
          , n = Object.keys(e);
        if (n.length > 0) {
            const s = e[n[0]];
            if (s !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let r = 0, o = s.length; r < o; r++) {
                    const a = s[r].name || String(r);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[a] = r
                }
            }
        }
    }
}
const Hl = new I
  , Vl = new I;
class k0 extends F0 {
    constructor(t, e) {
        super(t, e),
        this.isLineSegments = !0,
        this.type = "LineSegments"
    }
    computeLineDistances() {
        const t = this.geometry;
        if (t.index === null) {
            const e = t.attributes.position
              , n = [];
            for (let s = 0, r = e.count; s < r; s += 2)
                Hl.fromBufferAttribute(e, s),
                Vl.fromBufferAttribute(e, s + 1),
                n[s] = s === 0 ? 0 : n[s - 1],
                n[s + 1] = n[s] + Hl.distanceTo(Vl);
            t.setAttribute("lineDistance", new sn(n,1))
        } else
            console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
}
class Qo extends ci {
    constructor(t) {
        super(),
        this.isPointsMaterial = !0,
        this.type = "PointsMaterial",
        this.color = new Bt(16777215),
        this.map = null,
        this.alphaMap = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.fog = !0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.size = t.size,
        this.sizeAttenuation = t.sizeAttenuation,
        this.fog = t.fog,
        this
    }
}
const Wl = new be
  , Vo = new Fr
  , _r = new zs
  , vr = new I;
class jc extends De {
    constructor(t=new Qe, e=new Qo) {
        super(),
        this.isPoints = !0,
        this.type = "Points",
        this.geometry = t,
        this.material = e,
        this.updateMorphTargets()
    }
    copy(t, e) {
        return super.copy(t, e),
        this.material = Array.isArray(t.material) ? t.material.slice() : t.material,
        this.geometry = t.geometry,
        this
    }
    raycast(t, e) {
        const n = this.geometry
          , s = this.matrixWorld
          , r = t.params.Points.threshold
          , o = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(),
        _r.copy(n.boundingSphere),
        _r.applyMatrix4(s),
        _r.radius += r,
        t.ray.intersectsSphere(_r) === !1)
            return;
        Wl.copy(s).invert(),
        Vo.copy(t.ray).applyMatrix4(Wl);
        const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , l = a * a
          , c = n.index
          , u = n.attributes.position;
        if (c !== null) {
            const f = Math.max(0, o.start)
              , p = Math.min(c.count, o.start + o.count);
            for (let g = f, _ = p; g < _; g++) {
                const m = c.getX(g);
                vr.fromBufferAttribute(u, m),
                Xl(vr, m, l, s, t, e, this)
            }
        } else {
            const f = Math.max(0, o.start)
              , p = Math.min(u.count, o.start + o.count);
            for (let g = f, _ = p; g < _; g++)
                vr.fromBufferAttribute(u, g),
                Xl(vr, g, l, s, t, e, this)
        }
    }
    updateMorphTargets() {
        const e = this.geometry.morphAttributes
          , n = Object.keys(e);
        if (n.length > 0) {
            const s = e[n[0]];
            if (s !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let r = 0, o = s.length; r < o; r++) {
                    const a = s[r].name || String(r);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[a] = r
                }
            }
        }
    }
}
function Xl(i, t, e, n, s, r, o) {
    const a = Vo.distanceSqToPoint(i);
    if (a < e) {
        const l = new I;
        Vo.closestPointToPoint(i, l),
        l.applyMatrix4(n);
        const c = s.ray.origin.distanceTo(l);
        if (c < s.near || c > s.far)
            return;
        r.push({
            distance: c,
            distanceToRay: Math.sqrt(a),
            point: l,
            index: t,
            face: null,
            object: o
        })
    }
}
class as extends nn {
    constructor(t, e, n, s, r, o, a, l, c) {
        super(t, e, n, s, r, o, a, l, c),
        this.isCanvasTexture = !0,
        this.needsUpdate = !0
    }
}
const xr = new I
  , Mr = new I
  , Ao = new I
  , yr = new un;
class B0 extends Qe {
    constructor(t=null, e=1) {
        if (super(),
        this.type = "EdgesGeometry",
        this.parameters = {
            geometry: t,
            thresholdAngle: e
        },
        t !== null) {
            const s = Math.pow(10, 4)
              , r = Math.cos(Tr * e)
              , o = t.getIndex()
              , a = t.getAttribute("position")
              , l = o ? o.count : a.count
              , c = [0, 0, 0]
              , h = ["a", "b", "c"]
              , u = new Array(3)
              , f = {}
              , p = [];
            for (let g = 0; g < l; g += 3) {
                o ? (c[0] = o.getX(g),
                c[1] = o.getX(g + 1),
                c[2] = o.getX(g + 2)) : (c[0] = g,
                c[1] = g + 1,
                c[2] = g + 2);
                const {a: _, b: m, c: d} = yr;
                if (_.fromBufferAttribute(a, c[0]),
                m.fromBufferAttribute(a, c[1]),
                d.fromBufferAttribute(a, c[2]),
                yr.getNormal(Ao),
                u[0] = `${Math.round(_.x * s)},${Math.round(_.y * s)},${Math.round(_.z * s)}`,
                u[1] = `${Math.round(m.x * s)},${Math.round(m.y * s)},${Math.round(m.z * s)}`,
                u[2] = `${Math.round(d.x * s)},${Math.round(d.y * s)},${Math.round(d.z * s)}`,
                !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0]))
                    for (let x = 0; x < 3; x++) {
                        const v = (x + 1) % 3
                          , S = u[x]
                          , L = u[v]
                          , A = yr[h[x]]
                          , R = yr[h[v]]
                          , K = `${S}_${L}`
                          , y = `${L}_${S}`;
                        y in f && f[y] ? (Ao.dot(f[y].normal) <= r && (p.push(A.x, A.y, A.z),
                        p.push(R.x, R.y, R.z)),
                        f[y] = null) : K in f || (f[K] = {
                            index0: c[x],
                            index1: c[v],
                            normal: Ao.clone()
                        })
                    }
            }
            for (const g in f)
                if (f[g]) {
                    const {index0: _, index1: m} = f[g];
                    xr.fromBufferAttribute(a, _),
                    Mr.fromBufferAttribute(a, m),
                    p.push(xr.x, xr.y, xr.z),
                    p.push(Mr.x, Mr.y, Mr.z)
                }
            this.setAttribute("position", new sn(p,3))
        }
    }
    copy(t) {
        return super.copy(t),
        this.parameters = Object.assign({}, t.parameters),
        this
    }
}
class ta extends Qe {
    constructor(t=1, e=32, n=16, s=0, r=Math.PI * 2, o=0, a=Math.PI) {
        super(),
        this.type = "SphereGeometry",
        this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: s,
            phiLength: r,
            thetaStart: o,
            thetaLength: a
        },
        e = Math.max(3, Math.floor(e)),
        n = Math.max(2, Math.floor(n));
        const l = Math.min(o + a, Math.PI);
        let c = 0;
        const h = []
          , u = new I
          , f = new I
          , p = []
          , g = []
          , _ = []
          , m = [];
        for (let d = 0; d <= n; d++) {
            const x = []
              , v = d / n;
            let S = 0;
            d === 0 && o === 0 ? S = .5 / e : d === n && l === Math.PI && (S = -.5 / e);
            for (let L = 0; L <= e; L++) {
                const A = L / e;
                u.x = -t * Math.cos(s + A * r) * Math.sin(o + v * a),
                u.y = t * Math.cos(o + v * a),
                u.z = t * Math.sin(s + A * r) * Math.sin(o + v * a),
                g.push(u.x, u.y, u.z),
                f.copy(u).normalize(),
                _.push(f.x, f.y, f.z),
                m.push(A + S, 1 - v),
                x.push(c++)
            }
            h.push(x)
        }
        for (let d = 0; d < n; d++)
            for (let x = 0; x < e; x++) {
                const v = h[d][x + 1]
                  , S = h[d][x]
                  , L = h[d + 1][x]
                  , A = h[d + 1][x + 1];
                (d !== 0 || o > 0) && p.push(v, S, A),
                (d !== n - 1 || l < Math.PI) && p.push(S, L, A)
            }
        this.setIndex(p),
        this.setAttribute("position", new sn(g,3)),
        this.setAttribute("normal", new sn(_,3)),
        this.setAttribute("uv", new sn(m,2))
    }
    copy(t) {
        return super.copy(t),
        this.parameters = Object.assign({}, t.parameters),
        this
    }
    static fromJSON(t) {
        return new ta(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)
    }
}
class ks extends ci {
    constructor(t) {
        super(),
        this.isMeshLambertMaterial = !0,
        this.type = "MeshLambertMaterial",
        this.color = new Bt(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new Bt(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = Tc,
        this.normalScale = new Kt(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = Yo,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.flatShading = !1,
        this.fog = !0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.flatShading = t.flatShading,
        this.fog = t.fog,
        this
    }
}
class Zc extends De {
    constructor(t, e=1) {
        super(),
        this.isLight = !0,
        this.type = "Light",
        this.color = new Bt(t),
        this.intensity = e
    }
    dispose() {}
    copy(t, e) {
        return super.copy(t, e),
        this.color.copy(t.color),
        this.intensity = t.intensity,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.color = this.color.getHex(),
        e.object.intensity = this.intensity,
        this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()),
        this.distance !== void 0 && (e.object.distance = this.distance),
        this.angle !== void 0 && (e.object.angle = this.angle),
        this.decay !== void 0 && (e.object.decay = this.decay),
        this.penumbra !== void 0 && (e.object.penumbra = this.penumbra),
        this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()),
        e
    }
}
const Ro = new be
  , ql = new I
  , Kl = new I;
class z0 {
    constructor(t) {
        this.camera = t,
        this.bias = 0,
        this.normalBias = 0,
        this.radius = 1,
        this.blurSamples = 8,
        this.mapSize = new Kt(512,512),
        this.map = null,
        this.mapPass = null,
        this.matrix = new be,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this._frustum = new Zo,
        this._frameExtents = new Kt(1,1),
        this._viewportCount = 1,
        this._viewports = [new Ge(0,0,1,1)]
    }
    getViewportCount() {
        return this._viewportCount
    }
    getFrustum() {
        return this._frustum
    }
    updateMatrices(t) {
        const e = this.camera
          , n = this.matrix;
        ql.setFromMatrixPosition(t.matrixWorld),
        e.position.copy(ql),
        Kl.setFromMatrixPosition(t.target.matrixWorld),
        e.lookAt(Kl),
        e.updateMatrixWorld(),
        Ro.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Ro),
        n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
        n.multiply(Ro)
    }
    getViewport(t) {
        return this._viewports[t]
    }
    getFrameExtents() {
        return this._frameExtents
    }
    dispose() {
        this.map && this.map.dispose(),
        this.mapPass && this.mapPass.dispose()
    }
    copy(t) {
        return this.camera = t.camera.clone(),
        this.bias = t.bias,
        this.radius = t.radius,
        this.mapSize.copy(t.mapSize),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    toJSON() {
        const t = {};
        return this.bias !== 0 && (t.bias = this.bias),
        this.normalBias !== 0 && (t.normalBias = this.normalBias),
        this.radius !== 1 && (t.radius = this.radius),
        (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()),
        t.camera = this.camera.toJSON(!1).object,
        delete t.camera.matrix,
        t
    }
}
class G0 extends z0 {
    constructor() {
        super(new Bc(-5,5,5,-5,.5,500)),
        this.isDirectionalLightShadow = !0
    }
}
class Yl extends Zc {
    constructor(t, e) {
        super(t, e),
        this.isDirectionalLight = !0,
        this.type = "DirectionalLight",
        this.position.copy(De.DEFAULT_UP),
        this.updateMatrix(),
        this.target = new De,
        this.shadow = new G0
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(t) {
        return super.copy(t),
        this.target = t.target.clone(),
        this.shadow = t.shadow.clone(),
        this
    }
}
class $l extends Zc {
    constructor(t, e) {
        super(t, e),
        this.isAmbientLight = !0,
        this.type = "AmbientLight"
    }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
    detail: {
        revision: Ko
    }
}));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ko);
function Gs(i) {
    let t = 2166136261;
    for (let e = 0; e < i.length; e++)
        t ^= i.charCodeAt(e),
        t = Math.imul(t, 16777619);
    return t >>> 0
}
function H0(i) {
    const t = i.trim();
    if (t === "")
        return Math.random() * 4294967295 >>> 0;
    if (/^-?\d+$/.test(t)) {
        const e = Number(t);
        if (Number.isSafeInteger(e))
            return e >>> 0 ^ e / 4294967296 >>> 0
    }
    return Gs(t)
}
function Ri(i) {
    return () => {
        i |= 0,
        i = i + 1831565813 | 0;
        let t = Math.imul(i ^ i >>> 15, 1 | i);
        return t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t,
        ((t ^ t >>> 14) >>> 0) / 4294967296
    }
}
function gn(i, t, e) {
    let n = i ^ Math.imul(t | 0, 374761393) ^ Math.imul(e | 0, 668265263);
    return n = Math.imul(n ^ n >>> 13, 1274126177),
    n ^= n >>> 16,
    n = Math.imul(n, 2246822519),
    n ^= n >>> 13,
    (n >>> 0) / 4294967296
}
function jl(i, t, e, n) {
    return gn(i ^ Math.imul(e | 0, 1442695041), t, n)
}
const Be = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1])
  , V0 = .5 * (Math.sqrt(3) - 1)
  , Ts = (3 - Math.sqrt(3)) / 6
  , W0 = 1 / 3
  , Pn = 1 / 6;
class mn {
    constructor(t) {
        this.perm = new Uint8Array(512),
        this.permMod12 = new Uint8Array(512);
        const e = Ri(t)
          , n = new Uint8Array(256);
        for (let s = 0; s < 256; s++)
            n[s] = s;
        for (let s = 255; s > 0; s--) {
            const r = Math.floor(e() * (s + 1))
              , o = n[s];
            n[s] = n[r],
            n[r] = o
        }
        for (let s = 0; s < 512; s++)
            this.perm[s] = n[s & 255],
            this.permMod12[s] = this.perm[s] % 12
    }
    noise2(t, e) {
        const n = this.perm
          , s = this.permMod12;
        let r = 0
          , o = 0
          , a = 0;
        const l = (t + e) * V0
          , c = Math.floor(t + l)
          , h = Math.floor(e + l)
          , u = (c + h) * Ts
          , f = t - (c - u)
          , p = e - (h - u);
        let g, _;
        f > p ? (g = 1,
        _ = 0) : (g = 0,
        _ = 1);
        const m = f - g + Ts
          , d = p - _ + Ts
          , x = f - 1 + 2 * Ts
          , v = p - 1 + 2 * Ts
          , S = c & 255
          , L = h & 255;
        let A = .5 - f * f - p * p;
        if (A >= 0) {
            const y = s[S + n[L]] * 3;
            A *= A,
            r = A * A * (Be[y] * f + Be[y + 1] * p)
        }
        let R = .5 - m * m - d * d;
        if (R >= 0) {
            const y = s[S + g + n[L + _]] * 3;
            R *= R,
            o = R * R * (Be[y] * m + Be[y + 1] * d)
        }
        let K = .5 - x * x - v * v;
        if (K >= 0) {
            const y = s[S + 1 + n[L + 1]] * 3;
            K *= K,
            a = K * K * (Be[y] * x + Be[y + 1] * v)
        }
        return 70 * (r + o + a)
    }
    noise3(t, e, n) {
        const s = this.perm
          , r = this.permMod12;
        let o = 0
          , a = 0
          , l = 0
          , c = 0;
        const h = (t + e + n) * W0
          , u = Math.floor(t + h)
          , f = Math.floor(e + h)
          , p = Math.floor(n + h)
          , g = (u + f + p) * Pn
          , _ = t - (u - g)
          , m = e - (f - g)
          , d = n - (p - g);
        let x, v, S, L, A, R;
        _ >= m ? m >= d ? (x = 1,
        v = 0,
        S = 0,
        L = 1,
        A = 1,
        R = 0) : _ >= d ? (x = 1,
        v = 0,
        S = 0,
        L = 1,
        A = 0,
        R = 1) : (x = 0,
        v = 0,
        S = 1,
        L = 1,
        A = 0,
        R = 1) : m < d ? (x = 0,
        v = 0,
        S = 1,
        L = 0,
        A = 1,
        R = 1) : _ < d ? (x = 0,
        v = 1,
        S = 0,
        L = 0,
        A = 1,
        R = 1) : (x = 0,
        v = 1,
        S = 0,
        L = 1,
        A = 1,
        R = 0);
        const K = _ - x + Pn
          , y = m - v + Pn
          , T = d - S + Pn
          , U = _ - L + 2 * Pn
          , k = m - A + 2 * Pn
          , G = d - R + 2 * Pn
          , P = _ - 1 + 3 * Pn
          , O = m - 1 + 3 * Pn
          , N = d - 1 + 3 * Pn
          , B = u & 255
          , z = f & 255
          , Y = p & 255;
        let $ = .6 - _ * _ - m * m - d * d;
        if ($ > 0) {
            const J = r[B + s[z + s[Y]]] * 3;
            $ *= $,
            o = $ * $ * (Be[J] * _ + Be[J + 1] * m + Be[J + 2] * d)
        }
        let Q = .6 - K * K - y * y - T * T;
        if (Q > 0) {
            const J = r[B + x + s[z + v + s[Y + S]]] * 3;
            Q *= Q,
            a = Q * Q * (Be[J] * K + Be[J + 1] * y + Be[J + 2] * T)
        }
        let et = .6 - U * U - k * k - G * G;
        if (et > 0) {
            const J = r[B + L + s[z + A + s[Y + R]]] * 3;
            et *= et,
            l = et * et * (Be[J] * U + Be[J + 1] * k + Be[J + 2] * G)
        }
        let H = .6 - P * P - O * O - N * N;
        if (H > 0) {
            const J = r[B + 1 + s[z + 1 + s[Y + 1]]] * 3;
            H *= H,
            c = H * H * (Be[J] * P + Be[J + 1] * O + Be[J + 2] * N)
        }
        return 32 * (o + a + l + c)
    }
    fbm2(t, e, n, s=2, r=.5) {
        let o = 0
          , a = 1
          , l = 1
          , c = 0;
        for (let h = 0; h < n; h++)
            o += a * this.noise2(t * l, e * l),
            c += a,
            a *= r,
            l *= s;
        return o / c
    }
}
function es(i, t, e) {
    const n = Math.min(1, Math.max(0, (e - i) / (t - i)));
    return n * n * (3 - 2 * n)
}
function Hn(i, t, e) {
    return i + (t - i) * e
}
const M = {
    AIR: 0,
    GRASS: 1,
    DIRT: 2,
    STONE: 3,
    COBBLE: 4,
    SAND: 5,
    SANDSTONE: 6,
    GRAVEL: 7,
    BEDROCK: 8,
    SNOW: 9,
    WATER: 10,
    OAK_LOG: 11,
    OAK_PLANKS: 12,
    BIRCH_LOG: 13,
    BIRCH_PLANKS: 14,
    OAK_LEAVES: 15,
    BIRCH_LEAVES: 16,
    SPRUCE_LOG: 17,
    SPRUCE_LEAVES: 18,
    SPRUCE_PLANKS: 19,
    COAL_ORE: 20,
    IRON_ORE: 21,
    GOLD_ORE: 22,
    DIAMOND_ORE: 23,
    COPPER_ORE: 24,
    REDSTONE_ORE: 25,
    STONE_BRICKS: 26,
    GLASS: 27,
    BRICKS: 28,
    OAK_SLAB: 29,
    OAK_STAIRS: 30,
    TORCH: 31,
    CRAFTING_TABLE: 32,
    FURNACE: 33,
    CHEST: 34,
    OAK_DOOR: 35,
    BED: 36,
    CACTUS: 37,
    TALL_GRASS: 38,
    DANDELION: 39,
    POPPY: 40,
    OAK_SAPLING: 41,
    BROWN_MUSHROOM: 42,
    RED_MUSHROOM: 43,
    WOOL: 44,
    SNOWY_GRASS: 45,
    DEAD_BUSH: 46,
    STONE_SLAB: 47,
    COBBLE_STAIRS: 48,
    IRON_BLOCK: 50,
    GOLD_BLOCK: 51,
    DIAMOND_BLOCK: 52,
    BOOKSHELF: 53,
    BIRCH_SAPLING: 54,
    SPRUCE_SAPLING: 55,
    COAL_BLOCK: 56,
    GLOWSTONE: 58,
    MOSSY_COBBLE: 59,
    CLAY: 60
}
  , li = [];
function X0(i) {
    const t = i.tex
      , e = {
        top: t ?? i.key,
        bottom: t ?? i.key,
        side: t ?? i.key,
        shape: "cube",
        solid: !0,
        opaque: !0,
        hardness: 1,
        tool: null,
        level: 0,
        light: 0,
        category: "building",
        sound: "stone",
        ...i
    };
    li[i.id] = e
}
const St = i => X0(i);
St({
    id: M.AIR,
    key: "air",
    name: "Ar",
    shape: "none",
    solid: !1,
    opaque: !1,
    hardness: 0,
    replaceable: !0,
    hidden: !0
});
St({
    id: M.GRASS,
    key: "grass",
    name: "Bloco de Grama",
    top: "grass_top",
    bottom: "dirt",
    side: "grass_side",
    hardness: .6,
    tool: "shovel",
    category: "nature",
    sound: "grass",
    drop: M.DIRT,
    tint: !0
});
St({
    id: M.DIRT,
    key: "dirt",
    name: "Terra",
    tex: "dirt",
    hardness: .5,
    tool: "shovel",
    category: "nature",
    sound: "gravel"
});
St({
    id: M.STONE,
    key: "stone",
    name: "Pedra",
    tex: "stone",
    hardness: 1.5,
    tool: "pickaxe",
    level: 1,
    category: "building",
    drop: M.COBBLE
});
St({
    id: M.COBBLE,
    key: "cobblestone",
    name: "Pedregulho",
    tex: "cobblestone",
    hardness: 2,
    tool: "pickaxe",
    level: 1
});
St({
    id: M.MOSSY_COBBLE,
    key: "mossy_cobblestone",
    name: "Pedregulho Musgoso",
    tex: "mossy_cobblestone",
    hardness: 2,
    tool: "pickaxe",
    level: 1
});
St({
    id: M.SAND,
    key: "sand",
    name: "Areia",
    tex: "sand",
    hardness: .5,
    tool: "shovel",
    gravity: !0,
    category: "nature",
    sound: "sand"
});
St({
    id: M.SANDSTONE,
    key: "sandstone",
    name: "Arenito",
    top: "sandstone_top",
    bottom: "sandstone_top",
    side: "sandstone",
    hardness: .8,
    tool: "pickaxe",
    level: 1
});
St({
    id: M.GRAVEL,
    key: "gravel",
    name: "Cascalho",
    tex: "gravel",
    hardness: .6,
    tool: "shovel",
    gravity: !0,
    category: "nature",
    sound: "gravel",
    drop: i => i() < .1 ? [[284, 1]] : [[M.GRAVEL, 1]]
});
St({
    id: M.CLAY,
    key: "clay",
    name: "Argila",
    tex: "clay",
    hardness: .6,
    tool: "shovel",
    category: "nature",
    sound: "gravel",
    drop: () => [[288, 4]]
});
St({
    id: M.BEDROCK,
    key: "bedrock",
    name: "Rocha Matriz",
    tex: "bedrock",
    hardness: -1,
    category: "building",
    hidden: !1
});
St({
    id: M.SNOW,
    key: "snow",
    name: "Bloco de Neve",
    tex: "snow",
    hardness: .2,
    tool: "shovel",
    category: "nature",
    sound: "snow"
});
St({
    id: M.WATER,
    key: "water",
    name: "Água",
    tex: "water",
    shape: "water",
    solid: !1,
    opaque: !1,
    hardness: -1,
    replaceable: !0,
    hidden: !0,
    drop: -1
});
St({
    id: M.OAK_LOG,
    key: "oak_log",
    name: "Tronco de Carvalho",
    top: "oak_log_top",
    bottom: "oak_log_top",
    side: "oak_log",
    hardness: 2,
    tool: "axe",
    category: "wood",
    sound: "wood",
    flammable: !0
});
St({
    id: M.OAK_PLANKS,
    key: "oak_planks",
    name: "Tábuas de Carvalho",
    tex: "oak_planks",
    hardness: 2,
    tool: "axe",
    category: "wood",
    sound: "wood",
    flammable: !0
});
St({
    id: M.BIRCH_LOG,
    key: "birch_log",
    name: "Tronco de Bétula",
    top: "birch_log_top",
    bottom: "birch_log_top",
    side: "birch_log",
    hardness: 2,
    tool: "axe",
    category: "wood",
    sound: "wood",
    flammable: !0
});
St({
    id: M.BIRCH_PLANKS,
    key: "birch_planks",
    name: "Tábuas de Bétula",
    tex: "birch_planks",
    hardness: 2,
    tool: "axe",
    category: "wood",
    sound: "wood",
    flammable: !0
});
St({
    id: M.SPRUCE_LOG,
    key: "spruce_log",
    name: "Tronco de Pinheiro",
    top: "spruce_log_top",
    bottom: "spruce_log_top",
    side: "spruce_log",
    hardness: 2,
    tool: "axe",
    category: "wood",
    sound: "wood",
    flammable: !0
});
St({
    id: M.SPRUCE_PLANKS,
    key: "spruce_planks",
    name: "Tábuas de Pinheiro",
    tex: "spruce_planks",
    hardness: 2,
    tool: "axe",
    category: "wood",
    sound: "wood",
    flammable: !0
});
const ea = (i, t) => e => {
    const n = [];
    return e() < .06 && n.push([i, 1]),
    e() < .05 && n.push([256, 1]),
    t && e() < .03 && n.push([266, 1]),
    n
}
;
St({
    id: M.OAK_LEAVES,
    key: "oak_leaves",
    name: "Folhas de Carvalho",
    tex: "oak_leaves",
    opaque: !1,
    hardness: .2,
    tool: null,
    category: "nature",
    sound: "grass",
    tint: !0,
    drop: ea(M.OAK_SAPLING, !0),
    flammable: !0
});
St({
    id: M.BIRCH_LEAVES,
    key: "birch_leaves",
    name: "Folhas de Bétula",
    tex: "birch_leaves",
    opaque: !1,
    hardness: .2,
    category: "nature",
    sound: "grass",
    tint: !0,
    drop: ea(M.BIRCH_SAPLING, !1)
});
St({
    id: M.SPRUCE_LEAVES,
    key: "spruce_leaves",
    name: "Folhas de Pinheiro",
    tex: "spruce_leaves",
    opaque: !1,
    hardness: .2,
    category: "nature",
    sound: "grass",
    tint: !0,
    drop: ea(M.SPRUCE_SAPLING, !1)
});
St({
    id: M.COAL_ORE,
    key: "coal_ore",
    name: "Minério de Carvão",
    tex: "coal_ore",
    hardness: 3,
    tool: "pickaxe",
    level: 1,
    category: "ores",
    drop: 257
});
St({
    id: M.IRON_ORE,
    key: "iron_ore",
    name: "Minério de Ferro",
    tex: "iron_ore",
    hardness: 3,
    tool: "pickaxe",
    level: 2,
    category: "ores",
    drop: 258
});
St({
    id: M.COPPER_ORE,
    key: "copper_ore",
    name: "Minério de Cobre",
    tex: "copper_ore",
    hardness: 3,
    tool: "pickaxe",
    level: 2,
    category: "ores",
    drop: i => [[263, 2 + Math.floor(i() * 3)]]
});
St({
    id: M.GOLD_ORE,
    key: "gold_ore",
    name: "Minério de Ouro",
    tex: "gold_ore",
    hardness: 3,
    tool: "pickaxe",
    level: 3,
    category: "ores",
    drop: 260
});
St({
    id: M.REDSTONE_ORE,
    key: "redstone_ore",
    name: "Minério de Redstone",
    tex: "redstone_ore",
    hardness: 3,
    tool: "pickaxe",
    level: 3,
    category: "ores",
    drop: i => [[265, 4 + Math.floor(i() * 2)]],
    light: 0
});
St({
    id: M.DIAMOND_ORE,
    key: "diamond_ore",
    name: "Minério de Diamante",
    tex: "diamond_ore",
    hardness: 3,
    tool: "pickaxe",
    level: 3,
    category: "ores",
    drop: 262
});
St({
    id: M.COAL_BLOCK,
    key: "coal_block",
    name: "Bloco de Carvão",
    tex: "coal_block",
    hardness: 5,
    tool: "pickaxe",
    level: 1,
    category: "ores"
});
St({
    id: M.IRON_BLOCK,
    key: "iron_block",
    name: "Bloco de Ferro",
    tex: "iron_block",
    hardness: 5,
    tool: "pickaxe",
    level: 2,
    category: "ores"
});
St({
    id: M.GOLD_BLOCK,
    key: "gold_block",
    name: "Bloco de Ouro",
    tex: "gold_block",
    hardness: 3,
    tool: "pickaxe",
    level: 3,
    category: "ores"
});
St({
    id: M.DIAMOND_BLOCK,
    key: "diamond_block",
    name: "Bloco de Diamante",
    tex: "diamond_block",
    hardness: 5,
    tool: "pickaxe",
    level: 3,
    category: "ores"
});
St({
    id: M.STONE_BRICKS,
    key: "stone_bricks",
    name: "Tijolos de Pedra",
    tex: "stone_bricks",
    hardness: 1.5,
    tool: "pickaxe",
    level: 1
});
St({
    id: M.GLASS,
    key: "glass",
    name: "Vidro",
    tex: "glass",
    opaque: !1,
    hardness: .3,
    category: "building",
    sound: "glass",
    drop: -1
});
St({
    id: M.BRICKS,
    key: "bricks",
    name: "Tijolos",
    tex: "bricks",
    hardness: 2,
    tool: "pickaxe",
    level: 1
});
St({
    id: M.OAK_SLAB,
    key: "oak_slab",
    name: "Laje de Carvalho",
    tex: "oak_planks",
    shape: "slab",
    opaque: !1,
    hardness: 2,
    tool: "axe",
    category: "wood",
    sound: "wood"
});
St({
    id: M.STONE_SLAB,
    key: "stone_slab",
    name: "Laje de Pedra",
    tex: "stone_bricks",
    shape: "slab",
    opaque: !1,
    hardness: 2,
    tool: "pickaxe",
    level: 1
});
St({
    id: M.OAK_STAIRS,
    key: "oak_stairs",
    name: "Escada de Carvalho",
    tex: "oak_planks",
    shape: "stairs",
    opaque: !1,
    hardness: 2,
    tool: "axe",
    category: "wood",
    sound: "wood"
});
St({
    id: M.COBBLE_STAIRS,
    key: "cobblestone_stairs",
    name: "Escada de Pedregulho",
    tex: "cobblestone",
    shape: "stairs",
    opaque: !1,
    hardness: 2,
    tool: "pickaxe",
    level: 1
});
St({
    id: M.TORCH,
    key: "torch",
    name: "Tocha",
    tex: "torch",
    shape: "torch",
    solid: !1,
    opaque: !1,
    hardness: 0,
    light: 14,
    category: "decoration",
    sound: "wood"
});
St({
    id: M.GLOWSTONE,
    key: "glowstone",
    name: "Pedra Luminosa",
    tex: "glowstone",
    hardness: .3,
    light: 15,
    category: "decoration",
    sound: "glass"
});
St({
    id: M.CRAFTING_TABLE,
    key: "crafting_table",
    name: "Bancada de Trabalho",
    top: "crafting_table_top",
    bottom: "oak_planks",
    side: "crafting_table_side",
    front: "crafting_table_front",
    hardness: 2.5,
    tool: "axe",
    category: "utility",
    sound: "wood"
});
St({
    id: M.FURNACE,
    key: "furnace",
    name: "Fornalha",
    top: "furnace_top",
    bottom: "furnace_top",
    side: "furnace_side",
    front: "furnace_front",
    frontLit: "furnace_front_on",
    hardness: 3.5,
    tool: "pickaxe",
    level: 1,
    category: "utility"
});
St({
    id: M.CHEST,
    key: "chest",
    name: "Baú",
    top: "chest_top",
    bottom: "chest_top",
    side: "chest_side",
    front: "chest_front",
    hardness: 2.5,
    tool: "axe",
    category: "utility",
    sound: "wood"
});
St({
    id: M.BOOKSHELF,
    key: "bookshelf",
    name: "Estante",
    top: "oak_planks",
    bottom: "oak_planks",
    side: "bookshelf",
    hardness: 1.5,
    tool: "axe",
    category: "decoration",
    sound: "wood"
});
St({
    id: M.OAK_DOOR,
    key: "oak_door",
    name: "Porta de Carvalho",
    top: "door_bottom",
    bottom: "door_bottom",
    side: "door_bottom",
    shape: "door",
    opaque: !1,
    hardness: 3,
    tool: "axe",
    category: "utility",
    sound: "wood"
});
St({
    id: M.BED,
    key: "bed",
    name: "Cama",
    top: "bed_foot_top",
    bottom: "oak_planks",
    side: "bed_side",
    shape: "bed",
    opaque: !1,
    hardness: .2,
    category: "utility",
    sound: "cloth"
});
St({
    id: M.CACTUS,
    key: "cactus",
    name: "Cacto",
    top: "cactus_top",
    bottom: "cactus_top",
    side: "cactus_side",
    shape: "cactus",
    opaque: !1,
    hardness: .4,
    category: "nature",
    sound: "cloth"
});
St({
    id: M.TALL_GRASS,
    key: "tall_grass",
    name: "Grama Alta",
    tex: "tall_grass",
    shape: "cross",
    solid: !1,
    opaque: !1,
    hardness: 0,
    category: "nature",
    sound: "grass",
    tint: !0,
    replaceable: !0,
    drop: () => []
});
St({
    id: M.DANDELION,
    key: "dandelion",
    name: "Dente-de-leão",
    tex: "dandelion",
    shape: "cross",
    solid: !1,
    opaque: !1,
    hardness: 0,
    category: "decoration",
    sound: "grass"
});
St({
    id: M.POPPY,
    key: "poppy",
    name: "Papoula",
    tex: "poppy",
    shape: "cross",
    solid: !1,
    opaque: !1,
    hardness: 0,
    category: "decoration",
    sound: "grass"
});
St({
    id: M.OAK_SAPLING,
    key: "oak_sapling",
    name: "Muda de Carvalho",
    tex: "oak_sapling",
    shape: "cross",
    solid: !1,
    opaque: !1,
    hardness: 0,
    category: "nature",
    sound: "grass"
});
St({
    id: M.BIRCH_SAPLING,
    key: "birch_sapling",
    name: "Muda de Bétula",
    tex: "birch_sapling",
    shape: "cross",
    solid: !1,
    opaque: !1,
    hardness: 0,
    category: "nature",
    sound: "grass"
});
St({
    id: M.SPRUCE_SAPLING,
    key: "spruce_sapling",
    name: "Muda de Pinheiro",
    tex: "spruce_sapling",
    shape: "cross",
    solid: !1,
    opaque: !1,
    hardness: 0,
    category: "nature",
    sound: "grass"
});
St({
    id: M.BROWN_MUSHROOM,
    key: "brown_mushroom",
    name: "Cogumelo Marrom",
    tex: "brown_mushroom",
    shape: "cross",
    solid: !1,
    opaque: !1,
    hardness: 0,
    category: "nature",
    sound: "grass",
    light: 1
});
St({
    id: M.RED_MUSHROOM,
    key: "red_mushroom",
    name: "Cogumelo Vermelho",
    tex: "red_mushroom",
    shape: "cross",
    solid: !1,
    opaque: !1,
    hardness: 0,
    category: "nature",
    sound: "grass"
});
St({
    id: M.DEAD_BUSH,
    key: "dead_bush",
    name: "Arbusto Morto",
    tex: "dead_bush",
    shape: "cross",
    solid: !1,
    opaque: !1,
    hardness: 0,
    category: "nature",
    sound: "grass",
    replaceable: !0,
    drop: i => i() < .5 ? [[256, 1]] : []
});
St({
    id: M.WOOL,
    key: "wool",
    name: "Lã Branca",
    tex: "wool",
    hardness: .8,
    category: "decoration",
    sound: "cloth",
    flammable: !0
});
St({
    id: M.SNOWY_GRASS,
    key: "snowy_grass",
    name: "Grama com Neve",
    top: "snow",
    bottom: "dirt",
    side: "snowy_grass_side",
    hardness: .6,
    tool: "shovel",
    category: "nature",
    sound: "snow",
    drop: M.DIRT
});
function we(i) {
    return li[i] ?? li[0]
}
const Dn = new Uint8Array(256)
  , Ae = new Uint8Array(256)
  , Jc = new Uint8Array(256)
  , Qc = new Uint8Array(256)
  , Wo = new Uint8Array(256);
for (let i = 0; i < 256; i++) {
    const t = li[i];
    t && (Dn[i] = t.opaque ? 1 : 0,
    Ae[i] = t.solid ? 1 : 0,
    Jc[i] = t.light,
    Qc[i] = t.shape === "none" ? 0 : t.shape === "cube" ? 1 : t.shape === "cross" ? 2 : t.shape === "water" ? 4 : 3,
    Wo[i] = t.opaque ? 15 : t.shape === "water" ? 2 : i === M.OAK_LEAVES || i === M.BIRCH_LEAVES || i === M.SPRUCE_LEAVES ? 1 : 0)
}
function Ls(i) {
    return i === M.OAK_LEAVES || i === M.BIRCH_LEAVES || i === M.SPRUCE_LEAVES
}
const rn = [];
for (const i of li)
    i && (rn[i.id] = {
        id: i.id,
        key: i.key,
        name: i.name,
        maxStack: i.id === M.BED || i.id === M.OAK_DOOR ? 16 : 64,
        isBlock: !0,
        category: i.category,
        hidden: i.hidden
    });
const at = {
    STICK: 256,
    COAL: 257,
    RAW_IRON: 258,
    IRON_INGOT: 259,
    RAW_GOLD: 260,
    GOLD_INGOT: 261,
    DIAMOND: 262,
    RAW_COPPER: 263,
    COPPER_INGOT: 264,
    REDSTONE: 265,
    APPLE: 266,
    BEEF: 267,
    COOKED_BEEF: 268,
    PORKCHOP: 269,
    COOKED_PORKCHOP: 270,
    CHICKEN: 271,
    COOKED_CHICKEN: 272,
    MUTTON: 273,
    COOKED_MUTTON: 274,
    LEATHER: 275,
    FEATHER: 276,
    ROTTEN_FLESH: 277,
    BONE: 278,
    ARROW: 279,
    STRING: 280,
    GUNPOWDER: 281,
    BOWL: 282,
    MUSHROOM_STEW: 283,
    FLINT: 284,
    CHARCOAL: 285,
    BREAD: 286,
    BRICK: 287,
    CLAY_BALL: 288
};
function ne(i, t, e, n={}) {
    rn[i] = {
        id: i,
        key: t,
        name: e,
        maxStack: 64,
        isBlock: !1,
        category: "materials",
        ...n
    }
}
ne(at.STICK, "stick", "Graveto", {
    fuel: 5
});
ne(at.COAL, "coal", "Carvão", {
    fuel: 80
});
ne(at.CHARCOAL, "charcoal", "Carvão Vegetal", {
    fuel: 80
});
ne(at.RAW_IRON, "raw_iron", "Ferro Bruto", {
    smelt: at.IRON_INGOT
});
ne(at.IRON_INGOT, "iron_ingot", "Lingote de Ferro");
ne(at.RAW_GOLD, "raw_gold", "Ouro Bruto", {
    smelt: at.GOLD_INGOT
});
ne(at.GOLD_INGOT, "gold_ingot", "Lingote de Ouro");
ne(at.RAW_COPPER, "raw_copper", "Cobre Bruto", {
    smelt: at.COPPER_INGOT
});
ne(at.COPPER_INGOT, "copper_ingot", "Lingote de Cobre");
ne(at.DIAMOND, "diamond", "Diamante");
ne(at.REDSTONE, "redstone", "Pó de Redstone");
ne(at.APPLE, "apple", "Maçã", {
    category: "food",
    food: {
        hunger: 4,
        saturation: 2.4
    }
});
ne(at.BEEF, "beef", "Carne Crua", {
    category: "food",
    food: {
        hunger: 3,
        saturation: 1.8
    },
    smelt: at.COOKED_BEEF
});
ne(at.COOKED_BEEF, "cooked_beef", "Bife", {
    category: "food",
    food: {
        hunger: 8,
        saturation: 12.8
    }
});
ne(at.PORKCHOP, "porkchop", "Costeleta Crua", {
    category: "food",
    food: {
        hunger: 3,
        saturation: 1.8
    },
    smelt: at.COOKED_PORKCHOP
});
ne(at.COOKED_PORKCHOP, "cooked_porkchop", "Costeleta Cozida", {
    category: "food",
    food: {
        hunger: 8,
        saturation: 12.8
    }
});
ne(at.CHICKEN, "chicken", "Frango Cru", {
    category: "food",
    food: {
        hunger: 2,
        saturation: 1.2
    },
    smelt: at.COOKED_CHICKEN
});
ne(at.COOKED_CHICKEN, "cooked_chicken", "Frango Assado", {
    category: "food",
    food: {
        hunger: 6,
        saturation: 7.2
    }
});
ne(at.MUTTON, "mutton", "Carneiro Cru", {
    category: "food",
    food: {
        hunger: 2,
        saturation: 1.2
    },
    smelt: at.COOKED_MUTTON
});
ne(at.COOKED_MUTTON, "cooked_mutton", "Carneiro Assado", {
    category: "food",
    food: {
        hunger: 6,
        saturation: 9.6
    }
});
ne(at.BREAD, "bread", "Pão", {
    category: "food",
    food: {
        hunger: 5,
        saturation: 6
    }
});
ne(at.ROTTEN_FLESH, "rotten_flesh", "Carne Podre", {
    category: "food",
    food: {
        hunger: 4,
        saturation: .8
    }
});
ne(at.MUSHROOM_STEW, "mushroom_stew", "Ensopado de Cogumelos", {
    category: "food",
    food: {
        hunger: 6,
        saturation: 7.2
    },
    maxStack: 1
});
ne(at.LEATHER, "leather", "Couro");
ne(at.FEATHER, "feather", "Pena");
ne(at.BONE, "bone", "Osso");
ne(at.ARROW, "arrow", "Flecha");
ne(at.STRING, "string", "Linha");
ne(at.GUNPOWDER, "gunpowder", "Pólvora");
ne(at.BOWL, "bowl", "Tigela", {
    fuel: 5
});
ne(at.FLINT, "flint", "Sílex");
ne(at.CLAY_BALL, "clay_ball", "Bola de Argila", {
    smelt: at.BRICK
});
ne(at.BRICK, "brick", "Tijolo");
const zr = [{
    key: "wooden",
    name: "Madeira",
    level: 1,
    speed: 2,
    durability: 59,
    dmg: 0,
    color: "#9c7a45"
}, {
    key: "stone",
    name: "Pedra",
    level: 2,
    speed: 4,
    durability: 131,
    dmg: 1,
    color: "#8a8a8a"
}, {
    key: "iron",
    name: "Ferro",
    level: 3,
    speed: 6,
    durability: 250,
    dmg: 2,
    color: "#e2e2e2"
}, {
    key: "golden",
    name: "Ouro",
    level: 1,
    speed: 12,
    durability: 32,
    dmg: 0,
    color: "#f7d54a"
}, {
    key: "diamond",
    name: "Diamante",
    level: 4,
    speed: 8,
    durability: 1561,
    dmg: 3,
    color: "#4de8d8"
}]
  , th = [{
    type: "pickaxe",
    name: "Picareta",
    baseDmg: 2
}, {
    type: "axe",
    name: "Machado",
    baseDmg: 3
}, {
    type: "shovel",
    name: "Pá",
    baseDmg: 1.5
}, {
    type: "sword",
    name: "Espada",
    baseDmg: 4
}];
function Sr(i, t) {
    const e = zr.findIndex(s => s.key === i)
      , n = th.findIndex(s => s.type === t);
    return 300 + e * 4 + n
}
zr.forEach( (i, t) => {
    th.forEach( (e, n) => {
        const s = 300 + t * 4 + n;
        rn[s] = {
            id: s,
            key: `${i.key}_${e.type}`,
            name: `${e.name} de ${i.name}`,
            maxStack: 1,
            isBlock: !1,
            category: "tools",
            tool: {
                type: e.type,
                material: i.key,
                level: i.level,
                speed: i.speed,
                damage: e.baseDmg + i.dmg + (e.type === "sword",
                0),
                durability: i.durability
            },
            fuel: i.key === "wooden" ? 10 : void 0
        }
    }
    )
}
);
const Gr = (i, t) => {
    rn[i].fuel = t
}
;
[M.OAK_LOG, M.BIRCH_LOG, M.SPRUCE_LOG].forEach(i => {
    Gr(i, 15),
    rn[i].smelt = at.CHARCOAL
}
);
[M.OAK_PLANKS, M.BIRCH_PLANKS, M.SPRUCE_PLANKS, M.CRAFTING_TABLE, M.CHEST, M.BOOKSHELF, M.OAK_STAIRS].forEach(i => Gr(i, 15));
[M.OAK_SAPLING, M.BIRCH_SAPLING, M.SPRUCE_SAPLING, M.OAK_SLAB].forEach(i => Gr(i, 5));
Gr(M.COAL_BLOCK, 800);
rn[M.SAND].smelt = M.GLASS;
rn[M.COBBLE].smelt = M.STONE;
rn[M.IRON_ORE].smelt = at.IRON_INGOT;
rn[M.GOLD_ORE].smelt = at.GOLD_INGOT;
rn[M.CLAY].smelt = at.BRICK;
function ce(i) {
    return rn[i] ?? rn[0]
}
function Sn(i) {
    return ce(i).maxStack
}
function q0() {
    const i = [];
    return rn.forEach( (t, e) => {
        t && e !== 0 && !t.hidden && i.push(e)
    }
    ),
    i
}
const st = 16
  , Ji = 16;
function C(i) {
    const t = parseInt(i.replace("#", ""), 16);
    return [t >> 16 & 255, t >> 8 & 255, t & 255]
}
function Pt(i, t) {
    return [i[0] * t, i[1] * t, i[2] * t]
}
function K0(i, t, e) {
    return [i[0] + (t[0] - i[0]) * e, i[1] + (t[1] - i[1]) * e, i[2] + (t[2] - i[2]) * e]
}
class eh {
    constructor() {
        this.data = new Uint8ClampedArray(st * st * 4)
    }
    set(t, e, n, s=255) {
        if (t < 0 || e < 0 || t >= st || e >= st)
            return;
        const r = (e * st + t) * 4;
        this.data[r] = n[0],
        this.data[r + 1] = n[1],
        this.data[r + 2] = n[2],
        this.data[r + 3] = s
    }
    get(t, e) {
        const n = ((e + st) % st * st + (t + st) % st) * 4;
        return [this.data[n], this.data[n + 1], this.data[n + 2]]
    }
    alpha(t, e) {
        return this.data[(e * st + t) * 4 + 3]
    }
    fill(t, e, n) {
        for (let s = 0; s < st; s++)
            for (let r = 0; r < st; r++)
                this.set(r, s, Pt(t, 1 + (n() - .5) * e))
    }
    copy(t) {
        this.data.set(t.data)
    }
}
function Un(i, t, e, n, s=.1) {
    for (let r = 0; r < n; r++)
        i.set(Math.floor(t() * st), Math.floor(t() * st), Pt(e, 1 + (t() - .5) * s))
}
const Y0 = C("#86603f")
  , na = C("#6fae4a")
  , $0 = C("#7e7e7e")
  , ut = {};
ut.dirt = (i, t) => {
    i.fill(Y0, .3, t),
    Un(i, t, C("#5e4129"), 22),
    Un(i, t, C("#a07a55"), 14),
    Un(i, t, C("#6f7070"), 4)
}
;
ut.grass_top = (i, t) => {
    i.fill(na, .3, t),
    Un(i, t, C("#5b9a3a"), 30),
    Un(i, t, C("#86c45c"), 18)
}
;
function nh(i, t, e, n, s) {
    ut.dirt(i, t);
    for (let r = 0; r < st; r++) {
        const o = 3 + (t() < .45 ? 1 : 0) + (t() < .2 ? 1 : 0);
        for (let a = 0; a < o; a++)
            i.set(r, a, Pt(a === o - 1 && t() < .5 ? n : e, 1 + (t() - .5) * s))
    }
}
ut.grass_side = (i, t) => nh(i, t, na, C("#5b9a3a"), .25);
ut.snowy_grass_side = (i, t) => nh(i, t, C("#f4fafa"), C("#d8e4e6"), .06);
ut.stone = (i, t) => {
    i.fill($0, .16, t);
    for (let e = 0; e < 9; e++) {
        const n = Math.floor(t() * st)
          , s = Math.floor(t() * st)
          , r = 2 + Math.floor(t() * 3)
          , o = t() < .6 ? C("#696969") : C("#939393");
        for (let a = 0; a < r; a++)
            i.set(n + a, s, Pt(o, 1 + (t() - .5) * .08))
    }
}
;
function ih(i, t, e, n, s, r=!1) {
    const o = [];
    for (let a = 0; a < s; a++)
        o.push([t() * st, t() * st, .8 + t() * .4]);
    for (let a = 0; a < st; a++)
        for (let l = 0; l < st; l++) {
            let c = 1e9
              , h = 1e9
              , u = 0;
            for (let f = 0; f < o.length; f++)
                for (let p = -1; p <= 1; p++)
                    for (let g = -1; g <= 1; g++) {
                        const _ = l + .5 - (o[f][0] + p * st)
                          , m = a + .5 - (o[f][1] + g * st)
                          , d = Math.sqrt(_ * _ + m * m);
                        d < c ? (h = c,
                        c = d,
                        u = f) : d < h && (h = d)
                    }
            if (h - c < 1.1)
                i.set(l, a, Pt(n, 1 + (t() - .5) * .15));
            else {
                const f = Math.min(1, (h - c) / 4);
                let p = Pt(e, o[u][2] * (.85 + f * .2) * (1 + (t() - .5) * .12));
                r && t() < .35 + (o[u][2] > 1 ? .3 : 0) && (p = Pt(C("#58803a"), 1 + (t() - .5) * .3)),
                i.set(l, a, p)
            }
        }
}
ut.cobblestone = (i, t) => ih(i, t, C("#888888"), C("#4c4c4c"), 9);
ut.mossy_cobblestone = (i, t) => ih(i, t, C("#888888"), C("#4c4c4c"), 9, !0);
ut.sand = (i, t) => {
    i.fill(C("#dcd2a0"), .1, t),
    Un(i, t, C("#c4b886"), 20),
    Un(i, t, C("#ece4b8"), 10)
}
;
ut.sandstone = (i, t) => {
    i.fill(C("#d8ca94"), .08, t);
    for (let e = 0; e < st; e++) {
        for (let n = 0; n < 3; n++)
            i.set(e, n, Pt(C("#e4d9a8"), 1 + (t() - .5) * .06));
        i.set(e, 3, C("#bba873")),
        i.set(e, 11, Pt(C("#c6b47e"), 1 + (t() - .5) * .08)),
        i.set(e, 15, C("#b09c66"))
    }
}
;
ut.sandstone_top = (i, t) => {
    i.fill(C("#e0d5a3"), .07, t),
    Un(i, t, C("#cfc290"), 12)
}
;
ut.gravel = (i, t) => {
    const e = ["#7a7270", "#8f8786", "#a59d9b", "#5e5857", "#8a7a6e", "#b0aaa8"].map(C);
    for (let n = 0; n < st; n += 2)
        for (let s = 0; s < st; s += 2) {
            const r = e[Math.floor(t() * e.length)];
            for (let o = 0; o < 4; o++)
                i.set(s + (o & 1), n + (o >> 1), Pt(r, 1 + (t() - .5) * .15))
        }
}
;
ut.clay = (i, t) => {
    i.fill(C("#a1a7b4"), .08, t),
    Un(i, t, C("#8f95a2"), 14)
}
;
ut.bedrock = (i, t) => {
    const e = ["#575757", "#2f2f2f", "#7a7a7a", "#444444", "#1c1c1c"].map(C);
    for (let n = 0; n < st; n++)
        for (let s = 0; s < st; s++)
            i.set(s, n, e[Math.floor(t() * e.length)])
}
;
ut.snow = (i, t) => {
    i.fill(C("#f3f9fa"), .05, t),
    Un(i, t, C("#dde9ee"), 10)
}
;
ut.water = (i, t) => {
    for (let e = 0; e < st; e++)
        for (let n = 0; n < st; n++) {
            const s = Math.sin((n + e * .5) * .8) * .5 + .5;
            i.set(n, e, Pt(K0(C("#2d5bd0"), C("#4a7ae6"), s * .6), 1 + (t() - .5) * .08), 200)
        }
    for (let e = 0; e < 6; e++) {
        const n = Math.floor(t() * st)
          , s = Math.floor(t() * st);
        for (let r = 0; r < 3; r++)
            i.set(n + r, s, C("#7aa0f0"), 210)
    }
}
;
function sh(i, t, e) {
    for (let n = 0; n < st; n++) {
        const s = (n % 4 === 0 ? .75 : n % 4 === 2 ? 1.08 : 1) * (1 + (t() - .5) * .1);
        for (let r = 0; r < st; r++)
            i.set(n, r, Pt(e, s * (1 + (t() - .5) * .12)))
    }
    for (let n = 0; n < 6; n++) {
        const s = Math.floor(t() * st)
          , r = Math.floor(t() * st)
          , o = 2 + Math.floor(t() * 4);
        for (let a = 0; a < o; a++)
            i.set(s, r + a, Pt(e, .65))
    }
}
function ia(i, t, e, n) {
    for (let s = 0; s < st; s++)
        for (let r = 0; r < st; r++) {
            const o = Math.max(Math.abs(r - 7.5), Math.abs(s - 7.5));
            o > 6.5 ? i.set(r, s, Pt(e, 1 + (t() - .5) * .15)) : i.set(r, s, Pt(n, (Math.floor(o) % 2 ? .86 : 1) * (1 + (t() - .5) * .06)))
        }
}
function Ci(i, t, e) {
    for (let n = 0; n < st; n++) {
        const s = n >> 2
          , r = (s * 7 + 3) % 16;
        for (let o = 0; o < st; o++) {
            let a = Pt(e, 1 + (t() - .5) * .08 + Math.sin(o * 1.3 + s * 4) * .04);
            n % 4 === 3 ? a = Pt(e, .62) : o === r ? a = Pt(e, .7) : n % 4 === 0 && (a = Pt(e, 1.06)),
            i.set(o, n, a)
        }
    }
}
ut.oak_log = (i, t) => sh(i, t, C("#6b5232"));
ut.oak_log_top = (i, t) => ia(i, t, C("#6b5232"), C("#b4905a"));
ut.oak_planks = (i, t) => Ci(i, t, C("#b08c56"));
ut.birch_log = (i, t) => {
    i.fill(C("#dcd9cd"), .08, t);
    for (let e = 0; e < 9; e++) {
        const n = Math.floor(t() * st)
          , s = Math.floor(t() * st)
          , r = 2 + Math.floor(t() * 3);
        for (let o = 0; o < r; o++)
            i.set(n + o, s, C(t() < .5 ? "#2b2b2b" : "#45403a"))
    }
}
;
ut.birch_log_top = (i, t) => ia(i, t, C("#dcd9cd"), C("#cdbb80"));
ut.birch_planks = (i, t) => Ci(i, t, C("#d0c184"));
ut.spruce_log = (i, t) => sh(i, t, C("#4a3420"));
ut.spruce_log_top = (i, t) => ia(i, t, C("#4a3420"), C("#7c5b36"));
ut.spruce_planks = (i, t) => Ci(i, t, C("#7c5b36"));
function sa(i, t, e) {
    for (let n = 0; n < st; n++)
        for (let s = 0; s < st; s++) {
            if (t() < .16) {
                i.set(s, n, [0, 0, 0], 0);
                continue
            }
            const r = t() < .2 ? .7 : t() < .15 ? 1.2 : .9 + t() * .2;
            i.set(s, n, Pt(e, r))
        }
}
ut.oak_leaves = (i, t) => sa(i, t, C("#5c9a38"));
ut.birch_leaves = (i, t) => sa(i, t, C("#80a755"));
ut.spruce_leaves = (i, t) => sa(i, t, C("#3a6646"));
function gs(i, t, e, n, s=5) {
    ut.stone(i, t);
    for (let r = 0; r < s; r++) {
        let o = 2 + Math.floor(t() * 12)
          , a = 2 + Math.floor(t() * 12);
        const l = 3 + Math.floor(t() * 3);
        for (let c = 0; c < l; c++)
            i.set(o, a, c === 0 ? n : Pt(e, .85 + t() * .3)),
            t() < .5 ? o += t() < .5 ? 1 : -1 : a += t() < .5 ? 1 : -1
    }
}
ut.coal_ore = (i, t) => gs(i, t, C("#2a2a2a"), C("#474747"));
ut.iron_ore = (i, t) => gs(i, t, C("#d4a888"), C("#ecd0b8"));
ut.copper_ore = (i, t) => gs(i, t, C("#c46c3c"), C("#5fb89a"));
ut.gold_ore = (i, t) => gs(i, t, C("#f4d03a"), C("#fff6a0"));
ut.redstone_ore = (i, t) => gs(i, t, C("#c81010"), C("#ff5050"));
ut.diamond_ore = (i, t) => gs(i, t, C("#4ee4d4"), C("#c8fff8"), 4);
function Hr(i, t, e) {
    i.fill(e, .08, t);
    for (let n = 0; n < st; n++)
        i.set(n, 0, Pt(e, 1.25)),
        i.set(0, n, Pt(e, 1.2)),
        i.set(n, 15, Pt(e, .7)),
        i.set(15, n, Pt(e, .75));
    for (let n = 3; n < 13; n += 4)
        for (let s = 3; s < 13; s += 4)
            i.set(n, s, Pt(e, 1.15))
}
ut.coal_block = (i, t) => Hr(i, t, C("#262626"));
ut.iron_block = (i, t) => Hr(i, t, C("#d8d8d8"));
ut.gold_block = (i, t) => Hr(i, t, C("#f6d23e"));
ut.diamond_block = (i, t) => Hr(i, t, C("#5fe6da"));
ut.stone_bricks = (i, t) => {
    i.fill(C("#7b7b7b"), .1, t);
    for (let e = 0; e < st; e++)
        i.set(e, 7, C("#555555")),
        i.set(e, 15, C("#555555")),
        i.set(e, 0, C("#8e8e8e")),
        i.set(e, 8, C("#8e8e8e"));
    for (let e = 0; e < 8; e++)
        i.set(15, e, C("#555555"));
    for (let e = 8; e < 16; e++)
        i.set(7, e, C("#555555"))
}
;
ut.bricks = (i, t) => {
    const e = C("#b5aea4");
    for (let n = 0; n < st; n++) {
        const s = n >> 2;
        for (let r = 0; r < st; r++) {
            const o = s % 2 ? 4 : 12;
            n % 4 === 3 || r === o % 16 ? i.set(r, n, Pt(e, 1 + (t() - .5) * .1)) : i.set(r, n, Pt(C("#9a4f3b"), (1 + (s * 7 + (r > o ? 1 : 0) * 3) % 5 * .04) * (1 + (t() - .5) * .12)))
        }
    }
}
;
ut.glass = (i, t) => {
    for (let e = 0; e < st; e++)
        for (let n = 0; n < st; n++)
            i.set(n, e, [255, 255, 255], 0);
    for (let e = 0; e < st; e++)
        i.set(e, 0, C("#dbe9ee")),
        i.set(e, 15, C("#a9c2ca")),
        i.set(0, e, C("#dbe9ee")),
        i.set(15, e, C("#a9c2ca"));
    [[3, 5], [4, 4], [5, 3], [6, 2], [9, 12], [10, 11], [11, 10]].forEach( ([e,n]) => i.set(e, n, [240, 250, 255], 220))
}
;
ut.torch = (i, t) => {
    for (let e = 0; e < st; e++)
        for (let n = 0; n < st; n++)
            i.set(n, e, [0, 0, 0], 0);
    for (let e = 6; e < 16; e++)
        i.set(7, e, C("#7b5a32")),
        i.set(8, e, C("#5c4122"));
    i.set(7, 6, C("#ffd84a")),
    i.set(8, 6, C("#ff9a20")),
    i.set(7, 5, C("#fff3a0")),
    i.set(8, 5, C("#ffd84a")),
    i.set(7, 4, C("#ffffff")),
    i.set(8, 4, C("#fff3a0"))
}
;
ut.glowstone = (i, t) => {
    i.fill(C("#a9803f"), .25, t);
    for (let e = 0; e < 7; e++) {
        const n = Math.floor(t() * 14)
          , s = Math.floor(t() * 14);
        i.set(n, s, C("#ffe9a0")),
        i.set(n + 1, s, C("#ffd36a")),
        i.set(n, s + 1, C("#ffd36a")),
        i.set(n + 1, s + 1, C("#fff6d0"))
    }
}
;
ut.crafting_table_top = (i, t) => {
    Ci(i, t, C("#a37a42"));
    for (let e = 0; e < st; e++)
        i.set(e, 0, C("#5a3d1c")),
        i.set(e, 15, C("#5a3d1c")),
        i.set(0, e, C("#5a3d1c")),
        i.set(15, e, C("#5a3d1c"));
    for (let e = 2; e < 14; e++)
        i.set(e, 5, C("#6b4a24")),
        i.set(e, 10, C("#6b4a24")),
        i.set(5, e, C("#6b4a24")),
        i.set(10, e, C("#6b4a24"))
}
;
function rh(i, t, e) {
    Ci(i, t, C("#a37a42"));
    for (let n = 0; n < st; n++)
        for (let s = 0; s < 3; s++)
            i.set(n, s, Pt(C("#5a3d1c"), 1 + (t() - .5) * .1));
    if (e) {
        for (let n = 2; n < 8; n++)
            i.set(n, 7, C("#c9c9c9")),
            i.set(n, 8, C("#a8a8a8")),
            n % 2 && i.set(n, 9, C("#8e8e8e"));
        i.set(8, 7, C("#6b4a24")),
        i.set(9, 7, C("#6b4a24")),
        i.set(9, 8, C("#6b4a24"));
        for (let n = 6; n < 13; n++)
            i.set(12, n, C("#6b4a24"));
        for (let n = 10; n < 15; n++)
            i.set(n, 5, C("#8e8e8e")),
            i.set(n, 6, C("#b0b0b0"))
    } else {
        for (let n = 5; n < 13; n++)
            i.set(4, n, C("#6b4a24"));
        for (let n = 2; n < 7; n++)
            i.set(n, 5, C("#9c9c9c"));
        for (let n = 6; n < 13; n++)
            i.set(11, n, C("#6b4a24"));
        i.set(10, 5, C("#c0c0c0")),
        i.set(11, 5, C("#c0c0c0")),
        i.set(12, 5, C("#c0c0c0")),
        i.set(10, 6, C("#a0a0a0")),
        i.set(12, 6, C("#a0a0a0"))
    }
}
ut.crafting_table_side = (i, t) => rh(i, t, !1);
ut.crafting_table_front = (i, t) => rh(i, t, !0);
function ra(i, t) {
    i.fill(C("#7a7a7a"), .14, t);
    for (let e = 0; e < st; e++)
        i.set(e, 0, C("#5a5a5a")),
        i.set(e, 15, C("#4a4a4a")),
        i.set(0, e, C("#5a5a5a")),
        i.set(15, e, C("#4a4a4a"))
}
ut.furnace_side = (i, t) => ra(i, t);
ut.furnace_top = (i, t) => {
    ra(i, t);
    for (let e = 3; e < 13; e++)
        for (let n = 3; n < 13; n++)
            i.set(n, e, Pt(C("#8a8a8a"), 1 + (t() - .5) * .1))
}
;
function oh(i, t, e) {
    ra(i, t);
    for (let n = 3; n < 13; n++)
        i.set(n, 3, C("#9a9a9a")),
        i.set(n, 4, C("#5a5a5a"));
    for (let n = 8; n < 14; n++)
        for (let s = 4; s < 12; s++)
            if (e) {
                const r = (14 - n) / 6 + (t() - .5) * .4;
                i.set(s, n, r > .75 ? C("#ffe680") : r > .4 ? C("#ff9a20") : C("#c84010"))
            } else
                i.set(s, n, Pt(C("#1d1d1d"), 1 + (t() - .5) * .3));
    for (let n = 3; n < 13; n++)
        i.set(n, 7, C("#4a4a4a"))
}
ut.furnace_front = (i, t) => oh(i, t, !1);
ut.furnace_front_on = (i, t) => oh(i, t, !0);
function ah(i, t) {
    Ci(i, t, C("#a36a2c"));
    for (let e = 0; e < st; e++)
        i.set(e, 0, C("#3e2810")),
        i.set(e, 15, C("#3e2810")),
        i.set(0, e, C("#3e2810")),
        i.set(15, e, C("#3e2810"))
}
ut.chest_top = (i, t) => ah(i, t);
ut.chest_side = (i, t) => {
    ah(i, t);
    for (let e = 0; e < st; e++)
        i.set(e, 5, C("#3e2810"))
}
;
ut.chest_front = (i, t) => {
    ut.chest_side(i, t);
    for (let e = 4; e < 9; e++)
        i.set(7, e, C("#d8d8d8")),
        i.set(8, e, C("#a8a8a8"));
    i.set(7, 8, C("#3a3a3a"))
}
;
ut.bookshelf = (i, t) => {
    Ci(i, t, C("#b08c56"));
    const e = ["#8c2c2c", "#2c4c8c", "#2c7c3c", "#8c7c2c", "#5c2c7c", "#a05a20"].map(C);
    for (const [n,s] of [[2, 7], [9, 14]]) {
        let r = 1;
        for (; r < 15; ) {
            const o = e[Math.floor(t() * e.length)]
              , a = n + (t() < .3 ? 1 : 0);
            for (let l = a; l <= s; l++)
                i.set(r, l, Pt(o, l === a ? 1.25 : 1));
            r += 1 + (t() < .25 ? 1 : 0)
        }
    }
}
;
function lh(i, t, e) {
    for (let n = 0; n < st; n++)
        for (let s = 0; s < st; s++) {
            const r = Math.floor(s / 4);
            let o = Pt(C("#9a7542"), (r % 2 ? .94 : 1.03) * (1 + (t() - .5) * .08));
            s % 4 === 3 && (o = Pt(C("#9a7542"), .75)),
            i.set(s, n, o)
        }
    for (let n = 0; n < st; n++)
        i.set(0, n, C("#5e4424")),
        i.set(15, n, C("#5e4424"));
    if (e) {
        for (let n = 0; n < st; n++)
            i.set(n, 0, C("#5e4424"));
        for (let n = 3; n < 8; n++)
            for (let s = 3; s < 13; s++)
                s !== 7 && s !== 8 && n !== 5 && i.set(s, n, [0, 0, 0], 0)
    } else {
        for (let n = 0; n < st; n++)
            i.set(n, 15, C("#5e4424"));
        i.set(12, 2, C("#c0c0c0")),
        i.set(12, 3, C("#909090"))
    }
}
ut.door_bottom = (i, t) => lh(i, t, !1);
ut.door_top = (i, t) => lh(i, t, !0);
ut.bed_foot_top = (i, t) => {
    i.fill(C("#b32d25"), .08, t);
    for (let e = 0; e < st; e++)
        i.set(e, 2, C("#d8463c"))
}
;
ut.bed_head_top = (i, t) => {
    i.fill(C("#b32d25"), .08, t);
    for (let e = 7; e < 15; e++)
        for (let n = 2; n < 14; n++)
            i.set(n, e, Pt(C("#ececec"), 1 + (t() - .5) * .06))
}
;
ut.bed_side = (i, t) => {
    for (let e = 0; e < st; e++)
        for (let n = 0; n < st; n++)
            i.set(n, e, [0, 0, 0], 0);
    for (let e = 0; e < st; e++) {
        for (let n = 7; n < 11; n++)
            i.set(e, n, Pt(C("#b32d25"), 1 + (t() - .5) * .08));
        i.set(e, 11, C("#e0e0e0"));
        for (let n = 12; n < 14; n++)
            i.set(e, n, Pt(C("#8a6a3a"), 1 + (t() - .5) * .08))
    }
    for (let e = 14; e < 16; e++)
        for (const n of [0, 1, 2, 13, 14, 15])
            i.set(n, e, C("#6b5230"))
}
;
ut.cactus_side = (i, t) => {
    i.fill(C("#3f8a2c"), .1, t);
    for (let e = 0; e < st; e++)
        for (const n of [1, 5, 10, 14])
            i.set(n, e, C("#2c6a1e"));
    for (let e = 0; e < 8; e++)
        i.set([0, 4, 9, 15][e % 4], Math.floor(t() * st), C("#d8e8a0"))
}
;
ut.cactus_top = (i, t) => {
    i.fill(C("#4a9a34"), .1, t);
    for (let e = 1; e < 15; e++)
        i.set(e, 1, C("#2c6a1e")),
        i.set(e, 14, C("#2c6a1e")),
        i.set(1, e, C("#2c6a1e")),
        i.set(14, e, C("#2c6a1e"));
    i.set(7, 7, C("#8ac060")),
    i.set(8, 8, C("#8ac060"))
}
;
function ge(i) {
    for (let t = 0; t < st; t++)
        for (let e = 0; e < st; e++)
            i.set(e, t, [0, 0, 0], 0)
}
ut.tall_grass = (i, t) => {
    ge(i);
    for (let e = 0; e < 9; e++) {
        let n = 1 + Math.floor(t() * 14);
        const s = 5 + Math.floor(t() * 9)
          , r = t() < .5 ? -1 : 1;
        for (let o = 0; o < s; o++) {
            const a = 15 - o;
            o > 3 && t() < .25 && (n += r),
            i.set(n, a, Pt(na, .75 + o / s * .45))
        }
    }
}
;
function ch(i, t, e, n) {
    ge(i);
    for (let s = 8; s < 16; s++)
        i.set(7, s, C("#3f7a2a"));
    i.set(6, 12, C("#4e8f34")),
    i.set(5, 11, C("#4e8f34")),
    i.set(8, 13, C("#4e8f34")),
    i.set(9, 12, C("#4e8f34"));
    for (let s = 4; s < 8; s++)
        for (let r = 5; r < 10; r++)
            (r === 5 || r === 9) && (s === 4 || s === 7) || i.set(r, s, Pt(e, .9 + t() * .2));
    i.set(7, 5, n),
    i.set(7, 6, n)
}
ut.dandelion = (i, t) => ch(i, t, C("#f6dc28"), C("#e8a010"));
ut.poppy = (i, t) => ch(i, t, C("#d81e1e"), C("#2a2a10"));
function oa(i, t, e, n) {
    ge(i);
    for (let s = 9; s < 16; s++)
        i.set(7, s, n);
    for (let s = 0; s < 40; s++) {
        const r = t() * Math.PI * 2
          , o = t() * 4.5;
        i.set(Math.round(7 + Math.cos(r) * o), Math.round(6 + Math.sin(r) * o * .9), Pt(e, .8 + t() * .4))
    }
}
ut.oak_sapling = (i, t) => oa(i, t, C("#4e8a30"), C("#6b5232"));
ut.birch_sapling = (i, t) => oa(i, t, C("#7aa652"), C("#d8d5c9"));
ut.spruce_sapling = (i, t) => oa(i, t, C("#2f5a3a"), C("#4a3420"));
ut.brown_mushroom = i => {
    ge(i);
    for (let t = 10; t < 16; t++)
        i.set(7, t, C("#e0d0b0")),
        i.set(8, t, C("#c8b898"));
    for (let t = 4; t < 12; t++)
        i.set(t, 9, C("#8a6a4a")),
        i.set(t, 8, C("#a07a55"));
    for (let t = 5; t < 11; t++)
        i.set(t, 7, C("#b08a65"))
}
;
ut.red_mushroom = i => {
    ge(i);
    for (let t = 10; t < 16; t++)
        i.set(7, t, C("#e8e0d0")),
        i.set(8, t, C("#d0c8b8"));
    for (let t = 4; t < 12; t++)
        i.set(t, 9, C("#b01a1a")),
        i.set(t, 8, C("#d82a2a"));
    for (let t = 5; t < 11; t++)
        i.set(t, 7, C("#d82a2a")),
        i.set(t, 6, t > 5 && t < 10 ? C("#e83a3a") : [0, 0, 0], t > 5 && t < 10 ? 255 : 0);
    i.set(6, 8, C("#ffffff")),
    i.set(9, 7, C("#ffffff")),
    i.set(10, 9, C("#ffffff"))
}
;
ut.dead_bush = (i, t) => {
    ge(i);
    for (let e = 0; e < 5; e++) {
        let n = 7
          , s = 15;
        const r = (t() - .5) * 1.6;
        let o = 7;
        for (let a = 0; a < 7 + t() * 4; a++)
            i.set(n, s, C("#7a5530")),
            s--,
            o += r,
            n = Math.round(o)
    }
}
;
ut.wool = (i, t) => {
    i.fill(C("#e8ecec"), .06, t);
    for (let e = 0; e < 14; e++) {
        const n = Math.floor(t() * 15)
          , s = Math.floor(t() * 15);
        i.set(n, s, C("#cfd4d4")),
        i.set(n + 1, s + 1, C("#d8dcdc"))
    }
}
;
const hh = [];
{
    const i = Ri(1234);
    for (let t = 0; t < 20; t++) {
        const e = [];
        let n = 5 + i() * 6
          , s = 5 + i() * 6;
        const r = i() * Math.PI * 2;
        for (let o = 0; o < 6 + t / 2; o++)
            e.push([Math.floor(n), Math.floor(s)]),
            n += Math.cos(r + (i() - .5) * 1.6),
            s += Math.sin(r + (i() - .5) * 1.6);
        hh.push(e)
    }
}
for (let i = 0; i < 10; i++)
    ut["destroy_" + i] = t => {
        ge(t);
        for (let e = 0; e < (i + 1) * 2; e++)
            for (const [n,s] of hh[e])
                n >= 0 && s >= 0 && n < st && s < st && t.set(n, s, [20, 20, 20], 200)
    }
    ;
class j0 {
    constructor() {
        this.index = new Map,
        this.tiles = new Map,
        this.avgColor = new Map;
        const t = st * Ji;
        this.canvas = document.createElement("canvas"),
        this.canvas.width = t,
        this.canvas.height = t;
        const e = this.canvas.getContext("2d")
          , n = e.createImageData(t, t);
        let s = 0;
        for (const r of Object.keys(ut)) {
            const o = new eh;
            ut[r](o, Ri(Gs(r))),
            this.tiles.set(r, o);
            const a = s % Ji * st
              , l = Math.floor(s / Ji) * st;
            let c = 0
              , h = 0
              , u = 0
              , f = 0;
            for (let p = 0; p < st; p++)
                for (let g = 0; g < st; g++) {
                    const _ = (p * st + g) * 4
                      , m = ((l + p) * t + a + g) * 4;
                    for (let d = 0; d < 4; d++)
                        n.data[m + d] = o.data[_ + d];
                    o.data[_ + 3] > 100 && (c += o.data[_],
                    h += o.data[_ + 1],
                    u += o.data[_ + 2],
                    f++)
                }
            this.avgColor.set(r, f ? [c / f, h / f, u / f] : [128, 128, 128]),
            this.index.set(r, s),
            s++
        }
        e.putImageData(n, 0, 0),
        this.texture = new as(this.canvas),
        this.texture.magFilter = he,
        this.texture.minFilter = he,
        this.texture.generateMipmaps = !1,
        this.texture.colorSpace = Me
    }
    uv(t) {
        const e = this.index.get(t) ?? 0
          , n = 1 / Ji
          , s = 5e-4
          , r = e % Ji * n
          , o = 1 - (Math.floor(e / Ji) + 1) * n;
        return [r + s, o + s, r + n - s, o + n - s]
    }
    tileIndex(t) {
        return this.index.get(t) ?? 0
    }
    color(t) {
        return this.avgColor.get(t) ?? [128, 128, 128]
    }
    tileCanvas(t) {
        const e = document.createElement("canvas");
        e.width = st,
        e.height = st;
        const n = this.tiles.get(t);
        return n && e.getContext("2d").putImageData(new ImageData(new Uint8ClampedArray(n.data),st,st), 0, 0),
        e
    }
}
const ee = {};
function An(i, t, e, n, s, r, o=1) {
    const a = Math.max(Math.abs(n - t), Math.abs(s - e));
    for (let l = 0; l <= a; l++) {
        const c = Math.round(t + (n - t) * l / a)
          , h = Math.round(e + (s - e) * l / a);
        i.set(c, h, r),
        o > 1 && i.set(c + 1, h, r)
    }
}
function tn(i, t=[30, 24, 18]) {
    const e = (s, r) => s >= 0 && r >= 0 && s < st && r < st && i.alpha(s, r) > 0
      , n = [];
    for (let s = 0; s < st; s++)
        for (let r = 0; r < st; r++)
            e(r, s) || (e(r + 1, s) || e(r - 1, s) || e(r, s + 1) || e(r, s - 1)) && n.push([r, s]);
    for (const [s,r] of n)
        i.set(s, r, t)
}
function hi(i, t, e, n, s, r, o, a=.3) {
    for (let l = 0; l < st; l++)
        for (let c = 0; c < st; c++) {
            const h = (c + .5 - e) / s
              , u = (l + .5 - n) / r;
            if (h * h + u * u < 1 - t() * a) {
                const p = 1.15 - (u + h) * .18;
                i.set(c, l, Pt(o, p * (1 + (t() - .5) * .1)))
            }
        }
}
const Li = (i, t) => (e, n) => {
    if (ge(e),
    hi(e, n, 8, 8.5, 5.5, 5, C(i), .35),
    t)
        for (let s = 0; s < 6; s++) {
            const r = 5 + Math.floor(n() * 6)
              , o = 5 + Math.floor(n() * 6);
            e.alpha(r, o) && e.set(r, o, C(t))
        }
    tn(e)
}
  , Vr = i => t => {
    ge(t);
    const e = C(i);
    for (let n = 6; n < 11; n++)
        for (let s = 2 + (10 - n); s < 14 - (n - 6) * 0; s++)
            s > 13 || t.set(s, n, Pt(e, n === 6 ? 1.3 : n < 8 ? 1.1 : .85));
    for (let n = 6; n < 11; n++)
        t.set(13, n, Pt(e, .7));
    tn(t)
}
;
ee.stick = i => {
    ge(i),
    An(i, 3, 13, 12, 4, C("#7a5a30")),
    An(i, 4, 13, 13, 4, C("#5a3e1e")),
    tn(i)
}
;
ee.coal = Li("#2e2e2e", "#4a4a4a");
ee.charcoal = Li("#3a2e24", "#5a4a3a");
ee.flint = Li("#3a3a40", "#6a6a70");
ee.raw_iron = Li("#c8a088", "#e8c8b0");
ee.raw_gold = Li("#e8c030", "#fff080");
ee.raw_copper = Li("#c06a3a", "#5fb89a");
ee.clay_ball = Li("#a1a7b4", "#c0c6d0");
ee.iron_ingot = Vr("#d8d8d8");
ee.gold_ingot = Vr("#f4d040");
ee.copper_ingot = Vr("#d07a48");
ee.brick = Vr("#a04a34");
ee.diamond = i => {
    ge(i);
    for (let t = 3; t < 14; t++) {
        const e = t < 7 ? t - 3 + 3 : 13 - t;
        for (let n = 8 - e; n < 8 + e; n++)
            i.set(n, t, Pt(C("#4de8d8"), t < 7 ? 1.25 : 1 - (t - 7) * .05))
    }
    i.set(6, 5, C("#ffffff")),
    i.set(7, 4, C("#e0fffc")),
    tn(i, [10, 60, 60])
}
;
ee.redstone = (i, t) => {
    ge(i);
    for (let e = 0; e < 30; e++) {
        const n = t() * 6.28
          , s = t() * 5;
        i.set(Math.round(8 + Math.cos(n) * s), Math.round(9 + Math.sin(n) * s * .7), C(t() < .3 ? "#ff4040" : "#b01010"))
    }
}
;
ee.gunpowder = (i, t) => {
    ge(i);
    for (let e = 0; e < 34; e++) {
        const n = t() * 6.28
          , s = t() * 5;
        i.set(Math.round(8 + Math.cos(n) * s), Math.round(9 + Math.sin(n) * s * .7), C(t() < .3 ? "#8a8a8a" : "#4a4a4a"))
    }
}
;
ee.apple = (i, t) => {
    ge(i),
    hi(i, t, 8, 9.5, 5.5, 5, C("#d8231c"), .05),
    i.set(8, 3, C("#5a3a1a")),
    i.set(8, 4, C("#5a3a1a")),
    i.set(9, 3, C("#4a9a2a")),
    i.set(10, 2, C("#4a9a2a")),
    i.set(6, 7, C("#ff8a80")),
    tn(i)
}
;
const Pi = (i, t, e) => (n, s) => {
    ge(n),
    hi(n, s, 7.5, 8.5, 6, 4.5, C(i), .08);
    for (let r = 0; r < 6; r++) {
        const o = 4 + Math.floor(s() * 7)
          , a = 6 + Math.floor(s() * 4);
        n.alpha(o, a) && n.set(o, a, C(t))
    }
    e && (n.set(13, 11, C("#f0ece0")),
    n.set(14, 12, C("#f0ece0")),
    n.set(14, 11, C("#d8d4c8"))),
    tn(n)
}
;
ee.beef = Pi("#c83a3a", "#f0a0a0", !1);
ee.cooked_beef = Pi("#7a4a2a", "#a06a40", !1);
ee.porkchop = Pi("#f0908a", "#ffd0c8", !0);
ee.cooked_porkchop = Pi("#c08a5a", "#e0b080", !0);
ee.mutton = Pi("#c84a4a", "#f0e0d8", !0);
ee.cooked_mutton = Pi("#8a5232", "#c09060", !0);
ee.chicken = (i, t) => {
    ge(i),
    hi(i, t, 7, 7.5, 5, 4.5, C("#f0c8b0"), .06),
    An(i, 10, 10, 13, 13, C("#f0ece0")),
    tn(i)
}
;
ee.cooked_chicken = (i, t) => {
    ge(i),
    hi(i, t, 7, 7.5, 5, 4.5, C("#c8884a"), .06),
    An(i, 10, 10, 13, 13, C("#f0ece0")),
    tn(i)
}
;
ee.rotten_flesh = Pi("#7a8a4a", "#a05a3a", !1);
ee.bread = (i, t) => {
    ge(i),
    hi(i, t, 8, 9, 7, 3.5, C("#c08a3a"), .04);
    for (const e of [4, 7, 10])
        i.set(e, 7, C("#e8c070")),
        i.set(e + 1, 8, C("#e8c070"));
    tn(i)
}
;
ee.leather = (i, t) => {
    ge(i),
    hi(i, t, 8, 8, 6, 6, C("#8a5230"), .25),
    tn(i)
}
;
ee.feather = i => {
    ge(i),
    An(i, 3, 13, 12, 3, C("#d8d8d8"), 2),
    An(i, 3, 13, 11, 4, C("#a0a0a0")),
    tn(i, [90, 90, 90])
}
;
ee.bone = i => {
    ge(i),
    An(i, 4, 12, 11, 5, C("#ece8d8"), 2);
    for (const [t,e] of [[3, 12], [4, 13], [12, 4], [11, 3], [13, 5]])
        i.set(t, e, C("#ece8d8"));
    tn(i, [80, 80, 70])
}
;
ee.arrow = i => {
    ge(i),
    An(i, 3, 12, 12, 3, C("#7a5a30")),
    i.set(12, 3, C("#c8c8c8")),
    i.set(13, 2, C("#e0e0e0")),
    i.set(11, 3, C("#a0a0a0")),
    i.set(12, 4, C("#a0a0a0")),
    i.set(2, 12, C("#f0f0f0")),
    i.set(3, 13, C("#f0f0f0")),
    i.set(2, 13, C("#d0d0d0")),
    i.set(4, 13, C("#d0d0d0")),
    i.set(2, 11, C("#d0d0d0"))
}
;
ee.string = i => {
    ge(i);
    for (let t = 2; t < 14; t++)
        i.set(t, Math.round(8 + Math.sin(t * .9) * 3), C("#f0f0f0"));
    tn(i, [120, 120, 120])
}
;
const uh = i => (t, e) => {
    ge(t);
    for (let n = 8; n < 13; n++)
        for (let s = 2 + (n - 8); s < 14 - (n - 8); s++)
            t.set(s, n, Pt(C("#8a5a2a"), 1 + (e() - .5) * .1));
    for (let n = 2; n < 14; n++)
        t.set(n, 8, i ? Pt(C(i), 1 + (e() - .5) * .2) : C("#5a3a1a"));
    if (i)
        for (let n = 3; n < 13; n++)
            t.set(n, 7, Pt(C(i), 1.1 + (e() - .5) * .2));
    tn(t)
}
;
ee.bowl = uh();
ee.mushroom_stew = uh("#b08a5a");
function Z0(i, t) {
    return e => {
        ge(e);
        const n = C("#7a5a30")
          , s = C("#4e3618")
          , r = t
          , o = Pt(t, .7)
          , a = Pt(t, 1.2);
        if (i === "sword") {
            for (let l = 0; l < 10; l++)
                e.set(5 + l, 10 - l, a),
                e.set(6 + l, 10 - l, r),
                e.set(6 + l, 11 - l, o);
            An(e, 2, 9, 6, 13, s),
            An(e, 3, 9, 6, 12, n),
            An(e, 1, 14, 4, 11, n),
            e.set(1, 15, s)
        } else {
            for (let l = 0; l < 11; l++)
                e.set(2 + l, 13 - l, n),
                e.set(3 + l, 13 - l, s);
            if (i === "pickaxe")
                [[3, 2], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 2], [11, 2], [12, 3], [13, 4], [13, 5], [14, 6], [14, 7], [14, 8], [14, 9], [14, 10], [13, 11]].forEach( ([c,h], u) => {
                    e.set(c, h, a),
                    e.set(c - (u > 9 ? 1 : 0), h + (u <= 9 ? 1 : 0), r)
                }
                ),
                e.set(11, 3, o),
                e.set(12, 4, o),
                e.set(12, 5, o);
            else if (i === "axe")
                for (let l = 1; l < 8; l++)
                    for (let c = 8; c < 14; c++)
                        c - 8 + (7 - l) > 2 && c - 8 < 6 - Math.abs(l - 4) * .5 && e.set(c, l, l < 3 ? a : c > 11 ? o : r);
            else if (i === "shovel")
                for (let l = 0; l < 7; l++)
                    for (let c = 9; c < 16; c++) {
                        const h = c - 12
                          , u = l - 3;
                        h * h + u * u < 9 && !(c < 11 && l > 4) && e.set(c, l, h + u < -1 ? a : h + u > 2 ? o : r)
                    }
        }
        tn(e, [24, 20, 16])
    }
}
class J0 {
    constructor(t) {
        this.atlas = t,
        this.cache = new Map,
        this.urlCache = new Map,
        this.texCache = new Map
    }
    canvas(t) {
        let e = this.cache.get(t);
        return e || (e = this.build(t),
        this.cache.set(t, e),
        e)
    }
    url(t) {
        let e = this.urlCache.get(t);
        return e || (e = this.canvas(t).toDataURL(),
        this.urlCache.set(t, e)),
        e
    }
    texture(t) {
        let e = this.texCache.get(t);
        return e || (e = new as(this.flat(t)),
        e.magFilter = he,
        e.minFilter = he,
        e.generateMipmaps = !1,
        e.colorSpace = Me,
        this.texCache.set(t, e)),
        e
    }
    flat(t) {
        if (ce(t).isBlock)
            return this.atlas.tileCanvas(we(t).side === "door_bottom" ? "door_top" : we(t).side);
        const n = document.createElement("canvas");
        n.width = st,
        n.height = st;
        const s = new eh;
        return this.paintItem(t, s),
        n.getContext("2d").putImageData(new ImageData(new Uint8ClampedArray(s.data),st,st), 0, 0),
        n
    }
    paintItem(t, e) {
        const n = ce(t);
        if (n.tool) {
            const s = zr.find(r => r.key === n.tool.material);
            Z0(n.tool.type, C(s.color))(e)
        } else
            ee[n.key] ? ee[n.key](e, Ri(Gs(n.key))) : (ge(e),
            hi(e, Ri(t), 8, 8, 5, 5, [200, 0, 200]))
    }
    build(t) {
        const n = document.createElement("canvas");
        n.width = 64,
        n.height = 64;
        const s = n.getContext("2d");
        if (s.imageSmoothingEnabled = !1,
        !ce(t).isBlock)
            return s.drawImage(this.flat(t), 0, 0, 64, 64),
            n;
        const o = we(t);
        if (o.shape === "cross" || o.shape === "torch")
            return s.drawImage(this.atlas.tileCanvas(o.side), 0, 0, 64, 64),
            n;
        if (o.shape === "door")
            return s.drawImage(this.atlas.tileCanvas("door_top"), 16, 0, 32, 32),
            s.drawImage(this.atlas.tileCanvas("door_bottom"), 16, 32, 32, 32),
            n;
        const a = o.shape === "slab" ? .5 : o.shape === "bed" ? .5625 : 1
          , l = this.atlas.tileCanvas(o.shape === "bed" ? "bed_head_top" : o.top)
          , c = this.atlas.tileCanvas(o.side)
          , h = this.atlas.tileCanvas(o.front ?? o.side);
        o.tint && this.tintCanvas(l, [.95, 1.05, .85]);
        const u = (1 - a) * 30;
        return s.save(),
        s.setTransform(28 / 16, 14 / 16, 0, 30 * a / (16 * a), 4, 18 + u),
        s.drawImage(h, 0, 16 * (1 - a), 16, 16 * a, 0, 0, 16, 16 * a),
        s.globalCompositeOperation = "source-atop",
        s.fillStyle = "rgba(0,0,0,0.22)",
        s.fillRect(0, 0, 16, 16),
        s.restore(),
        s.save(),
        s.setTransform(28 / 16, -14 / 16, 0, 30 / 16, 32, 32 + u),
        s.drawImage(c, 0, 16 * (1 - a), 16, 16 * a, 0, 0, 16, 16 * a),
        s.globalCompositeOperation = "source-atop",
        s.fillStyle = "rgba(0,0,0,0.42)",
        s.fillRect(0, 0, 16, 16),
        s.restore(),
        s.save(),
        s.setTransform(28 / 16, -14 / 16, 28 / 16, 14 / 16, 4, 18 + u),
        s.drawImage(l, 0, 0),
        s.restore(),
        n
    }
    tintCanvas(t, e) {
        const n = t.getContext("2d")
          , s = n.getImageData(0, 0, t.width, t.height);
        for (let r = 0; r < s.data.length; r += 4)
            s.data[r] *= e[0],
            s.data[r + 1] *= e[1],
            s.data[r + 2] *= e[2];
        n.putImageData(s, 0, 0)
    }
}
function Q0(i) {
    const t = document.createElement("canvas");
    t.width = 9,
    t.height = 9;
    const e = t.getContext("2d")
      , n = (r, o, a) => {
        e.fillStyle = a,
        e.fillRect(r, o, 1, 1)
    }
      , s = [".XX...XX.", "XooX.XooX", "XoaooooaX", "XooooooоX", "XoooooooX", ".XoooooX.", "..XoooX..", "...XoX...", "....X...."];
    if (i.startsWith("heart"))
        s.forEach( (r, o) => [...r].forEach( (a, l) => {
            if (a === "X")
                n(l, o, "#1a0505");
            else if (a !== ".") {
                const c = i === "heart_full" || i === "heart_half" && l < 5;
                n(l, o, c ? a === "a" ? "#ff9a9a" : o < 3 ? "#ff3030" : "#c81010" : "#3a2020")
            }
        }
        ));
    else if (i.startsWith("food"))
        [".....XX..", "....XooX.", "...XoooX.", "..XoooX..", ".XoooX...", "XoaoX....", "XooX.....", "XbbX.....", ".XX......"].forEach( (o, a) => [...o].forEach( (l, c) => {
            if (l === "X")
                n(c, a, "#1a1005");
            else if (l !== ".") {
                const h = i === "food_full" || i === "food_half" && c > 3;
                n(c, a, h ? l === "b" ? "#f0e8d8" : l === "a" ? "#e8b070" : "#b0662a" : "#3a2a1a")
            }
        }
        ));
    else if (i === "bubble") {
        e.strokeStyle = "#2050c0";
        for (let r = 0; r < 9; r++)
            for (let o = 0; o < 9; o++) {
                const a = Math.hypot(o - 4, r - 4);
                a < 4.2 && a > 3.2 ? n(o, r, "#3060d0") : a <= 3.2 && n(o, r, "#a0c8ff")
            }
        n(3, 2, "#ffffff")
    }
    return t.toDataURL()
}
const fh = `
attribute vec2 light;
attribute vec3 color;
varying vec2 vUv;
varying vec2 vLight;
varying vec3 vColor;
varying float vFogDepth;
varying vec3 vWorld;
void main() {
  vUv = uv;
  vLight = light;
  vColor = color;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 mv = viewMatrix * wp;
  vFogDepth = length(mv.xyz);
  gl_Position = projectionMatrix * mv;
}`
  , dh = `
uniform sampler2D map;
uniform float sun;
uniform vec3 skyTint;
uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;
uniform float time;
uniform float brightness;
uniform float underwater;
varying vec2 vUv;
varying vec2 vLight;
varying vec3 vColor;
varying float vFogDepth;
varying vec3 vWorld;
float curve(float l) {
  float c = l / (4.0 - 3.0 * l);
  return mix(c, l, brightness);
}
vec3 lightColor() {
  float s = curve(vLight.x * sun);
  float b = curve(vLight.y);
  vec3 lc = max(vec3(s) * skyTint, vec3(1.0, 0.86, 0.66) * b);
  return max(lc, vec3(0.035 + brightness * 0.04));
}
vec3 applyFog(vec3 c) {
  float f = smoothstep(fogNear, fogFar, vFogDepth);
  if (underwater > 0.5) f = smoothstep(0.0, 22.0, vFogDepth);
  return mix(c, fogColor, f);
}
`
  , tg = `
${dh}
void main() {
  vec4 t = texture2D(map, vUv);
  if (t.a < 0.5) discard;
  vec3 c = t.rgb * vColor * lightColor();
  gl_FragColor = vec4(applyFog(c), 1.0);
  #include <colorspace_fragment>
}`
  , eg = `
${dh}
void main() {
  vec4 t = texture2D(map, vUv);
  float w = sin(vWorld.x * 1.7 + time * 1.6) * cos(vWorld.z * 1.3 + time * 1.2) * 0.5 + 0.5;
  float w2 = sin((vWorld.x + vWorld.z) * 0.6 - time * 0.9) * 0.5 + 0.5;
  vec3 c = t.rgb * vColor * (0.82 + 0.22 * w + 0.08 * w2) * lightColor();
  float a = 0.72;
  gl_FragColor = vec4(applyFog(c), a);
  #include <colorspace_fragment>
}`;
function ng(i) {
    return {
        map: {
            value: i
        },
        sun: {
            value: 1
        },
        skyTint: {
            value: new Bt(1,1,1)
        },
        fogColor: {
            value: new Bt(.7,.8,1)
        },
        fogNear: {
            value: 60
        },
        fogFar: {
            value: 100
        },
        time: {
            value: 0
        },
        brightness: {
            value: .3
        },
        underwater: {
            value: 0
        }
    }
}
function ig(i) {
    return new Cn({
        uniforms: i,
        vertexShader: fh,
        fragmentShader: tg
    })
}
function sg(i) {
    return new Cn({
        uniforms: i,
        vertexShader: fh,
        fragmentShader: eg,
        transparent: !0,
        depthWrite: !1
    })
}
const Hs = i => new Bt(i)
  , Zl = Hs("#5f93e8")
  , Jl = Hs("#b4d0ff")
  , rg = Hs("#03060f")
  , og = Hs("#0b1328")
  , Ql = Hs("#ff8a3c");
class ag {
    constructor() {
        this.group = new wn,
        this.cloudsEnabled = !0,
        this.state = {
            sunLight: 1,
            daylight: 1,
            skyTint: new Bt(1,1,1),
            fogColor: new Bt,
            sunDir: new I(0,1,0)
        },
        this.domeMat = new Cn({
            uniforms: {
                top: {
                    value: Zl.clone()
                },
                horizon: {
                    value: Jl.clone()
                },
                sunDir: {
                    value: new I(0,1,0)
                },
                sunset: {
                    value: 0
                },
                sunsetColor: {
                    value: Ql.clone()
                }
            },
            vertexShader: "varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
            fragmentShader: `uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform float sunset; uniform vec3 sunsetColor; varying vec3 vDir;
        void main(){
          float h = vDir.y;
          vec3 c = mix(horizon, top, pow(clamp(h,0.0,1.0), 0.55));
          if (h < 0.0) c = mix(horizon, horizon*0.55, clamp(-h*3.0,0.0,1.0));
          float s = max(dot(normalize(vec3(vDir.x, 0.0, vDir.z)), normalize(vec3(sunDir.x, 0.0, sunDir.z)+vec3(0.0001))), 0.0);
          float band = 1.0 - smoothstep(0.0, 0.45, abs(h - 0.02));
          c = mix(c, sunsetColor, sunset * band * (0.35 + 0.65 * pow(s, 3.0)));
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`,
            side: Je,
            depthWrite: !1,
            fog: !1
        }),
        this.dome = new Pe(new ta(300,24,16),this.domeMat),
        this.dome.renderOrder = -10,
        this.dome.frustumCulled = !1,
        this.group.add(this.dome),
        this.sun = new Pe(new wi(36,36),new Fs({
            map: this.sunTexture(),
            transparent: !0,
            depthWrite: !1,
            fog: !1,
            blending: Do
        })),
        this.moon = new Pe(new wi(26,26),new Fs({
            map: this.moonTexture(),
            transparent: !0,
            depthWrite: !1,
            fog: !1
        })),
        this.sun.renderOrder = -9,
        this.moon.renderOrder = -9,
        this.group.add(this.sun, this.moon);
        const t = [];
        for (let s = 0; s < 900; s++) {
            const r = gn(7, s, 1) * 2 - 1
              , o = gn(7, s, 2) * Math.PI * 2
              , a = Math.sqrt(1 - r * r);
            t.push(Math.cos(o) * a * 280, Math.abs(r) * 280, Math.sin(o) * a * 280)
        }
        const e = new Qe;
        e.setAttribute("position", new sn(t,3)),
        this.stars = new jc(e,new Qo({
            color: 16777215,
            size: 1.6,
            sizeAttenuation: !1,
            transparent: !0,
            depthWrite: !1,
            fog: !1
        })),
        this.stars.renderOrder = -9,
        this.stars.frustumCulled = !1,
        this.group.add(this.stars);
        const n = this.cloudTexture();
        this.cloudMat = new Cn({
            uniforms: {
                map: {
                    value: n
                },
                offset: {
                    value: new Kt
                },
                color: {
                    value: new Bt(1,1,1)
                },
                camPos: {
                    value: new I
                }
            },
            vertexShader: "varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",
            fragmentShader: `uniform sampler2D map; uniform vec2 offset; uniform vec3 color; uniform vec3 camPos; varying vec3 vW;
        void main(){
          vec2 uv = (vW.xz + offset) / (12.0 * 64.0);
          vec4 t = texture2D(map, uv);
          if (t.a < 0.5) discard;
          float d = length(vW.xz - camPos.xz);
          float a = 0.82 * (1.0 - smoothstep(180.0, 380.0, d));
          gl_FragColor = vec4(color, a);
          #include <colorspace_fragment>
        }`,
            transparent: !0,
            depthWrite: !1,
            side: bn
        }),
        this.clouds = new Pe(new wi(900,900),this.cloudMat),
        this.clouds.rotation.x = -Math.PI / 2,
        this.clouds.renderOrder = 2,
        this.clouds.frustumCulled = !1,
        this.group.add(this.clouds)
    }
    sunTexture() {
        const t = document.createElement("canvas");
        t.width = 32,
        t.height = 32;
        const e = t.getContext("2d");
        e.fillStyle = "rgba(255,240,170,0.25)",
        e.fillRect(2, 2, 28, 28),
        e.fillStyle = "rgba(255,245,190,0.6)",
        e.fillRect(6, 6, 20, 20),
        e.fillStyle = "#fffbe0",
        e.fillRect(9, 9, 14, 14);
        const n = new as(t);
        return n.magFilter = he,
        n.minFilter = he,
        n.colorSpace = Me,
        n
    }
    moonTexture() {
        const t = document.createElement("canvas");
        t.width = 16,
        t.height = 16;
        const e = t.getContext("2d");
        e.fillStyle = "#dfe4f0",
        e.fillRect(3, 3, 10, 10),
        e.fillStyle = "#b8bfd0",
        e.fillRect(5, 5, 2, 2),
        e.fillRect(9, 8, 3, 2),
        e.fillRect(6, 10, 2, 1);
        const n = new as(t);
        return n.magFilter = he,
        n.minFilter = he,
        n.colorSpace = Me,
        n
    }
    cloudTexture() {
        const e = document.createElement("canvas");
        e.width = 64,
        e.height = 64;
        const n = e.getContext("2d")
          , s = n.createImageData(64, 64)
          , r = (a, l) => gn(99, (a % 16 + 16) % 16, (l % 16 + 16) % 16);
        for (let a = 0; a < 64; a++)
            for (let l = 0; l < 64; l++) {
                const c = l / 4
                  , h = a / 4
                  , u = Math.floor(c)
                  , f = Math.floor(h)
                  , p = c - u
                  , g = h - f
                  , _ = r(u, f)
                  , m = r(u + 1, f)
                  , d = r(u, f + 1)
                  , x = r(u + 1, f + 1)
                  , v = (_ * (1 - p) + m * p) * (1 - g) + (d * (1 - p) + x * p) * g
                  , S = gn(5, l, a) * .15
                  , L = v + S > .62
                  , A = (a * 64 + l) * 4;
                s.data[A] = 255,
                s.data[A + 1] = 255,
                s.data[A + 2] = 255,
                s.data[A + 3] = L ? 255 : 0
            }
        n.putImageData(s, 0, 0);
        const o = new as(e);
        return o.magFilter = he,
        o.minFilter = he,
        o.wrapS = Us,
        o.wrapT = Us,
        o.generateMipmaps = !1,
        o
    }
    update(t, e, n) {
        const s = e / 24e3 * Math.PI * 2
          , r = new I(Math.cos(s),Math.sin(s),.18).normalize()
          , o = es(-.18, .22, r.y)
          , a = Math.max(0, 1 - Math.abs(r.y) / .38) * (r.x > 0 ? .75 : 1)
          , l = rg.clone().lerp(Zl, o)
          , c = og.clone().lerp(Jl, o)
          , h = c.clone().lerp(Ql, a * .35 * Math.max(o, .3))
          , u = this.domeMat.uniforms;
        u.top.value.copy(l),
        u.horizon.value.copy(c),
        u.sunDir.value.copy(r),
        u.sunset.value = a * .85;
        const f = t.position;
        this.group.position.set(0, 0, 0),
        this.dome.position.copy(f),
        this.stars.position.copy(f),
        this.stars.material.opacity = Math.max(0, 1 - o * 1.4),
        this.sun.position.copy(f).addScaledVector(r, 250),
        this.sun.lookAt(f),
        this.moon.position.copy(f).addScaledVector(r, -250),
        this.moon.lookAt(f),
        this.clouds.visible = this.cloudsEnabled,
        this.clouds.position.set(f.x, 140, f.z),
        this.cloudMat.uniforms.offset.value.set(n * 1.2, 0),
        this.cloudMat.uniforms.camPos.value.copy(f),
        this.cloudMat.uniforms.color.value.setRGB(.06 + .94 * o, .06 + .94 * o, .09 + .91 * o).lerp(new Bt(1,.75,.6), a * .3 * o);
        const p = this.state;
        return p.daylight = o,
        p.sunLight = .2 + .8 * o,
        p.skyTint.setRGB(.7, .75, 1).lerp(new Bt(1,1,1), o).lerp(new Bt(1,.82,.68), a * .45 * o),
        p.fogColor.copy(h),
        p.sunDir.copy(r),
        p
    }
}
const Qi = 3e3;
class lg {
    constructor() {
        this.pos = new Float32Array(Qi * 3),
        this.col = new Float32Array(Qi * 3),
        this.vel = new Float32Array(Qi * 3),
        this.life = new Float32Array(Qi),
        this.grav = new Float32Array(Qi),
        this.count = 0,
        this.geo = new Qe,
        this.geo.setAttribute("position", new ze(this.pos,3).setUsage($a)),
        this.geo.setAttribute("color", new ze(this.col,3).setUsage($a));
        const t = new Qo({
            size: .11,
            vertexColors: !0,
            sizeAttenuation: !0
        });
        this.points = new jc(this.geo,t),
        this.points.frustumCulled = !1
    }
    spawn(t, e, n, s, r, o, a, l, c, h, u=14) {
        if (this.count >= Qi)
            return;
        const f = this.count++;
        this.pos[f * 3] = t,
        this.pos[f * 3 + 1] = e,
        this.pos[f * 3 + 2] = n,
        this.vel[f * 3] = s,
        this.vel[f * 3 + 1] = r,
        this.vel[f * 3 + 2] = o;
        const p = new Bt().setRGB(a, l, c, Me);
        this.col[f * 3] = p.r,
        this.col[f * 3 + 1] = p.g,
        this.col[f * 3 + 2] = p.b,
        this.life[f] = h,
        this.grav[f] = u
    }
    burst(t, e, n, s, r, o=3, a=1, l=.4) {
        for (let c = 0; c < r; c++) {
            const h = .75 + Math.random() * .5;
            this.spawn(t + (Math.random() - .5) * l * 2, e + (Math.random() - .5) * l * 2, n + (Math.random() - .5) * l * 2, (Math.random() - .5) * o, Math.random() * o * .9, (Math.random() - .5) * o, s[0] / 255 * h * a, s[1] / 255 * h * a, s[2] / 255 * h * a, .5 + Math.random() * .6)
        }
    }
    smoke(t, e, n, s=.35) {
        this.spawn(t + (Math.random() - .5) * .2, e, n + (Math.random() - .5) * .2, (Math.random() - .5) * .2, .6 + Math.random() * .4, (Math.random() - .5) * .2, s, s, s, 1 + Math.random(), -.2)
    }
    flame(t, e, n) {
        this.spawn(t, e, n, (Math.random() - .5) * .1, .25 + Math.random() * .2, (Math.random() - .5) * .1, 1, .75 + Math.random() * .2, .3, .35, -.3)
    }
    update(t, e) {
        let n = 0;
        for (; n < this.count; ) {
            if (this.life[n] -= t,
            this.life[n] <= 0) {
                const a = --this.count;
                if (n !== a) {
                    for (let l = 0; l < 3; l++)
                        this.pos[n * 3 + l] = this.pos[a * 3 + l],
                        this.vel[n * 3 + l] = this.vel[a * 3 + l],
                        this.col[n * 3 + l] = this.col[a * 3 + l];
                    this.life[n] = this.life[a],
                    this.grav[n] = this.grav[a]
                }
                continue
            }
            this.vel[n * 3 + 1] -= this.grav[n] * t;
            const s = this.pos[n * 3] + this.vel[n * 3] * t
              , r = this.pos[n * 3 + 1] + this.vel[n * 3 + 1] * t
              , o = this.pos[n * 3 + 2] + this.vel[n * 3 + 2] * t;
            e && this.grav[n] > 0 && Ae[e.getBlock(Math.floor(s), Math.floor(r), Math.floor(o))] ? (this.vel[n * 3] *= .3,
            this.vel[n * 3 + 1] = 0,
            this.vel[n * 3 + 2] *= .3) : (this.pos[n * 3] = s,
            this.pos[n * 3 + 1] = r,
            this.pos[n * 3 + 2] = o),
            n++
        }
        this.geo.setDrawRange(0, this.count),
        this.geo.attributes.position.needsUpdate = !0,
        this.geo.attributes.color.needsUpdate = !0
    }
    clear() {
        this.count = 0,
        this.geo.setDrawRange(0, 0)
    }
}
const oe = i => {
    const t = parseInt(i.slice(1), 16);
    return [t >> 16 & 255, t >> 8 & 255, t & 255]
}
;
function Ze(i, t, e, n, s, r, o, a=.12) {
    for (let l = 0; l < s; l++)
        for (let c = 0; c < n; c++) {
            const h = 1 + (o() - .5) * a;
            i.fillStyle = `rgb(${Math.min(255, r[0] * h) | 0},${Math.min(255, r[1] * h) | 0},${Math.min(255, r[2] * h) | 0})`,
            i.fillRect(t + c, e + l, 1, 1)
        }
}
function Le(i) {
    const [t,e,n] = i.size.map(o => Math.ceil(o))
      , [s,r] = i.uv;
    return {
        top: [s + n, r, t, n],
        bottom: [s + n + t, r, t, n],
        right: [s, r + n, n, e],
        front: [s + n, r + n, t, e],
        left: [s + n + t, r + n, n, e],
        back: [s + 2 * n + t, r + n, t, e]
    }
}
function je(i, t, e, n, s=.12) {
    const r = Le(t);
    for (const o of Object.keys(r)) {
        const [a,l,c,h] = r[o];
        Ze(i, a, l, c, h, e, n, s)
    }
}
const Te = (i, t) => i.parts.find(e => e.name === t)
  , Lt = (i, t, e, n, s=1, r=1) => {
    i.fillStyle = n,
    i.fillRect(t, e, s, r)
}
  , Co = (i=4, t=4) => [{
    name: "head",
    size: [8, 8, 8],
    uv: [0, 0],
    pivot: [0, 24, 0],
    off: [-4, 0, -4]
}, {
    name: "body",
    size: [8, 12, 4],
    uv: [16, 16],
    pivot: [0, 12, 0],
    off: [-4, 0, -2]
}, {
    name: "armR",
    size: [i, 12, i],
    uv: [40, 16],
    pivot: [-4 - i / 2, 22, 0],
    off: [-i / 2, -10, -i / 2]
}, {
    name: "armL",
    size: [i, 12, i],
    uv: [40, 16],
    pivot: [4 + i / 2, 22, 0],
    off: [-i / 2, -10, -i / 2]
}, {
    name: "legR",
    size: [t, 12, t],
    uv: [0, 16],
    pivot: [-2, 12, 0],
    off: [-t / 2, -12, -t / 2]
}, {
    name: "legL",
    size: [t, 12, t],
    uv: [0, 16],
    pivot: [2, 12, 0],
    off: [-t / 2, -12, -t / 2]
}];
function tc(i, t, e, n, s, r=!0) {
    return (o, a, l) => {
        const c = Te(l, "head");
        je(o, c, i, a, .08);
        const h = Le(c);
        Ze(o, ...h.top, n, a, .15);
        for (const g of ["right", "left", "back"]) {
            const [_,m,d] = h[g];
            Ze(o, _, m, d, g === "back" ? 6 : 3, n, a, .15)
        }
        {
            const [g,_,m] = h.front;
            Ze(o, g, _, m, 2, n, a, .15)
        }
        s(o, h.front[0], h.front[1]),
        je(o, Te(l, "body"), t, a, .1);
        const u = Te(l, "armR");
        if (je(o, u, i, a, .08),
        r) {
            const g = Le(u);
            for (const _ of ["front", "back", "left", "right"]) {
                const [m,d,x] = g[_];
                Ze(o, m, d, x, 4, t, a, .1)
            }
            Ze(o, ...g.top, t, a, .1)
        }
        const f = Te(l, "legR");
        je(o, f, e, a, .1);
        const p = Le(f);
        for (const g of ["front", "back", "left", "right"]) {
            const [_,m,d,x] = p[g];
            Ze(o, _, m + x - 2, d, 2, oe("#3a3a3a"), a, .1)
        }
    }
}
const ph = {
    player: {
        tex: [64, 64],
        parts: Co(),
        paint: tc(oe("#c69c7c"), oe("#7a3fa0"), oe("#2c3a6e"), oe("#3b2414"), (i, t, e) => {
            Lt(i, t + 1, e + 4, "#ffffff", 2, 1),
            Lt(i, t + 5, e + 4, "#ffffff", 2, 1),
            Lt(i, t + 2, e + 4, "#3a5ab0"),
            Lt(i, t + 5, e + 4, "#3a5ab0"),
            Lt(i, t + 3, e + 5, "#a0705a", 2, 1),
            Lt(i, t + 2, e + 6, "#6a3a2a", 4, 1)
        }
        )
    },
    zombie: {
        tex: [64, 64],
        parts: Co(),
        paint: tc(oe("#4f8a3c"), oe("#2a8aa0"), oe("#3a3a8a"), oe("#3d6a2e"), (i, t, e) => {
            Lt(i, t + 1, e + 3, "#1a2a12", 2, 2),
            Lt(i, t + 5, e + 3, "#1a2a12", 2, 2),
            Lt(i, t + 3, e + 5, "#2e5a24", 2, 1),
            Lt(i, t + 2, e + 6, "#203a18", 4, 1)
        }
        )
    },
    skeleton: {
        tex: [64, 64],
        parts: Co(2, 2),
        paint: (i, t, e) => {
            const n = oe("#cfcfcf");
            for (const o of e.parts)
                je(i, o, n, t, .14);
            const s = Le(Te(e, "head")).front;
            Lt(i, s[0] + 1, s[1] + 3, "#202020", 2, 2),
            Lt(i, s[0] + 5, s[1] + 3, "#202020", 2, 2),
            Lt(i, s[0] + 3, s[1] + 5, "#505050", 2, 1),
            Lt(i, s[0] + 1, s[1] + 6, "#404040", 6, 1),
            Lt(i, s[0] + 2, s[1] + 6, "#bfbfbf"),
            Lt(i, s[0] + 4, s[1] + 6, "#bfbfbf"),
            Lt(i, s[0] + 6, s[1] + 6, "#bfbfbf");
            const r = Le(Te(e, "body"));
            for (const o of ["front", "back"]) {
                const [a,l,c,h] = r[o];
                for (let u = 1; u < h - 2; u += 2)
                    Lt(i, a + 1, l + u, "#5a5a5a", c - 2, 1);
                Lt(i, a + 3, l, "#9a9a9a", 2, h)
            }
        }
    },
    creeper: {
        tex: [64, 64],
        parts: [{
            name: "head",
            size: [8, 8, 8],
            uv: [0, 0],
            pivot: [0, 18, 0],
            off: [-4, 0, -4]
        }, {
            name: "body",
            size: [8, 12, 4],
            uv: [16, 16],
            pivot: [0, 6, 0],
            off: [-4, 0, -2]
        }, {
            name: "legFR",
            size: [4, 6, 4],
            uv: [0, 16],
            pivot: [-2, 6, 4],
            off: [-2, -6, -2]
        }, {
            name: "legFL",
            size: [4, 6, 4],
            uv: [0, 16],
            pivot: [2, 6, 4],
            off: [-2, -6, -2]
        }, {
            name: "legBR",
            size: [4, 6, 4],
            uv: [0, 16],
            pivot: [-2, 6, -4],
            off: [-2, -6, -2]
        }, {
            name: "legBL",
            size: [4, 6, 4],
            uv: [0, 16],
            pivot: [2, 6, -4],
            off: [-2, -6, -2]
        }],
        paint: (i, t, e) => {
            for (const r of e.parts) {
                const o = Le(r);
                for (const a of Object.keys(o)) {
                    const [l,c,h,u] = o[a];
                    for (let f = 0; f < u; f++)
                        for (let p = 0; p < h; p++) {
                            const g = t();
                            Lt(i, l + p, c + f, g < .15 ? "#a8d8a0" : g < .45 ? "#3f9a3a" : g < .6 ? "#2a6a28" : "#5ab84e")
                        }
                }
            }
            const [n,s] = Le(Te(e, "head")).front;
            Lt(i, n + 1, s + 2, "#101010", 2, 2),
            Lt(i, n + 5, s + 2, "#101010", 2, 2),
            Lt(i, n + 3, s + 4, "#101010", 2, 3),
            Lt(i, n + 2, s + 5, "#101010", 1, 3),
            Lt(i, n + 5, s + 5, "#101010", 1, 3)
        }
    },
    cow: {
        tex: [64, 64],
        parts: [{
            name: "body",
            size: [12, 10, 18],
            uv: [0, 0],
            pivot: [0, 17, 0],
            off: [-6, -5, -9]
        }, {
            name: "head",
            size: [8, 8, 6],
            uv: [0, 28],
            pivot: [0, 20, 9],
            off: [-4, -4, 0]
        }, {
            name: "hornR",
            size: [1, 3, 1],
            uv: [60, 0],
            pivot: [0, 0, 0],
            off: [-5, 2, 2],
            parent: "head"
        }, {
            name: "hornL",
            size: [1, 3, 1],
            uv: [60, 0],
            pivot: [0, 0, 0],
            off: [4, 2, 2],
            parent: "head"
        }, {
            name: "legFR",
            size: [4, 12, 4],
            uv: [28, 28],
            pivot: [-4, 12, 6],
            off: [-2, -12, -2]
        }, {
            name: "legFL",
            size: [4, 12, 4],
            uv: [28, 28],
            pivot: [4, 12, 6],
            off: [-2, -12, -2]
        }, {
            name: "legBR",
            size: [4, 12, 4],
            uv: [28, 28],
            pivot: [-4, 12, -6],
            off: [-2, -12, -2]
        }, {
            name: "legBL",
            size: [4, 12, 4],
            uv: [28, 28],
            pivot: [4, 12, -6],
            off: [-2, -12, -2]
        }],
        paint: (i, t, e) => {
            const n = oe("#4a3020");
            for (const h of e.parts)
                je(i, h, h.name.startsWith("horn") ? oe("#d8d0c0") : n, t, .12);
            const s = Le(Te(e, "body"));
            for (const h of Object.keys(s)) {
                const [u,f,p,g] = s[h];
                for (let _ = 0; _ < 3; _++) {
                    const m = u + Math.floor(t() * p)
                      , d = f + Math.floor(t() * g)
                      , x = 2 + Math.floor(t() * 4)
                      , v = 2 + Math.floor(t() * 3);
                    Ze(i, Math.max(u, Math.min(m, u + p - x)), Math.max(f, Math.min(d, f + g - v)), x, v, oe("#e8e8e8"), t, .06)
                }
            }
            const [r,o,a,l] = Le(Te(e, "head")).front;
            Ze(i, r + 2, o + l - 3, 4, 3, oe("#d8a0a0"), t, .06),
            Lt(i, r + 3, o + l - 2, "#5a3030"),
            Lt(i, r + 4, o + l - 2, "#5a3030"),
            Lt(i, r + 1, o + 3, "#101010"),
            Lt(i, r + 6, o + 3, "#101010"),
            Lt(i, r, o + 3, "#ffffff"),
            Lt(i, r + 7, o + 3, "#ffffff"),
            Ze(i, r + 2, o, 4, 2, oe("#e8e8e8"), t, .05);
            const c = Le(Te(e, "legFR"));
            for (const h of ["front", "back", "left", "right"]) {
                const [u,f,p,g] = c[h];
                Ze(i, u, f + g - 2, p, 2, oe("#7a6a5a"), t, .06)
            }
        }
    },
    pig: {
        tex: [64, 64],
        parts: [{
            name: "body",
            size: [10, 8, 16],
            uv: [0, 0],
            pivot: [0, 10, 0],
            off: [-5, -4, -8]
        }, {
            name: "head",
            size: [8, 8, 8],
            uv: [0, 24],
            pivot: [0, 12, 7],
            off: [-4, -4, 0]
        }, {
            name: "snout",
            size: [4, 3, 1],
            uv: [32, 24],
            pivot: [0, 0, 0],
            off: [-2, -3, 8],
            parent: "head"
        }, {
            name: "legFR",
            size: [4, 6, 4],
            uv: [44, 24],
            pivot: [-3, 6, 5],
            off: [-2, -6, -2]
        }, {
            name: "legFL",
            size: [4, 6, 4],
            uv: [44, 24],
            pivot: [3, 6, 5],
            off: [-2, -6, -2]
        }, {
            name: "legBR",
            size: [4, 6, 4],
            uv: [44, 24],
            pivot: [-3, 6, -5],
            off: [-2, -6, -2]
        }, {
            name: "legBL",
            size: [4, 6, 4],
            uv: [44, 24],
            pivot: [3, 6, -5],
            off: [-2, -6, -2]
        }],
        paint: (i, t, e) => {
            for (const l of e.parts)
                je(i, l, oe("#f0a0a0"), t, .08);
            const [n,s] = Le(Te(e, "head")).front;
            Lt(i, n + 1, s + 2, "#ffffff"),
            Lt(i, n + 2, s + 2, "#101010"),
            Lt(i, n + 5, s + 2, "#101010"),
            Lt(i, n + 6, s + 2, "#ffffff");
            const [r,o] = Le(Te(e, "snout")).front;
            Ze(i, r, o, 4, 3, oe("#e88a90"), t, .05),
            Lt(i, r + 1, o + 1, "#8a4a4a"),
            Lt(i, r + 2, o + 1, "#8a4a4a");
            const a = Le(Te(e, "legFR"));
            for (const l of ["front", "back", "left", "right"]) {
                const [c,h,u,f] = a[l];
                Ze(i, c, h + f - 1, u, 1, oe("#8a5a50"), t, .06)
            }
        }
    },
    sheep: {
        tex: [64, 64],
        parts: [{
            name: "body",
            size: [12, 10, 16],
            uv: [0, 0],
            pivot: [0, 15, 0],
            off: [-6, -5, -8]
        }, {
            name: "head",
            size: [6, 6, 8],
            uv: [0, 26],
            pivot: [0, 18, 7],
            off: [-3, -3, 0]
        }, {
            name: "legFR",
            size: [4, 12, 4],
            uv: [28, 26],
            pivot: [-3, 12, 5],
            off: [-2, -12, -2]
        }, {
            name: "legFL",
            size: [4, 12, 4],
            uv: [28, 26],
            pivot: [3, 12, 5],
            off: [-2, -12, -2]
        }, {
            name: "legBR",
            size: [4, 12, 4],
            uv: [28, 26],
            pivot: [-3, 12, -5],
            off: [-2, -12, -2]
        }, {
            name: "legBL",
            size: [4, 12, 4],
            uv: [28, 26],
            pivot: [3, 12, -5],
            off: [-2, -12, -2]
        }],
        paint: (i, t, e) => {
            je(i, Te(e, "body"), oe("#ececec"), t, .1);
            const n = Te(e, "head");
            je(i, n, oe("#ececec"), t, .1);
            const [s,r,o,a] = Le(n).front;
            Ze(i, s + 1, r + 1, o - 2, a - 1, oe("#d8b8a0"), t, .06),
            Lt(i, s + 1, r + 2, "#ffffff"),
            Lt(i, s + 2, r + 2, "#101010"),
            Lt(i, s + 3, r + 2, "#101010"),
            Lt(i, s + 4, r + 2, "#ffffff"),
            Lt(i, s + 2, r + 4, "#e09090", 2, 1);
            const l = Te(e, "legFR");
            je(i, l, oe("#d8b8a0"), t, .06);
            const c = Le(l);
            for (const h of ["front", "back", "left", "right"]) {
                const [u,f,p] = c[h];
                Ze(i, u, f, p, 5, oe("#ececec"), t, .1)
            }
        }
    },
    chicken: {
        tex: [64, 32],
        parts: [{
            name: "body",
            size: [6, 6, 8],
            uv: [0, 0],
            pivot: [0, 8, 0],
            off: [-3, -3, -4]
        }, {
            name: "head",
            size: [4, 6, 3],
            uv: [0, 14],
            pivot: [0, 9, 3],
            off: [-2, 0, 0]
        }, {
            name: "beak",
            size: [4, 2, 2],
            uv: [14, 14],
            pivot: [0, 0, 0],
            off: [-2, 3, 3],
            parent: "head"
        }, {
            name: "wattle",
            size: [2, 2, 1],
            uv: [26, 14],
            pivot: [0, 0, 0],
            off: [-1, 1, 3],
            parent: "head"
        }, {
            name: "wingR",
            size: [1, 4, 6],
            uv: [32, 0],
            pivot: [-3.5, 10, 0],
            off: [-.5, -4, -3]
        }, {
            name: "wingL",
            size: [1, 4, 6],
            uv: [32, 0],
            pivot: [3.5, 10, 0],
            off: [-.5, -4, -3]
        }, {
            name: "legR",
            size: [2, 5, 1],
            uv: [48, 0],
            pivot: [-1.5, 5, 0],
            off: [-1, -5, -.5]
        }, {
            name: "legL",
            size: [2, 5, 1],
            uv: [48, 0],
            pivot: [1.5, 5, 0],
            off: [-1, -5, -.5]
        }],
        paint: (i, t, e) => {
            for (const r of e.parts)
                je(i, r, oe("#f4f4f4"), t, .06);
            je(i, Te(e, "beak"), oe("#f0a020"), t, .06),
            je(i, Te(e, "wattle"), oe("#d82020"), t, .06),
            je(i, Te(e, "legR"), oe("#e8a020"), t, .06);
            const [n,s] = Le(Te(e, "head")).front;
            Lt(i, n, s + 1, "#101010"),
            Lt(i, n + 3, s + 1, "#101010")
        }
    },
    spider: {
        tex: [64, 64],
        parts: [{
            name: "head",
            size: [8, 8, 8],
            uv: [32, 4],
            pivot: [0, 9, 3],
            off: [-4, -4, 0]
        }, {
            name: "thorax",
            size: [6, 6, 6],
            uv: [0, 0],
            pivot: [0, 9, 0],
            off: [-3, -3, -3]
        }, {
            name: "abdomen",
            size: [10, 8, 12],
            uv: [0, 24],
            pivot: [0, 9, -3],
            off: [-5, -4, -12]
        }, ...[0, 1, 2, 3].flatMap(i => [{
            name: "legR" + i,
            size: [16, 2, 2],
            uv: [24, 0],
            pivot: [-3, 9, 2 - i * 1.4],
            off: [-16, -1, -1]
        }, {
            name: "legL" + i,
            size: [16, 2, 2],
            uv: [24, 0],
            pivot: [3, 9, 2 - i * 1.4],
            off: [0, -1, -1]
        }])],
        paint: (i, t, e) => {
            for (const r of e.parts)
                je(i, r, oe("#3a322c"), t, .25);
            const [n,s] = Le(Te(e, "head")).front;
            Lt(i, n + 1, s + 3, "#d01010", 2, 1),
            Lt(i, n + 5, s + 3, "#d01010", 2, 1),
            Lt(i, n + 2, s + 2, "#ff3030"),
            Lt(i, n + 5, s + 2, "#ff3030"),
            Lt(i, n + 3, s + 4, "#ff3030", 2, 1)
        }
    }
}
  , ec = new Map;
function mh(i) {
    let t = ec.get(i);
    if (t)
        return t;
    const e = ph[i]
      , n = document.createElement("canvas");
    n.width = e.tex[0],
    n.height = e.tex[1];
    const s = n.getContext("2d");
    return e.paint(s, Ri(Gs(i)), e),
    t = new as(n),
    t.magFilter = he,
    t.minFilter = he,
    t.generateMipmaps = !1,
    t.colorSpace = Me,
    ec.set(i, t),
    t
}
function cg(i, t, e) {
    const [n,s,r] = i.size
      , o = new Rn(n / 16,s / 16,r / 16)
      , a = Le(i)
      , l = ["left", "right", "top", "bottom", "front", "back"]
      , c = o.attributes.uv;
    for (let h = 0; h < 6; h++) {
        const [u,f,p,g] = a[l[h]];
        for (let _ = 0; _ < 4; _++) {
            const m = _ % 2
              , d = _ < 2 ? 1 : 0;
            c.setXY(h * 4 + _, (u + m * p) / t, 1 - (f + (1 - d) * g) / e)
        }
    }
    return o
}
function Xo(i, t) {
    const e = ph[i]
      , n = new ks({
        map: mh(i),
        alphaTest: .5
    })
      , s = new wn
      , r = {};
    for (const o of e.parts) {
        if (t && !t.includes(o.name))
            continue;
        const a = new wn;
        a.position.set(o.pivot[0] / 16, o.pivot[1] / 16, o.pivot[2] / 16);
        const l = new Pe(cg(o, e.tex[0], e.tex[1]),n);
        l.position.set((o.off[0] + o.size[0] / 2) / 16, (o.off[1] + o.size[1] / 2) / 16, (o.off[2] + o.size[2] / 2) / 16),
        a.add(l),
        r[o.name] = a,
        o.parent && r[o.parent] ? r[o.parent].add(a) : s.add(a)
    }
    return {
        root: s,
        parts: r,
        material: n
    }
}
const tt = 16
  , Wt = 128
  , cn = 62
  , hg = ["Planícies", "Floresta", "Deserto", "Montanhas", "Taiga Nevada", "Floresta de Bétulas", "Praia", "Rio", "Lago"]
  , ug = [[.94, .98, .84], [.8, .96, .76], [1.12, 1.02, .66], [.78, .92, .84], [.72, .9, .86], [.95, 1.05, .8], [1, 1, .9], [.9, 1, .85], [.9, 1, .85]]
  , xe = (i, t, e) => i + e * tt + t * tt * tt;
class nc {
    constructor(t, e) {
        this.seed = t,
        this.type = e;
        const n = s => t * 31 + s * 977 >>> 0;
        this.nCont = new mn(n(1)),
        this.nDet = new mn(n(2)),
        this.nMnt = new mn(n(3)),
        this.nRidge = new mn(n(4)),
        this.nTemp = new mn(n(5)),
        this.nHum = new mn(n(6)),
        this.nRiver = new mn(n(7)),
        this.nCaveA = new mn(n(8)),
        this.nCaveB = new mn(n(9)),
        this.nCheese = new mn(n(10)),
        this.nEntrance = new mn(n(11)),
        this.nPatch = new mn(n(12))
    }
    column(t, e) {
        if (this.type === "flat")
            return {
                h: 4,
                biome: 0,
                river: 1,
                temp: 0,
                humid: 0
            };
        const n = this.nCont.fbm2(t / 700, e / 700, 4)
          , s = this.nDet.fbm2(t / 90, e / 90, 4)
          , r = this.nMnt.fbm2(t / 380, e / 380, 3)
          , o = es(.12, .5, r)
          , a = 1 - Math.abs(this.nRidge.fbm2(t / 170, e / 170, 4))
          , l = a * a
          , c = this.nTemp.fbm2(t / 520, e / 520, 2) + s * .05
          , h = this.nHum.fbm2(t / 480, e / 480, 2) + s * .05;
        let u = 65 + n * 11 + s * 5 + o * (l * 48 + 10);
        const f = es(.18, .32, c) * es(.1, -.05, h) * (1 - o);
        f > 0 && (u = Hn(u, 65 + n * 4 + s * 3 + Math.abs(this.nPatch.noise2(t / 40, e / 40)) * 4, f));
        const p = Math.abs(this.nRiver.fbm2(t / 420, e / 420, 3))
          , g = es(.055, .015, p) * (1 - es(.35, .7, o));
        g > 0 && (u = Hn(u, 56.5, g));
        const _ = Math.floor(u);
        let m;
        return g > .5 && _ < cn ? m = 7 : _ < cn - 3 ? m = 8 : o > .55 && _ > 82 ? m = 3 : f > .5 ? m = 2 : c < -.28 ? m = 4 : _ <= cn + 1 ? m = 6 : h > .12 ? m = c > .05 ? 1 : 5 : m = 0,
        {
            h: Math.min(_, Wt - 12),
            biome: m,
            river: g,
            temp: c,
            humid: h
        }
    }
    caveSample(t, e, n) {
        const s = this.nCaveA.noise3(t / 42, e / 26, n / 42)
          , r = this.nCaveB.noise3(t / 42, e / 26, n / 42);
        let a = (s * s + r * r) / .014;
        if (e < 48) {
            const c = (.66 - this.nCheese.noise3(t / 70, e / 30, n / 70)) / .1;
            a = Math.min(a, c + (48 - e < 6 ? (6 - (48 - e)) * .4 : 0))
        }
        return a
    }
    generate(t, e, n, s) {
        const r = t * tt
          , o = e * tt;
        if (this.type === "flat")
            return this.generateFlat(n);
        const a = 3
          , l = tt + a * 2
          , c = new Array(l * l);
        for (let _ = 0; _ < l; _++)
            for (let m = 0; m < l; m++)
                c[m + _ * l] = this.column(r + m - a, o + _ - a);
        const h = (_, m) => c[_ + a + (m + a) * l]
          , u = 5
          , f = Wt / 4 + 1
          , p = new Float32Array(u * u * f);
        for (let _ = 0; _ < f; _++)
            for (let m = 0; m < u; m++)
                for (let d = 0; d < u; d++)
                    p[d + m * u + _ * u * u] = this.caveSample(r + d * 4, _ * 4, o + m * 4);
        const g = (_, m, d) => {
            const x = _ / 4
              , v = m / 4
              , S = d / 4
              , L = Math.min(3, Math.floor(x))
              , A = Math.min(f - 2, Math.floor(v))
              , R = Math.min(3, Math.floor(S))
              , K = x - L
              , y = v - A
              , T = S - R
              , U = (N, B, z) => p[N + z * u + B * u * u]
              , k = Hn(U(L, A, R), U(L + 1, A, R), K)
              , G = Hn(U(L, A + 1, R), U(L + 1, A + 1, R), K)
              , P = Hn(U(L, A, R + 1), U(L + 1, A, R + 1), K)
              , O = Hn(U(L, A + 1, R + 1), U(L + 1, A + 1, R + 1), K);
            return Hn(Hn(k, G, y), Hn(P, O, y), T)
        }
        ;
        for (let _ = 0; _ < tt; _++)
            for (let m = 0; m < tt; m++) {
                const d = r + m
                  , x = o + _
                  , v = h(m, _)
                  , S = v.h
                  , L = this.nEntrance.noise2(d / 60, x / 60) > .55 && S > cn + 2
                  , A = gn(this.seed, d, x);
                let R, K, y, T = M.STONE;
                switch (v.biome) {
                case 2:
                    R = M.SAND,
                    K = M.SAND,
                    y = 4,
                    T = M.SANDSTONE;
                    break;
                case 6:
                    R = M.SAND,
                    K = M.SAND,
                    y = 3;
                    break;
                case 7:
                case 8:
                    R = S < cn - 4 ? A < .3 ? M.CLAY : M.GRAVEL : M.SAND,
                    K = R === M.CLAY ? M.CLAY : M.SAND,
                    y = 3;
                    break;
                case 4:
                    R = M.SNOWY_GRASS,
                    K = M.DIRT,
                    y = 3;
                    break;
                case 3:
                    {
                        const U = S > 88 + this.nPatch.noise2(d / 12, x / 12) * 6;
                        R = S > 104 + A * 3 ? M.SNOW : U ? M.STONE : M.GRASS,
                        K = U ? M.STONE : M.DIRT,
                        y = U ? 1 : 3;
                        break
                    }
                default:
                    R = M.GRASS,
                    K = M.DIRT,
                    y = 3 + (A < .5 ? 1 : 0)
                }
                S < cn && R === M.GRASS && (R = M.DIRT);
                for (let U = 0; U < Wt; U++) {
                    let k = M.AIR;
                    if (U === 0 || U < 4 && jl(this.seed, d, U, x) < .7 - U * .18 ? k = M.BEDROCK : U < S ? k = U >= S - y ? K : T === M.SANDSTONE && U < S - y - 3 ? M.STONE : T : U === S ? k = R : U <= cn && (k = M.WATER),
                    k !== M.AIR && k !== M.WATER && k !== M.BEDROCK && U > 4) {
                        const G = L ? S + 1 : S - 5;
                        U <= G && !(S < cn + 2 && U > S - 8) && g(m, U, _) < 1 && (k = (U < 11,
                        M.AIR))
                    }
                    k !== M.AIR && (n[xe(m, U, _)] = k)
                }
            }
        this.ores(t, e, n),
        this.decorate(t, e, n, s, h)
    }
    generateFlat(t) {
        for (let e = 0; e < tt; e++)
            for (let n = 0; n < tt; n++)
                t[xe(n, 0, e)] = M.BEDROCK,
                t[xe(n, 1, e)] = M.DIRT,
                t[xe(n, 2, e)] = M.DIRT,
                t[xe(n, 3, e)] = M.DIRT,
                t[xe(n, 4, e)] = M.GRASS
    }
    ores(t, e, n) {
        const s = Ri(gn(this.seed, t, e) * 4294967296 >>> 0)
          , r = (o, a, l, c, h) => {
            for (let u = 0; u < a; u++) {
                let f = Math.floor(s() * tt)
                  , p = l + Math.floor(s() * (c - l))
                  , g = Math.floor(s() * tt);
                for (let _ = 0; _ < h; _++) {
                    if (f >= 0 && f < tt && g >= 0 && g < tt && p > 0 && p < Wt) {
                        const d = xe(f, p, g);
                        n[d] === M.STONE && (n[d] = o)
                    }
                    const m = Math.floor(s() * 6);
                    m === 0 ? f++ : m === 1 ? f-- : m === 2 ? p++ : m === 3 ? p-- : m === 4 ? g++ : g--
                }
            }
        }
        ;
        r(M.COAL_ORE, 18, 5, 115, 12),
        r(M.IRON_ORE, 12, 5, 66, 8),
        r(M.COPPER_ORE, 6, 20, 90, 9),
        r(M.GOLD_ORE, 3, 5, 34, 7),
        r(M.REDSTONE_ORE, 5, 4, 18, 7),
        r(M.DIAMOND_ORE, s() < .7 ? 1 : 2, 4, 16, 5),
        r(M.GRAVEL, 4, 5, 90, 14),
        r(M.DIRT, 4, 5, 100, 14)
    }
    decorate(t, e, n, s, r) {
        const o = t * tt
          , a = e * tt
          , l = (h, u, f, p, g) => {
            if (h < 0 || f < 0 || h >= tt || f >= tt || u < 0 || u >= Wt)
                return;
            const _ = xe(h, u, f)
              , m = n[_];
            g && m !== M.AIR && m !== M.TALL_GRASS || !g && m !== M.AIR && m !== M.TALL_GRASS && m !== M.OAK_LEAVES && m !== M.BIRCH_LEAVES && m !== M.SPRUCE_LEAVES && m !== M.DANDELION && m !== M.POPPY || (n[_] = p)
        }
          , c = (h, u, f) => {
            const p = o + h
              , g = a + u;
            return f.h > cn && !(this.nEntrance.noise2(p / 60, g / 60) > .55 && this.caveSample(p, f.h, g) < 1 && this.caveSample(p, f.h - 1, g) < 1)
        }
        ;
        for (let h = -3; h < tt + 3; h++)
            for (let u = -3; u < tt + 3; u++) {
                const f = o + u
                  , p = a + h
                  , g = r(u, h)
                  , _ = gn(this.seed + 17, f, p);
                let m = 0;
                switch (g.biome) {
                case 0:
                    m = .004;
                    break;
                case 1:
                    m = .06;
                    break;
                case 5:
                    m = .05;
                    break;
                case 4:
                    m = .035;
                    break;
                case 3:
                    m = g.h < 92 ? .012 : 0;
                    break
                }
                if (_ >= m || g.h >= Wt - 14 || g.biome === 3 && g.h > 88 || !c(u, h, g))
                    continue;
                const d = gn(this.seed + 23, f, p)
                  , x = g.h + 1;
                if (g.biome === 4 || g.biome === 3 && d < .7 ? this.spruce(l, u, x, h, d) : g.biome === 5 || g.biome === 1 && d < .25 ? this.oak(l, u, x, h, d, M.BIRCH_LOG, M.BIRCH_LEAVES) : this.oak(l, u, x, h, d, M.OAK_LOG, M.OAK_LEAVES),
                u >= 0 && h >= 0 && u < tt && h < tt) {
                    const v = xe(u, g.h, h);
                    (n[v] === M.GRASS || n[v] === M.SNOWY_GRASS) && (n[v] = M.DIRT)
                }
            }
        for (let h = 0; h < tt; h++)
            for (let u = 0; u < tt; u++) {
                const f = o + u
                  , p = a + h
                  , g = r(u, h)
                  , _ = g.h + 1;
                if (_ >= Wt - 4)
                    continue;
                const m = n[xe(u, g.h, h)];
                if (n[xe(u, _, h)] !== M.AIR)
                    continue;
                const d = gn(this.seed + 41, f, p);
                if (m === M.GRASS) {
                    const x = this.nPatch.noise2(f / 30, p / 30) > .35;
                    let v = 0
                      , S = 0;
                    g.biome === 0 ? (v = .22,
                    S = x ? .12 : .01) : g.biome === 1 || g.biome === 5 ? (v = .12,
                    S = x ? .06 : .008) : g.biome === 3 ? v = .08 : v = .05,
                    d < S ? n[xe(u, _, h)] = gn(this.seed + 5, f, p) < .5 ? M.DANDELION : M.POPPY : d < S + v ? n[xe(u, _, h)] = M.TALL_GRASS : (g.biome === 1 || g.biome === 4) && d > .993 && (n[xe(u, _, h)] = d > .9965 ? M.RED_MUSHROOM : M.BROWN_MUSHROOM)
                } else if (m === M.SAND && g.biome === 2)
                    if (d < .006 && u > 0 && h > 0 && u < tt - 1 && h < tt - 1) {
                        const x = 1 + Math.floor(gn(this.seed + 9, f, p) * 3);
                        for (let v = 0; v < x; v++)
                            n[xe(u, _ + v, h)] = M.CACTUS
                    } else
                        d < .014 && (n[xe(u, _, h)] = M.DEAD_BUSH);
                else
                    m === M.SNOWY_GRASS && d < .05 && (n[xe(u, _, h)] = M.TALL_GRASS)
            }
    }
    oak(t, e, n, s, r, o, a) {
        const l = 4 + Math.floor(r * 3)
          , c = n + l;
        for (let h = -2; h <= 1; h++) {
            const u = h <= -1 ? 2 : 1;
            for (let f = -u; f <= u; f++)
                for (let p = -u; p <= u; p++)
                    Math.abs(f) === u && Math.abs(p) === u && (h === 1 || jl(this.seed, e + f, c + h, s + p) < .5) || t(e + f, c + h, s + p, a, !0)
        }
        for (let h = 0; h < l; h++)
            t(e, n + h, s, o, !1)
    }
    spruce(t, e, n, s, r) {
        const o = 6 + Math.floor(r * 4)
          , a = n + o;
        t(e, a, s, M.SPRUCE_LEAVES, !0),
        t(e, a + 1, s, M.SPRUCE_LEAVES, !0);
        for (let l = a - 1, c = 0; l >= n + 2; l--,
        c++) {
            const h = Math.max(1, Math.min(2, 1 + Math.floor(c / 2)) - (c % 2 === 0 && c > 0 ? 1 : 0));
            for (let u = -h; u <= h; u++)
                for (let f = -h; f <= h; f++)
                    Math.abs(u) + Math.abs(f) > h + (h > 1 ? 1 : 0) || t(e + u, l, s + f, M.SPRUCE_LEAVES, !0)
        }
        for (let l = 0; l < o; l++)
            t(e, n + l, s, M.SPRUCE_LOG, !1)
    }
    findSpawn() {
        if (this.type === "flat")
            return {
                x: .5,
                z: .5
            };
        for (let t = 0; t < 2e3; t += 8) {
            const e = Math.max(1, Math.floor(t * 6.28 / 16));
            for (let n = 0; n < e; n++) {
                const s = n / e * Math.PI * 2
                  , r = Math.round(Math.cos(s) * t)
                  , o = Math.round(Math.sin(s) * t)
                  , a = this.column(r, o);
                if ((a.biome === 0 || a.biome === 1 || a.biome === 5) && a.h > cn + 1 && a.h < 90) {
                    let l = a.biome !== 0;
                    for (let c = 0; c < 12 && !l; c++) {
                        const h = this.column(r + Math.cos(c) * 20, o + Math.sin(c) * 20).biome;
                        (h === 1 || h === 5) && (l = !0)
                    }
                    if (l || t > 600)
                        return {
                            x: r + .5,
                            z: o + .5
                        }
                }
            }
        }
        return {
            x: .5,
            z: .5
        }
    }
}
const hn = 8
  , te = tt + hn * 2
  , He = te * te;
class ic {
    constructor() {
        this.pos = [],
        this.uv = [],
        this.light = [],
        this.color = [],
        this.index = [],
        this.vc = 0
    }
    out() {
        return this.vc === 0 ? null : {
            pos: new Float32Array(this.pos),
            uv: new Float32Array(this.uv),
            light: new Float32Array(this.light),
            color: new Float32Array(this.color),
            index: new Uint32Array(this.index)
        }
    }
}
const ws = [{
    n: [1, 0, 0],
    c: [[1, 0, 1], [1, 0, 0], [1, 1, 0], [1, 1, 1]],
    shade: .62,
    kind: "side"
}, {
    n: [-1, 0, 0],
    c: [[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]],
    shade: .62,
    kind: "side"
}, {
    n: [0, 1, 0],
    c: [[0, 1, 1], [1, 1, 1], [1, 1, 0], [0, 1, 0]],
    shade: 1,
    kind: "top"
}, {
    n: [0, -1, 0],
    c: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]],
    shade: .5,
    kind: "bottom"
}, {
    n: [0, 0, 1],
    c: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]],
    shade: .8,
    kind: "side"
}, {
    n: [0, 0, -1],
    c: [[1, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]],
    shade: .8,
    kind: "side"
}]
  , As = [[0, 0], [1, 0], [1, 1], [0, 1]]
  , fg = [4, 1, 5, 0]
  , dg = [.42, .62, .8, 1]
  , Rs = new Int32Array(1 << 19);
function pg(i, t) {
    const e = He * Wt
      , n = new Uint8Array(e)
      , s = new Uint8Array(e);
    for (let h = 0; h < te; h++)
        for (let u = 0; u < te; u++) {
            let f = 15;
            for (let p = Wt - 1; p >= 0; p--) {
                const g = u + h * te + p * He
                  , _ = i[g]
                  , m = Wo[_];
                if (m >= 15 ? f = 0 : m && (f = Math.max(0, f - m)),
                n[g] = f,
                f === 0 && p < t) {
                    for (let d = p - 1; d >= 0; d--)
                        n[u + h * te + d * He] = 0;
                    break
                }
            }
        }
    let r = 0
      , o = 0;
    const a = Rs.length - 1
      , l = Math.min(Wt - 1, t + 1);
    for (let h = 0; h <= l; h++)
        for (let u = 0; u < te; u++)
            for (let f = 0; f < te; f++) {
                const p = f + u * te + h * He
                  , g = n[p];
                g < 2 || (f > 0 && n[p - 1] < g - 1 || f < te - 1 && n[p + 1] < g - 1 || u > 0 && n[p - te] < g - 1 || u < te - 1 && n[p + te] < g - 1 || h > 0 && n[p - He] < g - 1) && (Rs[o++ & a] = p)
            }
    const c = h => {
        for (; r !== o; ) {
            const u = Rs[r++ & a]
              , f = h[u];
            if (f <= 1)
                continue;
            const p = u % te
              , g = (u / te | 0) % te
              , _ = u / He | 0;
            for (let m = 0; m < 6; m++) {
                let d;
                if (m === 0) {
                    if (p === te - 1)
                        continue;
                    d = u + 1
                } else if (m === 1) {
                    if (p === 0)
                        continue;
                    d = u - 1
                } else if (m === 2) {
                    if (g === te - 1)
                        continue;
                    d = u + te
                } else if (m === 3) {
                    if (g === 0)
                        continue;
                    d = u - te
                } else if (m === 4) {
                    if (_ === Wt - 1)
                        continue;
                    d = u + He
                } else {
                    if (_ === 0)
                        continue;
                    d = u - He
                }
                const x = Wo[i[d]];
                if (x >= 15)
                    continue;
                const v = f - 1 - x;
                v > h[d] && (h[d] = v,
                Rs[o++ & a] = d)
            }
        }
    }
    ;
    c(n),
    r = 0,
    o = 0;
    for (let h = 0; h <= l; h++)
        for (let u = 0; u < te; u++)
            for (let f = 0; f < te; f++) {
                const p = f + u * te + h * He
                  , g = Jc[i[p]];
                g > 0 && (s[p] = g,
                Rs[o++ & a] = p)
            }
    return c(s),
    {
        sky: n,
        blk: s
    }
}
function mg(i, t, e) {
    const {blocks: n, meta: s, tint: r, fancy: o, smooth: a} = i;
    let l = 0;
    for (let v = n.length - 1; v >= 0; v--)
        if (n[v] !== 0) {
            l = v / He | 0;
            break
        }
    const {sky: c, blk: h} = pg(n, l)
      , u = new ic
      , f = new ic
      , p = v => {
        let S = e.get(v);
        return S || (S = t.uv(v),
        e.set(v, S)),
        S
    }
      , g = (v, S, L) => v + hn + (L + hn) * te + S * He
      , _ = (v, S, L, A, R, K) => {
        const y = v.vc;
        for (let T = 0; T < 4; T++)
            v.pos.push(S[T][0], S[T][1], S[T][2]),
            v.uv.push(L[T][0], L[T][1]),
            v.light.push(A[T][0], A[T][1]),
            v.color.push(R[T][0], R[T][1], R[T][2]);
        K ? v.index.push(y + 1, y + 2, y + 3, y + 1, y + 3, y) : v.index.push(y, y + 1, y + 2, y, y + 2, y + 3),
        v.vc += 4
    }
      , m = v => [c[v] / 15, h[v] / 15]
      , d = (v, S, L, A, R, K, y, T, U) => {
        for (let k = 0; k < 6; k++) {
            const G = ws[k]
              , P = G.n[0] !== 0 ? 0 : G.n[1] !== 0 ? 1 : 2
              , O = G.n[P] > 0 ? R[P] >= 1 : A[P] <= 0;
            if (U && O) {
                const Q = S + G.n[1];
                if (Q >= 0 && Q < Wt && Dn[n[g(v + G.n[0], Q, L + G.n[2])]])
                    continue
            }
            const N = p(K(k))
              , B = []
              , z = []
              , Y = []
              , $ = [];
            for (let Q = 0; Q < 4; Q++) {
                const et = G.c[Q]
                  , H = et[0] ? R[0] : A[0]
                  , J = et[1] ? R[1] : A[1]
                  , lt = et[2] ? R[2] : A[2];
                B.push([v + H, S + J, L + lt]);
                let mt, _t;
                P === 0 ? (mt = G.n[0] > 0 ? 1 - lt : lt,
                _t = J) : P === 2 ? (mt = G.n[2] > 0 ? H : 1 - H,
                _t = J) : (mt = H,
                _t = G.n[1] > 0 ? 1 - lt : lt),
                z.push([N[0] + (N[2] - N[0]) * mt, N[1] + (N[3] - N[1]) * _t]),
                Y.push(y);
                const wt = G.shade;
                $.push([T[0] * wt, T[1] * wt, T[2] * wt])
            }
            _(u, B, z, Y, $, !1)
        }
    }
      , x = [1, 1, 1];
    for (let v = 0; v <= Math.min(l, Wt - 1); v++)
        for (let S = 0; S < tt; S++)
            for (let L = 0; L < tt; L++) {
                const A = g(L, v, S)
                  , R = n[A];
                if (R === 0)
                    continue;
                const K = Qc[R]
                  , y = li[R]
                  , T = s[A]
                  , U = (L + S * tt) * 3
                  , k = y.tint ? [r[U], r[U + 1], r[U + 2]] : x;
                if (K === 1) {
                    const G = Ls(R);
                    for (let P = 0; P < 6; P++) {
                        const O = ws[P]
                          , N = v + O.n[1];
                        let B = 0;
                        if (N >= 0 && N < Wt)
                            B = n[A + O.n[0] + O.n[2] * te + O.n[1] * He];
                        else if (N < 0)
                            continue;
                        if (Dn[B] || B === R && (R === M.GLASS || G && !o))
                            continue;
                        let z;
                        y.front && P === fg[T & 3] ? z = T & 4 && y.frontLit ? y.frontLit : y.front : z = O.kind === "top" ? y.top : O.kind === "bottom" ? y.bottom : y.side;
                        const Y = p(z)
                          , $ = y.tint && (O.kind === "top" || G) ? k : x
                          , Q = A + O.n[0] + O.n[2] * te + O.n[1] * He
                          , et = []
                          , H = []
                          , J = []
                          , lt = []
                          , mt = []
                          , _t = O.n[0] !== 0 ? 0 : O.n[1] !== 0 ? 1 : 2
                          , wt = N >= 0 && N < Wt ? m(Q) : [1, 0];
                        for (let Ot = 0; Ot < 4; Ot++) {
                            const At = O.c[Ot];
                            et.push([L + At[0], v + At[1], S + At[2]]),
                            H.push([Y[0] + (Y[2] - Y[0]) * As[Ot][0], Y[1] + (Y[3] - Y[1]) * As[Ot][1]]);
                            let Qt = 3
                              , V = wt[0]
                              , Oe = wt[1];
                            if (a && N >= 0 && N < Wt) {
                                const Dt = [0, 0, 0]
                                  , Mt = [0, 0, 0]
                                  , ue = _t === 0 ? 1 : 0
                                  , Gt = _t === 2 ? 1 : 2;
                                Dt[ue] = At[ue] ? 1 : -1,
                                Mt[Gt] = At[Gt] ? 1 : -1;
                                const w = vt => vt[0] + vt[2] * te + vt[1] * He
                                  , b = N + Dt[1]
                                  , W = N + Mt[1]
                                  , rt = N + Dt[1] + Mt[1]
                                  , it = Q + w(Dt)
                                  , ot = Q + w(Mt)
                                  , yt = Q + w(Dt) + w(Mt)
                                  , ft = b >= 0 && b < Wt
                                  , xt = W >= 0 && W < Wt
                                  , Rt = rt >= 0 && rt < Wt
                                  , kt = ft ? Dn[n[it]] : 0
                                  , nt = xt ? Dn[n[ot]] : 0
                                  , ie = Rt ? Dn[n[yt]] : 0;
                                Qt = kt && nt ? 0 : 3 - (kt + nt + ie);
                                let zt = 1
                                  , It = c[Q]
                                  , bt = h[Q];
                                ft && !kt && (It += c[it],
                                bt += h[it],
                                zt++),
                                xt && !nt && (It += c[ot],
                                bt += h[ot],
                                zt++),
                                Rt && !ie && !(kt && nt) && (It += c[yt],
                                bt += h[yt],
                                zt++),
                                V = It / zt / 15,
                                Oe = bt / zt / 15
                            }
                            mt.push(Qt),
                            J.push([V, Oe]);
                            const Tt = O.shade * dg[Qt];
                            lt.push([$[0] * Tt, $[1] * Tt, $[2] * Tt])
                        }
                        _(u, et, H, J, lt, mt[0] + mt[2] < mt[1] + mt[3])
                    }
                } else if (K === 2) {
                    const G = p(y.side)
                      , P = m(A)
                      , O = .9
                      , N = [k[0] * O, k[1] * O, k[2] * O]
                      , B = .15
                      , z = .85
                      , Y = [[[L + B, v, S + B], [L + z, v, S + z], [L + z, v + 1, S + z], [L + B, v + 1, S + B]], [[L + B, v, S + z], [L + z, v, S + B], [L + z, v + 1, S + B], [L + B, v + 1, S + z]]]
                      , $ = As.map( ([Q,et]) => [G[0] + (G[2] - G[0]) * Q, G[1] + (G[3] - G[1]) * et]);
                    for (const Q of Y)
                        _(u, Q, $, [P, P, P, P], [N, N, N, N], !1),
                        _(u, [Q[1], Q[0], Q[3], Q[2]], [$[1], $[0], $[3], $[2]], [P, P, P, P], [N, N, N, N], !1)
                } else if (K === 4) {
                    const G = p("water")
                      , O = v + 1 < Wt && n[A + He] === M.WATER ? 1 : .875;
                    for (let N = 0; N < 6; N++) {
                        const B = ws[N]
                          , z = v + B.n[1];
                        if (z < 0)
                            continue;
                        const Y = z < Wt ? n[A + B.n[0] + B.n[2] * te + B.n[1] * He] : 0;
                        if (Y === M.WATER || Dn[Y] && N !== 2 || N === 2 && Dn[Y])
                            continue;
                        const $ = z < Wt ? A + B.n[0] + B.n[2] * te + B.n[1] * He : A
                          , Q = m(Dn[Y] ? A : $)
                          , et = []
                          , H = []
                          , J = []
                          , lt = [];
                        for (let mt = 0; mt < 4; mt++) {
                            const _t = B.c[mt];
                            et.push([L + _t[0], v + (_t[1] ? O : 0), S + _t[2]]),
                            H.push([G[0] + (G[2] - G[0]) * As[mt][0], G[1] + (G[3] - G[1]) * As[mt][1]]),
                            J.push(Q);
                            const wt = B.shade;
                            lt.push([wt, wt, wt])
                        }
                        _(f, et, H, J, lt, !1),
                        N === 2 && _(f, [et[1], et[0], et[3], et[2]], [H[1], H[0], H[3], H[2]], J, lt, !1)
                    }
                } else {
                    const G = m(A)
                      , P = y.shape
                      , O = N => ws[N].kind === "top" ? y.top : ws[N].kind === "bottom" ? y.bottom : y.side;
                    if (P === "slab")
                        d(L, v, S, [0, 0, 0], [1, .5, 1], O, G, x, !0);
                    else if (P === "stairs") {
                        d(L, v, S, [0, 0, 0], [1, .5, 1], O, G, x, !0);
                        const N = T & 3
                          , B = [0, .5, 0]
                          , z = [1, 1, 1];
                        N === 0 ? B[2] = .5 : N === 1 ? z[0] = .5 : N === 2 ? z[2] = .5 : B[0] = .5,
                        d(L, v, S, B, z, O, G, x, !0)
                    } else if (P === "cactus")
                        d(L, v, S, [1 / 16, 0, 1 / 16], [15 / 16, 1, 15 / 16], O, G, x, !1);
                    else if (P === "torch") {
                        let z = 0
                          , Y = 0
                          , $ = 0;
                        const Q = T & 7;
                        Q === 1 ? (Y = -.34,
                        $ = .2) : Q === 2 ? (z = .34,
                        $ = .2) : Q === 3 ? (Y = .34,
                        $ = .2) : Q === 4 && (z = -.34,
                        $ = .2),
                        d(L, v, S, [.4375 + z, $, .4375 + Y], [.5625 + z, 10 / 16 + $, .5625 + Y], () => "torch", [G[0], 1], [1.2, 1.2, 1.2], !1)
                    } else if (P === "door") {
                        const N = (T & 8) !== 0
                          , B = ((T & 3) + (T & 4 ? 1 : 0)) % 4
                          , z = 3 / 16
                          , Y = [0, 0, 0]
                          , $ = [1, 1, 1];
                        B === 0 ? $[2] = z : B === 1 ? Y[0] = 1 - z : B === 2 ? Y[2] = 1 - z : $[0] = z,
                        d(L, v, S, Y, $, () => N ? "door_top" : "door_bottom", G, x, !1)
                    } else if (P === "bed") {
                        const N = (T & 4) !== 0;
                        d(L, v, S, [0, 0, 0], [1, 9 / 16, 1], B => B === 2 ? N ? "bed_head_top" : "bed_foot_top" : B === 3 ? "oak_planks" : "bed_side", G, x, !1)
                    }
                }
            }
    return {
        solid: u.out(),
        water: f.out(),
        sky: c,
        blk: h
    }
}
class gg {
    constructor(t, e) {
        this.cx = t,
        this.cz = e,
        this.blocks = new Uint8Array(tt * tt * Wt),
        this.meta = new Uint8Array(tt * tt * Wt),
        this.biomes = new Uint8Array(tt * tt),
        this.tint = new Float32Array(tt * tt * 3),
        this.sky = null,
        this.blk = null,
        this.mesh = null,
        this.water = null,
        this.dirty = !0
    }
}
const sc = (i, t) => (i + 1048576) * 2097152 + (t + 1048576)
  , Is = (i, t) => `${i},${t}`;
class rc {
    constructor(t, e, n, s, r) {
        this.gen = t,
        this.atlas = e,
        this.solidMat = n,
        this.waterMat = s,
        this.chunks = new Map,
        this.group = new wn,
        this.radius = 6,
        this.fancy = !0,
        this.smooth = !0,
        this.uvCache = new Map,
        this.fluidQueue = [],
        this.fluidTimer = 0,
        this.onBlockChanged = null,
        this.generatedCount = 0,
        this.padded = {
            blocks: new Uint8Array(te * te * Wt),
            meta: new Uint8Array(te * te * Wt)
        },
        this.mods = r ?? new Map
    }
    getChunk(t, e) {
        return this.chunks.get(sc(t, e))
    }
    isLoaded(t, e) {
        return !!this.getChunk(Math.floor(t / tt), Math.floor(e / tt))
    }
    getBlock(t, e, n) {
        if (e < 0)
            return M.BEDROCK;
        if (e >= Wt)
            return M.AIR;
        const s = Math.floor(t / tt)
          , r = Math.floor(n / tt)
          , o = this.getChunk(s, r);
        return o ? o.blocks[xe(t - s * tt, e, n - r * tt)] : M.AIR
    }
    getMeta(t, e, n) {
        if (e < 0 || e >= Wt)
            return 0;
        const s = Math.floor(t / tt)
          , r = Math.floor(n / tt)
          , o = this.getChunk(s, r);
        return o ? o.meta[xe(t - s * tt, e, n - r * tt)] : 0
    }
    getLight(t, e, n) {
        if (e >= Wt)
            return [15, 0];
        if (e < 0)
            return [0, 0];
        const s = Math.floor(t / tt)
          , r = Math.floor(n / tt)
          , o = this.getChunk(s, r);
        if (!o || !o.sky || !o.blk)
            return [15, 0];
        const a = xe(t - s * tt, e, n - r * tt);
        return [o.sky[a], o.blk[a]]
    }
    biomeAt(t, e) {
        const n = Math.floor(t / tt)
          , s = Math.floor(e / tt)
          , r = this.getChunk(n, s);
        return r ? r.biomes[t - n * tt + (e - s * tt) * tt] : this.gen.column(t, e).biome
    }
    setBlock(t, e, n, s, r=0, o=!0, a=!0) {
        var m;
        if (e < 0 || e >= Wt)
            return;
        const l = Math.floor(t / tt)
          , c = Math.floor(n / tt)
          , h = this.getChunk(l, c);
        if (!h)
            return;
        const u = t - l * tt
          , f = n - c * tt
          , p = xe(u, e, f)
          , g = h.blocks[p];
        if (g === s && h.meta[p] === r)
            return;
        if (h.blocks[p] = s,
        h.meta[p] = r,
        o) {
            const d = Is(l, c);
            let x = this.mods.get(d);
            x || (x = new Map,
            this.mods.set(d, x)),
            x.set(p, s | r << 8)
        }
        const _ = [h];
        for (let d = -1; d <= 1; d++)
            for (let x = -1; x <= 1; x++) {
                if (!x && !d)
                    continue;
                const v = this.getChunk(l + x, c + d);
                if (!v)
                    continue;
                const S = x === 0 || (x < 0 ? u === 0 : u === tt - 1)
                  , L = d === 0 || (d < 0 ? f === 0 : f === tt - 1);
                S && L ? _.push(v) : v.dirty = !0
            }
        if (a)
            for (const d of _)
                this.remesh(d);
        else
            for (const d of _)
                d.dirty = !0;
        (m = this.onBlockChanged) == null || m.call(this, t, e, n, g, s)
    }
    update(t, e, n) {
        const s = performance.now()
          , r = Math.floor(t / tt)
          , o = Math.floor(e / tt)
          , a = this.radius;
        for (const [f,p] of this.chunks)
            (Math.abs(p.cx - r) > a + 2 || Math.abs(p.cz - o) > a + 2) && (this.disposeChunk(p),
            this.chunks.delete(f));
        const l = [];
        for (let f = -a - 1; f <= a + 1; f++)
            for (let p = -a - 1; p <= a + 1; p++)
                this.getChunk(r + p, o + f) || l.push([p * p + f * f, r + p, o + f]);
        l.sort( (f, p) => f[0] - p[0]);
        let c = l.length;
        for (const [,f,p] of l) {
            if (performance.now() - s > n * .5 && c < l.length)
                break;
            this.generateChunk(f, p),
            c--
        }
        const h = [];
        for (const f of this.chunks.values()) {
            if (!f.dirty)
                continue;
            const p = f.cx - r
              , g = f.cz - o;
            Math.abs(p) > a || Math.abs(g) > a || h.push([p * p + g * g, f])
        }
        h.sort( (f, p) => f[0] - p[0]);
        let u = 0;
        for (const [,f] of h) {
            if (performance.now() - s > n && u > 0)
                break;
            this.neighboursReady(f) && (this.remesh(f),
            u++)
        }
        return c += h.length - u,
        c
    }
    neighboursReady(t) {
        for (let e = -1; e <= 1; e++)
            for (let n = -1; n <= 1; n++)
                if (!this.getChunk(t.cx + n, t.cz + e))
                    return !1;
        return !0
    }
    generateChunk(t, e) {
        const n = new gg(t,e);
        this.gen.generate(t, e, n.blocks, n.meta);
        for (let r = 0; r < tt; r++)
            for (let o = 0; o < tt; o++) {
                const a = this.gen.column(t * tt + o, e * tt + r);
                n.biomes[o + r * tt] = a.biome
            }
        for (let r = 0; r < tt; r++)
            for (let o = 0; o < tt; o++) {
                let a = 0
                  , l = 0
                  , c = 0
                  , h = 0;
                for (let f = -1; f <= 1; f++)
                    for (let p = -1; p <= 1; p++) {
                        const g = o + p * 2
                          , _ = r + f * 2
                          , m = g >= 0 && _ >= 0 && g < tt && _ < tt ? n.biomes[g + _ * tt] : n.biomes[o + r * tt]
                          , d = ug[m];
                        a += d[0],
                        l += d[1],
                        c += d[2],
                        h++
                    }
                const u = (o + r * tt) * 3;
                n.tint[u] = a / h,
                n.tint[u + 1] = l / h,
                n.tint[u + 2] = c / h
            }
        const s = this.mods.get(Is(t, e));
        if (s)
            for (const [r,o] of s)
                n.blocks[r] = o & 255,
                n.meta[r] = o >> 8;
        this.chunks.set(sc(t, e), n),
        this.generatedCount++;
        for (let r = -1; r <= 1; r++)
            for (let o = -1; o <= 1; o++) {
                const a = this.getChunk(t + o, e + r);
                a && (a.dirty = !0)
            }
        return n
    }
    remesh(t) {
        if (!this.neighboursReady(t)) {
            t.dirty = !0;
            return
        }
        const e = this.padded.blocks
          , n = this.padded.meta
          , s = te * te;
        for (let l = -1; l <= 1; l++)
            for (let c = -1; c <= 1; c++) {
                const h = this.getChunk(t.cx + c, t.cz + l)
                  , u = c < 0 ? tt - hn : 0
                  , f = c > 0 ? hn : tt
                  , p = l < 0 ? tt - hn : 0
                  , g = l > 0 ? hn : tt
                  , _ = c < 0 ? 0 : c === 0 ? hn : hn + tt
                  , m = l < 0 ? 0 : l === 0 ? hn : hn + tt
                  , d = f - u;
                for (let x = 0; x < Wt; x++)
                    for (let v = p; v < g; v++) {
                        const S = xe(u, x, v)
                          , L = _ + (m + v - p) * te + x * s;
                        e.set(h.blocks.subarray(S, S + d), L),
                        n.set(h.meta.subarray(S, S + d), L)
                    }
            }
        const r = mg({
            blocks: e,
            meta: n,
            tint: t.tint,
            fancy: this.fancy,
            smooth: this.smooth
        }, this.atlas, this.uvCache)
          , o = new Uint8Array(tt * tt * Wt)
          , a = new Uint8Array(tt * tt * Wt);
        for (let l = 0; l < Wt; l++)
            for (let c = 0; c < tt; c++) {
                const h = hn + (c + hn) * te + l * s
                  , u = xe(0, l, c);
                o.set(r.sky.subarray(h, h + tt), u),
                a.set(r.blk.subarray(h, h + tt), u)
            }
        t.sky = o,
        t.blk = a,
        this.disposeChunk(t),
        r.solid && (t.mesh = this.makeMesh(r.solid, this.solidMat, t)),
        r.water && (t.water = this.makeMesh(r.water, this.waterMat, t),
        t.water.renderOrder = 1),
        t.dirty = !1
    }
    makeMesh(t, e, n) {
        const s = new Qe;
        s.setAttribute("position", new ze(t.pos,3)),
        s.setAttribute("uv", new ze(t.uv,2)),
        s.setAttribute("light", new ze(t.light,2)),
        s.setAttribute("color", new ze(t.color,3)),
        s.setIndex(new ze(t.index,1)),
        s.computeBoundingSphere();
        const r = new Pe(s,e);
        return r.position.set(n.cx * tt, 0, n.cz * tt),
        r.matrixAutoUpdate = !1,
        r.updateMatrix(),
        this.group.add(r),
        r
    }
    disposeChunk(t) {
        for (const e of [t.mesh, t.water])
            e && (this.group.remove(e),
            e.geometry.dispose());
        t.mesh = null,
        t.water = null
    }
    dispose() {
        for (const t of this.chunks.values())
            this.disposeChunk(t);
        this.chunks.clear()
    }
    remeshAll() {
        for (const t of this.chunks.values())
            t.dirty = !0
    }
    surfaceY(t, e) {
        for (let n = Wt - 1; n >= 0; n--) {
            const s = this.getBlock(t, n, e);
            if (s !== M.AIR && Ae[s] || s === M.WATER)
                return n
        }
        return -1
    }
    raycast(t, e, n) {
        let s = Math.floor(t.x)
          , r = Math.floor(t.y)
          , o = Math.floor(t.z);
        const a = Math.sign(e.x)
          , l = Math.sign(e.y)
          , c = Math.sign(e.z)
          , h = a !== 0 ? Math.abs(1 / e.x) : 1 / 0
          , u = l !== 0 ? Math.abs(1 / e.y) : 1 / 0
          , f = c !== 0 ? Math.abs(1 / e.z) : 1 / 0;
        let p = a > 0 ? (s + 1 - t.x) * h : a < 0 ? (t.x - s) * h : 1 / 0
          , g = l > 0 ? (r + 1 - t.y) * u : l < 0 ? (t.y - r) * u : 1 / 0
          , _ = c > 0 ? (o + 1 - t.z) * f : c < 0 ? (t.z - o) * f : 1 / 0;
        for (let m = 0; m < 64; m++) {
            const d = this.getBlock(s, r, o);
            if (d !== M.AIR && d !== M.WATER) {
                const x = gh(d, this.getMeta(s, r, o));
                let v = null;
                for (const S of x) {
                    const L = vg(t, e, s + S[0], r + S[1], o + S[2], s + S[3], r + S[4], o + S[5]);
                    L && L.t <= n && (!v || L.t < v.dist) && (v = {
                        x: s,
                        y: r,
                        z: o,
                        nx: L.n[0],
                        ny: L.n[1],
                        nz: L.n[2],
                        id: d,
                        dist: L.t,
                        point: t.clone().addScaledVector(e, L.t)
                    })
                }
                if (v)
                    return v
            }
            if (p < g && p < _) {
                if (p > n)
                    break;
                s += a,
                p += h
            } else if (g < _) {
                if (g > n)
                    break;
                r += l,
                g += u
            } else {
                if (_ > n)
                    break;
                o += c,
                _ += f
            }
        }
        return null
    }
    afterRemoved(t, e, n) {
        this.checkFalling(t, e + 1, n),
        [[0, 1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]].some( ([r,o,a]) => this.getBlock(t + r, e + o, n + a) === M.WATER) && this.fluidQueue.push([t, e, n, 6])
    }
    checkFalling(t, e, n) {
        let s = e;
        for (; s < Wt; ) {
            const r = this.getBlock(t, s, n);
            if (!we(r).gravity)
                break;
            const o = this.getBlock(t, s - 1, n);
            if (Ae[o])
                break;
            let a = s - 1;
            for (; a > 0; ) {
                const l = this.getBlock(t, a - 1, n);
                if (Ae[l])
                    break;
                a--
            }
            this.setBlock(t, s, n, M.AIR),
            this.setBlock(t, a, n, r),
            s++
        }
    }
    tickFluids(t) {
        if (this.fluidTimer += t,
        this.fluidTimer < .25 || this.fluidQueue.length === 0)
            return;
        this.fluidTimer = 0;
        const e = this.fluidQueue;
        this.fluidQueue = [];
        let n = 0;
        for (const [s,r,o,a] of e) {
            if (n++ > 64) {
                this.fluidQueue.push([s, r, o, a]);
                continue
            }
            const l = this.getBlock(s, r, o);
            if (l !== M.AIR && !we(l).replaceable || l === M.WATER)
                continue;
            const c = this.getBlock(s, r + 1, o) === M.WATER
              , h = [[1, 0], [-1, 0], [0, 1], [0, -1]].some( ([f,p]) => this.getBlock(s + f, r, o + p) === M.WATER && Ae[this.getBlock(s + f, r - 1, o + p)]);
            if (!c && !h)
                continue;
            this.setBlock(s, r, o, M.WATER, 0, !0, !1);
            const u = this.getBlock(s, r - 1, o);
            if (u === M.AIR || we(u).replaceable && u !== M.WATER)
                this.fluidQueue.push([s, r - 1, o, a]);
            else if (a > 0)
                for (const [f,p] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
                    const g = this.getBlock(s + f, r, o + p);
                    (g === M.AIR || we(g).replaceable && g !== M.WATER) && this.fluidQueue.push([s + f, r, o + p, a - 1])
                }
        }
    }
}
const qo = [[0, 0, 0, 1, 1, 1]];
function gh(i, t) {
    const e = li[i];
    if (!e)
        return qo;
    switch (e.shape) {
    case "slab":
        return [[0, 0, 0, 1, .5, 1]];
    case "torch":
        {
            const n = t & 7;
            let s = 0
              , r = 0
              , o = 0;
            return n === 1 ? (r = -.34,
            o = .2) : n === 2 ? (s = .34,
            o = .2) : n === 3 ? (r = .34,
            o = .2) : n === 4 && (s = -.34,
            o = .2),
            [[.38 + s, o, .38 + r, .62 + s, .65 + o, .62 + r]]
        }
    case "cross":
        return [[.15, 0, .15, .85, .85, .85]];
    case "bed":
        return [[0, 0, 0, 1, .5625, 1]];
    case "cactus":
        return [[1 / 16, 0, 1 / 16, 15 / 16, 1, 15 / 16]];
    case "door":
        return [_h(t)];
    case "stairs":
        return vh(t);
    default:
        return qo
    }
}
function _h(i) {
    const t = ((i & 3) + (i & 4 ? 1 : 0)) % 4
      , e = 3 / 16;
    return t === 0 ? [0, 0, 0, 1, 1, e] : t === 1 ? [1 - e, 0, 0, 1, 1, 1] : t === 2 ? [0, 0, 1 - e, 1, 1, 1] : [0, 0, 0, e, 1, 1]
}
function vh(i) {
    const t = i & 3
      , e = [0, .5, 0, 1, 1, 1];
    return t === 0 ? e[2] = .5 : t === 1 ? e[3] = .5 : t === 2 ? e[5] = .5 : e[0] = .5,
    [[0, 0, 0, 1, .5, 1], e]
}
function _g(i, t) {
    const e = li[i];
    if (!e || !e.solid)
        return null;
    switch (e.shape) {
    case "slab":
        return [[0, 0, 0, 1, .5, 1]];
    case "bed":
        return [[0, 0, 0, 1, .5625, 1]];
    case "cactus":
        return [[1 / 16, 0, 1 / 16, 15 / 16, 1, 15 / 16]];
    case "door":
        return [_h(t)];
    case "stairs":
        return vh(t);
    default:
        return qo
    }
}
function vg(i, t, e, n, s, r, o, a) {
    let l = -1 / 0
      , c = 1 / 0
      , h = [0, 0, 0];
    const u = [[i.x, t.x, e, r], [i.y, t.y, n, o], [i.z, t.z, s, a]];
    for (let f = 0; f < 3; f++) {
        const [p,g,_,m] = u[f];
        if (Math.abs(g) < 1e-9) {
            if (p < _ || p > m)
                return null;
            continue
        }
        let d = (_ - p) / g
          , x = (m - p) / g
          , v = -1;
        if (d > x) {
            const S = d;
            d = x,
            x = S,
            v = 1
        }
        if (d > l && (l = d,
        h = [0, 0, 0],
        h[f] = v),
        x < c && (c = x),
        l > c)
            return null
    }
    return c < 0 ? null : {
        t: Math.max(0, l),
        n: h
    }
}
function aa(i, t) {
    return {
        pos: new I,
        vel: new I,
        hw: i,
        h: t,
        onGround: !1,
        inWater: !1,
        headInWater: !1,
        collidedH: !1
    }
}
const ls = [];
function la(i, t, e, n, s, r, o) {
    ls.length = 0;
    for (let a = Math.floor(t); a <= Math.floor(s); a++)
        for (let l = Math.floor(n); l <= Math.floor(o); l++) {
            const c = i.isLoaded(a, l);
            for (let h = Math.floor(e) - 1; h <= Math.floor(r); h++) {
                if (!c) {
                    ls.push([a, h, l, a + 1, h + 1, l + 1]);
                    continue
                }
                const u = i.getBlock(a, h, l);
                if (u === M.AIR)
                    continue;
                const f = _g(u, i.getMeta(a, h, l));
                if (f)
                    for (const p of f)
                        ls.push([a + p[0], h + p[1], l + p[2], a + p[3], h + p[4], l + p[5]])
            }
        }
}
const Re = 1e-4;
function Jn(i, t, e) {
    const n = (t + 1) % 3
      , s = (t + 2) % 3;
    for (const r of ls)
        r[n + 3] <= i[n] + Re || r[n] >= i[n + 3] - Re || r[s + 3] <= i[s] + Re || r[s] >= i[s + 3] - Re || (e > 0 && r[t] >= i[t + 3] - Re ? e = Math.min(e, r[t] - i[t + 3]) : e < 0 && r[t + 3] <= i[t] + Re && (e = Math.max(e, r[t + 3] - i[t])));
    return e
}
function vi(i, t, e) {
    return [i.x - t, i.y, i.z - t, i.x + t, i.y + e, i.z + t]
}
function oc(i, t, e, n, s) {
    la(i, t - s, e - .6, n - s, t + s, e, n + s);
    for (const r of ls)
        if (!(r[3] <= t - s + Re || r[0] >= t + s - Re) && !(r[5] <= n - s + Re || r[2] >= n + s - Re) && r[4] <= e + Re && r[4] > e - .6)
            return !0;
    return !1
}
function Ur(i, t, e, n=0, s=!1) {
    let r = t.vel.x * e
      , o = t.vel.y * e
      , a = t.vel.z * e;
    const l = t.pos
      , c = t.onGround;
    s && c && (r !== 0 && !oc(i, l.x + r, l.y, l.z, t.hw) && (r = 0,
    t.vel.x = 0),
    a !== 0 && !oc(i, l.x + r, l.y, l.z + a, t.hw) && (a = 0,
    t.vel.z = 0)),
    la(i, l.x - t.hw - Math.abs(r) - 1, l.y - Math.abs(o) - 1, l.z - t.hw - Math.abs(a) - 1, l.x + t.hw + Math.abs(r) + 1, l.y + t.h + Math.abs(o) + n + 1, l.z + t.hw + Math.abs(a) + 1);
    const h = l.clone();
    let u = vi(l, t.hw, t.h);
    const f = Jn(u, 1, o);
    l.y += f,
    Math.abs(f - o) > 1e-9 && (t.vel.y = 0),
    u = vi(l, t.hw, t.h),
    t.onGround = o <= 0 && Jn(u, 1, -.01) > -.01 + 1e-7;
    const p = Jn(u, 0, r);
    l.x += p,
    u = vi(l, t.hw, t.h);
    const g = Jn(u, 2, a);
    if (l.z += g,
    t.collidedH = Math.abs(p - r) > Re || Math.abs(g - a) > Re,
    t.collidedH && n > 0 && (c || t.onGround)) {
        const d = h.clone();
        d.y = l.y;
        let x = vi(d, t.hw, t.h);
        const v = Jn(x, 1, n);
        d.y += v,
        x = vi(d, t.hw, t.h),
        d.x += Jn(x, 0, r),
        x = vi(d, t.hw, t.h),
        d.z += Jn(x, 2, a),
        x = vi(d, t.hw, t.h),
        d.y += Jn(x, 1, -v);
        const S = (l.x - h.x) ** 2 + (l.z - h.z) ** 2;
        (d.x - h.x) ** 2 + (d.z - h.z) ** 2 > S + 1e-4 && (l.copy(d),
        t.onGround = !0,
        t.collidedH = !1)
    }
    Math.abs(p - r) > Re && t.collidedH && (t.vel.x = 0),
    Math.abs(g - a) > Re && t.collidedH && (t.vel.z = 0);
    const _ = i.getBlock(Math.floor(l.x), Math.floor(l.y + .1), Math.floor(l.z))
      , m = i.getBlock(Math.floor(l.x), Math.floor(l.y + t.h * .5), Math.floor(l.z));
    t.inWater = _ === M.WATER || m === M.WATER,
    t.headInWater = i.getBlock(Math.floor(l.x), Math.floor(l.y + t.h * .9), Math.floor(l.z)) === M.WATER
}
function xh(i, t, e, n, s, r, o) {
    la(i, t, e + 1, n, s, r, o);
    for (const a of ls)
        if (a[3] > t + Re && a[0] < s - Re && a[4] > e + Re && a[1] < r - Re && a[5] > n + Re && a[2] < o - Re)
            return !0;
    return !1
}
function Mh(i) {
    return i ? {
        id: i.id,
        count: i.count,
        dmg: i.dmg
    } : null
}
function ti(i, t) {
    return !!i && !!t && i.id === t.id && !ce(i.id).tool && (i.dmg ?? 0) === (t.dmg ?? 0)
}
class xg {
    constructor(t=36) {
        this.selected = 0,
        this.slots = new Array(t).fill(null)
    }
    get held() {
        return this.slots[this.selected]
    }
    add(t) {
        let e = t.count;
        const n = Sn(t.id);
        for (let s = 0; s < this.slots.length && e > 0; s++) {
            const r = this.slots[s];
            if (r && ti(r, t) && r.count < n) {
                const o = Math.min(e, n - r.count);
                r.count += o,
                e -= o
            }
        }
        for (let s = 0; s < this.slots.length && e > 0; s++)
            if (!this.slots[s]) {
                const r = Math.min(e, n);
                this.slots[s] = {
                    id: t.id,
                    count: r,
                    dmg: t.dmg
                },
                e -= r
            }
        return e
    }
    canAdd(t) {
        let e = t.count;
        const n = Sn(t.id);
        for (const s of this.slots)
            if (s ? ti(s, t) && (e -= n - s.count) : e -= n,
            e <= 0)
                return !0;
        return e <= 0
    }
    consumeSelected(t=1) {
        const e = this.slots[this.selected];
        e && (e.count -= t,
        e.count <= 0 && (this.slots[this.selected] = null))
    }
    count(t) {
        return this.slots.reduce( (e, n) => e + (n && n.id === t ? n.count : 0), 0)
    }
    clear() {
        this.slots.fill(null)
    }
    toJSON() {
        return this.slots.map(Mh)
    }
    load(t) {
        this.clear(),
        Array.isArray(t) && t.forEach( (e, n) => {
            n < this.slots.length && e && typeof e.id == "number" && typeof e.count == "number" && e.count > 0 && (this.slots[n] = {
                id: e.id,
                count: e.count,
                dmg: typeof e.dmg == "number" ? e.dmg : void 0
            })
        }
        )
    }
}
class ac {
    constructor() {
        this.body = aa(.3, 1.8),
        this.yaw = 0,
        this.pitch = 0,
        this.inv = new xg,
        this.health = 20,
        this.hunger = 20,
        this.saturation = 5,
        this.exhaustion = 0,
        this.air = 15,
        this.mode = "survival",
        this.flying = !1,
        this.sneaking = !1,
        this.sprinting = !1,
        this.dead = !1,
        this.deathCause = "",
        this.spawn = new I,
        this.hasBedSpawn = !1,
        this.hurtTimer = 0,
        this.invuln = 0,
        this.regenTimer = 0,
        this.starveTimer = 0,
        this.drownTimer = 0,
        this.fallStartY = 0,
        this.airborne = !1,
        this.stepDist = 0,
        this.wasInWater = !1,
        this.walkDist = 0,
        this.bobAmount = 0,
        this.eyeOffset = 1.62
    }
    get eye() {
        return new I(this.body.pos.x,this.body.pos.y + this.eyeOffset,this.body.pos.z)
    }
    get lookDir() {
        const t = Math.cos(this.pitch);
        return new I(-Math.sin(this.yaw) * t,Math.sin(this.pitch),-Math.cos(this.yaw) * t)
    }
    update(t, e, n, s, r) {
        const o = this.body
          , a = this.mode === "creative";
        let l = 0
          , c = 0
          , h = !1
          , u = !1
          , f = !1;
        e && e.locked && (this.yaw -= e.dx * .0022 * r.sens,
        this.pitch -= e.dy * .0022 * r.sens * (r.invert ? -1 : 1),
        this.pitch = Math.max(-Math.PI / 2 + .01, Math.min(Math.PI / 2 - .01, this.pitch)),
        e.keys.has("KeyW") && (l += 1),
        e.keys.has("KeyS") && (l -= 1),
        e.keys.has("KeyA") && (c -= 1),
        e.keys.has("KeyD") && (c += 1),
        h = e.keys.has("Space"),
        u = e.keys.has("ShiftLeft") || e.keys.has("ShiftRight"),
        f = e.keys.has("KeyR"),
        e.doubleTapped.has("KeyW") && (this.sprinting = !0),
        a && e.doubleTapped.has("Space") && (this.flying = !this.flying,
        o.vel.y = 0)),
        a || (this.flying = !1),
        this.sneaking = u && !this.flying,
        f && l > 0 && (this.sprinting = !0),
        (l <= 0 || this.sneaking || !a && this.hunger <= 6 || o.collidedH) && (this.sprinting = !1);
        const p = Math.sin(this.yaw)
          , g = Math.cos(this.yaw);
        let _ = -p * l + g * c
          , m = -g * l - p * c;
        const d = Math.hypot(_, m);
        d > 0 && (_ /= d,
        m /= d);
        let x = 4.317;
        this.flying ? x = this.sprinting ? 21 : 10.9 : this.sneaking ? x = 1.31 : this.sprinting && (x = 5.61),
        o.inWater && !this.flying && (x *= .5);
        const v = this.flying ? 10 : o.onGround ? 22 : o.inWater ? 6 : 6.5;
        if (o.vel.x += (_ * x - o.vel.x) * Math.min(1, v * t),
        o.vel.z += (m * x - o.vel.z) * Math.min(1, v * t),
        this.flying) {
            const y = (h ? 1 : 0) - (u ? 1 : 0);
            o.vel.y += (y * 8 - o.vel.y) * Math.min(1, 12 * t)
        } else
            o.inWater ? (o.vel.y -= 9 * t,
            o.vel.y *= Math.pow(.25, t),
            h && (o.vel.y = Math.min(o.vel.y + 26 * t, 3.2),
            o.collidedH && (o.vel.y = 5.5),
            Math.random() < t * 2 && s.onSwim()),
            o.vel.y = Math.max(o.vel.y, -3.5)) : (o.vel.y -= 32 * t,
            o.vel.y = Math.max(o.vel.y, -78),
            h && o.onGround && (o.vel.y = 8.7,
            this.sprinting ? (o.vel.x -= p * 2,
            o.vel.z -= g * 2,
            this.exhaustion += .2) : this.exhaustion += .05,
            s.onJump()));
        const S = o.pos.x
          , L = o.pos.z;
        Ur(n, o, t, o.onGround || this.flying ? .6 : 0, this.sneaking && !this.flying),
        this.flying && o.onGround && !a && (this.flying = !1),
        a && this.flying && o.onGround && u && (this.flying = !1);
        const A = Math.hypot(o.pos.x - S, o.pos.z - L);
        if (o.onGround && (this.walkDist += A,
        this.stepDist += A,
        this.stepDist > 2.1 && (this.stepDist = 0,
        s.onStep())),
        this.sprinting && (this.exhaustion += A * .1),
        o.inWater && (this.exhaustion += A * .01),
        o.inWater && !this.wasInWater && o.vel.y < -4 && s.onSplash(),
        this.wasInWater = o.inWater,
        !o.onGround && !o.inWater && !this.flying)
            this.airborne || (this.airborne = !0,
            this.fallStartY = o.pos.y),
            this.fallStartY = Math.max(this.fallStartY, o.pos.y);
        else {
            if (this.airborne) {
                const y = this.fallStartY - o.pos.y;
                this.airborne = !1,
                o.onGround && s.onLand(y),
                !o.inWater && !a && y > 3.4 && this.damage(Math.floor(y - 3), "Caiu de um lugar alto")
            }
            this.fallStartY = o.pos.y
        }
        o.pos.y < -40 && this.damage(1e3, "Caiu do mundo", !0);
        const R = this.sneaking ? 1.32 : 1.62;
        this.eyeOffset += (R - this.eyeOffset) * Math.min(1, t * 12);
        const K = Math.hypot(o.vel.x, o.vel.z);
        this.bobAmount += ((o.onGround && !this.flying ? Math.min(1, K / 4.3) : 0) - this.bobAmount) * Math.min(1, t * 8),
        this.hurtTimer = Math.max(0, this.hurtTimer - t),
        this.invuln = Math.max(0, this.invuln - t)
    }
    damage(t, e, n=!1) {
        return this.dead || this.mode === "creative" && !n || this.invuln > 0 && !n ? !1 : (this.health -= t,
        this.hurtTimer = .4,
        this.invuln = .5,
        this.exhaustion += .1,
        this.health <= 0 && (this.health = 0,
        this.dead = !0,
        this.deathCause = e),
        !0)
    }
    tickStats(t, e) {
        if (this.mode === "creative" || this.dead) {
            this.air = 15;
            return
        }
        if (this.body.headInWater ? (this.air -= t,
        this.air <= 0 && (this.air = 0,
        this.drownTimer += t,
        this.drownTimer >= 1 && (this.drownTimer = 0,
        this.damage(2, "Afogou-se")))) : (this.air = Math.min(15, this.air + t * 6),
        this.drownTimer = 0),
        e === 0) {
            this.regenTimer += t,
            this.regenTimer > 1.5 && (this.regenTimer = 0,
            this.health < 20 && (this.health = Math.min(20, this.health + 1)),
            this.hunger < 20 && this.hunger++);
            return
        }
        if (this.exhaustion += t * .0035,
        this.exhaustion >= 4 && (this.exhaustion -= 4,
        this.saturation > 0 ? this.saturation = Math.max(0, this.saturation - 1) : this.hunger = Math.max(0, this.hunger - 1)),
        this.hunger >= 18 && this.health < 20 ? (this.regenTimer += t,
        this.regenTimer >= (this.saturation > 0 && this.hunger >= 20 ? .8 : 3.5) && (this.regenTimer = 0,
        this.health = Math.min(20, this.health + 1),
        this.exhaustion += 6)) : this.regenTimer = 0,
        this.hunger <= 0) {
            if (this.starveTimer += t,
            this.starveTimer >= 4) {
                this.starveTimer = 0;
                const s = e === 1 ? 10 : e === 2 ? 1 : 0;
                this.health > s && this.damage(1, "Morreu de fome", !0)
            }
        } else
            this.starveTimer = 0
    }
    eat(t, e) {
        this.hunger = Math.min(20, this.hunger + t),
        this.saturation = Math.min(this.hunger, this.saturation + e)
    }
    respawn() {
        this.dead = !1,
        this.health = 20,
        this.hunger = 20,
        this.saturation = 5,
        this.exhaustion = 0,
        this.air = 15,
        this.body.vel.set(0, 0, 0),
        this.body.pos.copy(this.spawn),
        this.airborne = !1,
        this.invuln = 2
    }
}
class Mg {
    constructor(t) {
        this.canvas = t,
        this.keys = new Set,
        this.pressed = new Set,
        this.mouseDown = [!1, !1, !1],
        this.mousePressed = [!1, !1, !1],
        this.dx = 0,
        this.dy = 0,
        this.wheel = 0,
        this.locked = !1,
        this.onLockChange = null,
        this.onKey = null,
        this.lastTap = {},
        this.doubleTapped = new Set,
        window.addEventListener("keydown", e => {
            var n, s;
            if (((n = e.target) == null ? void 0 : n.tagName) !== "INPUT") {
                if ((["Space", "Tab", "F3", "F5", "ArrowUp", "ArrowDown", "Quote"].includes(e.code) || e.ctrlKey && e.code !== "KeyC" && e.code !== "KeyV") && e.preventDefault(),
                !this.keys.has(e.code)) {
                    this.pressed.add(e.code);
                    const r = performance.now();
                    r - (this.lastTap[e.code] ?? 0) < 300 && this.doubleTapped.add(e.code),
                    this.lastTap[e.code] = r
                }
                this.keys.add(e.code),
                (s = this.onKey) == null || s.call(this, e.code, e)
            }
        }
        ),
        window.addEventListener("keyup", e => {
            this.keys.delete(e.code)
        }
        ),
        window.addEventListener("blur", () => {
            this.keys.clear(),
            this.mouseDown = [!1, !1, !1]
        }
        ),
        t.addEventListener("mousedown", e => {
            this.locked && (this.mouseDown[e.button] = !0,
            this.mousePressed[e.button] = !0)
        }
        ),
        window.addEventListener("mouseup", e => {
            this.mouseDown[e.button] = !1
        }
        ),
        window.addEventListener("mousemove", e => {
            this.locked && (Math.abs(e.movementX) > 300 || Math.abs(e.movementY) > 300 || (this.dx += e.movementX,
            this.dy += e.movementY))
        }
        ),
        window.addEventListener("wheel", e => {
            this.locked && (this.wheel += Math.sign(e.deltaY))
        }
        , {
            passive: !0
        }),
        t.addEventListener("contextmenu", e => e.preventDefault()),
        document.addEventListener("pointerlockchange", () => {
            var e;
            this.locked = document.pointerLockElement === this.canvas,
            this.locked || (this.mouseDown = [!1, !1, !1]),
            (e = this.onLockChange) == null || e.call(this, this.locked)
        }
        )
    }
    lock(t) {
        if (!this.locked)
            try {
                const e = this.canvas.requestPointerLock();
                e && typeof e.catch == "function" && e.catch( () => t == null ? void 0 : t())
            } catch {
                t == null || t()
            }
    }
    unlock() {
        document.pointerLockElement && document.exitPointerLock()
    }
    endFrame() {
        this.pressed.clear(),
        this.doubleTapped.clear(),
        this.mousePressed = [!1, !1, !1],
        this.dx = 0,
        this.dy = 0,
        this.wheel = 0
    }
}
class yg {
    constructor(t, e, n) {
        this.stack = t,
        this.mesh = e,
        this.age = 0,
        this.bob = Math.random() * Math.PI * 2,
        this.dead = !1,
        this.body = aa(.125, .25),
        this.pickupDelay = n
    }
}
class Sg {
    constructor(t, e, n) {
        this.mesh = t,
        this.pos = e,
        this.damage = n,
        this.vel = new I,
        this.stuck = !1,
        this.life = 0,
        this.dead = !1
    }
}
class bg {
    constructor(t, e) {
        this.atlas = t,
        this.icons = e,
        this.items = [],
        this.arrows = [],
        this.group = new wn,
        this.blockGeo = new Map,
        this.spriteMats = new Map,
        this.arrowGeo = new Rn(.06,.06,.55),
        this.arrowMat = new ks({
            color: 10123850
        }),
        this.blockMat = new ks({
            map: t.texture,
            alphaTest: .5
        })
    }
    makeItemMesh(t, e=1) {
        if (ce(t).isBlock) {
            const o = we(t);
            if (o.shape === "cube" || o.shape === "slab" || o.shape === "stairs" || o.shape === "cactus" || o.shape === "bed") {
                let a = this.blockGeo.get(t);
                if (!a) {
                    const c = o.shape === "slab" ? .5 : o.shape === "bed" ? .5625 : 1;
                    a = new Rn(1,c,1),
                    a.translate(0, c / 2 - .5, 0);
                    const h = a.attributes.uv
                      , u = [o.side, o.side, o.shape === "bed" ? "bed_head_top" : o.top, o.bottom, o.front ?? o.side, o.side];
                    for (let f = 0; f < 6; f++) {
                        const p = this.atlas.uv(u[f]);
                        for (let g = 0; g < 4; g++) {
                            const _ = g % 2
                              , m = g < 2 ? 1 : 0
                              , d = f < 2 || f >= 4 ? m ? c : 0 : m;
                            h.setXY(f * 4 + g, p[0] + (p[2] - p[0]) * _, p[1] + (p[3] - p[1]) * d)
                        }
                    }
                    this.blockGeo.set(t, a)
                }
                const l = new Pe(a,this.blockMat);
                return l.scale.setScalar(.25 * e),
                l
            }
        }
        let s = this.spriteMats.get(t);
        s || (s = new Kc({
            map: this.icons.texture(t),
            alphaTest: .5
        }),
        this.spriteMats.set(t, s));
        const r = new N0(s);
        return r.scale.setScalar(.4 * e),
        r
    }
    spawnItem(t, e, n, s, r, o=.4) {
        if (t.count <= 0)
            return;
        const a = this.makeItemMesh(t.id)
          , l = new yg({
            ...t
        },a,o);
        l.body.pos.set(e, n, s),
        r ? l.body.vel.copy(r) : l.body.vel.set((Math.random() - .5) * 2.5, 3 + Math.random() * 1.5, (Math.random() - .5) * 2.5),
        this.items.push(l),
        this.group.add(a)
    }
    spawnArrow(t, e, n) {
        const s = new Pe(this.arrowGeo,this.arrowMat)
          , r = new Sg(s,t.clone(),n);
        r.vel.copy(e),
        this.arrows.push(r),
        this.group.add(s)
    }
    update(t, e, n, s, r, o) {
        for (const a of this.items) {
            if (a.age += t,
            a.pickupDelay -= t,
            a.age > 300) {
                a.dead = !0;
                continue
            }
            const l = a.body
              , c = n.x - l.pos.x
              , h = n.y + .8 - l.pos.y
              , u = n.z - l.pos.z
              , f = Math.sqrt(c * c + h * h + u * u);
            if (a.pickupDelay <= 0 && f < 2.2 && (l.vel.x += c / f * 30 * t,
            l.vel.y += h / f * 30 * t,
            l.vel.z += u / f * 30 * t,
            f < .9)) {
                const p = s(a.stack);
                if (p <= 0) {
                    a.dead = !0;
                    continue
                }
                a.stack.count = p
            }
            l.vel.y -= (l.inWater ? 4 : 20) * t,
            l.inWater && (l.vel.y = Math.max(l.vel.y, -1) + 5 * t),
            Ur(e, l, t),
            l.onGround && (l.vel.x *= Math.pow(.02, t),
            l.vel.z *= Math.pow(.02, t)),
            Ae[e.getBlock(Math.floor(l.pos.x), Math.floor(l.pos.y + .1), Math.floor(l.pos.z))] && (l.pos.y += 4 * t),
            a.bob += t * 2.5,
            a.mesh.position.set(l.pos.x, l.pos.y + .18 + Math.sin(a.bob) * .06, l.pos.z),
            a.mesh.rotation.y = a.bob * .6
        }
        if (Math.random() < .1)
            for (let a = 0; a < this.items.length; a++)
                for (let l = a + 1; l < this.items.length; l++) {
                    const c = this.items[a]
                      , h = this.items[l];
                    c.dead || h.dead || !ti(c.stack, h.stack) || c.body.pos.distanceToSquared(h.body.pos) < .6 && c.stack.count + h.stack.count <= ce(c.stack.id).maxStack && (c.stack.count += h.stack.count,
                    h.dead = !0)
                }
        for (const a of this.items)
            a.dead && this.group.remove(a.mesh);
        this.items = this.items.filter(a => !a.dead);
        for (const a of this.arrows) {
            if (a.life += t,
            a.stuck) {
                a.life > 6 && (a.dead = !0);
                continue
            }
            if (a.life > 10) {
                a.dead = !0;
                continue
            }
            a.vel.y -= 18 * t;
            const l = 4;
            for (let c = 0; c < l; c++) {
                a.pos.addScaledVector(a.vel, t / l);
                const h = e.getBlock(Math.floor(a.pos.x), Math.floor(a.pos.y), Math.floor(a.pos.z));
                if (Ae[h]) {
                    a.stuck = !0,
                    a.life = 0;
                    break
                }
                if (r(a)) {
                    a.dead = !0;
                    break
                }
            }
            a.mesh.position.copy(a.pos),
            a.stuck || a.mesh.lookAt(a.pos.clone().add(a.vel))
        }
        for (const a of this.arrows)
            a.dead && this.group.remove(a.mesh);
        this.arrows = this.arrows.filter(a => !a.dead)
    }
    clear() {
        for (const t of this.items)
            this.group.remove(t.mesh);
        for (const t of this.arrows)
            this.group.remove(t.mesh);
        this.items = [],
        this.arrows = []
    }
}
const Eg = {
    cow: {
        hw: .45,
        h: 1.4,
        health: 10,
        speed: 1.4,
        hostile: !1,
        damage: 0,
        sound: "cow",
        legSwing: .7,
        drops: i => [[at.BEEF, 1 + Math.floor(i() * 3)], [at.LEATHER, Math.floor(i() * 3)]]
    },
    pig: {
        hw: .45,
        h: .9,
        health: 10,
        speed: 1.5,
        hostile: !1,
        damage: 0,
        sound: "pig",
        legSwing: .8,
        drops: i => [[at.PORKCHOP, 1 + Math.floor(i() * 3)]]
    },
    sheep: {
        hw: .45,
        h: 1.3,
        health: 8,
        speed: 1.4,
        hostile: !1,
        damage: 0,
        sound: "sheep",
        legSwing: .7,
        drops: i => [[M.WOOL, 1], [at.MUTTON, 1 + Math.floor(i() * 2)]]
    },
    chicken: {
        hw: .2,
        h: .7,
        health: 4,
        speed: 1.3,
        hostile: !1,
        damage: 0,
        sound: "chicken",
        legSwing: 1,
        drops: i => [[at.CHICKEN, 1], [at.FEATHER, Math.floor(i() * 3)]]
    },
    zombie: {
        hw: .3,
        h: 1.95,
        health: 20,
        speed: 2.4,
        hostile: !0,
        damage: 3,
        sound: "zombie",
        legSwing: .8,
        drops: i => [[at.ROTTEN_FLESH, Math.floor(i() * 3)], ...i() < .03 ? [[at.IRON_INGOT, 1]] : []]
    },
    skeleton: {
        hw: .3,
        h: 1.99,
        health: 20,
        speed: 2.5,
        hostile: !0,
        damage: 3,
        sound: "skeleton",
        legSwing: .8,
        drops: i => [[at.BONE, Math.floor(i() * 3)], [at.ARROW, Math.floor(i() * 3)]]
    },
    creeper: {
        hw: .3,
        h: 1.7,
        health: 20,
        speed: 2.1,
        hostile: !0,
        damage: 0,
        sound: "fuse",
        legSwing: .9,
        drops: i => [[at.GUNPOWDER, Math.floor(i() * 3)]]
    },
    spider: {
        hw: .7,
        h: .9,
        health: 16,
        speed: 3.1,
        hostile: !0,
        damage: 2,
        sound: "spider",
        legSwing: .5,
        drops: i => [[at.STRING, Math.floor(i() * 3)], ...i() < .1 ? [[at.FEATHER, 1]] : []]
    }
};
class Tg {
    constructor(t, e) {
        if (this.type = t,
        this.yaw = Math.random() * Math.PI * 2,
        this.headYaw = 0,
        this.state = "idle",
        this.stateTime = 0,
        this.hurtTime = 0,
        this.deathTime = 0,
        this.walk = 0,
        this.attackCd = 0,
        this.fuse = 0,
        this.soundTimer = 3 + Math.random() * 8,
        this.burnTimer = 0,
        this.fleeFrom = new I,
        this.moveDir = new Kt,
        this.removed = !1,
        this.persistent = !1,
        this.def = Eg[t],
        this.model = Xo(t),
        this.body = aa(this.def.hw, this.def.h),
        this.body.pos.copy(e),
        this.health = this.def.health,
        t === "zombie" && (this.model.parts.armR.rotation.x = -Math.PI / 2.2,
        this.model.parts.armL.rotation.x = -Math.PI / 2.2),
        t === "skeleton") {
            const n = new Pe(new Rn(.05,.7,.08),new ks({
                color: 8018480
            }));
            n.position.set(0, -.6, .12),
            this.model.parts.armL.add(n),
            this.model.parts.armL.rotation.x = -Math.PI / 2.4
        }
        if (t === "spider")
            for (let n = 0; n < 4; n++) {
                const s = (n - 1.5) * .35;
                this.model.parts["legR" + n].rotation.set(0, -s, -.5),
                this.model.parts["legL" + n].rotation.set(0, s, .5)
            }
    }
    get alive() {
        return this.state !== "dead"
    }
}
const Lo = new I;
class wg {
    constructor() {
        this.mobs = [],
        this.group = new wn,
        this.spawnTimer = 0
    }
    add(t, e) {
        const n = new Tg(t,e);
        return this.mobs.push(n),
        this.group.add(n.model.root),
        n
    }
    clear() {
        for (const t of this.mobs)
            this.group.remove(t.model.root);
        this.mobs = []
    }
    raycast(t, e, n) {
        let s = null;
        for (const r of this.mobs) {
            if (!r.alive)
                continue;
            const o = r.body.pos
              , a = r.def.hw + .1
              , l = new ps(new I(o.x - a,o.y,o.z - a),new I(o.x + a,o.y + r.def.h,o.z + a))
              , h = new Fr(t,e).intersectBox(l, Lo);
            if (h) {
                const u = h.distanceTo(t);
                u <= n && (!s || u < s.dist) && (s = {
                    mob: r,
                    dist: u
                })
            }
        }
        return s
    }
    damage(t, e, n, s, r=1) {
        if (!t.alive || t.hurtTime > .35)
            return;
        t.health -= e,
        t.hurtTime = .5;
        const o = Lo.copy(t.body.pos).sub(n).setY(0).normalize();
        t.body.vel.x = o.x * 7 * r,
        t.body.vel.z = o.z * 7 * r,
        t.body.vel.y = 4.5,
        s.sound(t.type === "zombie" ? "zombie_hurt" : t.def.sound === "fuse" ? "hit" : t.def.sound, t.body.pos),
        s.sound("hit", t.body.pos),
        t.def.hostile || (t.state = "flee",
        t.stateTime = 5,
        t.fleeFrom.copy(n)),
        t.health <= 0 && (t.state = "dead",
        t.deathTime = 0,
        t.fuse = 0)
    }
    update(t, e) {
        for (const n of this.mobs)
            this.updateMob(n, t, e);
        for (const n of this.mobs)
            n.removed && this.group.remove(n.model.root);
        this.mobs = this.mobs.filter(n => !n.removed),
        this.spawnTimer -= t,
        this.spawnTimer <= 0 && (this.spawnTimer = 1,
        this.trySpawn(e))
    }
    lightAt(t, e, n) {
        const [s,r] = t.getLight(Math.floor(e.x), Math.floor(e.y + .5), Math.floor(e.z));
        return Math.max(s - Math.round((1 - n) * 11), r)
    }
    trySpawn(t, e=1) {
        const {world: n, playerPos: s} = t;
        let r = 0
          , o = 0;
        for (const a of this.mobs)
            a.alive && (a.def.hostile ? o++ : r++);
        for (let a = 0; a < e; a++) {
            if (r < 10 && Math.random() < .3) {
                const v = Math.random() * Math.PI * 2
                  , S = 22 + Math.random() * 26
                  , L = Math.floor(s.x + Math.cos(v) * S)
                  , A = Math.floor(s.z + Math.sin(v) * S)
                  , R = n.getChunk(Math.floor(L / tt), Math.floor(A / tt));
                if (R && R.sky) {
                    const K = n.surfaceY(L, A);
                    if (K > 0 && n.getBlock(L, K, A) === M.GRASS && n.getBlock(L, K + 1, A) === M.AIR && n.getBlock(L, K + 2, A) === M.AIR) {
                        const y = ["cow", "pig", "sheep", "chicken"]
                          , T = y[Math.floor(Math.random() * y.length)]
                          , U = 2 + Math.floor(Math.random() * 3);
                        for (let k = 0; k < U; k++) {
                            const G = L + Math.floor(Math.random() * 5) - 2
                              , P = A + Math.floor(Math.random() * 5) - 2
                              , O = n.surfaceY(G, P);
                            O > 0 && n.getBlock(G, O, P) === M.GRASS && !xh(n, G + .5 - .45, O + 1, P + .5 - .45, G + .95, O + 2.4, P + .95) && (this.add(T, new I(G + .5,O + 1,P + .5)),
                            r++)
                        }
                    }
                }
            }
            if (t.difficulty === 0)
                continue;
            const l = [0, 5, 10, 16][t.difficulty];
            if (o >= l)
                continue;
            const c = Math.random() * Math.PI * 2
              , h = 18 + Math.random() * 26
              , u = Math.floor(s.x + Math.cos(c) * h)
              , f = Math.floor(s.z + Math.sin(c) * h)
              , p = n.getChunk(Math.floor(u / tt), Math.floor(f / tt));
            if (!p || !p.sky)
                continue;
            const g = n.surfaceY(u, f);
            if (g < 2)
                continue;
            const _ = Math.random() < .5 ? g + 1 : Math.max(3, Math.floor(s.y + (Math.random() - .5) * 24));
            if (_ > g + 1 || !Ae[n.getBlock(u, _ - 1, f)] || n.getBlock(u, _, f) !== M.AIR || n.getBlock(u, _ + 1, f) !== M.AIR)
                continue;
            const m = new I(u + .5,_,f + .5);
            if (this.lightAt(n, m, t.daylight) > 7 || m.distanceTo(s) < 16)
                continue;
            const d = Math.random()
              , x = d < .36 ? "zombie" : d < .62 ? "skeleton" : d < .84 ? "creeper" : "spider";
            x === "spider" && (n.getBlock(u + 1, _, f) !== M.AIR || n.getBlock(u, _, f + 1) !== M.AIR) || (this.add(x, m),
            o++)
        }
    }
    updateMob(t, e, n) {
        const {world: s} = n
          , r = t.def
          , o = t.body.pos
          , a = Lo.copy(n.playerPos).sub(o)
          , l = a.length();
        if (!s.isLoaded(o.x, o.z)) {
            l > 160 && (t.removed = !0);
            return
        }
        if (r.hostile && (l > 80 || n.difficulty === 0)) {
            t.removed = !0;
            return
        }
        if (!r.hostile && l > 120) {
            t.removed = !0;
            return
        }
        if (t.hurtTime = Math.max(0, t.hurtTime - e),
        t.attackCd -= e,
        t.state === "dead") {
            if (t.deathTime += e,
            t.model.root.rotation.z = Math.min(1, t.deathTime / .4) * (Math.PI / 2),
            t.model.material.color.setRGB(1, .35, .35),
            t.deathTime > .9) {
                t.removed = !0;
                const U = o.clone().setY(o.y + .4);
                n.burst(U, [230, 230, 230], 14);
                for (const [k,G] of r.drops(Math.random))
                    G > 0 && n.dropItem(k, G, U)
            }
            t.body.vel.x *= .9,
            t.body.vel.z *= .9,
            t.body.vel.y -= 28 * e,
            Ur(s, t.body, e),
            this.place(t);
            return
        }
        let c = 0
          , h = 0
          , u = r.speed
          , f = !1;
        t.stateTime -= e;
        const p = n.playerAlive && n.playerTargetable;
        if (r.hostile) {
            if (p && l < (t.type === "spider" && n.daylight > .6 ? 0 : 20)) {
                t.state = "chase";
                const k = a.x / Math.max(.01, Math.hypot(a.x, a.z))
                  , G = a.z / Math.max(.01, Math.hypot(a.x, a.z))
                  , P = Math.hypot(a.x, a.z);
                if (t.yaw = Math.atan2(k, G),
                t.type === "skeleton") {
                    if (P < 6 ? (c = -k,
                    h = -G) : P > 11 ? (c = k,
                    h = G) : (c = -G * .5,
                    h = k * .5,
                    u *= .6),
                    t.attackCd <= 0 && P < 16 && this.lineOfSight(s, o.clone().setY(o.y + 1.6), n.playerEye)) {
                        t.attackCd = [3, 2.6, 2, 1.4][n.difficulty];
                        const O = o.clone().setY(o.y + 1.5)
                          , B = n.playerPos.clone().setY(n.playerPos.y + 1.1).sub(O)
                          , z = Math.hypot(B.x, B.z)
                          , Y = 22
                          , $ = new I(B.x,0,B.z).normalize().multiplyScalar(Y);
                        $.y = B.y / (z / Y) + .5 * 18 * (z / Y),
                        $.x += (Math.random() - .5) * (3 - n.difficulty),
                        $.z += (Math.random() - .5) * (3 - n.difficulty),
                        O.addScaledVector(new I(k,0,G), .5),
                        n.shootArrow(O, $, r.damage),
                        n.sound("bow", o)
                    }
                } else if (t.type === "creeper") {
                    if (P < 2.6 || t.fuse > 0 ? (t.fuse === 0 && n.sound("fuse", o),
                    t.fuse += e,
                    P > 7 && (t.fuse = Math.max(0, t.fuse - e * 3))) : (c = k,
                    h = G),
                    t.fuse >= 1.5) {
                        t.removed = !0,
                        n.explode(o.clone().setY(o.y + .8), 3);
                        return
                    }
                } else {
                    c = k,
                    h = G;
                    const O = t.type === "spider" ? 1.6 : 1.4;
                    if (P < O + r.hw && Math.abs(a.y) < 1.8 && t.attackCd <= 0) {
                        t.attackCd = 1;
                        const N = [0, .5, 1, 1.5][n.difficulty];
                        n.damagePlayer(Math.max(1, Math.round(r.damage * N + (n.difficulty === 1 ? .5 : 0))), t.type === "zombie" ? "Morto por um Zumbi" : "Morto por uma Aranha", o),
                        t.type === "zombie" && (t.model.parts.armR.rotation.x = -Math.PI / 1.8)
                    }
                    t.type === "spider" && P < 4 && P > 2 && t.body.onGround && Math.random() < e * 1.5 && (t.body.vel.y = 6,
                    t.body.vel.x += k * 4,
                    t.body.vel.z += G * 4)
                }
            } else
                t.fuse > 0 && (t.fuse = Math.max(0, t.fuse - e)),
                t.state === "chase" && (t.state = "idle",
                t.stateTime = 1),
                this.wander(t),
                t.state === "wander" && (c = Math.sin(t.yaw),
                h = Math.cos(t.yaw),
                u *= .4);
            if ((t.type === "zombie" || t.type === "skeleton") && n.daylight > .7 && !t.body.inWater) {
                const [k] = s.getLight(Math.floor(o.x), Math.floor(o.y + 1.7), Math.floor(o.z));
                k >= 15 && (t.burnTimer += e,
                Math.random() < e * 20 && n.flame(o.clone().add(new I((Math.random() - .5) * .6,Math.random() * 1.9,(Math.random() - .5) * .6))),
                t.burnTimer > 1 && (t.burnTimer = 0,
                t.health -= 1,
                t.hurtTime = .2,
                t.health <= 0 && (t.state = "dead",
                t.deathTime = 0)))
            }
        } else {
            if (t.state === "flee" && t.stateTime > 0) {
                const U = o.clone().sub(t.fleeFrom).setY(0);
                U.lengthSq() < .01 && U.set(Math.random() - .5, 0, Math.random() - .5),
                U.normalize(),
                Math.random() < e * 1.2 && t.fleeFrom.add(new I((Math.random() - .5) * 6,0,(Math.random() - .5) * 6)),
                t.yaw = Math.atan2(U.x, U.z),
                c = U.x,
                h = U.z,
                u *= 2.1
            } else
                t.state === "flee" && (t.state = "idle",
                t.stateTime = 2),
                this.wander(t),
                t.state === "wander" && (c = Math.sin(t.yaw),
                h = Math.cos(t.yaw));
            if ((c || h) && t.state === "wander") {
                const U = Math.floor(o.x + c * .9)
                  , k = Math.floor(o.z + h * .9)
                  , G = Math.floor(o.y);
                (!(Ae[s.getBlock(U, G - 1, k)] || Ae[s.getBlock(U, G - 2, k)] || Ae[s.getBlock(U, G, k)]) || s.getBlock(U, G - 1, k) === M.WATER) && (t.state = "idle",
                t.stateTime = 1,
                c = 0,
                h = 0,
                t.yaw += Math.PI * (.5 + Math.random()))
            }
        }
        t.soundTimer -= e,
        t.soundTimer <= 0 && (t.soundTimer = 6 + Math.random() * 12,
        t.type !== "creeper" && l < 20 && n.sound(r.sound, o));
        const g = t.body
          , _ = g.onGround ? 14 : 3;
        g.vel.x += (c * u - g.vel.x) * Math.min(1, _ * e),
        g.vel.z += (h * u - g.vel.z) * Math.min(1, _ * e),
        g.inWater ? (g.vel.y = Math.min(g.vel.y + 18 * e, 2.2),
        g.collidedH && (g.vel.y = 4)) : g.vel.y -= 28 * e,
        g.collidedH && g.onGround && (c || h) && (f = !0),
        t.type === "spider" && g.collidedH && (c || h) && (g.vel.y = 3),
        f && (g.vel.y = 8.2),
        g.vel.y = Math.max(g.vel.y, -60);
        const m = g.vel.y;
        Ur(s, g, e, .6),
        g.onGround && m < -18 && t.alive && (t.health -= Math.floor((-m - 16) / 3),
        t.health <= 0 && (t.state = "dead",
        t.deathTime = 0));
        const d = Math.hypot(g.vel.x, g.vel.z);
        t.walk += d * e * 3.2;
        const x = Math.sin(t.walk) * r.legSwing * Math.min(1, d / 1.5)
          , v = t.model.parts
          , S = ["legFR", "legBL", "legR"];
        for (const U of Object.keys(v))
            U.startsWith("leg") && t.type !== "spider" && (v[U].rotation.x = S.includes(U) ? x : -x);
        if (t.type === "spider")
            for (let U = 0; U < 4; U++) {
                const k = Math.sin(t.walk * 1.5 + U * 1.3) * .25 * Math.min(1, d);
                v["legR" + U].rotation.y = -(U - 1.5) * .35 + k,
                v["legL" + U].rotation.y = (U - 1.5) * .35 - k
            }
        if (t.type === "chicken") {
            const U = Math.abs(Math.sin(t.walk * 2)) * (g.onGround ? .2 : 1.2);
            v.wingR.rotation.z = U,
            v.wingL.rotation.z = -U
        }
        (t.type === "player" || t.type === "skeleton") && (v.armR.rotation.x = -x * .8),
        t.type === "zombie" && t.attackCd < .6 && (v.armR.rotation.x += (-Math.PI / 2.2 - v.armR.rotation.x) * Math.min(1, e * 6));
        const L = t.model.root.rotation.y;
        let A = t.yaw - L;
        for (; A > Math.PI; )
            A -= Math.PI * 2;
        for (; A < -Math.PI; )
            A += Math.PI * 2;
        t.model.root.rotation.y = L + A * Math.min(1, e * 8);
        const R = 1 + (t.type === "creeper" ? t.fuse * .12 + Math.sin(t.fuse * 30) * t.fuse * .02 : 0);
        t.model.root.scale.setScalar(R),
        this.lightAt(s, o, 1) / 15;
        const K = s.getLight(Math.floor(o.x), Math.floor(o.y + .5), Math.floor(o.z))
          , y = Math.max(K[0] / 15 * (.2 + .8 * n.daylight), K[1] / 15)
          , T = .08 + .92 * Math.pow(y, 1.3);
        t.hurtTime > .2 ? t.model.material.color.setRGB(1, .3, .3) : t.type === "creeper" && t.fuse > 0 && Math.sin(t.fuse * 25) > 0 ? t.model.material.color.setRGB(2, 2, 2) : t.model.material.color.setRGB(T, T, T),
        this.place(t)
    }
    wander(t) {
        t.stateTime > 0 || (t.state === "wander" ? (t.state = "idle",
        t.stateTime = 2 + Math.random() * 5) : (t.state = "wander",
        t.stateTime = 2 + Math.random() * 4,
        t.yaw = Math.random() * Math.PI * 2))
    }
    place(t) {
        t.model.root.position.copy(t.body.pos)
    }
    lineOfSight(t, e, n) {
        const s = n.clone().sub(e)
          , r = s.length();
        s.normalize();
        for (let o = 0; o < r; o += .4) {
            const a = e.clone().addScaledVector(s, o)
              , l = t.getBlock(Math.floor(a.x), Math.floor(a.y), Math.floor(a.z));
            if (Ae[l] && l !== M.GLASS)
                return !1
        }
        return !0
    }
    count(t) {
        return this.mobs.filter(e => e.alive && e.def.hostile === t).length
    }
    toJSON() {
        return this.mobs.filter(t => t.alive && !t.def.hostile).map(t => ({
            t: t.type,
            x: t.body.pos.x,
            y: t.body.pos.y,
            z: t.body.pos.z,
            h: t.health
        }))
    }
}
class Ag {
    constructor() {
        this.ctx = null,
        this.windGain = null,
        this.waterGain = null,
        this.caveGain = null,
        this.musicTimer = 20,
        this.volumes = {
            master: .8,
            sfx: 1,
            ambient: .6,
            music: .5
        },
        this.listener = {
            x: 0,
            y: 0,
            z: 0
        }
    }
    init() {
        if (this.ctx) {
            this.ctx.state === "suspended" && this.ctx.resume();
            return
        }
        try {
            this.ctx = new AudioContext
        } catch {
            return
        }
        const t = this.ctx;
        this.master = t.createGain(),
        this.master.connect(t.destination),
        this.sfx = t.createGain(),
        this.sfx.connect(this.master),
        this.amb = t.createGain(),
        this.amb.connect(this.master),
        this.music = t.createGain(),
        this.music.connect(this.master),
        this.applyVolumes();
        const e = t.sampleRate * 2;
        this.noiseBuf = t.createBuffer(1, e, t.sampleRate);
        const n = this.noiseBuf.getChannelData(0);
        for (let s = 0; s < e; s++)
            n[s] = Math.random() * 2 - 1;
        this.startAmbience()
    }
    applyVolumes() {
        this.ctx && (this.master.gain.value = this.volumes.master,
        this.sfx.gain.value = this.volumes.sfx,
        this.amb.gain.value = this.volumes.ambient,
        this.music.gain.value = this.volumes.music * .5)
    }
    noise(t, e, n, s, r, o=0, a, l=.005) {
        const c = this.ctx
          , h = c.createBufferSource();
        h.buffer = this.noiseBuf,
        h.loop = !0;
        const u = c.createBiquadFilter();
        u.type = e,
        u.frequency.value = n,
        u.Q.value = s;
        const f = c.createGain()
          , p = c.currentTime + o;
        return f.gain.setValueAtTime(1e-4, p),
        f.gain.exponentialRampToValueAtTime(r, p + l),
        f.gain.exponentialRampToValueAtTime(1e-4, p + t),
        h.connect(u),
        u.connect(f),
        f.connect(a ?? this.sfx),
        h.start(p, Math.random() * 1.5),
        h.stop(p + t + .05),
        u
    }
    tone(t, e, n, s, r=0, o, a) {
        const l = this.ctx
          , c = l.createOscillator();
        c.type = n;
        const h = l.currentTime + r;
        c.frequency.setValueAtTime(t, h),
        o && c.frequency.exponentialRampToValueAtTime(o, h + e);
        const u = l.createGain();
        return u.gain.setValueAtTime(1e-4, h),
        u.gain.exponentialRampToValueAtTime(s, h + .01),
        u.gain.exponentialRampToValueAtTime(1e-4, h + e),
        c.connect(u),
        u.connect(a ?? this.sfx),
        c.start(h),
        c.stop(h + e + .05),
        c
    }
    distVol(t, e=16) {
        if (!t)
            return 1;
        const n = Math.hypot(t.x - this.listener.x, t.y - this.listener.y, t.z - this.listener.z);
        return Math.max(0, 1 - n / e)
    }
    blockSound(t, e, n) {
        if (!this.ctx)
            return;
        const s = this.distVol(n) * (e === "step" ? .25 : e === "hit" ? .3 : .8);
        if (s <= .01)
            return;
        const r = e === "break" ? .22 : e === "place" ? .12 : .08
          , o = .85 + Math.random() * .3;
        switch (t) {
        case "stone":
            this.noise(r, "bandpass", 1800 * o, 1.2, s),
            this.noise(r * .6, "lowpass", 500, 1, s * .6);
            break;
        case "wood":
            this.noise(r, "bandpass", 600 * o, 3, s),
            this.tone(160 * o, r * .8, "triangle", s * .5);
            break;
        case "grass":
            this.noise(r * 1.1, "highpass", 2500 * o, .7, s * .7),
            this.noise(r, "lowpass", 900, 1, s * .4);
            break;
        case "sand":
            this.noise(r * 1.2, "highpass", 3500 * o, .5, s * .6);
            break;
        case "snow":
            this.noise(r * 1.1, "bandpass", 2800 * o, .8, s * .5);
            break;
        case "gravel":
            this.noise(r, "bandpass", 1100 * o, .8, s),
            this.noise(r * .5, "lowpass", 400, 1, s * .5, .03);
            break;
        case "glass":
            if (e === "break")
                for (let a = 0; a < 4; a++)
                    this.tone(2e3 + Math.random() * 2500, .15, "sine", s * .3, a * .025);
            else
                this.noise(r, "bandpass", 3e3, 2, s * .5);
            break;
        case "cloth":
            this.noise(r, "lowpass", 700 * o, .7, s * .8);
            break
        }
    }
    play(t, e, n=1) {
        if (!this.ctx)
            return;
        const s = this.distVol(e, 24) * n;
        if (s <= .01)
            return;
        const r = () => .9 + Math.random() * .2;
        switch (t) {
        case "click":
            this.tone(800, .05, "square", .15),
            this.tone(1200, .04, "square", .08, .02);
            break;
        case "hover":
            this.tone(1400, .03, "sine", .03);
            break;
        case "pop":
            this.tone(600 * r(), .09, "sine", .25 * s, 0, 1400);
            break;
        case "hurt":
            this.tone(320, .18, "sawtooth", .25 * s, 0, 140),
            this.noise(.12, "lowpass", 900, 1, .2 * s);
            break;
        case "eat":
            for (let o = 0; o < 3; o++)
                this.noise(.07, "bandpass", 1500 + Math.random() * 1e3, 1.5, .4 * s, o * .11);
            break;
        case "burp":
            this.tone(140, .25, "sawtooth", .2 * s, 0, 90);
            break;
        case "jump":
            this.noise(.08, "lowpass", 600, 1, .12 * s);
            break;
        case "land":
            this.noise(.12, "lowpass", 400, 1, .3 * s);
            break;
        case "swim":
            this.noise(.25, "bandpass", 900 * r(), .6, .15 * s);
            break;
        case "splash":
            this.noise(.5, "bandpass", 1200, .5, .4 * s, 0, void 0, .02);
            break;
        case "attack":
            this.noise(.08, "bandpass", 2400, 1, .2 * s);
            break;
        case "hit":
            this.tone(180, .1, "square", .22 * s, 0, 90),
            this.noise(.08, "lowpass", 1400, 1, .25 * s);
            break;
        case "craft":
            this.tone(500, .06, "triangle", .2),
            this.tone(750, .08, "triangle", .18, .06);
            break;
        case "open":
            this.noise(.15, "lowpass", 500, 1, .3),
            this.tone(220, .1, "triangle", .15);
            break;
        case "close":
            this.noise(.1, "lowpass", 400, 1, .25),
            this.tone(180, .08, "triangle", .12);
            break;
        case "door":
            this.noise(.18, "bandpass", 500, 2, .4 * s),
            this.tone(240, .12, "triangle", .2 * s, .03, 180);
            break;
        case "chest":
            this.noise(.25, "bandpass", 350, 2, .4 * s),
            this.tone(200, .2, "sawtooth", .08 * s, 0, 150);
            break;
        case "fizz":
            this.noise(.3, "highpass", 3e3, .5, .2 * s);
            break;
        case "levelup":
            [523, 659, 784].forEach( (o, a) => this.tone(o, .18, "triangle", .15, a * .08));
            break;
        case "break_tool":
            this.noise(.2, "highpass", 2500, 1, .4),
            this.tone(900, .2, "square", .15, 0, 300);
            break;
        case "explode":
            {
                this.noise(1.6, "lowpass", 600, .6, 1 * s, 0, void 0, .01),
                this.noise(.6, "lowpass", 2e3, .6, .5 * s),
                this.tone(70, 1, "sine", .6 * s, 0, 30);
                break
            }
        case "fuse":
            this.noise(1.4, "highpass", 2200, .6, .45 * s, 0, void 0, .3);
            break;
        case "bow":
            this.noise(.12, "bandpass", 1500, 2, .3 * s),
            this.tone(300, .1, "triangle", .15 * s, 0, 600);
            break;
        case "arrow_hit":
            this.noise(.06, "bandpass", 2e3, 2, .3 * s);
            break;
        case "zombie":
            {
                this.tone(110 * r(), .8, "sawtooth", .12 * s, 0, 80),
                this.noise(.7, "bandpass", 400, 3, .1 * s);
                break
            }
        case "zombie_hurt":
            this.tone(160, .25, "sawtooth", .18 * s, 0, 90);
            break;
        case "skeleton":
            for (let o = 0; o < 4; o++)
                this.noise(.03, "bandpass", 2500 + o * 300, 4, .2 * s, o * .06);
            break;
        case "spider":
            this.noise(.4, "bandpass", 700, 6, .2 * s),
            this.noise(.3, "highpass", 3500, 1, .08 * s, .1);
            break;
        case "cow":
            this.tone(120 * r(), .9, "sawtooth", .16 * s, 0, 95),
            this.noise(.8, "bandpass", 500, 4, .06 * s);
            break;
        case "pig":
            for (let o = 0; o < 2; o++)
                this.tone(280 * r(), .12, "square", .1 * s, o * .16, 200);
            break;
        case "sheep":
            {
                const o = this.ctx
                  , a = this.tone(330 * r(), .6, "sawtooth", .1 * s)
                  , l = o.createOscillator()
                  , c = o.createGain();
                l.frequency.value = 12,
                c.gain.value = 25,
                l.connect(c),
                c.connect(a.frequency),
                l.start(),
                l.stop(o.currentTime + .7);
                break
            }
        case "chicken":
            for (let o = 0; o < 3; o++)
                this.tone(900 * r(), .06, "square", .06 * s, o * .09, 1300);
            break;
        case "bubble":
            this.tone(500 + Math.random() * 400, .08, "sine", .1 * s, 0, 1200);
            break;
        case "furnace":
            this.noise(.4, "lowpass", 300, 1, .15 * s);
            break
        }
    }
    loopNoise(t, e, n) {
        const s = this.ctx
          , r = s.createBufferSource();
        r.buffer = this.noiseBuf,
        r.loop = !0;
        const o = s.createBiquadFilter();
        o.type = t,
        o.frequency.value = e,
        o.Q.value = n;
        const a = s.createGain();
        return a.gain.value = 0,
        r.connect(o),
        o.connect(a),
        a.connect(this.amb),
        r.start(),
        {
            gain: a,
            filter: o
        }
    }
    startAmbience() {
        const t = this.loopNoise("lowpass", 420, .8);
        this.windGain = t.gain;
        const e = this.ctx.createOscillator();
        e.frequency.value = .07;
        const n = this.ctx.createGain();
        n.gain.value = 180,
        e.connect(n),
        n.connect(t.filter.frequency),
        e.start(),
        this.waterGain = this.loopNoise("bandpass", 900, .4).gain,
        this.caveGain = this.loopNoise("lowpass", 120, 4).gain
    }
    updateAmbience(t, e) {
        var s, r, o;
        if (!this.ctx)
            return;
        const n = this.ctx.currentTime;
        if ((s = this.windGain) == null || s.gain.setTargetAtTime(e.inGame ? .05 * e.outdoors : .02, n, .5),
        (r = this.waterGain) == null || r.gain.setTargetAtTime(e.inGame ? .04 * e.nearWater : 0, n, .5),
        (o = this.caveGain) == null || o.gain.setTargetAtTime(e.inGame ? .12 * e.cave : 0, n, .8),
        e.inGame && e.cave > .6 && Math.random() < t * .02 && this.tone(80 + Math.random() * 60, 2.5, "sine", .06, 0, 50 + Math.random() * 40, this.amb),
        e.inGame && e.night && e.outdoors > .5 && Math.random() < t * .05)
            for (let a = 0; a < 3; a++)
                this.tone(4200 + Math.random() * 300, .04, "sine", .015, a * .07, void 0, this.amb);
        this.musicTimer -= t,
        this.musicTimer <= 0 && (this.musicTimer = 60 + Math.random() * 90,
        this.playPhrase())
    }
    playPhrase() {
        if (!this.ctx || this.volumes.music <= 0)
            return;
        const t = this.ctx
          , e = [0, 2, 4, 7, 9, 12, 14, 16, 19]
          , n = [196, 220, 174.6, 261.6][Math.floor(Math.random() * 4)]
          , s = 10 + Math.floor(Math.random() * 10);
        let r = 0;
        for (let o = 0; o < s; o++) {
            const a = e[Math.floor(Math.random() * e.length)]
              , l = n * Math.pow(2, a / 12)
              , c = t.currentTime + r;
            for (const [h,u] of [[1, .09], [2, .025], [3, .01]]) {
                const f = t.createOscillator();
                f.type = "sine",
                f.frequency.value = l * h;
                const p = t.createGain();
                p.gain.setValueAtTime(1e-4, c),
                p.gain.exponentialRampToValueAtTime(u, c + .02),
                p.gain.exponentialRampToValueAtTime(1e-4, c + 2.8),
                f.connect(p),
                p.connect(this.music),
                f.start(c),
                f.stop(c + 3)
            }
            if (Math.random() < .35) {
                const h = n / 2 * Math.pow(2, e[Math.floor(Math.random() * 4)] / 12)
                  , u = t.createOscillator();
                u.type = "triangle",
                u.frequency.value = h;
                const f = t.createGain();
                f.gain.setValueAtTime(1e-4, c),
                f.gain.exponentialRampToValueAtTime(.05, c + .05),
                f.gain.exponentialRampToValueAtTime(1e-4, c + 3.5),
                u.connect(f),
                f.connect(this.music),
                u.start(c),
                u.stop(c + 3.6)
            }
            r += [.5, .75, 1, 1.5][Math.floor(Math.random() * 4)]
        }
    }
}
const Zt = new Ag;
function j(i, t={}, ...e) {
    const n = document.createElement(i);
    for (const [s,r] of Object.entries(t))
        r == null || r === !1 || (s === "class" ? n.className = r : s === "style" && typeof r == "object" ? Object.assign(n.style, r) : s.startsWith("on") && typeof r == "function" ? n.addEventListener(s.slice(2).toLowerCase(), r) : s === "text" ? n.textContent = r : s === "html" ? n.innerHTML = r : n.setAttribute(s, r === !0 ? "" : String(r)));
    for (const s of e.flat())
        s == null || s === !1 || n.append(typeof s == "string" ? document.createTextNode(s) : s);
    return n
}
function re(i, t, e={}) {
    const n = j("button", {
        class: `mc-btn${e.wide ? " wide" : ""}${e.small ? " small" : ""}`,
        title: e.title
    }, i);
    return e.disabled && (n.disabled = !0),
    n.addEventListener("mouseenter", () => {
        n.disabled || Zt.play("hover")
    }
    ),
    n.addEventListener("click", s => {
        s.stopPropagation(),
        !n.disabled && (Zt.init(),
        Zt.play("click"),
        t())
    }
    ),
    n
}
function Qn(i, t, e, n, s, r) {
    const o = j("div", {
        class: "mc-slider"
    })
      , a = j("span", {
        class: "mc-slider-label"
    }, i(s))
      , l = j("input", {
        type: "range",
        min: t,
        max: e,
        step: n,
        value: s
    });
    return l.addEventListener("input", () => {
        const c = Number(l.value);
        a.textContent = i(c),
        r(c)
    }
    ),
    l.addEventListener("change", () => Zt.play("click")),
    o.append(l, a),
    o
}
function lc(i) {
    const t = new Date(i)
      , e = n => String(n).padStart(2, "0");
    return `${e(t.getDate())}/${e(t.getMonth() + 1)}/${t.getFullYear()} ${e(t.getHours())}:${e(t.getMinutes())}`
}
const On = [M.OAK_PLANKS, M.BIRCH_PLANKS, M.SPRUCE_PLANKS]
  , ca = [M.COBBLE, M.MOSSY_COBBLE]
  , Rg = [at.COAL, at.CHARCOAL]
  , ha = []
  , me = (i, t, e, n=1) => ha.push({
    kind: "shaped",
    pattern: i,
    key: t,
    result: {
        id: e,
        count: n
    }
})
  , ui = (i, t, e=1) => ha.push({
    kind: "shapeless",
    ingredients: i,
    result: {
        id: t,
        count: e
    }
});
ui([M.OAK_LOG], M.OAK_PLANKS, 4);
ui([M.BIRCH_LOG], M.BIRCH_PLANKS, 4);
ui([M.SPRUCE_LOG], M.SPRUCE_PLANKS, 4);
me(["#", "#"], {
    "#": On
}, at.STICK, 4);
me(["##", "##"], {
    "#": On
}, M.CRAFTING_TABLE);
me(["###", "# #", "###"], {
    "#": On
}, M.CHEST);
me(["###", "# #", "###"], {
    "#": ca
}, M.FURNACE);
me(["C", "|"], {
    C: Rg,
    "|": at.STICK
}, M.TORCH, 4);
me(["##", "##", "##"], {
    "#": On
}, M.OAK_DOOR, 3);
me(["###", "PPP"], {
    "#": M.WOOL,
    P: On
}, M.BED);
me(["###"], {
    "#": On
}, M.OAK_SLAB, 6);
me(["###"], {
    "#": [M.STONE_BRICKS, M.STONE]
}, M.STONE_SLAB, 6);
me(["#  ", "## ", "###"], {
    "#": On
}, M.OAK_STAIRS, 4);
me(["#  ", "## ", "###"], {
    "#": ca
}, M.COBBLE_STAIRS, 4);
me(["##", "##"], {
    "#": M.STONE
}, M.STONE_BRICKS, 4);
me(["##", "##"], {
    "#": at.BRICK
}, M.BRICKS, 1);
me(["##", "##"], {
    "#": M.SAND
}, M.SANDSTONE, 1);
me(["##", "##"], {
    "#": at.STRING
}, M.WOOL, 1);
me(["###", "BBB", "###"], {
    "#": On,
    B: at.FEATHER
}, M.BOOKSHELF, 1);
me(["# #", " # "], {
    "#": On
}, at.BOWL, 4);
ui([M.BROWN_MUSHROOM, M.RED_MUSHROOM, at.BOWL], at.MUSHROOM_STEW);
me(["###", "###", "###"], {
    "#": at.COAL
}, M.COAL_BLOCK);
me(["###", "###", "###"], {
    "#": at.IRON_INGOT
}, M.IRON_BLOCK);
me(["###", "###", "###"], {
    "#": at.GOLD_INGOT
}, M.GOLD_BLOCK);
me(["###", "###", "###"], {
    "#": at.DIAMOND
}, M.DIAMOND_BLOCK);
ui([M.COAL_BLOCK], at.COAL, 9);
ui([M.IRON_BLOCK], at.IRON_INGOT, 9);
ui([M.GOLD_BLOCK], at.GOLD_INGOT, 9);
ui([M.DIAMOND_BLOCK], at.DIAMOND, 9);
me(["X", "#", "|"], {
    X: at.FLINT,
    "#": at.STICK,
    "|": at.FEATHER
}, at.ARROW, 4);
const Cg = {
    wooden: On,
    stone: ca,
    iron: at.IRON_INGOT,
    golden: at.GOLD_INGOT,
    diamond: at.DIAMOND
};
for (const i of zr) {
    const t = Cg[i.key];
    me(["XXX", " | ", " | "], {
        X: t,
        "|": at.STICK
    }, Sr(i.key, "pickaxe")),
    me(["XX", "X|", " |"], {
        X: t,
        "|": at.STICK
    }, Sr(i.key, "axe")),
    me(["X", "|", "|"], {
        X: t,
        "|": at.STICK
    }, Sr(i.key, "shovel")),
    me(["X", "X", "|"], {
        X: t,
        "|": at.STICK
    }, Sr(i.key, "sword"))
}
function cc(i, t) {
    return i === void 0 ? t === null : t === null ? !1 : Array.isArray(i) ? i.includes(t) : i === t
}
function Lg(i, t) {
    let e = t
      , n = t
      , s = -1
      , r = -1;
    const o = [];
    for (let c = 0; c < t; c++)
        for (let h = 0; h < t; h++) {
            const u = i[c * t + h];
            u !== null && (o.push(u),
            e = Math.min(e, h),
            s = Math.max(s, h),
            n = Math.min(n, c),
            r = Math.max(r, c))
        }
    if (o.length === 0)
        return null;
    const a = s - e + 1
      , l = r - n + 1;
    for (const c of ha)
        if (c.kind === "shapeless") {
            if (c.ingredients.length !== o.length)
                continue;
            const h = o.slice();
            let u = !0;
            for (const f of c.ingredients) {
                const p = h.findIndex(g => cc(f, g));
                if (p < 0) {
                    u = !1;
                    break
                }
                h.splice(p, 1)
            }
            if (u)
                return c
        } else {
            const h = c.pattern.length;
            if (Math.max(...c.pattern.map(f => f.length)) !== a || h !== l)
                continue;
            for (const f of [!1, !0]) {
                let p = !0;
                for (let g = 0; g < l && p; g++)
                    for (let _ = 0; _ < a && p; _++) {
                        const m = f ? a - 1 - _ : _
                          , d = c.pattern[g][m] ?? " "
                          , x = d === " " ? void 0 : c.key[d]
                          , v = i[(g + n) * t + (_ + e)];
                        cc(x, v) || (p = !1)
                    }
                if (p)
                    return c
            }
        }
    return null
}
const yh = 8;
function hc() {
    return {
        input: null,
        fuel: null,
        output: null,
        burn: 0,
        burnMax: 0,
        cook: 0
    }
}
function Pg(i) {
    if (!i.input)
        return !1;
    const t = ce(i.input.id).smelt;
    return t === void 0 ? !1 : i.output ? i.output.id === t && i.output.count < Sn(t) : !0
}
function Dg(i, t) {
    const e = Pg(i);
    if (i.burn <= 0 && e && i.fuel) {
        const n = ce(i.fuel.id).fuel;
        n && (i.burn = i.burnMax = n,
        i.fuel.count--,
        i.fuel.count <= 0 && (i.fuel = null))
    }
    if (i.burn > 0) {
        if (i.burn -= t,
        e) {
            if (i.cook += t,
            i.cook >= yh) {
                i.cook = 0;
                const n = ce(i.input.id).smelt;
                i.input.count--,
                i.input.count <= 0 && (i.input = null),
                i.output ? i.output.count++ : i.output = {
                    id: n,
                    count: 1
                }
            }
        } else
            i.cook = 0;
        i.burn < 0 && (i.burn = 0)
    } else
        i.cook > 0 && (i.cook = Math.max(0, i.cook - t * 2));
    return i.burn > 0
}
function uc() {
    return new Array(27).fill(null)
}
function br(i) {
    return i && typeof i.id == "number" && typeof i.count == "number" && i.count > 0 ? {
        id: i.id,
        count: i.count,
        dmg: typeof i.dmg == "number" ? i.dmg : void 0
    } : null
}
const fc = [{
    key: "building",
    name: "Construção",
    icon: 28
}, {
    key: "nature",
    name: "Natureza",
    icon: 1
}, {
    key: "wood",
    name: "Madeira",
    icon: 11
}, {
    key: "ores",
    name: "Minérios",
    icon: 23
}, {
    key: "decoration",
    name: "Decoração",
    icon: 40
}, {
    key: "utility",
    name: "Utilidades",
    icon: 32
}, {
    key: "tools",
    name: "Ferramentas",
    icon: 316
}, {
    key: "food",
    name: "Comida",
    icon: 266
}, {
    key: "materials",
    name: "Materiais",
    icon: 259
}, {
    key: "search",
    name: "Buscar",
    icon: 280
}, {
    key: "inventory",
    name: "Inventário",
    icon: 34
}];
class Ig {
    constructor(t, e) {
        this.host = t,
        this.cursor = null,
        this.kind = null,
        this.refs = [],
        this.slotEls = [],
        this.grid = [],
        this.gridSize = 2,
        this.furnace = null,
        this.chest = null,
        this.player = null,
        this.creativeTab = "building",
        this.search = "",
        this.progressEls = {},
        this.mouse = {
            x: 0,
            y: 0
        },
        this.onClose = null,
        this.el = j("div", {
            class: "container-backdrop hidden"
        }),
        this.cursorEl = j("div", {
            class: "cursor-stack hidden"
        }),
        this.tooltip = j("div", {
            class: "mc-tooltip hidden"
        }),
        e.append(this.el, this.cursorEl, this.tooltip),
        window.addEventListener("mousemove", n => {
            this.mouse.x = n.clientX,
            this.mouse.y = n.clientY,
            this.cursorEl.style.left = n.clientX - 24 + "px",
            this.cursorEl.style.top = n.clientY - 24 + "px",
            this.tooltip.style.left = n.clientX + 14 + "px",
            this.tooltip.style.top = n.clientY - 30 + "px"
        }
        ),
        this.el.addEventListener("mousedown", n => {
            n.target === this.el && this.cursor && (n.button === 0 ? (this.host.dropStack(this.cursor),
            this.cursor = null) : n.button === 2 && (this.host.dropStack({
                ...this.cursor,
                count: 1
            }),
            this.cursor.count--,
            this.cursor.count <= 0 && (this.cursor = null)),
            this.refresh())
        }
        ),
        this.el.addEventListener("contextmenu", n => n.preventDefault())
    }
    get open() {
        return this.kind !== null
    }
    openWindow(t, e, n) {
        this.kind = t,
        this.player = e,
        this.furnace = (n == null ? void 0 : n.furnace) ?? null,
        this.chest = (n == null ? void 0 : n.chest) ?? null,
        this.gridSize = t === "crafting" ? 3 : 2,
        this.grid = new Array(this.gridSize * this.gridSize).fill(null),
        this.build(),
        this.el.classList.remove("hidden"),
        Zt.play("open")
    }
    close() {
        var e;
        if (!this.kind || !this.player)
            return;
        const t = n => {
            if (!n)
                return;
            const s = this.player.inv.add(n);
            s > 0 && this.host.dropStack({
                ...n,
                count: s
            })
        }
        ;
        this.grid.forEach(t),
        this.grid = [],
        t(this.cursor),
        this.cursor = null,
        this.kind = null,
        this.el.classList.add("hidden"),
        this.el.innerHTML = "",
        this.cursorEl.classList.add("hidden"),
        this.tooltip.classList.add("hidden"),
        Zt.play("close"),
        (e = this.onClose) == null || e.call(this)
    }
    invRefs(t, e, n) {
        const s = this.player.inv
          , r = [];
        for (let o = e; o < n; o++)
            r.push({
                get: () => s.slots[o],
                set: a => {
                    s.slots[o] = a
                }
                ,
                section: t
            });
        return r
    }
    slotEl(t, e="") {
        const n = this.refs.length;
        this.refs.push(t);
        const s = j("div", {
            class: "slot " + e
        });
        return s.addEventListener("mousedown", r => {
            r.preventDefault(),
            r.stopPropagation(),
            this.click(n, r.button, r.shiftKey)
        }
        ),
        s.addEventListener("mouseenter", () => this.showTooltip(t.get())),
        s.addEventListener("mouseleave", () => this.tooltip.classList.add("hidden")),
        this.slotEls.push(s),
        s
    }
    row(t, e="") {
        return j("div", {
            class: "slot-row " + e
        }, t.map(n => this.slotEl(n)))
    }
    playerSections() {
        return [j("div", {
            class: "win-label"
        }, "Inventário"), this.row(this.invRefs("main", 9, 18)), this.row(this.invRefs("main", 18, 27)), this.row(this.invRefs("main", 27, 36)), j("div", {
            class: "gap"
        }), this.row(this.invRefs("hotbar", 0, 9))]
    }
    gridRefs() {
        return this.grid.map( (t, e) => ({
            get: () => this.grid[e],
            set: n => {
                this.grid[e] = n
            }
            ,
            section: "grid"
        }))
    }
    resultRef() {
        return {
            section: "result",
            output: !0,
            get: () => {
                const t = Lg(this.grid.map(e => e ? e.id : null), this.gridSize);
                return t ? {
                    ...t.result
                } : null
            }
            ,
            set: () => {}
        }
    }
    consumeGrid() {
        for (let t = 0; t < this.grid.length; t++) {
            const e = this.grid[t];
            e && (e.count--,
            e.count <= 0 && (this.grid[t] = null))
        }
        this.host.onCraft()
    }
    build() {
        this.refs = [],
        this.slotEls = [],
        this.progressEls = {},
        this.el.innerHTML = "";
        const t = j("div", {
            class: "mc-window"
        })
          , e = this.kind;
        if (e === "inventory") {
            const n = j("canvas", {
                class: "player-preview",
                width: 64,
                height: 128
            });
            this.drawPlayer(n);
            const s = this.gridRefs();
            t.append(j("div", {
                class: "win-top"
            }, j("div", {
                class: "preview-box"
            }, n), j("div", {
                class: "craft-area"
            }, j("div", {
                class: "win-label"
            }, "Fabricação"), j("div", {
                class: "craft-row"
            }, j("div", {
                class: "grid grid2"
            }, s.map(r => this.slotEl(r))), j("div", {
                class: "arrow"
            }), this.slotEl(this.resultRef(), "big")))), ...this.playerSections())
        } else if (e === "crafting") {
            const n = this.gridRefs();
            t.append(j("div", {
                class: "win-label"
            }, "Bancada de Trabalho"), j("div", {
                class: "craft-row center"
            }, j("div", {
                class: "grid grid3"
            }, n.map(s => this.slotEl(s))), j("div", {
                class: "arrow"
            }), this.slotEl(this.resultRef(), "big")), ...this.playerSections())
        } else if (e === "furnace") {
            const n = this.furnace
              , s = (a, l, c=!1) => ({
                section: "furnace-" + a,
                get: () => n[a],
                set: h => {
                    n[a] = h
                }
                ,
                accept: l,
                output: c
            })
              , r = j("div", {
                class: "flame"
            }, j("div", {
                class: "flame-fill"
            }))
              , o = j("div", {
                class: "arrow progress"
            }, j("div", {
                class: "arrow-fill"
            }));
            this.progressEls = {
                arrow: o.firstChild,
                flame: r.firstChild
            },
            t.append(j("div", {
                class: "win-label"
            }, "Fornalha"), j("div", {
                class: "furnace-area"
            }, j("div", {
                class: "furnace-col"
            }, this.slotEl(s("input", a => ce(a.id).smelt !== void 0 || !0)), r, this.slotEl(s("fuel", a => !!ce(a.id).fuel))), o, this.slotEl(s("output", void 0, !0), "big")), ...this.playerSections())
        } else if (e === "chest") {
            const n = this.chest
              , s = n.map( (r, o) => ({
                section: "chest",
                get: () => n[o],
                set: a => {
                    n[o] = a
                }
            }));
            t.append(j("div", {
                class: "win-label"
            }, "Baú"), this.row(s.slice(0, 9)), this.row(s.slice(9, 18)), this.row(s.slice(18, 27)), j("div", {
                class: "gap"
            }), ...this.playerSections())
        } else if (e === "creative") {
            t.classList.add("creative");
            const n = j("div", {
                class: "tabs"
            }, fc.map(r => {
                const o = j("img", {
                    src: this.host.icons.url(r.icon),
                    draggable: "false"
                })
                  , a = j("div", {
                    class: "tab" + (this.creativeTab === r.key ? " active" : ""),
                    title: r.name
                }, o);
                return a.addEventListener("mousedown", l => {
                    l.stopPropagation(),
                    this.creativeTab = r.key,
                    Zt.play("click"),
                    this.build()
                }
                ),
                a
            }
            ))
              , s = fc.find(r => r.key === this.creativeTab);
            if (t.append(n, j("div", {
                class: "win-label"
            }, s.name)),
            this.creativeTab === "inventory")
                t.append(...this.playerSections());
            else {
                if (this.creativeTab === "search") {
                    const a = j("input", {
                        class: "mc-input search",
                        placeholder: "Buscar item...",
                        value: this.search
                    });
                    a.addEventListener("input", () => {
                        this.search = a.value,
                        this.build();
                        const l = this.el.querySelector("input.search");
                        l == null || l.focus(),
                        l == null || l.setSelectionRange(l.value.length, l.value.length)
                    }
                    ),
                    a.addEventListener("mousedown", l => l.stopPropagation()),
                    t.append(a)
                }
                const r = q0().filter(a => {
                    const l = rn[a];
                    return this.creativeTab === "search" ? l.name.toLowerCase().includes(this.search.toLowerCase()) : l.category === this.creativeTab
                }
                )
                  , o = j("div", {
                    class: "palette"
                });
                for (const a of r) {
                    const l = {
                        section: "palette",
                        output: !0,
                        get: () => ({
                            id: a,
                            count: 1
                        }),
                        set: () => {}
                    };
                    o.append(this.slotEl(l))
                }
                t.append(o, j("div", {
                    class: "gap"
                }), j("div", {
                    class: "win-label small"
                }, "Clique num item para pegar. Clique na paleta segurando um item para apagá-lo."), this.row(this.invRefs("hotbar", 0, 9)))
            }
        }
        this.el.append(t),
        this.refresh()
    }
    drawPlayer(t) {
        const e = t.getContext("2d");
        e.imageSmoothingEnabled = !1;
        const n = mh("player").image
          , s = 4;
        e.drawImage(n, 8, 8, 8, 8, 4 * s, 0, 8 * s, 8 * s),
        e.drawImage(n, 20, 20, 8, 12, 4 * s, 8 * s, 8 * s, 12 * s),
        e.drawImage(n, 44, 20, 4, 12, 0, 8 * s, 4 * s, 12 * s),
        e.drawImage(n, 44, 20, 4, 12, 12 * s, 8 * s, 4 * s, 12 * s),
        e.drawImage(n, 4, 20, 4, 12, 4 * s, 20 * s, 4 * s, 12 * s),
        e.drawImage(n, 4, 20, 4, 12, 8 * s, 20 * s, 4 * s, 12 * s)
    }
    showTooltip(t) {
        if (!t || this.cursor) {
            this.tooltip.classList.add("hidden");
            return
        }
        const e = ce(t.id)
          , n = [j("div", {
            class: "tt-name"
        }, e.name)];
        e.tool && (n.push(j("div", {
            class: "tt-info"
        }, `Dano: ${e.tool.damage}  Velocidade: ${e.tool.speed}`)),
        n.push(j("div", {
            class: "tt-info"
        }, `Durabilidade: ${e.tool.durability - (t.dmg ?? 0)} / ${e.tool.durability}`))),
        e.food && n.push(j("div", {
            class: "tt-info food"
        }, `Restaura ${e.food.hunger / 2} de fome`)),
        e.fuel && n.push(j("div", {
            class: "tt-info"
        }, `Combustível: ${e.fuel}s`)),
        e.smelt !== void 0 && n.push(j("div", {
            class: "tt-info"
        }, `Fundível → ${ce(e.smelt).name}`)),
        this.tooltip.innerHTML = "",
        this.tooltip.append(...n),
        this.tooltip.classList.remove("hidden")
    }
    renderStack(t, e) {
        if (t.innerHTML = "",
        !e)
            return;
        t.append(j("img", {
            src: this.host.icons.url(e.id),
            draggable: "false"
        })),
        e.count > 1 && t.append(j("span", {
            class: "count"
        }, String(e.count)));
        const n = ce(e.id);
        if (n.tool && e.dmg) {
            const s = 1 - e.dmg / n.tool.durability
              , r = j("div", {
                class: "dur"
            }, j("div", {
                style: {
                    width: `${s * 100}%`,
                    background: `hsl(${s * 120},90%,45%)`
                }
            }));
            t.append(r)
        }
    }
    refresh() {
        this.kind && (this.refs.forEach( (t, e) => this.renderStack(this.slotEls[e], t.get())),
        this.renderStack(this.cursorEl, this.cursor),
        this.cursorEl.classList.toggle("hidden", !this.cursor),
        this.furnace && this.progressEls.arrow && (this.progressEls.arrow.style.width = `${this.furnace.cook / yh * 100}%`,
        this.progressEls.flame.style.height = `${this.furnace.burnMax > 0 ? this.furnace.burn / this.furnace.burnMax * 100 : 0}%`))
    }
    click(t, e, n) {
        const s = this.refs[t]
          , r = s.get();
        if (s.section === "palette") {
            this.cursor ? this.cursor = null : r && (n ? this.player.inv.add({
                id: r.id,
                count: Sn(r.id)
            }) : this.cursor = {
                id: r.id,
                count: e === 2 ? 1 : Sn(r.id)
            }),
            Zt.play("pop"),
            this.refresh();
            return
        }
        if (s.output) {
            if (!r)
                return;
            if (s.section === "result")
                if (n) {
                    let a = 64;
                    for (; a-- > 0; ) {
                        const l = s.get();
                        if (!l || !this.player.inv.canAdd(l))
                            break;
                        this.player.inv.add(l),
                        this.consumeGrid()
                    }
                } else
                    this.cursor ? ti(this.cursor, r) && this.cursor.count + r.count <= Sn(r.id) && (this.cursor.count += r.count,
                    this.consumeGrid()) : (this.cursor = Mh(r),
                    this.consumeGrid());
            else if (n) {
                const a = this.player.inv.add(r);
                s.set(a > 0 ? {
                    ...r,
                    count: a
                } : null)
            } else if (!this.cursor)
                this.cursor = r,
                s.set(null);
            else if (ti(this.cursor, r)) {
                const a = Math.min(r.count, Sn(r.id) - this.cursor.count);
                this.cursor.count += a,
                r.count -= a,
                r.count <= 0 && s.set(null)
            }
            this.refresh();
            return
        }
        if (n && r) {
            this.quickMove(s, r),
            this.refresh();
            return
        }
        const o = this.cursor;
        if (e === 0)
            if (!o)
                this.cursor = r,
                s.set(null);
            else if (!r)
                (!s.accept || s.accept(o)) && (s.set(o),
                this.cursor = null);
            else if (ti(o, r)) {
                const a = Math.min(o.count, Sn(r.id) - r.count);
                r.count += a,
                o.count -= a,
                o.count <= 0 && (this.cursor = null)
            } else
                (!s.accept || s.accept(o)) && (s.set(o),
                this.cursor = r);
        else if (e === 2)
            if (!o && r) {
                const a = Math.ceil(r.count / 2);
                this.cursor = {
                    ...r,
                    count: a
                },
                r.count -= a,
                r.count <= 0 && s.set(null)
            } else
                o && (r ? ti(o, r) && r.count < Sn(r.id) && (r.count++,
                o.count--) : (!s.accept || s.accept(o)) && (s.set({
                    ...o,
                    count: 1
                }),
                o.count--),
                o.count <= 0 && (this.cursor = null));
        this.refresh()
    }
    quickMove(t, e) {
        this.player.inv;
        const n = o => {
            for (const a of o) {
                const l = a.get();
                if (l && ti(l, e) && l.count < Sn(e.id)) {
                    const c = Math.min(e.count, Sn(e.id) - l.count);
                    if (l.count += c,
                    e.count -= c,
                    e.count <= 0)
                        break
                }
            }
            for (const a of o) {
                if (e.count <= 0)
                    break;
                !a.get() && (!a.accept || a.accept(e)) && (a.set({
                    ...e
                }),
                e.count = 0)
            }
            e.count <= 0 && t.set(null)
        }
          , s = this.refs
          , r = t.section;
        if (r === "grid" || r.startsWith("furnace") || r === "chest")
            n([...s.filter(o => o.section === "hotbar"), ...s.filter(o => o.section === "main")]);
        else if (this.kind === "chest")
            n(s.filter(o => o.section === "chest"));
        else if (this.kind === "furnace") {
            const o = ce(e.id);
            o.smelt !== void 0 ? n(s.filter(a => a.section === "furnace-input")) : o.fuel ? n(s.filter(a => a.section === "furnace-fuel")) : n(s.filter(a => a.section === (r === "hotbar" ? "main" : "hotbar")))
        } else
            n(s.filter(o => o.section === (r === "hotbar" ? "main" : "hotbar")))
    }
}
const Ug = "blockcraft-ai";
let Er = null;
function Og() {
    return Er || (Er = new Promise( (i, t) => {
        const e = indexedDB.open(Ug, 1);
        e.onupgradeneeded = () => {
            const n = e.result;
            n.objectStoreNames.contains("worlds") || n.createObjectStore("worlds", {
                keyPath: "id"
            }),
            n.objectStoreNames.contains("data") || n.createObjectStore("data", {
                keyPath: "id"
            })
        }
        ,
        e.onsuccess = () => i(e.result),
        e.onerror = () => t(e.error)
    }
    ),
    Er)
}
function ts(i, t, e) {
    return Og().then(n => new Promise( (s, r) => {
        const o = n.transaction(i, t)
          , a = o.objectStore(i)
          , l = e(a);
        o.oncomplete = () => s(l ? l.result : void 0),
        o.onerror = () => r(o.error),
        o.onabort = () => r(o.error)
    }
    ))
}
const ss = {
    async listWorlds() {
        try {
            return (await ts("worlds", "readonly", t => t.getAll()) ?? []).filter(t => t && typeof t.id == "string" && typeof t.seed == "number").sort( (t, e) => e.lastPlayed - t.lastPlayed)
        } catch (i) {
            return console.error("listWorlds failed", i),
            []
        }
    },
    async saveMeta(i) {
        await ts("worlds", "readwrite", t => t.put(i))
    },
    async loadData(i) {
        try {
            const t = await ts("data", "readonly", e => e.get(i));
            return !t || typeof t != "object" ? null : {
                id: i,
                version: t.version ?? 1,
                player: t.player ?? null,
                time: Number(t.time) || 1e3,
                day: Number(t.day) || 0,
                mods: t.mods && typeof t.mods == "object" ? t.mods : {},
                chests: t.chests ?? {},
                furnaces: t.furnaces ?? {},
                animals: Array.isArray(t.animals) ? t.animals : [],
                saplings: Array.isArray(t.saplings) ? t.saplings : []
            }
        } catch (t) {
            return console.error("loadData failed (corrupted?)", t),
            null
        }
    },
    async saveData(i) {
        await ts("data", "readwrite", t => t.put(i))
    },
    async deleteWorld(i) {
        await ts("worlds", "readwrite", t => t.delete(i)),
        await ts("data", "readwrite", t => t.delete(i))
    }
}
  , dc = {
    renderDistance: 6,
    fov: 75,
    sensitivity: 1,
    invertMouse: !1,
    quality: "fancy",
    smoothLighting: !0,
    clouds: !0,
    brightness: .3,
    master: .8,
    sfx: 1,
    ambient: .6,
    music: .5,
    viewBobbing: !0
}
  , Sh = "pg:minecraft:claude:settings:v1";
function Ng() {
    try {
        const i = localStorage.getItem(Sh);
        if (i)
            return {
                ...dc,
                ...JSON.parse(i)
            }
    } catch {}
    return {
        ...dc
    }
}
function Fg(i) {
    try {
        localStorage.setItem(Sh, JSON.stringify(i))
    } catch {}
}
const Ps = ["Pacífico", "Fácil", "Normal", "Difícil"]
  , pc = ["Feito por IA!", "Agora com creepers!", "100% procedural!", "Também experimente terra!", "Sem chaves de API!", "Blocos infinitos!", "Cuidado à noite!", "Pixelado com amor!", "Voxels!"];
class kg {
    constructor(t, e, n) {
        this.hooks = t,
        this.iconFactory = e,
        this.hotbarSlots = [],
        this.icons = {},
        this.lastHotbarKey = "",
        this.heldTimer = 0,
        this.toastTimer = 0,
        this.current = "",
        this.backTarget = "menu",
        this.root = document.getElementById("ui"),
        this.screen = j("div", {
            class: "screen hidden"
        }),
        this.hud = j("div", {
            class: "hud hidden"
        });
        for (const r of ["heart_full", "heart_half", "heart_empty", "food_full", "food_half", "food_empty", "bubble"])
            this.icons[r] = Q0(r);
        this.hearts = j("div", {
            class: "stat-row hearts"
        }),
        this.food = j("div", {
            class: "stat-row food"
        }),
        this.bubbles = j("div", {
            class: "stat-row bubbles"
        });
        const s = j("div", {
            class: "hotbar"
        });
        for (let r = 0; r < 9; r++) {
            const o = j("div", {
                class: "hb-slot"
            });
            this.hotbarSlots.push(o),
            s.append(o)
        }
        this.selectorEl = j("div", {
            class: "hb-selector"
        }),
        s.append(this.selectorEl),
        this.heldName = j("div", {
            class: "held-name"
        }),
        this.debug = j("div", {
            class: "debug hidden"
        }),
        this.toastEl = j("div", {
            class: "toast hidden"
        }),
        this.hurtOverlay = j("div", {
            class: "hurt-overlay"
        }),
        this.sleepOverlay = j("div", {
            class: "sleep-overlay"
        }),
        this.waterOverlay = j("div", {
            class: "water-overlay"
        }),
        this.hud.append(this.waterOverlay, this.hurtOverlay, this.sleepOverlay, j("div", {
            class: "crosshair"
        }), this.debug, this.toastEl, j("div", {
            class: "hud-bottom"
        }, this.heldName, j("div", {
            class: "stats"
        }, j("div", {
            class: "stats-left"
        }, this.hearts), j("div", {
            class: "stats-right"
        }, this.bubbles, this.food)), s)),
        this.root.append(this.hud, this.screen),
        this.containers = new Ig(n,this.root)
    }
    show(t, ...e) {
        this.current = t,
        this.screen.onclick = null,
        this.screen.className = "screen " + t,
        this.screen.innerHTML = "",
        this.screen.append(...e)
    }
    hideScreen() {
        this.current = "",
        this.screen.onclick = null,
        this.screen.className = "screen hidden",
        this.screen.innerHTML = ""
    }
    experimentLinks(t=!1) {
        const e = t ? {
            target: "_blank",
            rel: "noopener"
        } : {};
        return j("nav", {
            class: "experiment-links",
            "aria-label": "Sobre este experimento"
        }, j("a", {
            href: "/experimentos/minecraft-com-ia/",
            ...e
        }, "Comparar as versões ↗"), j("a", {
            href: "/experimentos/minecraft-com-ia/#video",
            ...e
        }, "Ver como foi criado ↗"))
    }
    showMainMenu() {
        const t = pc[Math.floor(Math.random() * pc.length)];
        this.show("menu", j("div", {
            class: "title-wrap"
        }, j("h1", {
            class: "game-title"
        }, j("span", {
            class: "t1"
        }, "MINECRAFT"), j("span", {
            class: "t2"
        }, "AI RECREATION")), j("div", {
            class: "splash"
        }, t)), j("div", {
            class: "menu-buttons"
        }, re("Um Jogador", () => this.showWorlds(), {
            wide: !0
        }), re("Multijogador", () => this.hooks.openMultiplayer(), {
            wide: !0
        }),
        {
            wide: !0,
            disabled: !0,
            title: "Multijogador não foi implementado"
        }), j("div", {
            class: "btn-pair"
        }, re("Opções...", () => {
            this.backTarget = "menu",
            this.showOptions()
        }
        ), re("Sair", () => this.showQuit()))), this.experimentLinks(), j("div", {
            class: "footer-left"
        }, "BlockCraft AI Challenge 1.0"), j("div", {
            class: "footer-right"
        }, "Projeto de fã. Não afiliado à Mojang/Microsoft.")
    }
    showQuit() {
        window.close(),
        this.show("dialog", j("div", {
            class: "panel-title"
        }, "Obrigado por jogar!"), j("p", {
            class: "dialog-text"
        }, "O navegador não permite fechar esta aba automaticamente. Você já pode fechá-la com segurança (seus mundos estão salvos)."), re("Voltar ao Menu", () => this.showMainMenu(), {
            wide: !0
        }))
    }
    async showWorlds() {
        const t = await ss.listWorlds();
        let e = t[0] ?? null;
        const n = j("div", {
            class: "world-list"
        })
          , s = re("Jogar Mundo", () => e && this.hooks.playWorld(e), {
            wide: !0
        })
          , r = re("Excluir", () => e && this.confirmDelete(e))
          , o = () => {
            n.innerHTML = "",
            t.length === 0 && n.append(j("div", {
                class: "empty"
            }, "Nenhum mundo ainda. Crie um novo!"));
            for (const a of t) {
                const l = j("div", {
                    class: "world-entry" + ((e == null ? void 0 : e.id) === a.id ? " selected" : "")
                }, a.thumb ? j("img", {
                    class: "thumb",
                    src: a.thumb
                }) : j("div", {
                    class: "thumb placeholder"
                }), j("div", {
                    class: "info"
                }, j("div", {
                    class: "wname"
                }, a.name), j("div", {
                    class: "wsub"
                }, `Criado: ${lc(a.created)}`), j("div", {
                    class: "wsub"
                }, `Jogado: ${lc(a.lastPlayed)}`), j("div", {
                    class: "wsub mode"
                }, `${a.mode === "creative" ? "Criativo" : "Sobrevivência"} • ${Ps[a.difficulty]} • ${a.type === "flat" ? "Plano" : "Padrão"} • Seed: ${a.seedText || a.seed}`)));
                l.addEventListener("click", () => {
                    e = a,
                    Zt.play("click"),
                    o()
                }
                ),
                l.addEventListener("dblclick", () => this.hooks.playWorld(a)),
                n.append(l)
            }
            s.disabled = !e,
            r.disabled = !e
        }
        ;
        o(),
        this.show("worlds", j("div", {
            class: "panel-title"
        }, "Selecionar Mundo"), n, j("div", {
            class: "world-buttons"
        }, j("div", {
            class: "btn-pair"
        }, s, re("Criar Novo Mundo", () => this.showCreate(), {
            wide: !0
        })), j("div", {
            class: "btn-pair"
        }, r, re("Cancelar", () => this.showMainMenu()))))
    }
    confirmDelete(t) {
        this.show("dialog", j("div", {
            class: "panel-title"
        }, "Tem certeza que deseja excluir este mundo?"), j("p", {
            class: "dialog-text"
        }, `"${t.name}" será perdido para sempre! (muito tempo!)`), j("div", {
            class: "btn-pair"
        }, re("Excluir", async () => {
            await ss.deleteWorld(t.id),
            this.showWorlds()
        }
        ), re("Cancelar", () => this.showWorlds())))
    }
    showCreate() {
        const t = {
            name: "Novo Mundo",
            seed: "",
            mode: "survival",
            difficulty: 2,
            type: "default"
        }
          , e = j("input", {
            class: "mc-input",
            value: t.name,
            maxlength: 32
        })
          , n = j("input", {
            class: "mc-input",
            placeholder: "Deixe em branco para seed aleatória"
        })
          , s = re("", () => {
            t.mode = t.mode === "survival" ? "creative" : "survival",
            l()
        }
        , {
            wide: !0
        })
          , r = re("", () => {
            t.difficulty = (t.difficulty + 1) % 4,
            l()
        }
        , {
            wide: !0
        })
          , o = re("", () => {
            t.type = t.type === "default" ? "flat" : "default",
            l()
        }
        , {
            wide: !0
        })
          , a = j("div", {
            class: "mode-desc"
        })
          , l = () => {
            s.textContent = `Modo de Jogo: ${t.mode === "survival" ? "Sobrevivência" : "Criativo"}`,
            r.textContent = `Dificuldade: ${Ps[t.difficulty]}`,
            o.textContent = `Tipo de Mundo: ${t.type === "default" ? "Padrão" : "Plano"}`,
            a.textContent = t.mode === "survival" ? "Procure recursos, fabrique ferramentas, ganhe vida e fome." : "Recursos ilimitados, voo livre e quebra instantânea."
        }
        ;
        l(),
        this.show("create", j("div", {
            class: "panel-title"
        }, "Criar Novo Mundo"), j("div", {
            class: "form"
        }, j("label", {}, "Nome do Mundo"), e, s, a, r, o, j("label", {}, "Seed para o gerador de mundos"), n), j("div", {
            class: "btn-pair"
        }, re("Criar Novo Mundo", () => this.hooks.createWorld({
            ...t,
            name: e.value.trim() || "Novo Mundo",
            seed: n.value
        })), re("Cancelar", () => this.showWorlds()))),
        setTimeout( () => e.focus(), 0)
    }
    showOptions() {
        const t = this.hooks.settings
          , e = () => this.hooks.applySettings()
          , n = (l, c, h) => {
            const u = re("", () => {
                h(!c()),
                u.textContent = `${l}: ${c() ? "SIM" : "NÃO"}`,
                e()
            }
            );
            return u.textContent = `${l}: ${c() ? "SIM" : "NÃO"}`,
            u
        }
          , s = this.hooks.currentDifficulty()
          , r = s !== null ? re(`Dificuldade: ${Ps[s]}`, () => {
            const l = ((this.hooks.currentDifficulty() ?? 2) + 1) % 4;
            this.hooks.setDifficulty(l),
            r.textContent = `Dificuldade: ${Ps[l]}`
        }
        ) : re("Dificuldade: (por mundo)", () => {}
        , {
            disabled: !0,
            title: "Definida ao criar o mundo; altere durante o jogo."
        });
        this.show("options", j("div", {
            class: "panel-title"
        }, "Opções"), j("div", {
            class: "options-grid"
        }, j("div", {
            class: "opt-head"
        }, "Vídeo"), j("div", {
            class: "opt-head"
        }, ""), Qn(l => `Distância de Renderização: ${l} chunks`, 2, 12, 1, t.renderDistance, l => {
            t.renderDistance = l,
            e()
        }
        ), Qn(l => `Campo de Visão: ${l}`, 50, 110, 1, t.fov, l => {
            t.fov = l,
            e()
        }
        ), re(`Gráficos: ${t.quality === "fancy" ? "Detalhados" : "Rápidos"}`, function() {}), n("Iluminação Suave/Sombras", () => t.smoothLighting, l => {
            t.smoothLighting = l
        }
        ), Qn(l => `Brilho: ${Math.round(l * 100)}%`, 0, 1, .05, t.brightness, l => {
            t.brightness = l,
            e()
        }
        ), n("Nuvens", () => t.clouds, l => {
            t.clouds = l
        }
        ), n("Balanço da Visão", () => t.viewBobbing, l => {
            t.viewBobbing = l
        }
        ), re("Tela Cheia", () => {
            document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch( () => {}
            )
        }
        ), j("div", {
            class: "opt-head"
        }, "Áudio"), j("div", {
            class: "opt-head"
        }, ""), Qn(l => `Volume Geral: ${Math.round(l * 100)}%`, 0, 1, .05, t.master, l => {
            t.master = l,
            e()
        }
        ), Qn(l => `Efeitos: ${Math.round(l * 100)}%`, 0, 1, .05, t.sfx, l => {
            t.sfx = l,
            e()
        }
        ), Qn(l => `Ambiente: ${Math.round(l * 100)}%`, 0, 1, .05, t.ambient, l => {
            t.ambient = l,
            e()
        }
        ), Qn(l => `Música: ${Math.round(l * 100)}%`, 0, 1, .05, t.music, l => {
            t.music = l,
            e()
        }
        ), j("div", {
            class: "opt-head"
        }, "Jogabilidade"), j("div", {
            class: "opt-head"
        }, ""), Qn(l => `Sensibilidade do Mouse: ${Math.round(l * 100)}%`, .2, 3, .05, t.sensitivity, l => {
            t.sensitivity = l,
            e()
        }
        ), n("Inverter Mouse", () => t.invertMouse, l => {
            t.invertMouse = l
        }
        ), r, re("Controles...", () => this.showControls())), re("Concluído", () => {
            e(),
            this.backTarget === "pause" ? this.showPause() : this.showMainMenu()
        }
        , {
            wide: !0
        }));
        const o = this.screen.querySelectorAll(".options-grid .mc-btn")[0]
          , a = o.cloneNode(!0);
        a.addEventListener("click", () => {
            Zt.play("click"),
            t.quality = t.quality === "fancy" ? "fast" : "fancy",
            a.textContent = `Gráficos: ${t.quality === "fancy" ? "Detalhados" : "Rápidos"}`,
            e()
        }
        ),
        o.replaceWith(a)
    }
    showControls() {
        const t = [["W A S D", "Movimentar"], ["Mouse", "Olhar"], ["Espaço", "Pular / Nadar / Subir (voo)"], ["Shift", "Agachar / Descer (voo)"], ["W duas vezes ou R", "Correr"], ["Espaço duas vezes", "Ativar/desativar voo (Criativo)"], ["Botão Esquerdo", "Quebrar / Atacar"], ["Botão Direito", "Colocar / Usar / Comer / Interagir"], ["E", "Inventário"], ["1–9 / Scroll", "Selecionar hotbar"], ["Q", "Soltar item"], ["Esc", "Pausar"], ["F3", "Informações de depuração"], ["F5", "Alternar câmera (1ª/3ª pessoa)"], ["F2", "Alternar HUD (modo screenshot)"], ["Shift + Clique", "Mover stack rapidamente (inventário)"], ["Botão Direito (inventário)", "Dividir stack / colocar 1"]];
        this.show("options", j("div", {
            class: "panel-title"
        }, "Controles"), j("table", {
            class: "controls"
        }, t.map( ([e,n]) => j("tr", {}, j("td", {
            class: "key"
        }, e), j("td", {}, n)))), j("p", {
            class: "dialog-text small"
        }, "Obs.: Ctrl não é usado para correr porque Ctrl+W fecha a aba do navegador."), re("Concluído", () => this.showOptions(), {
            wide: !0
        }))
    }
    showPause() {
        this.backTarget = "pause",
        this.show("pause", j("div", {
            class: "panel-title"
        }, "Menu do Jogo"), j("div", {
            class: "menu-buttons"
        }, re("Voltar ao Jogo", () => this.hooks.resume(), {
            wide: !0
        }), re("Opções...", () => this.showOptions(), {
            wide: !0
        }), re("Salvar e Sair para o Menu", () => this.hooks.saveAndQuit(), {
            wide: !0
        })), this.experimentLinks(!0))
    }
    showDeath(t, e) {
        this.show("death", j("div", {
            class: "death-title"
        }, "Você morreu!"), j("div", {
            class: "death-cause"
        }, t), j("div", {
            class: "death-score"
        }, e), j("div", {
            class: "menu-buttons"
        }, re("Renascer", () => this.hooks.respawn(), {
            wide: !0
        }), re("Menu Principal", () => this.hooks.saveAndQuit(), {
            wide: !0
        })))
    }
    showLoading(t, e) {
        this.current !== "loading" && this.show("loading", j("div", {
            class: "loading-text"
        }, t), j("div", {
            class: "progress"
        }, j("div", {
            class: "bar"
        }))),
        this.screen.querySelector(".loading-text").textContent = t,
        this.screen.querySelector(".bar").style.width = `${Math.round(e * 100)}%`
    }
    showResumeHint() {
        this.show("resume", j("div", {
            class: "resume-hint"
        }, "Clique para continuar")),
        this.screen.onclick = () => {
            this.screen.onclick = null,
            this.hooks.resume()
        }
    }
    setHudVisible(t) {
        this.hud.classList.toggle("hidden", !t)
    }
    updateHud(t, e) {
        const n = t.inv
          , s = n.slots.slice(0, 9).map(a => a ? `${a.id}:${a.count}:${a.dmg ?? 0}` : "-").join("|");
        if (s !== this.lastHotbarKey) {
            this.lastHotbarKey = s;
            for (let a = 0; a < 9; a++)
                this.containers.renderStack(this.hotbarSlots[a], n.slots[a])
        }
        this.selectorEl.style.transform = `translateX(${n.selected * 40}px)`;
        const r = t.mode === "survival";
        this.hearts.style.visibility = r ? "visible" : "hidden",
        this.food.style.visibility = r ? "visible" : "hidden",
        r && (this.renderRow(this.hearts, t.health, "heart", t.hurtTimer > 0),
        this.renderRow(this.food, t.hunger, "food", !1, !0));
        const o = r && (t.body.headInWater || t.air < 15);
        if (this.bubbles.style.display = o ? "flex" : "none",
        o) {
            const a = Math.ceil(t.air / 15 * 10)
              , l = "b" + a;
            if (this.bubbles.dataset.k !== l) {
                this.bubbles.dataset.k = l,
                this.bubbles.innerHTML = "";
                for (let c = 0; c < a; c++)
                    this.bubbles.append(j("img", {
                        src: this.icons.bubble
                    }))
            }
        }
        this.hurtOverlay.style.opacity = String(Math.min(.45, t.hurtTimer * 1.1)),
        this.heldTimer -= e,
        this.heldName.style.opacity = String(Math.max(0, Math.min(1, this.heldTimer))),
        this.toastTimer -= e,
        this.toastTimer <= 0 && this.toastEl.classList.add("hidden")
    }
    renderRow(t, e, n, s, r=!1) {
        const o = `${n}${e}${s}`;
        if (t.dataset.k !== o) {
            t.dataset.k = o,
            t.innerHTML = "";
            for (let a = 0; a < 10; a++) {
                const l = e - a * 2
                  , c = l >= 2 ? `${n}_full` : l === 1 ? `${n}_half` : `${n}_empty`
                  , h = j("img", {
                    src: this.icons[c]
                });
                (e <= 4 || s) && n === "heart" && (h.style.transform = `translateY(${Math.round((Math.random() - .5) * 3)}px)`),
                t.append(h)
            }
            r && (t.style.flexDirection = "row-reverse")
        }
    }
    showHeldName(t) {
        if (t === null) {
            this.heldTimer = 0;
            return
        }
        this.heldName.textContent = ce(t).name,
        this.heldTimer = 2
    }
    toast(t, e=3) {
        this.toastEl.textContent = t,
        this.toastEl.classList.remove("hidden"),
        this.toastTimer = e
    }
    setDebug(t) {
        this.debug.classList.toggle("hidden", t === null),
        t !== null && (this.debug.textContent = t)
    }
    setSleep(t) {
        this.sleepOverlay.style.opacity = String(t)
    }
    setUnderwater(t) {
        this.waterOverlay.style.opacity = t ? "1" : "0"
    }
}
const Cs = (i, t, e) => `${i},${t},${e}`
  , Bg = Number(new URLSearchParams(location.search).get("timeScale")) || 1;
  const MULTIPLAYER_SERVER_URL = "http://localhost:3000";
class zg {
    constructor(t) {
        this.multiplayerWorldId = null;
        this.multiplayerRoomCode = null;
        this.multiplayerJoining = false;
        this.multiplayerMoveTimer = 0;
        this.remotePlayers = new Map();
        this.canvas = t,
        this.scene = new Nl,
        this.handScene = new Nl,
        this.handCamera = new fn(70,1,.01,10),
        this.sky = new ag,
        this.particles = new lg,
        this.mobs = new wg,
        this.world = null,
        this.player = new ac,
        this.settings = Ng(),
        this.state = "menu",
        this.meta = null,
        this.difficulty = 2,
        this.ticks = 1e3,
        this.day = 0,
        this.chests = new Map,
        this.furnaces = new Map,
        this.saplings = new Map,
        this.elapsed = 0,
        this.last = performance.now(),
        this.fps = 0,
        this.fpsAcc = 0,
        this.fpsFrames = 0,
        this.mining = null,
        this.crackStage = -1,
        this.armGroup = new wn,
        this.heldObj = null,
        this.heldId = -1,
        this.swing = 1,
        this.swingSpeed = 4,
        this.attackCd = 0,
        this.placeCd = 0,
        this.eatTime = 0,
        this.showDebug = !1,
        this.hudHidden = !1,
        this.thirdPerson = !1,
        this.autosave = 60,
        this.loadingNeedsPlace = !1,
        this.loadingStart = 0,
        this.sleepT = -1,
        this.fovCur = 75,
        this.furnaceFxT = 0,
        this.hurtTilt = 0,
        this.panoramaAngle = 0,
        this.openFurnaceKey = null,
        this.ambient = new $l(16777215,.75),
        this.sun = new Yl(16777215,.55),
        this.handLight = new $l(16777215,1),
        this.renderer = new qc({
            canvas: t,
            antialias: !1,
            powerPreference: "high-performance"
        }),
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)),
        this.renderer.autoClear = !1,
        this.renderer.info.autoReset = !1,
        this.camera = new fn(75,1,.08,1e3),
        this.atlas = new j0,
        this.icons = new J0(this.atlas),
        this.uniforms = ng(this.atlas.texture),
        this.solidMat = ig(this.uniforms),
        this.waterMat = sg(this.uniforms),
        this.entities = new bg(this.atlas,this.icons),
        this.scene.add(this.sky.group, this.particles.points, this.entities.group, this.mobs.group, this.ambient, this.sun),
        this.sun.position.set(.3, 1, .5);
        const e = new B0(new Rn(1,1,1));
        this.outline = new k0(e,new $c({
            color: 0,
            transparent: !0,
            opacity: .55
        })),
        this.outline.visible = !1;
        const n = new Fs({
            map: this.atlas.texture,
            transparent: !0,
            depthWrite: !1,
            polygonOffset: !0,
            polygonOffsetFactor: -1,
            polygonOffsetUnits: -1
        });
        this.crack = new Pe(new Rn(1.002,1.002,1.002),n),
        this.crack.visible = !1,
        this.scene.add(this.outline, this.crack),
        this.arm = Xo("player", ["armR"]);
        const s = this.arm.parts.armR;
        s.position.set(0, 0, 0),
        this.armGroup.add(s),
        this.handScene.add(this.armGroup, this.handLight, new Yl(16777215,.4)),
        this.playerModel = Xo("player"),
        this.playerModel.root.visible = !1,
        this.scene.add(this.playerModel.root),
        this.input = new Mg(t);
        const r = {
            settings: this.settings,
            openMultiplayer: () => this.connectMultiplayer(),
            applySettings: () => this.applySettings(),
            playWorld: o => this.playWorld(o),
            createWorld: o => this.createWorld(o),
            resume: () => this.resume(),
            saveAndQuit: () => this.saveAndQuit(),
            respawn: () => this.respawn(),
            setDifficulty: o => {
                this.difficulty = o,
                this.meta && (this.meta.difficulty = o)
            }
            ,
            currentDifficulty: () => this.world ? this.difficulty : null
        };
        this.ui = new kg(r,this.icons,{
            icons: this.icons,
            dropStack: o => this.dropStack(o),
            onCraft: () => Zt.play("craft")
        }),
        this.ui.containers.onClose = () => {
            this.openFurnaceKey = null,
            this.state === "playing" && this.input.lock()
        }
        ,
        this.input.onLockChange = o => {
            !o && this.state === "playing" && !this.ui.containers.open && this.pause()
        }
        ,
        this.input.onKey = (o, a) => this.onKey(o, a),
        t.addEventListener("click", () => {
            Zt.init(),
            this.state === "playing" && !this.input.locked && !this.ui.containers.open && this.input.lock()
        }
        ),
        window.addEventListener("resize", () => this.resize()),
        window.addEventListener("beforeunload", () => {
            this.world && this.state !== "menu" && this.save(!1)
        }
        ),
        document.addEventListener("visibilitychange", () => {
            document.hidden && this.world && this.state === "playing" && this.save(!1)
        }
        ),
        this.resize(),
        this.applySettings(),
        this.mobCtx = this.makeMobCtx()
    }
    connectMultiplayer() {
        if (!window.io) {
            alert("Socket.IO não foi carregado. Verifique o HTML.");
            return;
        }

        if (this.multiplayerSocket?.connected) {
            alert("Você já está conectado ao servidor!");
            return;
        }

        this.multiplayerSocket = window.io(MULTIPLAYER_SERVER_URL, {
            transports: ["websocket"]
        });

        this.multiplayerSocket.on("connect", () => {
            this.multiplayerConnected = true;

            console.log("Conectado ao servidor multiplayer:", this.multiplayerSocket.id);

            if (this.state === "playing" && this.meta) {
                this.joinMultiplayerWorld();
            }
        });

        this.multiplayerSocket.on("connect_error", (error) => {
            this.multiplayerConnected = false;

            console.error("Erro de conexão multiplayer:", error);

            alert("Não foi possível conectar ao servidor multiplayer.");
        });

        this.multiplayerSocket.on("disconnect", (reason) => {
            this.multiplayerConnected = false;

            console.log("Desconectado do multiplayer:", reason);
        });

        this.multiplayerSocket.on("player:joined", (player) => {
            this.updateRemotePlayer(player);
        });

        this.multiplayerSocket.on("player:moved", (player) => {
            this.updateRemotePlayer(player);
        });

        this.multiplayerSocket.on("player:left", (data) => {
            this.removeRemotePlayer(data?.id ?? data);
        });

    }
    joinMultiplayerWorld() {
    if (
        !this.multiplayerSocket?.connected ||
        !this.meta ||
        this.state !== "playing" ||
        this.multiplayerWorldId ||
        this.multiplayerJoining
    ) {
        return;
    }

    const roomId = window.prompt(
        "Digite o código da sala multiplayer:",
        this.multiplayerRoomCode || this.meta.id
    );

    if (!roomId || !roomId.trim()) {
        return;
    }

    const playerName = window.prompt(
        "Digite seu nome no multiplayer:",
        "Jogador"
    );

    this.multiplayerRoomCode = roomId.trim();
    this.multiplayerJoining = true;

    this.multiplayerSocket.emit("world:join", {
        worldId: this.multiplayerRoomCode,
        name: (playerName || "Jogador").trim().slice(0, 20)
    }, (response) => {

        this.multiplayerJoining = false;

        if (!response?.success) {
            this.ui.toast("Não foi possível entrar na sala multiplayer.");
            return;
        }

        this.multiplayerWorldId = response.worldId;

        for (const player of response.players || []) {
            this.updateRemotePlayer(player);
        }

        console.log("Sala multiplayer:", response.worldId);

        this.ui.toast("Multiplayer conectado!");

        window.alert(
            "Você entrou na sala multiplayer!\n\nCódigo da sala: " +
            response.worldId
        );
    });
    }
    updateRemotePlayer(data) {
    const player = data?.player ?? data;

    if (!player || !player.id || player.id === this.multiplayerSocket?.id) {
        return;
    }

    const position = player.position || {};
    const rotation = player.rotation || {};

    let model = this.remotePlayers.get(player.id);

    if (!model) {
        model = Xo("player");

        model.root.visible = true;

        this.scene.add(model.root);

        this.remotePlayers.set(player.id, model);

        console.log("Jogador entrou:", player.name);
    }

    model.root.position.set(
        Number(position.x) || 0,
        Number(position.y) || 0,
        Number(position.z) || 0
    );

    model.root.rotation.y = (Number(rotation.yaw) || 0) + Math.PI;

    if (model.parts.head) {
        model.parts.head.rotation.x = -(Number(rotation.pitch) || 0);
    }
    }
    removeRemotePlayer(playerId) {
    const model = this.remotePlayers.get(playerId);

    if (!model) {
        return;
    }

    this.scene.remove(model.root);

    this.remotePlayers.delete(playerId);

    console.log("Jogador saiu:", playerId);
    }
    clearRemotePlayers() {
    for (const model of this.remotePlayers.values()) {
        this.scene.remove(model.root);
    }

    this.remotePlayers.clear();
    }
    updateMultiplayerMovement(t) {
    if (
        !this.multiplayerSocket?.connected ||
        !this.multiplayerWorldId ||
        this.state !== "playing"
    ) {
        return;
    }

    this.multiplayerMoveTimer += t;

    // Envia atualizações a cada 50 milissegundos.
    if (this.multiplayerMoveTimer < 0.05) {
        return;
    }

    this.multiplayerMoveTimer = 0;

    const player = this.player;

    this.multiplayerSocket.emit("player:move", {
        position: {
            x: player.body.pos.x,
            y: player.body.pos.y,
            z: player.body.pos.z
        },

        rotation: {
            yaw: player.yaw,
            pitch: player.pitch
        }
    });
    }
    start() {
        this.startPanorama(),
        this.ui.showMainMenu();
        const t = () => {
            requestAnimationFrame(t),
            this.frame()
        }
        ;
        t()
    }
    resize() {
        const t = window.innerWidth
          , e = window.innerHeight;
        this.renderer.setSize(t, e, !1),
        this.camera.aspect = t / e,
        this.camera.updateProjectionMatrix(),
        this.handCamera.aspect = t / e,
        this.handCamera.updateProjectionMatrix()
    }
    applySettings() {
        const t = this.settings;
        if (Fg(t),
        this.world && this.state !== "menu") {
            this.world.radius = t.renderDistance;
            const e = t.quality === "fancy";
            (this.world.fancy !== e || this.world.smooth !== t.smoothLighting) && (this.world.fancy = e,
            this.world.smooth = t.smoothLighting,
            this.world.remeshAll())
        }
        this.uniforms.brightness.value = t.brightness,
        this.sky.cloudsEnabled = t.clouds,
        this.renderer.setPixelRatio(t.quality === "fancy" ? Math.min(window.devicePixelRatio, 1.5) : 1),
        this.resize(),
        Zt.volumes = {
            master: t.master,
            sfx: t.sfx,
            ambient: t.ambient,
            music: t.music
        },
        Zt.applyVolumes()
    }
    startPanorama() {
        this.disposeWorld();
        const t = new nc(Gs("BlockCraft Panorama 7"),"default");
        this.world = new rc(t,this.atlas,this.solidMat,this.waterMat),
        this.world.radius = Math.min(6, this.settings.renderDistance),
        this.scene.add(this.world.group);
        const e = t.findSpawn()
          , n = t.column(Math.floor(e.x), Math.floor(e.z)).h;
        this.camera.position.set(e.x, Math.max(n, cn) + 9, e.z),
        this.ticks = 11200,
        this.state = "menu"
    }
    disposeWorld() {
        if (this.multiplayerSocket?.connected && this.multiplayerWorldId) {
            this.multiplayerSocket.emit("world:leave");
        }

        this.multiplayerWorldId = null;
        this.multiplayerJoining = false;
        this.multiplayerMoveTimer = 0;

        this.clearRemotePlayers();
        this.world && (this.scene.remove(this.world.group),
        this.world.dispose(),
        this.world = null),
        this.mobs.clear(),
        this.entities.clear(),
        this.particles.clear(),
        this.chests.clear(),
        this.furnaces.clear(),
        this.saplings.clear(),
        this.mining = null
    }
    async createWorld(t) {
        const e = H0(t.seed)
          , n = Date.now()
          , s = {
            id: `w${n.toString(36)}${Math.floor(Math.random() * 1e6).toString(36)}`,
            name: t.name,
            created: n,
            lastPlayed: n,
            mode: t.mode,
            difficulty: t.difficulty,
            seed: e,
            seedText: t.seed.trim() || String(e),
            type: t.type
        };
        await ss.saveMeta(s),
        this.startWorld(s, null)
    }
    async playWorld(t) {
        this.ui.showLoading("Carregando mundo...", 0);
        const e = await ss.loadData(t.id);
        this.startWorld(t, e)
    }
    startWorld(t, e) {
        Zt.init(),
        this.disposeWorld(),
        this.meta = t,
        this.difficulty = t.difficulty;
        const n = new Map;
        if (e != null && e.mods)
            for (const [o,a] of Object.entries(e.mods)) {
                if (!Array.isArray(a))
                    continue;
                const l = new Map;
                for (const c of a)
                    Array.isArray(c) && c.length === 2 && l.set(Number(c[0]), Number(c[1]));
                n.set(o, l)
            }
        const s = new nc(t.seed,t.type);
        if (this.world = new rc(s,this.atlas,this.solidMat,this.waterMat,n),
        this.world.radius = this.settings.renderDistance,
        this.world.fancy = this.settings.quality === "fancy",
        this.world.smooth = this.settings.smoothLighting,
        this.scene.add(this.world.group),
        this.world.onBlockChanged = (o, a, l, c, h) => this.onBlockChanged(o, a, l, c, h),
        e) {
            for (const [o,a] of Object.entries(e.chests ?? {}))
                Array.isArray(a) && this.chests.set(o, Array.from({
                    length: 27
                }, (l, c) => br(a[c])));
            for (const [o,a] of Object.entries(e.furnaces ?? {})) {
                const l = a;
                l && typeof l == "object" && this.furnaces.set(o, {
                    input: br(l.input),
                    fuel: br(l.fuel),
                    output: br(l.output),
                    burn: Number(l.burn) || 0,
                    burnMax: Number(l.burnMax) || 0,
                    cook: Number(l.cook) || 0
                })
            }
            for (const o of e.saplings ?? [])
                Array.isArray(o) && this.saplings.set(Cs(o[0], o[1], o[2]), o[3])
        }
        const r = this.player = new ac;
        if (r.mode = t.mode,
        this.ticks = (e == null ? void 0 : e.time) ?? 1e3,
        this.day = (e == null ? void 0 : e.day) ?? 0,
        e != null && e.player) {
            const o = e.player;
            r.body.pos.set(o.x, o.y, o.z),
            r.yaw = o.yaw,
            r.pitch = o.pitch,
            r.health = o.health,
            r.hunger = o.hunger,
            r.saturation = o.saturation,
            r.inv.load(o.inv),
            r.inv.selected = Math.max(0, Math.min(8, o.selected | 0)),
            r.spawn.set(...o.spawn),
            r.hasBedSpawn = !!o.hasBedSpawn,
            r.flying = !!o.flying && r.mode === "creative",
            r.health <= 0 && (r.health = 20,
            r.body.pos.copy(r.spawn)),
            this.loadingNeedsPlace = !1
        } else {
            const o = s.findSpawn();
            r.body.pos.set(o.x, Wt, o.z),
            r.spawn.set(o.x, Wt, o.z),
            this.loadingNeedsPlace = !0
        }
        if (e != null && e.animals) {
            for (const o of e.animals)
                if (o && typeof o.t == "string" && ["cow", "pig", "sheep", "chicken"].includes(o.t)) {
                    const a = this.mobs.add(o.t, new I(o.x,o.y,o.z));
                    a.health = o.h ?? a.health
                }
        }
        this.state = "loading",
        this.loadingStart = performance.now(),
        this.ui.setHudVisible(!1),
        this.ui.showLoading("Gerando terreno...", 0),
        this.input.unlock()
    }
    findStandSpot(t, e) {
        const n = this.world;
        for (let r = 0; r < 12; r++)
            for (let o = -r; o <= r; o++)
                for (let a = -r; a <= r; a++) {
                    if (Math.max(Math.abs(o), Math.abs(a)) !== r)
                        continue;
                    const l = Math.floor(t) + o
                      , c = Math.floor(e) + a;
                    for (let h = Wt - 2; h > 1; h--) {
                        const u = n.getBlock(l, h, c);
                        if (!(u === M.AIR || !Ae[u] && u !== M.WATER)) {
                            if (u === M.WATER || Ls(u) || u === M.OAK_LOG || u === M.BIRCH_LOG || u === M.SPRUCE_LOG || u === M.CACTUS)
                                break;
                            if (!Ae[n.getBlock(l, h + 1, c)] && !Ae[n.getBlock(l, h + 2, c)])
                                return new I(l + .5,h + 1,c + .5);
                            break
                        }
                    }
                }
        const s = n.surfaceY(Math.floor(t), Math.floor(e));
        return new I(Math.floor(t) + .5,s + 1,Math.floor(e) + .5)
    }
    finishLoading() {
        var s;
        const t = this.player;
        if (this.loadingNeedsPlace) {
            const r = this.findStandSpot(t.body.pos.x, t.body.pos.z);
            t.body.pos.copy(r),
            (!t.hasBedSpawn || t.spawn.y >= Wt) && t.spawn.copy(r),
            this.loadingNeedsPlace = !1
        }
        const e = t.body;
        let n = 0;
        for (; xh(this.world, e.pos.x - .3, e.pos.y, e.pos.z - .3, e.pos.x + .3, e.pos.y + 1.8, e.pos.z + .3) && n++ < 128; )
            e.pos.y += 1;
        this.mobs.trySpawn(this.mobCtx, 30),
        this.state = "playing",
        this.ui.setHudVisible(!this.hudHidden),
        this.ui.showResumeHint(),
        this.ui.showHeldName(((s = t.inv.held) == null ? void 0 : s.id) ?? null),
        this.autosave = 60,
        this.joinMultiplayerWorld()
    }
    resume() {
        !this.world || this.state === "menu" || this.state !== "dead" && (this.ui.hideScreen(),
        this.state = "playing",
        this.input.lock( () => {
            this.state === "playing" && !this.input.locked && !this.ui.containers.open && this.ui.showResumeHint()
        }
        ))
    }
    pause() {
        this.state === "playing" && (this.state = "paused",
        this.mining = null,
        this.ui.showPause())
    }
    async saveAndQuit() {
        this.ui.containers.open && this.ui.containers.close(),
        this.ui.showLoading("Salvando mundo...", .5),
        await this.save(!0),
        this.input.unlock(),
        this.ui.setHudVisible(!1),
        this.meta = null,
        this.startPanorama(),
        this.ui.showMainMenu()
    }
    captureThumb() {
        try {
            this.render();
            const t = document.createElement("canvas");
            t.width = 160,
            t.height = 90;
            const e = t.getContext("2d")
              , n = this.renderer.domElement
              , s = n.width / n.height
              , r = s > 16 / 9 ? n.height * (16 / 9) : n.width
              , o = s > 16 / 9 ? n.height : n.width / (16 / 9);
            return e.drawImage(n, (n.width - r) / 2, (n.height - o) / 2, r, o, 0, 0, 160, 90),
            t.toDataURL("image/jpeg", .75)
        } catch {
            return
        }
    }
    async save(t) {
        if (!this.world || !this.meta || this.state === "menu" || this.state === "loading")
            return;
        const e = this.player
          , n = {};
        for (const [a,l] of this.world.mods)
            l.size && (n[a] = [...l.entries()]);
        const s = {};
        for (const [a,l] of this.chests)
            s[a] = l.map(c => c ? {
                ...c
            } : null);
        const r = {};
        for (const [a,l] of this.furnaces)
            r[a] = JSON.parse(JSON.stringify(l));
        const o = {
            id: this.meta.id,
            version: 1,
            player: {
                x: e.body.pos.x,
                y: e.body.pos.y,
                z: e.body.pos.z,
                yaw: e.yaw,
                pitch: e.pitch,
                health: e.dead ? 20 : e.health,
                hunger: e.dead ? 20 : e.hunger,
                saturation: e.saturation,
                inv: e.inv.toJSON(),
                selected: e.inv.selected,
                spawn: [e.spawn.x, e.spawn.y, e.spawn.z],
                hasBedSpawn: e.hasBedSpawn,
                flying: e.flying
            },
            time: this.ticks,
            day: this.day,
            mods: n,
            chests: s,
            furnaces: r,
            animals: this.mobs.toJSON().slice(0, 40),
            saplings: [...this.saplings.entries()].map( ([a,l]) => {
                const [c,h,u] = a.split(",").map(Number);
                return [c, h, u, l]
            }
            )
        };
        if (e.dead && (o.player.x = e.spawn.x,
        o.player.y = e.spawn.y,
        o.player.z = e.spawn.z),
        this.meta.lastPlayed = Date.now(),
        this.meta.difficulty = this.difficulty,
        t) {
            const a = this.captureThumb();
            a && (this.meta.thumb = a)
        }
        try {
            await ss.saveData(o),
            await ss.saveMeta({
                ...this.meta
            })
        } catch (a) {
            console.error("Save failed", a),
            this.ui.toast("Falha ao salvar o mundo!")
        }
    }
    respawn() {
        const t = this.player;
        if (t.hasBedSpawn) {
            const e = Math.floor(t.spawn.x)
              , n = Math.floor(t.spawn.y) - 1
              , s = Math.floor(t.spawn.z);
            let r = !1;
            for (let o = -1; o <= 1; o++)
                for (let a = -1; a <= 1; a++)
                    for (let l = -1; l <= 0; l++)
                        this.world.getBlock(e + o, n + l, s + a) === M.BED && (r = !0);
            !r && this.world.isLoaded(e, s) && (t.hasBedSpawn = !1,
            this.ui.toast("Sua cama estava faltando ou obstruída"))
        }
        t.respawn(),
        this.loadingNeedsPlace = !0,
        this.state = "loading",
        this.loadingStart = performance.now(),
        this.ui.showLoading("Renascendo...", 0)
    }
    onKey(t, e) {
        if (this.state !== "playing" && this.state !== "paused")
            return;
        const n = this.ui.containers;
        if (t === "Escape") {
            if (n.open) {
                n.close();
                return
            }
            if (this.state === "paused" && this.ui.current === "pause") {
                this.resume();
                return
            }
        }
        if (this.state === "playing") {
            if (t === "KeyE") {
                n.open ? n.close() : this.input.locked && !this.player.dead && (this.mining = null,
                n.openWindow(this.player.mode === "creative" ? "creative" : "inventory", this.player),
                this.input.unlock());
                return
            }
            if (!n.open && this.input.locked)
                if (t.startsWith("Digit")) {
                    const s = Number(t.slice(5));
                    s >= 1 && s <= 9 && this.selectSlot(s - 1)
                } else if (t === "KeyQ") {
                    const s = this.player.inv.held;
                    if (s) {
                        const r = e.ctrlKey ? s.count : 1;
                        this.throwStack({
                            ...s,
                            count: r
                        }),
                        this.player.inv.consumeSelected(r),
                        this.swing = 0
                    }
                } else
                    t === "F3" ? this.showDebug = !this.showDebug : t === "F5" ? this.thirdPerson = !this.thirdPerson : t === "F2" && (this.hudHidden = !this.hudHidden,
                    this.ui.setHudVisible(!this.hudHidden))
        }
    }
    selectSlot(t) {
        var n;
        const e = this.player.inv;
        e.selected !== t && (e.selected = t,
        this.eatTime = 0,
        this.mining = null,
        this.ui.showHeldName(((n = e.held) == null ? void 0 : n.id) ?? null))
    }
    throwStack(t) {
        const e = this.player
          , n = e.lookDir
          , s = e.eye;
        this.entities.spawnItem(t, s.x, s.y - .3, s.z, n.clone().multiplyScalar(6).add(new I(0,1.5,0)), 1.5)
    }
    dropStack(t) {
        !this.world || this.state === "menu" || this.throwStack(t)
    }
    frame() {
        const t = performance.now()
          , e = Math.min(.05, (t - this.last) / 1e3);
        this.last = t,
        this.elapsed += e,
        this.fpsAcc += e,
        this.fpsFrames++,
        this.fpsAcc >= .5 && (this.fps = Math.round(this.fpsFrames / this.fpsAcc),
        this.fpsAcc = 0,
        this.fpsFrames = 0),
        this.uniforms.time.value = this.elapsed,
        this.state === "menu" ? this.updateMenu(e) : this.state === "loading" ? this.updateLoading() : this.state === "playing" ? this.updatePlaying(e) : (this.state === "paused" || this.state === "dead") && (this.world && this.world.update(this.player.body.pos.x, this.player.body.pos.z, 4),
        this.updateCamera(0)),
        Zt.updateAmbience(e, this.ambienceEnv()),
        this.render(),
        this.input.endFrame()
    }
    updateMenu(t) {
        this.world.update(this.camera.position.x, this.camera.position.z, 10),
        this.panoramaAngle += t * .04,
        this.camera.rotation.order = "YXZ",
        this.camera.rotation.set(-.18, this.panoramaAngle, 0),
        this.camera.fov = 75,
        this.camera.updateProjectionMatrix(),
        this.ticks = 11200 + Math.sin(this.elapsed * .02) * 400,
        this.updateEnvironment(0)
    }
    updateLoading() {
        const t = this.world
          , e = this.player.body.pos;
        t.update(e.x, e.z, 30);
        const n = Math.floor(e.x / tt)
          , s = Math.floor(e.z / tt);
        let r = 0
          , o = 0;
        for (let a = -2; a <= 2; a++)
            for (let l = -2; l <= 2; l++) {
                o++;
                const c = t.getChunk(n + l, s + a);
                c && !c.dirty && r++
            }
        this.ui.showLoading(this.loadingNeedsPlace ? "Gerando terreno..." : "Carregando terreno...", r / o),
        this.camera.position.set(e.x, e.y + 1.62, e.z),
        this.updateEnvironment(0),
        r === o && performance.now() - this.loadingStart > 300 && this.finishLoading()
    }
    updatePlaying(t) {
        const e = this.world
          , n = this.player
          , s = this.input
          , r = this.ui.containers.open
          , o = s.locked && !r && !n.dead;
        this.sleepT < 0 && (this.ticks += t * 20 * Bg),
        this.ticks >= 24e3 && (this.ticks -= 24e3,
        this.day++),
        o && s.wheel !== 0 && this.selectSlot((n.inv.selected + (s.wheel > 0 ? 1 : 8)) % 9);
        const a = Math.floor(n.body.pos.x / tt)
          , l = Math.floor(n.body.pos.z / tt)
          , c = e.getChunk(a, l);
        if (c && !c.dirty || c != null && c.mesh) {
            let h = t;
            for (; h > 0; ) {
                const u = Math.min(h, .016666666666666666);
                n.update(u, o ? s : null, e, this.playerEvents(), {
                    sens: this.settings.sensitivity,
                    invert: this.settings.invertMouse
                }),
                o && (s.dx = 0,
                s.dy = 0),
                h -= u
            }
        }
        o || (n.sprinting = n.sprinting && o),
        n.tickStats(t, this.difficulty),
        o ? this.handleInteraction(t) : (this.mining = null,
        this.eatTime = 0),
        e.update(n.body.pos.x, n.body.pos.z, 6),
        e.tickFluids(t),
        this.tickBlockEntities(t),
        this.mobCtx.playerAlive = !n.dead,
        this.mobCtx.playerTargetable = n.mode === "survival",
        this.mobCtx.difficulty = this.difficulty,
        this.mobCtx.daylight = this.sky.state.daylight,
        this.mobCtx.playerPos.copy(n.body.pos),
        this.mobCtx.playerEye.copy(n.eye),
        this.mobs.update(t, this.mobCtx),
        this.entities.update(t, e, n.body.pos, h => this.pickup(h), h => this.arrowHitsPlayer(h), 1),
        this.particles.update(t, e),
        this.sleepT >= 0 && (this.sleepT += t,
        this.ui.setSleep(Math.min(1, this.sleepT / 1.5) * (this.sleepT > 3 ? Math.max(0, 1 - (this.sleepT - 3) / 1) : 1)),
        this.sleepT > 2.2 && this.ticks > 1e3 && (this.ticks = 0,
        this.day++,
        this.ui.toast("Bom dia! Ponto de renascimento definido.")),
        this.sleepT > 4 && (this.sleepT = -1,
        this.ui.setSleep(0))),
        n.dead && this.state === "playing" && this.onDeath(),
        this.autosave -= t,
        this.autosave <= 0 && (this.autosave = 60,
        this.save(!1)),
        this.updateEnvironment(t),
        this.updateCamera(t),
        this.updateHand(t),
        this.ui.updateHud(n, t),
        this.showDebug ? this.ui.setDebug(this.debugText()) : this.ui.setDebug(null),
        r && this.openFurnaceKey && this.ui.containers.refresh(),
        this.updateMultiplayerMovement(t),
        r && this.openFurnaceKey && this.ui.containers.refresh()
    }
    playerEvents() {
        const t = this.player
          , e = () => this.world.getBlock(Math.floor(t.body.pos.x), Math.floor(t.body.pos.y - .2), Math.floor(t.body.pos.z));
        return {
            onJump: () => Zt.play("jump"),
            onLand: n => {
                n > 1.5 && (Zt.blockSound(we(e()).sound, "step"),
                Zt.play("land"))
            }
            ,
            onStep: () => {
                const n = e();
                n && Zt.blockSound(we(n).sound, "step")
            }
            ,
            onSwim: () => Zt.play("swim"),
            onSplash: () => {
                Zt.play("splash"),
                this.particles.burst(t.body.pos.x, t.body.pos.y + .5, t.body.pos.z, [120, 160, 255], 20, 4)
            }
        }
    }
    onDeath() {
        const t = this.player;
        this.state = "dead",
        this.mining = null,
        this.ui.containers.open && this.ui.containers.close();
        for (let e = 0; e < t.inv.slots.length; e++) {
            const n = t.inv.slots[e];
            n && this.entities.spawnItem(n, t.body.pos.x, t.body.pos.y + 1, t.body.pos.z, void 0, 2),
            t.inv.slots[e] = null
        }
        Zt.play("hurt"),
        this.input.unlock(),
        this.ui.showDeath(t.deathCause, `Dia ${this.day + 1} • Você sobreviveu ${this.day} noite(s)`)
    }
    handleInteraction(t) {
        var g;
        const e = this.world
          , n = this.player
          , s = this.input
          , r = n.eye
          , o = n.lookDir
          , a = n.mode === "creative"
          , l = a ? 5.5 : 4.6
          , c = e.raycast(r, o, l)
          , h = this.mobs.raycast(r, o, 3.2)
          , u = h && (!c || h.dist < c.dist) ? h.mob : null;
        if (this.attackCd -= t,
        this.placeCd -= t,
        c && !u) {
            const _ = gh(c.id, e.getMeta(c.x, c.y, c.z))
              , m = new I(1,1,1)
              , d = new I(0,0,0);
            for (const v of _)
                m.min(new I(v[0],v[1],v[2])),
                d.max(new I(v[3],v[4],v[5]));
            const x = d.clone().sub(m);
            this.outline.scale.set(x.x + .004, x.y + .004, x.z + .004),
            this.outline.position.set(c.x + (m.x + d.x) / 2, c.y + (m.y + d.y) / 2, c.z + (m.z + d.z) / 2),
            this.outline.visible = !0
        } else
            this.outline.visible = !1;
        if (s.mouseDown[0]) {
            if (u)
                this.mining = null,
                s.mousePressed[0] && this.attackCd <= 0 && this.attackMob(u);
            else if (c)
                if (a) {
                    if (s.mousePressed[0] || this.placeCd <= 0) {
                        const _ = n.inv.held;
                        _ && ((g = ce(_.id).tool) == null ? void 0 : g.type) === "sword" || this.breakBlock(c.x, c.y, c.z, !1),
                        this.placeCd = .22,
                        this.swing = 0
                    }
                } else
                    this.mine(c.x, c.y, c.z, c.id, t);
            else
                this.mining = null,
                s.mousePressed[0] && (this.swing = 0);
            !this.mining && s.mousePressed[0] && this.swing >= 1 && (this.swing = 0)
        } else
            this.mining = null;
        if (s.mousePressed[1] && a && c) {
            const _ = c.id === M.OAK_DOOR ? M.OAK_DOOR : c.id
              , m = n.inv
              , d = m.slots.findIndex( (x, v) => v < 9 && (x == null ? void 0 : x.id) === _);
            d >= 0 ? this.selectSlot(d) : m.slots[m.selected] = {
                id: _,
                count: 64
            }
        }
        const f = n.inv.held
          , p = f ? ce(f.id).food : void 0;
        if (s.mouseDown[2]) {
            if (s.mousePressed[2] || this.placeCd <= 0) {
                let _ = !1;
                c && !u && (!n.sneaking || !f) && (_ = this.interactBlock(c.x, c.y, c.z, c.id)),
                !_ && p && (n.hunger < 20 || a && !1) && n.mode === "survival" || !_ && c && f && ce(f.id).isBlock && !u && this.placeBlock(c, f.id) && (this.swing = 0),
                this.placeCd = .22
            }
            if (p && n.mode === "survival" && n.hunger < 20) {
                if (this.eatTime += t,
                Math.floor(this.eatTime * 5) !== Math.floor((this.eatTime - t) * 5)) {
                    Zt.play("eat");
                    const _ = n.eye.add(o.clone().multiplyScalar(.4))
                      , m = this.atlas.color("dirt");
                    this.particles.burst(_.x, _.y - .15, _.z, f.id === at.APPLE ? [200, 40, 40] : [m[0] + 40, m[1], m[2]], 4, 1.5, 1, .1)
                }
                if (this.eatTime >= 1.6) {
                    this.eatTime = 0,
                    n.eat(p.hunger, p.saturation);
                    const _ = f.id === at.MUSHROOM_STEW;
                    n.inv.consumeSelected(),
                    _ && n.inv.add({
                        id: at.BOWL,
                        count: 1
                    }),
                    Zt.play("burp"),
                    f.id === at.ROTTEN_FLESH && Math.random() < .8 && (n.exhaustion += 8,
                    this.ui.toast("Isso não fez bem..."))
                }
            } else
                this.eatTime = 0
        } else
            this.eatTime = 0
    }
    attackMob(t) {
        const e = this.player
          , n = e.inv.held
          , s = n ? ce(n.id).tool : void 0;
        let r = s ? s.damage : 1;
        const o = !e.body.onGround && e.body.vel.y < 0 && !e.body.inWater;
        o && (r *= 1.5);
        const a = e.body.pos.clone();
        this.mobs.damage(t, r, a, this.mobCtx, e.sprinting ? 1.5 : 1),
        o && this.particles.burst(t.body.pos.x, t.body.pos.y + t.def.h * .7, t.body.pos.z, [255, 255, 200], 10, 3),
        this.particles.burst(t.body.pos.x, t.body.pos.y + t.def.h * .6, t.body.pos.z, [180, 30, 30], 5, 2),
        this.attackCd = (s == null ? void 0 : s.type) === "sword" ? .3 : (s == null ? void 0 : s.type) === "axe" ? .6 : .35,
        this.swing = 0,
        e.exhaustion += .1,
        Zt.play("attack"),
        s && this.damageHeld(s.type === "sword" ? 1 : 2)
    }
    harvestInfo(t) {
        const e = we(t)
          , n = this.player
          , s = n.inv.held
          , r = s ? ce(s.id).tool : void 0;
        if (e.hardness < 0)
            return {
                time: 1 / 0,
                canHarvest: !1,
                correctTool: !1
            };
        const o = !!r && r.type === e.tool
          , a = e.level === 0 || o && r.level >= e.level;
        let l = o ? r.speed : 1;
        (r == null ? void 0 : r.type) === "sword" && (Ls(t) || e.shape === "cross") && (l = 1.5),
        Ls(t) && (r == null ? void 0 : r.type) === "axe" && (l = r.speed);
        let c = e.hardness * (a ? 1.5 : 5) / l;
        return n.body.headInWater && (c *= 5),
        !n.body.onGround && !n.body.inWater && !n.flying && (c *= 2),
        {
            time: c,
            canHarvest: a,
            correctTool: o
        }
    }
    mine(t, e, n, s, r) {
        const o = this.mining;
        (!o || o.x !== t || o.y !== e || o.z !== n) && (this.mining = {
            x: t,
            y: e,
            z: n,
            progress: 0,
            soundT: 0
        });
        const a = this.mining
          , l = this.harvestInfo(s);
        if (!isFinite(l.time)) {
            this.swing = this.swing >= 1 ? 0 : this.swing;
            return
        }
        if (a.progress += l.time <= 0 ? 1 : r / l.time,
        a.soundT -= r,
        this.swing >= 1 && (this.swing = 0),
        a.soundT <= 0) {
            a.soundT = .25,
            Zt.blockSound(we(s).sound, "hit", {
                x: t,
                y: e,
                z: n
            });
            const c = this.atlas.color(we(s).side)
              , h = this.world.raycast(this.player.eye, this.player.lookDir, 6);
            h && this.particles.burst(h.point.x + h.nx * .05, h.point.y + h.ny * .05, h.point.z + h.nz * .05, c, 3, 1.5, .9, .05)
        }
        a.progress >= 1 && (this.breakBlock(t, e, n, !0),
        this.mining = null,
        this.player.exhaustion += .005)
    }
    breakBlock(t, e, n, s, r=!1, o=!0) {
        const a = this.world
          , l = a.getBlock(t, e, n);
        if (l === M.AIR || l === M.WATER)
            return;
        const c = we(l);
        if (c.hardness < 0 && s || l === M.BEDROCK && r)
            return;
        const h = a.getMeta(t, e, n)
          , u = this.harvestInfo(l)
          , f = s && (u.canHarvest || r);
        if (a.setBlock(t, e, n, M.AIR, 0, !0, o),
        l === M.OAK_DOOR) {
            const m = h & 8 ? e - 1 : e + 1;
            a.getBlock(t, m, n) === M.OAK_DOOR && a.setBlock(t, m, n, M.AIR, 0, !0, o)
        } else if (l === M.BED) {
            const m = h & 3
              , [d,x] = Po[m]
              , v = h & 4 ? -1 : 1;
            a.getBlock(t + d * v, e, n + x * v) === M.BED && a.setBlock(t + d * v, e, n + x * v, M.AIR, 0, !0, o)
        }
        const p = Cs(t, e, n);
        if (this.chests.has(p)) {
            for (const m of this.chests.get(p))
                m && this.entities.spawnItem(m, t + .5, e + .5, n + .5);
            this.chests.delete(p)
        }
        if (this.furnaces.has(p)) {
            const m = this.furnaces.get(p);
            for (const d of [m.input, m.fuel, m.output])
                d && this.entities.spawnItem(d, t + .5, e + .5, n + .5);
            this.furnaces.delete(p)
        }
        if (this.saplings.delete(p),
        f && (!r || Math.random() < .35)) {
            const m = c.drop === void 0 ? [[l, 1]] : typeof c.drop == "number" ? c.drop < 0 ? [] : [[c.drop, 1]] : c.drop(Math.random);
            for (const [d,x] of m)
                x > 0 && this.entities.spawnItem({
                    id: d,
                    count: x
                }, t + .5, e + .3, n + .5)
        }
        if (!r) {
            Zt.blockSound(c.sound, "break", {
                x: t + .5,
                y: e + .5,
                z: n + .5
            });
            const m = this.atlas.color(l === M.GRASS ? "dirt" : c.side);
            if (this.particles.burst(t + .5, e + .5, n + .5, m, 24, 3.2),
            s && c.hardness > 0) {
                const d = this.player.inv.held;
                d && ce(d.id).tool && this.damageHeld(ce(d.id).tool.type === "sword" ? 2 : 1)
            }
        }
        const g = a.getBlock(t, e + 1, n);
        if (g !== M.AIR) {
            const m = we(g)
              , d = a.getMeta(t, e + 1, n);
            (m.shape === "cross" || m.shape === "torch" && !(d & 7) || g === M.OAK_DOOR && !(d & 8) || g === M.CACTUS) && this.breakBlock(t, e + 1, n, s || !r, r, o)
        }
        const _ = [[0, 1, 1], [-1, 2, 0], [0, 3, -1], [1, 4, 0]];
        for (const [m,d,x] of _) {
            const v = t + m
              , S = n + x;
            a.getBlock(v, e, S) === M.TORCH && (a.getMeta(v, e, S) & 7) === d && this.breakBlock(v, e, S, !0, r, o)
        }
        a.afterRemoved(t, e, n)
    }
    damageHeld(t) {
        const e = this.player;
        if (e.mode === "creative")
            return;
        const n = e.inv.held;
        if (!n)
            return;
        const s = ce(n.id).tool;
        if (s && (n.dmg = (n.dmg ?? 0) + t,
        n.dmg >= s.durability)) {
            e.inv.slots[e.inv.selected] = null,
            Zt.play("break_tool");
            const r = e.eye.add(e.lookDir.multiplyScalar(.5));
            this.particles.burst(r.x, r.y - .2, r.z, [140, 120, 90], 12, 2),
            this.ui.toast(`${ce(n.id).name} quebrou!`, 2)
        }
    }
    lookFacing() {
        const t = this.player.lookDir;
        return Math.abs(t.x) > Math.abs(t.z) ? t.x > 0 ? 3 : 1 : t.z > 0 ? 0 : 2
    }
    placeBlock(t, e) {
        const n = this.world
          , s = this.player;
        let r = t.x + t.nx
          , o = t.y + t.ny
          , a = t.z + t.nz;
        if (we(t.id).replaceable && t.id !== M.WATER && (r = t.x,
        o = t.y,
        a = t.z),
        o < 1 || o >= Wt - 1)
            return !1;
        const l = n.getBlock(r, o, a);
        if (l !== M.AIR && !we(l).replaceable)
            return !1;
        const c = we(e)
          , h = n.getBlock(r, o - 1, a);
        let u = 0;
        if (c.shape === "cross" && !(e === M.DEAD_BUSH ? [M.SAND, M.DIRT, M.GRASS] : e === M.BROWN_MUSHROOM || e === M.RED_MUSHROOM ? [M.DIRT, M.GRASS, M.STONE, M.COBBLE, M.GRAVEL, M.SNOWY_GRASS] : [M.GRASS, M.DIRT, M.SNOWY_GRASS]).includes(h) || e === M.CACTUS && h !== M.SAND && h !== M.CACTUS)
            return !1;
        if (e === M.TORCH)
            if (t.ny === 1) {
                if (!Ae[h])
                    return !1;
                u = 0
            } else {
                if (t.ny === -1)
                    return !1;
                if (!Dn[t.id] && !Ae[t.id])
                    return !1;
                u = t.nz === 1 ? 1 : t.nx === -1 ? 2 : t.nz === -1 ? 3 : 4
            }
        const f = this.lookFacing();
        if (c.shape === "stairs" && (u = f),
        c.front && (u = (f + 2) % 4),
        c.solid) {
            const g = s.body
              , _ = g.pos.x
              , m = g.pos.y
              , d = g.pos.z
              , x = (v, S, L, A=1) => _ + .3 > v && _ - .3 < v + 1 && m + 1.8 > S && m < S + A && d + .3 > L && d - .3 < L + 1;
            if ((x(r, o, a, e === M.OAK_SLAB || e === M.STONE_SLAB ? .5 : 1) && s.mode !== "creative" || x(r, o, a) && !s.flying && e !== M.OAK_DOOR) && !(s.mode === "creative" && s.flying))
                return !1;
            for (const v of this.mobs.mobs) {
                const S = v.body.pos
                  , L = v.def.hw;
                if (S.x + L > r && S.x - L < r + 1 && S.y + v.def.h > o && S.y < o + 1 && S.z + L > a && S.z - L < a + 1)
                    return !1
            }
        }
        if (e === M.OAK_DOOR) {
            const g = n.getBlock(r, o + 1, a);
            if (g !== M.AIR && !we(g).replaceable || !Ae[h])
                return !1;
            n.setBlock(r, o, a, M.OAK_DOOR, f),
            n.setBlock(r, o + 1, a, M.OAK_DOOR, f | 8)
        } else if (e === M.BED) {
            const [g,_] = Po[f]
              , m = r + g
              , d = a + _
              , x = n.getBlock(m, o, d);
            if (x !== M.AIR && !we(x).replaceable || !Ae[n.getBlock(m, o - 1, d)] || !Ae[h])
                return this.ui.toast("Não há espaço para a cama", 2),
                !1;
            n.setBlock(r, o, a, M.BED, f),
            n.setBlock(m, o, d, M.BED, f | 4)
        } else
            n.setBlock(r, o, a, e, u);
        const p = Cs(r, o, a);
        return e === M.CHEST && this.chests.set(p, uc()),
        e === M.FURNACE && this.furnaces.set(p, hc()),
        (e === M.OAK_SAPLING || e === M.BIRCH_SAPLING || e === M.SPRUCE_SAPLING) && this.saplings.set(p, 60 + Math.random() * 120),
        Zt.blockSound(c.sound, "place", {
            x: r + .5,
            y: o + .5,
            z: a + .5
        }),
        s.mode === "survival" && s.inv.consumeSelected(),
        c.gravity && n.checkFalling(r, o, a),
        !0
    }
    interactBlock(t, e, n, s) {
        const r = this.world
          , o = Cs(t, e, n)
          , a = this.ui.containers
          , l = (c, h) => {
            this.mining = null,
            a.openWindow(c, this.player, h),
            this.input.unlock()
        }
        ;
        switch (s) {
        case M.CRAFTING_TABLE:
            return l("crafting"),
            !0;
        case M.FURNACE:
            return this.furnaces.has(o) || this.furnaces.set(o, hc()),
            this.openFurnaceKey = o,
            l("furnace", {
                furnace: this.furnaces.get(o)
            }),
            !0;
        case M.CHEST:
            return this.chests.has(o) || this.chests.set(o, uc()),
            Zt.play("chest", {
                x: t,
                y: e,
                z: n
            }),
            l("chest", {
                chest: this.chests.get(o)
            }),
            !0;
        case M.OAK_DOOR:
            {
                const h = r.getMeta(t, e, n) & 8 ? e - 1 : e
                  , f = r.getMeta(t, h, n) ^ 4;
                return r.setBlock(t, h, n, M.OAK_DOOR, f & -9),
                r.getBlock(t, h + 1, n) === M.OAK_DOOR && r.setBlock(t, h + 1, n, M.OAK_DOOR, f & -9 | 8),
                Zt.play("door", {
                    x: t,
                    y: e,
                    z: n
                }),
                this.swing = 0,
                !0
            }
        case M.BED:
            return this.trySleep(t, e, n)
        }
        return !1
    }
    trySleep(t, e, n) {
        const s = this.player;
        return s.spawn.set(t + .5, e + 1, n + .5),
        s.hasBedSpawn = !0,
        this.ticks > 12541 && this.ticks < 23458 ? this.mobs.mobs.some(a => a.alive && a.def.hostile && a.body.pos.distanceTo(new I(t,e,n)) < 8) ? (this.ui.toast("Você não pode descansar agora; há monstros por perto"),
        !0) : s.mode === "survival" && s.body.pos.distanceTo(new I(t + .5,e,n + .5)) > 3 ? (this.ui.toast("Você está muito longe da cama"),
        !0) : (this.sleepT = 0,
        !0) : (this.ui.toast("Você só pode dormir à noite. Ponto de renascimento definido."),
        !0)
    }
    pickup(t) {
        if (this.player.dead)
            return t.count;
        const e = this.player.inv.add(t);
        return e < t.count && Zt.play("pop"),
        e
    }
    arrowHitsPlayer(t) {
        const e = this.player
          , n = e.body;
        if (e.dead || e.mode === "creative")
            return !1;
        if (t.pos.x > n.pos.x - .35 && t.pos.x < n.pos.x + .35 && t.pos.z > n.pos.z - .35 && t.pos.z < n.pos.z + .35 && t.pos.y > n.pos.y && t.pos.y < n.pos.y + 1.85) {
            const s = [0, .5, 1, 1.5][this.difficulty];
            return this.damagePlayer(Math.max(1, Math.round(t.damage * s + Math.random())), "Atingido por uma flecha de Esqueleto", t.pos.clone().sub(t.vel)),
            Zt.play("arrow_hit", t.pos),
            !0
        }
        return !1
    }
    damagePlayer(t, e, n) {
        const s = this.player;
        if (s.damage(t, e)) {
            const r = s.body.pos.clone().sub(n).setY(0).normalize();
            s.body.vel.x += r.x * 6,
            s.body.vel.z += r.z * 6,
            s.body.vel.y = Math.max(s.body.vel.y, 4),
            Zt.play("hurt"),
            this.hurtTilt = 1
        }
    }
    explode(t, e) {
        const n = this.world;
        Zt.play("explode", t);
        for (let a = 0; a < 40; a++)
            this.particles.spawn(t.x + (Math.random() - .5) * 3, t.y + (Math.random() - .5) * 3, t.z + (Math.random() - .5) * 3, (Math.random() - .5) * 6, Math.random() * 4, (Math.random() - .5) * 6, .9, .9, .9, .8 + Math.random(), -1);
        this.particles.burst(t.x, t.y, t.z, [255, 170, 60], 40, 9);
        const s = this.player
          , r = s.body.pos.clone().setY(s.body.pos.y + .9).distanceTo(t)
          , o = e * 2;
        if (r < o) {
            const a = [0, .5, 1, 1.5][this.difficulty]
              , l = Math.round((1 - r / o) * e * 7 * a);
            l > 0 && this.damagePlayer(l, "Explodido por um Creeper", t);
            const c = s.body.pos.clone().sub(t).normalize().multiplyScalar((1 - r / o) * 14);
            s.body.vel.add(c)
        }
        for (const a of this.mobs.mobs) {
            const l = a.body.pos.distanceTo(t);
            l < o && this.mobs.damage(a, Math.round((1 - l / o) * e * 7), t, this.mobCtx, 2)
        }
        if (this.difficulty > 0) {
            const a = new Set
              , l = e;
            for (let c = -l; c <= l; c++)
                for (let h = -l; h <= l; h++)
                    for (let u = -l; u <= l; u++) {
                        if (Math.sqrt(c * c + h * h + u * u) > l - Math.random() * 1.2)
                            continue;
                        const p = Math.floor(t.x) + c
                          , g = Math.floor(t.y) + h
                          , _ = Math.floor(t.z) + u
                          , m = n.getBlock(p, g, _);
                        m === M.AIR || m === M.WATER || m === M.BEDROCK || (this.breakBlock(p, g, _, !0, !0, !1),
                        a.add(Is(Math.floor(p / tt), Math.floor(_ / tt))))
                    }
            for (const c of a) {
                const [h,u] = c.split(",").map(Number);
                for (let f = -1; f <= 1; f++)
                    for (let p = -1; p <= 1; p++) {
                        const g = n.getChunk(h + f, u + p);
                        g && (!f && !p ? n.remesh(g) : g.dirty = !0)
                    }
            }
        }
    }
    onBlockChanged(t, e, n, s, r) {}
    tickBlockEntities(t) {
        const e = this.world;
        this.furnaceFxT -= t;
        const n = this.furnaceFxT <= 0;
        n && (this.furnaceFxT = .15);
        for (const [s,r] of this.furnaces) {
            const [o,a,l] = s.split(",").map(Number)
              , c = r.burn > 0
              , h = Dg(r, t);
            if (!e.isLoaded(o, l))
                continue;
            if (e.getBlock(o, a, l) !== M.FURNACE) {
                this.furnaces.delete(s);
                continue
            }
            const u = e.getMeta(o, a, l);
            if ((h !== c || (u & 4) !== 0 !== h) && e.setBlock(o, a, l, M.FURNACE, h ? u | 4 : u & -5),
            h && n && this.player.body.pos.distanceToSquared(new I(o,a,l)) < 400) {
                const [f,p] = Po[u & 3]
                  , g = o + .5 + f * .55
                  , _ = l + .5 + p * .55;
                this.particles.flame(g, a + .3, _),
                Math.random() < .4 && this.particles.smoke(o + .5, a + 1.05, l + .5)
            }
        }
        if (n) {
            const s = this.player.body.pos;
            for (let r = 0; r < 6; r++) {
                const o = Math.floor(s.x + (Math.random() - .5) * 24)
                  , a = Math.floor(s.y + (Math.random() - .5) * 12)
                  , l = Math.floor(s.z + (Math.random() - .5) * 24);
                if (e.getBlock(o, a, l) === M.TORCH) {
                    const c = e.getMeta(o, a, l) & 7;
                    let h = 0
                      , u = 0
                      , f = 0;
                    c === 1 ? (u = -.34,
                    f = .2) : c === 2 ? (h = .34,
                    f = .2) : c === 3 ? (u = .34,
                    f = .2) : c === 4 && (h = -.34,
                    f = .2),
                    this.particles.flame(o + .5 + h, a + .68 + f, l + .5 + u),
                    Math.random() < .5 && this.particles.smoke(o + .5 + h, a + .75 + f, l + .5 + u, .25)
                }
            }
        }
        for (const [s,r] of this.saplings) {
            const [o,a,l] = s.split(",").map(Number);
            if (!e.isLoaded(o, l))
                continue;
            const c = r - t;
            if (c > 0) {
                this.saplings.set(s, c);
                continue
            }
            this.saplings.delete(s);
            const h = e.getBlock(o, a, l);
            h !== M.OAK_SAPLING && h !== M.BIRCH_SAPLING && h !== M.SPRUCE_SAPLING || this.growTree(o, a, l, h)
        }
    }
    growTree(t, e, n, s) {
        const r = this.world;
        for (let c = 1; c < 7; c++)
            if (r.getBlock(t, e + c, n) !== M.AIR) {
                this.saplings.set(Cs(t, e, n), 30);
                return
            }
        const o = new Set
          , a = (c, h, u, f, p) => {
            const g = r.getBlock(t + c, h, n + u);
            p && g !== M.AIR || !p && g !== M.AIR && !Ls(g) && g !== s || (r.setBlock(t + c, h, n + u, f, 0, !0, !1),
            o.add(Is(Math.floor((t + c) / tt), Math.floor((n + u) / tt))))
        }
        ;
        r.setBlock(t, e, n, M.AIR, 0, !0, !1);
        const l = Math.random();
        s === M.SPRUCE_SAPLING ? r.gen.spruce( (c, h, u, f, p) => a(c, h, u, f, p), 0, e, 0, l) : r.gen.oak( (c, h, u, f, p) => a(c, h, u, f, p), 0, e, 0, l, s === M.BIRCH_SAPLING ? M.BIRCH_LOG : M.OAK_LOG, s === M.BIRCH_SAPLING ? M.BIRCH_LEAVES : M.OAK_LEAVES),
        o.add(Is(Math.floor(t / tt), Math.floor(n / tt)));
        for (const c of o) {
            const [h,u] = c.split(",").map(Number)
              , f = r.getChunk(h, u);
            f && r.remesh(f)
        }
    }
    makeMobCtx() {
        return {
            world: null,
            playerPos: new I,
            playerEye: new I,
            playerAlive: !0,
            playerTargetable: !0,
            difficulty: 2,
            daylight: 1,
            damagePlayer: (t, e, n) => this.damagePlayer(t, e, n),
            dropItem: (t, e, n) => this.entities.spawnItem({
                id: t,
                count: e
            }, n.x, n.y, n.z),
            shootArrow: (t, e, n) => this.entities.spawnArrow(t, e, n),
            explode: (t, e) => this.explode(t, e),
            sound: (t, e) => Zt.play(t, e),
            burst: (t, e, n) => this.particles.burst(t.x, t.y, t.z, e, n, 2.5),
            flame: t => this.particles.flame(t.x, t.y, t.z)
        }
    }
    updateEnvironment(t) {
        var r;
        const e = this.sky.update(this.camera, this.ticks, this.elapsed);
        this.uniforms.sun.value = e.sunLight,
        this.uniforms.skyTint.value.copy(e.skyTint),
        this.player;
        const n = this.state !== "menu" && this.world !== null && this.world.getBlock(Math.floor(this.camera.position.x), Math.floor(this.camera.position.y), Math.floor(this.camera.position.z)) === M.WATER;
        this.uniforms.underwater.value = n ? 1 : 0,
        n ? this.uniforms.fogColor.value.setRGB(.05, .12, .35).multiplyScalar(.3 + .7 * e.sunLight) : this.uniforms.fogColor.value.copy(e.fogColor);
        const s = (((r = this.world) == null ? void 0 : r.radius) ?? 6) * tt;
        this.uniforms.fogFar.value = s - 2,
        this.uniforms.fogNear.value = s * .55,
        this.ui.setUnderwater(n && this.state !== "menu"),
        this.mobCtx && (this.mobCtx.world = this.world),
        Zt.listener = {
            x: this.camera.position.x,
            y: this.camera.position.y,
            z: this.camera.position.z
        }
    }
    updateCamera(t) {
        const e = this.player
          , n = this.camera;
        n.rotation.order = "YXZ";
        const s = e.eye;
        let r = 0
          , o = 0
          , a = 0;
        if (this.settings.viewBobbing && !this.thirdPerson) {
            const u = e.walkDist * Math.PI * .75;
            r = Math.sin(u) * .045 * e.bobAmount,
            o = -Math.abs(Math.cos(u)) * .06 * e.bobAmount,
            a = Math.sin(u) * .008 * e.bobAmount
        }
        this.hurtTilt = Math.max(0, this.hurtTilt - t * 3),
        a += Math.sin(this.hurtTilt * Math.PI) * .08,
        n.rotation.set(e.pitch, e.yaw, a);
        const l = new I(Math.cos(e.yaw),0,-Math.sin(e.yaw));
        if (n.position.copy(s).addScaledVector(l, r).add(new I(0,o,0)),
        this.thirdPerson && this.world) {
            const u = e.lookDir.multiplyScalar(-1)
              , f = this.world.raycast(s, u, 4)
              , p = f ? Math.max(.3, f.dist - .3) : 4;
            n.position.copy(s).addScaledVector(u, p)
        }
        const c = this.settings.fov * (e.sprinting ? 1.12 : 1) * (e.flying && e.sprinting ? 1.05 : 1);
        this.fovCur += (c - this.fovCur) * Math.min(1, t * 10),
        n.fov !== this.fovCur && (n.fov = this.fovCur,
        n.updateProjectionMatrix());
        const h = this.playerModel;
        if (h.root.visible = this.thirdPerson && this.state !== "menu",
        h.root.visible) {
            h.root.position.copy(e.body.pos),
            h.root.rotation.y = e.yaw + Math.PI,
            h.parts.head.rotation.x = -e.pitch;
            const u = Math.sin(e.walkDist * 2.2) * .7 * e.bobAmount;
            h.parts.legR.rotation.x = u,
            h.parts.legL.rotation.x = -u,
            h.parts.armR.rotation.x = -u * .8 - (this.swing < 1 ? Math.sin(this.swing * Math.PI) * 1.4 : 0),
            h.parts.armL.rotation.x = u * .8,
            h.root.position.y -= e.sneaking ? .1 : 0;
            const [f,p] = this.world ? this.world.getLight(Math.floor(e.body.pos.x), Math.floor(e.body.pos.y + 1), Math.floor(e.body.pos.z)) : [15, 0]
              , g = .1 + .9 * Math.max(f / 15 * this.sky.state.sunLight, p / 15);
            h.material.color.setRGB(g, g, g)
        }
    }
    updateHand(t) {
        const e = this.player;
        this.swing < 1 && (this.swing = Math.min(1, this.swing + t * this.swingSpeed));
        const n = e.inv.held
          , s = n ? n.id : -1;
        if (s !== this.heldId) {
            if (this.heldId = s,
            this.heldObj && this.armGroup.remove(this.heldObj),
            this.heldObj = null,
            n) {
                const p = ce(n.id);
                let g;
                if (p.isBlock && ["cube", "slab", "stairs", "cactus", "bed"].includes(we(n.id).shape))
                    g = this.entities.makeItemMesh(n.id, 1),
                    g.position.set(-.08, .02, -.1),
                    g.rotation.set(.1, Math.PI / 4, 0);
                else {
                    const _ = new ks({
                        map: this.icons.texture(n.id),
                        transparent: !0,
                        alphaTest: .5,
                        side: bn
                    });
                    g = new Pe(new wi(.6,.6),_),
                    g.position.set(-.1, .12, -.18),
                    g.rotation.set(0, Math.PI / 2 + .2, Math.PI / 5)
                }
                this.heldObj = g,
                this.armGroup.add(g)
            }
            this.swing = 1
        }
        const r = this.arm.parts.armR;
        r.visible = !n;
        const o = this.swing < 1 ? Math.sin(this.swing * Math.PI) : 0
          , a = this.swing < 1 ? Math.sin(Math.sqrt(this.swing) * Math.PI) : 0
          , l = e.walkDist * Math.PI * .75
          , c = this.settings.viewBobbing ? e.bobAmount : 0
          , h = Math.sin(l) * .03 * c
          , u = -Math.abs(Math.cos(l)) * .035 * c
          , f = this.armGroup;
        if (this.eatTime > 0 ? (f.position.set(.25 + Math.sin(this.eatTime * 20) * .01, -.35 + Math.abs(Math.sin(this.eatTime * 14)) * .04, -.5),
        f.rotation.set(-.3, .6, .2)) : (f.position.set(.48 + h - a * .25, -.5 + u + o * .12, -.62 - o * .15),
        f.rotation.set(-.4 - o * 1 + (n ? .35 : 0), n ? -.35 : .15 - a * .3, n ? .05 : -.25 + o * .2)),
        n || (r.rotation.set(1.95 - o * .5, 0, .1),
        r.position.set(.05, -.12, .3)),
        this.world) {
            const p = e.eye
              , [g,_] = this.world.getLight(Math.floor(p.x), Math.floor(p.y), Math.floor(p.z))
              , m = .1 + .9 * Math.max(g / 15 * this.sky.state.sunLight, _ / 15);
            this.handLight.intensity = m * 1.1
        }
    }
    render() {
        const t = this.renderer;
        if (this.mining && this.state === "playing") {
            const e = Math.min(9, Math.floor(this.mining.progress * 10));
            if (e !== this.crackStage) {
                this.crackStage = e;
                const n = this.atlas.uv("destroy_" + e)
                  , s = this.crack.geometry.attributes.uv;
                for (let r = 0; r < s.count; r++) {
                    const o = r % 4;
                    s.setXY(r, o % 2 ? n[2] : n[0], o < 2 ? n[3] : n[1])
                }
                s.needsUpdate = !0
            }
            this.crack.position.set(this.mining.x + .5, this.mining.y + .5, this.mining.z + .5),
            this.crack.visible = !0
        } else
            this.crack.visible = !1,
            this.crackStage = -1;
        (this.state === "menu" || this.state === "loading") && (this.outline.visible = !1),
        t.info.reset(),
        t.clear(),
        t.render(this.scene, this.camera),
        (this.state === "playing" || this.state === "paused") && !this.thirdPerson && !this.hudHidden && !this.player.dead && (t.clearDepth(),
        t.render(this.handScene, this.handCamera))
    }
    ambienceEnv() {
        const t = this.state === "playing" && !!this.world;
        if (!t || !this.world)
            return {
                outdoors: 1,
                nearWater: 0,
                cave: 0,
                night: !1,
                inGame: !1
            };
        const e = this.player.eye
          , [n] = this.world.getLight(Math.floor(e.x), Math.floor(e.y), Math.floor(e.z));
        let s = 0;
        for (let r = 0; r < 6; r++) {
            const o = Math.floor(e.x + (Math.random() - .5) * 16)
              , a = Math.floor(e.z + (Math.random() - .5) * 16);
            this.world.getBlock(o, cn, a) === M.WATER && Math.abs(e.y - cn) < 12 && s++
        }
        return {
            outdoors: n / 15,
            nearWater: s / 6,
            cave: e.y < 55 && n < 6 ? 1 : 0,
            night: this.sky.state.daylight < .3,
            inGame: t
        }
    }
    debugText() {
        var u;
        const t = this.player
          , e = this.world
          , n = t.body.pos
          , s = Math.floor(n.x)
          , r = Math.floor(n.y)
          , o = Math.floor(n.z)
          , [a,l] = e.getLight(s, r, o)
          , c = ["Sul (+Z)", "Oeste (-X)", "Norte (-Z)", "Leste (+X)"][this.lookFacing()];
        let h = 0;
        for (const f of e.chunks.values())
            (f.mesh || f.water) && h++;
        return [`BlockCraft AI (${this.fps} fps)`, `XYZ: ${n.x.toFixed(2)} / ${n.y.toFixed(2)} / ${n.z.toFixed(2)}`, `Bloco: ${s} ${r} ${o}   Chunk: ${Math.floor(s / tt)} ${Math.floor(o / tt)}`, `Olhando para: ${c}`, `Bioma: ${hg[e.biomeAt(s, o)]}`, `Luz: céu ${a}, bloco ${l}`, `Seed: ${((u = this.meta) == null ? void 0 : u.seedText) ?? ""} (${e.gen.seed})`, `Chunks: ${e.chunks.size} carregados, ${h} renderizados (raio ${e.radius})`, `Mobs: ${this.mobs.mobs.length} (${this.mobs.count(!0)} hostis)  Itens: ${this.entities.items.length}`, `Modo: ${t.mode === "creative" ? "Criativo" : "Sobrevivência"}  Dificuldade: ${Ps[this.difficulty]}`, `Dia ${this.day + 1}, hora ${Math.floor((this.ticks / 1e3 + 6) % 24)}:${String(Math.floor(this.ticks % 1e3 / 1e3 * 60)).padStart(2, "0")}`, `Draw calls: ${this.renderer.info.render.calls}  Triângulos: ${this.renderer.info.render.triangles}`].join(`
`)
    }
}
const Po = [[0, 1], [-1, 0], [0, -1], [1, 0]]
  , Gg = document.getElementById("game");
try {
    const i = new zg(Gg);
    window.__game = i,
    i.start()
} catch (i) {
    console.error(i),
    document.getElementById("ui").innerHTML = `<div class="fatal">Não foi possível iniciar o jogo (WebGL necessário).<br>${String(i)}</div>`
}
