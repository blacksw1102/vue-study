Vue.component('child-component', {
    template: '<p>{{ propsdata }}</p>',
    props: [
        'propsdata'
    ]
});

Vue.component('sibling-component', {
    template: '<p>{{ propsdata }}</p>',
    props: [
        'propsdata'
    ]
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! passed from Parent Component',
        anotherMessage: '두번째 메시지 입니다..'
    }
});