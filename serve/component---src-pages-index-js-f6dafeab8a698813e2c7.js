(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6Gk8":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),l=a("9eSz"),s=a.n(l),o=a("p3AD");t.a=function(){var e=Object(i.useStaticQuery)("426816048"),t=e.site.siteMetadata.author;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(o.a)(2.5)}},n.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(o.a)(.5),marginBottom:0,minWidth:50,minHeight:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("div",null,n.a.createElement("div",null,t," is a dev in Singapore. Disagree with me? ",n.a.createElement("a",{href:"https://twitter.com/tzyinc"},"@ me on twitter"),". Like my post? ",n.a.createElement("a",{href:"https://twitter.com/tzyinc"},"@ me on twitter too"),"! ")))}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),m=function(e){var t=u(e),a=f(t);return g[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var C=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+d+l+s+a+r+t+i+n+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(I,(0,o.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},I=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,c=e.onError,u=e.onClick,f=e.loading,g=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},m,{onLoad:l,onError:c,onClick:u,ref:t,loading:f,draggable:g,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onClick:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,k=e.loading,C=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,o.default)({opacity:z?1:0,transition:R?"opacity "+b+"ms":"none"},s),j="boolean"==typeof h?"lightgray":h,V={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&V,{},s,{},f),M={title:t,alt:this.state.isVisible?"":a,style:T,className:g,itemProp:v};if(m){var B=m,_=B[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),j&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&V)}),_.base64&&d.default.createElement(O,{src:_.base64,spreadProps:M,imageVariants:B,generateSources:w}),_.tracedSVG&&d.default.createElement(O,{src:_.tracedSVG,spreadProps:M,imageVariants:B,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(B),d.default.createElement(I,{alt:a,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:k,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:k},_,{imageVariants:B}))}}))}if(p){var N=p,F=N[0],q=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},i);return"inherit"===i.display&&delete q.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},j&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:j,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},R&&V)}),F.base64&&d.default.createElement(O,{src:F.base64,spreadProps:M,imageVariants:N,generateSources:w}),F.tracedSVG&&d.default.createElement(O,{src:F.tracedSVG,spreadProps:M,imageVariants:N,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(N),d.default.createElement(I,{alt:a,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:k,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:k},F,{imageVariants:N}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});z.propTypes={resolutions:R,sizes:x,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onClick:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var j=z;t.default=j},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return f}));var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),l=a("6Gk8"),s=a("Bl7J"),o=a("vrFN"),d=a("p3AD");a("vg9a");var c=["January","February","March","April","May","June","July","August","September","October","November","December"];function u(e){var t=e.posts,a=e.blogCount,r=e.setBlogCount;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},a-1>0?n.a.createElement("button",{onClick:function(){return r(a-1>0?a-1:Math.floor(t.length/5))}},"< prev"):n.a.createElement("div",null),5*(a+1)-5<t.length?n.a.createElement("button",{onClick:function(){return 5*(a+1)-5<t.length?r(a+1):r(1)}},"next >"):n.a.createElement("div",null)),t.filter((function(e,t){return t>=5*a-5&&t<5*a})).map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.a.createElement("div",{key:t.fields.slug},n.a.createElement("h3",{style:{marginBottom:Object(d.a)(1/4)}},n.a.createElement(i.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),n.a.createElement("small",null,t.frontmatter.date),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))})))}t.default=function(e){var t=e.data,a=Object(r.useState)(1),i=a[0],d=a[1],f=Object(r.useState)(1),g=f[0],m=f[1],p=Object(r.useState)(1),h=p[0],b=p[1],y=Object(r.useState)(1),E=y[0],v=y[1],S=Object(r.useState)([]),w=S[0],k=S[1],C=t.site.siteMetadata.title,L=t.allMarkdownRemark.edges.filter((function(e){return"post"===e.node.frontmatter.type})),O=t.allMarkdownRemark.edges.filter((function(e){return"baked"===e.node.frontmatter.type})),I=t.allMarkdownRemark.edges.filter((function(e){return"talk"===e.node.frontmatter.type})),z=w.filter((function(e){return!e.in_reply_to_status_id&&!e.quoted_status&&!e.retweeted_status}));return Object(r.useEffect)((function(){fetch("https://blogbackend.tenzhiyang.com/tweets").then((function(e){return e.json()})).then((function(e){k(e)}))}),[]),n.a.createElement(s.a,{location:e.location,title:C},n.a.createElement(o.a,{title:"Ten's Thoughts"}),n.a.createElement(l.a,null),O.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Half-Baked Ideas ",n.a.createElement("span",{role:"img","aria-label":"male chef"},"👨‍🍳")),u({posts:O,blogCount:g,setBlogCount:m})),L.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Writings ",n.a.createElement("span",{role:"img","aria-label":"writing hand"},"✍️")),u({posts:L,blogCount:i,setBlogCount:d})),I.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Talks ",n.a.createElement("span",{role:"img","aria-label":"talking head"},"🗣️")),u({posts:I,blogCount:E,setBlogCount:v})),z.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Brain farts ",n.a.createElement("span",{role:"img","aria-label":"brain and wind"},"🧠💨")),function(e){var t=e.posts,a=e.blogCount,r=e.setBlogCount;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},a-1>0?n.a.createElement("button",{onClick:function(){return r(a-1>0?a-1:Math.floor(t.length/5))}},"< prev"):n.a.createElement("div",null),5*(a+1)-5<t.length?n.a.createElement("button",{onClick:function(){return 5*(a+1)-5<t.length?r(a+1):r(1)}},"next >"):n.a.createElement("div",null)),t.filter((function(e,t){return t>=5*a-5&&t<5*a})).map((function(e,t){return n.a.createElement("div",{key:e.id,style:0!==t?{paddingTop:"20px",borderTop:"1px solid var(--alt)",marginTop:"20px"}:{},className:"tweetSection"},n.a.createElement("small",null,(r=e.created_at,i=new Date(r),l=c[i.getMonth()],s=i.getDate(),o=i.getFullYear(),l+" "+s+", "+o)),n.a.createElement("p",null,n.a.createElement("a",{style:{boxShadow:"none",textDecoration:"none"},href:(a=e.id_str,"https://twitter.com/tzyinc/status/"+a)},e.text)));var a,r,i,l,s,o})))}({posts:z,blogCount:h,setBlogCount:b})))};var f="486703883"},vg9a:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-f6dafeab8a698813e2c7.js.map