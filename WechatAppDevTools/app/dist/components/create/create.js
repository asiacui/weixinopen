"use strict";

function _toConsumableArray(t) {
    if (Array.isArray(t)) {
        for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
        return r
    }
    return Array.from(t)
}

function init() {
    var t = require("../../lib/react.js"),
        e = require("./createoutline.js"),
        r = require("./createstep.js"),
        s = require("../../stores/projectStores.js"),
        i = (require("../../actions/projectActions.js"), require("../../stores/windowStores.js")),
        o = (require("../../cssStr/cssStr.js"), require("../../utils/newReport.js")),
        a = t.createClass({
            displayName: "Create",
            getInitialState: function() {
                var t = s.getProjectList(),
                    e = i.getUserInfo(),
                    r = !1;
                return { projectLists: t, userInfo: e, isCreate: r }
            },
            createShow: function() { o("project_open"), this.setState({ isCreate: !0 }) },
            createBack: function() { this.setState({ isCreate: !1 }) },
            _addProject: function(t) { this.setState({ projectLists: [].concat(_toConsumableArray(t)) }) },
            componentDidMount: function() { s.on("ADD_PROJECT", this._addProject) },
            componentWillUnmount: function() { s.removeListener("ADD_PROJECT", this._addProject) },
            render: function() {
                return t.createElement("div", { className: "create" }, t.createElement(e, { show: !this.state.isCreate, userInfo: this.state.userInfo, projectLists: this.state.projectLists, appQuit: this.props.appQuit, createProject: this.createProject, createShow: this.createShow, createTourist: this.createTourist, goMain: this.props.goMain }), t.createElement(r, { projectLists: this.state.projectLists, addProject: this.addProject, createBack: this.createBack, show: this.state.isCreate, goMain: this.props.goMain }))
            }
        });
    _exports = a
}
var _exports;
init(), module.exports = _exports;
