import { r as K, g as Y, a as G } from './react-BI3NJeJA.js';

var e,
  t,
  n,
  r,
  a,
  l,
  o,
  i,
  s,
  u,
  c,
  d,
  f,
  h,
  p,
  m,
  y,
  v,
  g,
  b,
  w,
  k,
  S,
  x,
  E,
  C,
  P,
  L,
  z,
  R,
  T,
  N,
  _,
  M,
  D,
  O,
  A,
  F,
  j,
  $,
  I,
  U = (e) => {
    throw TypeError(e);
  },
  q = (e, t, n) => t.has(e) || U('Cannot ' + n),
  H = (e, t, n) => (q(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
  W = (e, t, n) =>
    t.has(e)
      ? U('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  B = (e, t, n, r) => (q(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n),
  Q = (e, t, n) => (q(e, t, 'access private method'), n),
  V = (e, t, n, r) => ({
    set _(r) {
      B(e, t, r, n);
    },
    get _() {
      return H(e, t, r);
    },
  });
import { r as K, g as Y, a as G } from './react-BI3NJeJA.js';
!(function () {
  const e = document.createElement('link').relList;
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
    new MutationObserver((e) => {
      for (const n of e)
        if ('childList' === n.type)
          for (const e of n.addedNodes) 'LINK' === e.tagName && 'modulepreload' === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        'use-credentials' === e.crossOrigin
          ? (t.credentials = 'include')
          : 'anonymous' === e.crossOrigin
            ? (t.credentials = 'omit')
            : (t.credentials = 'same-origin'),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
var X,
  J,
  Z = { exports: {} },
  ee = {};
var te =
  (J ||
    ((J = 1),
    (Z.exports = (function () {
      if (X) return ee;
      X = 1;
      var e = Symbol.for('react.transitional.element'),
        t = Symbol.for('react.fragment');
      function n(t, n, r) {
        var a = null;
        if ((void 0 !== r && (a = '' + r), void 0 !== n.key && (a = '' + n.key), 'key' in n))
          for (var l in ((r = {}), n)) 'key' !== l && (r[l] = n[l]);
        else r = n;
        return (
          (n = r.ref),
          { $$typeof: e, type: t, key: a, ref: void 0 !== n ? n : null, props: r }
        );
      }
      return ((ee.Fragment = t), (ee.jsx = n), (ee.jsxs = n), ee);
    })())),
  Z.exports);
const ne = {
  pagination: '_pagination_1mar4_1',
  'pagination-button': '_pagination-button_1mar4_8',
  active: '_active_1mar4_23',
  'pagination-ellipsis': '_pagination-ellipsis_1mar4_33',
};
var re = K();
const ae = ({
    totalItems: e,
    itemsPerPage: t,
    currentPage: n,
    onPageChange: r,
    maxVisiblePages: a = 5,
  }) => {
    const l = Math.max(Math.ceil(e / t), 1),
      [o, i] = re.useState([]),
      s = () =>
        te.jsx('svg', {
          width: '8',
          height: '11',
          viewBox: '0 0 8 11',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: te.jsx('path', {
            d: 'M6.49701 10.4959C6.36446 10.4959 6.23053 10.4521 6.1187 10.3646L0.267188 5.70389C0.124973 5.59042 0.0421295 5.41952 0.0421295 5.23768C0.0421295 5.05721 0.124973 4.88495 0.267188 4.77284L6.09384 0.136706C6.35342 -0.0697388 6.73312 -0.0287232 6.94161 0.228308C7.1501 0.485339 7.10867 0.861316 6.8491 1.06776L1.60787 5.23768L6.87533 9.43358C7.13491 9.64003 7.17633 10.016 6.96784 10.273C6.84772 10.4193 6.67375 10.4959 6.49701 10.4959Z',
            fill: 'black',
            fillOpacity: '0.75',
          }),
        }),
      u = () =>
        te.jsx('svg', {
          width: '8',
          height: '10',
          viewBox: '0 0 8 10',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: te.jsx('path', {
            d: 'M1.50559 10C1.63834 10 1.77247 9.9583 1.88448 9.87489L7.7449 5.43216C7.88733 5.324 7.9703 5.16109 7.9703 4.98776C7.9703 4.81573 7.88733 4.65153 7.7449 4.54466L1.90937 0.125395C1.6494 -0.0713929 1.26913 -0.0322959 1.06032 0.212712C0.851513 0.45772 0.892998 0.81611 1.15297 1.0129L6.40217 4.98776L1.1267 8.98739C0.866724 9.18418 0.825239 9.54256 1.03405 9.78757C1.15435 9.92702 1.32859 10 1.50559 10Z',
            fill: 'black',
            fillOpacity: '0.75',
          }),
        });
    return (
      re.useEffect(() => {
        const e = Math.floor(a / 2);
        let t = Math.max(1, n - e);
        const r = Math.min(l, t + a - 1);
        (r - t + 1 < a && (t = Math.max(1, r - a + 1)),
          i(Array.from({ length: r - t + 1 }, (e, n) => t + n)));
      }, [n, l, a]),
      l <= 1
        ? null
        : te.jsxs('div', {
            className: ne.pagination,
            children: [
              te.jsxs('button', {
                onClick: () => r(1),
                disabled: 1 === n,
                className: ne['pagination-button'],
                'aria-label': 'Go to first page',
                children: [te.jsx(s, {}), te.jsx(s, {})],
              }),
              te.jsx('button', {
                onClick: () => r(Math.max(1, n - 1)),
                disabled: 1 === n,
                className: ne['pagination-button'],
                'aria-label': 'Go to previous page',
                children: te.jsx(s, {}),
              }),
              o[0] > 1 &&
                te.jsxs(te.Fragment, {
                  children: [
                    te.jsx('button', {
                      onClick: () => r(1),
                      className: `${ne['pagination-button']} ${ne['' + (1 === n ? 'active' : '')]}`,
                      children: '1',
                    }),
                    o[0] > 2 &&
                      te.jsx('span', { className: ne['paginatio-ellipsis'], children: '...' }),
                  ],
                }),
              o.map((e) =>
                te.jsx(
                  'button',
                  {
                    onClick: () => r(e),
                    className: `${ne['pagination-button']} ${ne['' + (e === n ? 'active' : '')]}`,
                    children: e,
                  },
                  e,
                ),
              ),
              o[o.length - 1] < l &&
                te.jsxs(te.Fragment, {
                  children: [
                    o[o.length - 1] < l - 1 &&
                      te.jsx('span', { className: ne['pagintaion-ellipsis'], children: '..' }),
                    te.jsx('button', {
                      onClick: () => r(l),
                      className: `${ne['pagination-button']} ${ne[l === n ? 'active' : '']}`,
                      children: l,
                    }),
                  ],
                }),
              te.jsx('button', {
                onClick: () => {
                  r(Math.min(l, n + 1));
                },
                disabled: n === l,
                className: ne['pagination-button'],
                'aria-label': 'Go to next page',
                children: te.jsx(u, {}),
              }),
              te.jsxs('button', {
                onClick: () => r(l),
                disabled: n === l,
                className: ne['pagination-button'],
                'aria-label': 'Go to last page',
                children: [te.jsx(u, {}), te.jsx(u, {})],
              }),
            ],
          })
    );
  },
  le = '_skeleton-container_ugrkk_1',
  oe = '_skeleton-wrapper_ugrkk_13',
  ie = '_title_ugrkk_17',
  se = '_skeleton-header_ugrkk_21',
  ue = '_skeleton-th_ugrkk_26',
  ce = '_skeleton-body_ugrkk_35',
  de = '_skeleton-row_ugrkk_40',
  fe = '_skeleton-td_ugrkk_45',
  he = ({ title: e, rowsCount: t = 10, columnsCount: n, columns: r, pagination: a }) =>
    te.jsxs('div', {
      className: le,
      children: [
        te.jsx('h1', { className: ie, children: e }),
        te.jsxs('div', {
          className: oe,
          children: [
            te.jsx('div', {
              className: se,
              children: Array.from({ length: n }).map((e, t) => {
                var n;
                return te.jsx(
                  'div',
                  { className: ue, style: { width: null == (n = r[t]) ? void 0 : n.width } },
                  `header-${t}`,
                );
              }),
            }),
            te.jsx('div', {
              className: ce,
              children: Array.from({ length: t }).map((e, t) =>
                te.jsx(
                  'div',
                  {
                    className: de,
                    children: Array.from({ length: n }).map((e, n) => {
                      var a;
                      return te.jsx(
                        'div',
                        { className: fe, style: { width: null == (a = r[n]) ? void 0 : a.width } },
                        `cell-${t}-${n}`,
                      );
                    }),
                  },
                  `row-${t}`,
                ),
              ),
            }),
          ],
        }),
        te.jsx('div', {
          style: { minHeight: '50px' },
          children: te.jsx(ae, {
            totalItems: a.total,
            itemsPerPage: a.pageSize,
            currentPage: a.current,
            onPageChange: () => {},
          }),
        }),
      ],
    }),
  pe = '_admin-table_7xfbq_5',
  me = '_table-container_7xfbq_16',
  ye = '_title_7xfbq_21',
  ve = '_table-cell_7xfbq_54',
  ge = '_ellipsis-cell_7xfbq_61',
  be = '_header-cell_7xfbq_75',
  we = '_sortable_7xfbq_82',
  ke = '_sort-icons_7xfbq_90',
  Se = '_sort-icon_7xfbq_90',
  xe = '_active_7xfbq_100',
  Ee = '_clickable_7xfbq_104',
  Ce = '_selector_7xfbq_123',
  Pe = Y(re).memo(
    ({
      title: e,
      columns: t,
      fetchData: n,
      rowKey: r = 'id',
      selectable: a = !1,
      onRowClick: l,
      onSelectionChange: o,
    }) => {
      const [i, s] = re.useState([]),
        [u, c] = re.useState(!1),
        [d, f] = re.useState(null),
        [h, p] = re.useState({ current: 1, pageSize: 10, total: 0 }),
        [m, y] = re.useState(null),
        [v, g] = re.useState([]),
        b = re.useMemo(() => t, [t]),
        w = async (e, t) => {
          c(!0);
          try {
            const r = await n({ page: e, pageSize: t });
            (s(r.data), p(r.pagination), f(null));
          } catch (r) {
            f('Error fetching');
          } finally {
            c(!1);
          }
        };
      (re.useEffect(() => {
        w(1, 10);
      }, []),
        re.useEffect(() => {
          const e = [...i];
          (m &&
            e.sort((e, t) => {
              const n = e[m.key],
                r = t[m.key];
              return n === r
                ? 0
                : null == n
                  ? 'asc' === m.direction
                    ? -1
                    : 1
                  : null == r
                    ? 'asc' === m.direction
                      ? 1
                      : -1
                    : 'string' == typeof n && 'string' == typeof r
                      ? 'asc' === m.direction
                        ? n.localeCompare(r)
                        : r.localeCompare(n)
                      : 'asc' === m.direction
                        ? n > r
                          ? 1
                          : -1
                        : n < r
                          ? 1
                          : -1;
            }),
            s(e));
        }, [m]));
      return u
        ? te.jsx(he, {
            title: e,
            rowsCount: h.pageSize,
            columnsCount: b.length,
            columns: b,
            pagination: h,
          })
        : d
          ? te.jsx('div', { children: 'Error' })
          : te.jsxs('div', {
              className: pe,
              children: [
                te.jsx('h1', { className: ye, children: e }),
                te.jsx('div', {
                  className: me,
                  children: te.jsxs('table', {
                    title: e,
                    children: [
                      te.jsx('colgroup', {
                        children: t.map((e) => te.jsx('col', { style: { width: e.width } }, e.key)),
                      }),
                      te.jsx('thead', {
                        children: te.jsxs('tr', {
                          children: [
                            t.map((e) =>
                              te.jsx(
                                'th',
                                {
                                  style: { width: e.width },
                                  onClick: () =>
                                    e.sortable &&
                                    ((e) => {
                                      const t =
                                        (null == m ? void 0 : m.key) === e && 'asc' === m.direction
                                          ? 'desc'
                                          : 'asc';
                                      y({ key: e, direction: t });
                                    })(e.key),
                                  className: e.sortable ? we : '',
                                  children: te.jsxs('div', {
                                    className: be,
                                    children: [
                                      e.title,
                                      e.sortable &&
                                        te.jsxs('span', {
                                          className: ke,
                                          children: [
                                            te.jsx('svg', {
                                              width: '10',
                                              height: '6',
                                              viewBox: '0 0 10 6',
                                              fill: 'none',
                                              className: `${Se} ${(null == m ? void 0 : m.key) === e.key && 'asc' === (null == m ? void 0 : m.direction) ? xe : ''}`,
                                              children: te.jsx('path', {
                                                d: 'M5 0L9.33013 5.25H0.669873L5 0Z',
                                                fill: 'currentColor',
                                              }),
                                            }),
                                            te.jsx('svg', {
                                              width: '10',
                                              height: '6',
                                              viewBox: '0 0 10 6',
                                              fill: 'none',
                                              className: `${Se} ${(null == m ? void 0 : m.key) === e.key && 'desc' === (null == m ? void 0 : m.direction) ? xe : ''}`,
                                              children: te.jsx('path', {
                                                d: 'M5 6L0.669873 0.75H9.33013L5 6Z',
                                                fill: 'currentColor',
                                              }),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                },
                                e.key,
                              ),
                            ),
                            a &&
                              te.jsx('th', {
                                className: Ce,
                                children: te.jsx('input', {
                                  type: 'checkbox',
                                  checked: v.length === i.length && i.length > 0,
                                  onChange: (e) =>
                                    ((e) => {
                                      const t = e ? i : [];
                                      (g(t), null == o || o(t));
                                    })(e.target.checked),
                                }),
                              }),
                          ],
                        }),
                      }),
                      te.jsx('tbody', {
                        children: i.map((e) =>
                          te.jsxs(
                            'tr',
                            {
                              onClick: () => (null == l ? void 0 : l(e)),
                              className: l ? `${Ee}` : ' ',
                              children: [
                                t.map((t) =>
                                  te.jsx(
                                    'td',
                                    {
                                      className: `${ve} ${ge}`,
                                      style: { width: t.width },
                                      children: t.render ? t.render(e[t.key], e) : String(e[t.key]),
                                    },
                                    t.key,
                                  ),
                                ),
                                a &&
                                  te.jsx('td', {
                                    children: te.jsx('input', {
                                      type: 'checkbox',
                                      checked: v.some((t) => t[r] === e[r]),
                                      onChange: (t) =>
                                        ((e, t) => {
                                          const n = t ? [...v, e] : v.filter((t) => t[r] !== e[r]);
                                          (g(n), null == o || o(n));
                                        })(e, t.target.checked),
                                      onClick: (e) => e.stopPropagation(),
                                    }),
                                  }),
                              ],
                            },
                            String(e[r]),
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
                te.jsx('div', {
                  style: { minHeight: '50px' },
                  children: te.jsx(ae, {
                    totalItems: h.total,
                    itemsPerPage: h.pageSize,
                    currentPage: h.current,
                    onPageChange: (e) => {
                      (p((t) => ({ ...t, current: e })), w(e, h.pageSize));
                    },
                  }),
                }),
              ],
            });
    },
  ),
  Le = async (e) => {
    var t;
    const n = new URLSearchParams({ page: e.page.toString(), size: e.pageSize.toString() }),
      r = await fetch(`http://92.118.114.29:8080/api/passengers?${n}`, {
        headers: { 'Content-Type': 'application/json' },
      });
    if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
    const a = await r.json();
    return {
      data:
        (null == (t = a.content)
          ? void 0
          : t.map((e) => ({
              id: e.id,
              FIO: `${e.lastName} ${e.firstName} ${e.passport.middleName}`,
              gender: e.passport.gender,
              phone: e.phoneNumber,
              birthDate: new Date(e.birthDate).toLocaleDateString(),
              serialNumber: e.passport.serialNumberPassport,
              citizenship: e.passport.passportIssuingCountry,
              passportIssuingDate: new Date(e.passport.passportIssuingDate).toLocaleDateString(),
              email: e.email,
            }))) || [],
      pagination: { current: e.page, pageSize: e.pageSize, total: a.totalElements },
    };
  },
  ze = [
    { key: 'id', title: 'ID', sortable: !0, width: 60 },
    { key: 'FIO', title: 'Имя, Фамилия, Отчество', sortable: !0, width: 200 },
    { key: 'gender', title: 'Пол', sortable: !0, width: 80 },
    { key: 'phone', title: 'Телефон', sortable: !0, width: 130 },
    { key: 'birthDate', title: 'Дата рождения', sortable: !0, width: 110 },
    { key: 'serialNumber', title: 'Серийный номер', sortable: !0, width: 125 },
    { key: 'citizenship', title: 'Гражданство', sortable: !0, width: 130 },
    { key: 'passportIssuingDate', title: 'Дата выдачи паспорта', sortable: !0, width: 110 },
  ],
  Re = () =>
    te.jsx(te.Fragment, {
      children: te.jsx(Pe, {
        title: 'Пассажиры',
        columns: ze,
        fetchData: Le,
        rowKey: 'id',
        selectable: !0,
        onRowClick: (e) => {},
        onSelectionChange: (e) => {},
      }),
    });
var Te,
  Ne = {};
!(function () {
  if (Te) return Ne;
  ((Te = 1),
    Object.defineProperty(Ne, '__esModule', { value: !0 }),
    (Ne.parse = function (e, t) {
      const n = new l(),
        r = e.length;
      if (r < 2) return n;
      const a = (null == t ? void 0 : t.decode) || s;
      let u = 0;
      do {
        const t = e.indexOf('=', u);
        if (-1 === t) break;
        const l = e.indexOf(';', u),
          s = -1 === l ? r : l;
        if (t > s) {
          u = e.lastIndexOf(';', t - 1) + 1;
          continue;
        }
        const c = o(e, u, t),
          d = i(e, t, c),
          f = e.slice(c, d);
        if (void 0 === n[f]) {
          let r = o(e, t + 1, s),
            l = i(e, s, r);
          const u = a(e.slice(r, l));
          n[f] = u;
        }
        u = s + 1;
      } while (u < r);
      return n;
    }),
    (Ne.serialize = function (l, o, i) {
      const s = (null == i ? void 0 : i.encode) || encodeURIComponent;
      if (!e.test(l)) throw new TypeError(`argument name is invalid: ${l}`);
      const u = s(o);
      if (!t.test(u)) throw new TypeError(`argument val is invalid: ${o}`);
      let c = l + '=' + u;
      if (!i) return c;
      if (void 0 !== i.maxAge) {
        if (!Number.isInteger(i.maxAge))
          throw new TypeError(`option maxAge is invalid: ${i.maxAge}`);
        c += '; Max-Age=' + i.maxAge;
      }
      if (i.domain) {
        if (!n.test(i.domain)) throw new TypeError(`option domain is invalid: ${i.domain}`);
        c += '; Domain=' + i.domain;
      }
      if (i.path) {
        if (!r.test(i.path)) throw new TypeError(`option path is invalid: ${i.path}`);
        c += '; Path=' + i.path;
      }
      if (i.expires) {
        if (
          !(function (e) {
            return '[object Date]' === a.call(e);
          })(i.expires) ||
          !Number.isFinite(i.expires.valueOf())
        )
          throw new TypeError(`option expires is invalid: ${i.expires}`);
        c += '; Expires=' + i.expires.toUTCString();
      }
      i.httpOnly && (c += '; HttpOnly');
      i.secure && (c += '; Secure');
      i.partitioned && (c += '; Partitioned');
      if (i.priority) {
        switch ('string' == typeof i.priority ? i.priority.toLowerCase() : void 0) {
          case 'low':
            c += '; Priority=Low';
            break;
          case 'medium':
            c += '; Priority=Medium';
            break;
          case 'high':
            c += '; Priority=High';
            break;
          default:
            throw new TypeError(`option priority is invalid: ${i.priority}`);
        }
      }
      if (i.sameSite) {
        switch ('string' == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
          case !0:
          case 'strict':
            c += '; SameSite=Strict';
            break;
          case 'lax':
            c += '; SameSite=Lax';
            break;
          case 'none':
            c += '; SameSite=None';
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${i.sameSite}`);
        }
      }
      return c;
    }));
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    n = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    r = /^[\u0020-\u003A\u003D-\u007E]*$/,
    a = Object.prototype.toString,
    l = (() => {
      const e = function () {};
      return ((e.prototype = Object.create(null)), e);
    })();
  function o(e, t, n) {
    do {
      const n = e.charCodeAt(t);
      if (32 !== n && 9 !== n) return t;
    } while (++t < n);
    return n;
  }
  function i(e, t, n) {
    for (; t > n; ) {
      const n = e.charCodeAt(--t);
      if (32 !== n && 9 !== n) return t + 1;
    }
    return n;
  }
  function s(e) {
    if (-1 === e.indexOf('%')) return e;
    try {
      return decodeURIComponent(e);
    } catch (t) {
      return e;
    }
  }
})();
var _e,
  Me = (e) => {
    throw TypeError(e);
  },
  De = (e, t, n) => (
    ((e, t, n) => {
      t.has(e) || Me('Cannot ' + n);
    })(e, t, 'read from private field'),
    n ? n.call(e) : t.get(e)
  ),
  Oe = 'popstate';
function Ae(e = {}) {
  return (function (e, t, n, r = {}) {
    let { window: a = document.defaultView, v5Compat: l = !1 } = r,
      o = a.history,
      i = 'POP',
      s = null,
      u = c();
    null == u && ((u = 0), o.replaceState({ ...o.state, idx: u }, ''));
    function c() {
      return (o.state || { idx: null }).idx;
    }
    function d() {
      i = 'POP';
      let e = c(),
        t = null == e ? null : e - u;
      ((u = e), s && s({ action: i, location: m.location, delta: t }));
    }
    function f(e, t) {
      i = 'PUSH';
      let n = Ie(m.location, e, t);
      u = c() + 1;
      let r = $e(n, u),
        d = m.createHref(n);
      try {
        o.pushState(r, '', d);
      } catch (f) {
        if (f instanceof DOMException && 'DataCloneError' === f.name) throw f;
        a.location.assign(d);
      }
      l && s && s({ action: i, location: m.location, delta: 1 });
    }
    function h(e, t) {
      i = 'REPLACE';
      let n = Ie(m.location, e, t);
      u = c();
      let r = $e(n, u),
        a = m.createHref(n);
      (o.replaceState(r, '', a), l && s && s({ action: i, location: m.location, delta: 0 }));
    }
    function p(e) {
      return He(e);
    }
    let m = {
      get action() {
        return i;
      },
      get location() {
        return e(a, o);
      },
      listen(e) {
        if (s) throw new Error('A history only accepts one active listener');
        return (
          a.addEventListener(Oe, d),
          (s = e),
          () => {
            (a.removeEventListener(Oe, d), (s = null));
          }
        );
      },
      createHref: (e) => t(a, e),
      createURL: p,
      encodeLocation(e) {
        let t = p(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: f,
      replace: h,
      go: (e) => o.go(e),
    };
    return m;
  })(
    function (e, t) {
      let { pathname: n, search: r, hash: a } = e.location;
      return Ie(
        '',
        { pathname: n, search: r, hash: a },
        (t.state && t.state.usr) || null,
        (t.state && t.state.key) || 'default',
      );
    },
    function (e, t) {
      return 'string' == typeof t ? t : Ue(t);
    },
    0,
    e,
  );
}
function Fe(e, t) {
  if (!1 === e || null == e) throw new Error(t);
}
function je(e, t) {
  if (!e)
    try {
      throw new Error(t);
    } catch (n) {}
}
function $e(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ie(e, t, n = null, r) {
  return {
    pathname: 'string' == typeof e ? e : e.pathname,
    search: '',
    hash: '',
    ...('string' == typeof t ? qe(t) : t),
    state: n,
    key: (t && t.key) || r || Math.random().toString(36).substring(2, 10),
  };
}
function Ue({ pathname: e = '/', search: t = '', hash: n = '' }) {
  return (
    t && '?' !== t && (e += '?' === t.charAt(0) ? t : '?' + t),
    n && '#' !== n && (e += '#' === n.charAt(0) ? n : '#' + n),
    e
  );
}
function qe(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf('?');
    (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))), e && (t.pathname = e));
  }
  return t;
}
function He(e, t = !1) {
  let n = 'http://localhost';
  ('undefined' != typeof window &&
    (n = 'null' !== window.location.origin ? window.location.origin : window.location.href),
    Fe(n, 'No window.location.(origin|href) available to create URL'));
  let r = 'string' == typeof e ? e : Ue(e);
  return ((r = r.replace(/ $/, '%20')), !t && r.startsWith('//') && (r = n + r), new URL(r, n));
}
var We = class {
  constructor(e) {
    var t, n, r;
    if (
      ((t = this),
      (n = _e),
      (r = new Map()),
      n.has(t)
        ? Me('Cannot add the same private member more than once')
        : n instanceof WeakSet
          ? n.add(t)
          : n.set(t, r),
      e)
    )
      for (let [a, l] of e) this.set(a, l);
  }
  get(e) {
    if (De(this, _e).has(e)) return De(this, _e).get(e);
    if (void 0 !== e.defaultValue) return e.defaultValue;
    throw new Error('No value found for context');
  }
  set(e, t) {
    De(this, _e).set(e, t);
  }
};
_e = new WeakMap();
var Be = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
var Qe = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'unstable_middleware',
  'children',
]);
function Ve(e) {
  return Qe.has(e);
}
function Ke(e, t, n = [], r = {}) {
  return e.map((e, a) => {
    let l = [...n, String(a)],
      o = 'string' == typeof e.id ? e.id : l.join('-');
    if (
      (Fe(!0 !== e.index || !e.children, 'Cannot specify children on an index route'),
      Fe(
        !r[o],
        `Found a route id collision on id "${o}".  Route id's must be globally unique within Data Router usages`,
      ),
      (function (e) {
        return !0 === e.index;
      })(e))
    ) {
      let n = { ...e, ...t(e), id: o };
      return ((r[o] = n), n);
    }
    {
      let n = { ...e, ...t(e), id: o, children: void 0 };
      return ((r[o] = n), e.children && (n.children = Ke(e.children, t, l, r)), n);
    }
  });
}
function Ye(e, t, n = '/') {
  return Ge(e, t, n, !1);
}
function Ge(e, t, n, r) {
  let a = ct(('string' == typeof t ? qe(t) : t).pathname || '/', n);
  if (null == a) return null;
  let l = Xe(e);
  !(function (e) {
    e.sort((e, t) =>
      e.score !== t.score
        ? t.score - e.score
        : (function (e, t) {
            let n = e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]);
            return n ? e[e.length - 1] - t[t.length - 1] : 0;
          })(
            e.routesMeta.map((e) => e.childrenIndex),
            t.routesMeta.map((e) => e.childrenIndex),
          ),
    );
  })(l);
  let o = null;
  for (let i = 0; null == o && i < l.length; ++i) {
    let e = ut(a);
    o = it(l[i], e, r);
  }
  return o;
}
function Xe(e, t = [], n = [], r = '') {
  let a = (e, a, l) => {
    let o = {
      relativePath: void 0 === l ? e.path || '' : l,
      caseSensitive: !0 === e.caseSensitive,
      childrenIndex: a,
      route: e,
    };
    o.relativePath.startsWith('/') &&
      (Fe(
        o.relativePath.startsWith(r),
        `Absolute route path "${o.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (o.relativePath = o.relativePath.slice(r.length)));
    let i = mt([r, o.relativePath]),
      s = n.concat(o);
    (e.children &&
      e.children.length > 0 &&
      (Fe(
        !0 !== e.index,
        `Index routes must not have child routes. Please remove all child routes from route path "${i}".`,
      ),
      Xe(e.children, t, s, i)),
      (null != e.path || e.index) && t.push({ path: i, score: ot(i, e.index), routesMeta: s }));
  };
  return (
    e.forEach((e, t) => {
      var n;
      if ('' !== e.path && (null == (n = e.path) ? void 0 : n.includes('?')))
        for (let r of Je(e.path)) a(e, t, r);
      else a(e, t);
    }),
    t
  );
}
function Je(e) {
  let t = e.split('/');
  if (0 === t.length) return [];
  let [n, ...r] = t,
    a = n.endsWith('?'),
    l = n.replace(/\?$/, '');
  if (0 === r.length) return a ? [l, ''] : [l];
  let o = Je(r.join('/')),
    i = [];
  return (
    i.push(...o.map((e) => ('' === e ? l : [l, e].join('/')))),
    a && i.push(...o),
    i.map((t) => (e.startsWith('/') && '' === t ? '/' : t))
  );
}
var Ze = /^:[\w-]+$/,
  et = 3,
  tt = 2,
  nt = 1,
  rt = 10,
  at = -2,
  lt = (e) => '*' === e;
function ot(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(lt) && (r += at),
    t && (r += tt),
    n.filter((e) => !lt(e)).reduce((e, t) => e + (Ze.test(t) ? et : '' === t ? nt : rt), r)
  );
}
function it(e, t, n = !1) {
  let { routesMeta: r } = e,
    a = {},
    l = '/',
    o = [];
  for (let i = 0; i < r.length; ++i) {
    let e = r[i],
      s = i === r.length - 1,
      u = '/' === l ? t : t.slice(l.length) || '/',
      c = st({ path: e.relativePath, caseSensitive: e.caseSensitive, end: s }, u),
      d = e.route;
    if (
      (!c &&
        s &&
        n &&
        !r[r.length - 1].route.index &&
        (c = st({ path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 }, u)),
      !c)
    )
      return null;
    (Object.assign(a, c.params),
      o.push({
        params: a,
        pathname: mt([l, c.pathname]),
        pathnameBase: yt(mt([l, c.pathnameBase])),
        route: d,
      }),
      '/' !== c.pathnameBase && (l = mt([l, c.pathnameBase])));
  }
  return o;
}
function st(e, t) {
  'string' == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = (function (e, t = !1, n = !0) {
      je(
        '*' === e || !e.endsWith('*') || e.endsWith('/*'),
        `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, '/*')}".`,
      );
      let r = [],
        a =
          '^' +
          e
            .replace(/\/*\*?$/, '')
            .replace(/^\/*/, '/')
            .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
            .replace(
              /\/:([\w-]+)(\?)?/g,
              (e, t, n) => (
                r.push({ paramName: t, isOptional: null != n }),
                n ? '/?([^\\/]+)?' : '/([^\\/]+)'
              ),
            );
      e.endsWith('*')
        ? (r.push({ paramName: '*' }),
          (a += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
        : n
          ? (a += '\\/*$')
          : '' !== e && '/' !== e && (a += '(?:(?=\\/|$))');
      let l = new RegExp(a, t ? void 0 : 'i');
      return [l, r];
    })(e.path, e.caseSensitive, e.end),
    a = t.match(n);
  if (!a) return null;
  let l = a[0],
    o = l.replace(/(.)\/+$/, '$1'),
    i = a.slice(1);
  return {
    params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
      if ('*' === t) {
        let e = i[r] || '';
        o = l.slice(0, l.length - e.length).replace(/(.)\/+$/, '$1');
      }
      const a = i[r];
      return ((e[t] = n && !a ? void 0 : (a || '').replace(/%2F/g, '/')), e);
    }, {}),
    pathname: l,
    pathnameBase: o,
    pattern: e,
  };
}
function ut(e) {
  try {
    return e
      .split('/')
      .map((e) => decodeURIComponent(e).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      je(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function ct(e, t) {
  if ('/' === t) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && '/' !== r ? null : e.slice(n) || '/';
}
function dt(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ft(e) {
  return e.filter((e, t) => 0 === t || (e.route.path && e.route.path.length > 0));
}
function ht(e) {
  let t = ft(e);
  return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
}
function pt(e, t, n, r = !1) {
  let a;
  'string' == typeof e
    ? (a = qe(e))
    : ((a = { ...e }),
      Fe(!a.pathname || !a.pathname.includes('?'), dt('?', 'pathname', 'search', a)),
      Fe(!a.pathname || !a.pathname.includes('#'), dt('#', 'pathname', 'hash', a)),
      Fe(!a.search || !a.search.includes('#'), dt('#', 'search', 'hash', a)));
  let l,
    o = '' === e || '' === a.pathname,
    i = o ? '/' : a.pathname;
  if (null == i) l = n;
  else {
    let e = t.length - 1;
    if (!r && i.startsWith('..')) {
      let t = i.split('/');
      for (; '..' === t[0]; ) (t.shift(), (e -= 1));
      a.pathname = t.join('/');
    }
    l = e >= 0 ? t[e] : '/';
  }
  let s = (function (e, t = '/') {
      let { pathname: n, search: r = '', hash: a = '' } = 'string' == typeof e ? qe(e) : e,
        l = n
          ? n.startsWith('/')
            ? n
            : (function (e, t) {
                let n = t.replace(/\/+$/, '').split('/');
                return (
                  e.split('/').forEach((e) => {
                    '..' === e ? n.length > 1 && n.pop() : '.' !== e && n.push(e);
                  }),
                  n.length > 1 ? n.join('/') : '/'
                );
              })(n, t)
          : t;
      return { pathname: l, search: vt(r), hash: gt(a) };
    })(a, l),
    u = i && '/' !== i && i.endsWith('/'),
    c = (o || '.' === i) && n.endsWith('/');
  return (s.pathname.endsWith('/') || (!u && !c) || (s.pathname += '/'), s);
}
var mt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  yt = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  vt = (e) => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
  gt = (e) => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : ''),
  bt = class {
    constructor(e, t, n, r = !1) {
      ((this.status = e),
        (this.statusText = t || ''),
        (this.internal = r),
        n instanceof Error ? ((this.data = n.toString()), (this.error = n)) : (this.data = n));
    }
  };
function wt(e) {
  return (
    null != e &&
    'number' == typeof e.status &&
    'string' == typeof e.statusText &&
    'boolean' == typeof e.internal &&
    'data' in e
  );
}
var kt = ['POST', 'PUT', 'PATCH', 'DELETE'],
  St = new Set(kt),
  xt = ['GET', ...kt],
  Et = new Set(xt),
  Ct = new Set([301, 302, 303, 307, 308]),
  Pt = new Set([307, 308]),
  Lt = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  zt = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Rt = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Tt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Nt = (e) => ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }),
  _t = 'remix-router-transitions',
  Mt = Symbol('ResetLoaderData');
function Dt(e) {
  const t = e.window ? e.window : 'undefined' != typeof window ? window : void 0,
    n = void 0 !== t && void 0 !== t.document && void 0 !== t.document.createElement;
  Fe(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let r,
    a,
    l,
    o = e.hydrationRouteProperties || [],
    i = e.mapRouteProperties || Nt,
    s = {},
    u = Ke(e.routes, i, void 0, s),
    c = e.basename || '/',
    d = e.dataStrategy || Qt,
    f = { unstable_middleware: !1, ...e.future },
    h = null,
    p = new Set(),
    m = null,
    y = null,
    v = null,
    g = null != e.hydrationData,
    b = Ye(u, e.history.location, c),
    w = !1,
    k = null;
  if (null != b || e.patchRoutesOnNavigation) {
    if (b && !e.hydrationData) {
      de(b, u, e.history.location.pathname).active && (b = null);
    }
    if (b)
      if (b.some((e) => e.route.lazy)) a = !1;
      else if (b.some((e) => e.route.loader)) {
        let t = e.hydrationData ? e.hydrationData.loaderData : null,
          n = e.hydrationData ? e.hydrationData.errors : null;
        if (n) {
          let e = b.findIndex((e) => void 0 !== n[e.route.id]);
          a = b.slice(0, e + 1).every((e) => !jt(e.route, t, n));
        } else a = b.every((e) => !jt(e.route, t, n));
      } else a = !0;
    else {
      ((a = !1), (b = []));
      let t = de(null, u, e.history.location.pathname);
      t.active && t.matches && ((w = !0), (b = t.matches));
    }
  } else {
    let t = cn(404, { pathname: e.history.location.pathname }),
      { matches: n, route: r } = un(u);
    ((a = !0), (b = n), (k = { [r.id]: t }));
  }
  let S,
    x,
    E = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: b,
      initialized: a,
      navigation: Lt,
      restoreScrollPosition: null == e.hydrationData && null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || k,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = 'POP',
    P = !1,
    L = !1,
    z = new Map(),
    R = null,
    T = !1,
    N = !1,
    _ = new Set(),
    M = new Map(),
    D = 0,
    O = -1,
    A = new Map(),
    F = new Set(),
    j = new Map(),
    $ = new Map(),
    I = new Set(),
    U = new Map(),
    q = null;
  function H(e, t = {}) {
    E = { ...E, ...e };
    let n = [],
      r = [];
    (E.fetchers.forEach((e, t) => {
      'idle' === e.state && (I.has(t) ? n.push(t) : r.push(t));
    }),
      I.forEach((e) => {
        E.fetchers.has(e) || M.has(e) || n.push(e);
      }),
      [...p].forEach((e) =>
        e(E, {
          deletedFetchers: n,
          viewTransitionOpts: t.viewTransitionOpts,
          flushSync: !0 === t.flushSync,
        }),
      ),
      n.forEach((e) => ee(e)),
      r.forEach((e) => E.fetchers.delete(e)));
  }
  function W(t, n, { flushSync: a } = {}) {
    var l, o;
    let i,
      s =
        null != E.actionData &&
        null != E.navigation.formMethod &&
        gn(E.navigation.formMethod) &&
        'loading' === E.navigation.state &&
        !0 !== (null == (l = t.state) ? void 0 : l._isRedirect);
    i = n.actionData
      ? Object.keys(n.actionData).length > 0
        ? n.actionData
        : null
      : s
        ? E.actionData
        : null;
    let c = n.loaderData ? ln(E.loaderData, n.loaderData, n.matches || [], n.errors) : E.loaderData,
      d = E.blockers;
    d.size > 0 && ((d = new Map(d)), d.forEach((e, t) => d.set(t, Rt)));
    let f,
      h =
        !0 === P ||
        (null != E.navigation.formMethod &&
          gn(E.navigation.formMethod) &&
          !0 !== (null == (o = t.state) ? void 0 : o._isRedirect));
    if (
      (r && ((u = r), (r = void 0)),
      T ||
        'POP' === C ||
        ('PUSH' === C
          ? e.history.push(t, t.state)
          : 'REPLACE' === C && e.history.replace(t, t.state)),
      'POP' === C)
    ) {
      let e = z.get(E.location.pathname);
      e && e.has(t.pathname)
        ? (f = { currentLocation: E.location, nextLocation: t })
        : z.has(t.pathname) && (f = { currentLocation: t, nextLocation: E.location });
    } else if (L) {
      let e = z.get(E.location.pathname);
      (e ? e.add(t.pathname) : ((e = new Set([t.pathname])), z.set(E.location.pathname, e)),
        (f = { currentLocation: E.location, nextLocation: t }));
    }
    (H(
      {
        ...n,
        actionData: i,
        loaderData: c,
        historyAction: C,
        location: t,
        initialized: !0,
        navigation: Lt,
        revalidation: 'idle',
        restoreScrollPosition: ce(t, n.matches || E.matches),
        preventScrollReset: h,
        blockers: d,
      },
      { viewTransitionOpts: f, flushSync: !0 === a },
    ),
      (C = 'POP'),
      (P = !1),
      (L = !1),
      (T = !1),
      (N = !1),
      null == q || q.resolve(),
      (q = null));
  }
  async function B(t, n, a) {
    (S && S.abort(),
      (S = null),
      (C = t),
      (T = !0 === (a && a.startUninterruptedRevalidation)),
      (function (e, t) {
        if (m && v) {
          let n = ue(e, t);
          m[n] = v();
        }
      })(E.location, E.matches),
      (P = !0 === (a && a.preventScrollReset)),
      (L = !0 === (a && a.enableViewTransition)));
    let l = r || u,
      d = a && a.overrideNavigation,
      f =
        (null == a ? void 0 : a.initialHydration) && E.matches && E.matches.length > 0 && !w
          ? E.matches
          : Ye(l, n, c),
      h = !0 === (a && a.flushSync);
    if (
      f &&
      E.initialized &&
      !N &&
      (function (e, t) {
        if (e.pathname !== t.pathname || e.search !== t.search) return !1;
        if ('' === e.hash) return '' !== t.hash;
        if (e.hash === t.hash) return !0;
        if ('' !== t.hash) return !0;
        return !1;
      })(E.location, n) &&
      !(a && a.submission && gn(a.submission.formMethod))
    )
      return void W(n, { matches: f }, { flushSync: h });
    let p = de(f, l, n.pathname);
    if ((p.active && p.matches && (f = p.matches), !f)) {
      let { error: e, notFoundMatches: t, route: r } = se(n.pathname);
      return void W(n, { matches: t, loaderData: {}, errors: { [r.id]: e } }, { flushSync: h });
    }
    S = new AbortController();
    let y,
      g = tn(e.history, n, S.signal, a && a.submission),
      b = new We(e.unstable_getContext ? await e.unstable_getContext() : void 0);
    if (a && a.pendingError) y = [sn(f).route.id, { type: 'error', error: a.pendingError }];
    else if (a && a.submission && gn(a.submission.formMethod)) {
      let t = await (async function (e, t, n, r, a, l, u, d = {}) {
        G();
        let f,
          h = (function (e, t) {
            let n = {
              state: 'submitting',
              location: e,
              formMethod: t.formMethod,
              formAction: t.formAction,
              formEncType: t.formEncType,
              formData: t.formData,
              json: t.json,
              text: t.text,
            };
            return n;
          })(t, n);
        if ((H({ navigation: h }, { flushSync: !0 === d.flushSync }), l)) {
          let n = await fe(r, t.pathname, e.signal);
          if ('aborted' === n.type) return { shortCircuited: !0 };
          if ('error' === n.type) {
            let e = sn(n.partialMatches).route.id;
            return {
              matches: n.partialMatches,
              pendingActionResult: [e, { type: 'error', error: n.error }],
            };
          }
          if (!n.matches) {
            let { notFoundMatches: e, error: n, route: r } = se(t.pathname);
            return { matches: e, pendingActionResult: [r.id, { type: 'error', error: n }] };
          }
          r = n.matches;
        }
        let p = wn(r, t);
        if (p.route.action || p.route.lazy) {
          let t = Xt(i, s, e, r, p, u ? [] : o, a),
            n = await K(e, t, a, null);
          if (((f = n[p.route.id]), !f))
            for (let e of r)
              if (n[e.route.id]) {
                f = n[e.route.id];
                break;
              }
          if (e.signal.aborted) return { shortCircuited: !0 };
        } else
          f = {
            type: 'error',
            error: cn(405, { method: e.method, pathname: t.pathname, routeId: p.route.id }),
          };
        if (mn(f)) {
          let t;
          if (d && null != d.replace) t = d.replace;
          else {
            t =
              en(f.response.headers.get('Location'), new URL(e.url), c) ===
              E.location.pathname + E.location.search;
          }
          return (await V(e, f, !0, { submission: n, replace: t }), { shortCircuited: !0 });
        }
        if (pn(f)) {
          let e = sn(r, p.route.id);
          return (
            !0 !== (d && d.replace) && (C = 'PUSH'),
            { matches: r, pendingActionResult: [e.route.id, f, p.route.id] }
          );
        }
        return { matches: r, pendingActionResult: [p.route.id, f] };
      })(g, n, a.submission, f, b, p.active, a && !0 === a.initialHydration, {
        replace: a.replace,
        flushSync: h,
      });
      if (t.shortCircuited) return;
      if (t.pendingActionResult) {
        let [e, r] = t.pendingActionResult;
        if (pn(r) && wt(r.error) && 404 === r.error.status)
          return (
            (S = null),
            void W(n, { matches: t.matches, loaderData: {}, errors: { [e]: r.error } })
          );
      }
      ((f = t.matches || f),
        (y = t.pendingActionResult),
        (d = Sn(n, a.submission)),
        (h = !1),
        (p.active = !1),
        (g = tn(e.history, g.url, g.signal)));
    }
    let {
      shortCircuited: k,
      matches: x,
      loaderData: z,
      errors: R,
    } = await (async function (t, n, a, l, d, f, h, p, m, y, v, g) {
      let b = f || Sn(n, h),
        w = h || p || kn(b),
        k = !T && !y;
      if (d) {
        if (k) {
          let e = Q(g);
          H({ navigation: b, ...(void 0 !== e ? { actionData: e } : {}) }, { flushSync: v });
        }
        let e = await fe(a, n.pathname, t.signal);
        if ('aborted' === e.type) return { shortCircuited: !0 };
        if ('error' === e.type) {
          let t = sn(e.partialMatches).route.id;
          return { matches: e.partialMatches, loaderData: {}, errors: { [t]: e.error } };
        }
        if (!e.matches) {
          let { error: e, notFoundMatches: t, route: r } = se(n.pathname);
          return { matches: t, loaderData: {}, errors: { [r.id]: e } };
        }
        a = e.matches;
      }
      let x = r || u,
        { dsMatches: C, revalidatingFetchers: P } = Ft(
          t,
          l,
          i,
          s,
          e.history,
          E,
          a,
          w,
          n,
          y ? [] : o,
          !0 === y,
          N,
          _,
          I,
          j,
          F,
          x,
          c,
          null != e.patchRoutesOnNavigation,
          g,
        );
      if (((O = ++D), !e.dataStrategy && !C.some((e) => e.shouldLoad) && 0 === P.length)) {
        let e = re();
        return (
          W(
            n,
            {
              matches: a,
              loaderData: {},
              errors: g && pn(g[1]) ? { [g[0]]: g[1].error } : null,
              ...on(g),
              ...(e ? { fetchers: new Map(E.fetchers) } : {}),
            },
            { flushSync: v },
          ),
          { shortCircuited: !0 }
        );
      }
      if (k) {
        let e = {};
        if (!d) {
          e.navigation = b;
          let t = Q(g);
          void 0 !== t && (e.actionData = t);
        }
        (P.length > 0 &&
          (e.fetchers = (function (e) {
            return (
              e.forEach((e) => {
                let t = E.fetchers.get(e.key),
                  n = xn(void 0, t ? t.data : void 0);
                E.fetchers.set(e.key, n);
              }),
              new Map(E.fetchers)
            );
          })(P)),
          H(e, { flushSync: v }));
      }
      P.forEach((e) => {
        (te(e.key), e.controller && M.set(e.key, e.controller));
      });
      let L = () => P.forEach((e) => te(e.key));
      S && S.signal.addEventListener('abort', L);
      let { loaderResults: z, fetcherResults: R } = await Y(C, P, t, l);
      if (t.signal.aborted) return { shortCircuited: !0 };
      S && S.signal.removeEventListener('abort', L);
      P.forEach((e) => M.delete(e.key));
      let A = dn(z);
      if (A) return (await V(t, A.result, !0, { replace: m }), { shortCircuited: !0 });
      if (((A = dn(R)), A))
        return (F.add(A.key), await V(t, A.result, !0, { replace: m }), { shortCircuited: !0 });
      let { loaderData: $, errors: U } = an(E, a, z, g, P, R);
      y && E.errors && (U = { ...E.errors, ...U });
      let q = re(),
        B = ae(O),
        K = q || B || P.length > 0;
      return {
        matches: a,
        loaderData: $,
        errors: U,
        ...(K ? { fetchers: new Map(E.fetchers) } : {}),
      };
    })(
      g,
      n,
      f,
      b,
      p.active,
      d,
      a && a.submission,
      a && a.fetcherSubmission,
      a && a.replace,
      a && !0 === a.initialHydration,
      h,
      y,
    );
    k || ((S = null), W(n, { matches: x || f, ...on(y), loaderData: z, errors: R }));
  }
  function Q(e) {
    return e && !pn(e[1])
      ? { [e[0]]: e[1].data }
      : E.actionData
        ? 0 === Object.keys(E.actionData).length
          ? null
          : E.actionData
        : void 0;
  }
  async function V(
    e,
    r,
    a,
    { submission: l, fetcherSubmission: o, preventScrollReset: i, replace: s } = {},
  ) {
    r.response.headers.has('X-Remix-Revalidate') && (N = !0);
    let u = r.response.headers.get('Location');
    (Fe(u, 'Expected a Location header on the redirect Response'), (u = en(u, new URL(e.url), c)));
    let d = Ie(E.location, u, { _isRedirect: !0 });
    if (n) {
      let e = !1;
      if (r.response.headers.has('X-Remix-Reload-Document')) e = !0;
      else if (Tt.test(u)) {
        const n = He(u, !0);
        e = n.origin !== t.location.origin || null == ct(n.pathname, c);
      }
      if (e) return void (s ? t.location.replace(u) : t.location.assign(u));
    }
    S = null;
    let f = !0 === s || r.response.headers.has('X-Remix-Replace') ? 'REPLACE' : 'PUSH',
      { formMethod: h, formAction: p, formEncType: m } = E.navigation;
    !l && !o && h && p && m && (l = kn(E.navigation));
    let y = l || o;
    if (Pt.has(r.response.status) && y && gn(y.formMethod))
      await B(f, d, {
        submission: { ...y, formAction: u },
        preventScrollReset: i || P,
        enableViewTransition: a ? L : void 0,
      });
    else {
      let e = Sn(d, l);
      await B(f, d, {
        overrideNavigation: e,
        fetcherSubmission: o,
        preventScrollReset: i || P,
        enableViewTransition: a ? L : void 0,
      });
    }
  }
  async function K(e, t, n, r) {
    let a,
      l = {};
    try {
      a = await (async function (e, t, n, r, a) {
        n.some((e) => {
          var t;
          return null == (t = e._lazyPromises) ? void 0 : t.middleware;
        }) &&
          (await Promise.all(
            n.map((e) => {
              var t;
              return null == (t = e._lazyPromises) ? void 0 : t.middleware;
            }),
          ));
        let l = { request: t, params: n[0].params, context: a, matches: n },
          o = (e) => {
            let t = l;
            return Vt(
              t,
              !1,
              () =>
                e({
                  ...t,
                  fetcherKey: r,
                  unstable_runClientMiddleware: () => {
                    throw new Error(
                      'Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler',
                    );
                  },
                }),
              (e, t) => ({ [t]: { type: 'error', result: e } }),
            );
          },
          i = await e({ ...l, fetcherKey: r, unstable_runClientMiddleware: o });
        try {
          await Promise.all(
            n.flatMap((e) => {
              var t, n;
              return [
                null == (t = e._lazyPromises) ? void 0 : t.handler,
                null == (n = e._lazyPromises) ? void 0 : n.route,
              ];
            }),
          );
        } catch (s) {}
        return i;
      })(d, e, t, r, n);
    } catch (o) {
      return (
        t
          .filter((e) => e.shouldLoad)
          .forEach((e) => {
            l[e.route.id] = { type: 'error', error: o };
          }),
        l
      );
    }
    if (e.signal.aborted) return l;
    for (let [i, s] of Object.entries(a))
      if (hn(s)) {
        let n = s.result;
        l[i] = { type: 'redirect', response: Zt(n, e, i, t, c) };
      } else l[i] = await Jt(s);
    return l;
  }
  async function Y(e, t, n, r) {
    let a = K(n, e, r, null),
      l = Promise.all(
        t.map(async (e) => {
          if (e.matches && e.match && e.request && e.controller) {
            let t = (await K(e.request, e.matches, r, e.key))[e.match.route.id];
            return { [e.key]: t };
          }
          return Promise.resolve({
            [e.key]: { type: 'error', error: cn(404, { pathname: e.path }) },
          });
        }),
      );
    return {
      loaderResults: await a,
      fetcherResults: (await l).reduce((e, t) => Object.assign(e, t), {}),
    };
  }
  function G() {
    ((N = !0),
      j.forEach((e, t) => {
        (M.has(t) && _.add(t), te(t));
      }));
  }
  function X(e, t, n = {}) {
    (E.fetchers.set(e, t),
      H({ fetchers: new Map(E.fetchers) }, { flushSync: !0 === (n && n.flushSync) }));
  }
  function J(e, t, n, r = {}) {
    let a = sn(E.matches, t);
    (ee(e),
      H(
        { errors: { [a.route.id]: n }, fetchers: new Map(E.fetchers) },
        { flushSync: !0 === (r && r.flushSync) },
      ));
  }
  function Z(e) {
    return ($.set(e, ($.get(e) || 0) + 1), I.has(e) && I.delete(e), E.fetchers.get(e) || zt);
  }
  function ee(e) {
    let t = E.fetchers.get(e);
    (!M.has(e) || (t && 'loading' === t.state && A.has(e)) || te(e),
      j.delete(e),
      A.delete(e),
      F.delete(e),
      I.delete(e),
      _.delete(e),
      E.fetchers.delete(e));
  }
  function te(e) {
    let t = M.get(e);
    t && (t.abort(), M.delete(e));
  }
  function ne(e) {
    for (let t of e) {
      let e = En(Z(t).data);
      E.fetchers.set(t, e);
    }
  }
  function re() {
    let e = [],
      t = !1;
    for (let n of F) {
      let r = E.fetchers.get(n);
      (Fe(r, `Expected fetcher: ${n}`),
        'loading' === r.state && (F.delete(n), e.push(n), (t = !0)));
    }
    return (ne(e), t);
  }
  function ae(e) {
    let t = [];
    for (let [n, r] of A)
      if (r < e) {
        let e = E.fetchers.get(n);
        (Fe(e, `Expected fetcher: ${n}`), 'loading' === e.state && (te(n), A.delete(n), t.push(n)));
      }
    return (ne(t), t.length > 0);
  }
  function le(e) {
    (E.blockers.delete(e), U.delete(e));
  }
  function oe(e, t) {
    let n = E.blockers.get(e) || Rt;
    Fe(
      ('unblocked' === n.state && 'blocked' === t.state) ||
        ('blocked' === n.state && 'blocked' === t.state) ||
        ('blocked' === n.state && 'proceeding' === t.state) ||
        ('blocked' === n.state && 'unblocked' === t.state) ||
        ('proceeding' === n.state && 'unblocked' === t.state),
      `Invalid blocker state transition: ${n.state} -> ${t.state}`,
    );
    let r = new Map(E.blockers);
    (r.set(e, t), H({ blockers: r }));
  }
  function ie({ currentLocation: e, nextLocation: t, historyAction: n }) {
    if (0 === U.size) return;
    U.size > 1 && je(!1, 'A router only supports one blocker at a time');
    let r = Array.from(U.entries()),
      [a, l] = r[r.length - 1],
      o = E.blockers.get(a);
    return o && 'proceeding' === o.state
      ? void 0
      : l({ currentLocation: e, nextLocation: t, historyAction: n })
        ? a
        : void 0;
  }
  function se(e) {
    let t = cn(404, { pathname: e }),
      n = r || u,
      { matches: a, route: l } = un(n);
    return { notFoundMatches: a, route: l, error: t };
  }
  function ue(e, t) {
    if (y) {
      return (
        y(
          e,
          t.map((e) =>
            (function (e, t) {
              let { route: n, pathname: r, params: a } = e;
              return { id: n.id, pathname: r, params: a, data: t[n.id], handle: n.handle };
            })(e, E.loaderData),
          ),
        ) || e.key
      );
    }
    return e.key;
  }
  function ce(e, t) {
    if (m) {
      let n = ue(e, t),
        r = m[n];
      if ('number' == typeof r) return r;
    }
    return null;
  }
  function de(t, n, r) {
    if (e.patchRoutesOnNavigation) {
      if (!t) {
        return { active: !0, matches: Ge(n, r, c, !0) || [] };
      }
      if (Object.keys(t[0].params).length > 0) {
        return { active: !0, matches: Ge(n, r, c, !0) };
      }
    }
    return { active: !1, matches: null };
  }
  async function fe(t, n, a, l) {
    if (!e.patchRoutesOnNavigation) return { type: 'success', matches: t };
    let o = t;
    for (;;) {
      let t = null == r,
        f = r || u,
        h = s;
      try {
        await e.patchRoutesOnNavigation({
          signal: a,
          path: n,
          matches: o,
          fetcherKey: l,
          patch: (e, t) => {
            a.aborted || It(e, t, f, h, i);
          },
        });
      } catch (d) {
        return { type: 'error', error: d, partialMatches: o };
      } finally {
        t && !a.aborted && (u = [...u]);
      }
      if (a.aborted) return { type: 'aborted' };
      let p = Ye(f, n, c);
      if (p) return { type: 'success', matches: p };
      let m = Ge(f, n, c, !0);
      if (!m || (o.length === m.length && o.every((e, t) => e.route.id === m[t].route.id)))
        return { type: 'success', matches: null };
      o = m;
    }
  }
  return (
    (l = {
      get basename() {
        return c;
      },
      get future() {
        return f;
      },
      get state() {
        return E;
      },
      get routes() {
        return u;
      },
      get window() {
        return t;
      },
      initialize: function () {
        if (
          ((h = e.history.listen(({ action: t, location: n, delta: r }) => {
            if (x) return (x(), void (x = void 0));
            je(
              0 === U.size || null != r,
              'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
            );
            let a = ie({ currentLocation: E.location, nextLocation: n, historyAction: t });
            if (a && null != r) {
              let t = new Promise((e) => {
                x = e;
              });
              return (
                e.history.go(-1 * r),
                void oe(a, {
                  state: 'blocked',
                  location: n,
                  proceed() {
                    (oe(a, { state: 'proceeding', proceed: void 0, reset: void 0, location: n }),
                      t.then(() => e.history.go(r)));
                  },
                  reset() {
                    let e = new Map(E.blockers);
                    (e.set(a, Rt), H({ blockers: e }));
                  },
                })
              );
            }
            return B(t, n);
          })),
          n)
        ) {
          !(function (e, t) {
            try {
              let n = e.sessionStorage.getItem(_t);
              if (n) {
                let e = JSON.parse(n);
                for (let [n, r] of Object.entries(e || {}))
                  r && Array.isArray(r) && t.set(n, new Set(r || []));
              }
            } catch (n) {}
          })(t, z);
          let e = () =>
            (function (e, t) {
              if (t.size > 0) {
                let r = {};
                for (let [e, n] of t) r[e] = [...n];
                try {
                  e.sessionStorage.setItem(_t, JSON.stringify(r));
                } catch (n) {
                  je(!1, `Failed to save applied view transitions in sessionStorage (${n}).`);
                }
              }
            })(t, z);
          (t.addEventListener('pagehide', e), (R = () => t.removeEventListener('pagehide', e)));
        }
        return (E.initialized || B('POP', E.location, { initialHydration: !0 }), l);
      },
      subscribe: function (e) {
        return (p.add(e), () => p.delete(e));
      },
      enableScrollRestoration: function (e, t, n) {
        if (((m = e), (v = t), (y = n || null), !g && E.navigation === Lt)) {
          g = !0;
          let e = ce(E.location, E.matches);
          null != e && H({ restoreScrollPosition: e });
        }
        return () => {
          ((m = null), (v = null), (y = null));
        };
      },
      navigate: async function t(n, r) {
        if ('number' == typeof n) return void e.history.go(n);
        let a = Ot(
            E.location,
            E.matches,
            c,
            n,
            null == r ? void 0 : r.fromRouteId,
            null == r ? void 0 : r.relative,
          ),
          { path: l, submission: o, error: i } = At(!1, a, r),
          s = E.location,
          u = Ie(E.location, l, r && r.state);
        u = { ...u, ...e.history.encodeLocation(u) };
        let d = r && null != r.replace ? r.replace : void 0,
          f = 'PUSH';
        !0 === d
          ? (f = 'REPLACE')
          : !1 === d ||
            (null != o &&
              gn(o.formMethod) &&
              o.formAction === E.location.pathname + E.location.search &&
              (f = 'REPLACE'));
        let h = r && 'preventScrollReset' in r ? !0 === r.preventScrollReset : void 0,
          p = !0 === (r && r.flushSync),
          m = ie({ currentLocation: s, nextLocation: u, historyAction: f });
        m
          ? oe(m, {
              state: 'blocked',
              location: u,
              proceed() {
                (oe(m, { state: 'proceeding', proceed: void 0, reset: void 0, location: u }),
                  t(n, r));
              },
              reset() {
                let e = new Map(E.blockers);
                (e.set(m, Rt), H({ blockers: e }));
              },
            })
          : await B(f, u, {
              submission: o,
              pendingError: i,
              preventScrollReset: h,
              replace: r && r.replace,
              enableViewTransition: r && r.viewTransition,
              flushSync: p,
            });
      },
      fetch: async function (t, n, a, l) {
        te(t);
        let d = !0 === (l && l.flushSync),
          f = r || u,
          h = Ot(E.location, E.matches, c, a, n, null == l ? void 0 : l.relative),
          p = Ye(f, h, c),
          m = de(p, f, h);
        if ((m.active && m.matches && (p = m.matches), !p))
          return void J(t, n, cn(404, { pathname: h }), { flushSync: d });
        let { path: y, submission: v, error: g } = At(!0, h, l);
        if (g) return void J(t, n, g, { flushSync: d });
        let b = wn(p, y),
          w = new We(e.unstable_getContext ? await e.unstable_getContext() : void 0),
          k = !0 === (l && l.preventScrollReset);
        v && gn(v.formMethod)
          ? await (async function (t, n, a, l, d, f, h, p, m, y) {
              function v(e) {
                if (!e.route.action && !e.route.lazy) {
                  let e = cn(405, { method: y.formMethod, pathname: a, routeId: n });
                  return (J(t, n, e, { flushSync: p }), !0);
                }
                return !1;
              }
              if ((G(), j.delete(t), !h && v(l))) return;
              let g = E.fetchers.get(t);
              X(
                t,
                (function (e, t) {
                  let n = {
                    state: 'submitting',
                    formMethod: e.formMethod,
                    formAction: e.formAction,
                    formEncType: e.formEncType,
                    formData: e.formData,
                    json: e.json,
                    text: e.text,
                    data: t ? t.data : void 0,
                  };
                  return n;
                })(y, g),
                { flushSync: p },
              );
              let b = new AbortController(),
                w = tn(e.history, a, b.signal, y);
              if (h) {
                let e = await fe(d, a, w.signal, t);
                if ('aborted' === e.type) return;
                if ('error' === e.type) return void J(t, n, e.error, { flushSync: p });
                if (!e.matches) return void J(t, n, cn(404, { pathname: a }), { flushSync: p });
                if (v((l = wn((d = e.matches), a)))) return;
              }
              M.set(t, b);
              let k = D,
                x = Xt(i, s, w, d, l, o, f),
                P = await K(w, x, f, t),
                L = P[l.route.id];
              if (w.signal.aborted) return void (M.get(t) === b && M.delete(t));
              if (I.has(t)) {
                if (mn(L) || pn(L)) return void X(t, En(void 0));
              } else {
                if (mn(L))
                  return (
                    M.delete(t),
                    O > k
                      ? void X(t, En(void 0))
                      : (F.add(t),
                        X(t, xn(y)),
                        V(w, L, !1, { fetcherSubmission: y, preventScrollReset: m }))
                  );
                if (pn(L)) return void J(t, n, L.error);
              }
              let z = E.navigation.location || E.location,
                R = tn(e.history, z, b.signal),
                T = r || u,
                $ = 'idle' !== E.navigation.state ? Ye(T, E.navigation.location, c) : E.matches;
              Fe($, "Didn't find any matches after fetcher action");
              let U = ++D;
              A.set(t, U);
              let q = xn(y, L.data);
              E.fetchers.set(t, q);
              let { dsMatches: B, revalidatingFetchers: Q } = Ft(
                R,
                f,
                i,
                s,
                e.history,
                E,
                $,
                y,
                z,
                o,
                !1,
                N,
                _,
                I,
                j,
                F,
                T,
                c,
                null != e.patchRoutesOnNavigation,
                [l.route.id, L],
              );
              (Q.filter((e) => e.key !== t).forEach((e) => {
                let t = e.key,
                  n = E.fetchers.get(t),
                  r = xn(void 0, n ? n.data : void 0);
                (E.fetchers.set(t, r), te(t), e.controller && M.set(t, e.controller));
              }),
                H({ fetchers: new Map(E.fetchers) }));
              let Z = () => Q.forEach((e) => te(e.key));
              b.signal.addEventListener('abort', Z);
              let { loaderResults: ee, fetcherResults: ne } = await Y(B, Q, R, f);
              if (b.signal.aborted) return;
              if (
                (b.signal.removeEventListener('abort', Z),
                A.delete(t),
                M.delete(t),
                Q.forEach((e) => M.delete(e.key)),
                E.fetchers.has(t))
              ) {
                let e = En(L.data);
                E.fetchers.set(t, e);
              }
              let re = dn(ee);
              if (re) return V(R, re.result, !1, { preventScrollReset: m });
              if (((re = dn(ne)), re))
                return (F.add(re.key), V(R, re.result, !1, { preventScrollReset: m }));
              let { loaderData: le, errors: oe } = an(E, $, ee, void 0, Q, ne);
              (ae(U),
                'loading' === E.navigation.state && U > O
                  ? (Fe(C, 'Expected pending action'),
                    S && S.abort(),
                    W(E.navigation.location, {
                      matches: $,
                      loaderData: le,
                      errors: oe,
                      fetchers: new Map(E.fetchers),
                    }))
                  : (H({
                      errors: oe,
                      loaderData: ln(E.loaderData, le, $, oe),
                      fetchers: new Map(E.fetchers),
                    }),
                    (N = !1)));
            })(t, n, y, b, p, w, m.active, d, k, v)
          : (j.set(t, { routeId: n, path: y }),
            await (async function (t, n, r, a, l, u, c, d, f, h) {
              let p = E.fetchers.get(t);
              X(t, xn(h, p ? p.data : void 0), { flushSync: d });
              let m = new AbortController(),
                y = tn(e.history, r, m.signal);
              if (c) {
                let e = await fe(l, r, y.signal, t);
                if ('aborted' === e.type) return;
                if ('error' === e.type) return void J(t, n, e.error, { flushSync: d });
                if (!e.matches) return void J(t, n, cn(404, { pathname: r }), { flushSync: d });
                a = wn((l = e.matches), r);
              }
              M.set(t, m);
              let v = D,
                g = Xt(i, s, y, l, a, o, u),
                b = await K(y, g, u, t),
                w = b[a.route.id];
              M.get(t) === m && M.delete(t);
              if (y.signal.aborted) return;
              if (I.has(t)) return void X(t, En(void 0));
              if (mn(w))
                return O > v
                  ? void X(t, En(void 0))
                  : (F.add(t), void (await V(y, w, !1, { preventScrollReset: f })));
              if (pn(w)) return void J(t, n, w.error);
              X(t, En(w.data));
            })(t, n, y, b, p, w, m.active, d, k, v));
      },
      revalidate: function () {
        (q ||
          (q = (function () {
            let e,
              t,
              n = new Promise((r, a) => {
                ((e = async (e) => {
                  r(e);
                  try {
                    await n;
                  } catch (t) {}
                }),
                  (t = async (e) => {
                    a(e);
                    try {
                      await n;
                    } catch (t) {}
                  }));
              });
            return { promise: n, resolve: e, reject: t };
          })()),
          G(),
          H({ revalidation: 'loading' }));
        let e = q.promise;
        return 'submitting' === E.navigation.state
          ? e
          : 'idle' === E.navigation.state
            ? (B(E.historyAction, E.location, { startUninterruptedRevalidation: !0 }), e)
            : (B(C || E.historyAction, E.navigation.location, {
                overrideNavigation: E.navigation,
                enableViewTransition: !0 === L,
              }),
              e);
      },
      createHref: (t) => e.history.createHref(t),
      encodeLocation: (t) => e.history.encodeLocation(t),
      getFetcher: Z,
      deleteFetcher: function (e) {
        let t = ($.get(e) || 0) - 1;
        (t <= 0 ? ($.delete(e), I.add(e)) : $.set(e, t), H({ fetchers: new Map(E.fetchers) }));
      },
      dispose: function () {
        (h && h(),
          R && R(),
          p.clear(),
          S && S.abort(),
          E.fetchers.forEach((e, t) => ee(t)),
          E.blockers.forEach((e, t) => le(t)));
      },
      getBlocker: function (e, t) {
        let n = E.blockers.get(e) || Rt;
        return (U.get(e) !== t && U.set(e, t), n);
      },
      deleteBlocker: le,
      patchRoutes: function (e, t) {
        let n = null == r;
        (It(e, t, r || u, s, i), n && ((u = [...u]), H({})));
      },
      _internalFetchControllers: M,
      _internalSetRoutes: function (e) {
        ((s = {}), (r = Ke(e, i, void 0, s)));
      },
    }),
    l
  );
}
function Ot(e, t, n, r, a, l) {
  let o, i;
  if (a) {
    o = [];
    for (let e of t)
      if ((o.push(e), e.route.id === a)) {
        i = e;
        break;
      }
  } else ((o = t), (i = t[t.length - 1]));
  let s = pt(r || '.', ht(o), ct(e.pathname, n) || e.pathname, 'path' === l);
  if (
    (null == r && ((s.search = e.search), (s.hash = e.hash)),
    (null == r || '' === r || '.' === r) && i)
  ) {
    let e = bn(s.search);
    if (i.route.index && !e) s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index';
    else if (!i.route.index && e) {
      let e = new URLSearchParams(s.search),
        t = e.getAll('index');
      (e.delete('index'), t.filter((e) => e).forEach((t) => e.append('index', t)));
      let n = e.toString();
      s.search = n ? `?${n}` : '';
    }
  }
  return ('/' !== n && (s.pathname = '/' === s.pathname ? n : mt([n, s.pathname])), Ue(s));
}
function At(e, t, n) {
  if (
    !n ||
    !(function (e) {
      return (
        null != e && (('formData' in e && null != e.formData) || ('body' in e && void 0 !== e.body))
      );
    })(n)
  )
    return { path: t };
  if (n.formMethod && ((r = n.formMethod), !Et.has(r.toUpperCase())))
    return { path: t, error: cn(405, { method: n.formMethod }) };
  var r;
  let a,
    l,
    o = () => ({ path: t, error: cn(400, { type: 'invalid-body' }) }),
    i = (n.formMethod || 'get').toUpperCase(),
    s = fn(t);
  if (void 0 !== n.body) {
    if ('text/plain' === n.formEncType) {
      if (!gn(i)) return o();
      let e =
        'string' == typeof n.body
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
            ? Array.from(n.body.entries()).reduce((e, [t, n]) => `${e}${t}=${n}\n`, '')
            : String(n.body);
      return {
        path: t,
        submission: {
          formMethod: i,
          formAction: s,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: e,
        },
      };
    }
    if ('application/json' === n.formEncType) {
      if (!gn(i)) return o();
      try {
        let e = 'string' == typeof n.body ? JSON.parse(n.body) : n.body;
        return {
          path: t,
          submission: {
            formMethod: i,
            formAction: s,
            formEncType: n.formEncType,
            formData: void 0,
            json: e,
            text: void 0,
          },
        };
      } catch (d) {
        return o();
      }
    }
  }
  if (
    (Fe('function' == typeof FormData, 'FormData is not available in this environment'), n.formData)
  )
    ((a = nn(n.formData)), (l = n.formData));
  else if (n.body instanceof FormData) ((a = nn(n.body)), (l = n.body));
  else if (n.body instanceof URLSearchParams) ((a = n.body), (l = rn(a)));
  else if (null == n.body) ((a = new URLSearchParams()), (l = new FormData()));
  else
    try {
      ((a = new URLSearchParams(n.body)), (l = rn(a)));
    } catch (d) {
      return o();
    }
  let u = {
    formMethod: i,
    formAction: s,
    formEncType: (n && n.formEncType) || 'application/x-www-form-urlencoded',
    formData: l,
    json: void 0,
    text: void 0,
  };
  if (gn(u.formMethod)) return { path: t, submission: u };
  let c = qe(t);
  return (
    e && c.search && bn(c.search) && a.append('index', ''),
    (c.search = `?${a}`),
    { path: Ue(c), submission: u }
  );
}
function Ft(e, t, n, r, a, l, o, i, s, u, c, d, f, h, p, m, y, v, g, b) {
  var w;
  let k,
    S = b ? (pn(b[1]) ? b[1].error : b[1].data) : void 0,
    x = a.createURL(l.location),
    E = a.createURL(s);
  if (c && l.errors) {
    let e = Object.keys(l.errors)[0];
    k = o.findIndex((t) => t.route.id === e);
  } else if (b && pn(b[1])) {
    let e = b[0];
    k = o.findIndex((t) => t.route.id === e) - 1;
  }
  let C = b ? b[1].statusCode : void 0,
    P = C && C >= 400,
    L = {
      currentUrl: x,
      currentParams: (null == (w = l.matches[0]) ? void 0 : w.params) || {},
      nextUrl: E,
      nextParams: o[0].params,
      ...i,
      actionResult: S,
      actionStatus: C,
    },
    z = o.map((a, o) => {
      let { route: i } = a,
        s = null;
      if (
        (null != k && o > k
          ? (s = !1)
          : i.lazy
            ? (s = !0)
            : null == i.loader
              ? (s = !1)
              : c
                ? (s = jt(i, l.loaderData, l.errors))
                : (function (e, t, n) {
                    let r = !t || n.route.id !== t.route.id,
                      a = !e.hasOwnProperty(n.route.id);
                    return r || a;
                  })(l.loaderData, l.matches[o], a) && (s = !0),
        null !== s)
      )
        return Gt(n, r, e, a, u, t, s);
      let f =
          !P &&
          (d ||
            x.pathname + x.search === E.pathname + E.search ||
            x.search !== E.search ||
            (function (e, t) {
              let n = e.route.path;
              return (
                e.pathname !== t.pathname ||
                (null != n && n.endsWith('*') && e.params['*'] !== t.params['*'])
              );
            })(l.matches[o], a)),
        h = { ...L, defaultShouldRevalidate: f },
        p = $t(a, h);
      return Gt(n, r, e, a, u, t, p, h);
    }),
    R = [];
  return (
    p.forEach((e, i) => {
      if (c || !o.some((t) => t.route.id === e.routeId) || h.has(i)) return;
      let s = l.fetchers.get(i),
        p = s && 'idle' !== s.state && void 0 === s.data,
        b = Ye(y, e.path, v);
      if (!b) {
        if (g && p) return;
        return void R.push({
          key: i,
          routeId: e.routeId,
          path: e.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
      }
      if (m.has(i)) return;
      let w = wn(b, e.path),
        k = new AbortController(),
        S = tn(a, e.path, k.signal),
        x = null;
      if (f.has(i)) (f.delete(i), (x = Xt(n, r, S, b, w, u, t)));
      else if (p) d && (x = Xt(n, r, S, b, w, u, t));
      else {
        let e = { ...L, defaultShouldRevalidate: !P && d };
        $t(w, e) && (x = Xt(n, r, S, b, w, u, t, e));
      }
      x &&
        R.push({
          key: i,
          routeId: e.routeId,
          path: e.path,
          matches: x,
          match: w,
          request: S,
          controller: k,
        });
    }),
    { dsMatches: z, revalidatingFetchers: R }
  );
}
function jt(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = null != t && e.id in t,
    a = null != n && void 0 !== n[e.id];
  return !(!r && a) && (('function' == typeof e.loader && !0 === e.loader.hydrate) || (!r && !a));
}
function $t(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if ('boolean' == typeof n) return n;
  }
  return t.defaultShouldRevalidate;
}
function It(e, t, n, r, a) {
  let l;
  if (e) {
    let t = r[e];
    (Fe(t, `No route found to patch children into: routeId = ${e}`),
      t.children || (t.children = []),
      (l = t.children));
  } else l = n;
  let o = Ke(
    t.filter((e) => !l.some((t) => Ut(e, t))),
    a,
    [e || '_', 'patch', String((null == l ? void 0 : l.length) || '0')],
    r,
  );
  l.push(...o);
}
function Ut(e, t) {
  return (
    ('id' in e && 'id' in t && e.id === t.id) ||
    (e.index === t.index &&
      e.path === t.path &&
      e.caseSensitive === t.caseSensitive &&
      (!((e.children && 0 !== e.children.length) || (t.children && 0 !== t.children.length)) ||
        e.children.every((e, n) => {
          var r;
          return null == (r = t.children) ? void 0 : r.some((t) => Ut(e, t));
        })))
  );
}
var qt = new WeakMap(),
  Ht = ({ key: e, route: t, manifest: n, mapRouteProperties: r }) => {
    let a = n[t.id];
    if ((Fe(a, 'No route found in manifest'), !a.lazy || 'object' != typeof a.lazy)) return;
    let l = a.lazy[e];
    if (!l) return;
    let o = qt.get(a);
    o || ((o = {}), qt.set(a, o));
    let i = o[e];
    if (i) return i;
    let s = (async () => {
      let t = (function (e) {
          return Be.has(e);
        })(e),
        n = void 0 !== a[e] && 'hasErrorBoundary' !== e;
      if (t)
        (je(
          !t,
          'Route property ' +
            e +
            ' is not a supported lazy route property. This property will be ignored.',
        ),
          (o[e] = Promise.resolve()));
      else if (n)
        je(
          !1,
          `Route "${a.id}" has a static property "${e}" defined. The lazy property will be ignored.`,
        );
      else {
        let t = await l();
        null != t && (Object.assign(a, { [e]: t }), Object.assign(a, r(a)));
      }
      'object' == typeof a.lazy &&
        ((a.lazy[e] = void 0),
        Object.values(a.lazy).every((e) => void 0 === e) && (a.lazy = void 0));
    })();
    return ((o[e] = s), s);
  },
  Wt = new WeakMap();
async function Bt(e) {
  let t = e.matches.filter((e) => e.shouldLoad),
    n = {};
  return (
    (await Promise.all(t.map((e) => e.resolve()))).forEach((e, r) => {
      n[t[r].route.id] = e;
    }),
    n
  );
}
async function Qt(e) {
  return e.matches.some((e) => e.route.unstable_middleware)
    ? Vt(
        e,
        !1,
        () => Bt(e),
        (e, t) => ({ [t]: { type: 'error', result: e } }),
      )
    : Bt(e);
}
async function Vt(e, t, n, r) {
  let { matches: a, request: l, params: o, context: i } = e,
    s = { handlerResult: void 0 };
  try {
    let e = a.flatMap((e) =>
        e.route.unstable_middleware ? e.route.unstable_middleware.map((t) => [e.route.id, t]) : [],
      ),
      r = await Kt({ request: l, params: o, context: i }, e, t, s, n);
    return t ? r : s.handlerResult;
  } catch (u) {
    if (!s.middlewareError) throw u;
    let e = await r(s.middlewareError.error, s.middlewareError.routeId);
    return s.handlerResult ? Object.assign(s.handlerResult, e) : e;
  }
}
async function Kt(e, t, n, r, a, l = 0) {
  let { request: o } = e;
  if (o.signal.aborted) {
    if (o.signal.reason) throw o.signal.reason;
    throw new Error(`Request aborted without an \`AbortSignal.reason\`: ${o.method} ${o.url}`);
  }
  let i = t[l];
  if (!i) return ((r.handlerResult = await a()), r.handlerResult);
  let s,
    [u, c] = i,
    d = !1,
    f = async () => {
      if (d) throw new Error('You may only call `next()` once per middleware');
      ((d = !0), await Kt(e, t, n, r, a, l + 1));
    };
  try {
    let t = await c({ request: e.request, params: e.params, context: e.context }, f);
    return d ? (void 0 === t ? s : t) : f();
  } catch (h) {
    throw (
      r.middlewareError
        ? r.middlewareError.error !== h && (r.middlewareError = { routeId: u, error: h })
        : (r.middlewareError = { routeId: u, error: h }),
      h
    );
  }
}
function Yt(e, t, n, r, a) {
  let l = Ht({ key: 'unstable_middleware', route: r.route, manifest: t, mapRouteProperties: e }),
    o = (function (e, t, n, r, a) {
      let l = n[e.id];
      if ((Fe(l, 'No route found in manifest'), !e.lazy))
        return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
      if ('function' == typeof e.lazy) {
        let t = Wt.get(l);
        if (t) return { lazyRoutePromise: t, lazyHandlerPromise: t };
        let n = (async () => {
          Fe('function' == typeof e.lazy, 'No lazy route function found');
          let t = await e.lazy(),
            n = {};
          for (let e in t) {
            let r = t[e];
            if (void 0 === r) continue;
            let a = Ve(e),
              o = void 0 !== l[e] && 'hasErrorBoundary' !== e;
            a
              ? je(
                  !a,
                  'Route property ' +
                    e +
                    ' is not a supported property to be returned from a lazy route function. This property will be ignored.',
                )
              : o
                ? je(
                    !o,
                    `Route "${l.id}" has a static property "${e}" defined but its lazy function is also returning a value for this property. The lazy route property "${e}" will be ignored.`,
                  )
                : (n[e] = r);
          }
          (Object.assign(l, n), Object.assign(l, { ...r(l), lazy: void 0 }));
        })();
        return (Wt.set(l, n), n.catch(() => {}), { lazyRoutePromise: n, lazyHandlerPromise: n });
      }
      let o,
        i = Object.keys(e.lazy),
        s = [];
      for (let c of i) {
        if (a && a.includes(c)) continue;
        let l = Ht({ key: c, route: e, manifest: n, mapRouteProperties: r });
        l && (s.push(l), c === t && (o = l));
      }
      let u = s.length > 0 ? Promise.all(s).then(() => {}) : void 0;
      return (
        null == u || u.catch(() => {}),
        null == o || o.catch(() => {}),
        { lazyRoutePromise: u, lazyHandlerPromise: o }
      );
    })(r.route, gn(n.method) ? 'action' : 'loader', t, e, a);
  return { middleware: l, route: o.lazyRoutePromise, handler: o.lazyHandlerPromise };
}
function Gt(e, t, n, r, a, l, o, i = null) {
  let s = !1,
    u = Yt(e, t, n, r, a);
  return {
    ...r,
    _lazyPromises: u,
    shouldLoad: o,
    unstable_shouldRevalidateArgs: i,
    unstable_shouldCallHandler: (e) => (
      (s = !0),
      i ? $t(r, 'boolean' == typeof e ? { ...i, defaultShouldRevalidate: e } : i) : o
    ),
    resolve: (e) =>
      s || o || (e && 'GET' === n.method && (r.route.lazy || r.route.loader))
        ? (async function ({
            request: e,
            match: t,
            lazyHandlerPromise: n,
            lazyRoutePromise: r,
            handlerOverride: a,
            scopedContext: l,
          }) {
            let o,
              i,
              s = gn(e.method),
              u = s ? 'action' : 'loader',
              c = (n) => {
                let r,
                  o = new Promise((e, t) => (r = t));
                ((i = () => r()), e.signal.addEventListener('abort', i));
                let s = (r) =>
                    'function' != typeof n
                      ? Promise.reject(
                          new Error(
                            `You cannot call the handler for a route which defines a boolean "${u}" [routeId: ${t.route.id}]`,
                          ),
                        )
                      : n(
                          { request: e, params: t.params, context: l },
                          ...(void 0 !== r ? [r] : []),
                        ),
                  c = (async () => {
                    try {
                      return { type: 'data', result: await (a ? a((e) => s(e)) : s()) };
                    } catch (e) {
                      return { type: 'error', result: e };
                    }
                  })();
                return Promise.race([c, o]);
              };
            try {
              let a = s ? t.route.action : t.route.loader;
              if (n || r)
                if (a) {
                  let e,
                    [t] = await Promise.all([
                      c(a).catch((t) => {
                        e = t;
                      }),
                      n,
                      r,
                    ]);
                  if (void 0 !== e) throw e;
                  o = t;
                } else {
                  await n;
                  let a = s ? t.route.action : t.route.loader;
                  if (!a) {
                    if ('action' === u) {
                      let n = new URL(e.url),
                        r = n.pathname + n.search;
                      throw cn(405, { method: e.method, pathname: r, routeId: t.route.id });
                    }
                    return { type: 'data', result: void 0 };
                  }
                  [o] = await Promise.all([c(a), r]);
                }
              else {
                if (!a) {
                  let t = new URL(e.url);
                  throw cn(404, { pathname: t.pathname + t.search });
                }
                o = await c(a);
              }
            } catch (d) {
              return { type: 'error', result: d };
            } finally {
              i && e.signal.removeEventListener('abort', i);
            }
            return o;
          })({
            request: n,
            match: r,
            lazyHandlerPromise: null == u ? void 0 : u.handler,
            lazyRoutePromise: null == u ? void 0 : u.route,
            handlerOverride: e,
            scopedContext: l,
          })
        : Promise.resolve({ type: 'data', result: void 0 }),
  };
}
function Xt(e, t, n, r, a, l, o, i = null) {
  return r.map((r) =>
    r.route.id !== a.route.id
      ? {
          ...r,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: i,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: Yt(e, t, n, r, l),
          resolve: () => Promise.resolve({ type: 'data', result: void 0 }),
        }
      : Gt(e, t, n, r, l, o, !0, i),
  );
}
async function Jt(e) {
  var t, n, r, a, l, o;
  let { result: i, type: s } = e;
  if (vn(i)) {
    let e;
    try {
      let t = i.headers.get('Content-Type');
      e =
        t && /\bapplication\/json\b/.test(t)
          ? null == i.body
            ? null
            : await i.json()
          : await i.text();
    } catch (u) {
      return { type: 'error', error: u };
    }
    return 'error' === s
      ? {
          type: 'error',
          error: new bt(i.status, i.statusText, e),
          statusCode: i.status,
          headers: i.headers,
        }
      : { type: 'data', data: e, statusCode: i.status, headers: i.headers };
  }
  return 'error' === s
    ? yn(i)
      ? i.data instanceof Error
        ? {
            type: 'error',
            error: i.data,
            statusCode: null == (t = i.init) ? void 0 : t.status,
            headers: (null == (n = i.init) ? void 0 : n.headers)
              ? new Headers(i.init.headers)
              : void 0,
          }
        : {
            type: 'error',
            error: new bt((null == (r = i.init) ? void 0 : r.status) || 500, void 0, i.data),
            statusCode: wt(i) ? i.status : void 0,
            headers: (null == (a = i.init) ? void 0 : a.headers)
              ? new Headers(i.init.headers)
              : void 0,
          }
      : { type: 'error', error: i, statusCode: wt(i) ? i.status : void 0 }
    : yn(i)
      ? {
          type: 'data',
          data: i.data,
          statusCode: null == (l = i.init) ? void 0 : l.status,
          headers: (null == (o = i.init) ? void 0 : o.headers)
            ? new Headers(i.init.headers)
            : void 0,
        }
      : { type: 'data', data: i };
}
function Zt(e, t, n, r, a) {
  let l = e.headers.get('Location');
  if (
    (Fe(l, 'Redirects returned/thrown from loaders/actions must have a Location header'),
    !Tt.test(l))
  ) {
    let o = r.slice(0, r.findIndex((e) => e.route.id === n) + 1);
    ((l = Ot(new URL(t.url), o, a, l)), e.headers.set('Location', l));
  }
  return e;
}
function en(e, t, n) {
  if (Tt.test(e)) {
    let r = e,
      a = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
      l = null != ct(a.pathname, n);
    if (a.origin === t.origin && l) return a.pathname + a.search + a.hash;
  }
  return e;
}
function tn(e, t, n, r) {
  let a = e.createURL(fn(t)).toString(),
    l = { signal: n };
  if (r && gn(r.formMethod)) {
    let { formMethod: e, formEncType: t } = r;
    ((l.method = e.toUpperCase()),
      'application/json' === t
        ? ((l.headers = new Headers({ 'Content-Type': t })), (l.body = JSON.stringify(r.json)))
        : 'text/plain' === t
          ? (l.body = r.text)
          : 'application/x-www-form-urlencoded' === t && r.formData
            ? (l.body = nn(r.formData))
            : (l.body = r.formData));
  }
  return new Request(a, l);
}
function nn(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, 'string' == typeof r ? r : r.name);
  return t;
}
function rn(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function an(e, t, n, r, a, l) {
  let { loaderData: o, errors: i } = (function (e, t, n, r = !1, a = !1) {
    let l,
      o = {},
      i = null,
      s = !1,
      u = {},
      c = n && pn(n[1]) ? n[1].error : void 0;
    return (
      e.forEach((n) => {
        if (!(n.route.id in t)) return;
        let d = n.route.id,
          f = t[d];
        if ((Fe(!mn(f), 'Cannot handle redirect results in processLoaderData'), pn(f))) {
          let t = f.error;
          if ((void 0 !== c && ((t = c), (c = void 0)), (i = i || {}), a)) i[d] = t;
          else {
            let n = sn(e, d);
            null == i[n.route.id] && (i[n.route.id] = t);
          }
          (r || (o[d] = Mt),
            s || ((s = !0), (l = wt(f.error) ? f.error.status : 500)),
            f.headers && (u[d] = f.headers));
        } else
          ((o[d] = f.data),
            f.statusCode && 200 !== f.statusCode && !s && (l = f.statusCode),
            f.headers && (u[d] = f.headers));
      }),
      void 0 !== c && n && ((i = { [n[0]]: c }), n[2] && (o[n[2]] = void 0)),
      { loaderData: o, errors: i, statusCode: l || 200, loaderHeaders: u }
    );
  })(t, n, r);
  return (
    a
      .filter((e) => !e.matches || e.matches.some((e) => e.shouldLoad))
      .forEach((t) => {
        let { key: n, match: r, controller: a } = t,
          o = l[n];
        if ((Fe(o, 'Did not find corresponding fetcher result'), !a || !a.signal.aborted))
          if (pn(o)) {
            let t = sn(e.matches, null == r ? void 0 : r.route.id);
            ((i && i[t.route.id]) || (i = { ...i, [t.route.id]: o.error }), e.fetchers.delete(n));
          } else if (mn(o)) Fe(!1, 'Unhandled fetcher revalidation redirect');
          else {
            let t = En(o.data);
            e.fetchers.set(n, t);
          }
      }),
    { loaderData: o, errors: i }
  );
}
function ln(e, t, n, r) {
  let a = Object.entries(t)
    .filter(([, e]) => e !== Mt)
    .reduce((e, [t, n]) => ((e[t] = n), e), {});
  for (let l of n) {
    let n = l.route.id;
    if (
      (!t.hasOwnProperty(n) && e.hasOwnProperty(n) && l.route.loader && (a[n] = e[n]),
      r && r.hasOwnProperty(n))
    )
      break;
  }
  return a;
}
function on(e) {
  return e ? (pn(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } }) : {};
}
function sn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e])
      .reverse()
      .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
  );
}
function un(e) {
  let t =
    1 === e.length
      ? e[0]
      : e.find((e) => e.index || !e.path || '/' === e.path) || { id: '__shim-error-route__' };
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t };
}
function cn(e, { pathname: t, routeId: n, method: r, type: a, message: l } = {}) {
  let o = 'Unknown Server Error',
    i = 'Unknown @remix-run/router error';
  return (
    400 === e
      ? ((o = 'Bad Request'),
        r && t && n
          ? (i = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`)
          : 'invalid-body' === a && (i = 'Unable to encode submission body'))
      : 403 === e
        ? ((o = 'Forbidden'), (i = `Route "${n}" does not match URL "${t}"`))
        : 404 === e
          ? ((o = 'Not Found'), (i = `No route matches URL "${t}"`))
          : 405 === e &&
            ((o = 'Method Not Allowed'),
            r && t && n
              ? (i = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`)
              : r && (i = `Invalid request method "${r.toUpperCase()}"`)),
    new bt(e || 500, o, new Error(i), !0)
  );
}
function dn(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [e, r] = t[n];
    if (mn(r)) return { key: e, result: r };
  }
}
function fn(e) {
  return Ue({ ...('string' == typeof e ? qe(e) : e), hash: '' });
}
function hn(e) {
  return vn(e.result) && Ct.has(e.result.status);
}
function pn(e) {
  return 'error' === e.type;
}
function mn(e) {
  return 'redirect' === (e && e.type);
}
function yn(e) {
  return (
    'object' == typeof e &&
    null != e &&
    'type' in e &&
    'data' in e &&
    'init' in e &&
    'DataWithResponseInit' === e.type
  );
}
function vn(e) {
  return (
    null != e &&
    'number' == typeof e.status &&
    'string' == typeof e.statusText &&
    'object' == typeof e.headers &&
    void 0 !== e.body
  );
}
function gn(e) {
  return St.has(e.toUpperCase());
}
function bn(e) {
  return new URLSearchParams(e).getAll('index').some((e) => '' === e);
}
function wn(e, t) {
  let n = 'string' == typeof t ? qe(t).search : t.search;
  if (e[e.length - 1].route.index && bn(n || '')) return e[e.length - 1];
  let r = ft(e);
  return r[r.length - 1];
}
function kn(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: a, formData: l, json: o } = e;
  if (t && n && r)
    return null != a
      ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: a }
      : null != l
        ? { formMethod: t, formAction: n, formEncType: r, formData: l, json: void 0, text: void 0 }
        : void 0 !== o
          ? {
              formMethod: t,
              formAction: n,
              formEncType: r,
              formData: void 0,
              json: o,
              text: void 0,
            }
          : void 0;
}
function Sn(e, t) {
  if (t) {
    return {
      state: 'loading',
      location: e,
      formMethod: t.formMethod,
      formAction: t.formAction,
      formEncType: t.formEncType,
      formData: t.formData,
      json: t.json,
      text: t.text,
    };
  }
  return {
    state: 'loading',
    location: e,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  };
}
function xn(e, t) {
  if (e) {
    return {
      state: 'loading',
      formMethod: e.formMethod,
      formAction: e.formAction,
      formEncType: e.formEncType,
      formData: e.formData,
      json: e.json,
      text: e.text,
      data: t,
    };
  }
  return {
    state: 'loading',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t,
  };
}
function En(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
var Cn = re.createContext(null);
Cn.displayName = 'DataRouter';
var Pn = re.createContext(null);
Pn.displayName = 'DataRouterState';
var Ln = re.createContext({ isTransitioning: !1 });
Ln.displayName = 'ViewTransition';
var zn = re.createContext(new Map());
((zn.displayName = 'Fetchers'), (re.createContext(null).displayName = 'Await'));
var Rn = re.createContext(null);
Rn.displayName = 'Navigation';
var Tn = re.createContext(null);
Tn.displayName = 'Location';
var Nn = re.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Nn.displayName = 'Route';
var _n = re.createContext(null);
function Mn() {
  return null != re.useContext(Tn);
}
function Dn() {
  return (
    Fe(Mn(), 'useLocation() may be used only in the context of a <Router> component.'),
    re.useContext(Tn).location
  );
}
_n.displayName = 'RouteError';
var On =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function An(e) {
  re.useContext(Rn).static || re.useLayoutEffect(e);
}
function Fn() {
  let { isDataRoute: e } = re.useContext(Nn);
  return e
    ? (function () {
        let { router: e } = (function (e) {
            let t = re.useContext(Cn);
            return (Fe(t, Wn(e)), t);
          })('useNavigate'),
          t = Bn('useNavigate'),
          n = re.useRef(!1);
        return (
          An(() => {
            n.current = !0;
          }),
          re.useCallback(
            async (r, a = {}) => {
              (je(n.current, On),
                n.current &&
                  ('number' == typeof r
                    ? e.navigate(r)
                    : await e.navigate(r, { fromRouteId: t, ...a })));
            },
            [e, t],
          )
        );
      })()
    : (function () {
        Fe(Mn(), 'useNavigate() may be used only in the context of a <Router> component.');
        let e = re.useContext(Cn),
          { basename: t, navigator: n } = re.useContext(Rn),
          { matches: r } = re.useContext(Nn),
          { pathname: a } = Dn(),
          l = JSON.stringify(ht(r)),
          o = re.useRef(!1);
        return (
          An(() => {
            o.current = !0;
          }),
          re.useCallback(
            (r, i = {}) => {
              if ((je(o.current, On), !o.current)) return;
              if ('number' == typeof r) return void n.go(r);
              let s = pt(r, JSON.parse(l), a, 'path' === i.relative);
              (null == e &&
                '/' !== t &&
                (s.pathname = '/' === s.pathname ? t : mt([t, s.pathname])),
                (i.replace ? n.replace : n.push)(s, i.state, i));
            },
            [t, n, l, a, e],
          )
        );
      })();
}
function jn(e, { relative: t } = {}) {
  let { matches: n } = re.useContext(Nn),
    { pathname: r } = Dn(),
    a = JSON.stringify(ht(n));
  return re.useMemo(() => pt(e, JSON.parse(a), r, 'path' === t), [e, a, r, t]);
}
function $n(e, t, n, r) {
  Fe(Mn(), 'useRoutes() may be used only in the context of a <Router> component.');
  let a,
    { navigator: l } = re.useContext(Rn),
    { matches: o } = re.useContext(Nn),
    i = o[o.length - 1],
    s = i ? i.params : {},
    u = i ? i.pathname : '/',
    c = i ? i.pathnameBase : '/',
    d = i && i.route;
  {
    let e = (d && d.path) || '';
    Vn(
      u,
      !d || e.endsWith('*') || e.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${'/' === e ? '*' : `${e}/*`}">.`,
    );
  }
  a = Dn();
  let f = a.pathname || '/',
    h = f;
  if ('/' !== c) {
    let e = c.replace(/^\//, '').split('/');
    h = '/' + f.replace(/^\//, '').split('/').slice(e.length).join('/');
  }
  let p = Ye(e, { pathname: h });
  (je(d || null != p, `No routes matched location "${a.pathname}${a.search}${a.hash}" `),
    je(
      null == p ||
        void 0 !== p[p.length - 1].route.element ||
        void 0 !== p[p.length - 1].route.Component ||
        void 0 !== p[p.length - 1].route.lazy,
      `Matched leaf route at location "${a.pathname}${a.search}${a.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let m = (function (e, t = [], n = null) {
    if (null == e) {
      if (!n) return null;
      if (n.errors) e = n.matches;
      else {
        if (0 !== t.length || n.initialized || !(n.matches.length > 0)) return null;
        e = n.matches;
      }
    }
    let r = e,
      a = null == n ? void 0 : n.errors;
    if (null != a) {
      let e = r.findIndex((e) => e.route.id && void 0 !== (null == a ? void 0 : a[e.route.id]));
      (Fe(
        e >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(',')}`,
      ),
        (r = r.slice(0, Math.min(r.length, e + 1))));
    }
    let l = !1,
      o = -1;
    if (n)
      for (let i = 0; i < r.length; i++) {
        let e = r[i];
        if (((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (o = i), e.route.id)) {
          let { loaderData: t, errors: a } = n,
            i = e.route.loader && !t.hasOwnProperty(e.route.id) && (!a || void 0 === a[e.route.id]);
          if (e.route.lazy || i) {
            ((l = !0), (r = o >= 0 ? r.slice(0, o + 1) : [r[0]]));
            break;
          }
        }
      }
    return r.reduceRight((e, i, s) => {
      let u,
        c = !1,
        d = null,
        f = null;
      n &&
        ((u = a && i.route.id ? a[i.route.id] : void 0),
        (d = i.route.errorElement || Un),
        l &&
          (o < 0 && 0 === s
            ? (Vn(
                'route-fallback',
                !1,
                'No `HydrateFallback` element provided to render during initial hydration',
              ),
              (c = !0),
              (f = null))
            : o === s && ((c = !0), (f = i.route.hydrateFallbackElement || null))));
      let h = t.concat(r.slice(0, s + 1)),
        p = () => {
          let t;
          return (
            (t = u
              ? d
              : c
                ? f
                : i.route.Component
                  ? re.createElement(i.route.Component, null)
                  : i.route.element
                    ? i.route.element
                    : e),
            re.createElement(Hn, {
              match: i,
              routeContext: { outlet: e, matches: h, isDataRoute: null != n },
              children: t,
            })
          );
        };
      return n && (i.route.ErrorBoundary || i.route.errorElement || 0 === s)
        ? re.createElement(qn, {
            location: n.location,
            revalidation: n.revalidation,
            component: d,
            error: u,
            children: p(),
            routeContext: { outlet: null, matches: h, isDataRoute: !0 },
          })
        : p();
    }, null);
  })(
    p &&
      p.map((e) =>
        Object.assign({}, e, {
          params: Object.assign({}, s, e.params),
          pathname: mt([c, l.encodeLocation ? l.encodeLocation(e.pathname).pathname : e.pathname]),
          pathnameBase:
            '/' === e.pathnameBase
              ? c
              : mt([
                  c,
                  l.encodeLocation ? l.encodeLocation(e.pathnameBase).pathname : e.pathnameBase,
                ]),
        }),
      ),
    o,
    n,
    r,
  );
  return m;
}
function In() {
  let e = (function () {
      var e;
      let t = re.useContext(_n),
        n = (function (e) {
          let t = re.useContext(Pn);
          return (Fe(t, Wn(e)), t);
        })('useRouteError'),
        r = Bn('useRouteError');
      if (void 0 !== t) return t;
      return null == (e = n.errors) ? void 0 : e[r];
    })(),
    t = wt(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    a = { padding: '0.5rem', backgroundColor: r },
    l = { padding: '2px 4px', backgroundColor: r },
    o = null;
  return (
    (o = re.createElement(
      re.Fragment,
      null,
      re.createElement('p', null, '💿 Hey developer 👋'),
      re.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        re.createElement('code', { style: l }, 'ErrorBoundary'),
        ' or',
        ' ',
        re.createElement('code', { style: l }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    re.createElement(
      re.Fragment,
      null,
      re.createElement('h2', null, 'Unexpected Application Error!'),
      re.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      n ? re.createElement('pre', { style: a }, n) : null,
      o,
    )
  );
}
re.createContext(null);
var Un = re.createElement(In, null),
  qn = class extends re.Component {
    constructor(e) {
      (super(e),
        (this.state = { location: e.location, revalidation: e.revalidation, error: e.error }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location || ('idle' !== t.revalidation && 'idle' === e.revalidation)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: void 0 !== e.error ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {}
    render() {
      return void 0 !== this.state.error
        ? re.createElement(
            Nn.Provider,
            { value: this.props.routeContext },
            re.createElement(_n.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function Hn({ routeContext: e, match: t, children: n }) {
  let r = re.useContext(Cn);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    re.createElement(Nn.Provider, { value: e }, n)
  );
}
function Wn(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Bn(e) {
  let t = (function (e) {
      let t = re.useContext(Nn);
      return (Fe(t, Wn(e)), t);
    })(e),
    n = t.matches[t.matches.length - 1];
  return (Fe(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id);
}
var Qn = {};
function Vn(e, t, n) {
  t || Qn[e] || ((Qn[e] = !0), je(!1, n));
}
var Kn = {};
function Yn(e, t) {
  e || Kn[t] || (Kn[t] = !0);
}
function Gn(e) {
  let t = {
    hasErrorBoundary: e.hasErrorBoundary || null != e.ErrorBoundary || null != e.errorElement,
  };
  return (
    e.Component &&
      (e.element &&
        je(
          !1,
          'You should not include both `Component` and `element` on your route - `Component` will be used.',
        ),
      Object.assign(t, { element: re.createElement(e.Component), Component: void 0 })),
    e.HydrateFallback &&
      (e.hydrateFallbackElement &&
        je(
          !1,
          'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.',
        ),
      Object.assign(t, {
        hydrateFallbackElement: re.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      })),
    e.ErrorBoundary &&
      (e.errorElement &&
        je(
          !1,
          'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.',
        ),
      Object.assign(t, { errorElement: re.createElement(e.ErrorBoundary), ErrorBoundary: void 0 })),
    t
  );
}
var Xn = ['HydrateFallback', 'hydrateFallbackElement'],
  Jn = class {
    constructor() {
      ((this.status = 'pending'),
        (this.promise = new Promise((e, t) => {
          ((this.resolve = (t) => {
            'pending' === this.status && ((this.status = 'resolved'), e(t));
          }),
            (this.reject = (e) => {
              'pending' === this.status && ((this.status = 'rejected'), t(e));
            }));
        })));
    }
  };
function Zn({ router: e, flushSync: t }) {
  let [n, r] = re.useState(e.state),
    [a, l] = re.useState(),
    [o, i] = re.useState({ isTransitioning: !1 }),
    [s, u] = re.useState(),
    [c, d] = re.useState(),
    [f, h] = re.useState(),
    p = re.useRef(new Map()),
    m = re.useCallback(
      (n, { deletedFetchers: a, flushSync: o, viewTransitionOpts: f }) => {
        (n.fetchers.forEach((e, t) => {
          void 0 !== e.data && p.current.set(t, e.data);
        }),
          a.forEach((e) => p.current.delete(e)),
          Yn(
            !1 === o || null != t,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
          ));
        let m =
          null != e.window &&
          null != e.window.document &&
          'function' == typeof e.window.document.startViewTransition;
        if (
          (Yn(
            null == f || m,
            'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.',
          ),
          f && m)
        ) {
          if (t && o) {
            t(() => {
              (c && (s && s.resolve(), c.skipTransition()),
                i({
                  isTransitioning: !0,
                  flushSync: !0,
                  currentLocation: f.currentLocation,
                  nextLocation: f.nextLocation,
                }));
            });
            let a = e.window.document.startViewTransition(() => {
              t(() => r(n));
            });
            return (
              a.finished.finally(() => {
                t(() => {
                  (u(void 0), d(void 0), l(void 0), i({ isTransitioning: !1 }));
                });
              }),
              void t(() => d(a))
            );
          }
          c
            ? (s && s.resolve(),
              c.skipTransition(),
              h({ state: n, currentLocation: f.currentLocation, nextLocation: f.nextLocation }))
            : (l(n),
              i({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: f.currentLocation,
                nextLocation: f.nextLocation,
              }));
        } else t && o ? t(() => r(n)) : re.startTransition(() => r(n));
      },
      [e.window, t, c, s],
    );
  (re.useLayoutEffect(() => e.subscribe(m), [e, m]),
    re.useEffect(() => {
      o.isTransitioning && !o.flushSync && u(new Jn());
    }, [o]),
    re.useEffect(() => {
      if (s && a && e.window) {
        let t = a,
          n = s.promise,
          o = e.window.document.startViewTransition(async () => {
            (re.startTransition(() => r(t)), await n);
          });
        (o.finished.finally(() => {
          (u(void 0), d(void 0), l(void 0), i({ isTransitioning: !1 }));
        }),
          d(o));
      }
    }, [a, s, e.window]),
    re.useEffect(() => {
      s && a && n.location.key === a.location.key && s.resolve();
    }, [s, c, n.location, a]),
    re.useEffect(() => {
      !o.isTransitioning &&
        f &&
        (l(f.state),
        i({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: f.currentLocation,
          nextLocation: f.nextLocation,
        }),
        h(void 0));
    }, [o.isTransitioning, f]));
  let y = re.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (t) => e.navigate(t),
        push: (t, n, r) =>
          e.navigate(t, {
            state: n,
            preventScrollReset: null == r ? void 0 : r.preventScrollReset,
          }),
        replace: (t, n, r) =>
          e.navigate(t, {
            replace: !0,
            state: n,
            preventScrollReset: null == r ? void 0 : r.preventScrollReset,
          }),
      }),
      [e],
    ),
    v = e.basename || '/',
    g = re.useMemo(() => ({ router: e, navigator: y, static: !1, basename: v }), [e, y, v]);
  return re.createElement(
    re.Fragment,
    null,
    re.createElement(
      Cn.Provider,
      { value: g },
      re.createElement(
        Pn.Provider,
        { value: n },
        re.createElement(
          zn.Provider,
          { value: p.current },
          re.createElement(
            Ln.Provider,
            { value: o },
            re.createElement(
              tr,
              { basename: v, location: n.location, navigationType: n.historyAction, navigator: y },
              re.createElement(er, { routes: e.routes, future: e.future, state: n }),
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
var er = re.memo(function ({ routes: e, future: t, state: n }) {
  return $n(e, 0, n, t);
});
function tr({
  basename: e = '/',
  children: t = null,
  location: n,
  navigationType: r = 'POP',
  navigator: a,
  static: l = !1,
}) {
  Fe(
    !Mn(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let o = e.replace(/^\/*/, '/'),
    i = re.useMemo(() => ({ basename: o, navigator: a, static: l, future: {} }), [o, a, l]);
  'string' == typeof n && (n = qe(n));
  let { pathname: s = '/', search: u = '', hash: c = '', state: d = null, key: f = 'default' } = n,
    h = re.useMemo(() => {
      let e = ct(s, o);
      return null == e
        ? null
        : { location: { pathname: e, search: u, hash: c, state: d, key: f }, navigationType: r };
    }, [o, s, u, c, d, f, r]);
  return (
    je(
      null != h,
      `<Router basename="${o}"> is not able to match the URL "${s}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    null == h
      ? null
      : re.createElement(
          Rn.Provider,
          { value: i },
          re.createElement(Tn.Provider, { children: t, value: h }),
        )
  );
}
var nr = 'get',
  rr = 'application/x-www-form-urlencoded';
function ar(e) {
  return null != e && 'string' == typeof e.tagName;
}
var lr = null;
var or = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function ir(e) {
  return null == e || or.has(e)
    ? e
    : (je(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rr}"`,
      ),
      null);
}
function sr(e, t) {
  let n, r, a, l, o;
  if (ar((i = e)) && 'form' === i.tagName.toLowerCase()) {
    let o = e.getAttribute('action');
    ((r = o ? ct(o, t) : null),
      (n = e.getAttribute('method') || nr),
      (a = ir(e.getAttribute('enctype')) || rr),
      (l = new FormData(e)));
  } else if (
    (function (e) {
      return ar(e) && 'button' === e.tagName.toLowerCase();
    })(e) ||
    ((function (e) {
      return ar(e) && 'input' === e.tagName.toLowerCase();
    })(e) &&
      ('submit' === e.type || 'image' === e.type))
  ) {
    let o = e.form;
    if (null == o)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let i = e.getAttribute('formaction') || o.getAttribute('action');
    if (
      ((r = i ? ct(i, t) : null),
      (n = e.getAttribute('formmethod') || o.getAttribute('method') || nr),
      (a = ir(e.getAttribute('formenctype')) || ir(o.getAttribute('enctype')) || rr),
      (l = new FormData(o, e)),
      !(function () {
        if (null === lr)
          try {
            (new FormData(document.createElement('form'), 0), (lr = !1));
          } catch (e) {
            lr = !0;
          }
        return lr;
      })())
    ) {
      let { name: t, type: n, value: r } = e;
      if ('image' === n) {
        let e = t ? `${t}.` : '';
        (l.append(`${e}x`, '0'), l.append(`${e}y`, '0'));
      } else t && l.append(t, r);
    }
  } else {
    if (ar(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((n = nr), (r = null), (a = rr), (o = e));
  }
  var i;
  return (
    l && 'text/plain' === a && ((o = l), (l = void 0)),
    { action: r, method: n.toLowerCase(), encType: a, formData: l, body: o }
  );
}
function ur(e, t) {
  if (!1 === e || null == e) throw new Error(t);
}
function cr(e) {
  return (
    null != e &&
    (null == e.href
      ? 'preload' === e.rel && 'string' == typeof e.imageSrcSet && 'string' == typeof e.imageSizes
      : 'string' == typeof e.rel && 'string' == typeof e.href)
  );
}
async function dr(e, t, n) {
  return (function (e, t) {
    let n = new Set();
    return (
      new Set(t),
      e.reduce((e, t) => {
        let r = JSON.stringify(
          (function (e) {
            let t = {},
              n = Object.keys(e).sort();
            for (let r of n) t[r] = e[r];
            return t;
          })(t),
        );
        return (n.has(r) || (n.add(r), e.push({ key: r, link: t })), e);
      }, [])
    );
  })(
    (
      await Promise.all(
        e.map(async (e) => {
          let r = t.routes[e.route.id];
          if (r) {
            let e = await (async function (e, t) {
              if (e.id in t) return t[e.id];
              try {
                let n = await import(e.module);
                return ((t[e.id] = n), n);
              } catch (n) {
                return (
                  window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
                  window.location.reload(),
                  new Promise(() => {})
                );
              }
            })(r, n);
            return e.links ? e.links() : [];
          }
          return [];
        }),
      )
    )
      .flat(1)
      .filter(cr)
      .filter((e) => 'stylesheet' === e.rel || 'preload' === e.rel)
      .map((e) =>
        'stylesheet' === e.rel ? { ...e, rel: 'prefetch', as: 'style' } : { ...e, rel: 'prefetch' },
      ),
  );
}
function fr(e, t, n, r, a, l) {
  let o = (e, t) => !n[t] || e.route.id !== n[t].route.id,
    i = (e, t) => {
      var r;
      return (
        n[t].pathname !== e.pathname ||
        ((null == (r = n[t].route.path) ? void 0 : r.endsWith('*')) &&
          n[t].params['*'] !== e.params['*'])
      );
    };
  return 'assets' === l
    ? t.filter((e, t) => o(e, t) || i(e, t))
    : 'data' === l
      ? t.filter((t, l) => {
          var s;
          let u = r.routes[t.route.id];
          if (!u || !u.hasLoader) return !1;
          if (o(t, l) || i(t, l)) return !0;
          if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
              currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
              currentParams: (null == (s = n[0]) ? void 0 : s.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: t.params,
              defaultShouldRevalidate: !0,
            });
            if ('boolean' == typeof r) return r;
          }
          return !0;
        })
      : [];
}
function hr(e, t, { includeHydrateFallback: n } = {}) {
  return (
    (r = e
      .map((e) => {
        let r = t.routes[e.route.id];
        if (!r) return [];
        let a = [r.module];
        return (
          r.clientActionModule && (a = a.concat(r.clientActionModule)),
          r.clientLoaderModule && (a = a.concat(r.clientLoaderModule)),
          n && r.hydrateFallbackModule && (a = a.concat(r.hydrateFallbackModule)),
          r.imports && (a = a.concat(r.imports)),
          a
        );
      })
      .flat(1)),
    [...new Set(r)]
  );
  var r;
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function pr() {
  let e = re.useContext(Cn);
  return (ur(e, 'You must render this element inside a <DataRouterContext.Provider> element'), e);
}
var mr = re.createContext(void 0);
function yr() {
  let e = re.useContext(mr);
  return (ur(e, 'You must render this element inside a <HydratedRouter> element'), e);
}
function vr(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
function gr({ page: e, ...t }) {
  let { router: n } = pr(),
    r = re.useMemo(() => Ye(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? re.createElement(br, { page: e, matches: r, ...t }) : null;
}
function br({ page: e, matches: t, ...n }) {
  let r = Dn(),
    { manifest: a, routeModules: l } = yr(),
    { basename: o } = pr(),
    { loaderData: i, matches: s } = (function () {
      let e = re.useContext(Pn);
      return (
        ur(e, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
        e
      );
    })(),
    u = re.useMemo(() => fr(e, t, s, a, r, 'data'), [e, t, s, a, r]),
    c = re.useMemo(() => fr(e, t, s, a, r, 'assets'), [e, t, s, a, r]),
    d = re.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = new Set(),
        s = !1;
      if (
        (t.forEach((e) => {
          var t;
          let r = a.routes[e.route.id];
          r &&
            r.hasLoader &&
            ((!u.some((t) => t.route.id === e.route.id) &&
              e.route.id in i &&
              (null == (t = l[e.route.id]) ? void 0 : t.shouldRevalidate)) ||
            r.hasClientLoader
              ? (s = !0)
              : n.add(e.route.id));
        }),
        0 === n.size)
      )
        return [];
      let c = (function (e, t) {
        let n =
          'string' == typeof e
            ? new URL(
                e,
                'undefined' == typeof window ? 'server://singlefetch/' : window.location.origin,
              )
            : e;
        return (
          '/' === n.pathname
            ? (n.pathname = '_root.data')
            : t && '/' === ct(n.pathname, t)
              ? (n.pathname = `${t.replace(/\/$/, '')}/_root.data`)
              : (n.pathname = `${n.pathname.replace(/\/$/, '')}.data`),
          n
        );
      })(e, o);
      return (
        s &&
          n.size > 0 &&
          c.searchParams.set(
            '_routes',
            t
              .filter((e) => n.has(e.route.id))
              .map((e) => e.route.id)
              .join(','),
          ),
        [c.pathname + c.search]
      );
    }, [o, i, r, a, u, t, e, l]),
    f = re.useMemo(() => hr(c, a), [c, a]),
    h = (function (e) {
      let { manifest: t, routeModules: n } = yr(),
        [r, a] = re.useState([]);
      return (
        re.useEffect(() => {
          let r = !1;
          return (
            dr(e, t, n).then((e) => {
              r || a(e);
            }),
            () => {
              r = !0;
            }
          );
        }, [e, t, n]),
        r
      );
    })(c);
  return re.createElement(
    re.Fragment,
    null,
    d.map((e) => re.createElement('link', { key: e, rel: 'prefetch', as: 'fetch', href: e, ...n })),
    f.map((e) => re.createElement('link', { key: e, rel: 'modulepreload', href: e, ...n })),
    h.map(({ key: e, link: t }) => re.createElement('link', { key: e, ...t })),
  );
}
function wr(...e) {
  return (t) => {
    e.forEach((e) => {
      'function' == typeof e ? e(t) : null != e && (e.current = t);
    });
  };
}
mr.displayName = 'FrameworkContext';
var kr =
  'undefined' != typeof window &&
  void 0 !== window.document &&
  void 0 !== window.document.createElement;
try {
  kr && (window.__reactRouterVersion = '7.6.2');
} catch (Ma) {}
function Sr() {
  let e = null == window ? void 0 : window.__staticRouterHydrationData;
  return (e && e.errors && (e = { ...e, errors: xr(e.errors) }), e);
}
function xr(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, a] of t)
    if (a && 'RouteErrorResponse' === a.__type)
      n[r] = new bt(a.status, a.statusText, a.data, !0 === a.internal);
    else if (a && 'Error' === a.__type) {
      if (a.__subType) {
        let e = window[a.__subType];
        if ('function' == typeof e)
          try {
            let t = new e(a.message);
            ((t.stack = ''), (n[r] = t));
          } catch (Ma) {}
      }
      if (null == n[r]) {
        let e = new Error(a.message);
        ((e.stack = ''), (n[r] = e));
      }
    } else n[r] = a;
  return n;
}
var Er = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Cr = re.forwardRef(function (
    {
      onClick: e,
      discover: t = 'render',
      prefetch: n = 'none',
      relative: r,
      reloadDocument: a,
      replace: l,
      state: o,
      target: i,
      to: s,
      preventScrollReset: u,
      viewTransition: c,
      ...d
    },
    f,
  ) {
    let h,
      { basename: p } = re.useContext(Rn),
      m = 'string' == typeof s && Er.test(s),
      y = !1;
    if ('string' == typeof s && m && ((h = s), kr))
      try {
        let e = new URL(window.location.href),
          t = s.startsWith('//') ? new URL(e.protocol + s) : new URL(s),
          n = ct(t.pathname, p);
        t.origin === e.origin && null != n ? (s = n + t.search + t.hash) : (y = !0);
      } catch (Ma) {
        je(
          !1,
          `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let v = (function (e, { relative: t } = {}) {
        Fe(Mn(), 'useHref() may be used only in the context of a <Router> component.');
        let { basename: n, navigator: r } = re.useContext(Rn),
          { hash: a, pathname: l, search: o } = jn(e, { relative: t }),
          i = l;
        return (
          '/' !== n && (i = '/' === l ? n : mt([n, l])),
          r.createHref({ pathname: i, search: o, hash: a })
        );
      })(s, { relative: r }),
      [g, b, w] = (function (e, t) {
        let n = re.useContext(mr),
          [r, a] = re.useState(!1),
          [l, o] = re.useState(!1),
          { onFocus: i, onBlur: s, onMouseEnter: u, onMouseLeave: c, onTouchStart: d } = t,
          f = re.useRef(null);
        (re.useEffect(() => {
          if (('render' === e && o(!0), 'viewport' === e)) {
            let e = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  o(e.isIntersecting);
                });
              },
              { threshold: 0.5 },
            );
            return (
              f.current && e.observe(f.current),
              () => {
                e.disconnect();
              }
            );
          }
        }, [e]),
          re.useEffect(() => {
            if (r) {
              let e = setTimeout(() => {
                o(!0);
              }, 100);
              return () => {
                clearTimeout(e);
              };
            }
          }, [r]));
        let h = () => {
            a(!0);
          },
          p = () => {
            (a(!1), o(!1));
          };
        return n
          ? 'intent' !== e
            ? [l, f, {}]
            : [
                l,
                f,
                {
                  onFocus: vr(i, h),
                  onBlur: vr(s, p),
                  onMouseEnter: vr(u, h),
                  onMouseLeave: vr(c, p),
                  onTouchStart: vr(d, h),
                },
              ]
          : [!1, f, {}];
      })(n, d),
      k = (function (
        e,
        {
          target: t,
          replace: n,
          state: r,
          preventScrollReset: a,
          relative: l,
          viewTransition: o,
        } = {},
      ) {
        let i = Fn(),
          s = Dn(),
          u = jn(e, { relative: l });
        return re.useCallback(
          (c) => {
            if (
              (function (e, t) {
                return !(
                  0 !== e.button ||
                  (t && '_self' !== t) ||
                  (function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(e)
                );
              })(c, t)
            ) {
              c.preventDefault();
              let t = void 0 !== n ? n : Ue(s) === Ue(u);
              i(e, { replace: t, state: r, preventScrollReset: a, relative: l, viewTransition: o });
            }
          },
          [s, i, u, n, r, t, e, a, l, o],
        );
      })(s, {
        replace: l,
        state: o,
        target: i,
        preventScrollReset: u,
        relative: r,
        viewTransition: c,
      });
    let S = re.createElement('a', {
      ...d,
      ...w,
      href: h || v,
      onClick:
        y || a
          ? e
          : function (t) {
              (e && e(t), t.defaultPrevented || k(t));
            },
      ref: wr(f, b),
      target: i,
      'data-discover': m || 'render' !== t ? void 0 : 'true',
    });
    return g && !m ? re.createElement(re.Fragment, null, S, re.createElement(gr, { page: v })) : S;
  });
Cr.displayName = 'Link';
var Pr = re.forwardRef(function (
  {
    'aria-current': e = 'page',
    caseSensitive: t = !1,
    className: n = '',
    end: r = !1,
    style: a,
    to: l,
    viewTransition: o,
    children: i,
    ...s
  },
  u,
) {
  let c = jn(l, { relative: s.relative }),
    d = Dn(),
    f = re.useContext(Pn),
    { navigator: h, basename: p } = re.useContext(Rn),
    m =
      null != f &&
      (function (e, t = {}) {
        let n = re.useContext(Ln);
        Fe(
          null != n,
          "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
        );
        let { basename: r } = Lr('useViewTransitionState'),
          a = jn(e, { relative: t.relative });
        if (!n.isTransitioning) return !1;
        let l = ct(n.currentLocation.pathname, r) || n.currentLocation.pathname,
          o = ct(n.nextLocation.pathname, r) || n.nextLocation.pathname;
        return null != st(a.pathname, o) || null != st(a.pathname, l);
      })(c) &&
      !0 === o,
    y = h.encodeLocation ? h.encodeLocation(c).pathname : c.pathname,
    v = d.pathname,
    g = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
  (t || ((v = v.toLowerCase()), (g = g ? g.toLowerCase() : null), (y = y.toLowerCase())),
    g && p && (g = ct(g, p) || g));
  const b = '/' !== y && y.endsWith('/') ? y.length - 1 : y.length;
  let w,
    k = v === y || (!r && v.startsWith(y) && '/' === v.charAt(b)),
    S = null != g && (g === y || (!r && g.startsWith(y) && '/' === g.charAt(y.length))),
    x = { isActive: k, isPending: S, isTransitioning: m },
    E = k ? e : void 0;
  w =
    'function' == typeof n
      ? n(x)
      : [n, k ? 'active' : null, S ? 'pending' : null, m ? 'transitioning' : null]
          .filter(Boolean)
          .join(' ');
  let C = 'function' == typeof a ? a(x) : a;
  return re.createElement(
    Cr,
    { ...s, 'aria-current': E, className: w, ref: u, style: C, to: l, viewTransition: o },
    'function' == typeof i ? i(x) : i,
  );
});
function Lr(e) {
  let t = re.useContext(Cn);
  return (
    Fe(
      t,
      (function (e) {
        return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
      })(e),
    ),
    t
  );
}
((Pr.displayName = 'NavLink'),
  (re.forwardRef(
    (
      {
        discover: e = 'render',
        fetcherKey: t,
        navigate: n,
        reloadDocument: r,
        replace: a,
        state: l,
        method: o = nr,
        action: i,
        onSubmit: s,
        relative: u,
        preventScrollReset: c,
        viewTransition: d,
        ...f
      },
      h,
    ) => {
      let p = (function () {
          let { router: e } = Lr('useSubmit'),
            { basename: t } = re.useContext(Rn),
            n = Bn('useRouteId');
          return re.useCallback(
            async (r, a = {}) => {
              let { action: l, method: o, encType: i, formData: s, body: u } = sr(r, t);
              if (!1 === a.navigate) {
                let t = a.fetcherKey || Rr();
                await e.fetch(t, n, a.action || l, {
                  preventScrollReset: a.preventScrollReset,
                  formData: s,
                  body: u,
                  formMethod: a.method || o,
                  formEncType: a.encType || i,
                  flushSync: a.flushSync,
                });
              } else
                await e.navigate(a.action || l, {
                  preventScrollReset: a.preventScrollReset,
                  formData: s,
                  body: u,
                  formMethod: a.method || o,
                  formEncType: a.encType || i,
                  replace: a.replace,
                  state: a.state,
                  fromRouteId: n,
                  flushSync: a.flushSync,
                  viewTransition: a.viewTransition,
                });
            },
            [e, t, n],
          );
        })(),
        m = (function (e, { relative: t } = {}) {
          let { basename: n } = re.useContext(Rn),
            r = re.useContext(Nn);
          Fe(r, 'useFormAction must be used inside a RouteContext');
          let [a] = r.matches.slice(-1),
            l = { ...jn(e || '.', { relative: t }) },
            o = Dn();
          if (null == e) {
            l.search = o.search;
            let e = new URLSearchParams(l.search),
              t = e.getAll('index');
            if (t.some((e) => '' === e)) {
              (e.delete('index'), t.filter((e) => e).forEach((t) => e.append('index', t)));
              let n = e.toString();
              l.search = n ? `?${n}` : '';
            }
          }
          (e && '.' !== e) ||
            !a.route.index ||
            (l.search = l.search ? l.search.replace(/^\?/, '?index&') : '?index');
          '/' !== n && (l.pathname = '/' === l.pathname ? n : mt([n, l.pathname]));
          return Ue(l);
        })(i, { relative: u }),
        y = 'get' === o.toLowerCase() ? 'get' : 'post',
        v = 'string' == typeof i && Er.test(i);
      return re.createElement('form', {
        ref: h,
        method: y,
        action: m,
        onSubmit: r
          ? s
          : (e) => {
              if ((s && s(e), e.defaultPrevented)) return;
              e.preventDefault();
              let r = e.nativeEvent.submitter,
                i = (null == r ? void 0 : r.getAttribute('formmethod')) || o;
              p(r || e.currentTarget, {
                fetcherKey: t,
                method: i,
                navigate: n,
                replace: a,
                state: l,
                relative: u,
                preventScrollReset: c,
                viewTransition: d,
              });
            },
        ...f,
        'data-discover': v || 'render' !== e ? void 0 : 'true',
      });
    },
  ).displayName = 'Form'));
var zr = 0,
  Rr = () => `__${String(++zr)}__`;
var Tr = G();
function Nr(e) {
  return re.createElement(Zn, { flushSync: Tr.flushSync, ...e });
}
const _r =
  ((Mr = [
    {
      path: '/',
      element: te.jsxs('div', {
        children: [
          te.jsx('h1', { children: 'App' }),
          te.jsx(Cr, { to: '/passenger-table', children: 'Passenger Table' }),
        ],
      }),
    },
    { path: '/passenger-table', element: te.jsx(Re, {}) },
  ]),
  Dt({
    basename: null == Dr ? void 0 : Dr.basename,
    unstable_getContext: null == Dr ? void 0 : Dr.unstable_getContext,
    future: null == Dr ? void 0 : Dr.future,
    history: Ae({ window: null == Dr ? void 0 : Dr.window }),
    hydrationData: Sr(),
    routes: Mr,
    mapRouteProperties: Gn,
    hydrationRouteProperties: Xn,
    dataStrategy: null == Dr ? void 0 : Dr.dataStrategy,
    patchRoutesOnNavigation: null == Dr ? void 0 : Dr.patchRoutesOnNavigation,
    window: null == Dr ? void 0 : Dr.window,
  }).initialize());
var Mr, Dr;
const Or = () => te.jsx(Nr, { router: _r });
var Ar = class {
    constructor() {
      ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Fr = 'undefined' == typeof window || 'Deno' in globalThis;
function jr() {}
function $r(e, t) {
  return 'function' == typeof e ? e(t) : e;
}
function Ir(e, t) {
  const { type: n = 'all', exact: r, fetchStatus: a, predicate: l, queryKey: o, stale: i } = e;
  if (o)
    if (r) {
      if (t.queryHash !== qr(o, t.options)) return !1;
    } else if (!Wr(t.queryKey, o)) return !1;
  if ('all' !== n) {
    const e = t.isActive();
    if ('active' === n && !e) return !1;
    if ('inactive' === n && e) return !1;
  }
  return (
    ('boolean' != typeof i || t.isStale() === i) &&
    (!a || a === t.state.fetchStatus) &&
    !(l && !l(t))
  );
}
function Ur(e, t) {
  const { exact: n, status: r, predicate: a, mutationKey: l } = e;
  if (l) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Hr(t.options.mutationKey) !== Hr(l)) return !1;
    } else if (!Wr(t.options.mutationKey, l)) return !1;
  }
  return (!r || t.state.status === r) && !(a && !a(t));
}
function qr(e, t) {
  return ((null == t ? void 0 : t.queryKeyHashFn) || Hr)(e);
}
function Hr(e) {
  return JSON.stringify(e, (e, t) =>
    Vr(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function Wr(e, t) {
  return (
    e === t ||
    (typeof e == typeof t &&
      !(!e || !t || 'object' != typeof e || 'object' != typeof t) &&
      Object.keys(t).every((n) => Wr(e[n], t[n])))
  );
}
function Br(e, t) {
  if (e === t) return e;
  const n = Qr(e) && Qr(t);
  if (n || (Vr(e) && Vr(t))) {
    const r = n ? e : Object.keys(e),
      a = r.length,
      l = n ? t : Object.keys(t),
      o = l.length,
      i = n ? [] : {},
      s = new Set(r);
    let u = 0;
    for (let c = 0; c < o; c++) {
      const r = n ? c : l[c];
      ((!n && s.has(r)) || n) && void 0 === e[r] && void 0 === t[r]
        ? ((i[r] = void 0), u++)
        : ((i[r] = Br(e[r], t[r])), i[r] === e[r] && void 0 !== e[r] && u++);
    }
    return a === o && u === a ? e : i;
  }
  return t;
}
function Qr(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Vr(e) {
  if (!Kr(e)) return !1;
  const t = e.constructor;
  if (void 0 === t) return !0;
  const n = t.prototype;
  return (
    !!Kr(n) && !!n.hasOwnProperty('isPrototypeOf') && Object.getPrototypeOf(e) === Object.prototype
  );
}
function Kr(e) {
  return '[object Object]' === Object.prototype.toString.call(e);
}
function Yr(e, t, n) {
  return 'function' == typeof n.structuralSharing
    ? n.structuralSharing(e, t)
    : !1 !== n.structuralSharing
      ? Br(e, t)
      : t;
}
function Gr(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Xr(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Jr = Symbol();
function Zr(e, t) {
  return !e.queryFn && (null == t ? void 0 : t.initialPromise)
    ? () => t.initialPromise
    : e.queryFn && e.queryFn !== Jr
      ? e.queryFn
      : () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`));
}
var ea = new ((r = class extends Ar {
    constructor() {
      (super(),
        W(this, e),
        W(this, t),
        W(this, n),
        B(this, n, (e) => {
          if (!Fr && window.addEventListener) {
            const t = () => e();
            return (
              window.addEventListener('visibilitychange', t, !1),
              () => {
                window.removeEventListener('visibilitychange', t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      H(this, t) || this.setEventListener(H(this, n));
    }
    onUnsubscribe() {
      var e;
      this.hasListeners() || (null == (e = H(this, t)) || e.call(this), B(this, t, void 0));
    }
    setEventListener(e) {
      var r;
      (B(this, n, e),
        null == (r = H(this, t)) || r.call(this),
        B(
          this,
          t,
          e((e) => {
            'boolean' == typeof e ? this.setFocused(e) : this.onFocus();
          }),
        ));
    }
    setFocused(t) {
      H(this, e) !== t && (B(this, e, t), this.onFocus());
    }
    onFocus() {
      const e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      var t;
      return 'boolean' == typeof H(this, e)
        ? H(this, e)
        : 'hidden' !== (null == (t = globalThis.document) ? void 0 : t.visibilityState);
    }
  }),
  (e = new WeakMap()),
  (t = new WeakMap()),
  (n = new WeakMap()),
  r)(),
  ta = new ((i = class extends Ar {
    constructor() {
      (super(),
        W(this, a, !0),
        W(this, l),
        W(this, o),
        B(this, o, (e) => {
          if (!Fr && window.addEventListener) {
            const t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener('online', t, !1),
              window.addEventListener('offline', n, !1),
              () => {
                (window.removeEventListener('online', t), window.removeEventListener('offline', n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      H(this, l) || this.setEventListener(H(this, o));
    }
    onUnsubscribe() {
      var e;
      this.hasListeners() || (null == (e = H(this, l)) || e.call(this), B(this, l, void 0));
    }
    setEventListener(e) {
      var t;
      (B(this, o, e),
        null == (t = H(this, l)) || t.call(this),
        B(this, l, e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      H(this, a) !== e &&
        (B(this, a, e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return H(this, a);
    }
  }),
  (a = new WeakMap()),
  (l = new WeakMap()),
  (o = new WeakMap()),
  i)();
function na(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function ra(e) {
  return 'online' !== (e ?? 'online') || ta.isOnline();
}
var aa = class extends Error {
  constructor(e) {
    (super('CancelledError'),
      (this.revert = null == e ? void 0 : e.revert),
      (this.silent = null == e ? void 0 : e.silent));
  }
};
function la(e) {
  return e instanceof aa;
}
function oa(e) {
  let t,
    n = !1,
    r = 0,
    a = !1;
  const l = (function () {
      let e, t;
      const n = new Promise((n, r) => {
        ((e = n), (t = r));
      });
      function r(e) {
        (Object.assign(n, e), delete n.resolve, delete n.reject);
      }
      return (
        (n.status = 'pending'),
        n.catch(() => {}),
        (n.resolve = (t) => {
          (r({ status: 'fulfilled', value: t }), e(t));
        }),
        (n.reject = (e) => {
          (r({ status: 'rejected', reason: e }), t(e));
        }),
        n
      );
    })(),
    o = () => ea.isFocused() && ('always' === e.networkMode || ta.isOnline()) && e.canRun(),
    i = () => ra(e.networkMode) && e.canRun(),
    s = (n) => {
      var r;
      a || ((a = !0), null == (r = e.onSuccess) || r.call(e, n), null == t || t(), l.resolve(n));
    },
    u = (n) => {
      var r;
      a || ((a = !0), null == (r = e.onError) || r.call(e, n), null == t || t(), l.reject(n));
    },
    c = () =>
      new Promise((n) => {
        var r;
        ((t = (e) => {
          (a || o()) && n(e);
        }),
          null == (r = e.onPause) || r.call(e));
      }).then(() => {
        var n;
        ((t = void 0), a || null == (n = e.onContinue) || n.call(e));
      }),
    d = () => {
      if (a) return;
      let t;
      const l = 0 === r ? e.initialPromise : void 0;
      try {
        t = l ?? e.fn();
      } catch (i) {
        t = Promise.reject(i);
      }
      Promise.resolve(t)
        .then(s)
        .catch((t) => {
          var l;
          if (a) return;
          const i = e.retry ?? (Fr ? 0 : 3),
            s = e.retryDelay ?? na,
            f = 'function' == typeof s ? s(r, t) : s,
            h = !0 === i || ('number' == typeof i && r < i) || ('function' == typeof i && i(r, t));
          var p;
          !n && h
            ? (r++,
              null == (l = e.onFail) || l.call(e, r, t),
              ((p = f),
              new Promise((e) => {
                setTimeout(e, p);
              }))
                .then(() => (o() ? void 0 : c()))
                .then(() => {
                  n ? u(t) : d();
                }))
            : u(t);
        });
    };
  return {
    promise: l,
    cancel: (t) => {
      var n;
      a || (u(new aa(t)), null == (n = e.abort) || n.call(e));
    },
    continue: () => (null == t || t(), l),
    cancelRetry: () => {
      n = !0;
    },
    continueRetry: () => {
      n = !1;
    },
    canStart: i,
    start: () => (i() ? d() : c().then(d), l),
  };
}
var ia = (e) => setTimeout(e, 0);
var sa = (function () {
    let e = [],
      t = 0,
      n = (e) => {
        e();
      },
      r = (e) => {
        e();
      },
      a = ia;
    const l = (r) => {
      t
        ? e.push(r)
        : a(() => {
            n(r);
          });
    };
    return {
      batch: (l) => {
        let o;
        t++;
        try {
          o = l();
        } finally {
          (t--,
            t ||
              (() => {
                const t = e;
                ((e = []),
                  t.length &&
                    a(() => {
                      r(() => {
                        t.forEach((e) => {
                          n(e);
                        });
                      });
                    }));
              })());
        }
        return o;
      },
      batchCalls:
        (e) =>
        (...t) => {
          l(() => {
            e(...t);
          });
        },
      schedule: l,
      setNotifyFunction: (e) => {
        n = e;
      },
      setBatchNotifyFunction: (e) => {
        r = e;
      },
      setScheduler: (e) => {
        a = e;
      },
    };
  })(),
  ua =
    ((u = class {
      constructor() {
        W(this, s);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        var e;
        (this.clearGcTimeout(),
          'number' == typeof (e = this.gcTime) &&
            e >= 0 &&
            e !== 1 / 0 &&
            B(
              this,
              s,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Fr ? 1 / 0 : 3e5));
      }
      clearGcTimeout() {
        H(this, s) && (clearTimeout(H(this, s)), B(this, s, void 0));
      }
    }),
    (s = new WeakMap()),
    u),
  ca =
    ((b = class extends ua {
      constructor(e) {
        (super(),
          W(this, v),
          W(this, c),
          W(this, d),
          W(this, f),
          W(this, h),
          W(this, p),
          W(this, m),
          W(this, y),
          B(this, y, !1),
          B(this, m, e.defaultOptions),
          this.setOptions(e.options),
          (this.observers = []),
          B(this, h, e.client),
          B(this, f, H(this, h).getQueryCache()),
          (this.queryKey = e.queryKey),
          (this.queryHash = e.queryHash),
          B(
            this,
            c,
            (function (e) {
              const t = 'function' == typeof e.initialData ? e.initialData() : e.initialData,
                n = void 0 !== t,
                r = n
                  ? 'function' == typeof e.initialDataUpdatedAt
                    ? e.initialDataUpdatedAt()
                    : e.initialDataUpdatedAt
                  : 0;
              return {
                data: t,
                dataUpdateCount: 0,
                dataUpdatedAt: n ? (r ?? Date.now()) : 0,
                error: null,
                errorUpdateCount: 0,
                errorUpdatedAt: 0,
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchMeta: null,
                isInvalidated: !1,
                status: n ? 'success' : 'pending',
                fetchStatus: 'idle',
              };
            })(this.options),
          ),
          (this.state = e.state ?? H(this, c)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var e;
        return null == (e = H(this, p)) ? void 0 : e.promise;
      }
      setOptions(e) {
        ((this.options = { ...H(this, m), ...e }), this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        this.observers.length || 'idle' !== this.state.fetchStatus || H(this, f).remove(this);
      }
      setData(e, t) {
        const n = Yr(this.state.data, e, this.options);
        return (
          Q(this, v, g).call(this, {
            data: n,
            type: 'success',
            dataUpdatedAt: null == t ? void 0 : t.updatedAt,
            manual: null == t ? void 0 : t.manual,
          }),
          n
        );
      }
      setState(e, t) {
        Q(this, v, g).call(this, { type: 'setState', state: e, setStateOptions: t });
      }
      cancel(e) {
        var t, n;
        const r = null == (t = H(this, p)) ? void 0 : t.promise;
        return (
          null == (n = H(this, p)) || n.cancel(e),
          r ? r.then(jr).catch(jr) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(H(this, c)));
      }
      isActive() {
        return this.observers.some((e) => {
          return !1 !== ((t = e.options.enabled), (n = this), 'function' == typeof t ? t(n) : t);
          var t, n;
        });
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Jr ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return (
          this.getObserversCount() > 0 &&
          this.observers.some((e) => 'static' === $r(e.options.staleTime, this))
        );
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((e) => e.getCurrentResult().isStale)
          : void 0 === this.state.data || this.state.isInvalidated;
      }
      isStaleByTime(e = 0) {
        return (
          void 0 === this.state.data ||
          ('static' !== e &&
            (!!this.state.isInvalidated ||
              !(function (e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0);
              })(this.state.dataUpdatedAt, e)))
        );
      }
      onFocus() {
        var e;
        const t = this.observers.find((e) => e.shouldFetchOnWindowFocus());
        (null == t || t.refetch({ cancelRefetch: !1 }), null == (e = H(this, p)) || e.continue());
      }
      onOnline() {
        var e;
        const t = this.observers.find((e) => e.shouldFetchOnReconnect());
        (null == t || t.refetch({ cancelRefetch: !1 }), null == (e = H(this, p)) || e.continue());
      }
      addObserver(e) {
        this.observers.includes(e) ||
          (this.observers.push(e),
          this.clearGcTimeout(),
          H(this, f).notify({ type: 'observerAdded', query: this, observer: e }));
      }
      removeObserver(e) {
        this.observers.includes(e) &&
          ((this.observers = this.observers.filter((t) => t !== e)),
          this.observers.length ||
            (H(this, p) &&
              (H(this, y) ? H(this, p).cancel({ revert: !0 }) : H(this, p).cancelRetry()),
            this.scheduleGc()),
          H(this, f).notify({ type: 'observerRemoved', query: this, observer: e }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated || Q(this, v, g).call(this, { type: 'invalidate' });
      }
      fetch(e, t) {
        var n, r, a;
        if ('idle' !== this.state.fetchStatus)
          if (void 0 !== this.state.data && (null == t ? void 0 : t.cancelRefetch))
            this.cancel({ silent: !0 });
          else if (H(this, p)) return (H(this, p).continueRetry(), H(this, p).promise);
        if ((e && this.setOptions(e), !this.options.queryFn)) {
          const e = this.observers.find((e) => e.options.queryFn);
          e && this.setOptions(e.options);
        }
        const l = new AbortController(),
          o = (e) => {
            Object.defineProperty(e, 'signal', {
              enumerable: !0,
              get: () => (B(this, y, !0), l.signal),
            });
          },
          i = () => {
            const e = Zr(this.options, t),
              n = (() => {
                const e = { client: H(this, h), queryKey: this.queryKey, meta: this.meta };
                return (o(e), e);
              })();
            return (
              B(this, y, !1),
              this.options.persister ? this.options.persister(e, n, this) : e(n)
            );
          },
          s = (() => {
            const e = {
              fetchOptions: t,
              options: this.options,
              queryKey: this.queryKey,
              client: H(this, h),
              state: this.state,
              fetchFn: i,
            };
            return (o(e), e);
          })();
        (null == (n = this.options.behavior) || n.onFetch(s, this),
          B(this, d, this.state),
          ('idle' !== this.state.fetchStatus &&
            this.state.fetchMeta === (null == (r = s.fetchOptions) ? void 0 : r.meta)) ||
            Q(this, v, g).call(this, {
              type: 'fetch',
              meta: null == (a = s.fetchOptions) ? void 0 : a.meta,
            }));
        const u = (e) => {
          var t, n, r, a;
          ((la(e) && e.silent) || Q(this, v, g).call(this, { type: 'error', error: e }),
            la(e) ||
              (null == (n = (t = H(this, f).config).onError) || n.call(t, e, this),
              null == (a = (r = H(this, f).config).onSettled) ||
                a.call(r, this.state.data, e, this)),
            this.scheduleGc());
        };
        return (
          B(
            this,
            p,
            oa({
              initialPromise: null == t ? void 0 : t.initialPromise,
              fn: s.fetchFn,
              abort: l.abort.bind(l),
              onSuccess: (e) => {
                var t, n, r, a;
                if (void 0 !== e) {
                  try {
                    this.setData(e);
                  } catch (l) {
                    return void u(l);
                  }
                  (null == (n = (t = H(this, f).config).onSuccess) || n.call(t, e, this),
                    null == (a = (r = H(this, f).config).onSettled) ||
                      a.call(r, e, this.state.error, this),
                    this.scheduleGc());
                } else u(new Error(`${this.queryHash} data is undefined`));
              },
              onError: u,
              onFail: (e, t) => {
                Q(this, v, g).call(this, { type: 'failed', failureCount: e, error: t });
              },
              onPause: () => {
                Q(this, v, g).call(this, { type: 'pause' });
              },
              onContinue: () => {
                Q(this, v, g).call(this, { type: 'continue' });
              },
              retry: s.options.retry,
              retryDelay: s.options.retryDelay,
              networkMode: s.options.networkMode,
              canRun: () => !0,
            }),
          ),
          H(this, p).start()
        );
      }
    }),
    (c = new WeakMap()),
    (d = new WeakMap()),
    (f = new WeakMap()),
    (h = new WeakMap()),
    (p = new WeakMap()),
    (m = new WeakMap()),
    (y = new WeakMap()),
    (v = new WeakSet()),
    (g = function (e) {
      ((this.state = ((t) => {
        switch (e.type) {
          case 'failed':
            return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
          case 'pause':
            return { ...t, fetchStatus: 'paused' };
          case 'continue':
            return { ...t, fetchStatus: 'fetching' };
          case 'fetch':
            return {
              ...t,
              ...((n = t.data),
              (r = this.options),
              {
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchStatus: ra(r.networkMode) ? 'fetching' : 'paused',
                ...(void 0 === n && { error: null, status: 'pending' }),
              }),
              fetchMeta: e.meta ?? null,
            };
          case 'success':
            return (
              B(this, d, void 0),
              {
                ...t,
                data: e.data,
                dataUpdateCount: t.dataUpdateCount + 1,
                dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: 'success',
                ...(!e.manual && {
                  fetchStatus: 'idle',
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case 'error':
            const a = e.error;
            return la(a) && a.revert && H(this, d)
              ? { ...H(this, d), fetchStatus: 'idle' }
              : {
                  ...t,
                  error: a,
                  errorUpdateCount: t.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: t.fetchFailureCount + 1,
                  fetchFailureReason: a,
                  fetchStatus: 'idle',
                  status: 'error',
                };
          case 'invalidate':
            return { ...t, isInvalidated: !0 };
          case 'setState':
            return { ...t, ...e.state };
        }
        var n, r;
      })(this.state)),
        sa.batch(() => {
          (this.observers.forEach((e) => {
            e.onQueryUpdate();
          }),
            H(this, f).notify({ query: this, type: 'updated', action: e }));
        }));
    }),
    b);
var da =
    ((k = class extends Ar {
      constructor(e = {}) {
        (super(), W(this, w), (this.config = e), B(this, w, new Map()));
      }
      build(e, t, n) {
        const r = t.queryKey,
          a = t.queryHash ?? qr(r, t);
        let l = this.get(a);
        return (
          l ||
            ((l = new ca({
              client: e,
              queryKey: r,
              queryHash: a,
              options: e.defaultQueryOptions(t),
              state: n,
              defaultOptions: e.getQueryDefaults(r),
            })),
            this.add(l)),
          l
        );
      }
      add(e) {
        H(this, w).has(e.queryHash) ||
          (H(this, w).set(e.queryHash, e), this.notify({ type: 'added', query: e }));
      }
      remove(e) {
        const t = H(this, w).get(e.queryHash);
        t &&
          (e.destroy(),
          t === e && H(this, w).delete(e.queryHash),
          this.notify({ type: 'removed', query: e }));
      }
      clear() {
        sa.batch(() => {
          this.getAll().forEach((e) => {
            this.remove(e);
          });
        });
      }
      get(e) {
        return H(this, w).get(e);
      }
      getAll() {
        return [...H(this, w).values()];
      }
      find(e) {
        const t = { exact: !0, ...e };
        return this.getAll().find((e) => Ir(t, e));
      }
      findAll(e = {}) {
        const t = this.getAll();
        return Object.keys(e).length > 0 ? t.filter((t) => Ir(e, t)) : t;
      }
      notify(e) {
        sa.batch(() => {
          this.listeners.forEach((t) => {
            t(e);
          });
        });
      }
      onFocus() {
        sa.batch(() => {
          this.getAll().forEach((e) => {
            e.onFocus();
          });
        });
      }
      onOnline() {
        sa.batch(() => {
          this.getAll().forEach((e) => {
            e.onOnline();
          });
        });
      }
    }),
    (w = new WeakMap()),
    k),
  fa =
    ((L = class extends ua {
      constructor(e) {
        (super(),
          W(this, C),
          W(this, S),
          W(this, x),
          W(this, E),
          (this.mutationId = e.mutationId),
          B(this, x, e.mutationCache),
          B(this, S, []),
          (this.state = e.state || {
            context: void 0,
            data: void 0,
            error: null,
            failureCount: 0,
            failureReason: null,
            isPaused: !1,
            status: 'idle',
            variables: void 0,
            submittedAt: 0,
          }),
          this.setOptions(e.options),
          this.scheduleGc());
      }
      setOptions(e) {
        ((this.options = e), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(e) {
        H(this, S).includes(e) ||
          (H(this, S).push(e),
          this.clearGcTimeout(),
          H(this, x).notify({ type: 'observerAdded', mutation: this, observer: e }));
      }
      removeObserver(e) {
        (B(
          this,
          S,
          H(this, S).filter((t) => t !== e),
        ),
          this.scheduleGc(),
          H(this, x).notify({ type: 'observerRemoved', mutation: this, observer: e }));
      }
      optionalRemove() {
        H(this, S).length ||
          ('pending' === this.state.status ? this.scheduleGc() : H(this, x).remove(this));
      }
      continue() {
        var e;
        return (
          (null == (e = H(this, E)) ? void 0 : e.continue()) ?? this.execute(this.state.variables)
        );
      }
      async execute(e) {
        var t, n, r, a, l, o, i, s, u, c, d, f, h, p, m, y, v, g, b, w;
        const k = () => {
          Q(this, C, P).call(this, { type: 'continue' });
        };
        B(
          this,
          E,
          oa({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(e)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (e, t) => {
              Q(this, C, P).call(this, { type: 'failed', failureCount: e, error: t });
            },
            onPause: () => {
              Q(this, C, P).call(this, { type: 'pause' });
            },
            onContinue: k,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => H(this, x).canRun(this),
          }),
        );
        const S = 'pending' === this.state.status,
          L = !H(this, E).canStart();
        try {
          if (S) k();
          else {
            (Q(this, C, P).call(this, { type: 'pending', variables: e, isPaused: L }),
              await (null == (n = (t = H(this, x).config).onMutate) ? void 0 : n.call(t, e, this)));
            const l = await (null == (a = (r = this.options).onMutate) ? void 0 : a.call(r, e));
            l !== this.state.context &&
              Q(this, C, P).call(this, { type: 'pending', context: l, variables: e, isPaused: L });
          }
          const h = await H(this, E).start();
          return (
            await (null == (o = (l = H(this, x).config).onSuccess)
              ? void 0
              : o.call(l, h, e, this.state.context, this)),
            await (null == (s = (i = this.options).onSuccess)
              ? void 0
              : s.call(i, h, e, this.state.context)),
            await (null == (c = (u = H(this, x).config).onSettled)
              ? void 0
              : c.call(u, h, null, this.state.variables, this.state.context, this)),
            await (null == (f = (d = this.options).onSettled)
              ? void 0
              : f.call(d, h, null, e, this.state.context)),
            Q(this, C, P).call(this, { type: 'success', data: h }),
            h
          );
        } catch (z) {
          try {
            throw (
              await (null == (p = (h = H(this, x).config).onError)
                ? void 0
                : p.call(h, z, e, this.state.context, this)),
              await (null == (y = (m = this.options).onError)
                ? void 0
                : y.call(m, z, e, this.state.context)),
              await (null == (g = (v = H(this, x).config).onSettled)
                ? void 0
                : g.call(v, void 0, z, this.state.variables, this.state.context, this)),
              await (null == (w = (b = this.options).onSettled)
                ? void 0
                : w.call(b, void 0, z, e, this.state.context)),
              z
            );
          } finally {
            Q(this, C, P).call(this, { type: 'error', error: z });
          }
        } finally {
          H(this, x).runNext(this);
        }
      }
    }),
    (S = new WeakMap()),
    (x = new WeakMap()),
    (E = new WeakMap()),
    (C = new WeakSet()),
    (P = function (e) {
      ((this.state = ((t) => {
        switch (e.type) {
          case 'failed':
            return { ...t, failureCount: e.failureCount, failureReason: e.error };
          case 'pause':
            return { ...t, isPaused: !0 };
          case 'continue':
            return { ...t, isPaused: !1 };
          case 'pending':
            return {
              ...t,
              context: e.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: e.isPaused,
              status: 'pending',
              variables: e.variables,
              submittedAt: Date.now(),
            };
          case 'success':
            return {
              ...t,
              data: e.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: 'success',
              isPaused: !1,
            };
          case 'error':
            return {
              ...t,
              data: void 0,
              error: e.error,
              failureCount: t.failureCount + 1,
              failureReason: e.error,
              isPaused: !1,
              status: 'error',
            };
        }
      })(this.state)),
        sa.batch(() => {
          (H(this, S).forEach((t) => {
            t.onMutationUpdate(e);
          }),
            H(this, x).notify({ mutation: this, type: 'updated', action: e }));
        }));
    }),
    L);
var ha =
  ((N = class extends Ar {
    constructor(e = {}) {
      (super(),
        W(this, z),
        W(this, R),
        W(this, T),
        (this.config = e),
        B(this, z, new Set()),
        B(this, R, new Map()),
        B(this, T, 0));
    }
    build(e, t, n) {
      const r = new fa({
        mutationCache: this,
        mutationId: ++V(this, T)._,
        options: e.defaultMutationOptions(t),
        state: n,
      });
      return (this.add(r), r);
    }
    add(e) {
      H(this, z).add(e);
      const t = pa(e);
      if ('string' == typeof t) {
        const n = H(this, R).get(t);
        n ? n.push(e) : H(this, R).set(t, [e]);
      }
      this.notify({ type: 'added', mutation: e });
    }
    remove(e) {
      if (H(this, z).delete(e)) {
        const t = pa(e);
        if ('string' == typeof t) {
          const n = H(this, R).get(t);
          if (n)
            if (n.length > 1) {
              const t = n.indexOf(e);
              -1 !== t && n.splice(t, 1);
            } else n[0] === e && H(this, R).delete(t);
        }
      }
      this.notify({ type: 'removed', mutation: e });
    }
    canRun(e) {
      const t = pa(e);
      if ('string' == typeof t) {
        const n = H(this, R).get(t),
          r = null == n ? void 0 : n.find((e) => 'pending' === e.state.status);
        return !r || r === e;
      }
      return !0;
    }
    runNext(e) {
      var t;
      const n = pa(e);
      if ('string' == typeof n) {
        const r =
          null == (t = H(this, R).get(n)) ? void 0 : t.find((t) => t !== e && t.state.isPaused);
        return (null == r ? void 0 : r.continue()) ?? Promise.resolve();
      }
      return Promise.resolve();
    }
    clear() {
      sa.batch(() => {
        (H(this, z).forEach((e) => {
          this.notify({ type: 'removed', mutation: e });
        }),
          H(this, z).clear(),
          H(this, R).clear());
      });
    }
    getAll() {
      return Array.from(H(this, z));
    }
    find(e) {
      const t = { exact: !0, ...e };
      return this.getAll().find((e) => Ur(t, e));
    }
    findAll(e = {}) {
      return this.getAll().filter((t) => Ur(e, t));
    }
    notify(e) {
      sa.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    resumePausedMutations() {
      const e = this.getAll().filter((e) => e.state.isPaused);
      return sa.batch(() => Promise.all(e.map((e) => e.continue().catch(jr))));
    }
  }),
  (z = new WeakMap()),
  (R = new WeakMap()),
  (T = new WeakMap()),
  N);
function pa(e) {
  var t;
  return null == (t = e.options.scope) ? void 0 : t.id;
}
function ma(e) {
  return {
    onFetch: (t, n) => {
      var r, a, l, o, i;
      const s = t.options,
        u =
          null ==
          (l = null == (a = null == (r = t.fetchOptions) ? void 0 : r.meta) ? void 0 : a.fetchMore)
            ? void 0
            : l.direction,
        c = (null == (o = t.state.data) ? void 0 : o.pages) || [],
        d = (null == (i = t.state.data) ? void 0 : i.pageParams) || [];
      let f = { pages: [], pageParams: [] },
        h = 0;
      const p = async () => {
        let n = !1;
        const r = Zr(t.options, t.fetchOptions),
          a = async (e, a, l) => {
            if (n) return Promise.reject();
            if (null == a && e.pages.length) return Promise.resolve(e);
            const o = (() => {
                const e = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: a,
                  direction: l ? 'backward' : 'forward',
                  meta: t.options.meta,
                };
                var r;
                return (
                  (r = e),
                  Object.defineProperty(r, 'signal', {
                    enumerable: !0,
                    get: () => (
                      t.signal.aborted
                        ? (n = !0)
                        : t.signal.addEventListener('abort', () => {
                            n = !0;
                          }),
                      t.signal
                    ),
                  }),
                  e
                );
              })(),
              i = await r(o),
              { maxPages: s } = t.options,
              u = l ? Xr : Gr;
            return { pages: u(e.pages, i, s), pageParams: u(e.pageParams, a, s) };
          };
        if (u && c.length) {
          const e = 'backward' === u,
            t = { pages: c, pageParams: d },
            n = (e ? va : ya)(s, t);
          f = await a(t, n, e);
        } else {
          const t = e ?? c.length;
          do {
            const e = 0 === h ? (d[0] ?? s.initialPageParam) : ya(s, f);
            if (h > 0 && null == e) break;
            ((f = await a(f, e)), h++);
          } while (h < t);
        }
        return f;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var e, r;
            return null == (r = (e = t.options).persister)
              ? void 0
              : r.call(
                  e,
                  p,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = p);
    },
  };
}
function ya(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function va(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? null == (r = e.getPreviousPageParam)
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var ga =
    ((I = class {
      constructor(e = {}) {
        (W(this, _),
          W(this, M),
          W(this, D),
          W(this, O),
          W(this, A),
          W(this, F),
          W(this, j),
          W(this, $),
          B(this, _, e.queryCache || new da()),
          B(this, M, e.mutationCache || new ha()),
          B(this, D, e.defaultOptions || {}),
          B(this, O, new Map()),
          B(this, A, new Map()),
          B(this, F, 0));
      }
      mount() {
        (V(this, F)._++,
          1 === H(this, F) &&
            (B(
              this,
              j,
              ea.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), H(this, _).onFocus());
              }),
            ),
            B(
              this,
              $,
              ta.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), H(this, _).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (V(this, F)._--,
          0 === H(this, F) &&
            (null == (e = H(this, j)) || e.call(this),
            B(this, j, void 0),
            null == (t = H(this, $)) || t.call(this),
            B(this, $, void 0)));
      }
      isFetching(e) {
        return H(this, _).findAll({ ...e, fetchStatus: 'fetching' }).length;
      }
      isMutating(e) {
        return H(this, M).findAll({ ...e, status: 'pending' }).length;
      }
      getQueryData(e) {
        var t;
        const n = this.defaultQueryOptions({ queryKey: e });
        return null == (t = H(this, _).get(n.queryHash)) ? void 0 : t.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = H(this, _).build(this, t),
          r = n.state.data;
        return void 0 === r
          ? this.fetchQuery(e)
          : (e.revalidateIfStale && n.isStaleByTime($r(t.staleTime, n)) && this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return H(this, _)
          .findAll(e)
          .map(({ queryKey: e, state: t }) => [e, t.data]);
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          a = H(this, _).get(r.queryHash),
          l = (function (e, t) {
            return 'function' == typeof e ? e(t) : e;
          })(t, null == a ? void 0 : a.state.data);
        if (void 0 !== l)
          return H(this, _)
            .build(this, r)
            .setData(l, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return sa.batch(() =>
          H(this, _)
            .findAll(e)
            .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
        );
      }
      getQueryState(e) {
        var t;
        const n = this.defaultQueryOptions({ queryKey: e });
        return null == (t = H(this, _).get(n.queryHash)) ? void 0 : t.state;
      }
      removeQueries(e) {
        const t = H(this, _);
        sa.batch(() => {
          t.findAll(e).forEach((e) => {
            t.remove(e);
          });
        });
      }
      resetQueries(e, t) {
        const n = H(this, _);
        return sa.batch(
          () => (
            n.findAll(e).forEach((e) => {
              e.reset();
            }),
            this.refetchQueries({ type: 'active', ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = sa.batch(() =>
            H(this, _)
              .findAll(e)
              .map((e) => e.cancel(n)),
          );
        return Promise.all(r).then(jr).catch(jr);
      }
      invalidateQueries(e, t = {}) {
        return sa.batch(
          () => (
            H(this, _)
              .findAll(e)
              .forEach((e) => {
                e.invalidate();
              }),
            'none' === (null == e ? void 0 : e.refetchType)
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (null == e ? void 0 : e.refetchType) ??
                      (null == e ? void 0 : e.type) ??
                      'active',
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = sa.batch(() =>
            H(this, _)
              .findAll(e)
              .filter((e) => !e.isDisabled() && !e.isStatic())
              .map((e) => {
                let t = e.fetch(void 0, n);
                return (
                  n.throwOnError || (t = t.catch(jr)),
                  'paused' === e.state.fetchStatus ? Promise.resolve() : t
                );
              }),
          );
        return Promise.all(r).then(jr);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        void 0 === t.retry && (t.retry = !1);
        const n = H(this, _).build(this, t);
        return n.isStaleByTime($r(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(jr).catch(jr);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = ma(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(jr).catch(jr);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = ma(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return ta.isOnline() ? H(this, M).resumePausedMutations() : Promise.resolve();
      }
      getQueryCache() {
        return H(this, _);
      }
      getMutationCache() {
        return H(this, M);
      }
      getDefaultOptions() {
        return H(this, D);
      }
      setDefaultOptions(e) {
        B(this, D, e);
      }
      setQueryDefaults(e, t) {
        H(this, O).set(Hr(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...H(this, O).values()],
          n = {};
        return (
          t.forEach((t) => {
            Wr(e, t.queryKey) && Object.assign(n, t.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        H(this, A).set(Hr(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...H(this, A).values()],
          n = {};
        return (
          t.forEach((t) => {
            Wr(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...H(this, D).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = qr(t.queryKey, t)),
          void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = 'always' !== t.networkMode),
          void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
          t.queryFn === Jr && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return (null == e ? void 0 : e._defaulted)
          ? e
          : {
              ...H(this, D).mutations,
              ...((null == e ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (H(this, _).clear(), H(this, M).clear());
      }
    }),
    (_ = new WeakMap()),
    (M = new WeakMap()),
    (D = new WeakMap()),
    (O = new WeakMap()),
    (A = new WeakMap()),
    (F = new WeakMap()),
    (j = new WeakMap()),
    ($ = new WeakMap()),
    I),
  ba = re.createContext(void 0),
  wa = ({ client: e, children: t }) => (
    re.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    te.jsx(ba.Provider, { value: e, children: t })
  );
const ka = new ga({ defaultOptions: { queries: { staleTime: 1 / 0 } } });
function Sa() {
  return te.jsx(wa, { client: ka, children: te.jsx(Or, {}) });
}
var xa,
  Ea,
  Ca,
  Pa,
  La = { exports: {} },
  za = {},
  Ra = { exports: {} },
  Ta = {};
function Na() {
  return (
    Ea ||
      ((Ea = 1),
      (Ra.exports =
        (xa ||
          ((xa = 1),
          (function (e) {
            function t(e, t) {
              var n = e.length;
              e.push(t);
              e: for (; 0 < n; ) {
                var r = (n - 1) >>> 1,
                  l = e[r];
                if (!(0 < a(l, t))) break e;
                ((e[r] = t), (e[n] = l), (n = r));
              }
            }
            function n(e) {
              return 0 === e.length ? null : e[0];
            }
            function r(e) {
              if (0 === e.length) return null;
              var t = e[0],
                n = e.pop();
              if (n !== t) {
                e[0] = n;
                e: for (var r = 0, l = e.length, o = l >>> 1; r < o; ) {
                  var i = 2 * (r + 1) - 1,
                    s = e[i],
                    u = i + 1,
                    c = e[u];
                  if (0 > a(s, n))
                    u < l && 0 > a(c, s)
                      ? ((e[r] = c), (e[u] = n), (r = u))
                      : ((e[r] = s), (e[i] = n), (r = i));
                  else {
                    if (!(u < l && 0 > a(c, n))) break e;
                    ((e[r] = c), (e[u] = n), (r = u));
                  }
                }
              }
              return t;
            }
            function a(e, t) {
              var n = e.sortIndex - t.sortIndex;
              return 0 !== n ? n : e.id - t.id;
            }
            if (
              ((e.unstable_now = void 0),
              'object' == typeof performance && 'function' == typeof performance.now)
            ) {
              var l = performance;
              e.unstable_now = function () {
                return l.now();
              };
            } else {
              var o = Date,
                i = o.now();
              e.unstable_now = function () {
                return o.now() - i;
              };
            }
            var s = [],
              u = [],
              c = 1,
              d = null,
              f = 3,
              h = !1,
              p = !1,
              m = !1,
              y = !1,
              v = 'function' == typeof setTimeout ? setTimeout : null,
              g = 'function' == typeof clearTimeout ? clearTimeout : null,
              b = 'undefined' != typeof setImmediate ? setImmediate : null;
            function w(e) {
              for (var a = n(u); null !== a; ) {
                if (null === a.callback) r(u);
                else {
                  if (!(a.startTime <= e)) break;
                  (r(u), (a.sortIndex = a.expirationTime), t(s, a));
                }
                a = n(u);
              }
            }
            function k(e) {
              if (((m = !1), w(e), !p))
                if (null !== n(s)) ((p = !0), x || ((x = !0), S()));
                else {
                  var t = n(u);
                  null !== t && N(k, t.startTime - e);
                }
            }
            var S,
              x = !1,
              E = -1,
              C = 5,
              P = -1;
            function L() {
              return !(!y && e.unstable_now() - P < C);
            }
            function z() {
              if (((y = !1), x)) {
                var t = e.unstable_now();
                P = t;
                var a = !0;
                try {
                  e: {
                    ((p = !1), m && ((m = !1), g(E), (E = -1)), (h = !0));
                    var l = f;
                    try {
                      t: {
                        for (w(t), d = n(s); null !== d && !(d.expirationTime > t && L()); ) {
                          var o = d.callback;
                          if ('function' == typeof o) {
                            ((d.callback = null), (f = d.priorityLevel));
                            var i = o(d.expirationTime <= t);
                            if (((t = e.unstable_now()), 'function' == typeof i)) {
                              ((d.callback = i), w(t), (a = !0));
                              break t;
                            }
                            (d === n(s) && r(s), w(t));
                          } else r(s);
                          d = n(s);
                        }
                        if (null !== d) a = !0;
                        else {
                          var c = n(u);
                          (null !== c && N(k, c.startTime - t), (a = !1));
                        }
                      }
                      break e;
                    } finally {
                      ((d = null), (f = l), (h = !1));
                    }
                    a = void 0;
                  }
                } finally {
                  a ? S() : (x = !1);
                }
              }
            }
            if ('function' == typeof b)
              S = function () {
                b(z);
              };
            else if ('undefined' != typeof MessageChannel) {
              var R = new MessageChannel(),
                T = R.port2;
              ((R.port1.onmessage = z),
                (S = function () {
                  T.postMessage(null);
                }));
            } else
              S = function () {
                v(z, 0);
              };
            function N(t, n) {
              E = v(function () {
                t(e.unstable_now());
              }, n);
            }
            ((e.unstable_IdlePriority = 5),
              (e.unstable_ImmediatePriority = 1),
              (e.unstable_LowPriority = 4),
              (e.unstable_NormalPriority = 3),
              (e.unstable_Profiling = null),
              (e.unstable_UserBlockingPriority = 2),
              (e.unstable_cancelCallback = function (e) {
                e.callback = null;
              }),
              (e.unstable_forceFrameRate = function (e) {
                0 > e || 125 < e || (C = 0 < e ? Math.floor(1e3 / e) : 5);
              }),
              (e.unstable_getCurrentPriorityLevel = function () {
                return f;
              }),
              (e.unstable_next = function (e) {
                switch (f) {
                  case 1:
                  case 2:
                  case 3:
                    var t = 3;
                    break;
                  default:
                    t = f;
                }
                var n = f;
                f = t;
                try {
                  return e();
                } finally {
                  f = n;
                }
              }),
              (e.unstable_requestPaint = function () {
                y = !0;
              }),
              (e.unstable_runWithPriority = function (e, t) {
                switch (e) {
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                    break;
                  default:
                    e = 3;
                }
                var n = f;
                f = e;
                try {
                  return t();
                } finally {
                  f = n;
                }
              }),
              (e.unstable_scheduleCallback = function (r, a, l) {
                var o = e.unstable_now();
                switch (
                  ((l =
                    'object' == typeof l && null !== l && 'number' == typeof (l = l.delay) && 0 < l
                      ? o + l
                      : o),
                  r)
                ) {
                  case 1:
                    var i = -1;
                    break;
                  case 2:
                    i = 250;
                    break;
                  case 5:
                    i = 1073741823;
                    break;
                  case 4:
                    i = 1e4;
                    break;
                  default:
                    i = 5e3;
                }
                return (
                  (r = {
                    id: c++,
                    callback: a,
                    priorityLevel: r,
                    startTime: l,
                    expirationTime: (i = l + i),
                    sortIndex: -1,
                  }),
                  l > o
                    ? ((r.sortIndex = l),
                      t(u, r),
                      null === n(s) && r === n(u) && (m ? (g(E), (E = -1)) : (m = !0), N(k, l - o)))
                    : ((r.sortIndex = i), t(s, r), p || h || ((p = !0), x || ((x = !0), S()))),
                  r
                );
              }),
              (e.unstable_shouldYield = L),
              (e.unstable_wrapCallback = function (e) {
                var t = f;
                return function () {
                  var n = f;
                  f = t;
                  try {
                    return e.apply(this, arguments);
                  } finally {
                    f = n;
                  }
                };
              }));
          })(Ta)),
        Ta))),
    Ra.exports
  );
}
function _a() {
  if (Ca) return za;
  Ca = 1;
  var e = Na(),
    t = K(),
    n = G();
  function r(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function a(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
  }
  function l(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do {
        (!!(4098 & (t = e).flags) && (n = t.return), (e = t.return));
      } while (e);
    }
    return 3 === t.tag ? n : null;
  }
  function o(e) {
    if (13 === e.tag) {
      var t = e.memoizedState;
      if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
        return t.dehydrated;
    }
    return null;
  }
  function i(e) {
    if (l(e) !== e) throw Error(r(188));
  }
  function s(e) {
    var t = e.tag;
    if (5 === t || 26 === t || 27 === t || 6 === t) return e;
    for (e = e.child; null !== e; ) {
      if (null !== (t = s(e))) return t;
      e = e.sibling;
    }
    return null;
  }
  var u = Object.assign,
    c = Symbol.for('react.element'),
    d = Symbol.for('react.transitional.element'),
    f = Symbol.for('react.portal'),
    h = Symbol.for('react.fragment'),
    p = Symbol.for('react.strict_mode'),
    m = Symbol.for('react.profiler'),
    y = Symbol.for('react.provider'),
    v = Symbol.for('react.consumer'),
    g = Symbol.for('react.context'),
    b = Symbol.for('react.forward_ref'),
    w = Symbol.for('react.suspense'),
    k = Symbol.for('react.suspense_list'),
    S = Symbol.for('react.memo'),
    x = Symbol.for('react.lazy'),
    E = Symbol.for('react.activity'),
    C = Symbol.for('react.memo_cache_sentinel'),
    P = Symbol.iterator;
  function L(e) {
    return null === e || 'object' != typeof e
      ? null
      : 'function' == typeof (e = (P && e[P]) || e['@@iterator'])
        ? e
        : null;
  }
  var z = Symbol.for('react.client.reference');
  function R(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.$$typeof === z ? null : e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
      case h:
        return 'Fragment';
      case m:
        return 'Profiler';
      case p:
        return 'StrictMode';
      case w:
        return 'Suspense';
      case k:
        return 'SuspenseList';
      case E:
        return 'Activity';
    }
    if ('object' == typeof e)
      switch (e.$$typeof) {
        case f:
          return 'Portal';
        case g:
          return (e.displayName || 'Context') + '.Provider';
        case v:
          return (e._context.displayName || 'Context') + '.Consumer';
        case b:
          var t = e.render;
          return (
            (e = e.displayName) ||
              (e =
                '' !== (e = t.displayName || t.name || '')
                  ? 'ForwardRef(' + e + ')'
                  : 'ForwardRef'),
            e
          );
        case S:
          return null !== (t = e.displayName || null) ? t : R(e.type) || 'Memo';
        case x:
          ((t = e._payload), (e = e._init));
          try {
            return R(e(t));
          } catch (n) {}
      }
    return null;
  }
  var T = Array.isArray,
    N = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _ = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    M = { pending: !1, data: null, method: null, action: null },
    D = [],
    O = -1;
  function A(e) {
    return { current: e };
  }
  function F(e) {
    0 > O || ((e.current = D[O]), (D[O] = null), O--);
  }
  function j(e, t) {
    (O++, (D[O] = e.current), (e.current = t));
  }
  var $ = A(null),
    I = A(null),
    U = A(null),
    q = A(null);
  function H(e, t) {
    switch ((j(U, t), j(I, e), j($, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? id(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) e = sd((t = id(t)), e);
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (F($), j($, e));
  }
  function W() {
    (F($), F(I), F(U));
  }
  function B(e) {
    null !== e.memoizedState && j(q, e);
    var t = $.current,
      n = sd(t, e.type);
    t !== n && (j(I, e), j($, n));
  }
  function Q(e) {
    (I.current === e && (F($), F(I)), q.current === e && (F(q), (Xd._currentValue = M)));
  }
  var V = Object.prototype.hasOwnProperty,
    Y = e.unstable_scheduleCallback,
    X = e.unstable_cancelCallback,
    J = e.unstable_shouldYield,
    Z = e.unstable_requestPaint,
    ee = e.unstable_now,
    te = e.unstable_getCurrentPriorityLevel,
    ne = e.unstable_ImmediatePriority,
    re = e.unstable_UserBlockingPriority,
    ae = e.unstable_NormalPriority,
    le = e.unstable_LowPriority,
    oe = e.unstable_IdlePriority,
    ie = e.log,
    se = e.unstable_setDisableYieldValue,
    ue = null,
    ce = null;
  function de(e) {
    if (('function' == typeof ie && se(e), ce && 'function' == typeof ce.setStrictMode))
      try {
        ce.setStrictMode(ue, e);
      } catch (t) {}
  }
  var fe = Math.clz32
      ? Math.clz32
      : function (e) {
          return 0 === (e >>>= 0) ? 32 : (31 - ((he(e) / pe) | 0)) | 0;
        },
    he = Math.log,
    pe = Math.LN2;
  var me = 256,
    ye = 4194304;
  function ve(e) {
    var t = 42 & e;
    if (0 !== t) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return 4194048 & e;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return 62914560 & e;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ge(e, t, n) {
    var r = e.pendingLanes;
    if (0 === r) return 0;
    var a = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes;
    e = e.warmLanes;
    var i = 134217727 & r;
    return (
      0 !== i
        ? 0 !== (r = i & ~l)
          ? (a = ve(r))
          : 0 !== (o &= i)
            ? (a = ve(o))
            : n || (0 !== (n = i & ~e) && (a = ve(n)))
        : 0 !== (i = r & ~l)
          ? (a = ve(i))
          : 0 !== o
            ? (a = ve(o))
            : n || (0 !== (n = r & ~e) && (a = ve(n))),
      0 === a
        ? 0
        : 0 !== t &&
            t !== a &&
            0 === (t & l) &&
            ((l = a & -a) >= (n = t & -t) || (32 === l && 4194048 & n))
          ? t
          : a
    );
  }
  function be(e, t) {
    return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
  }
  function we(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      default:
        return -1;
    }
  }
  function ke() {
    var e = me;
    return (!(4194048 & (me <<= 1)) && (me = 256), e);
  }
  function Se() {
    var e = ye;
    return (!(62914560 & (ye <<= 1)) && (ye = 4194304), e);
  }
  function xe(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ee(e, t) {
    ((e.pendingLanes |= t),
      268435456 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Ce(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var r = 31 - fe(t);
    ((e.entangledLanes |= t),
      (e.entanglements[r] = 1073741824 | e.entanglements[r] | (4194090 & n)));
  }
  function Pe(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - fe(n),
        a = 1 << r;
      ((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
    }
  }
  function Le(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ze(e) {
    return 2 < (e &= -e) ? (8 < e ? (134217727 & e ? 32 : 268435456) : 8) : 2;
  }
  function Re() {
    var e = _.p;
    return 0 !== e ? e : void 0 === (e = window.event) ? 32 : hf(e.type);
  }
  var Te = Math.random().toString(36).slice(2),
    Ne = '__reactFiber$' + Te,
    _e = '__reactProps$' + Te,
    Me = '__reactContainer$' + Te,
    De = '__reactEvents$' + Te,
    Oe = '__reactListeners$' + Te,
    Ae = '__reactHandles$' + Te,
    Fe = '__reactResources$' + Te,
    je = '__reactMarker$' + Te;
  function $e(e) {
    (delete e[Ne], delete e[_e], delete e[De], delete e[Oe], delete e[Ae]);
  }
  function Ie(e) {
    var t = e[Ne];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Me] || n[Ne])) {
        if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
          for (e = Sd(e); null !== e; ) {
            if ((n = e[Ne])) return n;
            e = Sd(e);
          }
        return t;
      }
      n = (e = n).parentNode;
    }
    return null;
  }
  function Ue(e) {
    if ((e = e[Ne] || e[Me])) {
      var t = e.tag;
      if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t) return e;
    }
    return null;
  }
  function qe(e) {
    var t = e.tag;
    if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
    throw Error(r(33));
  }
  function He(e) {
    var t = e[Fe];
    return (t || (t = e[Fe] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function We(e) {
    e[je] = !0;
  }
  var Be = new Set(),
    Qe = {};
  function Ve(e, t) {
    (Ke(e, t), Ke(e + 'Capture', t));
  }
  function Ke(e, t) {
    for (Qe[e] = t, e = 0; e < t.length; e++) Be.add(t[e]);
  }
  var Ye,
    Ge,
    Xe = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    Je = {},
    Ze = {};
  function et(e, t, n) {
    if (
      ((a = t),
      V.call(Ze, a) || (!V.call(Je, a) && (Xe.test(a) ? (Ze[a] = !0) : ((Je[a] = !0), 0))))
    )
      if (null === n) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case 'undefined':
          case 'function':
          case 'symbol':
            return void e.removeAttribute(t);
          case 'boolean':
            var r = t.toLowerCase().slice(0, 5);
            if ('data-' !== r && 'aria-' !== r) return void e.removeAttribute(t);
        }
        e.setAttribute(t, '' + n);
      }
    var a;
  }
  function tt(e, t, n) {
    if (null === n) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          return void e.removeAttribute(t);
      }
      e.setAttribute(t, '' + n);
    }
  }
  function nt(e, t, n, r) {
    if (null === r) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          return void e.removeAttribute(n);
      }
      e.setAttributeNS(t, n, '' + r);
    }
  }
  function rt(e) {
    if (void 0 === Ye)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Ye = (t && t[1]) || ''),
          (Ge =
            -1 < n.stack.indexOf('\n    at')
              ? ' (<anonymous>)'
              : -1 < n.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return '\n' + Ye + e + Ge;
  }
  var at = !1;
  function lt(e, t) {
    if (!e || at) return '';
    at = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var n = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(n.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(n, []);
                } catch (a) {
                  var r = a;
                }
                Reflect.construct(e, [], n);
              } else {
                try {
                  n.call();
                } catch (l) {
                  r = l;
                }
                e.call(n.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (o) {
                r = o;
              }
              (n = e()) && 'function' == typeof n.catch && n.catch(function () {});
            }
          } catch (i) {
            if (i && r && 'string' == typeof i.stack) return [i.stack, r.stack];
          }
          return [null, null];
        },
      };
      r.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, 'name');
      a &&
        a.configurable &&
        Object.defineProperty(r.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var l = r.DetermineComponentFrameRoot(),
        o = l[0],
        i = l[1];
      if (o && i) {
        var s = o.split('\n'),
          u = i.split('\n');
        for (a = r = 0; r < s.length && !s[r].includes('DetermineComponentFrameRoot'); ) r++;
        for (; a < u.length && !u[a].includes('DetermineComponentFrameRoot'); ) a++;
        if (r === s.length || a === u.length)
          for (r = s.length - 1, a = u.length - 1; 1 <= r && 0 <= a && s[r] !== u[a]; ) a--;
        for (; 1 <= r && 0 <= a; r--, a--)
          if (s[r] !== u[a]) {
            if (1 !== r || 1 !== a)
              do {
                if ((r--, 0 > --a || s[r] !== u[a])) {
                  var c = '\n' + s[r].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      c.includes('<anonymous>') &&
                      (c = c.replace('<anonymous>', e.displayName)),
                    c
                  );
                }
              } while (1 <= r && 0 <= a);
            break;
          }
      }
    } finally {
      ((at = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : '') ? rt(n) : '';
  }
  function ot(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return rt(e.type);
      case 16:
        return rt('Lazy');
      case 13:
        return rt('Suspense');
      case 19:
        return rt('SuspenseList');
      case 0:
      case 15:
        return lt(e.type, !1);
      case 11:
        return lt(e.type.render, !1);
      case 1:
        return lt(e.type, !0);
      case 31:
        return rt('Activity');
      default:
        return '';
    }
  }
  function it(e) {
    try {
      var t = '';
      do {
        ((t += ot(e)), (e = e.return));
      } while (e);
      return t;
    } catch (n) {
      return '\nError generating stack: ' + n.message + '\n' + n.stack;
    }
  }
  function st(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function ut(e) {
    var t = e.type;
    return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
  }
  function ct(e) {
    e._valueTracker ||
      (e._valueTracker = (function (e) {
        var t = ut(e) ? 'checked' : 'value',
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
          r = '' + e[t];
        if (
          !e.hasOwnProperty(t) &&
          void 0 !== n &&
          'function' == typeof n.get &&
          'function' == typeof n.set
        ) {
          var a = n.get,
            l = n.set;
          return (
            Object.defineProperty(e, t, {
              configurable: !0,
              get: function () {
                return a.call(this);
              },
              set: function (e) {
                ((r = '' + e), l.call(this, e));
              },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
              getValue: function () {
                return r;
              },
              setValue: function (e) {
                r = '' + e;
              },
              stopTracking: function () {
                ((e._valueTracker = null), delete e[t]);
              },
            }
          );
        }
      })(e));
  }
  function dt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = ut(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r) !== n && (t.setValue(e), !0)
    );
  }
  function ft(e) {
    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
    try {
      return e.activeElement || e.body;
    } catch (Ma) {
      return e.body;
    }
  }
  var ht = /[\n"\\]/g;
  function pt(e) {
    return e.replace(ht, function (e) {
      return '\\' + e.charCodeAt(0).toString(16) + ' ';
    });
  }
  function mt(e, t, n, r, a, l, o, i) {
    ((e.name = ''),
      null != o && 'function' != typeof o && 'symbol' != typeof o && 'boolean' != typeof o
        ? (e.type = o)
        : e.removeAttribute('type'),
      null != t
        ? 'number' === o
          ? ((0 === t && '' === e.value) || e.value != t) && (e.value = '' + st(t))
          : e.value !== '' + st(t) && (e.value = '' + st(t))
        : ('submit' !== o && 'reset' !== o) || e.removeAttribute('value'),
      null != t
        ? vt(e, o, st(t))
        : null != n
          ? vt(e, o, st(n))
          : null != r && e.removeAttribute('value'),
      null == a && null != l && (e.defaultChecked = !!l),
      null != a && (e.checked = a && 'function' != typeof a && 'symbol' != typeof a),
      null != i && 'function' != typeof i && 'symbol' != typeof i && 'boolean' != typeof i
        ? (e.name = '' + st(i))
        : e.removeAttribute('name'));
  }
  function yt(e, t, n, r, a, l, o, i) {
    if (
      (null != l &&
        'function' != typeof l &&
        'symbol' != typeof l &&
        'boolean' != typeof l &&
        (e.type = l),
      null != t || null != n)
    ) {
      if (('submit' === l || 'reset' === l) && null == t) return;
      ((n = null != n ? '' + st(n) : ''),
        (t = null != t ? '' + st(t) : n),
        i || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((r = 'function' != typeof (r = null != r ? r : a) && 'symbol' != typeof r && !!r),
      (e.checked = i ? e.checked : !!r),
      (e.defaultChecked = !!r),
      null != o &&
        'function' != typeof o &&
        'symbol' != typeof o &&
        'boolean' != typeof o &&
        (e.name = o));
  }
  function vt(e, t, n) {
    ('number' === t && ft(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function gt(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        ((a = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== a && (e[n].selected = a),
          a && r && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + st(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n)
          return ((e[a].selected = !0), void (r && (e[a].defaultSelected = !0)));
        null !== t || e[a].disabled || (t = e[a]);
      }
      null !== t && (t.selected = !0);
    }
  }
  function bt(e, t, n) {
    null == t || ((t = '' + st(t)) !== e.value && (e.value = t), null != n)
      ? (e.defaultValue = null != n ? '' + st(n) : '')
      : e.defaultValue !== t && (e.defaultValue = t);
  }
  function wt(e, t, n, a) {
    if (null == t) {
      if (null != a) {
        if (null != n) throw Error(r(92));
        if (T(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      (null == n && (n = ''), (t = n));
    }
    ((n = st(t)),
      (e.defaultValue = n),
      (a = e.textContent) === n && '' !== a && null !== a && (e.value = a));
  }
  function kt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
    }
    e.textContent = t;
  }
  var St = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function xt(e, t, n) {
    var r = 0 === t.indexOf('--');
    null == n || 'boolean' == typeof n || '' === n
      ? r
        ? e.setProperty(t, '')
        : 'float' === t
          ? (e.cssFloat = '')
          : (e[t] = '')
      : r
        ? e.setProperty(t, n)
        : 'number' != typeof n || 0 === n || St.has(t)
          ? 'float' === t
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function Et(e, t, n) {
    if (null != t && 'object' != typeof t) throw Error(r(62));
    if (((e = e.style), null != n)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (null != t && t.hasOwnProperty(a)) ||
          (0 === a.indexOf('--')
            ? e.setProperty(a, '')
            : 'float' === a
              ? (e.cssFloat = '')
              : (e[a] = ''));
      for (var l in t) ((a = t[l]), t.hasOwnProperty(l) && n[l] !== a && xt(e, l, a));
    } else for (var o in t) t.hasOwnProperty(o) && xt(e, o, t[o]);
  }
  function Ct(e) {
    if (-1 === e.indexOf('-')) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Pt = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    Lt =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function zt(e) {
    return Lt.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Rt = null;
  function Tt(e) {
    return (
      (e = e.target || e.srcElement || window).correspondingUseElement &&
        (e = e.correspondingUseElement),
      3 === e.nodeType ? e.parentNode : e
    );
  }
  var Nt = null,
    _t = null;
  function Mt(e) {
    var t = Ue(e);
    if (t && (e = t.stateNode)) {
      var n = e[_e] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (mt(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            'radio' === n.type && null != t)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name="' + pt('' + t) + '"][type="radio"]'), t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[_e] || null;
                if (!l) throw Error(r(90));
                mt(
                  a,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name,
                );
              }
            }
            for (t = 0; t < n.length; t++) (a = n[t]).form === e.form && dt(a);
          }
          break e;
        case 'textarea':
          bt(e, n.value, n.defaultValue);
          break e;
        case 'select':
          null != (t = n.value) && gt(e, !!n.multiple, t, !1);
      }
    }
  }
  var Dt = !1;
  function Ot(e, t, n) {
    if (Dt) return e(t, n);
    Dt = !0;
    try {
      return e(t);
    } finally {
      if (
        ((Dt = !1),
        (null !== Nt || null !== _t) &&
          (Wu(), Nt && ((t = Nt), (e = _t), (_t = Nt = null), Mt(t), e)))
      )
        for (t = 0; t < e.length; t++) Mt(e[t]);
    }
  }
  function At(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var a = n[_e] || null;
    if (null === a) return null;
    n = a[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((a = !a.disabled) ||
          (a = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && 'function' != typeof n) throw Error(r(231, t, typeof n));
    return n;
  }
  var Ft = !(
      'undefined' == typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
    ),
    jt = !1;
  if (Ft)
    try {
      var $t = {};
      (Object.defineProperty($t, 'passive', {
        get: function () {
          jt = !0;
        },
      }),
        window.addEventListener('test', $t, $t),
        window.removeEventListener('test', $t, $t));
    } catch (Ma) {
      jt = !1;
    }
  var It = null,
    Ut = null,
    qt = null;
  function Ht() {
    if (qt) return qt;
    var e,
      t,
      n = Ut,
      r = n.length,
      a = 'value' in It ? It.value : It.textContent,
      l = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
    return (qt = a.slice(e, 1 < t ? 1 - t : void 0));
  }
  function Wt(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
      10 === e && (e = 13),
      32 <= e || 13 === e ? e : 0
    );
  }
  function Bt() {
    return !0;
  }
  function Qt() {
    return !1;
  }
  function Vt(e) {
    function t(t, n, r, a, l) {
      for (var o in ((this._reactName = t),
      (this._targetInst = r),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = l),
      (this.currentTarget = null),
      e))
        e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
      return (
        (this.isDefaultPrevented = (
          null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
        )
          ? Bt
          : Qt),
        (this.isPropagationStopped = Qt),
        this
      );
    }
    return (
      u(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = Bt));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = Bt));
        },
        persist: function () {},
        isPersistent: Bt,
      }),
      t
    );
  }
  var Kt,
    Yt,
    Gt,
    Xt = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Jt = Vt(Xt),
    Zt = u({}, Xt, { view: 0, detail: 0 }),
    en = Vt(Zt),
    tn = u({}, Zt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: hn,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return void 0 === e.relatedTarget
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Gt &&
              (Gt && 'mousemove' === e.type
                ? ((Kt = e.screenX - Gt.screenX), (Yt = e.screenY - Gt.screenY))
                : (Yt = Kt = 0),
              (Gt = e)),
            Kt);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Yt;
      },
    }),
    nn = Vt(tn),
    rn = Vt(u({}, tn, { dataTransfer: 0 })),
    an = Vt(u({}, Zt, { relatedTarget: 0 })),
    ln = Vt(u({}, Xt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    on = Vt(
      u({}, Xt, {
        clipboardData: function (e) {
          return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
      }),
    ),
    sn = Vt(u({}, Xt, { data: 0 })),
    un = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    cn = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    dn = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function fn(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = dn[e]) && !!t[e];
  }
  function hn() {
    return fn;
  }
  var pn = Vt(
      u({}, Zt, {
        key: function (e) {
          if (e.key) {
            var t = un[e.key] || e.key;
            if ('Unidentified' !== t) return t;
          }
          return 'keypress' === e.type
            ? 13 === (e = Wt(e))
              ? 'Enter'
              : String.fromCharCode(e)
            : 'keydown' === e.type || 'keyup' === e.type
              ? cn[e.keyCode] || 'Unidentified'
              : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: hn,
        charCode: function (e) {
          return 'keypress' === e.type ? Wt(e) : 0;
        },
        keyCode: function (e) {
          return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
          return 'keypress' === e.type
            ? Wt(e)
            : 'keydown' === e.type || 'keyup' === e.type
              ? e.keyCode
              : 0;
        },
      }),
    ),
    mn = Vt(
      u({}, tn, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
    ),
    yn = Vt(
      u({}, Zt, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: hn,
      }),
    ),
    vn = Vt(u({}, Xt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    gn = Vt(
      u({}, tn, {
        deltaX: function (e) {
          return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
          return 'deltaY' in e
            ? e.deltaY
            : 'wheelDeltaY' in e
              ? -e.wheelDeltaY
              : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
    ),
    bn = Vt(u({}, Xt, { newState: 0, oldState: 0 })),
    wn = [9, 13, 27, 32],
    kn = Ft && 'CompositionEvent' in window,
    Sn = null;
  Ft && 'documentMode' in document && (Sn = document.documentMode);
  var xn = Ft && 'TextEvent' in window && !Sn,
    En = Ft && (!kn || (Sn && 8 < Sn && 11 >= Sn)),
    Cn = String.fromCharCode(32),
    Pn = !1;
  function Ln(e, t) {
    switch (e) {
      case 'keyup':
        return -1 !== wn.indexOf(t.keyCode);
      case 'keydown':
        return 229 !== t.keyCode;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function zn(e) {
    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
  }
  var Rn = !1;
  var Tn = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Nn(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return 'input' === t ? !!Tn[e.type] : 'textarea' === t;
  }
  function _n(e, t, n, r) {
    (Nt ? (_t ? _t.push(r) : (_t = [r])) : (Nt = r),
      0 < (t = Vc(t, 'onChange')).length &&
        ((n = new Jt('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Mn = null,
    Dn = null;
  function On(e) {
    $c(e, 0);
  }
  function An(e) {
    if (dt(qe(e))) return e;
  }
  function Fn(e, t) {
    if ('change' === e) return t;
  }
  var jn = !1;
  if (Ft) {
    var $n;
    if (Ft) {
      var In = 'oninput' in document;
      if (!In) {
        var Un = document.createElement('div');
        (Un.setAttribute('oninput', 'return;'), (In = 'function' == typeof Un.oninput));
      }
      $n = In;
    } else $n = !1;
    jn = $n && (!document.documentMode || 9 < document.documentMode);
  }
  function qn() {
    Mn && (Mn.detachEvent('onpropertychange', Hn), (Dn = Mn = null));
  }
  function Hn(e) {
    if ('value' === e.propertyName && An(Dn)) {
      var t = [];
      (_n(t, Dn, e, Tt(e)), Ot(On, t));
    }
  }
  function Wn(e, t, n) {
    'focusin' === e
      ? (qn(), (Dn = n), (Mn = t).attachEvent('onpropertychange', Hn))
      : 'focusout' === e && qn();
  }
  function Bn(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return An(Dn);
  }
  function Qn(e, t) {
    if ('click' === e) return An(t);
  }
  function Vn(e, t) {
    if ('input' === e || 'change' === e) return An(t);
  }
  var Kn =
    'function' == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        };
  function Yn(e, t) {
    if (Kn(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!V.call(t, a) || !Kn(e[a], t[a])) return !1;
    }
    return !0;
  }
  function Gn(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Xn(e, t) {
    var n,
      r = Gn(e);
    for (e = 0; r; ) {
      if (3 === r.nodeType) {
        if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
        e = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Gn(r);
    }
  }
  function Jn(e, t) {
    return (
      !(!e || !t) &&
      (e === t ||
        ((!e || 3 !== e.nodeType) &&
          (t && 3 === t.nodeType
            ? Jn(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
  }
  function Zn(e) {
    for (
      var t = ft(
        (e =
          null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView
            ? e.ownerDocument.defaultView
            : window).document,
      );
      t instanceof e.HTMLIFrameElement;

    ) {
      try {
        var n = 'string' == typeof t.contentWindow.location.href;
      } catch (r) {
        n = !1;
      }
      if (!n) break;
      t = ft((e = t.contentWindow).document);
    }
    return t;
  }
  function er(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      (('input' === t &&
        ('text' === e.type ||
          'search' === e.type ||
          'tel' === e.type ||
          'url' === e.type ||
          'password' === e.type)) ||
        'textarea' === t ||
        'true' === e.contentEditable)
    );
  }
  var tr = Ft && 'documentMode' in document && 11 >= document.documentMode,
    nr = null,
    rr = null,
    ar = null,
    lr = !1;
  function or(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    lr ||
      null == nr ||
      nr !== ft(r) ||
      ('selectionStart' in (r = nr) && er(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : (r = {
            anchorNode: (r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          }),
      (ar && Yn(ar, r)) ||
        ((ar = r),
        0 < (r = Vc(rr, 'onSelect')).length &&
          ((t = new Jt('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = nr))));
  }
  function ir(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var sr = {
      animationend: ir('Animation', 'AnimationEnd'),
      animationiteration: ir('Animation', 'AnimationIteration'),
      animationstart: ir('Animation', 'AnimationStart'),
      transitionrun: ir('Transition', 'TransitionRun'),
      transitionstart: ir('Transition', 'TransitionStart'),
      transitioncancel: ir('Transition', 'TransitionCancel'),
      transitionend: ir('Transition', 'TransitionEnd'),
    },
    ur = {},
    cr = {};
  function dr(e) {
    if (ur[e]) return ur[e];
    if (!sr[e]) return e;
    var t,
      n = sr[e];
    for (t in n) if (n.hasOwnProperty(t) && t in cr) return (ur[e] = n[t]);
    return e;
  }
  Ft &&
    ((cr = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete sr.animationend.animation,
      delete sr.animationiteration.animation,
      delete sr.animationstart.animation),
    'TransitionEvent' in window || delete sr.transitionend.transition);
  var fr = dr('animationend'),
    hr = dr('animationiteration'),
    pr = dr('animationstart'),
    mr = dr('transitionrun'),
    yr = dr('transitionstart'),
    vr = dr('transitioncancel'),
    gr = dr('transitionend'),
    br = new Map(),
    wr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function kr(e, t) {
    (br.set(e, t), Ve(t, [e]));
  }
  wr.push('scrollEnd');
  var Sr = new WeakMap();
  function xr(e, t) {
    if ('object' == typeof e && null !== e) {
      var n = Sr.get(e);
      return void 0 !== n ? n : ((t = { value: e, source: t, stack: it(t) }), Sr.set(e, t), t);
    }
    return { value: e, source: t, stack: it(t) };
  }
  var Er = [],
    Cr = 0,
    Pr = 0;
  function Lr() {
    for (var e = Cr, t = (Pr = Cr = 0); t < e; ) {
      var n = Er[t];
      Er[t++] = null;
      var r = Er[t];
      Er[t++] = null;
      var a = Er[t];
      Er[t++] = null;
      var l = Er[t];
      if (((Er[t++] = null), null !== r && null !== a)) {
        var o = r.pending;
        (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)), (r.pending = a));
      }
      0 !== l && Nr(n, a, l);
    }
  }
  function zr(e, t, n, r) {
    ((Er[Cr++] = e),
      (Er[Cr++] = t),
      (Er[Cr++] = n),
      (Er[Cr++] = r),
      (Pr |= r),
      (e.lanes |= r),
      null !== (e = e.alternate) && (e.lanes |= r));
  }
  function Rr(e, t, n, r) {
    return (zr(e, t, n, r), _r(e));
  }
  function Tr(e, t) {
    return (zr(e, null, null, t), _r(e));
  }
  function Nr(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    null !== r && (r.lanes |= n);
    for (var a = !1, l = e.return; null !== l; )
      ((l.childLanes |= n),
        null !== (r = l.alternate) && (r.childLanes |= n),
        22 === l.tag && (null === (e = l.stateNode) || 1 & e._visibility || (a = !0)),
        (e = l),
        (l = l.return));
    return 3 === e.tag
      ? ((l = e.stateNode),
        a &&
          null !== t &&
          ((a = 31 - fe(n)),
          null === (r = (e = l.hiddenUpdates)[a]) ? (e[a] = [t]) : r.push(t),
          (t.lane = 536870912 | n)),
        l)
      : null;
  }
  function _r(e) {
    if (50 < Ou) throw ((Ou = 0), (Au = null), Error(r(185)));
    for (var t = e.return; null !== t; ) t = (e = t).return;
    return 3 === e.tag ? e.stateNode : null;
  }
  var Mr = {};
  function Dr(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Or(e, t, n, r) {
    return new Dr(e, t, n, r);
  }
  function Ar(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
  }
  function Fr(e, t) {
    var n = e.alternate;
    return (
      null === n
        ? (((n = Or(e.tag, t, e.key, e.mode)).elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = 65011712 & e.flags),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function jr(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      null === n
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function $r(e, t, n, a, l, o) {
    var i = 0;
    if (((a = e), 'function' == typeof e)) Ar(e) && (i = 1);
    else if ('string' == typeof e)
      i = (function (e, t, n) {
        if (1 === n || null != t.itemProp) return !1;
        switch (e) {
          case 'meta':
          case 'title':
            return !0;
          case 'style':
            if ('string' != typeof t.precedence || 'string' != typeof t.href || '' === t.href)
              break;
            return !0;
          case 'link':
            if (
              'string' != typeof t.rel ||
              'string' != typeof t.href ||
              '' === t.href ||
              t.onLoad ||
              t.onError
            )
              break;
            return (
              'stylesheet' !== t.rel ||
              ((e = t.disabled), 'string' == typeof t.precedence && null == e)
            );
          case 'script':
            if (
              t.async &&
              'function' != typeof t.async &&
              'symbol' != typeof t.async &&
              !t.onLoad &&
              !t.onError &&
              t.src &&
              'string' == typeof t.src
            )
              return !0;
        }
        return !1;
      })(e, n, $.current)
        ? 26
        : 'html' === e || 'head' === e || 'body' === e
          ? 27
          : 5;
    else
      e: switch (e) {
        case E:
          return (((e = Or(31, n, t, l)).elementType = E), (e.lanes = o), e);
        case h:
          return Ir(n.children, l, o, t);
        case p:
          ((i = 8), (l |= 24));
          break;
        case m:
          return (((e = Or(12, n, t, 2 | l)).elementType = m), (e.lanes = o), e);
        case w:
          return (((e = Or(13, n, t, l)).elementType = w), (e.lanes = o), e);
        case k:
          return (((e = Or(19, n, t, l)).elementType = k), (e.lanes = o), e);
        default:
          if ('object' == typeof e && null !== e)
            switch (e.$$typeof) {
              case y:
              case g:
                i = 10;
                break e;
              case v:
                i = 9;
                break e;
              case b:
                i = 11;
                break e;
              case S:
                i = 14;
                break e;
              case x:
                ((i = 16), (a = null));
                break e;
            }
          ((i = 29), (n = Error(r(130, null === e ? 'null' : typeof e, ''))), (a = null));
      }
    return (((t = Or(i, n, t, l)).elementType = e), (t.type = a), (t.lanes = o), t);
  }
  function Ir(e, t, n, r) {
    return (((e = Or(7, e, r, t)).lanes = n), e);
  }
  function Ur(e, t, n) {
    return (((e = Or(6, e, null, t)).lanes = n), e);
  }
  function qr(e, t, n) {
    return (
      ((t = Or(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Hr = [],
    Wr = 0,
    Br = null,
    Qr = 0,
    Vr = [],
    Kr = 0,
    Yr = null,
    Gr = 1,
    Xr = '';
  function Jr(e, t) {
    ((Hr[Wr++] = Qr), (Hr[Wr++] = Br), (Br = e), (Qr = t));
  }
  function Zr(e, t, n) {
    ((Vr[Kr++] = Gr), (Vr[Kr++] = Xr), (Vr[Kr++] = Yr), (Yr = e));
    var r = Gr;
    e = Xr;
    var a = 32 - fe(r) - 1;
    ((r &= ~(1 << a)), (n += 1));
    var l = 32 - fe(t) + a;
    if (30 < l) {
      var o = a - (a % 5);
      ((l = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (a -= o),
        (Gr = (1 << (32 - fe(t) + a)) | (n << a) | r),
        (Xr = l + e));
    } else ((Gr = (1 << l) | (n << a) | r), (Xr = e));
  }
  function ea(e) {
    null !== e.return && (Jr(e, 1), Zr(e, 1, 0));
  }
  function ta(e) {
    for (; e === Br; ) ((Br = Hr[--Wr]), (Hr[Wr] = null), (Qr = Hr[--Wr]), (Hr[Wr] = null));
    for (; e === Yr; )
      ((Yr = Vr[--Kr]),
        (Vr[Kr] = null),
        (Xr = Vr[--Kr]),
        (Vr[Kr] = null),
        (Gr = Vr[--Kr]),
        (Vr[Kr] = null));
  }
  var na = null,
    ra = null,
    aa = !1,
    la = null,
    oa = !1,
    ia = Error(r(519));
  function sa(e) {
    throw (pa(xr(Error(r(418, '')), e)), ia);
  }
  function ua(e) {
    var t = e.stateNode,
      n = e.type,
      r = e.memoizedProps;
    switch (((t[Ne] = e), (t[_e] = r), n)) {
      case 'dialog':
        (Ic('cancel', t), Ic('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Ic('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < Fc.length; n++) Ic(Fc[n], t);
        break;
      case 'source':
        Ic('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Ic('error', t), Ic('load', t));
        break;
      case 'details':
        Ic('toggle', t);
        break;
      case 'input':
        (Ic('invalid', t),
          yt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0),
          ct(t));
        break;
      case 'select':
        Ic('invalid', t);
        break;
      case 'textarea':
        (Ic('invalid', t), wt(t, r.value, r.defaultValue, r.children), ct(t));
    }
    (('string' != typeof (n = r.children) && 'number' != typeof n && 'bigint' != typeof n) ||
    t.textContent === '' + n ||
    !0 === r.suppressHydrationWarning ||
    Zc(t.textContent, n)
      ? (null != r.popover && (Ic('beforetoggle', t), Ic('toggle', t)),
        null != r.onScroll && Ic('scroll', t),
        null != r.onScrollEnd && Ic('scrollend', t),
        null != r.onClick && (t.onclick = ed),
        (t = !0))
      : (t = !1),
      t || sa(e));
  }
  function ca(e) {
    for (na = e.return; na; )
      switch (na.tag) {
        case 5:
        case 13:
          return void (oa = !1);
        case 27:
        case 3:
          return void (oa = !0);
        default:
          na = na.return;
      }
  }
  function da(e) {
    if (e !== na) return !1;
    if (!aa) return (ca(e), (aa = !0), !1);
    var t,
      n = e.tag;
    if (
      ((t = 3 !== n && 27 !== n) &&
        ((t = 5 === n) &&
          (t = !('form' !== (t = e.type) && 'button' !== t) || ud(e.type, e.memoizedProps)),
        (t = !t)),
      t && ra && sa(e),
      ca(e),
      13 === n)
    ) {
      if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(r(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (8 === e.nodeType)
            if ('/$' === (t = e.data)) {
              if (0 === n) {
                ra = wd(e.nextSibling);
                break e;
              }
              n--;
            } else ('$' !== t && '$!' !== t && '$?' !== t) || n++;
          e = e.nextSibling;
        }
        ra = null;
      }
    } else
      27 === n
        ? ((n = ra), yd(e.type) ? ((e = kd), (kd = null), (ra = e)) : (ra = n))
        : (ra = na ? wd(e.stateNode.nextSibling) : null);
    return !0;
  }
  function fa() {
    ((ra = na = null), (aa = !1));
  }
  function ha() {
    var e = la;
    return (null !== e && (null === Su ? (Su = e) : Su.push.apply(Su, e), (la = null)), e);
  }
  function pa(e) {
    null === la ? (la = [e]) : la.push(e);
  }
  var ma = A(null),
    ya = null,
    va = null;
  function ga(e, t, n) {
    (j(ma, t._currentValue), (t._currentValue = n));
  }
  function ba(e) {
    ((e._currentValue = ma.current), F(ma));
  }
  function wa(e, t, n) {
    for (; null !== e; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
          : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function ka(e, t, n, a) {
    var l = e.child;
    for (null !== l && (l.return = e); null !== l; ) {
      var o = l.dependencies;
      if (null !== o) {
        var i = l.child;
        o = o.firstContext;
        e: for (; null !== o; ) {
          var s = o;
          o = l;
          for (var u = 0; u < t.length; u++)
            if (s.context === t[u]) {
              ((o.lanes |= n),
                null !== (s = o.alternate) && (s.lanes |= n),
                wa(o.return, n, e),
                a || (i = null));
              break e;
            }
          o = s.next;
        }
      } else if (18 === l.tag) {
        if (null === (i = l.return)) throw Error(r(341));
        ((i.lanes |= n), null !== (o = i.alternate) && (o.lanes |= n), wa(i, n, e), (i = null));
      } else i = l.child;
      if (null !== i) i.return = l;
      else
        for (i = l; null !== i; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (null !== (l = i.sibling)) {
            ((l.return = i.return), (i = l));
            break;
          }
          i = i.return;
        }
      l = i;
    }
  }
  function Sa(e, t, n, a) {
    e = null;
    for (var l = t, o = !1; null !== l; ) {
      if (!o)
        if (524288 & l.flags) o = !0;
        else if (262144 & l.flags) break;
      if (10 === l.tag) {
        var i = l.alternate;
        if (null === i) throw Error(r(387));
        if (null !== (i = i.memoizedProps)) {
          var s = l.type;
          Kn(l.pendingProps.value, i.value) || (null !== e ? e.push(s) : (e = [s]));
        }
      } else if (l === q.current) {
        if (null === (i = l.alternate)) throw Error(r(387));
        i.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (null !== e ? e.push(Xd) : (e = [Xd]));
      }
      l = l.return;
    }
    (null !== e && ka(t, e, n, a), (t.flags |= 262144));
  }
  function xa(e) {
    for (e = e.firstContext; null !== e; ) {
      if (!Kn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ea(e) {
    ((ya = e), (va = null), null !== (e = e.dependencies) && (e.firstContext = null));
  }
  function Pa(e) {
    return Ra(ya, e);
  }
  function La(e, t) {
    return (null === ya && Ea(e), Ra(e, t));
  }
  function Ra(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), null === va)) {
      if (null === e) throw Error(r(308));
      ((va = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else va = va.next = t;
    return n;
  }
  var Ta =
      'undefined' != typeof AbortController
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (t, n) {
                  e.push(n);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (e) {
                  return e();
                }));
            };
          },
    _a = e.unstable_scheduleCallback,
    Da = e.unstable_NormalPriority,
    Oa = {
      $$typeof: g,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Aa() {
    return { controller: new Ta(), data: new Map(), refCount: 0 };
  }
  function Fa(e) {
    (e.refCount--,
      0 === e.refCount &&
        _a(Da, function () {
          e.controller.abort();
        }));
  }
  var ja = null,
    $a = 0,
    Ia = 0,
    Ua = null;
  function qa() {
    if (0 === --$a && null !== ja) {
      null !== Ua && (Ua.status = 'fulfilled');
      var e = ja;
      ((ja = null), (Ia = 0), (Ua = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  var Ha = N.S;
  N.S = function (e, t) {
    ('object' == typeof t &&
      null !== t &&
      'function' == typeof t.then &&
      (function (e, t) {
        if (null === ja) {
          var n = (ja = []);
          (($a = 0),
            (Ia = _c()),
            (Ua = {
              status: 'pending',
              value: void 0,
              then: function (e) {
                n.push(e);
              },
            }));
        }
        ($a++, t.then(qa, qa));
      })(0, t),
      null !== Ha && Ha(e, t));
  };
  var Wa = A(null);
  function Ba() {
    var e = Wa.current;
    return null !== e ? e : ou.pooledCache;
  }
  function Qa(e, t) {
    j(Wa, null === t ? Wa.current : t.pool);
  }
  function Va() {
    var e = Ba();
    return null === e ? null : { parent: Oa._currentValue, pool: e };
  }
  var Ka = Error(r(460)),
    Ya = Error(r(474)),
    Ga = Error(r(542)),
    Xa = { then: function () {} };
  function Ja(e) {
    return 'fulfilled' === (e = e.status) || 'rejected' === e;
  }
  function Za() {}
  function el(e, t, n) {
    switch ((void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Za, Za), (t = n)), t.status)) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw (rl((e = t.reason)), e);
      default:
        if ('string' == typeof t.status) t.then(Za, Za);
        else {
          if (null !== (e = ou) && 100 < e.shellSuspendCounter) throw Error(r(482));
          (((e = t).status = 'pending'),
            e.then(
              function (e) {
                if ('pending' === t.status) {
                  var n = t;
                  ((n.status = 'fulfilled'), (n.value = e));
                }
              },
              function (e) {
                if ('pending' === t.status) {
                  var n = t;
                  ((n.status = 'rejected'), (n.reason = e));
                }
              },
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw (rl((e = t.reason)), e);
        }
        throw ((tl = t), Ka);
    }
  }
  var tl = null;
  function nl() {
    if (null === tl) throw Error(r(459));
    var e = tl;
    return ((tl = null), e);
  }
  function rl(e) {
    if (e === Ka || e === Ga) throw Error(r(483));
  }
  var al = !1;
  function ll(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ol(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function il(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function sl(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 2 & lu)) {
      var a = r.pending;
      return (
        null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (r.pending = t),
        (t = _r(e)),
        Nr(e, null, n),
        t
      );
    }
    return (zr(e, r, t, n), _r(e));
  }
  function ul(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 4194048 & n)) {
      var r = t.lanes;
      ((n |= r &= e.pendingLanes), (t.lanes = n), Pe(e, n));
    }
  }
  function cl(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
      var a = null,
        l = null;
      if (null !== (n = n.firstBaseUpdate)) {
        do {
          var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          (null === l ? (a = l = o) : (l = l.next = o), (n = n.next));
        } while (null !== n);
        null === l ? (a = l = t) : (l = l.next = t);
      } else a = l = t;
      return (
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: l,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
        void (e.updateQueue = n)
      );
    }
    (null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var dl = !1;
  function fl() {
    if (dl) {
      if (null !== Ua) throw Ua;
    }
  }
  function hl(e, t, n, r) {
    dl = !1;
    var a = e.updateQueue;
    al = !1;
    var l = a.firstBaseUpdate,
      o = a.lastBaseUpdate,
      i = a.shared.pending;
    if (null !== i) {
      a.shared.pending = null;
      var s = i,
        c = s.next;
      ((s.next = null), null === o ? (l = c) : (o.next = c), (o = s));
      var d = e.alternate;
      null !== d &&
        (i = (d = d.updateQueue).lastBaseUpdate) !== o &&
        (null === i ? (d.firstBaseUpdate = c) : (i.next = c), (d.lastBaseUpdate = s));
    }
    if (null !== l) {
      var f = a.baseState;
      for (o = 0, d = c = s = null, i = l; ; ) {
        var h = -536870913 & i.lane,
          p = h !== i.lane;
        if (p ? (su & h) === h : (r & h) === h) {
          (0 !== h && h === Ia && (dl = !0),
            null !== d &&
              (d = d.next =
                { lane: 0, tag: i.tag, payload: i.payload, callback: null, next: null }));
          e: {
            var m = e,
              y = i;
            h = t;
            var v = n;
            switch (y.tag) {
              case 1:
                if ('function' == typeof (m = y.payload)) {
                  f = m.call(v, f, h);
                  break e;
                }
                f = m;
                break e;
              case 3:
                m.flags = (-65537 & m.flags) | 128;
              case 0:
                if (null == (h = 'function' == typeof (m = y.payload) ? m.call(v, f, h) : m))
                  break e;
                f = u({}, f, h);
                break e;
              case 2:
                al = !0;
            }
          }
          null !== (h = i.callback) &&
            ((e.flags |= 64),
            p && (e.flags |= 8192),
            null === (p = a.callbacks) ? (a.callbacks = [h]) : p.push(h));
        } else
          ((p = { lane: h, tag: i.tag, payload: i.payload, callback: i.callback, next: null }),
            null === d ? ((c = d = p), (s = f)) : (d = d.next = p),
            (o |= h));
        if (null === (i = i.next)) {
          if (null === (i = a.shared.pending)) break;
          ((i = (p = i).next), (p.next = null), (a.lastBaseUpdate = p), (a.shared.pending = null));
        }
      }
      (null === d && (s = f),
        (a.baseState = s),
        (a.firstBaseUpdate = c),
        (a.lastBaseUpdate = d),
        null === l && (a.shared.lanes = 0),
        (yu |= o),
        (e.lanes = o),
        (e.memoizedState = f));
    }
  }
  function pl(e, t) {
    if ('function' != typeof e) throw Error(r(191, e));
    e.call(t);
  }
  function ml(e, t) {
    var n = e.callbacks;
    if (null !== n) for (e.callbacks = null, e = 0; e < n.length; e++) pl(n[e], t);
  }
  var yl = A(null),
    vl = A(0);
  function gl(e, t) {
    (j(vl, (e = pu)), j(yl, t), (pu = e | t.baseLanes));
  }
  function bl() {
    (j(vl, pu), j(yl, yl.current));
  }
  function wl() {
    ((pu = vl.current), F(yl), F(vl));
  }
  var kl = 0,
    Sl = null,
    xl = null,
    El = null,
    Cl = !1,
    Pl = !1,
    Ll = !1,
    zl = 0,
    Rl = 0,
    Tl = null,
    Nl = 0;
  function _l() {
    throw Error(r(321));
  }
  function Ml(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Kn(e[n], t[n])) return !1;
    return !0;
  }
  function Dl(e, t, n, r, a, l) {
    return (
      (kl = l),
      (Sl = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (N.H = null === e || null === e.memoizedState ? Yo : Go),
      (Ll = !1),
      (l = n(r, a)),
      (Ll = !1),
      Pl && (l = Al(t, n, r, a)),
      Ol(e),
      l
    );
  }
  function Ol(e) {
    N.H = Ko;
    var t = null !== xl && null !== xl.next;
    if (((kl = 0), (El = xl = Sl = null), (Cl = !1), (Rl = 0), (Tl = null), t)) throw Error(r(300));
    null === e || Ti || (null !== (e = e.dependencies) && xa(e) && (Ti = !0));
  }
  function Al(e, t, n, a) {
    Sl = e;
    var l = 0;
    do {
      if ((Pl && (Tl = null), (Rl = 0), (Pl = !1), 25 <= l)) throw Error(r(301));
      if (((l += 1), (El = xl = null), null != e.updateQueue)) {
        var o = e.updateQueue;
        ((o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          null != o.memoCache && (o.memoCache.index = 0));
      }
      ((N.H = Xo), (o = t(n, a)));
    } while (Pl);
    return o;
  }
  function Fl() {
    var e = N.H,
      t = e.useState()[0];
    return (
      (t = 'function' == typeof t.then ? Hl(t) : t),
      (e = e.useState()[0]),
      (null !== xl ? xl.memoizedState : null) !== e && (Sl.flags |= 1024),
      t
    );
  }
  function jl() {
    var e = 0 !== zl;
    return ((zl = 0), e);
  }
  function $l(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function Il(e) {
    if (Cl) {
      for (e = e.memoizedState; null !== e; ) {
        var t = e.queue;
        (null !== t && (t.pending = null), (e = e.next));
      }
      Cl = !1;
    }
    ((kl = 0), (El = xl = Sl = null), (Pl = !1), (Rl = zl = 0), (Tl = null));
  }
  function Ul() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === El ? (Sl.memoizedState = El = e) : (El = El.next = e), El);
  }
  function ql() {
    if (null === xl) {
      var e = Sl.alternate;
      e = null !== e ? e.memoizedState : null;
    } else e = xl.next;
    var t = null === El ? Sl.memoizedState : El.next;
    if (null !== t) ((El = t), (xl = e));
    else {
      if (null === e) {
        if (null === Sl.alternate) throw Error(r(467));
        throw Error(r(310));
      }
      ((e = {
        memoizedState: (xl = e).memoizedState,
        baseState: xl.baseState,
        baseQueue: xl.baseQueue,
        queue: xl.queue,
        next: null,
      }),
        null === El ? (Sl.memoizedState = El = e) : (El = El.next = e));
    }
    return El;
  }
  function Hl(e) {
    var t = Rl;
    return (
      (Rl += 1),
      null === Tl && (Tl = []),
      (e = el(Tl, e, t)),
      (t = Sl),
      null === (null === El ? t.memoizedState : El.next) &&
        ((t = t.alternate), (N.H = null === t || null === t.memoizedState ? Yo : Go)),
      e
    );
  }
  function Wl(e) {
    if (null !== e && 'object' == typeof e) {
      if ('function' == typeof e.then) return Hl(e);
      if (e.$$typeof === g) return Pa(e);
    }
    throw Error(r(438, String(e)));
  }
  function Bl(e) {
    var t = null,
      n = Sl.updateQueue;
    if ((null !== n && (t = n.memoCache), null == t)) {
      var r = Sl.alternate;
      null !== r &&
        null !== (r = r.updateQueue) &&
        null != (r = r.memoCache) &&
        (t = {
          data: r.data.map(function (e) {
            return e.slice();
          }),
          index: 0,
        });
    }
    if (
      (null == t && (t = { data: [], index: 0 }),
      null === n &&
        ((n = { lastEffect: null, events: null, stores: null, memoCache: null }),
        (Sl.updateQueue = n)),
      (n.memoCache = t),
      void 0 === (n = t.data[t.index]))
    )
      for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = C;
    return (t.index++, n);
  }
  function Ql(e, t) {
    return 'function' == typeof t ? t(e) : t;
  }
  function Vl(e) {
    return Kl(ql(), xl, e);
  }
  function Kl(e, t, n) {
    var a = e.queue;
    if (null === a) throw Error(r(311));
    a.lastRenderedReducer = n;
    var l = e.baseQueue,
      o = a.pending;
    if (null !== o) {
      if (null !== l) {
        var i = l.next;
        ((l.next = o.next), (o.next = i));
      }
      ((t.baseQueue = l = o), (a.pending = null));
    }
    if (((o = e.baseState), null === l)) e.memoizedState = o;
    else {
      var s = (i = null),
        u = null,
        c = (t = l.next),
        d = !1;
      do {
        var f = -536870913 & c.lane;
        if (f !== c.lane ? (su & f) === f : (kl & f) === f) {
          var h = c.revertLane;
          if (0 === h)
            (null !== u &&
              (u = u.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
              f === Ia && (d = !0));
          else {
            if ((kl & h) === h) {
              ((c = c.next), h === Ia && (d = !0));
              continue;
            }
            ((f = {
              lane: 0,
              revertLane: c.revertLane,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
              null === u ? ((s = u = f), (i = o)) : (u = u.next = f),
              (Sl.lanes |= h),
              (yu |= h));
          }
          ((f = c.action), Ll && n(o, f), (o = c.hasEagerState ? c.eagerState : n(o, f)));
        } else
          ((h = {
            lane: f,
            revertLane: c.revertLane,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null,
          }),
            null === u ? ((s = u = h), (i = o)) : (u = u.next = h),
            (Sl.lanes |= f),
            (yu |= f));
        c = c.next;
      } while (null !== c && c !== t);
      if (
        (null === u ? (i = o) : (u.next = s),
        !Kn(o, e.memoizedState) && ((Ti = !0), d && null !== (n = Ua)))
      )
        throw n;
      ((e.memoizedState = o), (e.baseState = i), (e.baseQueue = u), (a.lastRenderedState = o));
    }
    return (null === l && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function Yl(e) {
    var t = ql(),
      n = t.queue;
    if (null === n) throw Error(r(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (null !== l) {
      n.pending = null;
      var i = (l = l.next);
      do {
        ((o = e(o, i.action)), (i = i.next));
      } while (i !== l);
      (Kn(o, t.memoizedState) || (Ti = !0),
        (t.memoizedState = o),
        null === t.baseQueue && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, a];
  }
  function Gl(e, t, n) {
    var a = Sl,
      l = ql(),
      o = aa;
    if (o) {
      if (void 0 === n) throw Error(r(407));
      n = n();
    } else n = t();
    var i = !Kn((xl || l).memoizedState, n);
    if (
      (i && ((l.memoizedState = n), (Ti = !0)),
      (l = l.queue),
      wo(2048, 8, Zl.bind(null, a, l, e), [e]),
      l.getSnapshot !== t || i || (null !== El && 1 & El.memoizedState.tag))
    ) {
      if (
        ((a.flags |= 2048),
        vo(9, { destroy: void 0, resource: void 0 }, Jl.bind(null, a, l, n, t), null),
        null === ou)
      )
        throw Error(r(349));
      o || 124 & kl || Xl(a, t, n);
    }
    return n;
  }
  function Xl(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      null === (t = Sl.updateQueue)
        ? ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
          (Sl.updateQueue = t),
          (t.stores = [e]))
        : null === (n = t.stores)
          ? (t.stores = [e])
          : n.push(e));
  }
  function Jl(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), eo(t) && to(e));
  }
  function Zl(e, t, n) {
    return n(function () {
      eo(t) && to(e);
    });
  }
  function eo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Kn(e, n);
    } catch (r) {
      return !0;
    }
  }
  function to(e) {
    var t = Tr(e, 2);
    null !== t && $u(t, e, 2);
  }
  function no(e) {
    var t = Ul();
    if ('function' == typeof e) {
      var n = e;
      if (((e = n()), Ll)) {
        de(!0);
        try {
          n();
        } finally {
          de(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ql,
        lastRenderedState: e,
      }),
      t
    );
  }
  function ro(e, t, n, r) {
    return ((e.baseState = n), Kl(e, xl, 'function' == typeof r ? r : Ql));
  }
  function ao(e, t, n, a, l) {
    if (Bo(e)) throw Error(r(485));
    if (null !== (e = t.action)) {
      var o = {
        payload: l,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (e) {
          o.listeners.push(e);
        },
      };
      (null !== N.T ? n(!0) : (o.isTransition = !1),
        a(o),
        null === (n = t.pending)
          ? ((o.next = t.pending = o), lo(t, o))
          : ((o.next = n.next), (t.pending = n.next = o)));
    }
  }
  function lo(e, t) {
    var n = t.action,
      r = t.payload,
      a = e.state;
    if (t.isTransition) {
      var l = N.T,
        o = {};
      N.T = o;
      try {
        var i = n(a, r),
          s = N.S;
        (null !== s && s(o, i), oo(e, t, i));
      } catch (u) {
        so(e, t, u);
      } finally {
        N.T = l;
      }
    } else
      try {
        oo(e, t, (l = n(a, r)));
      } catch (c) {
        so(e, t, c);
      }
  }
  function oo(e, t, n) {
    null !== n && 'object' == typeof n && 'function' == typeof n.then
      ? n.then(
          function (n) {
            io(e, t, n);
          },
          function (n) {
            return so(e, t, n);
          },
        )
      : io(e, t, n);
  }
  function io(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      uo(t),
      (e.state = n),
      null !== (t = e.pending) &&
        ((n = t.next) === t ? (e.pending = null) : ((n = n.next), (t.next = n), lo(e, n))));
  }
  function so(e, t, n) {
    var r = e.pending;
    if (((e.pending = null), null !== r)) {
      r = r.next;
      do {
        ((t.status = 'rejected'), (t.reason = n), uo(t), (t = t.next));
      } while (t !== r);
    }
    e.action = null;
  }
  function uo(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function co(e, t) {
    return t;
  }
  function fo(e, t) {
    if (aa) {
      var n = ou.formState;
      if (null !== n) {
        e: {
          var r = Sl;
          if (aa) {
            if (ra) {
              t: {
                for (var a = ra, l = oa; 8 !== a.nodeType; ) {
                  if (!l) {
                    a = null;
                    break t;
                  }
                  if (null === (a = wd(a.nextSibling))) {
                    a = null;
                    break t;
                  }
                }
                a = 'F!' === (l = a.data) || 'F' === l ? a : null;
              }
              if (a) {
                ((ra = wd(a.nextSibling)), (r = 'F!' === a.data));
                break e;
              }
            }
            sa(r);
          }
          r = !1;
        }
        r && (t = n[0]);
      }
    }
    return (
      ((n = Ul()).memoizedState = n.baseState = t),
      (r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: co,
        lastRenderedState: t,
      }),
      (n.queue = r),
      (n = qo.bind(null, Sl, r)),
      (r.dispatch = n),
      (r = no(!1)),
      (l = Wo.bind(null, Sl, !1, r.queue)),
      (a = { state: t, dispatch: null, action: e, pending: null }),
      ((r = Ul()).queue = a),
      (n = ao.bind(null, Sl, a, l, n)),
      (a.dispatch = n),
      (r.memoizedState = e),
      [t, n, !1]
    );
  }
  function ho(e) {
    return po(ql(), xl, e);
  }
  function po(e, t, n) {
    if (
      ((t = Kl(e, t, co)[0]),
      (e = Vl(Ql)[0]),
      'object' == typeof t && null !== t && 'function' == typeof t.then)
    )
      try {
        var r = Hl(t);
      } catch (o) {
        if (o === Ka) throw Ga;
        throw o;
      }
    else r = t;
    var a = (t = ql()).queue,
      l = a.dispatch;
    return (
      n !== t.memoizedState &&
        ((Sl.flags |= 2048),
        vo(9, { destroy: void 0, resource: void 0 }, mo.bind(null, a, n), null)),
      [r, l, e]
    );
  }
  function mo(e, t) {
    e.action = t;
  }
  function yo(e) {
    var t = ql(),
      n = xl;
    if (null !== n) return po(t, n, e);
    (ql(), (t = t.memoizedState));
    var r = (n = ql()).queue.dispatch;
    return ((n.memoizedState = e), [t, r, !1]);
  }
  function vo(e, t, n, r) {
    return (
      (e = { tag: e, create: n, deps: r, inst: t, next: null }),
      null === (t = Sl.updateQueue) &&
        ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
        (Sl.updateQueue = t)),
      null === (n = t.lastEffect)
        ? (t.lastEffect = e.next = e)
        : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
      e
    );
  }
  function go() {
    return ql().memoizedState;
  }
  function bo(e, t, n, r) {
    var a = Ul();
    ((r = void 0 === r ? null : r),
      (Sl.flags |= e),
      (a.memoizedState = vo(1 | t, { destroy: void 0, resource: void 0 }, n, r)));
  }
  function wo(e, t, n, r) {
    var a = ql();
    r = void 0 === r ? null : r;
    var l = a.memoizedState.inst;
    null !== xl && null !== r && Ml(r, xl.memoizedState.deps)
      ? (a.memoizedState = vo(t, l, n, r))
      : ((Sl.flags |= e), (a.memoizedState = vo(1 | t, l, n, r)));
  }
  function ko(e, t) {
    bo(8390656, 8, e, t);
  }
  function So(e, t) {
    wo(2048, 8, e, t);
  }
  function xo(e, t) {
    return wo(4, 2, e, t);
  }
  function Eo(e, t) {
    return wo(4, 4, e, t);
  }
  function Co(e, t) {
    if ('function' == typeof t) {
      e = e();
      var n = t(e);
      return function () {
        'function' == typeof n ? n() : t(null);
      };
    }
    if (null != t)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Po(e, t, n) {
    ((n = null != n ? n.concat([e]) : null), wo(4, 4, Co.bind(null, t, e), n));
  }
  function Lo() {}
  function zo(e, t) {
    var n = ql();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== t && Ml(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ro(e, t) {
    var n = ql();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    if (null !== t && Ml(t, r[1])) return r[0];
    if (((r = e()), Ll)) {
      de(!0);
      try {
        e();
      } finally {
        de(!1);
      }
    }
    return ((n.memoizedState = [r, t]), r);
  }
  function To(e, t, n) {
    return void 0 === n || 1073741824 & kl
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = ju()), (Sl.lanes |= e), (yu |= e), n);
  }
  function No(e, t, n, r) {
    return Kn(n, t)
      ? n
      : null !== yl.current
        ? ((e = To(e, n, r)), Kn(e, t) || (Ti = !0), e)
        : 42 & kl
          ? ((e = ju()), (Sl.lanes |= e), (yu |= e), t)
          : ((Ti = !0), (e.memoizedState = n));
  }
  function _o(e, t, n, r, a) {
    var l = _.p;
    _.p = 0 !== l && 8 > l ? l : 8;
    var o,
      i,
      s,
      u = N.T,
      c = {};
    ((N.T = c), Wo(e, !1, t, n));
    try {
      var d = a(),
        f = N.S;
      if (
        (null !== f && f(c, d), null !== d && 'object' == typeof d && 'function' == typeof d.then)
      )
        Ho(
          e,
          t,
          ((o = r),
          (i = []),
          (s = {
            status: 'pending',
            value: null,
            reason: null,
            then: function (e) {
              i.push(e);
            },
          }),
          d.then(
            function () {
              ((s.status = 'fulfilled'), (s.value = o));
              for (var e = 0; e < i.length; e++) (0, i[e])(o);
            },
            function (e) {
              for (s.status = 'rejected', s.reason = e, e = 0; e < i.length; e++) (0, i[e])(void 0);
            },
          ),
          s),
          Fu(),
        );
      else Ho(e, t, r, Fu());
    } catch (h) {
      Ho(e, t, { then: function () {}, status: 'rejected', reason: h }, Fu());
    } finally {
      ((_.p = l), (N.T = u));
    }
  }
  function Mo() {}
  function Do(e, t, n, a) {
    if (5 !== e.tag) throw Error(r(476));
    var l = Oo(e).queue;
    _o(
      e,
      l,
      t,
      M,
      null === n
        ? Mo
        : function () {
            return (Ao(e), n(a));
          },
    );
  }
  function Oo(e) {
    var t = e.memoizedState;
    if (null !== t) return t;
    var n = {};
    return (
      ((t = {
        memoizedState: M,
        baseState: M,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ql,
          lastRenderedState: M,
        },
        next: null,
      }).next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ql,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      null !== (e = e.alternate) && (e.memoizedState = t),
      t
    );
  }
  function Ao(e) {
    Ho(e, Oo(e).next.queue, {}, Fu());
  }
  function Fo() {
    return Pa(Xd);
  }
  function jo() {
    return ql().memoizedState;
  }
  function $o() {
    return ql().memoizedState;
  }
  function Io(e) {
    for (var t = e.return; null !== t; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Fu(),
            r = sl(t, (e = il(n)), n);
          return (
            null !== r && ($u(r, t, n), ul(r, t, n)),
            (t = { cache: Aa() }),
            void (e.payload = t)
          );
      }
      t = t.return;
    }
  }
  function Uo(e, t, n) {
    var r = Fu();
    ((n = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }),
      Bo(e) ? Qo(t, n) : null !== (n = Rr(e, t, n, r)) && ($u(n, e, r), Vo(n, t, r)));
  }
  function qo(e, t, n) {
    Ho(e, t, n, Fu());
  }
  function Ho(e, t, n, r) {
    var a = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Bo(e)) Qo(t, a);
    else {
      var l = e.alternate;
      if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer))
        try {
          var o = t.lastRenderedState,
            i = l(o, n);
          if (((a.hasEagerState = !0), (a.eagerState = i), Kn(i, o)))
            return (zr(e, t, a, 0), null === ou && Lr(), !1);
        } catch (s) {}
      if (null !== (n = Rr(e, t, a, r))) return ($u(n, e, r), Vo(n, t, r), !0);
    }
    return !1;
  }
  function Wo(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: _c(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Bo(e))
    ) {
      if (t) throw Error(r(479));
    } else null !== (t = Rr(e, n, a, 2)) && $u(t, e, 2);
  }
  function Bo(e) {
    var t = e.alternate;
    return e === Sl || (null !== t && t === Sl);
  }
  function Qo(e, t) {
    Pl = Cl = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Vo(e, t, n) {
    if (4194048 & n) {
      var r = t.lanes;
      ((n |= r &= e.pendingLanes), (t.lanes = n), Pe(e, n));
    }
  }
  var Ko = {
      readContext: Pa,
      use: Wl,
      useCallback: _l,
      useContext: _l,
      useEffect: _l,
      useImperativeHandle: _l,
      useLayoutEffect: _l,
      useInsertionEffect: _l,
      useMemo: _l,
      useReducer: _l,
      useRef: _l,
      useState: _l,
      useDebugValue: _l,
      useDeferredValue: _l,
      useTransition: _l,
      useSyncExternalStore: _l,
      useId: _l,
      useHostTransitionStatus: _l,
      useFormState: _l,
      useActionState: _l,
      useOptimistic: _l,
      useMemoCache: _l,
      useCacheRefresh: _l,
    },
    Yo = {
      readContext: Pa,
      use: Wl,
      useCallback: function (e, t) {
        return ((Ul().memoizedState = [e, void 0 === t ? null : t]), e);
      },
      useContext: Pa,
      useEffect: ko,
      useImperativeHandle: function (e, t, n) {
        ((n = null != n ? n.concat([e]) : null), bo(4194308, 4, Co.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return bo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        bo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ul();
        t = void 0 === t ? null : t;
        var r = e();
        if (Ll) {
          de(!0);
          try {
            e();
          } finally {
            de(!1);
          }
        }
        return ((n.memoizedState = [r, t]), r);
      },
      useReducer: function (e, t, n) {
        var r = Ul();
        if (void 0 !== n) {
          var a = n(t);
          if (Ll) {
            de(!0);
            try {
              n(t);
            } finally {
              de(!1);
            }
          }
        } else a = t;
        return (
          (r.memoizedState = r.baseState = a),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: a,
          }),
          (r.queue = e),
          (e = e.dispatch = Uo.bind(null, Sl, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        return ((e = { current: e }), (Ul().memoizedState = e));
      },
      useState: function (e) {
        var t = (e = no(e)).queue,
          n = qo.bind(null, Sl, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Lo,
      useDeferredValue: function (e, t) {
        return To(Ul(), e, t);
      },
      useTransition: function () {
        var e = no(!1);
        return ((e = _o.bind(null, Sl, e.queue, !0, !1)), (Ul().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, n) {
        var a = Sl,
          l = Ul();
        if (aa) {
          if (void 0 === n) throw Error(r(407));
          n = n();
        } else {
          if (((n = t()), null === ou)) throw Error(r(349));
          124 & su || Xl(a, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          ko(Zl.bind(null, a, o, e), [e]),
          (a.flags |= 2048),
          vo(9, { destroy: void 0, resource: void 0 }, Jl.bind(null, a, o, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Ul(),
          t = ou.identifierPrefix;
        if (aa) {
          var n = Xr;
          ((t = '«' + t + 'R' + (n = (Gr & ~(1 << (32 - fe(Gr) - 1))).toString(32) + n)),
            0 < (n = zl++) && (t += 'H' + n.toString(32)),
            (t += '»'));
        } else t = '«' + t + 'r' + (n = Nl++).toString(32) + '»';
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Fo,
      useFormState: fo,
      useActionState: fo,
      useOptimistic: function (e) {
        var t = Ul();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = n), (t = Wo.bind(null, Sl, !0, n)), (n.dispatch = t), [e, t]);
      },
      useMemoCache: Bl,
      useCacheRefresh: function () {
        return (Ul().memoizedState = Io.bind(null, Sl));
      },
    },
    Go = {
      readContext: Pa,
      use: Wl,
      useCallback: zo,
      useContext: Pa,
      useEffect: So,
      useImperativeHandle: Po,
      useInsertionEffect: xo,
      useLayoutEffect: Eo,
      useMemo: Ro,
      useReducer: Vl,
      useRef: go,
      useState: function () {
        return Vl(Ql);
      },
      useDebugValue: Lo,
      useDeferredValue: function (e, t) {
        return No(ql(), xl.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Vl(Ql)[0],
          t = ql().memoizedState;
        return ['boolean' == typeof e ? e : Hl(e), t];
      },
      useSyncExternalStore: Gl,
      useId: jo,
      useHostTransitionStatus: Fo,
      useFormState: ho,
      useActionState: ho,
      useOptimistic: function (e, t) {
        return ro(ql(), 0, e, t);
      },
      useMemoCache: Bl,
      useCacheRefresh: $o,
    },
    Xo = {
      readContext: Pa,
      use: Wl,
      useCallback: zo,
      useContext: Pa,
      useEffect: So,
      useImperativeHandle: Po,
      useInsertionEffect: xo,
      useLayoutEffect: Eo,
      useMemo: Ro,
      useReducer: Yl,
      useRef: go,
      useState: function () {
        return Yl(Ql);
      },
      useDebugValue: Lo,
      useDeferredValue: function (e, t) {
        var n = ql();
        return null === xl ? To(n, e, t) : No(n, xl.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Yl(Ql)[0],
          t = ql().memoizedState;
        return ['boolean' == typeof e ? e : Hl(e), t];
      },
      useSyncExternalStore: Gl,
      useId: jo,
      useHostTransitionStatus: Fo,
      useFormState: yo,
      useActionState: yo,
      useOptimistic: function (e, t) {
        var n = ql();
        return null !== xl ? ro(n, 0, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
      },
      useMemoCache: Bl,
      useCacheRefresh: $o,
    },
    Jo = null,
    Zo = 0;
  function ei(e) {
    var t = Zo;
    return ((Zo += 1), null === Jo && (Jo = []), el(Jo, e, t));
  }
  function ti(e, t) {
    ((t = t.props.ref), (e.ref = void 0 !== t ? t : null));
  }
  function ni(e, t) {
    if (t.$$typeof === c) throw Error(r(525));
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        r(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e),
      )
    );
  }
  function ri(e) {
    return (0, e._init)(e._payload);
  }
  function ai(e) {
    function t(t, n) {
      if (e) {
        var r = t.deletions;
        null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
      }
    }
    function n(n, r) {
      if (!e) return null;
      for (; null !== r; ) (t(n, r), (r = r.sibling));
      return null;
    }
    function a(e) {
      for (var t = new Map(); null !== e; )
        (null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling));
      return t;
    }
    function l(e, t) {
      return (((e = Fr(e, t)).index = 0), (e.sibling = null), e);
    }
    function o(t, n, r) {
      return (
        (t.index = r),
        e
          ? null !== (r = t.alternate)
            ? (r = r.index) < n
              ? ((t.flags |= 67108866), n)
              : r
            : ((t.flags |= 67108866), n)
          : ((t.flags |= 1048576), n)
      );
    }
    function i(t) {
      return (e && null === t.alternate && (t.flags |= 67108866), t);
    }
    function s(e, t, n, r) {
      return null === t || 6 !== t.tag
        ? (((t = Ur(n, e.mode, r)).return = e), t)
        : (((t = l(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
      var a = n.type;
      return a === h
        ? p(e, t, n.props.children, r, n.key)
        : null !== t &&
            (t.elementType === a ||
              ('object' == typeof a && null !== a && a.$$typeof === x && ri(a) === t.type))
          ? (ti((t = l(t, n.props)), n), (t.return = e), t)
          : (ti((t = $r(n.type, n.key, n.props, null, e.mode, r)), n), (t.return = e), t);
    }
    function c(e, t, n, r) {
      return null === t ||
        4 !== t.tag ||
        t.stateNode.containerInfo !== n.containerInfo ||
        t.stateNode.implementation !== n.implementation
        ? (((t = qr(n, e.mode, r)).return = e), t)
        : (((t = l(t, n.children || [])).return = e), t);
    }
    function p(e, t, n, r, a) {
      return null === t || 7 !== t.tag
        ? (((t = Ir(n, e.mode, r, a)).return = e), t)
        : (((t = l(t, n)).return = e), t);
    }
    function m(e, t, n) {
      if (('string' == typeof t && '' !== t) || 'number' == typeof t || 'bigint' == typeof t)
        return (((t = Ur('' + t, e.mode, n)).return = e), t);
      if ('object' == typeof t && null !== t) {
        switch (t.$$typeof) {
          case d:
            return (ti((n = $r(t.type, t.key, t.props, null, e.mode, n)), t), (n.return = e), n);
          case f:
            return (((t = qr(t, e.mode, n)).return = e), t);
          case x:
            return m(e, (t = (0, t._init)(t._payload)), n);
        }
        if (T(t) || L(t)) return (((t = Ir(t, e.mode, n, null)).return = e), t);
        if ('function' == typeof t.then) return m(e, ei(t), n);
        if (t.$$typeof === g) return m(e, La(e, t), n);
        ni(e, t);
      }
      return null;
    }
    function y(e, t, n, r) {
      var a = null !== t ? t.key : null;
      if (('string' == typeof n && '' !== n) || 'number' == typeof n || 'bigint' == typeof n)
        return null !== a ? null : s(e, t, '' + n, r);
      if ('object' == typeof n && null !== n) {
        switch (n.$$typeof) {
          case d:
            return n.key === a ? u(e, t, n, r) : null;
          case f:
            return n.key === a ? c(e, t, n, r) : null;
          case x:
            return y(e, t, (n = (a = n._init)(n._payload)), r);
        }
        if (T(n) || L(n)) return null !== a ? null : p(e, t, n, r, null);
        if ('function' == typeof n.then) return y(e, t, ei(n), r);
        if (n.$$typeof === g) return y(e, t, La(e, n), r);
        ni(e, n);
      }
      return null;
    }
    function v(e, t, n, r, a) {
      if (('string' == typeof r && '' !== r) || 'number' == typeof r || 'bigint' == typeof r)
        return s(t, (e = e.get(n) || null), '' + r, a);
      if ('object' == typeof r && null !== r) {
        switch (r.$$typeof) {
          case d:
            return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
          case f:
            return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
          case x:
            return v(e, t, n, (r = (0, r._init)(r._payload)), a);
        }
        if (T(r) || L(r)) return p(t, (e = e.get(n) || null), r, a, null);
        if ('function' == typeof r.then) return v(e, t, n, ei(r), a);
        if (r.$$typeof === g) return v(e, t, n, La(t, r), a);
        ni(t, r);
      }
      return null;
    }
    function b(s, u, c, p) {
      if (
        ('object' == typeof c &&
          null !== c &&
          c.type === h &&
          null === c.key &&
          (c = c.props.children),
        'object' == typeof c && null !== c)
      ) {
        switch (c.$$typeof) {
          case d:
            e: {
              for (var w = c.key; null !== u; ) {
                if (u.key === w) {
                  if ((w = c.type) === h) {
                    if (7 === u.tag) {
                      (n(s, u.sibling), ((p = l(u, c.props.children)).return = s), (s = p));
                      break e;
                    }
                  } else if (
                    u.elementType === w ||
                    ('object' == typeof w && null !== w && w.$$typeof === x && ri(w) === u.type)
                  ) {
                    (n(s, u.sibling), ti((p = l(u, c.props)), c), (p.return = s), (s = p));
                    break e;
                  }
                  n(s, u);
                  break;
                }
                (t(s, u), (u = u.sibling));
              }
              c.type === h
                ? (((p = Ir(c.props.children, s.mode, p, c.key)).return = s), (s = p))
                : (ti((p = $r(c.type, c.key, c.props, null, s.mode, p)), c),
                  (p.return = s),
                  (s = p));
            }
            return i(s);
          case f:
            e: {
              for (w = c.key; null !== u; ) {
                if (u.key === w) {
                  if (
                    4 === u.tag &&
                    u.stateNode.containerInfo === c.containerInfo &&
                    u.stateNode.implementation === c.implementation
                  ) {
                    (n(s, u.sibling), ((p = l(u, c.children || [])).return = s), (s = p));
                    break e;
                  }
                  n(s, u);
                  break;
                }
                (t(s, u), (u = u.sibling));
              }
              (((p = qr(c, s.mode, p)).return = s), (s = p));
            }
            return i(s);
          case x:
            return b(s, u, (c = (w = c._init)(c._payload)), p);
        }
        if (T(c))
          return (function (r, l, i, s) {
            for (
              var u = null, c = null, d = l, f = (l = 0), h = null;
              null !== d && f < i.length;
              f++
            ) {
              d.index > f ? ((h = d), (d = null)) : (h = d.sibling);
              var p = y(r, d, i[f], s);
              if (null === p) {
                null === d && (d = h);
                break;
              }
              (e && d && null === p.alternate && t(r, d),
                (l = o(p, l, f)),
                null === c ? (u = p) : (c.sibling = p),
                (c = p),
                (d = h));
            }
            if (f === i.length) return (n(r, d), aa && Jr(r, f), u);
            if (null === d) {
              for (; f < i.length; f++)
                null !== (d = m(r, i[f], s)) &&
                  ((l = o(d, l, f)), null === c ? (u = d) : (c.sibling = d), (c = d));
              return (aa && Jr(r, f), u);
            }
            for (d = a(d); f < i.length; f++)
              null !== (h = v(d, r, f, i[f], s)) &&
                (e && null !== h.alternate && d.delete(null === h.key ? f : h.key),
                (l = o(h, l, f)),
                null === c ? (u = h) : (c.sibling = h),
                (c = h));
            return (
              e &&
                d.forEach(function (e) {
                  return t(r, e);
                }),
              aa && Jr(r, f),
              u
            );
          })(s, u, c, p);
        if (L(c)) {
          if ('function' != typeof (w = L(c))) throw Error(r(150));
          return (function (l, i, s, u) {
            if (null == s) throw Error(r(151));
            for (
              var c = null, d = null, f = i, h = (i = 0), p = null, g = s.next();
              null !== f && !g.done;
              h++, g = s.next()
            ) {
              f.index > h ? ((p = f), (f = null)) : (p = f.sibling);
              var b = y(l, f, g.value, u);
              if (null === b) {
                null === f && (f = p);
                break;
              }
              (e && f && null === b.alternate && t(l, f),
                (i = o(b, i, h)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (f = p));
            }
            if (g.done) return (n(l, f), aa && Jr(l, h), c);
            if (null === f) {
              for (; !g.done; h++, g = s.next())
                null !== (g = m(l, g.value, u)) &&
                  ((i = o(g, i, h)), null === d ? (c = g) : (d.sibling = g), (d = g));
              return (aa && Jr(l, h), c);
            }
            for (f = a(f); !g.done; h++, g = s.next())
              null !== (g = v(f, l, h, g.value, u)) &&
                (e && null !== g.alternate && f.delete(null === g.key ? h : g.key),
                (i = o(g, i, h)),
                null === d ? (c = g) : (d.sibling = g),
                (d = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(l, e);
                }),
              aa && Jr(l, h),
              c
            );
          })(s, u, (c = w.call(c)), p);
        }
        if ('function' == typeof c.then) return b(s, u, ei(c), p);
        if (c.$$typeof === g) return b(s, u, La(s, c), p);
        ni(s, c);
      }
      return ('string' == typeof c && '' !== c) || 'number' == typeof c || 'bigint' == typeof c
        ? ((c = '' + c),
          null !== u && 6 === u.tag
            ? (n(s, u.sibling), ((p = l(u, c)).return = s), (s = p))
            : (n(s, u), ((p = Ur(c, s.mode, p)).return = s), (s = p)),
          i(s))
        : n(s, u);
    }
    return function (e, t, n, r) {
      try {
        Zo = 0;
        var a = b(e, t, n, r);
        return ((Jo = null), a);
      } catch (o) {
        if (o === Ka || o === Ga) throw o;
        var l = Or(29, o, null, e.mode);
        return ((l.lanes = r), (l.return = e), l);
      }
    };
  }
  var li = ai(!0),
    oi = ai(!1),
    ii = A(null),
    si = null;
  function ui(e) {
    var t = e.alternate;
    (j(hi, 1 & hi.current),
      j(ii, e),
      null === si && (null === t || null !== yl.current || null !== t.memoizedState) && (si = e));
  }
  function ci(e) {
    if (22 === e.tag) {
      if ((j(hi, hi.current), j(ii, e), null === si)) {
        var t = e.alternate;
        null !== t && null !== t.memoizedState && (si = e);
      }
    } else di();
  }
  function di() {
    (j(hi, hi.current), j(ii, ii.current));
  }
  function fi(e) {
    (F(ii), si === e && (si = null), F(hi));
  }
  var hi = A(0);
  function pi(e) {
    for (var t = e; null !== t; ) {
      if (13 === t.tag) {
        var n = t.memoizedState;
        if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || bd(n))) return t;
      } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
        if (128 & t.flags) return t;
      } else if (null !== t.child) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; null === t.sibling; ) {
        if (null === t.return || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  function mi(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : u({}, t, n)),
      (e.memoizedState = n),
      0 === e.lanes && (e.updateQueue.baseState = n));
  }
  var yi = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Fu(),
        a = il(r);
      ((a.payload = t),
        null != n && (a.callback = n),
        null !== (t = sl(e, a, r)) && ($u(t, e, r), ul(t, e, r)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Fu(),
        a = il(r);
      ((a.tag = 1),
        (a.payload = t),
        null != n && (a.callback = n),
        null !== (t = sl(e, a, r)) && ($u(t, e, r), ul(t, e, r)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Fu(),
        r = il(n);
      ((r.tag = 2),
        null != t && (r.callback = t),
        null !== (t = sl(e, r, n)) && ($u(t, e, n), ul(t, e, n)));
    },
  };
  function vi(e, t, n, r, a, l, o) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
      ? e.shouldComponentUpdate(r, l, o)
      : !t.prototype || !t.prototype.isPureReactComponent || !Yn(n, r) || !Yn(a, l);
  }
  function gi(e, t, n, r) {
    ((e = t.state),
      'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
      'function' == typeof t.UNSAFE_componentWillReceiveProps &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && yi.enqueueReplaceState(t, t.state, null));
  }
  function bi(e, t) {
    var n = t;
    if ('ref' in t) for (var r in ((n = {}), t)) 'ref' !== r && (n[r] = t[r]);
    if ((e = e.defaultProps))
      for (var a in (n === t && (n = u({}, n)), e)) void 0 === n[a] && (n[a] = e[a]);
    return n;
  }
  var wi =
    'function' == typeof reportError
      ? reportError
      : function (e) {
          if ('object' == typeof window && 'function' == typeof window.ErrorEvent) {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                'object' == typeof e && null !== e && 'string' == typeof e.message
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if ('object' == typeof process && 'function' == typeof process.emit)
            return void process.emit('uncaughtException', e);
        };
  function ki(e) {
    wi(e);
  }
  function Si(e) {}
  function xi(e) {
    wi(e);
  }
  function Ei(e, t) {
    try {
      (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Ci(e, t, n) {
    try {
      (0, e.onCaughtError)(n.value, {
        componentStack: n.stack,
        errorBoundary: 1 === t.tag ? t.stateNode : null,
      });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function Pi(e, t, n) {
    return (
      ((n = il(n)).tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Ei(e, t);
      }),
      n
    );
  }
  function Li(e) {
    return (((e = il(e)).tag = 3), e);
  }
  function zi(e, t, n, r) {
    var a = n.type.getDerivedStateFromError;
    if ('function' == typeof a) {
      var l = r.value;
      ((e.payload = function () {
        return a(l);
      }),
        (e.callback = function () {
          Ci(t, n, r);
        }));
    }
    var o = n.stateNode;
    null !== o &&
      'function' == typeof o.componentDidCatch &&
      (e.callback = function () {
        (Ci(t, n, r),
          'function' != typeof a && (null === Lu ? (Lu = new Set([this])) : Lu.add(this)));
        var e = r.stack;
        this.componentDidCatch(r.value, { componentStack: null !== e ? e : '' });
      });
  }
  var Ri = Error(r(461)),
    Ti = !1;
  function Ni(e, t, n, r) {
    t.child = null === e ? oi(t, null, n, r) : li(t, e.child, n, r);
  }
  function _i(e, t, n, r, a) {
    n = n.render;
    var l = t.ref;
    if ('ref' in r) {
      var o = {};
      for (var i in r) 'ref' !== i && (o[i] = r[i]);
    } else o = r;
    return (
      Ea(t),
      (r = Dl(e, t, n, o, l, a)),
      (i = jl()),
      null === e || Ti
        ? (aa && i && ea(t), (t.flags |= 1), Ni(e, t, r, a), t.child)
        : ($l(e, t, a), Ji(e, t, a))
    );
  }
  function Mi(e, t, n, r, a) {
    if (null === e) {
      var l = n.type;
      return 'function' != typeof l || Ar(l) || void 0 !== l.defaultProps || null !== n.compare
        ? (((e = $r(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
        : ((t.tag = 15), (t.type = l), Di(e, t, l, r, a));
    }
    if (((l = e.child), !Zi(e, a))) {
      var o = l.memoizedProps;
      if ((n = null !== (n = n.compare) ? n : Yn)(o, r) && e.ref === t.ref) return Ji(e, t, a);
    }
    return ((t.flags |= 1), ((e = Fr(l, r)).ref = t.ref), (e.return = t), (t.child = e));
  }
  function Di(e, t, n, r, a) {
    if (null !== e) {
      var l = e.memoizedProps;
      if (Yn(l, r) && e.ref === t.ref) {
        if (((Ti = !1), (t.pendingProps = r = l), !Zi(e, a)))
          return ((t.lanes = e.lanes), Ji(e, t, a));
        131072 & e.flags && (Ti = !0);
      }
    }
    return ji(e, t, n, r, a);
  }
  function Oi(e, t, n) {
    var r = t.pendingProps,
      a = r.children,
      l = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode) {
      if (128 & t.flags) {
        if (((r = null !== l ? l.baseLanes | n : n), null !== e)) {
          for (a = t.child = e.child, l = 0; null !== a; )
            ((l = l | a.lanes | a.childLanes), (a = a.sibling));
          t.childLanes = l & ~r;
        } else ((t.childLanes = 0), (t.child = null));
        return Ai(e, t, r, n);
      }
      if (!(536870912 & n))
        return (
          (t.lanes = t.childLanes = 536870912),
          Ai(e, t, null !== l ? l.baseLanes | n : n, n)
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null }),
        null !== e && Qa(0, null !== l ? l.cachePool : null),
        null !== l ? gl(t, l) : bl(),
        ci(t));
    } else
      null !== l
        ? (Qa(0, l.cachePool), gl(t, l), di(), (t.memoizedState = null))
        : (null !== e && Qa(0, null), bl(), di());
    return (Ni(e, t, a, n), t.child);
  }
  function Ai(e, t, n, r) {
    var a = Ba();
    return (
      (a = null === a ? null : { parent: Oa._currentValue, pool: a }),
      (t.memoizedState = { baseLanes: n, cachePool: a }),
      null !== e && Qa(0, null),
      bl(),
      ci(t),
      null !== e && Sa(e, t, r, !0),
      null
    );
  }
  function Fi(e, t) {
    var n = t.ref;
    if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
    else {
      if ('function' != typeof n && 'object' != typeof n) throw Error(r(284));
      (null !== e && e.ref === n) || (t.flags |= 4194816);
    }
  }
  function ji(e, t, n, r, a) {
    return (
      Ea(t),
      (n = Dl(e, t, n, r, void 0, a)),
      (r = jl()),
      null === e || Ti
        ? (aa && r && ea(t), (t.flags |= 1), Ni(e, t, n, a), t.child)
        : ($l(e, t, a), Ji(e, t, a))
    );
  }
  function $i(e, t, n, r, a, l) {
    return (
      Ea(t),
      (t.updateQueue = null),
      (n = Al(t, r, n, a)),
      Ol(e),
      (r = jl()),
      null === e || Ti
        ? (aa && r && ea(t), (t.flags |= 1), Ni(e, t, n, l), t.child)
        : ($l(e, t, l), Ji(e, t, l))
    );
  }
  function Ii(e, t, n, r, a) {
    if ((Ea(t), null === t.stateNode)) {
      var l = Mr,
        o = n.contextType;
      ('object' == typeof o && null !== o && (l = Pa(o)),
        (l = new n(r, l)),
        (t.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null),
        (l.updater = yi),
        (t.stateNode = l),
        (l._reactInternals = t),
        ((l = t.stateNode).props = r),
        (l.state = t.memoizedState),
        (l.refs = {}),
        ll(t),
        (o = n.contextType),
        (l.context = 'object' == typeof o && null !== o ? Pa(o) : Mr),
        (l.state = t.memoizedState),
        'function' == typeof (o = n.getDerivedStateFromProps) &&
          (mi(t, n, o, r), (l.state = t.memoizedState)),
        'function' == typeof n.getDerivedStateFromProps ||
          'function' == typeof l.getSnapshotBeforeUpdate ||
          ('function' != typeof l.UNSAFE_componentWillMount &&
            'function' != typeof l.componentWillMount) ||
          ((o = l.state),
          'function' == typeof l.componentWillMount && l.componentWillMount(),
          'function' == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(),
          o !== l.state && yi.enqueueReplaceState(l, l.state, null),
          hl(t, r, l, a),
          fl(),
          (l.state = t.memoizedState)),
        'function' == typeof l.componentDidMount && (t.flags |= 4194308),
        (r = !0));
    } else if (null === e) {
      l = t.stateNode;
      var i = t.memoizedProps,
        s = bi(n, i);
      l.props = s;
      var u = l.context,
        c = n.contextType;
      ((o = Mr), 'object' == typeof c && null !== c && (o = Pa(c)));
      var d = n.getDerivedStateFromProps;
      ((c = 'function' == typeof d || 'function' == typeof l.getSnapshotBeforeUpdate),
        (i = t.pendingProps !== i),
        c ||
          ('function' != typeof l.UNSAFE_componentWillReceiveProps &&
            'function' != typeof l.componentWillReceiveProps) ||
          ((i || u !== o) && gi(t, l, r, o)),
        (al = !1));
      var f = t.memoizedState;
      ((l.state = f),
        hl(t, r, l, a),
        fl(),
        (u = t.memoizedState),
        i || f !== u || al
          ? ('function' == typeof d && (mi(t, n, d, r), (u = t.memoizedState)),
            (s = al || vi(t, n, s, r, f, u, o))
              ? (c ||
                  ('function' != typeof l.UNSAFE_componentWillMount &&
                    'function' != typeof l.componentWillMount) ||
                  ('function' == typeof l.componentWillMount && l.componentWillMount(),
                  'function' == typeof l.UNSAFE_componentWillMount &&
                    l.UNSAFE_componentWillMount()),
                'function' == typeof l.componentDidMount && (t.flags |= 4194308))
              : ('function' == typeof l.componentDidMount && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = u)),
            (l.props = r),
            (l.state = u),
            (l.context = o),
            (r = s))
          : ('function' == typeof l.componentDidMount && (t.flags |= 4194308), (r = !1)));
    } else {
      ((l = t.stateNode),
        ol(e, t),
        (c = bi(n, (o = t.memoizedProps))),
        (l.props = c),
        (d = t.pendingProps),
        (f = l.context),
        (u = n.contextType),
        (s = Mr),
        'object' == typeof u && null !== u && (s = Pa(u)),
        (u =
          'function' == typeof (i = n.getDerivedStateFromProps) ||
          'function' == typeof l.getSnapshotBeforeUpdate) ||
          ('function' != typeof l.UNSAFE_componentWillReceiveProps &&
            'function' != typeof l.componentWillReceiveProps) ||
          ((o !== d || f !== s) && gi(t, l, r, s)),
        (al = !1),
        (f = t.memoizedState),
        (l.state = f),
        hl(t, r, l, a),
        fl());
      var h = t.memoizedState;
      o !== d || f !== h || al || (null !== e && null !== e.dependencies && xa(e.dependencies))
        ? ('function' == typeof i && (mi(t, n, i, r), (h = t.memoizedState)),
          (c =
            al ||
            vi(t, n, c, r, f, h, s) ||
            (null !== e && null !== e.dependencies && xa(e.dependencies)))
            ? (u ||
                ('function' != typeof l.UNSAFE_componentWillUpdate &&
                  'function' != typeof l.componentWillUpdate) ||
                ('function' == typeof l.componentWillUpdate && l.componentWillUpdate(r, h, s),
                'function' == typeof l.UNSAFE_componentWillUpdate &&
                  l.UNSAFE_componentWillUpdate(r, h, s)),
              'function' == typeof l.componentDidUpdate && (t.flags |= 4),
              'function' == typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024))
            : ('function' != typeof l.componentDidUpdate ||
                (o === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              'function' != typeof l.getSnapshotBeforeUpdate ||
                (o === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = h)),
          (l.props = r),
          (l.state = h),
          (l.context = s),
          (r = c))
        : ('function' != typeof l.componentDidUpdate ||
            (o === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 4),
          'function' != typeof l.getSnapshotBeforeUpdate ||
            (o === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return (
      (l = r),
      Fi(e, t),
      (r = !!(128 & t.flags)),
      l || r
        ? ((l = t.stateNode),
          (n = r && 'function' != typeof n.getDerivedStateFromError ? null : l.render()),
          (t.flags |= 1),
          null !== e && r
            ? ((t.child = li(t, e.child, null, a)), (t.child = li(t, null, n, a)))
            : Ni(e, t, n, a),
          (t.memoizedState = l.state),
          (e = t.child))
        : (e = Ji(e, t, a)),
      e
    );
  }
  function Ui(e, t, n, r) {
    return (fa(), (t.flags |= 256), Ni(e, t, n, r), t.child);
  }
  var qi = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Hi(e) {
    return { baseLanes: e, cachePool: Va() };
  }
  function Wi(e, t, n) {
    return ((e = null !== e ? e.childLanes & ~n : 0), t && (e |= bu), e);
  }
  function Bi(e, t, n) {
    var a,
      l = t.pendingProps,
      o = !1,
      i = !!(128 & t.flags);
    if (
      ((a = i) || (a = (null === e || null !== e.memoizedState) && !!(2 & hi.current)),
      a && ((o = !0), (t.flags &= -129)),
      (a = !!(32 & t.flags)),
      (t.flags &= -33),
      null === e)
    ) {
      if (aa) {
        if ((o ? ui(t) : di(), aa)) {
          var s,
            u = ra;
          if ((s = u)) {
            e: {
              for (s = u, u = oa; 8 !== s.nodeType; ) {
                if (!u) {
                  u = null;
                  break e;
                }
                if (null === (s = wd(s.nextSibling))) {
                  u = null;
                  break e;
                }
              }
              u = s;
            }
            null !== u
              ? ((t.memoizedState = {
                  dehydrated: u,
                  treeContext: null !== Yr ? { id: Gr, overflow: Xr } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                ((s = Or(18, null, null, 0)).stateNode = u),
                (s.return = t),
                (t.child = s),
                (na = t),
                (ra = null),
                (s = !0))
              : (s = !1);
          }
          s || sa(t);
        }
        if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated))
          return (bd(u) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        fi(t);
      }
      return (
        (u = l.children),
        (l = l.fallback),
        o
          ? (di(),
            (u = Vi({ mode: 'hidden', children: u }, (o = t.mode))),
            (l = Ir(l, o, n, null)),
            (u.return = t),
            (l.return = t),
            (u.sibling = l),
            (t.child = u),
            ((o = t.child).memoizedState = Hi(n)),
            (o.childLanes = Wi(e, a, n)),
            (t.memoizedState = qi),
            l)
          : (ui(t), Qi(t, u))
      );
    }
    if (null !== (s = e.memoizedState) && null !== (u = s.dehydrated)) {
      if (i)
        256 & t.flags
          ? (ui(t), (t.flags &= -257), (t = Ki(e, t, n)))
          : null !== t.memoizedState
            ? (di(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (di(),
              (o = l.fallback),
              (u = t.mode),
              (l = Vi({ mode: 'visible', children: l.children }, u)),
              ((o = Ir(o, u, n, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (l.sibling = o),
              (t.child = l),
              li(t, e.child, null, n),
              ((l = t.child).memoizedState = Hi(n)),
              (l.childLanes = Wi(e, a, n)),
              (t.memoizedState = qi),
              (t = o));
      else if ((ui(t), bd(u))) {
        if ((a = u.nextSibling && u.nextSibling.dataset)) var c = a.dgst;
        ((a = c),
          ((l = Error(r(419))).stack = ''),
          (l.digest = a),
          pa({ value: l, source: null, stack: null }),
          (t = Ki(e, t, n)));
      } else if ((Ti || Sa(e, t, n, !1), (a = 0 !== (n & e.childLanes)), Ti || a)) {
        if (
          null !== (a = ou) &&
          0 !==
            (l = 0 !== ((l = 42 & (l = n & -n) ? 1 : Le(l)) & (a.suspendedLanes | n)) ? 0 : l) &&
          l !== s.retryLane
        )
          throw ((s.retryLane = l), Tr(e, l), $u(a, e, l), Ri);
        ('$?' === u.data || Gu(), (t = Ki(e, t, n)));
      } else
        '$?' === u.data
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = s.treeContext),
            (ra = wd(u.nextSibling)),
            (na = t),
            (aa = !0),
            (la = null),
            (oa = !1),
            null !== e &&
              ((Vr[Kr++] = Gr),
              (Vr[Kr++] = Xr),
              (Vr[Kr++] = Yr),
              (Gr = e.id),
              (Xr = e.overflow),
              (Yr = t)),
            ((t = Qi(t, l.children)).flags |= 4096));
      return t;
    }
    return o
      ? (di(),
        (o = l.fallback),
        (u = t.mode),
        (c = (s = e.child).sibling),
        ((l = Fr(s, { mode: 'hidden', children: l.children })).subtreeFlags =
          65011712 & s.subtreeFlags),
        null !== c ? (o = Fr(c, o)) : ((o = Ir(o, u, n, null)).flags |= 2),
        (o.return = t),
        (l.return = t),
        (l.sibling = o),
        (t.child = l),
        (l = o),
        (o = t.child),
        null === (u = e.child.memoizedState)
          ? (u = Hi(n))
          : (null !== (s = u.cachePool)
              ? ((c = Oa._currentValue), (s = s.parent !== c ? { parent: c, pool: c } : s))
              : (s = Va()),
            (u = { baseLanes: u.baseLanes | n, cachePool: s })),
        (o.memoizedState = u),
        (o.childLanes = Wi(e, a, n)),
        (t.memoizedState = qi),
        l)
      : (ui(t),
        (e = (n = e.child).sibling),
        ((n = Fr(n, { mode: 'visible', children: l.children })).return = t),
        (n.sibling = null),
        null !== e &&
          (null === (a = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : a.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Qi(e, t) {
    return (((t = Vi({ mode: 'visible', children: t }, e.mode)).return = e), (e.child = t));
  }
  function Vi(e, t) {
    return (
      ((e = Or(22, e, null, t)).lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Ki(e, t, n) {
    return (
      li(t, e.child, null, n),
      ((e = Qi(t, t.pendingProps.children)).flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Yi(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (null !== r && (r.lanes |= t), wa(e.return, t, n));
  }
  function Gi(e, t, n, r, a) {
    var l = e.memoizedState;
    null === l
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: a,
        })
      : ((l.isBackwards = t),
        (l.rendering = null),
        (l.renderingStartTime = 0),
        (l.last = r),
        (l.tail = n),
        (l.tailMode = a));
  }
  function Xi(e, t, n) {
    var r = t.pendingProps,
      a = r.revealOrder,
      l = r.tail;
    if ((Ni(e, t, r.children, n), 2 & (r = hi.current))) ((r = (1 & r) | 2), (t.flags |= 128));
    else {
      if (null !== e && 128 & e.flags)
        e: for (e = t.child; null !== e; ) {
          if (13 === e.tag) null !== e.memoizedState && Yi(e, n, t);
          else if (19 === e.tag) Yi(e, n, t);
          else if (null !== e.child) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; null === e.sibling; ) {
            if (null === e.return || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    switch ((j(hi, r), a)) {
      case 'forwards':
        for (n = t.child, a = null; null !== n; )
          (null !== (e = n.alternate) && null === pi(e) && (a = n), (n = n.sibling));
        (null === (n = a)
          ? ((a = t.child), (t.child = null))
          : ((a = n.sibling), (n.sibling = null)),
          Gi(t, !1, a, n, l));
        break;
      case 'backwards':
        for (n = null, a = t.child, t.child = null; null !== a; ) {
          if (null !== (e = a.alternate) && null === pi(e)) {
            t.child = a;
            break;
          }
          ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
        }
        Gi(t, !0, n, null, l);
        break;
      case 'together':
        Gi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ji(e, t, n) {
    if (
      (null !== e && (t.dependencies = e.dependencies), (yu |= t.lanes), 0 === (n & t.childLanes))
    ) {
      if (null === e) return null;
      if ((Sa(e, t, n, !1), 0 === (n & t.childLanes))) return null;
    }
    if (null !== e && t.child !== e.child) throw Error(r(153));
    if (null !== t.child) {
      for (n = Fr((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
        ((e = e.sibling), ((n = n.sibling = Fr(e, e.pendingProps)).return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Zi(e, t) {
    return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !xa(e));
  }
  function es(e, t, n) {
    if (null !== e)
      if (e.memoizedProps !== t.pendingProps) Ti = !0;
      else {
        if (!(Zi(e, n) || 128 & t.flags))
          return (
            (Ti = !1),
            (function (e, t, n) {
              switch (t.tag) {
                case 3:
                  (H(t, t.stateNode.containerInfo), ga(0, Oa, e.memoizedState.cache), fa());
                  break;
                case 27:
                case 5:
                  B(t);
                  break;
                case 4:
                  H(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  ga(0, t.type, t.memoizedProps.value);
                  break;
                case 13:
                  var r = t.memoizedState;
                  if (null !== r)
                    return null !== r.dehydrated
                      ? (ui(t), (t.flags |= 128), null)
                      : 0 !== (n & t.child.childLanes)
                        ? Bi(e, t, n)
                        : (ui(t), null !== (e = Ji(e, t, n)) ? e.sibling : null);
                  ui(t);
                  break;
                case 19:
                  var a = !!(128 & e.flags);
                  if (
                    ((r = 0 !== (n & t.childLanes)) ||
                      (Sa(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                    a)
                  ) {
                    if (r) return Xi(e, t, n);
                    t.flags |= 128;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                    j(hi, hi.current),
                    r)
                  )
                    break;
                  return null;
                case 22:
                case 23:
                  return ((t.lanes = 0), Oi(e, t, n));
                case 24:
                  ga(0, Oa, e.memoizedState.cache);
              }
              return Ji(e, t, n);
            })(e, t, n)
          );
        Ti = !!(131072 & e.flags);
      }
    else ((Ti = !1), aa && 1048576 & t.flags && Zr(t, Qr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            l = a._init;
          if (((a = l(a._payload)), (t.type = a), 'function' != typeof a)) {
            if (null != a) {
              if ((l = a.$$typeof) === b) {
                ((t.tag = 11), (t = _i(null, t, a, e, n)));
                break e;
              }
              if (l === S) {
                ((t.tag = 14), (t = Mi(null, t, a, e, n)));
                break e;
              }
            }
            throw ((t = R(a) || a), Error(r(306, t, '')));
          }
          Ar(a)
            ? ((e = bi(a, e)), (t.tag = 1), (t = Ii(null, t, a, e, n)))
            : ((t.tag = 0), (t = ji(null, t, a, e, n)));
        }
        return t;
      case 0:
        return ji(e, t, t.type, t.pendingProps, n);
      case 1:
        return Ii(e, t, (a = t.type), (l = bi(a, t.pendingProps)), n);
      case 3:
        e: {
          if ((H(t, t.stateNode.containerInfo), null === e)) throw Error(r(387));
          a = t.pendingProps;
          var o = t.memoizedState;
          ((l = o.element), ol(e, t), hl(t, a, null, n));
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            ga(0, Oa, a),
            a !== o.cache && ka(t, [Oa], n, !0),
            fl(),
            (a = i.element),
            o.isDehydrated)
          ) {
            if (
              ((o = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              256 & t.flags)
            ) {
              t = Ui(e, t, a, n);
              break e;
            }
            if (a !== l) {
              (pa((l = xr(Error(r(424)), t))), (t = Ui(e, t, a, n)));
              break e;
            }
            if (9 === (e = t.stateNode.containerInfo).nodeType) e = e.body;
            else e = 'HTML' === e.nodeName ? e.ownerDocument.body : e;
            for (
              ra = wd(e.firstChild),
                na = t,
                aa = !0,
                la = null,
                oa = !0,
                n = oi(t, null, a, n),
                t.child = n;
              n;

            )
              ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
          } else {
            if ((fa(), a === l)) {
              t = Ji(e, t, n);
              break e;
            }
            Ni(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Fi(e, t),
          null === e
            ? (n = Nd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : aa ||
                ((n = t.type),
                (e = t.pendingProps),
                ((a = od(U.current).createElement(n))[Ne] = t),
                (a[_e] = e),
                rd(a, n, e),
                We(a),
                (t.stateNode = a))
            : (t.memoizedState = Nd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          B(t),
          null === e &&
            aa &&
            ((a = t.stateNode = xd(t.type, t.pendingProps, U.current)),
            (na = t),
            (oa = !0),
            (l = ra),
            yd(t.type) ? ((kd = l), (ra = wd(a.firstChild))) : (ra = l)),
          Ni(e, t, t.pendingProps.children, n),
          Fi(e, t),
          null === e && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          null === e &&
            aa &&
            ((l = a = ra) &&
              (null !==
              (a = (function (e, t, n, r) {
                for (; 1 === e.nodeType; ) {
                  var a = n;
                  if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!r && ('INPUT' !== e.nodeName || 'hidden' !== e.type)) break;
                  } else if (r) {
                    if (!e[je])
                      switch (t) {
                        case 'meta':
                          if (!e.hasAttribute('itemprop')) break;
                          return e;
                        case 'link':
                          if (
                            'stylesheet' === (l = e.getAttribute('rel')) &&
                            e.hasAttribute('data-precedence')
                          )
                            break;
                          if (
                            l !== a.rel ||
                            e.getAttribute('href') !==
                              (null == a.href || '' === a.href ? null : a.href) ||
                            e.getAttribute('crossorigin') !==
                              (null == a.crossOrigin ? null : a.crossOrigin) ||
                            e.getAttribute('title') !== (null == a.title ? null : a.title)
                          )
                            break;
                          return e;
                        case 'style':
                          if (e.hasAttribute('data-precedence')) break;
                          return e;
                        case 'script':
                          if (
                            ((l = e.getAttribute('src')) !== (null == a.src ? null : a.src) ||
                              e.getAttribute('type') !== (null == a.type ? null : a.type) ||
                              e.getAttribute('crossorigin') !==
                                (null == a.crossOrigin ? null : a.crossOrigin)) &&
                            l &&
                            e.hasAttribute('async') &&
                            !e.hasAttribute('itemprop')
                          )
                            break;
                          return e;
                        default:
                          return e;
                      }
                  } else {
                    if ('input' !== t || 'hidden' !== e.type) return e;
                    var l = null == a.name ? null : '' + a.name;
                    if ('hidden' === a.type && e.getAttribute('name') === l) return e;
                  }
                  if (null === (e = wd(e.nextSibling))) break;
                }
                return null;
              })(a, t.type, t.pendingProps, oa))
                ? ((t.stateNode = a), (na = t), (ra = wd(a.firstChild)), (oa = !1), (l = !0))
                : (l = !1)),
            l || sa(t)),
          B(t),
          (l = t.type),
          (o = t.pendingProps),
          (i = null !== e ? e.memoizedProps : null),
          (a = o.children),
          ud(l, o) ? (a = null) : null !== i && ud(l, i) && (t.flags |= 32),
          null !== t.memoizedState && ((l = Dl(e, t, Fl, null, null, n)), (Xd._currentValue = l)),
          Fi(e, t),
          Ni(e, t, a, n),
          t.child
        );
      case 6:
        return (
          null === e &&
            aa &&
            ((e = n = ra) &&
              (null !==
              (n = (function (e, t, n) {
                if ('' === t) return null;
                for (; 3 !== e.nodeType; ) {
                  if ((1 !== e.nodeType || 'INPUT' !== e.nodeName || 'hidden' !== e.type) && !n)
                    return null;
                  if (null === (e = wd(e.nextSibling))) return null;
                }
                return e;
              })(n, t.pendingProps, oa))
                ? ((t.stateNode = n), (na = t), (ra = null), (e = !0))
                : (e = !1)),
            e || sa(t)),
          null
        );
      case 13:
        return Bi(e, t, n);
      case 4:
        return (
          H(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          null === e ? (t.child = li(t, null, a, n)) : Ni(e, t, a, n),
          t.child
        );
      case 11:
        return _i(e, t, t.type, t.pendingProps, n);
      case 7:
        return (Ni(e, t, t.pendingProps, n), t.child);
      case 8:
      case 12:
        return (Ni(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return ((a = t.pendingProps), ga(0, t.type, a.value), Ni(e, t, a.children, n), t.child);
      case 9:
        return (
          (l = t.type._context),
          (a = t.pendingProps.children),
          Ea(t),
          (a = a((l = Pa(l)))),
          (t.flags |= 1),
          Ni(e, t, a, n),
          t.child
        );
      case 14:
        return Mi(e, t, t.type, t.pendingProps, n);
      case 15:
        return Di(e, t, t.type, t.pendingProps, n);
      case 19:
        return Xi(e, t, n);
      case 31:
        return (
          (a = t.pendingProps),
          (n = t.mode),
          (a = { mode: a.mode, children: a.children }),
          null === e
            ? (((n = Vi(a, n)).ref = t.ref), (t.child = n), (n.return = t), (t = n))
            : (((n = Fr(e.child, a)).ref = t.ref), (t.child = n), (n.return = t), (t = n)),
          t
        );
      case 22:
        return Oi(e, t, n);
      case 24:
        return (
          Ea(t),
          (a = Pa(Oa)),
          null === e
            ? (null === (l = Ba()) &&
                ((l = ou),
                (o = Aa()),
                (l.pooledCache = o),
                o.refCount++,
                null !== o && (l.pooledCacheLanes |= n),
                (l = o)),
              (t.memoizedState = { parent: a, cache: l }),
              ll(t),
              ga(0, Oa, l))
            : (0 !== (e.lanes & n) && (ol(e, t), hl(t, null, null, n), fl()),
              (l = e.memoizedState),
              (o = t.memoizedState),
              l.parent !== a
                ? ((l = { parent: a, cache: a }),
                  (t.memoizedState = l),
                  0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = l),
                  ga(0, Oa, a))
                : ((a = o.cache), ga(0, Oa, a), a !== l.cache && ka(t, [Oa], n, !0))),
          Ni(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function ts(e) {
    e.flags |= 4;
  }
  function ns(e, t) {
    if ('stylesheet' !== t.type || 4 & t.state.loading) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Wd(t))) {
      if (
        null !== (t = ii.current) &&
        ((4194048 & su) === su
          ? null !== si
          : ((62914560 & su) !== su && !(536870912 & su)) || t !== si)
      )
        throw ((tl = Xa), Ya);
      e.flags |= 8192;
    }
  }
  function rs(e, t) {
    (null !== t && (e.flags |= 4),
      16384 & e.flags && ((t = 22 !== e.tag ? Se() : 536870912), (e.lanes |= t), (wu |= t)));
  }
  function as(e, t) {
    if (!aa)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; null !== t; ) (null !== t.alternate && (n = t), (t = t.sibling));
          null === n ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var r = null; null !== n; ) (null !== n.alternate && (r = n), (n = n.sibling));
          null === r
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function ls(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var a = e.child; null !== a; )
        ((n |= a.lanes | a.childLanes),
          (r |= 65011712 & a.subtreeFlags),
          (r |= 65011712 & a.flags),
          (a.return = e),
          (a = a.sibling));
    else
      for (a = e.child; null !== a; )
        ((n |= a.lanes | a.childLanes),
          (r |= a.subtreeFlags),
          (r |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function os(e, t, n) {
    var a = t.pendingProps;
    switch ((ta(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
      case 1:
        return (ls(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (a = null),
          null !== e && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          ba(Oa),
          W(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (null !== e && null !== e.child) ||
            (da(t)
              ? ts(t)
              : null === e ||
                (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                ((t.flags |= 1024), ha())),
          ls(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          null === e
            ? (ts(t), null !== n ? (ls(t), ns(t, n)) : (ls(t), (t.flags &= -16777217)))
            : n
              ? n !== e.memoizedState
                ? (ts(t), ls(t), ns(t, n))
                : (ls(t), (t.flags &= -16777217))
              : (e.memoizedProps !== a && ts(t), ls(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        (Q(t), (n = U.current));
        var l = t.type;
        if (null !== e && null != t.stateNode) e.memoizedProps !== a && ts(t);
        else {
          if (!a) {
            if (null === t.stateNode) throw Error(r(166));
            return (ls(t), null);
          }
          ((e = $.current), da(t) ? ua(t) : ((e = xd(l, a, n)), (t.stateNode = e), ts(t)));
        }
        return (ls(t), null);
      case 5:
        if ((Q(t), (n = t.type), null !== e && null != t.stateNode)) e.memoizedProps !== a && ts(t);
        else {
          if (!a) {
            if (null === t.stateNode) throw Error(r(166));
            return (ls(t), null);
          }
          if (((e = $.current), da(t))) ua(t);
          else {
            switch (((l = od(U.current)), e)) {
              case 1:
                e = l.createElementNS('http://www.w3.org/2000/svg', n);
                break;
              case 2:
                e = l.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                break;
              default:
                switch (n) {
                  case 'svg':
                    e = l.createElementNS('http://www.w3.org/2000/svg', n);
                    break;
                  case 'math':
                    e = l.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                    break;
                  case 'script':
                    (((e = l.createElement('div')).innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case 'select':
                    ((e =
                      'string' == typeof a.is
                        ? l.createElement('select', { is: a.is })
                        : l.createElement('select')),
                      a.multiple ? (e.multiple = !0) : a.size && (e.size = a.size));
                    break;
                  default:
                    e =
                      'string' == typeof a.is
                        ? l.createElement(n, { is: a.is })
                        : l.createElement(n);
                }
            }
            ((e[Ne] = t), (e[_e] = a));
            e: for (l = t.child; null !== l; ) {
              if (5 === l.tag || 6 === l.tag) e.appendChild(l.stateNode);
              else if (4 !== l.tag && 27 !== l.tag && null !== l.child) {
                ((l.child.return = l), (l = l.child));
                continue;
              }
              if (l === t) break e;
              for (; null === l.sibling; ) {
                if (null === l.return || l.return === t) break e;
                l = l.return;
              }
              ((l.sibling.return = l.return), (l = l.sibling));
            }
            t.stateNode = e;
            e: switch ((rd(e, n, a), n)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!a.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && ts(t);
          }
        }
        return (ls(t), (t.flags &= -16777217), null);
      case 6:
        if (e && null != t.stateNode) e.memoizedProps !== a && ts(t);
        else {
          if ('string' != typeof a && null === t.stateNode) throw Error(r(166));
          if (((e = U.current), da(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (a = null), null !== (l = na)))
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            ((e[Ne] = t),
              (e = !!(
                e.nodeValue === n ||
                (null !== a && !0 === a.suppressHydrationWarning) ||
                Zc(e.nodeValue, n)
              )) || sa(t));
          } else (((e = od(e).createTextNode(a))[Ne] = t), (t.stateNode = e));
        }
        return (ls(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
        ) {
          if (((l = da(t)), null !== a && null !== a.dehydrated)) {
            if (null === e) {
              if (!l) throw Error(r(318));
              if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null)) throw Error(r(317));
              l[Ne] = t;
            } else (fa(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
            (ls(t), (l = !1));
          } else
            ((l = ha()),
              null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = l),
              (l = !0));
          if (!l) return 256 & t.flags ? (fi(t), t) : (fi(t), null);
        }
        if ((fi(t), 128 & t.flags)) return ((t.lanes = n), t);
        if (((n = null !== a), (e = null !== e && null !== e.memoizedState), n)) {
          ((l = null),
            null !== (a = t.child).alternate &&
              null !== a.alternate.memoizedState &&
              null !== a.alternate.memoizedState.cachePool &&
              (l = a.alternate.memoizedState.cachePool.pool));
          var o = null;
          (null !== a.memoizedState &&
            null !== a.memoizedState.cachePool &&
            (o = a.memoizedState.cachePool.pool),
            o !== l && (a.flags |= 2048));
        }
        return (n !== e && n && (t.child.flags |= 8192), rs(t, t.updateQueue), ls(t), null);
      case 4:
        return (W(), null === e && Hc(t.stateNode.containerInfo), ls(t), null);
      case 10:
        return (ba(t.type), ls(t), null);
      case 19:
        if ((F(hi), null === (l = t.memoizedState))) return (ls(t), null);
        if (((a = !!(128 & t.flags)), null === (o = l.rendering)))
          if (a) as(l, !1);
          else {
            if (0 !== mu || (null !== e && 128 & e.flags))
              for (e = t.child; null !== e; ) {
                if (null !== (o = pi(e))) {
                  for (
                    t.flags |= 128,
                      as(l, !1),
                      e = o.updateQueue,
                      t.updateQueue = e,
                      rs(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    null !== n;

                  )
                    (jr(n, e), (n = n.sibling));
                  return (j(hi, (1 & hi.current) | 2), t.child);
                }
                e = e.sibling;
              }
            null !== l.tail &&
              ee() > Cu &&
              ((t.flags |= 128), (a = !0), as(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (null !== (e = pi(o))) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                rs(t, e),
                as(l, !0),
                null === l.tail && 'hidden' === l.tailMode && !o.alternate && !aa)
              )
                return (ls(t), null);
            } else
              2 * ee() - l.renderingStartTime > Cu &&
                536870912 !== n &&
                ((t.flags |= 128), (a = !0), as(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : (null !== (e = l.last) ? (e.sibling = o) : (t.child = o), (l.last = o));
        }
        return null !== l.tail
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = ee()),
            (t.sibling = null),
            (e = hi.current),
            j(hi, a ? (1 & e) | 2 : 1 & e),
            t)
          : (ls(t), null);
      case 22:
      case 23:
        return (
          fi(t),
          wl(),
          (a = null !== t.memoizedState),
          null !== e
            ? (null !== e.memoizedState) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? !!(536870912 & n) &&
              !(128 & t.flags) &&
              (ls(t), 6 & t.subtreeFlags && (t.flags |= 8192))
            : ls(t),
          null !== (n = t.updateQueue) && rs(t, n.retryQueue),
          (n = null),
          null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
          (a = null),
          null !== t.memoizedState &&
            null !== t.memoizedState.cachePool &&
            (a = t.memoizedState.cachePool.pool),
          a !== n && (t.flags |= 2048),
          null !== e && F(Wa),
          null
        );
      case 24:
        return (
          (n = null),
          null !== e && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          ba(Oa),
          ls(t),
          null
        );
      case 25:
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function is(e, t) {
    switch ((ta(t), t.tag)) {
      case 1:
        return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
      case 3:
        return (
          ba(Oa),
          W(),
          65536 & (e = t.flags) && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (Q(t), null);
      case 13:
        if ((fi(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
          if (null === t.alternate) throw Error(r(340));
          fa();
        }
        return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
      case 19:
        return (F(hi), null);
      case 4:
        return (W(), null);
      case 10:
        return (ba(t.type), null);
      case 22:
      case 23:
        return (
          fi(t),
          wl(),
          null !== e && F(Wa),
          65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
        );
      case 24:
        return (ba(Oa), null);
      default:
        return null;
    }
  }
  function ss(e, t) {
    switch ((ta(t), t.tag)) {
      case 3:
        (ba(Oa), W());
        break;
      case 26:
      case 27:
      case 5:
        Q(t);
        break;
      case 4:
        W();
        break;
      case 13:
        fi(t);
        break;
      case 19:
        F(hi);
        break;
      case 10:
        ba(t.type);
        break;
      case 22:
      case 23:
        (fi(t), wl(), null !== e && F(Wa));
        break;
      case 24:
        ba(Oa);
    }
  }
  function us(e, t) {
    try {
      var n = t.updateQueue,
        r = null !== n ? n.lastEffect : null;
      if (null !== r) {
        var a = r.next;
        n = a;
        do {
          if ((n.tag & e) === e) {
            r = void 0;
            var l = n.create,
              o = n.inst;
            ((r = l()), (o.destroy = r));
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (i) {
      hc(t, t.return, i);
    }
  }
  function cs(e, t, n) {
    try {
      var r = t.updateQueue,
        a = null !== r ? r.lastEffect : null;
      if (null !== a) {
        var l = a.next;
        r = l;
        do {
          if ((r.tag & e) === e) {
            var o = r.inst,
              i = o.destroy;
            if (void 0 !== i) {
              ((o.destroy = void 0), (a = t));
              var s = n,
                u = i;
              try {
                u();
              } catch (c) {
                hc(a, s, c);
              }
            }
          }
          r = r.next;
        } while (r !== l);
      }
    } catch (c) {
      hc(t, t.return, c);
    }
  }
  function ds(e) {
    var t = e.updateQueue;
    if (null !== t) {
      var n = e.stateNode;
      try {
        ml(t, n);
      } catch (r) {
        hc(e, e.return, r);
      }
    }
  }
  function fs(e, t, n) {
    ((n.props = bi(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (r) {
      hc(e, t, r);
    }
  }
  function hs(e, t) {
    try {
      var n = e.ref;
      if (null !== n) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        'function' == typeof n ? (e.refCleanup = n(r)) : (n.current = r);
      }
    } catch (a) {
      hc(e, t, a);
    }
  }
  function ps(e, t) {
    var n = e.ref,
      r = e.refCleanup;
    if (null !== n)
      if ('function' == typeof r)
        try {
          r();
        } catch (a) {
          hc(e, t, a);
        } finally {
          ((e.refCleanup = null), null != (e = e.alternate) && (e.refCleanup = null));
        }
      else if ('function' == typeof n)
        try {
          n(null);
        } catch (l) {
          hc(e, t, l);
        }
      else n.current = null;
  }
  function ms(e) {
    var t = e.type,
      n = e.memoizedProps,
      r = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          n.autoFocus && r.focus();
          break e;
        case 'img':
          n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
      }
    } catch (a) {
      hc(e, e.return, a);
    }
  }
  function ys(e, t, n) {
    try {
      var a = e.stateNode;
      (!(function (e, t, n, a) {
        switch (t) {
          case 'div':
          case 'span':
          case 'svg':
          case 'path':
          case 'a':
          case 'g':
          case 'p':
          case 'li':
            break;
          case 'input':
            var l = null,
              o = null,
              i = null,
              s = null,
              u = null,
              c = null,
              d = null;
            for (p in n) {
              var f = n[p];
              if (n.hasOwnProperty(p) && null != f)
                switch (p) {
                  case 'checked':
                  case 'value':
                    break;
                  case 'defaultValue':
                    u = f;
                  default:
                    a.hasOwnProperty(p) || td(e, t, p, null, a, f);
                }
            }
            for (var h in a) {
              var p = a[h];
              if (((f = n[h]), a.hasOwnProperty(h) && (null != p || null != f)))
                switch (h) {
                  case 'type':
                    o = p;
                    break;
                  case 'name':
                    l = p;
                    break;
                  case 'checked':
                    c = p;
                    break;
                  case 'defaultChecked':
                    d = p;
                    break;
                  case 'value':
                    i = p;
                    break;
                  case 'defaultValue':
                    s = p;
                    break;
                  case 'children':
                  case 'dangerouslySetInnerHTML':
                    if (null != p) throw Error(r(137, t));
                    break;
                  default:
                    p !== f && td(e, t, h, p, a, f);
                }
            }
            return void mt(e, i, s, u, c, d, o, l);
          case 'select':
            for (o in ((p = i = s = h = null), n))
              if (((u = n[o]), n.hasOwnProperty(o) && null != u))
                switch (o) {
                  case 'value':
                    break;
                  case 'multiple':
                    p = u;
                  default:
                    a.hasOwnProperty(o) || td(e, t, o, null, a, u);
                }
            for (l in a)
              if (((o = a[l]), (u = n[l]), a.hasOwnProperty(l) && (null != o || null != u)))
                switch (l) {
                  case 'value':
                    h = o;
                    break;
                  case 'defaultValue':
                    s = o;
                    break;
                  case 'multiple':
                    i = o;
                  default:
                    o !== u && td(e, t, l, o, a, u);
                }
            return (
              (t = s),
              (n = i),
              (a = p),
              void (null != h
                ? gt(e, !!n, h, !1)
                : !!a != !!n && (null != t ? gt(e, !!n, t, !0) : gt(e, !!n, n ? [] : '', !1)))
            );
          case 'textarea':
            for (s in ((p = h = null), n))
              if (((l = n[s]), n.hasOwnProperty(s) && null != l && !a.hasOwnProperty(s)))
                switch (s) {
                  case 'value':
                  case 'children':
                    break;
                  default:
                    td(e, t, s, null, a, l);
                }
            for (i in a)
              if (((l = a[i]), (o = n[i]), a.hasOwnProperty(i) && (null != l || null != o)))
                switch (i) {
                  case 'value':
                    h = l;
                    break;
                  case 'defaultValue':
                    p = l;
                    break;
                  case 'children':
                    break;
                  case 'dangerouslySetInnerHTML':
                    if (null != l) throw Error(r(91));
                    break;
                  default:
                    l !== o && td(e, t, i, l, a, o);
                }
            return void bt(e, h, p);
          case 'option':
            for (var m in n)
              if (((h = n[m]), n.hasOwnProperty(m) && null != h && !a.hasOwnProperty(m)))
                if ('selected' === m) e.selected = !1;
                else td(e, t, m, null, a, h);
            for (u in a)
              if (
                ((h = a[u]), (p = n[u]), a.hasOwnProperty(u) && h !== p && (null != h || null != p))
              )
                if ('selected' === u)
                  e.selected = h && 'function' != typeof h && 'symbol' != typeof h;
                else td(e, t, u, h, a, p);
            return;
          case 'img':
          case 'link':
          case 'area':
          case 'base':
          case 'br':
          case 'col':
          case 'embed':
          case 'hr':
          case 'keygen':
          case 'meta':
          case 'param':
          case 'source':
          case 'track':
          case 'wbr':
          case 'menuitem':
            for (var y in n)
              ((h = n[y]),
                n.hasOwnProperty(y) &&
                  null != h &&
                  !a.hasOwnProperty(y) &&
                  td(e, t, y, null, a, h));
            for (c in a)
              if (
                ((h = a[c]), (p = n[c]), a.hasOwnProperty(c) && h !== p && (null != h || null != p))
              )
                switch (c) {
                  case 'children':
                  case 'dangerouslySetInnerHTML':
                    if (null != h) throw Error(r(137, t));
                    break;
                  default:
                    td(e, t, c, h, a, p);
                }
            return;
          default:
            if (Ct(t)) {
              for (var v in n)
                ((h = n[v]),
                  n.hasOwnProperty(v) &&
                    void 0 !== h &&
                    !a.hasOwnProperty(v) &&
                    nd(e, t, v, void 0, a, h));
              for (d in a)
                ((h = a[d]),
                  (p = n[d]),
                  !a.hasOwnProperty(d) ||
                    h === p ||
                    (void 0 === h && void 0 === p) ||
                    nd(e, t, d, h, a, p));
              return;
            }
        }
        for (var g in n)
          ((h = n[g]),
            n.hasOwnProperty(g) && null != h && !a.hasOwnProperty(g) && td(e, t, g, null, a, h));
        for (f in a)
          ((h = a[f]),
            (p = n[f]),
            !a.hasOwnProperty(f) || h === p || (null == h && null == p) || td(e, t, f, h, a, p));
      })(a, e.type, n, t),
        (a[_e] = t));
    } catch (l) {
      hc(e, e.return, l);
    }
  }
  function vs(e) {
    return (
      5 === e.tag || 3 === e.tag || 26 === e.tag || (27 === e.tag && yd(e.type)) || 4 === e.tag
    );
  }
  function gs(e) {
    e: for (;;) {
      for (; null === e.sibling; ) {
        if (null === e.return || vs(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

      ) {
        if (27 === e.tag && yd(e.type)) continue e;
        if (2 & e.flags) continue e;
        if (null === e.child || 4 === e.tag) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(2 & e.flags)) return e.stateNode;
    }
  }
  function bs(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
      ((e = e.stateNode),
        t
          ? (9 === n.nodeType
              ? n.body
              : 'HTML' === n.nodeName
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              9 === n.nodeType
                ? n.body
                : 'HTML' === n.nodeName
                  ? n.ownerDocument.body
                  : n).appendChild(e),
            null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = ed)));
    else if (
      4 !== r &&
      (27 === r && yd(e.type) && ((n = e.stateNode), (t = null)), null !== (e = e.child))
    )
      for (bs(e, t, n), e = e.sibling; null !== e; ) (bs(e, t, n), (e = e.sibling));
  }
  function ws(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && (27 === r && yd(e.type) && (n = e.stateNode), null !== (e = e.child)))
      for (ws(e, t, n), e = e.sibling; null !== e; ) (ws(e, t, n), (e = e.sibling));
  }
  function ks(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var r = e.type, a = t.attributes; a.length; ) t.removeAttributeNode(a[0]);
      (rd(t, r, n), (t[Ne] = e), (t[_e] = n));
    } catch (l) {
      hc(e, e.return, l);
    }
  }
  var Ss = !1,
    xs = !1,
    Es = !1,
    Cs = 'function' == typeof WeakSet ? WeakSet : Set,
    Ps = null;
  function Ls(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Is(e, n), 4 & r && us(5, n));
        break;
      case 1:
        if ((Is(e, n), 4 & r))
          if (((e = n.stateNode), null === t))
            try {
              e.componentDidMount();
            } catch (o) {
              hc(n, n.return, o);
            }
          else {
            var a = bi(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              hc(n, n.return, i);
            }
          }
        (64 & r && ds(n), 512 & r && hs(n, n.return));
        break;
      case 3:
        if ((Is(e, n), 64 & r && null !== (e = n.updateQueue))) {
          if (((t = null), null !== n.child))
            switch (n.child.tag) {
              case 27:
              case 5:
              case 1:
                t = n.child.stateNode;
            }
          try {
            ml(e, t);
          } catch (o) {
            hc(n, n.return, o);
          }
        }
        break;
      case 27:
        null === t && 4 & r && ks(n);
      case 26:
      case 5:
        (Is(e, n), null === t && 4 & r && ms(n), 512 & r && hs(n, n.return));
        break;
      case 12:
        Is(e, n);
        break;
      case 13:
        (Is(e, n),
          4 & r && Ms(e, n),
          64 & r &&
            null !== (e = n.memoizedState) &&
            null !== (e = e.dehydrated) &&
            (function (e, t) {
              var n = e.ownerDocument;
              if ('$?' !== e.data || 'complete' === n.readyState) t();
              else {
                var r = function () {
                  (t(), n.removeEventListener('DOMContentLoaded', r));
                };
                (n.addEventListener('DOMContentLoaded', r), (e._reactRetry = r));
              }
            })(e, (n = vc.bind(null, n))));
        break;
      case 22:
        if (!(r = null !== n.memoizedState || Ss)) {
          ((t = (null !== t && null !== t.memoizedState) || xs), (a = Ss));
          var l = xs;
          ((Ss = r),
            (xs = t) && !l ? qs(e, n, !!(8772 & n.subtreeFlags)) : Is(e, n),
            (Ss = a),
            (xs = l));
        }
        break;
      case 30:
        break;
      default:
        Is(e, n);
    }
  }
  function zs(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), zs(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      5 === e.tag && null !== (t = e.stateNode) && $e(t),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Rs = null,
    Ts = !1;
  function Ns(e, t, n) {
    for (n = n.child; null !== n; ) (_s(e, t, n), (n = n.sibling));
  }
  function _s(e, t, n) {
    if (ce && 'function' == typeof ce.onCommitFiberUnmount)
      try {
        ce.onCommitFiberUnmount(ue, n);
      } catch (l) {}
    switch (n.tag) {
      case 26:
        (xs || ps(n, t),
          Ns(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && (n = n.stateNode).parentNode.removeChild(n));
        break;
      case 27:
        xs || ps(n, t);
        var r = Rs,
          a = Ts;
        (yd(n.type) && ((Rs = n.stateNode), (Ts = !1)),
          Ns(e, t, n),
          Ed(n.stateNode),
          (Rs = r),
          (Ts = a));
        break;
      case 5:
        xs || ps(n, t);
      case 6:
        if (((r = Rs), (a = Ts), (Rs = null), Ns(e, t, n), (Ts = a), null !== (Rs = r)))
          if (Ts)
            try {
              (9 === Rs.nodeType
                ? Rs.body
                : 'HTML' === Rs.nodeName
                  ? Rs.ownerDocument.body
                  : Rs
              ).removeChild(n.stateNode);
            } catch (o) {
              hc(n, t, o);
            }
          else
            try {
              Rs.removeChild(n.stateNode);
            } catch (o) {
              hc(n, t, o);
            }
        break;
      case 18:
        null !== Rs &&
          (Ts
            ? (vd(
                9 === (e = Rs).nodeType ? e.body : 'HTML' === e.nodeName ? e.ownerDocument.body : e,
                n.stateNode,
              ),
              Nf(e))
            : vd(Rs, n.stateNode));
        break;
      case 4:
        ((r = Rs),
          (a = Ts),
          (Rs = n.stateNode.containerInfo),
          (Ts = !0),
          Ns(e, t, n),
          (Rs = r),
          (Ts = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (xs || cs(2, n, t), xs || cs(4, n, t), Ns(e, t, n));
        break;
      case 1:
        (xs ||
          (ps(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount && fs(n, t, r)),
          Ns(e, t, n));
        break;
      case 21:
        Ns(e, t, n);
        break;
      case 22:
        ((xs = (r = xs) || null !== n.memoizedState), Ns(e, t, n), (xs = r));
        break;
      default:
        Ns(e, t, n);
    }
  }
  function Ms(e, t) {
    if (
      null === t.memoizedState &&
      null !== (e = t.alternate) &&
      null !== (e = e.memoizedState) &&
      null !== (e = e.dehydrated)
    )
      try {
        Nf(e);
      } catch (n) {
        hc(t, t.return, n);
      }
  }
  function Ds(e, t) {
    var n = (function (e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return (null === t && (t = e.stateNode = new Cs()), t);
        case 22:
          return (
            null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new Cs()),
            t
          );
        default:
          throw Error(r(435, e.tag));
      }
    })(e);
    t.forEach(function (t) {
      var r = gc.bind(null, e, t);
      n.has(t) || (n.add(t), t.then(r, r));
    });
  }
  function Os(e, t) {
    var n = t.deletions;
    if (null !== n)
      for (var a = 0; a < n.length; a++) {
        var l = n[a],
          o = e,
          i = t,
          s = i;
        e: for (; null !== s; ) {
          switch (s.tag) {
            case 27:
              if (yd(s.type)) {
                ((Rs = s.stateNode), (Ts = !1));
                break e;
              }
              break;
            case 5:
              ((Rs = s.stateNode), (Ts = !1));
              break e;
            case 3:
            case 4:
              ((Rs = s.stateNode.containerInfo), (Ts = !0));
              break e;
          }
          s = s.return;
        }
        if (null === Rs) throw Error(r(160));
        (_s(o, i, l),
          (Rs = null),
          (Ts = !1),
          null !== (o = l.alternate) && (o.return = null),
          (l.return = null));
      }
    if (13878 & t.subtreeFlags) for (t = t.child; null !== t; ) (Fs(t, e), (t = t.sibling));
  }
  var As = null;
  function Fs(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Os(t, e), js(e), 4 & a && (cs(3, e, e.return), us(3, e), cs(5, e, e.return)));
        break;
      case 1:
        (Os(t, e),
          js(e),
          512 & a && (xs || null === n || ps(n, n.return)),
          64 & a &&
            Ss &&
            null !== (e = e.updateQueue) &&
            null !== (a = e.callbacks) &&
            ((n = e.shared.hiddenCallbacks),
            (e.shared.hiddenCallbacks = null === n ? a : n.concat(a))));
        break;
      case 26:
        var l = As;
        if ((Os(t, e), js(e), 512 & a && (xs || null === n || ps(n, n.return)), 4 & a)) {
          var o = null !== n ? n.memoizedState : null;
          if (((a = e.memoizedState), null === n))
            if (null === a)
              if (null === e.stateNode) {
                e: {
                  ((a = e.type), (n = e.memoizedProps), (l = l.ownerDocument || l));
                  t: switch (a) {
                    case 'title':
                      ((!(o = l.getElementsByTagName('title')[0]) ||
                        o[je] ||
                        o[Ne] ||
                        'http://www.w3.org/2000/svg' === o.namespaceURI ||
                        o.hasAttribute('itemprop')) &&
                        ((o = l.createElement(a)),
                        l.head.insertBefore(o, l.querySelector('head > title'))),
                        rd(o, a, n),
                        (o[Ne] = e),
                        We(o),
                        (a = o));
                      break e;
                    case 'link':
                      var i = qd('link', 'href', l).get(a + (n.href || ''));
                      if (i)
                        for (var s = 0; s < i.length; s++)
                          if (
                            (o = i[s]).getAttribute('href') ===
                              (null == n.href || '' === n.href ? null : n.href) &&
                            o.getAttribute('rel') === (null == n.rel ? null : n.rel) &&
                            o.getAttribute('title') === (null == n.title ? null : n.title) &&
                            o.getAttribute('crossorigin') ===
                              (null == n.crossOrigin ? null : n.crossOrigin)
                          ) {
                            i.splice(s, 1);
                            break t;
                          }
                      (rd((o = l.createElement(a)), a, n), l.head.appendChild(o));
                      break;
                    case 'meta':
                      if ((i = qd('meta', 'content', l).get(a + (n.content || ''))))
                        for (s = 0; s < i.length; s++)
                          if (
                            (o = i[s]).getAttribute('content') ===
                              (null == n.content ? null : '' + n.content) &&
                            o.getAttribute('name') === (null == n.name ? null : n.name) &&
                            o.getAttribute('property') ===
                              (null == n.property ? null : n.property) &&
                            o.getAttribute('http-equiv') ===
                              (null == n.httpEquiv ? null : n.httpEquiv) &&
                            o.getAttribute('charset') === (null == n.charSet ? null : n.charSet)
                          ) {
                            i.splice(s, 1);
                            break t;
                          }
                      (rd((o = l.createElement(a)), a, n), l.head.appendChild(o));
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  ((o[Ne] = e), We(o), (a = o));
                }
                e.stateNode = a;
              } else Hd(l, e.type, e.stateNode);
            else e.stateNode = Fd(l, a, e.memoizedProps);
          else
            o !== a
              ? (null === o
                  ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n)
                  : o.count--,
                null === a ? Hd(l, e.type, e.stateNode) : Fd(l, a, e.memoizedProps))
              : null === a && null !== e.stateNode && ys(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Os(t, e),
          js(e),
          512 & a && (xs || null === n || ps(n, n.return)),
          null !== n && 4 & a && ys(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Os(t, e), js(e), 512 & a && (xs || null === n || ps(n, n.return)), 32 & e.flags)) {
          l = e.stateNode;
          try {
            kt(l, '');
          } catch (p) {
            hc(e, e.return, p);
          }
        }
        (4 & a &&
          null != e.stateNode &&
          ys(e, (l = e.memoizedProps), null !== n ? n.memoizedProps : l),
          1024 & a && (Es = !0));
        break;
      case 6:
        if ((Os(t, e), js(e), 4 & a)) {
          if (null === e.stateNode) throw Error(r(162));
          ((a = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = a;
          } catch (p) {
            hc(e, e.return, p);
          }
        }
        break;
      case 3:
        if (
          ((Ud = null),
          (l = As),
          (As = Ld(t.containerInfo)),
          Os(t, e),
          (As = l),
          js(e),
          4 & a && null !== n && n.memoizedState.isDehydrated)
        )
          try {
            Nf(t.containerInfo);
          } catch (p) {
            hc(e, e.return, p);
          }
        Es && ((Es = !1), $s(e));
        break;
      case 4:
        ((a = As), (As = Ld(e.stateNode.containerInfo)), Os(t, e), js(e), (As = a));
        break;
      case 12:
      default:
        (Os(t, e), js(e));
        break;
      case 13:
        (Os(t, e),
          js(e),
          8192 & e.child.flags &&
            (null !== e.memoizedState) != (null !== n && null !== n.memoizedState) &&
            (Eu = ee()),
          4 & a && null !== (a = e.updateQueue) && ((e.updateQueue = null), Ds(e, a)));
        break;
      case 22:
        l = null !== e.memoizedState;
        var u = null !== n && null !== n.memoizedState,
          c = Ss,
          d = xs;
        if (((Ss = c || l), (xs = d || u), Os(t, e), (xs = d), (Ss = c), js(e), 8192 & a))
          e: for (
            t = e.stateNode,
              t._visibility = l ? -2 & t._visibility : 1 | t._visibility,
              l && (null === n || u || Ss || xs || Us(e)),
              n = null,
              t = e;
            ;

          ) {
            if (5 === t.tag || 26 === t.tag) {
              if (null === n) {
                u = n = t;
                try {
                  if (((o = u.stateNode), l))
                    'function' == typeof (i = o.style).setProperty
                      ? i.setProperty('display', 'none', 'important')
                      : (i.display = 'none');
                  else {
                    s = u.stateNode;
                    var f = u.memoizedProps.style,
                      h = null != f && f.hasOwnProperty('display') ? f.display : null;
                    s.style.display = null == h || 'boolean' == typeof h ? '' : ('' + h).trim();
                  }
                } catch (p) {
                  hc(u, u.return, p);
                }
              }
            } else if (6 === t.tag) {
              if (null === n) {
                u = t;
                try {
                  u.stateNode.nodeValue = l ? '' : u.memoizedProps;
                } catch (p) {
                  hc(u, u.return, p);
                }
              }
            } else if (
              ((22 !== t.tag && 23 !== t.tag) || null === t.memoizedState || t === e) &&
              null !== t.child
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling));
          }
        4 & a &&
          null !== (a = e.updateQueue) &&
          null !== (n = a.retryQueue) &&
          ((a.retryQueue = null), Ds(e, n));
        break;
      case 19:
        (Os(t, e),
          js(e),
          4 & a && null !== (a = e.updateQueue) && ((e.updateQueue = null), Ds(e, a)));
      case 30:
      case 21:
    }
  }
  function js(e) {
    var t = e.flags;
    if (2 & t) {
      try {
        for (var n, a = e.return; null !== a; ) {
          if (vs(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (null == n) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode;
            ws(e, gs(e), l);
            break;
          case 5:
            var o = n.stateNode;
            (32 & n.flags && (kt(o, ''), (n.flags &= -33)), ws(e, gs(e), o));
            break;
          case 3:
          case 4:
            var i = n.stateNode.containerInfo;
            bs(e, gs(e), i);
            break;
          default:
            throw Error(r(161));
        }
      } catch (s) {
        hc(e, e.return, s);
      }
      e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
  }
  function $s(e) {
    if (1024 & e.subtreeFlags)
      for (e = e.child; null !== e; ) {
        var t = e;
        ($s(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function Is(e, t) {
    if (8772 & t.subtreeFlags)
      for (t = t.child; null !== t; ) (Ls(e, t.alternate, t), (t = t.sibling));
  }
  function Us(e) {
    for (e = e.child; null !== e; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (cs(4, t, t.return), Us(t));
          break;
        case 1:
          ps(t, t.return);
          var n = t.stateNode;
          ('function' == typeof n.componentWillUnmount && fs(t, t.return, n), Us(t));
          break;
        case 27:
          Ed(t.stateNode);
        case 26:
        case 5:
          (ps(t, t.return), Us(t));
          break;
        case 22:
          null === t.memoizedState && Us(t);
          break;
        default:
          Us(t);
      }
      e = e.sibling;
    }
  }
  function qs(e, t, n) {
    for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
      var r = t.alternate,
        a = e,
        l = t,
        o = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          (qs(a, l, n), us(4, l));
          break;
        case 1:
          if ((qs(a, l, n), 'function' == typeof (a = (r = l).stateNode).componentDidMount))
            try {
              a.componentDidMount();
            } catch (u) {
              hc(r, r.return, u);
            }
          if (null !== (a = (r = l).updateQueue)) {
            var i = r.stateNode;
            try {
              var s = a.shared.hiddenCallbacks;
              if (null !== s)
                for (a.shared.hiddenCallbacks = null, a = 0; a < s.length; a++) pl(s[a], i);
            } catch (u) {
              hc(r, r.return, u);
            }
          }
          (n && 64 & o && ds(l), hs(l, l.return));
          break;
        case 27:
          ks(l);
        case 26:
        case 5:
          (qs(a, l, n), n && null === r && 4 & o && ms(l), hs(l, l.return));
          break;
        case 12:
          qs(a, l, n);
          break;
        case 13:
          (qs(a, l, n), n && 4 & o && Ms(a, l));
          break;
        case 22:
          (null === l.memoizedState && qs(a, l, n), hs(l, l.return));
          break;
        case 30:
          break;
        default:
          qs(a, l, n);
      }
      t = t.sibling;
    }
  }
  function Hs(e, t) {
    var n = null;
    (null !== e &&
      null !== e.memoizedState &&
      null !== e.memoizedState.cachePool &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      null !== t.memoizedState &&
        null !== t.memoizedState.cachePool &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (null != e && e.refCount++, null != n && Fa(n)));
  }
  function Ws(e, t) {
    ((e = null),
      null !== t.alternate && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Fa(e)));
  }
  function Bs(e, t, n, r) {
    if (10256 & t.subtreeFlags) for (t = t.child; null !== t; ) (Qs(e, t, n, r), (t = t.sibling));
  }
  function Qs(e, t, n, r) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Bs(e, t, n, r), 2048 & a && us(9, t));
        break;
      case 1:
      case 13:
      default:
        Bs(e, t, n, r);
        break;
      case 3:
        (Bs(e, t, n, r),
          2048 & a &&
            ((e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Fa(e))));
        break;
      case 12:
        if (2048 & a) {
          (Bs(e, t, n, r), (e = t.stateNode));
          try {
            var l = t.memoizedProps,
              o = l.id,
              i = l.onPostCommit;
            'function' == typeof i &&
              i(o, null === t.alternate ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (s) {
            hc(t, t.return, s);
          }
        } else Bs(e, t, n, r);
        break;
      case 23:
        break;
      case 22:
        ((l = t.stateNode),
          (o = t.alternate),
          null !== t.memoizedState
            ? 2 & l._visibility
              ? Bs(e, t, n, r)
              : Ks(e, t)
            : 2 & l._visibility
              ? Bs(e, t, n, r)
              : ((l._visibility |= 2), Vs(e, t, n, r, !!(10256 & t.subtreeFlags))),
          2048 & a && Hs(o, t));
        break;
      case 24:
        (Bs(e, t, n, r), 2048 & a && Ws(t.alternate, t));
    }
  }
  function Vs(e, t, n, r, a) {
    for (a = a && !!(10256 & t.subtreeFlags), t = t.child; null !== t; ) {
      var l = e,
        o = t,
        i = n,
        s = r,
        u = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (Vs(l, o, i, s, a), us(8, o));
          break;
        case 23:
          break;
        case 22:
          var c = o.stateNode;
          (null !== o.memoizedState
            ? 2 & c._visibility
              ? Vs(l, o, i, s, a)
              : Ks(l, o)
            : ((c._visibility |= 2), Vs(l, o, i, s, a)),
            a && 2048 & u && Hs(o.alternate, o));
          break;
        case 24:
          (Vs(l, o, i, s, a), a && 2048 & u && Ws(o.alternate, o));
          break;
        default:
          Vs(l, o, i, s, a);
      }
      t = t.sibling;
    }
  }
  function Ks(e, t) {
    if (10256 & t.subtreeFlags)
      for (t = t.child; null !== t; ) {
        var n = e,
          r = t,
          a = r.flags;
        switch (r.tag) {
          case 22:
            (Ks(n, r), 2048 & a && Hs(r.alternate, r));
            break;
          case 24:
            (Ks(n, r), 2048 & a && Ws(r.alternate, r));
            break;
          default:
            Ks(n, r);
        }
        t = t.sibling;
      }
  }
  var Ys = 8192;
  function Gs(e) {
    if (e.subtreeFlags & Ys) for (e = e.child; null !== e; ) (Xs(e), (e = e.sibling));
  }
  function Xs(e) {
    switch (e.tag) {
      case 26:
        (Gs(e),
          e.flags & Ys &&
            null !== e.memoizedState &&
            (function (e, t, n) {
              if (null === Bd) throw Error(r(475));
              var a = Bd;
              if (
                !(
                  'stylesheet' !== t.type ||
                  ('string' == typeof n.media && !1 === matchMedia(n.media).matches) ||
                  4 & t.state.loading
                )
              ) {
                if (null === t.instance) {
                  var l = _d(n.href),
                    o = e.querySelector(Md(l));
                  if (o)
                    return (
                      null !== (e = o._p) &&
                        'object' == typeof e &&
                        'function' == typeof e.then &&
                        (a.count++, (a = Vd.bind(a)), e.then(a, a)),
                      (t.state.loading |= 4),
                      (t.instance = o),
                      void We(o)
                    );
                  ((o = e.ownerDocument || e),
                    (n = Dd(n)),
                    (l = Cd.get(l)) && $d(n, l),
                    We((o = o.createElement('link'))));
                  var i = o;
                  ((i._p = new Promise(function (e, t) {
                    ((i.onload = e), (i.onerror = t));
                  })),
                    rd(o, 'link', n),
                    (t.instance = o));
                }
                (null === a.stylesheets && (a.stylesheets = new Map()),
                  a.stylesheets.set(t, e),
                  (e = t.state.preload) &&
                    !(3 & t.state.loading) &&
                    (a.count++,
                    (t = Vd.bind(a)),
                    e.addEventListener('load', t),
                    e.addEventListener('error', t)));
              }
            })(As, e.memoizedState, e.memoizedProps));
        break;
      case 5:
      default:
        Gs(e);
        break;
      case 3:
      case 4:
        var t = As;
        ((As = Ld(e.stateNode.containerInfo)), Gs(e), (As = t));
        break;
      case 22:
        null === e.memoizedState &&
          (null !== (t = e.alternate) && null !== t.memoizedState
            ? ((t = Ys), (Ys = 16777216), Gs(e), (Ys = t))
            : Gs(e));
    }
  }
  function Js(e) {
    var t = e.alternate;
    if (null !== t && null !== (e = t.child)) {
      t.child = null;
      do {
        ((t = e.sibling), (e.sibling = null), (e = t));
      } while (null !== e);
    }
  }
  function Zs(e) {
    var t = e.deletions;
    if (16 & e.flags) {
      if (null !== t)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((Ps = r), nu(r, e));
        }
      Js(e);
    }
    if (10256 & e.subtreeFlags) for (e = e.child; null !== e; ) (eu(e), (e = e.sibling));
  }
  function eu(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Zs(e), 2048 & e.flags && cs(9, e, e.return));
        break;
      case 3:
      case 12:
      default:
        Zs(e);
        break;
      case 22:
        var t = e.stateNode;
        null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag)
          ? ((t._visibility &= -3), tu(e))
          : Zs(e);
    }
  }
  function tu(e) {
    var t = e.deletions;
    if (16 & e.flags) {
      if (null !== t)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((Ps = r), nu(r, e));
        }
      Js(e);
    }
    for (e = e.child; null !== e; ) {
      switch ((t = e).tag) {
        case 0:
        case 11:
        case 15:
          (cs(8, t, t.return), tu(t));
          break;
        case 22:
          2 & (n = t.stateNode)._visibility && ((n._visibility &= -3), tu(t));
          break;
        default:
          tu(t);
      }
      e = e.sibling;
    }
  }
  function nu(e, t) {
    for (; null !== Ps; ) {
      var n = Ps;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          cs(8, n, t);
          break;
        case 23:
        case 22:
          if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
            var r = n.memoizedState.cachePool.pool;
            null != r && r.refCount++;
          }
          break;
        case 24:
          Fa(n.memoizedState.cache);
      }
      if (null !== (r = n.child)) ((r.return = n), (Ps = r));
      else
        e: for (n = e; null !== Ps; ) {
          var a = (r = Ps).sibling,
            l = r.return;
          if ((zs(r), r === n)) {
            Ps = null;
            break e;
          }
          if (null !== a) {
            ((a.return = l), (Ps = a));
            break e;
          }
          Ps = l;
        }
    }
  }
  var ru = {
      getCacheForType: function (e) {
        var t = Pa(Oa),
          n = t.data.get(e);
        return (void 0 === n && ((n = e()), t.data.set(e, n)), n);
      },
    },
    au = 'function' == typeof WeakMap ? WeakMap : Map,
    lu = 0,
    ou = null,
    iu = null,
    su = 0,
    uu = 0,
    cu = null,
    du = !1,
    fu = !1,
    hu = !1,
    pu = 0,
    mu = 0,
    yu = 0,
    vu = 0,
    gu = 0,
    bu = 0,
    wu = 0,
    ku = null,
    Su = null,
    xu = !1,
    Eu = 0,
    Cu = 1 / 0,
    Pu = null,
    Lu = null,
    zu = 0,
    Ru = null,
    Tu = null,
    Nu = 0,
    _u = 0,
    Mu = null,
    Du = null,
    Ou = 0,
    Au = null;
  function Fu() {
    if (2 & lu && 0 !== su) return su & -su;
    if (null !== N.T) {
      return 0 !== Ia ? Ia : _c();
    }
    return Re();
  }
  function ju() {
    0 === bu && (bu = 536870912 & su && !aa ? 536870912 : ke());
    var e = ii.current;
    return (null !== e && (e.flags |= 32), bu);
  }
  function $u(e, t, n) {
    (((e !== ou || (2 !== uu && 9 !== uu)) && null === e.cancelPendingCommit) ||
      (Qu(e, 0), Hu(e, su, bu, !1)),
      Ee(e, n),
      (2 & lu && e === ou) ||
        (e === ou && (!(2 & lu) && (vu |= n), 4 === mu && Hu(e, su, bu, !1)), Cc(e)));
  }
  function Iu(e, t, n) {
    if (6 & lu) throw Error(r(327));
    for (
      var a = (!n && !(124 & t) && 0 === (t & e.expiredLanes)) || be(e, t),
        l = a
          ? (function (e, t) {
              var n = lu;
              lu |= 2;
              var a = Ku(),
                l = Yu();
              ou !== e || su !== t ? ((Pu = null), (Cu = ee() + 500), Qu(e, t)) : (fu = be(e, t));
              e: for (;;)
                try {
                  if (0 !== uu && null !== iu) {
                    t = iu;
                    var o = cu;
                    t: switch (uu) {
                      case 1:
                        ((uu = 0), (cu = null), nc(e, t, o, 1));
                        break;
                      case 2:
                      case 9:
                        if (Ja(o)) {
                          ((uu = 0), (cu = null), tc(t));
                          break;
                        }
                        ((t = function () {
                          ((2 !== uu && 9 !== uu) || ou !== e || (uu = 7), Cc(e));
                        }),
                          o.then(t, t));
                        break e;
                      case 3:
                        uu = 7;
                        break e;
                      case 4:
                        uu = 5;
                        break e;
                      case 7:
                        Ja(o)
                          ? ((uu = 0), (cu = null), tc(t))
                          : ((uu = 0), (cu = null), nc(e, t, o, 7));
                        break;
                      case 5:
                        var i = null;
                        switch (iu.tag) {
                          case 26:
                            i = iu.memoizedState;
                          case 5:
                          case 27:
                            var s = iu;
                            if (!i || Wd(i)) {
                              ((uu = 0), (cu = null));
                              var u = s.sibling;
                              if (null !== u) iu = u;
                              else {
                                var c = s.return;
                                null !== c ? ((iu = c), rc(c)) : (iu = null);
                              }
                              break t;
                            }
                        }
                        ((uu = 0), (cu = null), nc(e, t, o, 5));
                        break;
                      case 6:
                        ((uu = 0), (cu = null), nc(e, t, o, 6));
                        break;
                      case 8:
                        (Bu(), (mu = 6));
                        break e;
                      default:
                        throw Error(r(462));
                    }
                  }
                  Zu();
                  break;
                } catch (d) {
                  Vu(e, d);
                }
              return (
                (va = ya = null),
                (N.H = a),
                (N.A = l),
                (lu = n),
                null !== iu ? 0 : ((ou = null), (su = 0), Lr(), mu)
              );
            })(e, t)
          : Xu(e, t, !0),
        o = a;
      ;

    ) {
      if (0 === l) {
        fu && !a && Hu(e, t, 0, !1);
        break;
      }
      if (((n = e.current.alternate), !o || qu(n))) {
        if (2 === l) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var i = 0;
          else i = 0 !== (i = -536870913 & e.pendingLanes) ? i : 536870912 & i ? 536870912 : 0;
          if (0 !== i) {
            t = i;
            e: {
              var s = e;
              l = ku;
              var u = s.current.memoizedState.isDehydrated;
              if ((u && (Qu(s, i).flags |= 256), 2 !== (i = Xu(s, i, !1)))) {
                if (hu && !u) {
                  ((s.errorRecoveryDisabledLanes |= o), (vu |= o), (l = 4));
                  break e;
                }
                ((o = Su), (Su = l), null !== o && (null === Su ? (Su = o) : Su.push.apply(Su, o)));
              }
              l = i;
            }
            if (((o = !1), 2 !== l)) continue;
          }
        }
        if (1 === l) {
          (Qu(e, 0), Hu(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (o = l))) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((4194048 & t) !== t) break;
            case 6:
              Hu(a, t, bu, !du);
              break e;
            case 2:
              Su = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((62914560 & t) === t && 10 < (l = Eu + 300 - ee())) {
            if ((Hu(a, t, bu, !du), 0 !== ge(a, 0, !0))) break e;
            a.timeoutHandle = dd(
              Uu.bind(null, a, n, Su, Pu, xu, t, bu, vu, wu, du, o, 2, -0, 0),
              l,
            );
          } else Uu(a, n, Su, Pu, xu, t, bu, vu, wu, du, o, 0, -0, 0);
        }
        break;
      }
      ((l = Xu(e, t, !1)), (o = !1));
    }
    Cc(e);
  }
  function Uu(e, t, n, a, l, o, i, s, u, c, d, f, h, p) {
    if (
      ((e.timeoutHandle = -1),
      (8192 & (f = t.subtreeFlags) || !(16785408 & ~f)) &&
        ((Bd = { stylesheets: null, count: 0, unsuspend: Qd }),
        Xs(t),
        null !==
          (f = (function () {
            if (null === Bd) throw Error(r(475));
            var e = Bd;
            return (
              e.stylesheets && 0 === e.count && Yd(e, e.stylesheets),
              0 < e.count
                ? function (t) {
                    var n = setTimeout(function () {
                      if ((e.stylesheets && Yd(e, e.stylesheets), e.unsuspend)) {
                        var t = e.unsuspend;
                        ((e.unsuspend = null), t());
                      }
                    }, 6e4);
                    return (
                      (e.unsuspend = t),
                      function () {
                        ((e.unsuspend = null), clearTimeout(n));
                      }
                    );
                  }
                : null
            );
          })())))
    )
      return (
        (e.cancelPendingCommit = f(lc.bind(null, e, t, o, n, a, l, i, s, u, d, 1, h, p))),
        void Hu(e, o, i, !c)
      );
    lc(e, t, o, n, a, l, i, s, u);
  }
  function qu(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (0 === n || 11 === n || 15 === n) &&
        16384 & t.flags &&
        null !== (n = t.updateQueue) &&
        null !== (n = n.stores)
      )
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            l = a.getSnapshot;
          a = a.value;
          try {
            if (!Kn(l(), a)) return !1;
          } catch (o) {
            return !1;
          }
        }
      if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Hu(e, t, n, r) {
    ((t &= ~gu),
      (t &= ~vu),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      r && (e.warmLanes |= t),
      (r = e.expirationTimes));
    for (var a = t; 0 < a; ) {
      var l = 31 - fe(a),
        o = 1 << l;
      ((r[l] = -1), (a &= ~o));
    }
    0 !== n && Ce(e, n, t);
  }
  function Wu() {
    return !!(6 & lu) || (Pc(0), !1);
  }
  function Bu() {
    if (null !== iu) {
      if (0 === uu) var e = iu.return;
      else ((va = ya = null), Il((e = iu)), (Jo = null), (Zo = 0), (e = iu));
      for (; null !== e; ) (ss(e.alternate, e), (e = e.return));
      iu = null;
    }
  }
  function Qu(e, t) {
    var n = e.timeoutHandle;
    (-1 !== n && ((e.timeoutHandle = -1), fd(n)),
      null !== (n = e.cancelPendingCommit) && ((e.cancelPendingCommit = null), n()),
      Bu(),
      (ou = e),
      (iu = n = Fr(e.current, null)),
      (su = t),
      (uu = 0),
      (cu = null),
      (du = !1),
      (fu = be(e, t)),
      (hu = !1),
      (wu = bu = gu = vu = yu = mu = 0),
      (Su = ku = null),
      (xu = !1),
      8 & t && (t |= 32 & t));
    var r = e.entangledLanes;
    if (0 !== r)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var a = 31 - fe(r),
          l = 1 << a;
        ((t |= e[a]), (r &= ~l));
      }
    return ((pu = t), Lr(), n);
  }
  function Vu(e, t) {
    ((Sl = null),
      (N.H = Ko),
      t === Ka || t === Ga
        ? ((t = nl()), (uu = 3))
        : t === Ya
          ? ((t = nl()), (uu = 4))
          : (uu =
              t === Ri
                ? 8
                : null !== t && 'object' == typeof t && 'function' == typeof t.then
                  ? 6
                  : 1),
      (cu = t),
      null === iu && ((mu = 1), Ei(e, xr(t, e.current))));
  }
  function Ku() {
    var e = N.H;
    return ((N.H = Ko), null === e ? Ko : e);
  }
  function Yu() {
    var e = N.A;
    return ((N.A = ru), e);
  }
  function Gu() {
    ((mu = 4),
      du || ((4194048 & su) !== su && null !== ii.current) || (fu = !0),
      (!(134217727 & yu) && !(134217727 & vu)) || null === ou || Hu(ou, su, bu, !1));
  }
  function Xu(e, t, n) {
    var r = lu;
    lu |= 2;
    var a = Ku(),
      l = Yu();
    ((ou === e && su === t) || ((Pu = null), Qu(e, t)), (t = !1));
    var o = mu;
    e: for (;;)
      try {
        if (0 !== uu && null !== iu) {
          var i = iu,
            s = cu;
          switch (uu) {
            case 8:
              (Bu(), (o = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              null === ii.current && (t = !0);
              var u = uu;
              if (((uu = 0), (cu = null), nc(e, i, s, u), n && fu)) {
                o = 0;
                break e;
              }
              break;
            default:
              ((u = uu), (uu = 0), (cu = null), nc(e, i, s, u));
          }
        }
        (Ju(), (o = mu));
        break;
      } catch (c) {
        Vu(e, c);
      }
    return (
      t && e.shellSuspendCounter++,
      (va = ya = null),
      (lu = r),
      (N.H = a),
      (N.A = l),
      null === iu && ((ou = null), (su = 0), Lr()),
      o
    );
  }
  function Ju() {
    for (; null !== iu; ) ec(iu);
  }
  function Zu() {
    for (; null !== iu && !J(); ) ec(iu);
  }
  function ec(e) {
    var t = es(e.alternate, e, pu);
    ((e.memoizedProps = e.pendingProps), null === t ? rc(e) : (iu = t));
  }
  function tc(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = $i(n, t, t.pendingProps, t.type, void 0, su);
        break;
      case 11:
        t = $i(n, t, t.pendingProps, t.type.render, t.ref, su);
        break;
      case 5:
        Il(t);
      default:
        (ss(n, t), (t = es(n, (t = iu = jr(t, pu)), pu)));
    }
    ((e.memoizedProps = e.pendingProps), null === t ? rc(e) : (iu = t));
  }
  function nc(e, t, n, a) {
    ((va = ya = null), Il(t), (Jo = null), (Zo = 0));
    var l = t.return;
    try {
      if (
        (function (e, t, n, a, l) {
          if (
            ((n.flags |= 32768), null !== a && 'object' == typeof a && 'function' == typeof a.then)
          ) {
            if ((null !== (t = n.alternate) && Sa(t, n, l, !0), null !== (n = ii.current))) {
              switch (n.tag) {
                case 13:
                  return (
                    null === si ? Gu() : null === n.alternate && 0 === mu && (mu = 3),
                    (n.flags &= -257),
                    (n.flags |= 65536),
                    (n.lanes = l),
                    a === Xa
                      ? (n.flags |= 16384)
                      : (null === (t = n.updateQueue) ? (n.updateQueue = new Set([a])) : t.add(a),
                        pc(e, a, l)),
                    !1
                  );
                case 22:
                  return (
                    (n.flags |= 65536),
                    a === Xa
                      ? (n.flags |= 16384)
                      : (null === (t = n.updateQueue)
                          ? ((t = {
                              transitions: null,
                              markerInstances: null,
                              retryQueue: new Set([a]),
                            }),
                            (n.updateQueue = t))
                          : null === (n = t.retryQueue)
                            ? (t.retryQueue = new Set([a]))
                            : n.add(a),
                        pc(e, a, l)),
                    !1
                  );
              }
              throw Error(r(435, n.tag));
            }
            return (pc(e, a, l), Gu(), !1);
          }
          if (aa)
            return (
              null !== (t = ii.current)
                ? (!(65536 & t.flags) && (t.flags |= 256),
                  (t.flags |= 65536),
                  (t.lanes = l),
                  a !== ia && pa(xr((e = Error(r(422), { cause: a })), n)))
                : (a !== ia && pa(xr((t = Error(r(423), { cause: a })), n)),
                  ((e = e.current.alternate).flags |= 65536),
                  (l &= -l),
                  (e.lanes |= l),
                  (a = xr(a, n)),
                  cl(e, (l = Pi(e.stateNode, a, l))),
                  4 !== mu && (mu = 2)),
              !1
            );
          var o = Error(r(520), { cause: a });
          if (
            ((o = xr(o, n)),
            null === ku ? (ku = [o]) : ku.push(o),
            4 !== mu && (mu = 2),
            null === t)
          )
            return !0;
          ((a = xr(a, n)), (n = t));
          do {
            switch (n.tag) {
              case 3:
                return (
                  (n.flags |= 65536),
                  (e = l & -l),
                  (n.lanes |= e),
                  cl(n, (e = Pi(n.stateNode, a, e))),
                  !1
                );
              case 1:
                if (
                  ((t = n.type),
                  (o = n.stateNode),
                  !(
                    128 & n.flags ||
                    ('function' != typeof t.getDerivedStateFromError &&
                      (null === o ||
                        'function' != typeof o.componentDidCatch ||
                        (null !== Lu && Lu.has(o))))
                  ))
                )
                  return (
                    (n.flags |= 65536),
                    (l &= -l),
                    (n.lanes |= l),
                    zi((l = Li(l)), e, n, a),
                    cl(n, l),
                    !1
                  );
            }
            n = n.return;
          } while (null !== n);
          return !1;
        })(e, l, t, n, su)
      )
        return ((mu = 1), Ei(e, xr(n, e.current)), void (iu = null));
    } catch (o) {
      if (null !== l) throw ((iu = l), o);
      return ((mu = 1), Ei(e, xr(n, e.current)), void (iu = null));
    }
    32768 & t.flags
      ? (aa || 1 === a
          ? (e = !0)
          : fu || 536870912 & su
            ? (e = !1)
            : ((du = e = !0),
              (2 === a || 9 === a || 3 === a || 6 === a) &&
                null !== (a = ii.current) &&
                13 === a.tag &&
                (a.flags |= 16384)),
        ac(t, e))
      : rc(t);
  }
  function rc(e) {
    var t = e;
    do {
      if (32768 & t.flags) return void ac(t, du);
      e = t.return;
      var n = os(t.alternate, t, pu);
      if (null !== n) return void (iu = n);
      if (null !== (t = t.sibling)) return void (iu = t);
      iu = t = e;
    } while (null !== t);
    0 === mu && (mu = 5);
  }
  function ac(e, t) {
    do {
      var n = is(e.alternate, e);
      if (null !== n) return ((n.flags &= 32767), void (iu = n));
      if (
        (null !== (n = e.return) &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && null !== (e = e.sibling))
      )
        return void (iu = e);
      iu = e = n;
    } while (null !== e);
    ((mu = 6), (iu = null));
  }
  function lc(e, t, n, a, l, o, i, s, u) {
    e.cancelPendingCommit = null;
    do {
      cc();
    } while (0 !== zu);
    if (6 & lu) throw Error(r(327));
    if (null !== t) {
      if (t === e.current) throw Error(r(177));
      if (
        ((o = t.lanes | t.childLanes),
        (function (e, t, n, r, a, l) {
          var o = e.pendingLanes;
          ((e.pendingLanes = n),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.warmLanes = 0),
            (e.expiredLanes &= n),
            (e.entangledLanes &= n),
            (e.errorRecoveryDisabledLanes &= n),
            (e.shellSuspendCounter = 0));
          var i = e.entanglements,
            s = e.expirationTimes,
            u = e.hiddenUpdates;
          for (n = o & ~n; 0 < n; ) {
            var c = 31 - fe(n),
              d = 1 << c;
            ((i[c] = 0), (s[c] = -1));
            var f = u[c];
            if (null !== f)
              for (u[c] = null, c = 0; c < f.length; c++) {
                var h = f[c];
                null !== h && (h.lane &= -536870913);
              }
            n &= ~d;
          }
          (0 !== r && Ce(e, r, 0),
            0 !== l && 0 === a && 0 !== e.tag && (e.suspendedLanes |= l & ~(o & ~t)));
        })(e, n, (o |= Pr), i, s, u),
        e === ou && ((iu = ou = null), (su = 0)),
        (Tu = t),
        (Ru = e),
        (Nu = n),
        (_u = o),
        (Mu = l),
        (Du = a),
        10256 & t.subtreeFlags || 10256 & t.flags
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Y(ae, function () {
              return (dc(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = !!(13878 & t.flags)),
        13878 & t.subtreeFlags || a)
      ) {
        ((a = N.T), (N.T = null), (l = _.p), (_.p = 2), (i = lu), (lu |= 4));
        try {
          !(function (e, t) {
            if (((e = e.containerInfo), (ad = lf), er((e = Zn(e))))) {
              if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
              else
                e: {
                  var a =
                    (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection &&
                    n.getSelection();
                  if (a && 0 !== a.rangeCount) {
                    n = a.anchorNode;
                    var l = a.anchorOffset,
                      o = a.focusNode;
                    a = a.focusOffset;
                    try {
                      (n.nodeType, o.nodeType);
                    } catch (y) {
                      n = null;
                      break e;
                    }
                    var i = 0,
                      s = -1,
                      u = -1,
                      c = 0,
                      d = 0,
                      f = e,
                      h = null;
                    t: for (;;) {
                      for (
                        var p;
                        f !== n || (0 !== l && 3 !== f.nodeType) || (s = i + l),
                          f !== o || (0 !== a && 3 !== f.nodeType) || (u = i + a),
                          3 === f.nodeType && (i += f.nodeValue.length),
                          null !== (p = f.firstChild);

                      )
                        ((h = f), (f = p));
                      for (;;) {
                        if (f === e) break t;
                        if (
                          (h === n && ++c === l && (s = i),
                          h === o && ++d === a && (u = i),
                          null !== (p = f.nextSibling))
                        )
                          break;
                        h = (f = h).parentNode;
                      }
                      f = p;
                    }
                    n = -1 === s || -1 === u ? null : { start: s, end: u };
                  } else n = null;
                }
              n = n || { start: 0, end: 0 };
            } else n = null;
            for (ld = { focusedElem: e, selectionRange: n }, lf = !1, Ps = t; null !== Ps; )
              if (((e = (t = Ps).child), 1024 & t.subtreeFlags && null !== e))
                ((e.return = t), (Ps = e));
              else
                for (; null !== Ps; ) {
                  switch (((o = (t = Ps).alternate), (e = t.flags), t.tag)) {
                    case 0:
                    case 11:
                    case 15:
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                      break;
                    case 1:
                      if (1024 & e && null !== o) {
                        ((e = void 0),
                          (n = t),
                          (l = o.memoizedProps),
                          (o = o.memoizedState),
                          (a = n.stateNode));
                        try {
                          var m = bi(n.type, l, (n.elementType, n.type));
                          ((e = a.getSnapshotBeforeUpdate(m, o)),
                            (a.__reactInternalSnapshotBeforeUpdate = e));
                        } catch (v) {
                          hc(n, n.return, v);
                        }
                      }
                      break;
                    case 3:
                      if (1024 & e)
                        if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) gd(e);
                        else if (1 === n)
                          switch (e.nodeName) {
                            case 'HEAD':
                            case 'HTML':
                            case 'BODY':
                              gd(e);
                              break;
                            default:
                              e.textContent = '';
                          }
                      break;
                    default:
                      if (1024 & e) throw Error(r(163));
                  }
                  if (null !== (e = t.sibling)) {
                    ((e.return = t.return), (Ps = e));
                    break;
                  }
                  Ps = t.return;
                }
          })(e, t);
        } finally {
          ((lu = i), (_.p = l), (N.T = a));
        }
      }
      ((zu = 1), oc(), ic(), sc());
    }
  }
  function oc() {
    if (1 === zu) {
      zu = 0;
      var e = Ru,
        t = Tu,
        n = !!(13878 & t.flags);
      if (13878 & t.subtreeFlags || n) {
        ((n = N.T), (N.T = null));
        var r = _.p;
        _.p = 2;
        var a = lu;
        lu |= 4;
        try {
          Fs(t, e);
          var l = ld,
            o = Zn(e.containerInfo),
            i = l.focusedElem,
            s = l.selectionRange;
          if (o !== i && i && i.ownerDocument && Jn(i.ownerDocument.documentElement, i)) {
            if (null !== s && er(i)) {
              var u = s.start,
                c = s.end;
              if ((void 0 === c && (c = u), 'selectionStart' in i))
                ((i.selectionStart = u), (i.selectionEnd = Math.min(c, i.value.length)));
              else {
                var d = i.ownerDocument || document,
                  f = (d && d.defaultView) || window;
                if (f.getSelection) {
                  var h = f.getSelection(),
                    p = i.textContent.length,
                    m = Math.min(s.start, p),
                    y = void 0 === s.end ? m : Math.min(s.end, p);
                  !h.extend && m > y && ((o = y), (y = m), (m = o));
                  var v = Xn(i, m),
                    g = Xn(i, y);
                  if (
                    v &&
                    g &&
                    (1 !== h.rangeCount ||
                      h.anchorNode !== v.node ||
                      h.anchorOffset !== v.offset ||
                      h.focusNode !== g.node ||
                      h.focusOffset !== g.offset)
                  ) {
                    var b = d.createRange();
                    (b.setStart(v.node, v.offset),
                      h.removeAllRanges(),
                      m > y
                        ? (h.addRange(b), h.extend(g.node, g.offset))
                        : (b.setEnd(g.node, g.offset), h.addRange(b)));
                  }
                }
              }
            }
            for (d = [], h = i; (h = h.parentNode); )
              1 === h.nodeType && d.push({ element: h, left: h.scrollLeft, top: h.scrollTop });
            for ('function' == typeof i.focus && i.focus(), i = 0; i < d.length; i++) {
              var w = d[i];
              ((w.element.scrollLeft = w.left), (w.element.scrollTop = w.top));
            }
          }
          ((lf = !!ad), (ld = ad = null));
        } finally {
          ((lu = a), (_.p = r), (N.T = n));
        }
      }
      ((e.current = t), (zu = 2));
    }
  }
  function ic() {
    if (2 === zu) {
      zu = 0;
      var e = Ru,
        t = Tu,
        n = !!(8772 & t.flags);
      if (8772 & t.subtreeFlags || n) {
        ((n = N.T), (N.T = null));
        var r = _.p;
        _.p = 2;
        var a = lu;
        lu |= 4;
        try {
          Ls(e, t.alternate, t);
        } finally {
          ((lu = a), (_.p = r), (N.T = n));
        }
      }
      zu = 3;
    }
  }
  function sc() {
    if (4 === zu || 3 === zu) {
      ((zu = 0), Z());
      var e = Ru,
        t = Tu,
        n = Nu,
        r = Du;
      10256 & t.subtreeFlags || 10256 & t.flags
        ? (zu = 5)
        : ((zu = 0), (Tu = Ru = null), uc(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (
        (0 === a && (Lu = null),
        ze(n),
        (t = t.stateNode),
        ce && 'function' == typeof ce.onCommitFiberRoot)
      )
        try {
          ce.onCommitFiberRoot(ue, t, void 0, !(128 & ~t.current.flags));
        } catch (s) {}
      if (null !== r) {
        ((t = N.T), (a = _.p), (_.p = 2), (N.T = null));
        try {
          for (var l = e.onRecoverableError, o = 0; o < r.length; o++) {
            var i = r[o];
            l(i.value, { componentStack: i.stack });
          }
        } finally {
          ((N.T = t), (_.p = a));
        }
      }
      (3 & Nu && cc(),
        Cc(e),
        (a = e.pendingLanes),
        4194090 & n && 42 & a ? (e === Au ? Ou++ : ((Ou = 0), (Au = e))) : (Ou = 0),
        Pc(0));
    }
  }
  function uc(e, t) {
    0 === (e.pooledCacheLanes &= t) &&
      null != (t = e.pooledCache) &&
      ((e.pooledCache = null), Fa(t));
  }
  function cc(e) {
    return (oc(), ic(), sc(), dc());
  }
  function dc() {
    if (5 !== zu) return !1;
    var e = Ru,
      t = _u;
    _u = 0;
    var n = ze(Nu),
      a = N.T,
      l = _.p;
    try {
      ((_.p = 32 > n ? 32 : n), (N.T = null), (n = Mu), (Mu = null));
      var o = Ru,
        i = Nu;
      if (((zu = 0), (Tu = Ru = null), (Nu = 0), 6 & lu)) throw Error(r(331));
      var s = lu;
      if (
        ((lu |= 4),
        eu(o.current),
        Qs(o, o.current, i, n),
        (lu = s),
        Pc(0, !1),
        ce && 'function' == typeof ce.onPostCommitFiberRoot)
      )
        try {
          ce.onPostCommitFiberRoot(ue, o);
        } catch (u) {}
      return !0;
    } finally {
      ((_.p = l), (N.T = a), uc(e, t));
    }
  }
  function fc(e, t, n) {
    ((t = xr(n, t)), null !== (e = sl(e, (t = Pi(e.stateNode, t, 2)), 2)) && (Ee(e, 2), Cc(e)));
  }
  function hc(e, t, n) {
    if (3 === e.tag) fc(e, e, n);
    else
      for (; null !== t; ) {
        if (3 === t.tag) {
          fc(t, e, n);
          break;
        }
        if (1 === t.tag) {
          var r = t.stateNode;
          if (
            'function' == typeof t.type.getDerivedStateFromError ||
            ('function' == typeof r.componentDidCatch && (null === Lu || !Lu.has(r)))
          ) {
            ((e = xr(n, e)),
              null !== (r = sl(t, (n = Li(2)), 2)) && (zi(n, r, t, e), Ee(r, 2), Cc(r)));
            break;
          }
        }
        t = t.return;
      }
  }
  function pc(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
      r = e.pingCache = new au();
      var a = new Set();
      r.set(t, a);
    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
    a.has(n) || ((hu = !0), a.add(n), (e = mc.bind(null, e, t, n)), t.then(e, e));
  }
  function mc(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      ou === e &&
        (su & n) === n &&
        (4 === mu || (3 === mu && (62914560 & su) === su && 300 > ee() - Eu)
          ? !(2 & lu) && Qu(e, 0)
          : (gu |= n),
        wu === su && (wu = 0)),
      Cc(e));
  }
  function yc(e, t) {
    (0 === t && (t = Se()), null !== (e = Tr(e, t)) && (Ee(e, t), Cc(e)));
  }
  function vc(e) {
    var t = e.memoizedState,
      n = 0;
    (null !== t && (n = t.retryLane), yc(e, n));
  }
  function gc(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          l = e.memoizedState;
        null !== l && (n = l.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (null !== a && a.delete(t), yc(e, n));
  }
  var bc = null,
    wc = null,
    kc = !1,
    Sc = !1,
    xc = !1,
    Ec = 0;
  function Cc(e) {
    (e !== wc && null === e.next && (null === wc ? (bc = wc = e) : (wc = wc.next = e)),
      (Sc = !0),
      kc ||
        ((kc = !0),
        pd(function () {
          6 & lu ? Y(ne, Lc) : zc();
        })));
  }
  function Pc(e, t) {
    if (!xc && Sc) {
      xc = !0;
      do {
        for (var n = !1, r = bc; null !== r; ) {
          if (0 !== e) {
            var a = r.pendingLanes;
            if (0 === a) var l = 0;
            else {
              var o = r.suspendedLanes,
                i = r.pingedLanes;
              ((l = (1 << (31 - fe(42 | e) + 1)) - 1),
                (l = 201326741 & (l &= a & ~(o & ~i)) ? (201326741 & l) | 1 : l ? 2 | l : 0));
            }
            0 !== l && ((n = !0), Nc(r, l));
          } else
            ((l = su),
              !(
                3 &
                (l = ge(
                  r,
                  r === ou ? l : 0,
                  null !== r.cancelPendingCommit || -1 !== r.timeoutHandle,
                ))
              ) ||
                be(r, l) ||
                ((n = !0), Nc(r, l)));
          r = r.next;
        }
      } while (n);
      xc = !1;
    }
  }
  function Lc() {
    zc();
  }
  function zc() {
    Sc = kc = !1;
    var e = 0;
    0 !== Ec &&
      ((function () {
        var e = window.event;
        if (e && 'popstate' === e.type) return e !== cd && ((cd = e), !0);
        return ((cd = null), !1);
      })() && (e = Ec),
      (Ec = 0));
    for (var t = ee(), n = null, r = bc; null !== r; ) {
      var a = r.next,
        l = Rc(r, t);
      (0 === l
        ? ((r.next = null), null === n ? (bc = a) : (n.next = a), null === a && (wc = n))
        : ((n = r), (0 !== e || 3 & l) && (Sc = !0)),
        (r = a));
    }
    Pc(e);
  }
  function Rc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        a = e.expirationTimes,
        l = -62914561 & e.pendingLanes;
      0 < l;

    ) {
      var o = 31 - fe(l),
        i = 1 << o,
        s = a[o];
      (-1 === s
        ? (0 !== (i & n) && 0 === (i & r)) || (a[o] = we(i, t))
        : s <= t && (e.expiredLanes |= i),
        (l &= ~i));
    }
    if (
      ((n = su),
      (n = ge(e, e === (t = ou) ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)),
      (r = e.callbackNode),
      0 === n || (e === t && (2 === uu || 9 === uu)) || null !== e.cancelPendingCommit)
    )
      return (null !== r && null !== r && X(r), (e.callbackNode = null), (e.callbackPriority = 0));
    if (!(3 & n) || be(e, n)) {
      if ((t = n & -n) === e.callbackPriority) return t;
      switch ((null !== r && X(r), ze(n))) {
        case 2:
        case 8:
          n = re;
          break;
        case 32:
        default:
          n = ae;
          break;
        case 268435456:
          n = oe;
      }
      return (
        (r = Tc.bind(null, e)),
        (n = Y(n, r)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (null !== r && null !== r && X(r), (e.callbackPriority = 2), (e.callbackNode = null), 2);
  }
  function Tc(e, t) {
    if (0 !== zu && 5 !== zu) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (cc() && e.callbackNode !== n) return null;
    var r = su;
    return 0 ===
      (r = ge(e, e === ou ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle))
      ? null
      : (Iu(e, r, t),
        Rc(e, ee()),
        null != e.callbackNode && e.callbackNode === n ? Tc.bind(null, e) : null);
  }
  function Nc(e, t) {
    if (cc()) return null;
    Iu(e, t, !0);
  }
  function _c() {
    return (0 === Ec && (Ec = ke()), Ec);
  }
  function Mc(e) {
    return null == e || 'symbol' == typeof e || 'boolean' == typeof e
      ? null
      : 'function' == typeof e
        ? e
        : zt('' + e);
  }
  function Dc(e, t) {
    var n = t.ownerDocument.createElement('input');
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute('form', e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  for (var Oc = 0; Oc < wr.length; Oc++) {
    var Ac = wr[Oc];
    kr(Ac.toLowerCase(), 'on' + (Ac[0].toUpperCase() + Ac.slice(1)));
  }
  (kr(fr, 'onAnimationEnd'),
    kr(hr, 'onAnimationIteration'),
    kr(pr, 'onAnimationStart'),
    kr('dblclick', 'onDoubleClick'),
    kr('focusin', 'onFocus'),
    kr('focusout', 'onBlur'),
    kr(mr, 'onTransitionRun'),
    kr(yr, 'onTransitionStart'),
    kr(vr, 'onTransitionCancel'),
    kr(gr, 'onTransitionEnd'),
    Ke('onMouseEnter', ['mouseout', 'mouseover']),
    Ke('onMouseLeave', ['mouseout', 'mouseover']),
    Ke('onPointerEnter', ['pointerout', 'pointerover']),
    Ke('onPointerLeave', ['pointerout', 'pointerover']),
    Ve('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ve(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Ve('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ve('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ve(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Ve(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var Fc =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    jc = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Fc),
    );
  function $c(e, t) {
    t = !!(4 & t);
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        a = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var i = r[o],
              s = i.instance,
              u = i.currentTarget;
            if (((i = i.listener), s !== l && a.isPropagationStopped())) break e;
            ((l = i), (a.currentTarget = u));
            try {
              l(a);
            } catch (c) {
              wi(c);
            }
            ((a.currentTarget = null), (l = s));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((s = (i = r[o]).instance),
              (u = i.currentTarget),
              (i = i.listener),
              s !== l && a.isPropagationStopped())
            )
              break e;
            ((l = i), (a.currentTarget = u));
            try {
              l(a);
            } catch (c) {
              wi(c);
            }
            ((a.currentTarget = null), (l = s));
          }
      }
    }
  }
  function Ic(e, t) {
    var n = t[De];
    void 0 === n && (n = t[De] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Wc(t, e, 2, !1), n.add(r));
  }
  function Uc(e, t, n) {
    var r = 0;
    (t && (r |= 4), Wc(n, e, r, t));
  }
  var qc = '_reactListening' + Math.random().toString(36).slice(2);
  function Hc(e) {
    if (!e[qc]) {
      ((e[qc] = !0),
        Be.forEach(function (t) {
          'selectionchange' !== t && (jc.has(t) || Uc(t, !1, e), Uc(t, !0, e));
        }));
      var t = 9 === e.nodeType ? e : e.ownerDocument;
      null === t || t[qc] || ((t[qc] = !0), Uc('selectionchange', !1, t));
    }
  }
  function Wc(e, t, n, r) {
    switch (hf(t)) {
      case 2:
        var a = of;
        break;
      case 8:
        a = sf;
        break;
      default:
        a = uf;
    }
    ((n = a.bind(null, t, n, e)),
      (a = void 0),
      !jt || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
      r
        ? void 0 !== a
          ? e.addEventListener(t, n, { capture: !0, passive: a })
          : e.addEventListener(t, n, !0)
        : void 0 !== a
          ? e.addEventListener(t, n, { passive: a })
          : e.addEventListener(t, n, !1));
  }
  function Bc(e, t, n, r, a) {
    var o = r;
    if (!(1 & t || 2 & t || null === r))
      e: for (;;) {
        if (null === r) return;
        var i = r.tag;
        if (3 === i || 4 === i) {
          var s = r.stateNode.containerInfo;
          if (s === a) break;
          if (4 === i)
            for (i = r.return; null !== i; ) {
              var u = i.tag;
              if ((3 === u || 4 === u) && i.stateNode.containerInfo === a) return;
              i = i.return;
            }
          for (; null !== s; ) {
            if (null === (i = Ie(s))) return;
            if (5 === (u = i.tag) || 6 === u || 26 === u || 27 === u) {
              r = o = i;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    Ot(function () {
      var r = o,
        a = Tt(n),
        i = [];
      e: {
        var s = br.get(e);
        if (void 0 !== s) {
          var u = Jt,
            c = e;
          switch (e) {
            case 'keypress':
              if (0 === Wt(n)) break e;
            case 'keydown':
            case 'keyup':
              u = pn;
              break;
            case 'focusin':
              ((c = 'focus'), (u = an));
              break;
            case 'focusout':
              ((c = 'blur'), (u = an));
              break;
            case 'beforeblur':
            case 'afterblur':
              u = an;
              break;
            case 'click':
              if (2 === n.button) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              u = nn;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              u = rn;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              u = yn;
              break;
            case fr:
            case hr:
            case pr:
              u = ln;
              break;
            case gr:
              u = vn;
              break;
            case 'scroll':
            case 'scrollend':
              u = en;
              break;
            case 'wheel':
              u = gn;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              u = on;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              u = mn;
              break;
            case 'toggle':
            case 'beforetoggle':
              u = bn;
          }
          var d = !!(4 & t),
            f = !d && ('scroll' === e || 'scrollend' === e),
            h = d ? (null !== s ? s + 'Capture' : null) : s;
          d = [];
          for (var p, m = r; null !== m; ) {
            var y = m;
            if (
              ((p = y.stateNode),
              (5 !== (y = y.tag) && 26 !== y && 27 !== y) ||
                null === p ||
                null === h ||
                (null != (y = At(m, h)) && d.push(Qc(m, y, p))),
              f)
            )
              break;
            m = m.return;
          }
          0 < d.length && ((s = new u(s, c, null, n, a)), i.push({ event: s, listeners: d }));
        }
      }
      if (!(7 & t)) {
        if (
          ((u = 'mouseout' === e || 'pointerout' === e),
          (!(s = 'mouseover' === e || 'pointerover' === e) ||
            n === Rt ||
            !(c = n.relatedTarget || n.fromElement) ||
            (!Ie(c) && !c[Me])) &&
            (u || s) &&
            ((s =
              a.window === a
                ? a
                : (s = a.ownerDocument)
                  ? s.defaultView || s.parentWindow
                  : window),
            u
              ? ((u = r),
                null !== (c = (c = n.relatedTarget || n.toElement) ? Ie(c) : null) &&
                  ((f = l(c)), (d = c.tag), c !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                  (c = null))
              : ((u = null), (c = r)),
            u !== c))
        ) {
          if (
            ((d = nn),
            (y = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (m = 'mouse'),
            ('pointerout' !== e && 'pointerover' !== e) ||
              ((d = mn), (y = 'onPointerLeave'), (h = 'onPointerEnter'), (m = 'pointer')),
            (f = null == u ? s : qe(u)),
            (p = null == c ? s : qe(c)),
            ((s = new d(y, m + 'leave', u, n, a)).target = f),
            (s.relatedTarget = p),
            (y = null),
            Ie(a) === r &&
              (((d = new d(h, m + 'enter', c, n, a)).target = p), (d.relatedTarget = f), (y = d)),
            (f = y),
            u && c)
          )
            e: {
              for (h = c, m = 0, p = d = u; p; p = Kc(p)) m++;
              for (p = 0, y = h; y; y = Kc(y)) p++;
              for (; 0 < m - p; ) ((d = Kc(d)), m--);
              for (; 0 < p - m; ) ((h = Kc(h)), p--);
              for (; m--; ) {
                if (d === h || (null !== h && d === h.alternate)) break e;
                ((d = Kc(d)), (h = Kc(h)));
              }
              d = null;
            }
          else d = null;
          (null !== u && Yc(i, s, u, d, !1), null !== c && null !== f && Yc(i, f, c, d, !0));
        }
        if (
          'select' === (u = (s = r ? qe(r) : window).nodeName && s.nodeName.toLowerCase()) ||
          ('input' === u && 'file' === s.type)
        )
          var v = Fn;
        else if (Nn(s))
          if (jn) v = Vn;
          else {
            v = Bn;
            var g = Wn;
          }
        else
          !(u = s.nodeName) ||
          'input' !== u.toLowerCase() ||
          ('checkbox' !== s.type && 'radio' !== s.type)
            ? r && Ct(r.elementType) && (v = Fn)
            : (v = Qn);
        switch (
          (v && (v = v(e, r))
            ? _n(i, v, n, a)
            : (g && g(e, s, r),
              'focusout' === e &&
                r &&
                'number' === s.type &&
                null != r.memoizedProps.value &&
                vt(s, 'number', s.value)),
          (g = r ? qe(r) : window),
          e)
        ) {
          case 'focusin':
            (Nn(g) || 'true' === g.contentEditable) && ((nr = g), (rr = r), (ar = null));
            break;
          case 'focusout':
            ar = rr = nr = null;
            break;
          case 'mousedown':
            lr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((lr = !1), or(i, n, a));
            break;
          case 'selectionchange':
            if (tr) break;
          case 'keydown':
          case 'keyup':
            or(i, n, a);
        }
        var b;
        if (kn)
          e: {
            switch (e) {
              case 'compositionstart':
                var w = 'onCompositionStart';
                break e;
              case 'compositionend':
                w = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                w = 'onCompositionUpdate';
                break e;
            }
            w = void 0;
          }
        else
          Rn
            ? Ln(e, n) && (w = 'onCompositionEnd')
            : 'keydown' === e && 229 === n.keyCode && (w = 'onCompositionStart');
        (w &&
          (En &&
            'ko' !== n.locale &&
            (Rn || 'onCompositionStart' !== w
              ? 'onCompositionEnd' === w && Rn && (b = Ht())
              : ((Ut = 'value' in (It = a) ? It.value : It.textContent), (Rn = !0))),
          0 < (g = Vc(r, w)).length &&
            ((w = new sn(w, e, null, n, a)),
            i.push({ event: w, listeners: g }),
            b ? (w.data = b) : null !== (b = zn(n)) && (w.data = b))),
          (b = xn
            ? (function (e, t) {
                switch (e) {
                  case 'compositionend':
                    return zn(t);
                  case 'keypress':
                    return 32 !== t.which ? null : ((Pn = !0), Cn);
                  case 'textInput':
                    return (e = t.data) === Cn && Pn ? null : e;
                  default:
                    return null;
                }
              })(e, n)
            : (function (e, t) {
                if (Rn)
                  return 'compositionend' === e || (!kn && Ln(e, t))
                    ? ((e = Ht()), (qt = Ut = It = null), (Rn = !1), e)
                    : null;
                switch (e) {
                  case 'paste':
                  default:
                    return null;
                  case 'keypress':
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                      if (t.char && 1 < t.char.length) return t.char;
                      if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                  case 'compositionend':
                    return En && 'ko' !== t.locale ? null : t.data;
                }
              })(e, n)) &&
            0 < (w = Vc(r, 'onBeforeInput')).length &&
            ((g = new sn('onBeforeInput', 'beforeinput', null, n, a)),
            i.push({ event: g, listeners: w }),
            (g.data = b)),
          (function (e, t, n, r, a) {
            if ('submit' === t && n && n.stateNode === a) {
              var l = Mc((a[_e] || null).action),
                o = r.submitter;
              o &&
                null !==
                  (t = (t = o[_e] || null) ? Mc(t.formAction) : o.getAttribute('formAction')) &&
                ((l = t), (o = null));
              var i = new Jt('action', 'action', null, r, a);
              e.push({
                event: i,
                listeners: [
                  {
                    instance: null,
                    listener: function () {
                      if (r.defaultPrevented) {
                        if (0 !== Ec) {
                          var e = o ? Dc(a, o) : new FormData(a);
                          Do(n, { pending: !0, data: e, method: a.method, action: l }, null, e);
                        }
                      } else
                        'function' == typeof l &&
                          (i.preventDefault(),
                          (e = o ? Dc(a, o) : new FormData(a)),
                          Do(n, { pending: !0, data: e, method: a.method, action: l }, l, e));
                    },
                    currentTarget: a,
                  },
                ],
              });
            }
          })(i, e, r, n, a));
      }
      $c(i, t);
    });
  }
  function Qc(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Vc(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
      var a = e,
        l = a.stateNode;
      if (
        ((5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
          null === l ||
          (null != (a = At(e, n)) && r.unshift(Qc(e, a, l)),
          null != (a = At(e, t)) && r.push(Qc(e, a, l))),
        3 === e.tag)
      )
        return r;
      e = e.return;
    }
    return [];
  }
  function Kc(e) {
    if (null === e) return null;
    do {
      e = e.return;
    } while (e && 5 !== e.tag && 27 !== e.tag);
    return e || null;
  }
  function Yc(e, t, n, r, a) {
    for (var l = t._reactName, o = []; null !== n && n !== r; ) {
      var i = n,
        s = i.alternate,
        u = i.stateNode;
      if (((i = i.tag), null !== s && s === r)) break;
      ((5 !== i && 26 !== i && 27 !== i) ||
        null === u ||
        ((s = u),
        a
          ? null != (u = At(n, l)) && o.unshift(Qc(n, u, s))
          : a || (null != (u = At(n, l)) && o.push(Qc(n, u, s)))),
        (n = n.return));
    }
    0 !== o.length && e.push({ event: t, listeners: o });
  }
  var Gc = /\r\n?/g,
    Xc = /\u0000|\uFFFD/g;
  function Jc(e) {
    return ('string' == typeof e ? e : '' + e).replace(Gc, '\n').replace(Xc, '');
  }
  function Zc(e, t) {
    return ((t = Jc(t)), Jc(e) === t);
  }
  function ed() {}
  function td(e, t, n, a, l, o) {
    switch (n) {
      case 'children':
        'string' == typeof a
          ? 'body' === t || ('textarea' === t && '' === a) || kt(e, a)
          : ('number' == typeof a || 'bigint' == typeof a) && 'body' !== t && kt(e, '' + a);
        break;
      case 'className':
        tt(e, 'class', a);
        break;
      case 'tabIndex':
        tt(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        tt(e, n, a);
        break;
      case 'style':
        Et(e, a, o);
        break;
      case 'data':
        if ('object' !== t) {
          tt(e, 'data', a);
          break;
        }
      case 'src':
      case 'href':
        if ('' === a && ('a' !== t || 'href' !== n)) {
          e.removeAttribute(n);
          break;
        }
        if (null == a || 'function' == typeof a || 'symbol' == typeof a || 'boolean' == typeof a) {
          e.removeAttribute(n);
          break;
        }
        ((a = zt('' + a)), e.setAttribute(n, a));
        break;
      case 'action':
      case 'formAction':
        if ('function' == typeof a) {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        }
        if (
          ('function' == typeof o &&
            ('formAction' === n
              ? ('input' !== t && td(e, t, 'name', l.name, l, null),
                td(e, t, 'formEncType', l.formEncType, l, null),
                td(e, t, 'formMethod', l.formMethod, l, null),
                td(e, t, 'formTarget', l.formTarget, l, null))
              : (td(e, t, 'encType', l.encType, l, null),
                td(e, t, 'method', l.method, l, null),
                td(e, t, 'target', l.target, l, null))),
          null == a || 'symbol' == typeof a || 'boolean' == typeof a)
        ) {
          e.removeAttribute(n);
          break;
        }
        ((a = zt('' + a)), e.setAttribute(n, a));
        break;
      case 'onClick':
        null != a && (e.onclick = ed);
        break;
      case 'onScroll':
        null != a && Ic('scroll', e);
        break;
      case 'onScrollEnd':
        null != a && Ic('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (null != a) {
          if ('object' != typeof a || !('__html' in a)) throw Error(r(61));
          if (null != (n = a.__html)) {
            if (null != l.children) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'multiple':
        e.multiple = a && 'function' != typeof a && 'symbol' != typeof a;
        break;
      case 'muted':
        e.muted = a && 'function' != typeof a && 'symbol' != typeof a;
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (null == a || 'function' == typeof a || 'boolean' == typeof a || 'symbol' == typeof a) {
          e.removeAttribute('xlink:href');
          break;
        }
        ((n = zt('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        null != a && 'function' != typeof a && 'symbol' != typeof a
          ? e.setAttribute(n, '' + a)
          : e.removeAttribute(n);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && 'function' != typeof a && 'symbol' != typeof a
          ? e.setAttribute(n, '')
          : e.removeAttribute(n);
        break;
      case 'capture':
      case 'download':
        !0 === a
          ? e.setAttribute(n, '')
          : !1 !== a && null != a && 'function' != typeof a && 'symbol' != typeof a
            ? e.setAttribute(n, a)
            : e.removeAttribute(n);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        null != a && 'function' != typeof a && 'symbol' != typeof a && !isNaN(a) && 1 <= a
          ? e.setAttribute(n, a)
          : e.removeAttribute(n);
        break;
      case 'rowSpan':
      case 'start':
        null == a || 'function' == typeof a || 'symbol' == typeof a || isNaN(a)
          ? e.removeAttribute(n)
          : e.setAttribute(n, a);
        break;
      case 'popover':
        (Ic('beforetoggle', e), Ic('toggle', e), et(e, 'popover', a));
        break;
      case 'xlinkActuate':
        nt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        nt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        nt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        nt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        nt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        nt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        nt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        nt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        nt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        et(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || ('o' !== n[0] && 'O' !== n[0]) || ('n' !== n[1] && 'N' !== n[1])) &&
          et(e, (n = Pt.get(n) || n), a);
    }
  }
  function nd(e, t, n, a, l, o) {
    switch (n) {
      case 'style':
        Et(e, a, o);
        break;
      case 'dangerouslySetInnerHTML':
        if (null != a) {
          if ('object' != typeof a || !('__html' in a)) throw Error(r(61));
          if (null != (n = a.__html)) {
            if (null != l.children) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'children':
        'string' == typeof a
          ? kt(e, a)
          : ('number' == typeof a || 'bigint' == typeof a) && kt(e, '' + a);
        break;
      case 'onScroll':
        null != a && Ic('scroll', e);
        break;
      case 'onScrollEnd':
        null != a && Ic('scrollend', e);
        break;
      case 'onClick':
        null != a && (e.onclick = ed);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
      case 'innerText':
      case 'textContent':
        break;
      default:
        Qe.hasOwnProperty(n) ||
          ('o' !== n[0] ||
          'n' !== n[1] ||
          ((l = n.endsWith('Capture')),
          (t = n.slice(2, l ? n.length - 7 : void 0)),
          'function' == typeof (o = null != (o = e[_e] || null) ? o[n] : null) &&
            e.removeEventListener(t, o, l),
          'function' != typeof a)
            ? n in e
              ? (e[n] = a)
              : !0 === a
                ? e.setAttribute(n, '')
                : et(e, n, a)
            : ('function' != typeof o &&
                null !== o &&
                (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
              e.addEventListener(t, a, l)));
    }
  }
  function rd(e, t, n) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (Ic('error', e), Ic('load', e));
        var a,
          l = !1,
          o = !1;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var i = n[a];
            if (null != i)
              switch (a) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  o = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(r(137, t));
                default:
                  td(e, t, a, i, n, null);
              }
          }
        return (
          o && td(e, t, 'srcSet', n.srcSet, n, null),
          void (l && td(e, t, 'src', n.src, n, null))
        );
      case 'input':
        Ic('invalid', e);
        var s = (a = i = o = null),
          u = null,
          c = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var d = n[l];
            if (null != d)
              switch (l) {
                case 'name':
                  o = d;
                  break;
                case 'type':
                  i = d;
                  break;
                case 'checked':
                  u = d;
                  break;
                case 'defaultChecked':
                  c = d;
                  break;
                case 'value':
                  a = d;
                  break;
                case 'defaultValue':
                  s = d;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (null != d) throw Error(r(137, t));
                  break;
                default:
                  td(e, t, l, d, n, null);
              }
          }
        return (yt(e, a, s, u, c, i, o, !1), void ct(e));
      case 'select':
        for (o in (Ic('invalid', e), (l = i = a = null), n))
          if (n.hasOwnProperty(o) && null != (s = n[o]))
            switch (o) {
              case 'value':
                a = s;
                break;
              case 'defaultValue':
                i = s;
                break;
              case 'multiple':
                l = s;
              default:
                td(e, t, o, s, n, null);
            }
        return (
          (t = a),
          (n = i),
          (e.multiple = !!l),
          void (null != t ? gt(e, !!l, t, !1) : null != n && gt(e, !!l, n, !0))
        );
      case 'textarea':
        for (i in (Ic('invalid', e), (a = o = l = null), n))
          if (n.hasOwnProperty(i) && null != (s = n[i]))
            switch (i) {
              case 'value':
                l = s;
                break;
              case 'defaultValue':
                o = s;
                break;
              case 'children':
                a = s;
                break;
              case 'dangerouslySetInnerHTML':
                if (null != s) throw Error(r(91));
                break;
              default:
                td(e, t, i, s, n, null);
            }
        return (wt(e, l, o, a), void ct(e));
      case 'option':
        for (u in n)
          if (n.hasOwnProperty(u) && null != (l = n[u]))
            if ('selected' === u) e.selected = l && 'function' != typeof l && 'symbol' != typeof l;
            else td(e, t, u, l, n, null);
        return;
      case 'dialog':
        (Ic('beforetoggle', e), Ic('toggle', e), Ic('cancel', e), Ic('close', e));
        break;
      case 'iframe':
      case 'object':
        Ic('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Fc.length; l++) Ic(Fc[l], e);
        break;
      case 'image':
        (Ic('error', e), Ic('load', e));
        break;
      case 'details':
        Ic('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Ic('error', e), Ic('load', e));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (c in n)
          if (n.hasOwnProperty(c) && null != (l = n[c]))
            switch (c) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(r(137, t));
              default:
                td(e, t, c, l, n, null);
            }
        return;
      default:
        if (Ct(t)) {
          for (d in n) n.hasOwnProperty(d) && void 0 !== (l = n[d]) && nd(e, t, d, l, n, void 0);
          return;
        }
    }
    for (s in n) n.hasOwnProperty(s) && null != (l = n[s]) && td(e, t, s, l, n, null);
  }
  var ad = null,
    ld = null;
  function od(e) {
    return 9 === e.nodeType ? e : e.ownerDocument;
  }
  function id(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function sd(e, t) {
    if (0 === e)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return 1 === e && 'foreignObject' === t ? 0 : e;
  }
  function ud(e, t) {
    return (
      'textarea' === e ||
      'noscript' === e ||
      'string' == typeof t.children ||
      'number' == typeof t.children ||
      'bigint' == typeof t.children ||
      ('object' == typeof t.dangerouslySetInnerHTML &&
        null !== t.dangerouslySetInnerHTML &&
        null != t.dangerouslySetInnerHTML.__html)
    );
  }
  var cd = null;
  var dd = 'function' == typeof setTimeout ? setTimeout : void 0,
    fd = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    hd = 'function' == typeof Promise ? Promise : void 0,
    pd =
      'function' == typeof queueMicrotask
        ? queueMicrotask
        : void 0 !== hd
          ? function (e) {
              return hd.resolve(null).then(e).catch(md);
            }
          : dd;
  function md(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function yd(e) {
    return 'head' === e;
  }
  function vd(e, t) {
    var n = t,
      r = 0,
      a = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && 8 === l.nodeType))
        if ('/$' === (n = l.data)) {
          if (0 < r && 8 > r) {
            n = r;
            var o = e.ownerDocument;
            if ((1 & n && Ed(o.documentElement), 2 & n && Ed(o.body), 4 & n))
              for (Ed((n = o.head)), o = n.firstChild; o; ) {
                var i = o.nextSibling,
                  s = o.nodeName;
                (o[je] ||
                  'SCRIPT' === s ||
                  'STYLE' === s ||
                  ('LINK' === s && 'stylesheet' === o.rel.toLowerCase()) ||
                  n.removeChild(o),
                  (o = i));
              }
          }
          if (0 === a) return (e.removeChild(l), void Nf(t));
          a--;
        } else '$' === n || '$?' === n || '$!' === n ? a++ : (r = n.charCodeAt(0) - 48);
      else r = 0;
      n = l;
    } while (n);
    Nf(t);
  }
  function gd(e) {
    var t = e.firstChild;
    for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (gd(n), $e(n));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if ('stylesheet' === n.rel.toLowerCase()) continue;
      }
      e.removeChild(n);
    }
  }
  function bd(e) {
    return '$!' === e.data || ('$?' === e.data && 'complete' === e.ownerDocument.readyState);
  }
  function wd(e) {
    for (; null != e; e = e.nextSibling) {
      var t = e.nodeType;
      if (1 === t || 3 === t) break;
      if (8 === t) {
        if ('$' === (t = e.data) || '$!' === t || '$?' === t || 'F!' === t || 'F' === t) break;
        if ('/$' === t) return null;
      }
    }
    return e;
  }
  var kd = null;
  function Sd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (8 === e.nodeType) {
        var n = e.data;
        if ('$' === n || '$!' === n || '$?' === n) {
          if (0 === t) return e;
          t--;
        } else '/$' === n && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function xd(e, t, n) {
    switch (((t = od(n)), e)) {
      case 'html':
        if (!(e = t.documentElement)) throw Error(r(452));
        return e;
      case 'head':
        if (!(e = t.head)) throw Error(r(453));
        return e;
      case 'body':
        if (!(e = t.body)) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function Ed(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    $e(e);
  }
  var Cd = new Map(),
    Pd = new Set();
  function Ld(e) {
    return 'function' == typeof e.getRootNode
      ? e.getRootNode()
      : 9 === e.nodeType
        ? e
        : e.ownerDocument;
  }
  var zd = _.d;
  _.d = {
    f: function () {
      var e = zd.f(),
        t = Wu();
      return e || t;
    },
    r: function (e) {
      var t = Ue(e);
      null !== t && 5 === t.tag && 'form' === t.type ? Ao(t) : zd.r(e);
    },
    D: function (e) {
      (zd.D(e), Td('dns-prefetch', e, null));
    },
    C: function (e, t) {
      (zd.C(e, t), Td('preconnect', e, t));
    },
    L: function (e, t, n) {
      zd.L(e, t, n);
      var r = Rd;
      if (r && e && t) {
        var a = 'link[rel="preload"][as="' + pt(t) + '"]';
        'image' === t && n && n.imageSrcSet
          ? ((a += '[imagesrcset="' + pt(n.imageSrcSet) + '"]'),
            'string' == typeof n.imageSizes && (a += '[imagesizes="' + pt(n.imageSizes) + '"]'))
          : (a += '[href="' + pt(e) + '"]');
        var l = a;
        switch (t) {
          case 'style':
            l = _d(e);
            break;
          case 'script':
            l = Od(e);
        }
        Cd.has(l) ||
          ((e = u(
            { rel: 'preload', href: 'image' === t && n && n.imageSrcSet ? void 0 : e, as: t },
            n,
          )),
          Cd.set(l, e),
          null !== r.querySelector(a) ||
            ('style' === t && r.querySelector(Md(l))) ||
            ('script' === t && r.querySelector(Ad(l))) ||
            (rd((t = r.createElement('link')), 'link', e), We(t), r.head.appendChild(t)));
      }
    },
    m: function (e, t) {
      zd.m(e, t);
      var n = Rd;
      if (n && e) {
        var r = t && 'string' == typeof t.as ? t.as : 'script',
          a = 'link[rel="modulepreload"][as="' + pt(r) + '"][href="' + pt(e) + '"]',
          l = a;
        switch (r) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            l = Od(e);
        }
        if (
          !Cd.has(l) &&
          ((e = u({ rel: 'modulepreload', href: e }, t)), Cd.set(l, e), null === n.querySelector(a))
        ) {
          switch (r) {
            case 'audioworklet':
            case 'paintworklet':
            case 'serviceworker':
            case 'sharedworker':
            case 'worker':
            case 'script':
              if (n.querySelector(Ad(l))) return;
          }
          (rd((r = n.createElement('link')), 'link', e), We(r), n.head.appendChild(r));
        }
      }
    },
    X: function (e, t) {
      zd.X(e, t);
      var n = Rd;
      if (n && e) {
        var r = He(n).hoistableScripts,
          a = Od(e),
          l = r.get(a);
        l ||
          ((l = n.querySelector(Ad(a))) ||
            ((e = u({ src: e, async: !0 }, t)),
            (t = Cd.get(a)) && Id(e, t),
            We((l = n.createElement('script'))),
            rd(l, 'link', e),
            n.head.appendChild(l)),
          (l = { type: 'script', instance: l, count: 1, state: null }),
          r.set(a, l));
      }
    },
    S: function (e, t, n) {
      zd.S(e, t, n);
      var r = Rd;
      if (r && e) {
        var a = He(r).hoistableStyles,
          l = _d(e);
        t = t || 'default';
        var o = a.get(l);
        if (!o) {
          var i = { loading: 0, preload: null };
          if ((o = r.querySelector(Md(l)))) i.loading = 5;
          else {
            ((e = u({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
              (n = Cd.get(l)) && $d(e, n));
            var s = (o = r.createElement('link'));
            (We(s),
              rd(s, 'link', e),
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              s.addEventListener('load', function () {
                i.loading |= 1;
              }),
              s.addEventListener('error', function () {
                i.loading |= 2;
              }),
              (i.loading |= 4),
              jd(o, t, r));
          }
          ((o = { type: 'stylesheet', instance: o, count: 1, state: i }), a.set(l, o));
        }
      }
    },
    M: function (e, t) {
      zd.M(e, t);
      var n = Rd;
      if (n && e) {
        var r = He(n).hoistableScripts,
          a = Od(e),
          l = r.get(a);
        l ||
          ((l = n.querySelector(Ad(a))) ||
            ((e = u({ src: e, async: !0, type: 'module' }, t)),
            (t = Cd.get(a)) && Id(e, t),
            We((l = n.createElement('script'))),
            rd(l, 'link', e),
            n.head.appendChild(l)),
          (l = { type: 'script', instance: l, count: 1, state: null }),
          r.set(a, l));
      }
    },
  };
  var Rd = 'undefined' == typeof document ? null : document;
  function Td(e, t, n) {
    var r = Rd;
    if (r && 'string' == typeof t && t) {
      var a = pt(t);
      ((a = 'link[rel="' + e + '"][href="' + a + '"]'),
        'string' == typeof n && (a += '[crossorigin="' + n + '"]'),
        Pd.has(a) ||
          (Pd.add(a),
          (e = { rel: e, crossOrigin: n, href: t }),
          null === r.querySelector(a) &&
            (rd((t = r.createElement('link')), 'link', e), We(t), r.head.appendChild(t))));
    }
  }
  function Nd(e, t, n, a) {
    var l,
      o,
      i,
      s,
      u = (u = U.current) ? Ld(u) : null;
    if (!u) throw Error(r(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return 'string' == typeof n.precedence && 'string' == typeof n.href
          ? ((t = _d(n.href)),
            (a = (n = He(u).hoistableStyles).get(t)) ||
              ((a = { type: 'style', instance: null, count: 0, state: null }), n.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          'stylesheet' === n.rel &&
          'string' == typeof n.href &&
          'string' == typeof n.precedence
        ) {
          e = _d(n.href);
          var c = He(u).hoistableStyles,
            d = c.get(e);
          if (
            (d ||
              ((u = u.ownerDocument || u),
              (d = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(e, d),
              (c = u.querySelector(Md(e))) && !c._p && ((d.instance = c), (d.state.loading = 5)),
              Cd.has(e) ||
                ((n = {
                  rel: 'preload',
                  as: 'style',
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Cd.set(e, n),
                c ||
                  ((l = u),
                  (o = e),
                  (i = n),
                  (s = d.state),
                  l.querySelector('link[rel="preload"][as="style"][' + o + ']')
                    ? (s.loading = 1)
                    : ((o = l.createElement('link')),
                      (s.preload = o),
                      o.addEventListener('load', function () {
                        return (s.loading |= 1);
                      }),
                      o.addEventListener('error', function () {
                        return (s.loading |= 2);
                      }),
                      rd(o, 'link', i),
                      We(o),
                      l.head.appendChild(o))))),
            t && null === a)
          )
            throw Error(r(528, ''));
          return d;
        }
        if (t && null !== a) throw Error(r(529, ''));
        return null;
      case 'script':
        return (
          (t = n.async),
          'string' == typeof (n = n.src) && t && 'function' != typeof t && 'symbol' != typeof t
            ? ((t = Od(n)),
              (a = (n = He(u).hoistableScripts).get(t)) ||
                ((a = { type: 'script', instance: null, count: 0, state: null }), n.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, e));
    }
  }
  function _d(e) {
    return 'href="' + pt(e) + '"';
  }
  function Md(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Dd(e) {
    return u({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Od(e) {
    return '[src="' + pt(e) + '"]';
  }
  function Ad(e) {
    return 'script[async]' + e;
  }
  function Fd(e, t, n) {
    if ((t.count++, null === t.instance))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + pt(n.href) + '"]');
          if (a) return ((t.instance = a), We(a), a);
          var l = u({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            We((a = (e.ownerDocument || e).createElement('style'))),
            rd(a, 'style', l),
            jd(a, n.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          l = _d(n.href);
          var o = e.querySelector(Md(l));
          if (o) return ((t.state.loading |= 4), (t.instance = o), We(o), o);
          ((a = Dd(n)),
            (l = Cd.get(l)) && $d(a, l),
            We((o = (e.ownerDocument || e).createElement('link'))));
          var i = o;
          return (
            (i._p = new Promise(function (e, t) {
              ((i.onload = e), (i.onerror = t));
            })),
            rd(o, 'link', a),
            (t.state.loading |= 4),
            jd(o, n.precedence, e),
            (t.instance = o)
          );
        case 'script':
          return (
            (o = Od(n.src)),
            (l = e.querySelector(Ad(o)))
              ? ((t.instance = l), We(l), l)
              : ((a = n),
                (l = Cd.get(o)) && Id((a = u({}, n)), l),
                We((l = (e = e.ownerDocument || e).createElement('script'))),
                rd(l, 'link', a),
                e.head.appendChild(l),
                (t.instance = l))
          );
        case 'void':
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      'stylesheet' === t.type &&
        !(4 & t.state.loading) &&
        ((a = t.instance), (t.state.loading |= 4), jd(a, n.precedence, e));
    return t.instance;
  }
  function jd(e, t, n) {
    for (
      var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        a = r.length ? r[r.length - 1] : null,
        l = a,
        o = 0;
      o < r.length;
      o++
    ) {
      var i = r[o];
      if (i.dataset.precedence === t) l = i;
      else if (l !== a) break;
    }
    l
      ? l.parentNode.insertBefore(e, l.nextSibling)
      : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
  }
  function $d(e, t) {
    (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
      null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
      null == e.title && (e.title = t.title));
  }
  function Id(e, t) {
    (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
      null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
      null == e.integrity && (e.integrity = t.integrity));
  }
  var Ud = null;
  function qd(e, t, n) {
    if (null === Ud) {
      var r = new Map(),
        a = (Ud = new Map());
      a.set(n, r);
    } else (r = (a = Ud).get(n)) || ((r = new Map()), a.set(n, r));
    if (r.has(e)) return r;
    for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var l = n[a];
      if (
        !(l[je] || l[Ne] || ('link' === e && 'stylesheet' === l.getAttribute('rel'))) &&
        'http://www.w3.org/2000/svg' !== l.namespaceURI
      ) {
        var o = l.getAttribute(t) || '';
        o = e + o;
        var i = r.get(o);
        i ? i.push(l) : r.set(o, [l]);
      }
    }
    return r;
  }
  function Hd(e, t, n) {
    (e = e.ownerDocument || e).head.insertBefore(
      n,
      'title' === t ? e.querySelector('head > title') : null,
    );
  }
  function Wd(e) {
    return !!('stylesheet' !== e.type || 3 & e.state.loading);
  }
  var Bd = null;
  function Qd() {}
  function Vd() {
    if ((this.count--, 0 === this.count))
      if (this.stylesheets) Yd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
  }
  var Kd = null;
  function Yd(e, t) {
    ((e.stylesheets = null),
      null !== e.unsuspend &&
        (e.count++, (Kd = new Map()), t.forEach(Gd, e), (Kd = null), Vd.call(e)));
  }
  function Gd(e, t) {
    if (!(4 & t.state.loading)) {
      var n = Kd.get(e);
      if (n) var r = n.get(null);
      else {
        ((n = new Map()), Kd.set(e, n));
        for (
          var a = e.querySelectorAll('link[data-precedence],style[data-precedence]'), l = 0;
          l < a.length;
          l++
        ) {
          var o = a[l];
          ('LINK' !== o.nodeName && 'not all' === o.getAttribute('media')) ||
            (n.set(o.dataset.precedence, o), (r = o));
        }
        r && n.set(null, r);
      }
      ((o = (a = t.instance).getAttribute('data-precedence')),
        (l = n.get(o) || r) === r && n.set(null, a),
        n.set(o, a),
        this.count++,
        (r = Vd.bind(this)),
        a.addEventListener('load', r),
        a.addEventListener('error', r),
        l
          ? l.parentNode.insertBefore(a, l.nextSibling)
          : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild),
        (t.state.loading |= 4));
    }
  }
  var Xd = {
    $$typeof: g,
    Provider: null,
    Consumer: null,
    _currentValue: M,
    _currentValue2: M,
    _threadCount: 0,
  };
  function Jd(e, t, n, r, a, l, o, i) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = xe(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = xe(0)),
      (this.hiddenUpdates = xe(null)),
      (this.identifierPrefix = r),
      (this.onUncaughtError = a),
      (this.onCaughtError = l),
      (this.onRecoverableError = o),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map()));
  }
  function Zd(e, t, n, r, a, l, o, i, s, u, c, d) {
    return (
      (e = new Jd(e, t, n, o, i, s, u, d)),
      (t = 1),
      !0 === l && (t |= 24),
      (l = Or(3, null, null, t)),
      (e.current = l),
      (l.stateNode = e),
      (t = Aa()).refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (l.memoizedState = { element: r, isDehydrated: n, cache: t }),
      ll(l),
      e
    );
  }
  function ef(e) {
    return e ? (e = Mr) : Mr;
  }
  function tf(e, t, n, r, a, l) {
    ((a = ef(a)),
      null === r.context ? (r.context = a) : (r.pendingContext = a),
      ((r = il(t)).payload = { element: n }),
      null !== (l = void 0 === l ? null : l) && (r.callback = l),
      null !== (n = sl(e, r, t)) && ($u(n, 0, t), ul(n, e, t)));
  }
  function nf(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
      var n = e.retryLane;
      e.retryLane = 0 !== n && n < t ? n : t;
    }
  }
  function rf(e, t) {
    (nf(e, t), (e = e.alternate) && nf(e, t));
  }
  function af(e) {
    if (13 === e.tag) {
      var t = Tr(e, 67108864);
      (null !== t && $u(t, 0, 67108864), rf(e, 67108864));
    }
  }
  var lf = !0;
  function of(e, t, n, r) {
    var a = N.T;
    N.T = null;
    var l = _.p;
    try {
      ((_.p = 2), uf(e, t, n, r));
    } finally {
      ((_.p = l), (N.T = a));
    }
  }
  function sf(e, t, n, r) {
    var a = N.T;
    N.T = null;
    var l = _.p;
    try {
      ((_.p = 8), uf(e, t, n, r));
    } finally {
      ((_.p = l), (N.T = a));
    }
  }
  function uf(e, t, n, r) {
    if (lf) {
      var a = cf(r);
      if (null === a) (Bc(e, t, r, df, n), Sf(e, r));
      else if (
        (function (e, t, n, r, a) {
          switch (t) {
            case 'focusin':
              return ((mf = xf(mf, e, t, n, r, a)), !0);
            case 'dragenter':
              return ((yf = xf(yf, e, t, n, r, a)), !0);
            case 'mouseover':
              return ((vf = xf(vf, e, t, n, r, a)), !0);
            case 'pointerover':
              var l = a.pointerId;
              return (gf.set(l, xf(gf.get(l) || null, e, t, n, r, a)), !0);
            case 'gotpointercapture':
              return ((l = a.pointerId), bf.set(l, xf(bf.get(l) || null, e, t, n, r, a)), !0);
          }
          return !1;
        })(a, e, t, n, r)
      )
        r.stopPropagation();
      else if ((Sf(e, r), 4 & t && -1 < kf.indexOf(e))) {
        for (; null !== a; ) {
          var l = Ue(a);
          if (null !== l)
            switch (l.tag) {
              case 3:
                if ((l = l.stateNode).current.memoizedState.isDehydrated) {
                  var o = ve(l.pendingLanes);
                  if (0 !== o) {
                    var i = l;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; o; ) {
                      var s = 1 << (31 - fe(o));
                      ((i.entanglements[1] |= s), (o &= ~s));
                    }
                    (Cc(l), !(6 & lu) && ((Cu = ee() + 500), Pc(0)));
                  }
                }
                break;
              case 13:
                (null !== (i = Tr(l, 2)) && $u(i, 0, 2), Wu(), rf(l, 2));
            }
          if ((null === (l = cf(r)) && Bc(e, t, r, df, n), l === a)) break;
          a = l;
        }
        null !== a && r.stopPropagation();
      } else Bc(e, t, r, null, n);
    }
  }
  function cf(e) {
    return ff((e = Tt(e)));
  }
  var df = null;
  function ff(e) {
    if (((df = null), null !== (e = Ie(e)))) {
      var t = l(e);
      if (null === t) e = null;
      else {
        var n = t.tag;
        if (13 === n) {
          if (null !== (e = o(t))) return e;
          e = null;
        } else if (3 === n) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return 3 === t.tag ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((df = e), null);
  }
  function hf(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (te()) {
          case ne:
            return 2;
          case re:
            return 8;
          case ae:
          case le:
            return 32;
          case oe:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var pf = !1,
    mf = null,
    yf = null,
    vf = null,
    gf = new Map(),
    bf = new Map(),
    wf = [],
    kf =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function Sf(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        mf = null;
        break;
      case 'dragenter':
      case 'dragleave':
        yf = null;
        break;
      case 'mouseover':
      case 'mouseout':
        vf = null;
        break;
      case 'pointerover':
      case 'pointerout':
        gf.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        bf.delete(t.pointerId);
    }
  }
  function xf(e, t, n, r, a, l) {
    return null === e || e.nativeEvent !== l
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: l,
          targetContainers: [a],
        }),
        null !== t && null !== (t = Ue(t)) && af(t),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        null !== a && -1 === t.indexOf(a) && t.push(a),
        e);
  }
  function Ef(e) {
    var t = Ie(e.target);
    if (null !== t) {
      var n = l(t);
      if (null !== n)
        if (13 === (t = n.tag)) {
          if (null !== (t = o(n)))
            return (
              (e.blockedOn = t),
              void (function (e, t) {
                var n = _.p;
                try {
                  return ((_.p = e), t());
                } finally {
                  _.p = n;
                }
              })(e.priority, function () {
                if (13 === n.tag) {
                  var e = Fu();
                  e = Le(e);
                  var t = Tr(n, e);
                  (null !== t && $u(t, 0, e), rf(n, e));
                }
              })
            );
        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
          return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
  }
  function Cf(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = cf(e.nativeEvent);
      if (null !== n) return (null !== (t = Ue(n)) && af(t), (e.blockedOn = n), !1);
      var r = new (n = e.nativeEvent).constructor(n.type, n);
      ((Rt = r), n.target.dispatchEvent(r), (Rt = null), t.shift());
    }
    return !0;
  }
  function Pf(e, t, n) {
    Cf(e) && n.delete(t);
  }
  function Lf() {
    ((pf = !1),
      null !== mf && Cf(mf) && (mf = null),
      null !== yf && Cf(yf) && (yf = null),
      null !== vf && Cf(vf) && (vf = null),
      gf.forEach(Pf),
      bf.forEach(Pf));
  }
  function zf(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      pf || ((pf = !0), e.unstable_scheduleCallback(e.unstable_NormalPriority, Lf)));
  }
  var Rf = null;
  function Tf(t) {
    Rf !== t &&
      ((Rf = t),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        Rf === t && (Rf = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            r = t[e + 1],
            a = t[e + 2];
          if ('function' != typeof r) {
            if (null === ff(r || n)) continue;
            break;
          }
          var l = Ue(n);
          null !== l &&
            (t.splice(e, 3),
            (e -= 3),
            Do(l, { pending: !0, data: a, method: n.method, action: r }, r, a));
        }
      }));
  }
  function Nf(e) {
    function t(t) {
      return zf(t, e);
    }
    (null !== mf && zf(mf, e),
      null !== yf && zf(yf, e),
      null !== vf && zf(vf, e),
      gf.forEach(t),
      bf.forEach(t));
    for (var n = 0; n < wf.length; n++) {
      var r = wf[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < wf.length && null === (n = wf[0]).blockedOn; )
      (Ef(n), null === n.blockedOn && wf.shift());
    if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
      for (r = 0; r < n.length; r += 3) {
        var a = n[r],
          l = n[r + 1],
          o = a[_e] || null;
        if ('function' == typeof l) o || Tf(n);
        else if (o) {
          var i = null;
          if (l && l.hasAttribute('formAction')) {
            if (((a = l), (o = l[_e] || null))) i = o.formAction;
            else if (null !== ff(a)) continue;
          } else i = o.action;
          ('function' == typeof i ? (n[r + 1] = i) : (n.splice(r, 3), (r -= 3)), Tf(n));
        }
      }
  }
  function _f(e) {
    this._internalRoot = e;
  }
  function Mf(e) {
    this._internalRoot = e;
  }
  ((Mf.prototype.render = _f.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (null === t) throw Error(r(409));
      tf(t.current, Fu(), e, t, null, null);
    }),
    (Mf.prototype.unmount = _f.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (tf(e.current, 2, null, e, null, null), Wu(), (t[Me] = null));
        }
      }),
    (Mf.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = Re();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < wf.length && 0 !== t && t < wf[n].priority; n++);
        (wf.splice(n, 0, e), 0 === n && Ef(e));
      }
    }));
  var Df = t.version;
  if ('19.1.0' !== Df) throw Error(r(527, Df, '19.1.0'));
  _.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (void 0 === t) {
      if ('function' == typeof e.render) throw Error(r(188));
      throw ((e = Object.keys(e).join(',')), Error(r(268, e)));
    }
    return (
      (e = (function (e) {
        var t = e.alternate;
        if (!t) {
          if (null === (t = l(e))) throw Error(r(188));
          return t !== e ? null : e;
        }
        for (var n = e, a = t; ; ) {
          var o = n.return;
          if (null === o) break;
          var s = o.alternate;
          if (null === s) {
            if (null !== (a = o.return)) {
              n = a;
              continue;
            }
            break;
          }
          if (o.child === s.child) {
            for (s = o.child; s; ) {
              if (s === n) return (i(o), e);
              if (s === a) return (i(o), t);
              s = s.sibling;
            }
            throw Error(r(188));
          }
          if (n.return !== a.return) ((n = o), (a = s));
          else {
            for (var u = !1, c = o.child; c; ) {
              if (c === n) {
                ((u = !0), (n = o), (a = s));
                break;
              }
              if (c === a) {
                ((u = !0), (a = o), (n = s));
                break;
              }
              c = c.sibling;
            }
            if (!u) {
              for (c = s.child; c; ) {
                if (c === n) {
                  ((u = !0), (n = s), (a = o));
                  break;
                }
                if (c === a) {
                  ((u = !0), (a = s), (n = o));
                  break;
                }
                c = c.sibling;
              }
              if (!u) throw Error(r(189));
            }
          }
          if (n.alternate !== a) throw Error(r(190));
        }
        if (3 !== n.tag) throw Error(r(188));
        return n.stateNode.current === n ? e : t;
      })(t)),
      (e = null === (e = null !== e ? s(e) : null) ? null : e.stateNode)
    );
  };
  var Of = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: N,
    reconcilerVersion: '19.1.0',
  };
  if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var Af = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Af.isDisabled && Af.supportsFiber)
      try {
        ((ue = Af.inject(Of)), (ce = Af));
      } catch (Ff) {}
  }
  return (
    (za.createRoot = function (e, t) {
      if (!a(e)) throw Error(r(299));
      var n = !1,
        l = '',
        o = ki,
        i = Si,
        s = xi;
      return (
        null != t &&
          (!0 === t.unstable_strictMode && (n = !0),
          void 0 !== t.identifierPrefix && (l = t.identifierPrefix),
          void 0 !== t.onUncaughtError && (o = t.onUncaughtError),
          void 0 !== t.onCaughtError && (i = t.onCaughtError),
          void 0 !== t.onRecoverableError && (s = t.onRecoverableError),
          void 0 !== t.unstable_transitionCallbacks && t.unstable_transitionCallbacks),
        (t = Zd(e, 1, !1, null, 0, n, l, o, i, s, 0, null)),
        (e[Me] = t.current),
        Hc(e),
        new _f(t)
      );
    }),
    (za.hydrateRoot = function (e, t, n) {
      if (!a(e)) throw Error(r(299));
      var l = !1,
        o = '',
        i = ki,
        s = Si,
        u = xi,
        c = null;
      return (
        null != n &&
          (!0 === n.unstable_strictMode && (l = !0),
          void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
          void 0 !== n.onUncaughtError && (i = n.onUncaughtError),
          void 0 !== n.onCaughtError && (s = n.onCaughtError),
          void 0 !== n.onRecoverableError && (u = n.onRecoverableError),
          void 0 !== n.unstable_transitionCallbacks && n.unstable_transitionCallbacks,
          void 0 !== n.formState && (c = n.formState)),
        ((t = Zd(e, 1, !0, t, 0, l, o, i, s, u, 0, c)).context = ef(null)),
        (n = t.current),
        ((o = il((l = Le((l = Fu()))))).callback = null),
        sl(n, o, l),
        (n = l),
        (t.current.lanes = n),
        Ee(t, n),
        Cc(t),
        (e[Me] = t.current),
        Hc(e),
        new Mf(t)
      );
    }),
    (za.version = '19.1.0'),
    za
  );
}
(Pa ||
  ((Pa = 1),
  (function e() {
    if (
      'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {}
  })(),
  (La.exports = _a())),
La.exports)
  .createRoot(document.getElementById('root'))
  .render(te.jsx(re.StrictMode, { children: te.jsx(Sa, {}) }));
