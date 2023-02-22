const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            headerLinks: headerLinks,
            addressInfo: footerLinks[0],
            information: footerLinks[1],
            extras: footerLinks[2],
            newsletter: footerLinks[3],
        };
    },

});

app.mount("#root");