(this["webpackJsonpfinal-portfolio"]=this["webpackJsonpfinal-portfolio"]||[]).push([[0],{381:function(n,e,t){"use strict";t.r(e);var r,i=t(1),o=t.n(i),a=t(44),c=t.n(a),l=t(35),s=t(6),d=t(41),b=t(7),m=t.p+"static/media/Felipe_perfil.14ee22e2.jpg",h=t(0);var j,p=b.b.nav(r||(r=Object(s.a)(['\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    border-right: 1px solid var(--border-color);\n    .avatar{\n        width: 100%;\n        border-bottom: 1px solid var(--border-color);\n        text-align: center;\n        padding: 1rem 0;\n        img{\n            width: 70%;\n            border-radius: 50%;\n            border: 8px solid var(--border-color);\n        }\n    }\n\n    .nav-items{\n        width: 100%;\n        text-align: center;\n        .active-class{\n            background-color: var(--primary-color-light);\n            color: white;\n        }\n        li{\n            display: block;\n            a{\n                display: block;\n                padding: .45rem 0;\n                position: relative;\n                z-index: 10;\n                text-transform: uppercase;\n                transition: all .4s ease-in-out;\n                font-weight: 600;\n                letter-spacing: 1px;\n                &:hover{\n                    cursor: pointer;\n                    color: var(--white-color);\n                }\n                &::before{\n                    content: "";\n                    position: absolute;\n                    bottom: 0;\n                    left: 0;\n                    width: 0;\n                    height: 50%;\n                    background-color: var( --primary-color);\n                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;\n                    opacity: 0.21;\n                    z-index: -1;\n                }\n            }\n\n            a:hover::before{\n                width: 100%;\n                height: 100%;\n            }\n        }\n    }\n\n    footer{\n        border-top: 1px solid var(--border-color);\n        width: 100%;\n        p{\n            padding: 1.3rem 0;\n            font-size: 1.1rem;\n            display: block;\n            text-align: center;\n        }\n    }\n']))),g=function(){return Object(h.jsxs)(p,{children:[Object(h.jsx)("div",{className:"avatar",children:Object(h.jsx)("img",{src:m,alt:""})}),Object(h.jsxs)("ul",{className:"nav-items",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(l.b,{to:"/",activeClassName:"active-class",exact:!0,children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(l.b,{to:"/about",activeClassName:"active-class",exact:!0,children:"Sobre"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(l.b,{to:"/resume",activeClassName:"active-class",exact:!0,children:"Skills"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(l.b,{to:"/portfolios",activeClassName:"active-class",exact:!0,children:"Portfolios"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(l.b,{to:"/blogs",activeClassName:"active-class",exact:!0,children:"Blogs"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(l.b,{to:"/contact",activeClassName:"active-class",exact:!0,children:"Contato"})})]}),Object(h.jsx)("footer",{className:"footer",children:Object(h.jsxs)("p",{children:["  @2021 ",Object(h.jsxs)("b",{children:[" ",Object(h.jsxs)("a",{href:"",children:[" ",Object(h.jsx)("span",{children:"Felipe"})," Rodrigues De Melo "]})," "]})]})})]})};var x=b.b.div(j||(j=Object(s.a)(["\n    width: 16.3rem;\n    position: fixed;\n    height: 100vh;\n    background-color: var(--sidebar-dark-color);\n    overflow: hidden;\n    transition: all .4s ease-in-out;\n    @media screen and (max-width:1200px){\n        transform: translateX(-100%);\n        z-index: 20;\n    }\n"]))),u=function(n){var e=n.navToggle;return Object(h.jsx)(x,{className:"".concat(e?"nav-toggle":""),children:Object(h.jsx)(g,{})})},f=t(120),v=t.n(f),O=t(66),w=t.n(O),k=t(124),y=t.n(k),N=t(119),F=t.n(N);var z,S=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(F.a,{width:"100%",height:"100vh",params:{particles:{number:{value:109,density:{enable:!0,value_area:1200}},color:{value:"#636e72"},shape:{type:"circle",stroke:{width:0},polygon:{nb_sides:6}},line_linked:{enable:!1,distance:150,opacity:.9,width:1,shadow:{enable:!0,color:"#e74c3c",blur:5}},move:{enable:!0,random:!0,speed:.6,attract:{rotateX:600,rotateY:1200}},size:{value:4,random:!0,anim:{speed:40,size_min:.1}},opacity:{value:.8,anim:{speed:1,opacity_min:.1}}}}})})};var C,D=b.b.header(z||(z=Object(s.a)(["\n    width: 100%;\n    height: 100vh;\n    position: relative;\n   \n    .typography{\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        text-align: center;\n        width: 80%;\n\n        .icons{\n            display: flex;\n            justify-content: center;\n            margin-top: 1rem;\n            .icon{\n                border: 2px solid var(--border-color);\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                border-radius: 50%;\n                transition: all .4s ease-in-out;\n                cursor: pointer;\n                &:hover{\n                    border: 2px solid var(--primary-color);\n                    color: var(--primary-color);\n                }\n                &:not(:last-child){\n                    margin-right: 1rem;\n                }\n                svg{\n                    margin: .5rem;\n                }\n            }\n\n            .i-youtube{\n                &:hover{\n                    border: 2px solid red;\n                    color: red;\n                }\n            }\n            .i-github{\n                &:hover{\n                    border: 2px solid #5F4687;\n                    color: #5F4687;\n                }\n            }\n        }\n    }\n"]))),A=function(){return Object(h.jsxs)(D,{children:[Object(h.jsx)("div",{className:"particle-con",children:Object(h.jsx)(S,{})}),Object(h.jsxs)("div",{className:"typography",children:[Object(h.jsxs)("h1",{children:["Ol\xe1, sou ",Object(h.jsx)("span",{children:"Felipe Rodrigues de Melo :)"})]}),Object(h.jsxs)("p",{children:["Eu amo e sou f\xe3 de tecnologia",Object(h.jsx)("span",{children:"\u201cPara se ter sucesso, \xe9 necess\xe1rio amar de verdade o que se faz. Caso contr\xe1rio, levando em conta apenas o lado racional, voc\xea simplesmente desiste. \xc9 o que acontece com a maioria das pessoas.\u201d \u2015 Steve Jobs "})]}),Object(h.jsxs)("div",{className:"icons",children:[Object(h.jsx)("a",{href:"https://www.facebook.com/felipe.rodriguesdemelo",className:"icon i-facebook",children:Object(h.jsx)(v.a,{})}),Object(h.jsx)("a",{href:"https://github.com/Felipe00007",className:"icon i-github",children:Object(h.jsx)(w.a,{})}),Object(h.jsx)("a",{href:"https://www.youtube.com/channel/UCndXIUFn-sQN_9yQQ7N2p2A",className:"icon i-youtube",children:Object(h.jsx)(y.a,{})})]})]})]})};var E,P=b.b.a(C||(C=Object(s.a)(['\n    background-color: var(--primary-color);\n    padding: .8rem 2.5rem;\n    color: white;\n    cursor: pointer;\n    display: inline-block;\n    font-size: inherit;\n    text-transform: uppercase;\n    position: relative;\n    transition: all .4s ease-in-out;\n    &::after{\n        content: "";\n        position: absolute;\n        width: 0;\n        height: .2rem;\n        transition: all .4s ease-in-out;\n        left: 0;\n        bottom: 0;\n        opacity: .7;\n    }\n    &:hover::after{\n        width: 100%;\n        background-color: var(--white-color);\n    }\n']))),T=function(n){var e=n.title;return Object(h.jsx)(P,{children:e})};var H,M=b.b.div(E||(E=Object(s.a)(["\n    margin-top: 5rem;\n    display: flex;\n    @media screen and (max-width:1000px){\n        flex-direction: column;\n        .left-content{\n            margin-bottom: 2rem;\n        }\n    }\n    .left-content{\n        width: 100%;\n        img{\n            width: 95%;\n            object-fit: cover;\n        }\n    }\n    .right-content{\n        width: 100%;\n        h4{\n            font-size: 2rem;\n            color: var(--white-color);\n            span{\n                font-size: 2rem;\n            }\n        }\n        .paragraph{\n            padding: 1rem 0;\n        }\n        .about-info{\n            display: flex;\n            padding-bottom: 1.4rem;\n            .info-title{\n                padding-right: 3rem;\n                p{\n                    font-weight: 600;\n                }\n            }\n            .info-title, .info{\n                p{\n                    padding: .3rem 0;\n                }\n            }\n        }\n    }\n"]))),I=function(){return Object(h.jsxs)(M,{children:[Object(h.jsx)("div",{className:"left-content",children:Object(h.jsx)("img",{src:m,alt:""})}),Object(h.jsxs)("div",{className:"right-content",children:[Object(h.jsxs)("h4",{children:["Ol\xe1, sou ",Object(h.jsx)("span",{children:"Felipe"})]}),Object(h.jsxs)("p",{className:"paragraph",children:["Estudo Desenvolvimento Web, Na Digital House. ",Object(h.jsx)("span",{children:"Gosto muito de Front-End"})]}),Object(h.jsxs)("div",{className:"about-info",children:[Object(h.jsxs)("div",{className:"info-title",children:[Object(h.jsx)("p",{children:" Nome"}),Object(h.jsx)("p",{children:" Idade "}),Object(h.jsx)("p",{children:" Idiomas "}),Object(h.jsx)("p",{children:"Cidade"})]}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("p",{children:": Felipe Rodrigues De Melo"}),Object(h.jsx)("p",{children:": 24"}),Object(h.jsx)("p",{children:": Portugu\xeas, Ingl\xeas e Espanhol."}),Object(h.jsx)("p",{children:": Fortaleza-Ce"})]})]}),Object(h.jsx)("a",{href:"https://drive.google.com/file/d/1fXqPgRgbWio-zfpmPcAR9hxO6NKnsSxM/view?usp=sharing",children:Object(h.jsx)(T,{title:"Download Cv"})})]})]})};var B,L,_,J=b.b.div(H||(H=Object(s.a)(['\n    position: relative;\n    h2{\n        color: var(--white-color);\n        font-size: 3.1rem;\n        font-weight: 600;\n        text-transform: uppercase;\n        position: relative;\n        padding-bottom: .7rem;\n        @media screen and (max-width: 496px){\n            font-size: 2.8rem;\n        }\n        @media screen and (max-width: 370px){\n            font-size: 2rem;\n        }\n        &::before{\n            content: "";\n            position: absolute;\n            bottom: 0;\n            width: 7.4rem;\n            height: .33rem;\n            background-color: var(--background-light-color-2);\n            border-radius: 15px;\n            left: 0;\n        }\n        &::after{\n            content: "";\n            position: absolute;\n            bottom: 0;\n            width: 3.5rem;\n            height: .33rem;\n            background-color: var(--primary-color);\n            border-radius: 15px;\n            left: 0;\n        }\n        span{\n            font-weight: 900;\n            color: rgba(25,29,43,.44);\n            font-size: 5rem;\n            position: absolute;\n            left: 0;\n            top: 30%;\n            z-index: -1;\n            @media screen and (max-width: 620px){\n                font-size: 4rem;\n            }\n            @media screen and (max-width: 496px){\n                font-size: 3rem;\n            }\n            @media screen and (max-width: 370px){\n                font-size: 2rem;\n            }\n        }\n    }\n']))),q=function(n){var e=n.title,t=n.span;return Object(h.jsx)(J,{children:Object(h.jsxs)("h2",{children:[e," ",Object(h.jsx)("b",{children:Object(h.jsx)("span",{children:t})})]})})},R=b.b.div(B||(B=Object(s.a)(["\n    padding: 5rem;\n    @media screen and (max-width: 642px){\n        padding: 4rem;\n    }\n    /* @media screen and (max-width: 510px){\n        padding: 3rem;\n    } */\n    @media screen and (max-width: 571px){\n        padding: 2rem .4rem;\n    }\n"]))),U=b.b.div(L||(L=Object(s.a)(["\n    padding: 5rem 0;\n"])));var Q,Y=b.b.section(_||(_=Object(s.a)(["\n    \n"]))),V=function(){return Object(h.jsx)(R,{children:Object(h.jsxs)(Y,{children:[Object(h.jsx)(q,{title:"Sobre",span:"Sobre"}),Object(h.jsx)(I,{})]})})};var X,G=b.b.div(Q||(Q=Object(s.a)(["\n    .progress-bar{\n        display: flex;\n        align-items: center;\n        p{\n            padding-right: 1.1rem;\n        }\n        .progress{\n            position: relative;\n            width: 100%;\n            height: .4rem;\n            background-color: var(--border-color);\n            span{\n                position: absolute;\n                left: 0;\n                bottom: 0;\n                height: 100%;\n                background-color: var(--primary-color)\n            }\n        }\n    }\n"]))),W=function(n){var e=n.title,t=n.width,r=n.text;return Object(h.jsxs)(G,{children:[Object(h.jsx)("h6",{children:e}),Object(h.jsxs)("div",{className:"progress-bar",children:[Object(h.jsx)("p",{children:r}),Object(h.jsx)("div",{className:"progress",children:Object(h.jsx)("span",{style:{width:t}})})]})]})};var K,Z=b.b.section(X||(X=Object(s.a)(["\n    .skills{\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-row-gap: 2rem;\n        grid-column-gap: 3rem;\n        @media screen and (max-width: 700px){\n            grid-template-columns: repeat(1, 1fr);\n        }\n    }\n"]))),$=function(){return Object(h.jsxs)(Z,{children:[Object(h.jsx)(q,{title:"Minhas Skills",span:"Minhas skills"}),Object(h.jsx)(U,{children:Object(h.jsxs)("div",{className:"skills",children:[Object(h.jsx)(W,{title:"HTML5",width:"70%",text:"70%"}),Object(h.jsx)(W,{title:"CSS3",width:"90%",text:"90%"}),Object(h.jsx)(W,{title:"JAVASCRIPT",width:"85%",text:"85%"}),Object(h.jsx)(W,{title:"JAVA",width:"60%",text:"60%"}),Object(h.jsx)(W,{title:"PYTHON",width:"40%",text:"40%"}),Object(h.jsx)(W,{title:"React JS",width:"75%",text:"75%"})]})})]})};var nn,en=b.b.div(K||(K=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    p{\n        padding-right: 1rem;\n        svg{\n            font-size: 3rem;\n        }\n    }\n    h3{\n        color: var(--white-color);\n        font-size: 2rem;\n    }\n"]))),tn=function(n){var e=n.icon,t=n.title;return Object(h.jsxs)(en,{children:[Object(h.jsx)("p",{children:e}),Object(h.jsx)("h3",{children:t})]})},rn=t(125),on=t.n(rn),an=t(126),cn=t.n(an);var ln,sn=b.b.div(nn||(nn=Object(s.a)(['\n    display: flex;\n    @media screen and (max-width: 421px){\n        p, h5, h6{\n            font-size: 80%;\n        }\n    }\n    &:not(:last-child){\n        padding-bottom: 3rem;\n    }\n    .left-content{\n        width: 50%;\n        padding-left: 20px;\n        position: relative;\n        &::before{\n            content: "";\n            position: absolute;\n            left: -10px;\n            top: 5px;\n            height: 15px;\n            width: 15px;\n            border-radius: 50%;\n            border: 2px solid var(--border-color);\n            background-color: var(--background-dark-color);\n        }\n        p{\n            display: inline-block;\n        }\n    }\n    .right-content{\n        padding-left: 5rem;\n        position: relative;\n        &::before{\n            content: "";\n            position: absolute;\n            left: 0;\n            top: 15px;\n            height: 2px;\n            width: 3rem;\n            background-color: var(--border-color);\n        }\n        h5{\n            color: var(--primary-color);\n            font-size: 2rem;\n            padding-bottom: .4rem;\n        }\n        h6{\n            padding-bottom: .6rem;\n            font-size: 1.5rem;\n        }\n    }\n']))),dn=function(n){var e=n.year,t=n.title,r=n.subTitle,i=n.text;return Object(h.jsxs)(sn,{children:[Object(h.jsx)("div",{className:"left-content",children:Object(h.jsx)("p",{children:e})}),Object(h.jsxs)("div",{className:"right-content",children:[Object(h.jsx)("h5",{children:t}),Object(h.jsx)("h6",{children:r}),Object(h.jsx)("p",{children:i})]})]})};var bn=b.b.section(ln||(ln=Object(s.a)(["\n    .small-title{\n        padding-bottom: 3rem;\n    }\n    .u-small-title-margin{\n        margin-top: 4rem;\n    }\n\n    .resume-content{\n        border-left: 2px solid var(--border-color);\n    }\n"]))),mn=function(){var n=Object(h.jsx)(on.a,{}),e=Object(h.jsx)(cn.a,{});return Object(h.jsxs)(bn,{children:[Object(h.jsx)(q,{title:" Hist\xf3rico ",span:"Hist\xf3rico"}),Object(h.jsxs)(U,{children:[Object(h.jsx)("div",{className:"small-title",children:Object(h.jsx)(tn,{icon:n,title:"Empresas"})}),Object(h.jsx)("div",{className:"resume-content",children:Object(h.jsx)(dn,{year:"2015 - 2021",title:" Implementador Do Sistema SYSPDV Server",subTitle:"SuplePet",text:"Na SuplePet, sou respons\xe1vel por todas as atividades do Sistemas De Varejo SYSPDV. Que \xe9 um Sistema do Grupo Casas Magalh\xe3es,  com ele temos controle de todo estoque da loja e monitoramos todas as notas Fiscais, assim, como exporta\xe7\xf5es de arquvos fiscais em xml para o contador. "})}),Object(h.jsx)("div",{className:"small-title u-small-title-margin",children:Object(h.jsx)(tn,{icon:e,title:"Escolas"})}),Object(h.jsx)("div",{className:"resume-content ",children:Object(h.jsx)(dn,{year:"2021 - 2023",title:"Certified Tech Developer | CTD",subTitle:" Digital House | Mercado Live ",text:"Ap\xf3s ganhar uma Bolsa Do Mercado Livre para estudar no CTD da Digital House, est\xe1 sendo uma experi\xeancia incr\xedvel."})})]})]})};var hn,jn=function(){return Object(h.jsxs)(R,{children:[Object(h.jsx)($,{}),Object(h.jsx)(mn,{})]})},pn=t(132),gn=[{id:1,category:"Javascript + HTML5 + CSS",image:t.p+"static/media/filme.64e9d3fd.png",link1:"https://github.com/Felipe00007/checkpoint01_FrontII",link2:"https://felipe00007.github.io/checkpoint01_FrontII/",title:"Cadastro de Filmes",text:"Site que cadastra filmes"},{id:2,category:"Javascript + API",image:t.p+"static/media/todo.21b67644.png",link1:"https://github.com/Felipe00007/checkpoint02_Front02",link2:"https://felipe00007.github.io/checkpoint02_Front02/",title:"ToDo List",text:" Um App De Lista de tarefas Que Carrega Uma API "},{id:3,category:"HTML5 + CSS",image:t.p+"static/media/playgrond.9a677ef8.png",link1:"https://github.com/Felipe00007/playground",link2:"https://felipe00007.github.io/playground/",title:"Clone Playground DH",text:"Um Clone Do Playground DH"},{id:4,category:"HTML5 + CSS",image:t.p+"static/media/login.fdd91f3b.png",link1:"https://github.com/Felipe00007/playground",link2:"https://felipe00007.github.io/playground/index2.html",title:"Clone Login Playground DH",text:"Um Clone Do Login Playground DH"},{id:5,category:"HTML5 + CSS",image:t.p+"static/media/login2.f2c539c9.png",link1:"https://github.com/jennimay/projeto-bigmom",link2:"https://jennimay.github.io/projeto-bigmom/login.html",title:"Login",text:"Login"},{id:6,category:"HTML5 + CSS",image:t.p+"static/media/bigmom.9376de56.png",link1:"https://github.com/jennimay/projeto-bigmom",link2:"https://jennimay.github.io/projeto-bigmom/",title:"bigmom",text:"bigmom"}];var xn,un,fn=b.b.div(hn||(hn=Object(s.a)(['\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 2rem;\n    @media screen and (max-width:920px){\n        grid-template-columns: repeat(2, 1fr);\n    }\n    @media screen and (max-width:670px){\n        grid-template-columns: repeat(1, 1fr);\n    }\n    .grid-item{\n        .portfolio-content{\n            display: block;\n            position: relative;\n            overflow: hidden;\n            h6{\n                font-size: 1.5rem;\n            }\n            img{\n                width: 100%;\n                height: 30vh;\n                object-fit: cover;\n            }\n            ul{\n                transform: translateY(-600px);\n                transition: all .4s ease-in-out;\n                position: absolute;\n                left: 50%;\n                top: 40%;\n                opacity: 0;\n                li{\n                        background-color: var(--border-color);\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        padding: 1rem;\n                        border-radius: 50%;\n                        width: 3rem;\n                        height: 3rem;\n                        margin: 0 .5rem;\n                        transition: all .4s ease-in-out;\n                        &:hover{\n                            background-color: var(--primary-color);\n                        }\n                        a{\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            transition: all .4s ease-in-out;\n                        }\n                    }\n            }\n\n            .portfolio-image{\n                &::before{\n                    content: "";\n                    position: absolute;\n                    left: 2%;\n                    top: 4%;\n                    height: 0;\n                    width: 0;\n                    transition: all .4s ease-in-out;\n                }\n            }\n            .portfolio-image:hover{\n                ul{\n                    transform: translateY(0);\n                    transform: translate(-50%, -50%);\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    transition: all .4s ease-in-out;\n                    opacity: 1;\n                    li{\n                        transition: all .4s ease-in-out;\n                        &:hover{\n                            background-color: var(--primary-color);\n                        }\n                        a{\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            transition: all .4s ease-in-out;\n                        }\n                        \n                    }\n\n                    li:hover{\n                        svg{\n                            color: var(--white-color);\n                        }\n                    }\n                    svg{\n                        font-size: 2rem;\n                    }\n                }\n                &::before{\n                    height: calc(100% - 32%) ;\n                    width: calc(100% - 4%);\n                    background-color: white;\n                    opacity: 0.9;\n                    transform-origin: left;\n                    \n                    transition: all .4s ease-in-out;\n                }\n            }\n        }\n    }\n']))),vn=function(n){var e=n.menuItem;return Object(h.jsx)(fn,{children:e.map((function(n){return Object(h.jsx)("div",{className:"grid-item",children:Object(h.jsx)("div",{className:"portfolio-content",children:Object(h.jsxs)("a",{href:n.link2,children:[Object(h.jsxs)("div",{className:"portfolio-image",children:[Object(h.jsx)("img",{src:n.image,alt:""}),Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:n.link1,children:Object(h.jsx)(w.a,{})})})})]}),Object(h.jsx)("h6",{children:n.title}),Object(h.jsx)("p",{children:n.text})]})})},n.id)}))})};var On=b.b.button(xn||(xn=Object(s.a)(["\n    outline: none;\n    border: none;\n    background-color: var(--background-light-color-2);\n    padding: .4rem 2rem;\n    font-size: inherit;\n    color: var(--white-color);\n    cursor: pointer;\n    transition: all .4s ease-in-out;\n    margin-bottom: .6rem;\n    &:active ,&:focus{\n        background-color: var(--primary-color);\n    }\n    &:hover{\n        background-color: var(--primary-color);\n    }\n\n    &:not(:last-child){\n        margin-right: .6rem;\n    }\n"]))),wn=b.b.div(un||(un=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    width: 70%;\n    margin: 2.4rem auto;\n"]))),kn=function(n){var e=n.filter,t=n.button;return Object(h.jsx)(wn,{children:t.map((function(n,t){return Object(h.jsx)(On,{onClick:function(){return e(n)},children:n},t)}))})},yn=["All"].concat(Object(pn.a)(new Set(gn.map((function(n){return n.category})))));var Nn,Fn=function(){var n=Object(i.useState)(gn),e=Object(d.a)(n,2),t=e[0],r=e[1],o=Object(i.useState)(yn),a=Object(d.a)(o,2),c=a[0];return a[1],Object(h.jsxs)(R,{children:[Object(h.jsx)(q,{title:"Portfolios",span:"portfolios"}),Object(h.jsxs)(U,{children:[Object(h.jsx)(kn,{filter:function(n){if("All"!==n){var e=gn.filter((function(e){return e.category===n}));r(e)}else r(gn)},button:c}),Object(h.jsx)(vn,{menuItem:t})]})]})},zn=t.p+"static/media/blog1.aa2f074c.svg",Sn=t.p+"static/media/blog3.969725e8.svg",Cn=t.p+"static/media/blog2.df7996bd.svg",Dn=t.p+"static/media/blog4.60aa6cec.svg",An=[{id:1,title:"Em Breve",date:"01",month:"April",image:zn,link:"https://www.google.com.br/"},{id:2,title:"Em Breve Figma",date:"01",month:"April",image:Cn,link:"https://www.google.com.br/"},{id:3,title:"Em Breve SEO",date:"01",month:"April",image:Sn,link:"https://www.google.com.br/"},{id:4,title:"Em Breve ",date:"01",month:"April",image:Dn,link:"https://www.google.com.br/"},{id:5,title:"Em Breve",date:"01",month:"April",image:Dn,link:"https://www.google.com.br/"}];var En,Pn=b.b.div(Nn||(Nn=Object(s.a)(["\n    .blog{\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-column-gap: 2rem;\n        grid-row-gap: 3rem;\n        @media screen and (max-width: 770px){\n            grid-template-columns: repeat(1, 1fr);\n        }\n        .blog-item{\n            background-color: var(--background-dark-grey);\n            padding: 1rem 1rem;\n        }\n        .image{\n            width: 100%;\n            overflow: hidden;\n            padding-bottom: .5rem;\n            img{\n                width: 100%;\n                height: 90%;\n                object-fit: cover;\n                transition: all .4s ease-in-out;\n                &:hover{\n                    cursor: pointer;\n                    transform: rotate(3deg) scale(1.1);\n                }\n            }\n        }\n\n        .title{\n            a{\n                font-size: 1.8rem;\n                padding: 2rem 0;\n                color: var(--white-color);\n                cursor: pointer;\n                transition: all .4s ease-in-out;\n                &:hover{\n                    color: var(--primary-color);\n                }\n            }\n        }\n    }\n"]))),Tn=function(){return Object(h.jsx)(R,{children:Object(h.jsxs)(Pn,{children:[Object(h.jsx)(q,{title:"Blogs",span:"Blogs"}),Object(h.jsx)(U,{className:"blog",children:An.map((function(n){return Object(h.jsxs)("div",{className:"blog-item",children:[Object(h.jsx)("a",{href:n.link,children:Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{src:n.image,alt:""})})}),Object(h.jsx)("div",{className:"title",children:Object(h.jsx)("a",{href:n.link,children:n.title})})]},n.id)}))})]})})},Hn=t(127),Mn=t.n(Hn),In=t(128),Bn=t.n(In),Ln=t(129),_n=t.n(Ln);var Jn,qn=b.b.div(En||(En=Object(s.a)(["\n    padding:1.5rem 2rem;\n    background-color: var(--background-dark-grey);\n    display: flex;\n    align-items: center;\n    &:not(:last-child){\n        margin-bottom: 2.5rem;\n    }\n    .left-content{\n        padding: 1.5rem;\n        border: 1px solid var(--border-color);\n        font-size: 2rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 1.5rem;\n        svg{\n            font-size: 2.3rem;\n        }\n    }\n\n    .right-content{\n        h6{\n            color: var(--white-color);\n            font-size: 1.2rem;\n            padding-bottom: .6rem;\n        }\n        p{\n            padding: .1rem 0;\n        }\n    }\n"]))),Rn=function(n){var e=n.title,t=n.icon,r=n.cont1,i=n.cont2;return Object(h.jsxs)(qn,{children:[Object(h.jsx)("div",{className:"left-content",children:t}),Object(h.jsxs)("div",{className:"right-content",children:[Object(h.jsx)("h6",{children:e}),Object(h.jsx)("p",{children:r}),Object(h.jsx)("p",{children:i})]})]})};var Un,Qn=b.b.section(Jn||(Jn=Object(s.a)(["\n    .contact-section{\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-column-gap: 2rem;\n        @media screen and (max-width: 978px){\n            grid-template-columns: repeat(1, 1fr);\n            .f-button{\n                margin-bottom: 3rem;\n            }\n        }\n        .right-content{\n            display: grid;\n            grid-template-columns: repeat(1, 1fr);\n            @media screen and (max-width: 502px){\n                width: 70%;\n            }\n        }\n        .contact-title{\n            h4{\n                color: var(--white-color);\n                padding: 1rem 0;\n                font-size: 1.8rem;\n            }\n        }\n        .form{\n            width: 100%;\n            @media screen and (max-width: 502px){\n                width: 100%;\n            }\n            .form-field{\n                margin-top: 2rem;\n                position: relative;\n                width: 100%;\n                label{\n                    position: absolute;\n                    left: 20px;\n                    top: -19px;\n                    display: inline-block;\n                    background-color: var(--background-dark-color);\n                    padding:0 .5rem;\n                    color: inherit;\n                }\n                input{\n                    border: 1px solid var(--border-color);\n                    outline: none;\n                    background: transparent;\n                    height: 50px;\n                    padding:0 15px;\n                    width: 100%;\n                    color: inherit;\n                }\n                textarea{\n                    background-color: transparent;\n                    border: 1px solid var(--border-color);\n                    outline: none;\n                    color: inherit;\n                    width: 100%;\n                    padding: .8rem 1rem;\n                }\n            }\n\n            \n        }\n    }\n"]))),Yn=function(){var n=Object(h.jsx)(Mn.a,{}),e=Object(h.jsx)(Bn.a,{}),t=Object(h.jsx)(_n.a,{});return Object(h.jsxs)(R,{children:[Object(h.jsx)(q,{title:"Contato",span:"Contato"}),Object(h.jsx)(Qn,{children:Object(h.jsxs)(U,{className:"contact-section",children:[Object(h.jsx)("div",{className:"left-content"}),Object(h.jsxs)("div",{className:"right-content",children:[Object(h.jsx)(Rn,{title:"Celular/ WhatsApp",icon:n,cont1:"(85)9 99275-8518"}),Object(h.jsx)(Rn,{title:"Email",icon:e,cont1:"felipeerodiques07@gmail.com"}),Object(h.jsx)(Rn,{title:"Endere\xe7o",icon:t,cont1:"Fortaleza-Ce"})]})]})})]})},Vn=t(130),Xn=t.n(Vn),Gn=t(131),Wn=t.n(Gn),Kn=t(8),Zn=t(401),$n=t(400);var ne,ee=b.b.main(Un||(Un=Object(s.a)(["\n  position: relative;\n  margin-left: 16.3rem;\n  min-height: 100vh;\n  @media screen and (max-width:1200px){\n    margin-left: 0;\n  }\n  .lines{\n    position: absolute;\n    min-height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    opacity: 0.4;\n    z-index: -1;\n    .line-1, .line-2, .line-3, .line-4{\n      width: 1px;\n      min-height: 100vh;\n      background-color: var(--border-color);\n    }\n  }\n"]))),te=function(){var n=Object(i.useState)("dark-theme"),e=Object(d.a)(n,2),t=e[0],r=e[1],o=Object(i.useState)(!1),a=Object(d.a)(o,2),c=a[0],l=a[1],s=Object(i.useState)(!1),b=Object(d.a)(s,2),m=b[0],j=b[1];return Object(i.useEffect)((function(){document.documentElement.className=t}),[t]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(u,{navToggle:m}),Object(h.jsx)("div",{className:"theme",children:Object(h.jsxs)("div",{className:"light-dark-mode",children:[Object(h.jsx)("div",{className:"left-content",children:Object(h.jsx)(Xn.a,{})}),Object(h.jsx)("div",{className:"right-content",children:Object(h.jsx)(Zn.a,{value:"",checked:c,inputProps:{"aria-label":""},size:"medium",onClick:function(){"light-theme"===t?(r("dark-theme"),l(!1)):(r("light-theme"),l(!0))}})})]})}),Object(h.jsx)("div",{className:"ham-burger-menu",children:Object(h.jsx)($n.a,{onClick:function(){return j(!m)},children:Object(h.jsx)(Wn.a,{})})}),Object(h.jsxs)(ee,{children:[Object(h.jsxs)("div",{className:"lines",children:[Object(h.jsx)("div",{className:"line-1"}),Object(h.jsx)("div",{className:"line-2"}),Object(h.jsx)("div",{className:"line-3"}),Object(h.jsx)("div",{className:"line-4"})]}),Object(h.jsxs)(Kn.c,{children:[Object(h.jsx)(Kn.a,{path:"/",exact:!0,children:Object(h.jsx)(A,{})}),Object(h.jsx)(Kn.a,{path:"/about",exact:!0,children:Object(h.jsx)(V,{})}),Object(h.jsx)(Kn.a,{path:"/resume",exact:!0,children:Object(h.jsx)(jn,{})}),Object(h.jsx)(Kn.a,{path:"/portfolios",exact:!0,children:Object(h.jsx)(Fn,{})}),Object(h.jsx)(Kn.a,{path:"/blogs",exact:!0,children:Object(h.jsx)(Tn,{})}),Object(h.jsx)(Kn.a,{path:"/contact",exact:!0,children:Object(h.jsx)(Yn,{})})]})]})]})},re=Object(b.a)(ne||(ne=Object(s.a)(["\n/* :root{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #6c757d;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n\n} */\n\n.light-theme{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #ff7675;\n    --background-dark-color: #F1F1F1;\n    --background-dark-grey: #e4e4e4;\n    --border-color: #cbced8;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #151515;\n    --font-light-color: #313131;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #E4E4E4;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n.dark-theme{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #6c757d;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    list-style: none;\n    text-decoration: none;\n    font-family: 'Nunito', sans-serif;\n    font-size: 1.1rem;\n    \n}\n\nbody{\n    background-color: var(--background-dark-color);\n    color: var(--font-light-color);\n    transition: all .4s ease-in-out;\n}\n\nbody::-webkit-scrollbar{\n    width: 9px;\n    background-color: #383838;\n}\nbody::-webkit-scrollbar-thumb{\n    border-radius: 10px;\n    background-color: #6b6b6b;\n}\nbody::-webkit-scrollbar-track{\n    border-radius: 10px;\n    background-color: #383838;\n}\n\ntextarea{\n    max-width: 100%;\n}\na{\n    font-family: inherit;\n    color: inherit;\n    font-size: inherit;\n    font-size: 1rem;\n}\n\nh1{\n    font-size: 4rem;\n    color: var(--white-color);\n    span{\n        font-size: 4rem;\n        @media screen and (max-width: 502px){\n            font-size: 3rem\n        }\n    }\n    @media screen and (max-width: 502px){\n        font-size: 3rem\n    }\n}\n\nspan{\n    color: var(--primary-color);\n}\nh6{\n    color: var(--white-color);\n    font-size: 1.2rem;\n    padding-bottom: .6rem;\n}\n\n//Utilities\n.u-margin-bottom{\n    margin-bottom: 4rem;\n}\n\n\n//Floting Toggler\n.light-dark-mode{\n    position: fixed;\n    right: 0;\n    top: 50%;\n    background-color: var(--background-light-color-2);\n    width: 6.5rem;\n    height: 2.5rem;\n    z-index: 15;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg{\n      display: flex;\n      align-items: center;\n      font-size: 1.7rem;\n      color: var(--white-color);\n    }\n  }\n\n  //Nav Toggler\n  .ham-burger-menu{\n      position: absolute;\n      right: 5%;\n      top: 3%; \n      display: none;\n      z-index: 15;\n      svg{\n          font-size: 3rem;\n      }\n    }\n\n    .nav-toggle{\n        transform: translateX(0);\n        z-index: 20;\n    }\n  @media screen and (max-width:1200px){\n    .ham-burger-menu{\n        display: block;\n    }\n  }\n\n\n//Global Media Queries\n\n\n\n"])));c.a.render(Object(h.jsxs)(o.a.StrictMode,{children:[Object(h.jsx)(re,{}),Object(h.jsx)(l.a,{children:Object(h.jsx)(te,{})})]}),document.getElementById("root"))}},[[381,1,2]]]);
//# sourceMappingURL=main.6240571c.chunk.js.map