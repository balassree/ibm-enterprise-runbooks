(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{w5Zd:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return g}));var r,s=t("k1TG"),i=t("8o2o"),n=(t("q1tI"),t("7ljp")),c=t("013z"),o=(t("T0C+"),t("qKvR"),{}),l=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),b={_frontmatter:o},p=c.a;function g(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(n.b)(p,Object(s.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"PageDescription"}),Object(n.b)("h2",null,Object(n.b)("strong",{parentName:"h2"},"Overview")),Object(n.b)("p",null,"Red Hat Advanced Cluster Management for Kubernetes controls clusters and applications from a single console, with built-in security policies. Extend the value of Red Hat OpenShift by deploying apps, managing multiple clusters, and enforcing policies across multiple clusters at scale. "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"End-to-end visibility and control for your Kubernetes clusters")),Object(n.b)("h2",null,Object(n.b)("strong",{parentName:"h2"},"Register Openshift Cluster with Redhat Marketplace")),Object(n.b)("p",null,"To register a cluster, Red Hat Marketplace provides a command that installs the Red Hat Marketplace Operator and updates your global cluster pull secret."),Object(n.b)("p",null,"Refer the step by step ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"https://marketplace.redhat.com/en-us/documentation/clusters#register-openshift-cluster-with-red-hat-marketplace"}),"instructions"),". As a result, you registered your cluster as well as installed Redhat Marketplace Opertor."),Object(n.b)("img",{src:"/images/rhmclusters.png",alt:"Redhat Marketplace Cluster"}),Object(n.b)("h2",null,Object(n.b)("strong",{parentName:"h2"},"Red Hat Advanced Cluster Management for Kubernetes")),Object(n.b)("p",null,"The Red Hat Marketplace offers a wide variety of products across 12 categories. As an example, let’s say that you want to try out Redhat Advanced Cluster Management."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACfklEQVQ4y1VT227UQAzNn0Fpy7agUtHbX/B1iB/gCYknKiFge2MvSZPdXCYzSSYzSfZgO00rRvLG63GOj4+d4NPrPbz7eIaryyucnZ/j6OgYs9kRDsgOZ8c4OHyLg5NTzD6cYn//EK/23vxnfH9ycYn3F1c4oZwg1hbbaINlXGDNlpQINyVKZWAqCwNAff6C+Os3xD2Q6BaJcaORH9sdlte/sfr+A1HTIzC2gzEWqmqha4eSQBT9rxqHxvVoCLD69QfqYYWCAFXTQdl+NPLLAcjm98iuf6IgP3DdeGHaAf1uB+c9FTBwbYthGLCjGOVhh5fDsWefcjp6+ic/cM5BKYWWAPiYcAW1WqAjYN80qBsricPQoygV6roW+MckRakrAbdNjUprdD213NNPWZbw3gtgsdngdj7HNstgqwphGBJoI/eLxUKM/TBc4+ZmjobuNL0frtcoigJB13VI0xTWWgFsCaSkC8sgZDkBTwWVqYQVUUZh6E5pYc+geZ7LUxhyyxPDniTwDE5xTzK4rpN41++Q5B79MOrnvHv2h34QvfkIIA9hErokLebzG6HfEPDt/R1qYt3Q1O8eSDfS0VIhk0XI041oauidJEnA3UrLmgLTUJh2HMdShFmvwkfyKxmK1oV0w36S5gijWPI5l7VmaQL/tCYTQ34y64GMWyrtQO11T/FBWNAf8P7WrRef83lb+mnKbNPRtCa6qkc9O09D2coOMuAyXr6sF5FgdgyYl5o+inGosofjbuE5MYpCqehci4jWoSINuROO53kmeVEUSZscz2jC2+1W3gm4MrcxtWxI/EU8rg23+pe+ba2N5KxTg4xWZdKaC3GcWfMQGfAfAIoRtxDcT6kAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/06e73d6d635552fcbe2237999941ffe7/3cbba/rhacmsearch.png",srcSet:["/ibm-enterprise-runbooks/static/06e73d6d635552fcbe2237999941ffe7/7fc1e/rhacmsearch.png 288w","/ibm-enterprise-runbooks/static/06e73d6d635552fcbe2237999941ffe7/a5df1/rhacmsearch.png 576w","/ibm-enterprise-runbooks/static/06e73d6d635552fcbe2237999941ffe7/3cbba/rhacmsearch.png 1152w","/ibm-enterprise-runbooks/static/06e73d6d635552fcbe2237999941ffe7/942aa/rhacmsearch.png 1527w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"Create a project and name it “rh-acm-demo” in your IBM Cloud ROKS cluster."),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Buy the software")),Object(n.b)("p",null,"Go to the Marketplace catalog and search for Red Hat Advanced Cluster Management for Kubernetes. Select the correct tile and click on Free trial to start your 30-day trial, as shown in figure below"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACAklEQVQoz1VTTWsTURSdZehPKYb8gQYTMCTBEqigbvRXFBFBdy4tLl124b4LIZY6ARcpglD9CYpOMslMMt/JTOYrx3teM6FeOLz73tx3zr333dEGgwEeP3uOkydP0el0FHq9Hvr9PrrdrgL9drv9H1qtFu43mzg6PsbDk0e4lPWbcGlpnsMdf4X34zsKAGEQwDRNhfl8vodlWZjNZmq1ZM+4UuKD83MYL17i1+s3+PPuDBq2W5hvX2H64T1o6/UaxsSUy3Pll2WJXESLokCWZQqF7HmPlt7cYPX5EvEXHfl4LIRi9u+/CC1bBcRJCssJEEYRIsFqtdqDAgR9fk/iWGVZ7CAy0KjsxxmiJFOq6WaDhW1huVwiDMM9QUXIlUL08ypTqUJBfJXhXcskaJOmyk+SRF2uWrHdlUkigu2g8byCxkMGx5K+OpR9JllSjZfYM8YQrKayivyuKcK8KOG4HlzXBUPY8LXvIxOBjRCnki1RkdNn5ukmVd8rVMKa8EmD2Z/VbWlCNN2NDTGdThUmkwkMw4C9WCCSPgbSCl9GxxdxrpUJYakO4ji5fWUh5LzZtq3mj77neftH+Clj8uniAqPhEPrVFfTRCLquYyj78fU1X7mUcj2VGY3pWzJCfGUOMUkdx8FSMqN9PD1FR9PQPDhA/fAQ9+p1NBoN1Go1PJC/5x9LUQ2j3soUEwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/6c9cdf403a3de0c6d7184bc7b0e5dc20/3cbba/rhacmbuy.png",srcSet:["/ibm-enterprise-runbooks/static/6c9cdf403a3de0c6d7184bc7b0e5dc20/7fc1e/rhacmbuy.png 288w","/ibm-enterprise-runbooks/static/6c9cdf403a3de0c6d7184bc7b0e5dc20/a5df1/rhacmbuy.png 576w","/ibm-enterprise-runbooks/static/6c9cdf403a3de0c6d7184bc7b0e5dc20/3cbba/rhacmbuy.png 1152w","/ibm-enterprise-runbooks/static/6c9cdf403a3de0c6d7184bc7b0e5dc20/46ee3/rhacmbuy.png 1497w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"Go to Workspace > click the My Software, which is shown in figure below"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABgElEQVQoz5VS227CMAztt/EGDwgK7XgYYh+xn53GNC7VABVo1XuSNmd2oF0pQ9MsHTl24hP7JNZrr4fZdIrn+RwviwUcx4HruhiNRrBtG8Ph0KwZ4/EY/X4fg8Hgxk8mEzzNZrAdF5YfRciyDEIIFEWB0+kEz/Pg+z6qqoLW2vgaHHfB+TCX2EY5rDzLTbI2QaR5nkNKaeJ2YTc2OQKfzQmy1LDaN1dlabpUSkHTuiTf7u6uY83QUGWFks5riq26M3OQkGxW0KK45KSA4AnwY4oL6xoigspoIZp9qz0Km/f+ho/lEuvtFkkc4+wfsT8cEAQB0jRFRJqv1ivjuSZLY2zWn/ja7cx0N4SaxaXCIAwhSBMeuSCS+tF4TNYrSZJGY5YnppjJeP+HkMAaKn4QKua8kgqSDsqrljwha8VrNvYX/aqmqbuRoyDE+XiEYGLqrroSdL/Jo7ghrG/d7ffY0j+MST8e87921yHrw4K3X/+3//cIVrdAXfVqj9Im/su+AdFIiIVUldEQAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/c83347cc4286f27e1cec96049903396c/3cbba/mysoftware.png",srcSet:["/ibm-enterprise-runbooks/static/c83347cc4286f27e1cec96049903396c/7fc1e/mysoftware.png 288w","/ibm-enterprise-runbooks/static/c83347cc4286f27e1cec96049903396c/a5df1/mysoftware.png 576w","/ibm-enterprise-runbooks/static/c83347cc4286f27e1cec96049903396c/3cbba/mysoftware.png 1152w","/ibm-enterprise-runbooks/static/c83347cc4286f27e1cec96049903396c/de9e4/mysoftware.png 1461w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Install the software")),Object(n.b)("p",null,"Go to Workspace > My Software and click the Install Operator icon, which is shown in figure below"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.0138888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABf0lEQVQ4y5VTy27CMBDM/1967V/00lPPlUD0BiSo6oFQkQQaEVAS52lnOuuSypRKpZZGa+zseHZ28V4mE8ymUywWCwvfDzBf+lgS8/ncnkkcIb+DIOD98gq+78Nr+x4/lxk3w4D/Lq9UCk3TMHeA1hr6xwN1XaOqKhvLskRRFBZ5nl9BvvGEaDgrGYyB7LokQnx/B1MprDcbW8pqtUIYhojjGEmSIIoiGze8l71ASD1XzUioswPSxwcMbYvseLQfb7dbdF33d8kXChkNSUcPrVqHpO9piTZf1sjj51wX3kjkErb0TNFbzVjt9+izDD19q4iOZy3veqq/iZCMUHmBt+cZEv8V/dkK4yiyVbCRY45b5RWhJDckfF9HeApT6N+MkomgQjf328MrQvojZaXpBw5pil0S287u2FGJMhry6M2EhnPYsZxTWeFUKOSlguIDMq8yjxUJpSnmZkJRWDfI8gb7I4dZ0Xw+4kLIblco5hP8y7BB2logqi/As4tGOusTCqzwiyyc5ywAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/51954a492cef3e6a6630c211998feb3f/3cbba/InstallOperator.png",srcSet:["/ibm-enterprise-runbooks/static/51954a492cef3e6a6630c211998feb3f/7fc1e/InstallOperator.png 288w","/ibm-enterprise-runbooks/static/51954a492cef3e6a6630c211998feb3f/a5df1/InstallOperator.png 576w","/ibm-enterprise-runbooks/static/51954a492cef3e6a6630c211998feb3f/3cbba/InstallOperator.png 1152w","/ibm-enterprise-runbooks/static/51954a492cef3e6a6630c211998feb3f/3f238/InstallOperator.png 1195w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Install the Red Hat Advanced Cluster Management for your free trial")),Object(n.b)("p",null,"Select the IBM Cloud ROKS cluster from the list of target clusters, then pick the namespace scope where you want to install the Operator, as shown in figure below"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.18055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABw0lEQVQ4y61T247TMBTMb8DbVpVaCmWlarnzK8u38Q+88hW88MoDu2kSOzc7VzsZ5rgbqSsuAi2Wpscep8dzjsfR9aPHeLV7isurF3j77j1evn6DzfYJnj2/xGq9xm63w2azwXa7DXOJ+/0ea+6tVqsTLi7C+nA4IMoqC13USHSJ2yzH90QjVgXirEBKLkkSKKVQ1zWqqgooyzKsz2EI4aOyLKCyLKDvOjxkmBFUyETH4zGc0vc9nBsxjvfhnAv4E++8Rzt6JlQ5JKnWmqWXUGyBbVq0bYumaULsqFziwi0QXiBzz4Qyorrhx43FNE146JjnGZEou4kT6Dz/ScE5rLX3sPDGmBAXQVFWGFS2g59mTJQtG7+C/83ewou6U8k8oeta/I8RSi5zjYxes7zlVkqREohlLbB3a+E7KXXhheMF2t6F6oJCRQPrTMHSlOYMlgbWaYqCpl64in1O4xiKAhauDqjQGYuZpUe3aQ3FlyLNHcVXPEmi56a0w1CJcIKBfiskAfnhzofzxG/dAD/0mLiOPH3kaei/xUgnOP5n4tyals/T8tlKq3gPolAa+S/gD+xw6tenLyU+fPyGa+Lz1zpwPwDU7RCkkduQDAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/7ff20cf591a1bb72de28e8c368e5988d/3cbba/selectns.png",srcSet:["/ibm-enterprise-runbooks/static/7ff20cf591a1bb72de28e8c368e5988d/7fc1e/selectns.png 288w","/ibm-enterprise-runbooks/static/7ff20cf591a1bb72de28e8c368e5988d/a5df1/selectns.png 576w","/ibm-enterprise-runbooks/static/7ff20cf591a1bb72de28e8c368e5988d/3cbba/selectns.png 1152w","/ibm-enterprise-runbooks/static/7ff20cf591a1bb72de28e8c368e5988d/ac849/selectns.png 1217w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Verify the operator installation")),Object(n.b)("p",null,"Click the My Software / Red Hat Advanced Cluster and select the Operators Tab"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABM0lEQVQoz41Ru07DQBD0//8Av0GZkgbaFCCaFBQgx7FJ/LbvPcxefJFJIsRKo1nN3c7u3mVt20JrDe8cvPfQLsAYGzVjzAV/hfYBn71GrSyyru+jUQiBHOAE1sISSqmLsWNDgehrFigOMBpqrM3EKIKmEt3uHfunDQwP8zzH4XBAWZaoqipyURRRT5qc5/s9FBsH1mdp7GhKVl2LqSxgOZWapjihXZ7Du7TJmRPWkSUhXfTLgaFZkK7U3GJ4XZzi8bXFw/MR26/pt6GgbRrUpxPmeUbDfKZxx4/ruw5NXWPgm1dcdxyGeFfWftkdsXn7xkd1bcgpRl4aCD2OkRULZ5oIjzQWFl02mNhEcjglDhE3K2NB4JqJE+7pksenCmePm5Wx9FrzddzTU/19w9UP/hep7geHXA68ZDm5XQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/69eb9384e24c71e7f2a49c4ecdc9d692/3cbba/rhacmverify.png",srcSet:["/ibm-enterprise-runbooks/static/69eb9384e24c71e7f2a49c4ecdc9d692/7fc1e/rhacmverify.png 288w","/ibm-enterprise-runbooks/static/69eb9384e24c71e7f2a49c4ecdc9d692/a5df1/rhacmverify.png 576w","/ibm-enterprise-runbooks/static/69eb9384e24c71e7f2a49c4ecdc9d692/3cbba/rhacmverify.png 1152w","/ibm-enterprise-runbooks/static/69eb9384e24c71e7f2a49c4ecdc9d692/92275/rhacmverify.png 1509w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"Log in to the cluster to verify that the Operator installed successfully, as shown in figure belowrhc"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.80555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABYElEQVQoz52QyU7DMBRF8y0MoUBFaQuoe0SlSlB1AKVAPhixbDclXTFsqijN6HhMLi9GbFkQ+cmObN9znp0z9wj9bg/7hy7G4zFmsxmm0+mfNaGaz+d4evaxWCzgeR5837ezc345wJ57guP2OZarFeI4RhiG+O/nTB4ecT0c4WZ0iyDYQAqBNEnACgbBOdKCg5USRmsoKSGkhlAVSmnAlUFlDLRSdm7OOJN7z4YNR3dYL1fgTKCg4owhiiICUEhZIk9TGKkgucBuR8BSEEAhiVOUBK8aYFHAaXf6tmX3tIP16wuibYyvWBBVIKPQugbRNRgrUFcVDJkUZCwaO/r/jDgSpmy7msBO92KAFr1fiwKDtwDN3sc2Q8nIKs8pWJMZWWc/hprajjNOXVAol3gPS0SZAPULTc/ldHpXOGi1bWiw2VhSQQcN0XVlQIJkWVuz37UyZFrVoIEdM8hlZe81+99dGdAXrXhOaAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/528d58bfbe190ca2474ce441235d606f/3cbba/clusterverify.png",srcSet:["/ibm-enterprise-runbooks/static/528d58bfbe190ca2474ce441235d606f/7fc1e/clusterverify.png 288w","/ibm-enterprise-runbooks/static/528d58bfbe190ca2474ce441235d606f/a5df1/clusterverify.png 576w","/ibm-enterprise-runbooks/static/528d58bfbe190ca2474ce441235d606f/3cbba/clusterverify.png 1152w","/ibm-enterprise-runbooks/static/528d58bfbe190ca2474ce441235d606f/77da7/clusterverify.png 1655w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"OperatorHub - OpenShift Console")),Object(n.b)("p",null,"You can install OpenShift Operators directly from the cluster. Red Hat Marketplace Operators become available in the OperatorHub after you install the Marketplace Operator. To install a product directly from IBM Cloud ROKS, log in to the cluster, go to Operators > OperatorHub, search, and install. Below figure shows the dialog to install  "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.06944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAACDklEQVQoz52SW08TURSF+ydMQETkIiiXAo3lEmOMUTThyTY2bWPT+OvsBd+IxN9CfKSUtsB07pd2ZrnXhiHjiw9OsnLOzNnn22vv2bn86hoOi3tYXF7B0dFHVKtVlEollMvlf6okqlQqqNfr+NpooFarodlsIre5W8TqxjYezc6j3TmB57kYDAb4nydJEuSOP3/B+0/H2H/9Fqc/zxD4PobDIcbjMUzT1JUyDCOzGjBMBzeWL/Jkb8OyLPhyN1drfEO5Usebdx9wevZLM4VhiOl0CsdxEE0mmMYxYhG/PYjvmW88V4dbLHk9j5knz9CSksMwgmXbSCTAlqyB5yGSzJGs8T04hWffJ5KYyu28OkC+UMTs/BK+tzrawyiKJHsC+/c5QstUl57APcLljBeDIFC5rqvl8ox7Ae5jPV8Q4CLaXXEoQQyg/ZuLCwyuruBKsC/lX49GMOWMUP++14QQ/ADMF/bwYnMHj58uScld2FIuAYmUdHt7DdO2tFeBBI8E2Ov1NIZ97vf7OhEEMsEdUHq4JmMzIw5b7a6WE7JkAbryl9k/V1xxTwjdcU1dZaXA3eIhCqK5hWUFxgTJARtNJ74EEkDxnQn5pI5SULrXHrLsuYUVdE5+6BzatqOXOHe9y0udPYJYMstkj5kghfzlcGO7gOcvt/SnEBiGd/3gT+EccrgpXxPZulfnGYdZ/QFF8iY0OVRnFQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift Operator Install ",title:"OpenShift Operator Install ",src:"/ibm-enterprise-runbooks/static/6eef4dd85ad177eb647b0ea52581f6f0/3cbba/rhacminstalled.png",srcSet:["/ibm-enterprise-runbooks/static/6eef4dd85ad177eb647b0ea52581f6f0/7fc1e/rhacminstalled.png 288w","/ibm-enterprise-runbooks/static/6eef4dd85ad177eb647b0ea52581f6f0/a5df1/rhacminstalled.png 576w","/ibm-enterprise-runbooks/static/6eef4dd85ad177eb647b0ea52581f6f0/3cbba/rhacminstalled.png 1152w","/ibm-enterprise-runbooks/static/6eef4dd85ad177eb647b0ea52581f6f0/e1af8/rhacminstalled.png 1539w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-redhat-rhacm-index-mdx-3896afc4e05ecd57df00.js.map