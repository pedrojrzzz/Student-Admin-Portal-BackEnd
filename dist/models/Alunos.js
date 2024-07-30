function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import Sequelize, { Model } from 'sequelize';
var Aluno = /*#__PURE__*/function (_Model) {
  function Aluno() {
    _classCallCheck(this, Aluno);
    return _callSuper(this, Aluno, arguments);
  }
  _inherits(Aluno, _Model);
  return _createClass(Aluno, null, [{
    key: "init",
    value: function init(sequelize) {
      _superPropGet(Aluno, "init", this, 2)([{
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome deve conter entre 3 e 255 caracteres.'
            }
          }
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo sobrenome deve conter entre 3 e 255 caracteres.'
            }
          }
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'E-mail já existente em nosso banco de dados,'
          },
          validate: {
            isEmail: {
              msg: 'E-mail inválido.'
            }
          }
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Idade precisa ser um número inteiro.'
            }
          }
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Campo peso, precisar ser um número inteiro ou de ponto flutuante.'
            }
          }
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Campo altura, precisar ser um número inteiro ou de ponto flutuante.'
            }
          }
        }
      }, {
        sequelize: sequelize,
        tableName: 'alunos'
      }]);
      return this;
    }
  }, {
    key: "associate",
    value: function associate(models) {
      this.hasMany(models.Fotos, {
        foreignKey: 'aluno_id'
      });
    }
  }]);
}(Model);
export { Aluno as default };