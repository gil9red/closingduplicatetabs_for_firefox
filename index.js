// TODO: ���������� ����� ������� ����� �������. ��������� ���� �������������� ������, ������
// ������� � �������� ����� �� ��������
// TODO: ������� ��������� ��� �������, ������ url
// TODO: ������ ����� ��������, � ������ ����� ���������� ���

var DEBUG = true;

function d(mess) {
    DEBUG && console.log(mess);
}

// �������������� �������
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var urls = require("sdk/url");

if (DEBUG) {
    tabs.open('http://habrahabr.ru/')
    tabs.open('http://habrahabr.ru/post/113169/')
    tabs.open('http://habrahabr.ru/')
    tabs.open('http://habrahabr.ru/post/113164/')
    tabs.open('http://habrahabr.ru/')
    tabs.open('http://habrahabr.ru/post/113164/')
    tabs.open('http://habrahabr.ru/post/113164/')
    tabs.open('https://jira.compassplus.ru/browse/TWRBS-11332?focusedCommentId=3467426#comment-3467426')
    tabs.open('https://jira.compassplus.ru/browse/TWRBS-11332')
    tabs.open('https://jira.compassplus.ru/browse/TWRBS-11332?focusedCommentId=3467426#comment-3467426')
}

var list_tab_url = [];

// ���� �� ������ �������� ����� ����������� ������� � �������� ��
buttons.ActionButton({
    id: "closing_duplicate_button",
    label: "Closing duplicate tabs",
    icon: "./icon.png",

    onClick: function () {
        for (let tab of tabs) {
            d(tab.url)
//            if (list_tab_url.indexOf(tab.url) == -1) {
//                list_tab_url.push(tab.url);
//            } else {
//                d(tab.url + " is dublicate. Close tab.");
//                tab.close();
//            }
        }

        list_tab_url = [];
    }
});