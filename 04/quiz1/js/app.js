var Header = { template: '<div>This is Header</div>' };
var Body = { template: '<div>This is a Body</div>' };
var Footer = { template: '<div>This is a Footer</div>' };

var LoginHeader = { template: '<div>This is LoginHeader</div>' };
var LoginBody = { template: '<div>This is a LoginBody</div>' };
var LoginFooter = { template: '<div>This is a LoginFooter</div>' };

var router = new VueRouter({
    routes: [
        {
            path: '/',
            components: {
                header: Header,
                default: Body,
                footer: Footer
            }
        },
        {
            path: '/login',
            components: {
                header: LoginHeader,
                default: LoginBody,
                footer: LoginFooter
            }
        }
    ]
});

var app = new Vue({
    router
}).$mount('#app');