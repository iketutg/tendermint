(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{677:function(e,t,a){"use strict";a.r(t);var n=a(1),l=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-an-application-in-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-application-in-go"}},[e._v("#")]),e._v(" Creating an application in Go")]),e._v(" "),a("h2",{attrs:{id:"guide-assumptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guide-assumptions"}},[e._v("#")]),e._v(" Guide Assumptions")]),e._v(" "),a("p",[e._v("This guide is designed for beginners who want to get started with a Tendermint\nCore application from scratch. It does not assume that you have any prior\nexperience with Tendermint Core.")]),e._v(" "),a("p",[e._v("Tendermint Core is Byzantine Fault Tolerant (BFT) middleware that takes a state\ntransition machine - written in any programming language - and securely\nreplicates it on many machines.")]),e._v(" "),a("p",[e._v("Although Tendermint Core is written in the Golang programming language, prior\nknowledge of it is not required for this guide. You can learn it as we go due\nto it's simplicity. However, you may want to go through "),a("a",{attrs:{href:"https://learnxinyminutes.com/docs/go/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn X in Y minutes\nWhere X=Go"),a("OutboundLink")],1),e._v(" first to familiarize\nyourself with the syntax.")]),e._v(" "),a("p",[e._v("By following along with this guide, you'll create a Tendermint Core project\ncalled kvstore, a (very) simple distributed BFT key-value store.")]),e._v(" "),a("h2",{attrs:{id:"built-in-app-vs-external-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-app-vs-external-app"}},[e._v("#")]),e._v(" Built-in app vs external app")]),e._v(" "),a("p",[e._v("To get maximum performance it is better to run your application alongside\nTendermint Core. "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),a("OutboundLink")],1),e._v(" is written\nthis way. Please refer to "),a("RouterLink",{attrs:{to:"/tutorials/go-built-in.html"}},[e._v("Writing a built-in Tendermint Core application in\nGo")]),e._v(" guide for details.")],1),e._v(" "),a("p",[e._v("Having a separate application might give you better security guarantees as two\nprocesses would be communicating via established binary protocol. Tendermint\nCore will not have access to application's state.")]),e._v(" "),a("h2",{attrs:{id:"_1-1-installing-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-installing-go"}},[e._v("#")]),e._v(" 1.1 Installing Go")]),e._v(" "),a("p",[e._v("Please refer to "),a("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("the official guide for installing\nGo"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Verify that you have the latest version of Go installed:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnbyB2ZXJzaW9uCmdvIHZlcnNpb24gZ28xLjE1LnggZGFyd2luL2FtZDY0Cg=="}}),e._v(" "),a("h2",{attrs:{id:"_1-2-creating-a-new-go-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-creating-a-new-go-project"}},[e._v("#")]),e._v(" 1.2 Creating a new Go project")]),e._v(" "),a("p",[e._v("We'll start by creating a new Go project.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIga3ZzdG9yZQpjZCBrdnN0b3JlCg=="}}),e._v(" "),a("p",[e._v("Inside the example directory create a "),a("code",[e._v("main.go")]),e._v(" file with the following content:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAoJJnF1b3Q7Zm10JnF1b3Q7CikKCmZ1bmMgbWFpbigpIHsKCWZtdC5QcmludGxuKCZxdW90O0hlbGxvLCBUZW5kZXJtaW50IENvcmUmcXVvdDspCn0K"}}),e._v(" "),a("p",[e._v('When run, this should print "Hello, Tendermint Core" to the standard output.')]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gcnVuIG1haW4uZ28KSGVsbG8sIFRlbmRlcm1pbnQgQ29yZQo="}}),e._v(" "),a("h2",{attrs:{id:"_1-3-writing-a-tendermint-core-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-writing-a-tendermint-core-application"}},[e._v("#")]),e._v(" 1.3 Writing a Tendermint Core application")]),e._v(" "),a("p",[e._v("Tendermint Core communicates with the application through the Application\nBlockChain Interface (ABCI). All message types are defined in the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/proto/tendermint/abci/types.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf\nfile"),a("OutboundLink")],1),e._v(".\nThis allows Tendermint Core to run applications written in any programming\nlanguage.")]),e._v(" "),a("p",[e._v("Create a file called "),a("code",[e._v("app.go")]),e._v(" with the following content:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAoJYWJjaXR5cGVzICZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2FiY2kvdHlwZXMmcXVvdDsKKQoKdHlwZSBLVlN0b3JlQXBwbGljYXRpb24gc3RydWN0IHt9Cgp2YXIgXyBhYmNpdHlwZXMuQXBwbGljYXRpb24gPSAoKktWU3RvcmVBcHBsaWNhdGlvbikobmlsKQoKZnVuYyBOZXdLVlN0b3JlQXBwbGljYXRpb24oKSAqS1ZTdG9yZUFwcGxpY2F0aW9uIHsKCXJldHVybiAmYW1wO0tWU3RvcmVBcHBsaWNhdGlvbnt9Cn0KCmZ1bmMgKEtWU3RvcmVBcHBsaWNhdGlvbikgSW5mbyhyZXEgYWJjaXR5cGVzLlJlcXVlc3RJbmZvKSBhYmNpdHlwZXMuUmVzcG9uc2VJbmZvIHsKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VJbmZve30KfQoKZnVuYyAoS1ZTdG9yZUFwcGxpY2F0aW9uKSBEZWxpdmVyVHgocmVxIGFiY2l0eXBlcy5SZXF1ZXN0RGVsaXZlclR4KSBhYmNpdHlwZXMuUmVzcG9uc2VEZWxpdmVyVHggewoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZURlbGl2ZXJUeHtDb2RlOiAwfQp9CgpmdW5jIChLVlN0b3JlQXBwbGljYXRpb24pIENoZWNrVHgocmVxIGFiY2l0eXBlcy5SZXF1ZXN0Q2hlY2tUeCkgYWJjaXR5cGVzLlJlc3BvbnNlQ2hlY2tUeCB7CglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlQ2hlY2tUeHtDb2RlOiAwfQp9CgpmdW5jIChLVlN0b3JlQXBwbGljYXRpb24pIENvbW1pdCgpIGFiY2l0eXBlcy5SZXNwb25zZUNvbW1pdCB7CglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlQ29tbWl0e30KfQoKZnVuYyAoS1ZTdG9yZUFwcGxpY2F0aW9uKSBRdWVyeShyZXEgYWJjaXR5cGVzLlJlcXVlc3RRdWVyeSkgYWJjaXR5cGVzLlJlc3BvbnNlUXVlcnkgewoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZVF1ZXJ5e0NvZGU6IDB9Cn0KCmZ1bmMgKEtWU3RvcmVBcHBsaWNhdGlvbikgSW5pdENoYWluKHJlcSBhYmNpdHlwZXMuUmVxdWVzdEluaXRDaGFpbikgYWJjaXR5cGVzLlJlc3BvbnNlSW5pdENoYWluIHsKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VJbml0Q2hhaW57fQp9CgpmdW5jIChLVlN0b3JlQXBwbGljYXRpb24pIEJlZ2luQmxvY2socmVxIGFiY2l0eXBlcy5SZXF1ZXN0QmVnaW5CbG9jaykgYWJjaXR5cGVzLlJlc3BvbnNlQmVnaW5CbG9jayB7CglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlQmVnaW5CbG9ja3t9Cn0KCmZ1bmMgKEtWU3RvcmVBcHBsaWNhdGlvbikgRW5kQmxvY2socmVxIGFiY2l0eXBlcy5SZXF1ZXN0RW5kQmxvY2spIGFiY2l0eXBlcy5SZXNwb25zZUVuZEJsb2NrIHsKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VFbmRCbG9ja3t9Cn0KCmZ1bmMgKEtWU3RvcmVBcHBsaWNhdGlvbikgTGlzdFNuYXBzaG90cyhhYmNpdHlwZXMuUmVxdWVzdExpc3RTbmFwc2hvdHMpIGFiY2l0eXBlcy5SZXNwb25zZUxpc3RTbmFwc2hvdHMgewoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZUxpc3RTbmFwc2hvdHN7fQp9CgpmdW5jIChLVlN0b3JlQXBwbGljYXRpb24pIE9mZmVyU25hcHNob3QoYWJjaXR5cGVzLlJlcXVlc3RPZmZlclNuYXBzaG90KSBhYmNpdHlwZXMuUmVzcG9uc2VPZmZlclNuYXBzaG90IHsKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VPZmZlclNuYXBzaG90e30KfQoKZnVuYyAoS1ZTdG9yZUFwcGxpY2F0aW9uKSBMb2FkU25hcHNob3RDaHVuayhhYmNpdHlwZXMuUmVxdWVzdExvYWRTbmFwc2hvdENodW5rKSBhYmNpdHlwZXMuUmVzcG9uc2VMb2FkU25hcHNob3RDaHVuayB7CglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlTG9hZFNuYXBzaG90Q2h1bmt7fQp9CgpmdW5jIChLVlN0b3JlQXBwbGljYXRpb24pIEFwcGx5U25hcHNob3RDaHVuayhhYmNpdHlwZXMuUmVxdWVzdEFwcGx5U25hcHNob3RDaHVuaykgYWJjaXR5cGVzLlJlc3BvbnNlQXBwbHlTbmFwc2hvdENodW5rIHsKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VBcHBseVNuYXBzaG90Q2h1bmt7fQp9Cg=="}}),e._v(" "),a("p",[e._v("Now I will go through each method explaining when it's called and adding\nrequired business logic.")]),e._v(" "),a("h3",{attrs:{id:"_1-3-1-checktx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-checktx"}},[e._v("#")]),e._v(" 1.3.1 CheckTx")]),e._v(" "),a("p",[e._v("When a new transaction is added to the Tendermint Core, it will ask the\napplication to check it (validate the format, signatures, etc.).")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICZxdW90O2J5dGVzJnF1b3Q7CgpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgaXNWYWxpZCh0eCBbXWJ5dGUpIChjb2RlIHVpbnQzMikgewoJLy8gY2hlY2sgZm9ybWF0CglwYXJ0cyA6PSBieXRlcy5TcGxpdCh0eCwgW11ieXRlKCZxdW90Oz0mcXVvdDspKQoJaWYgbGVuKHBhcnRzKSAhPSAyIHsKCQlyZXR1cm4gMQoJfQoKCWtleSwgdmFsdWUgOj0gcGFydHNbMF0sIHBhcnRzWzFdCgoJLy8gY2hlY2sgaWYgdGhlIHNhbWUga2V5PXZhbHVlIGFscmVhZHkgZXhpc3RzCgllcnIgOj0gYXBwLmRiLlZpZXcoZnVuYyh0eG4gKmJhZGdlci5UeG4pIGVycm9yIHsKCQlpdGVtLCBlcnIgOj0gdHhuLkdldChrZXkpCgkJaWYgZXJyICE9IG5pbCAmYW1wOyZhbXA7IGVyciAhPSBiYWRnZXIuRXJyS2V5Tm90Rm91bmQgewoJCQlyZXR1cm4gZXJyCgkJfQoJCWlmIGVyciA9PSBuaWwgewoJCQlyZXR1cm4gaXRlbS5WYWx1ZShmdW5jKHZhbCBbXWJ5dGUpIGVycm9yIHsKCQkJCWlmIGJ5dGVzLkVxdWFsKHZhbCwgdmFsdWUpIHsKCQkJCQljb2RlID0gMgoJCQkJfQoJCQkJcmV0dXJuIG5pbAoJCQl9KQoJCX0KCQlyZXR1cm4gbmlsCgl9KQoJaWYgZXJyICE9IG5pbCB7CgkJcGFuaWMoZXJyKQoJfQoKCXJldHVybiBjb2RlCn0KCmZ1bmMgKGFwcCAqS1ZTdG9yZUFwcGxpY2F0aW9uKSBDaGVja1R4KHJlcSBhYmNpdHlwZXMuUmVxdWVzdENoZWNrVHgpIGFiY2l0eXBlcy5SZXNwb25zZUNoZWNrVHggewoJY29kZSA6PSBhcHAuaXNWYWxpZChyZXEuVHgpCglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlQ2hlY2tUeHtDb2RlOiBjb2RlLCBHYXNXYW50ZWQ6IDF9Cn0K"}}),e._v(" "),a("p",[e._v("Don't worry if this does not compile yet.")]),e._v(" "),a("p",[e._v("If the transaction does not have a form of "),a("code",[e._v("{bytes}={bytes}")]),e._v(", we return "),a("code",[e._v("1")]),e._v("\ncode. When the same key=value already exist (same key and value), we return "),a("code",[e._v("2")]),e._v("\ncode. For others, we return a zero code indicating that they are valid.")]),e._v(" "),a("p",[e._v("Note that anything with non-zero code will be considered invalid ("),a("code",[e._v("-1")]),e._v(", "),a("code",[e._v("100")]),e._v(",\netc.) by Tendermint Core.")]),e._v(" "),a("p",[e._v("Valid transactions will eventually be committed given they are not too big and\nhave enough gas. To learn more about gas, check out "),a("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/apps.html#gas",target:"_blank",rel:"noopener noreferrer"}},[e._v('"the\nspecification"'),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("For the underlying key-value store we'll use\n"),a("a",{attrs:{href:"https://github.com/dgraph-io/badger",target:"_blank",rel:"noopener noreferrer"}},[e._v("badger"),a("OutboundLink")],1),e._v(", which is an embeddable,\npersistent and fast key-value (KV) database.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICZxdW90O2dpdGh1Yi5jb20vZGdyYXBoLWlvL2JhZGdlciZxdW90OwoKdHlwZSBLVlN0b3JlQXBwbGljYXRpb24gc3RydWN0IHsKCWRiICAgICAgICAgICAqYmFkZ2VyLkRCCgljdXJyZW50QmF0Y2ggKmJhZGdlci5UeG4KfQoKZnVuYyBOZXdLVlN0b3JlQXBwbGljYXRpb24oZGIgKmJhZGdlci5EQikgKktWU3RvcmVBcHBsaWNhdGlvbiB7CglyZXR1cm4gJmFtcDtLVlN0b3JlQXBwbGljYXRpb257CgkJZGI6IGRiLAoJfQp9Cg=="}}),e._v(" "),a("h3",{attrs:{id:"_1-3-2-beginblock-delivertx-endblock-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-beginblock-delivertx-endblock-commit"}},[e._v("#")]),e._v(" 1.3.2 BeginBlock -> DeliverTx -> EndBlock -> Commit")]),e._v(" "),a("p",[e._v("When Tendermint Core has decided on the block, it's transferred to the\napplication in 3 parts: "),a("code",[e._v("BeginBlock")]),e._v(", one "),a("code",[e._v("DeliverTx")]),e._v(" per transaction and\n"),a("code",[e._v("EndBlock")]),e._v(" in the end. DeliverTx are being transferred asynchronously, but the\nresponses are expected to come in order.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIEJlZ2luQmxvY2socmVxIGFiY2l0eXBlcy5SZXF1ZXN0QmVnaW5CbG9jaykgYWJjaXR5cGVzLlJlc3BvbnNlQmVnaW5CbG9jayB7CglhcHAuY3VycmVudEJhdGNoID0gYXBwLmRiLk5ld1RyYW5zYWN0aW9uKHRydWUpCglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlQmVnaW5CbG9ja3t9Cn0K"}}),e._v(" "),a("p",[e._v("Here we create a batch, which will store block's transactions.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIERlbGl2ZXJUeChyZXEgYWJjaXR5cGVzLlJlcXVlc3REZWxpdmVyVHgpIGFiY2l0eXBlcy5SZXNwb25zZURlbGl2ZXJUeCB7Cgljb2RlIDo9IGFwcC5pc1ZhbGlkKHJlcS5UeCkKCWlmIGNvZGUgIT0gMCB7CgkJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZURlbGl2ZXJUeHtDb2RlOiBjb2RlfQoJfQoKCXBhcnRzIDo9IGJ5dGVzLlNwbGl0KHJlcS5UeCwgW11ieXRlKCZxdW90Oz0mcXVvdDspKQoJa2V5LCB2YWx1ZSA6PSBwYXJ0c1swXSwgcGFydHNbMV0KCgllcnIgOj0gYXBwLmN1cnJlbnRCYXRjaC5TZXQoa2V5LCB2YWx1ZSkKCWlmIGVyciAhPSBuaWwgewoJCXBhbmljKGVycikKCX0KCglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlRGVsaXZlclR4e0NvZGU6IDB9Cn0K"}}),e._v(" "),a("p",[e._v("If the transaction is badly formatted or the same key=value already exist, we\nagain return the non-zero code. Otherwise, we add it to the current batch.")]),e._v(" "),a("p",[e._v("In the current design, a block can include incorrect transactions (those who\npassed CheckTx, but failed DeliverTx or transactions included by the proposer\ndirectly). This is done for performance reasons.")]),e._v(" "),a("p",[e._v("Note we can't commit transactions inside the "),a("code",[e._v("DeliverTx")]),e._v(" because in such case\n"),a("code",[e._v("Query")]),e._v(", which may be called in parallel, will return inconsistent data (i.e.\nit will report that some value already exist even when the actual block was not\nyet committed).")]),e._v(" "),a("p",[a("code",[e._v("Commit")]),e._v(" instructs the application to persist the new state.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIENvbW1pdCgpIGFiY2l0eXBlcy5SZXNwb25zZUNvbW1pdCB7CglhcHAuY3VycmVudEJhdGNoLkNvbW1pdCgpCglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlQ29tbWl0e0RhdGE6IFtdYnl0ZXt9fQp9Cg=="}}),e._v(" "),a("h3",{attrs:{id:"_1-3-3-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-query"}},[e._v("#")]),e._v(" 1.3.3 Query")]),e._v(" "),a("p",[e._v("Now, when the client wants to know whenever a particular key/value exist, it\nwill call Tendermint Core RPC "),a("code",[e._v("/abci_query")]),e._v(" endpoint, which in turn will call\nthe application's "),a("code",[e._v("Query")]),e._v(" method.")]),e._v(" "),a("p",[e._v("Applications are free to provide their own APIs. But by using Tendermint Core\nas a proxy, clients (including "),a("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/light",target:"_blank",rel:"noopener noreferrer"}},[e._v("light client\npackage"),a("OutboundLink")],1),e._v(") can leverage\nthe unified API across different applications. Plus they won't have to call the\notherwise separate Tendermint Core API for additional proofs.")]),e._v(" "),a("p",[e._v("Note we don't include a proof here.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIFF1ZXJ5KHJlcVF1ZXJ5IGFiY2l0eXBlcy5SZXF1ZXN0UXVlcnkpIChyZXNRdWVyeSBhYmNpdHlwZXMuUmVzcG9uc2VRdWVyeSkgewoJcmVzUXVlcnkuS2V5ID0gcmVxUXVlcnkuRGF0YQoJZXJyIDo9IGFwcC5kYi5WaWV3KGZ1bmModHhuICpiYWRnZXIuVHhuKSBlcnJvciB7CgkJaXRlbSwgZXJyIDo9IHR4bi5HZXQocmVxUXVlcnkuRGF0YSkKCQlpZiBlcnIgIT0gbmlsICZhbXA7JmFtcDsgZXJyICE9IGJhZGdlci5FcnJLZXlOb3RGb3VuZCB7CgkJCXJldHVybiBlcnIKCQl9CgkJaWYgZXJyID09IGJhZGdlci5FcnJLZXlOb3RGb3VuZCB7CgkJCXJlc1F1ZXJ5LkxvZyA9ICZxdW90O2RvZXMgbm90IGV4aXN0JnF1b3Q7CgkJfSBlbHNlIHsKCQkJcmV0dXJuIGl0ZW0uVmFsdWUoZnVuYyh2YWwgW11ieXRlKSBlcnJvciB7CgkJCQlyZXNRdWVyeS5Mb2cgPSAmcXVvdDtleGlzdHMmcXVvdDsKCQkJCXJlc1F1ZXJ5LlZhbHVlID0gdmFsCgkJCQlyZXR1cm4gbmlsCgkJCX0pCgkJfQoJCXJldHVybiBuaWwKCX0pCglpZiBlcnIgIT0gbmlsIHsKCQlwYW5pYyhlcnIpCgl9CglyZXR1cm4KfQo="}}),e._v(" "),a("p",[e._v("The complete specification can be found\n"),a("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"_1-4-starting-an-application-and-a-tendermint-core-instances"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-starting-an-application-and-a-tendermint-core-instances"}},[e._v("#")]),e._v(" 1.4 Starting an application and a Tendermint Core instances")]),e._v(" "),a("p",[e._v('Put the following code into the "main.go" file:')]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAoJJnF1b3Q7ZmxhZyZxdW90OwoJJnF1b3Q7Zm10JnF1b3Q7CgkmcXVvdDtvcyZxdW90OwoJJnF1b3Q7b3Mvc2lnbmFsJnF1b3Q7CgkmcXVvdDtzeXNjYWxsJnF1b3Q7CgoJJnF1b3Q7Z2l0aHViLmNvbS9kZ3JhcGgtaW8vYmFkZ2VyJnF1b3Q7CgoJYWJjaXNlcnZlciAmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9hYmNpL3NlcnZlciZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvbGlicy9sb2cmcXVvdDsKKQoKdmFyIHNvY2tldEFkZHIgc3RyaW5nCgpmdW5jIGluaXQoKSB7CglmbGFnLlN0cmluZ1ZhcigmYW1wO3NvY2tldEFkZHIsICZxdW90O3NvY2tldC1hZGRyJnF1b3Q7LCAmcXVvdDt1bml4Oi8vZXhhbXBsZS5zb2NrJnF1b3Q7LCAmcXVvdDtVbml4IGRvbWFpbiBzb2NrZXQgYWRkcmVzcyZxdW90OykKfQoKZnVuYyBtYWluKCkgewoJZGIsIGVyciA6PSBiYWRnZXIuT3BlbihiYWRnZXIuRGVmYXVsdE9wdGlvbnMoJnF1b3Q7L3RtcC9iYWRnZXImcXVvdDspKQoJaWYgZXJyICE9IG5pbCB7CgkJZm10LkZwcmludGYob3MuU3RkZXJyLCAmcXVvdDtmYWlsZWQgdG8gb3BlbiBiYWRnZXIgZGI6ICV2JnF1b3Q7LCBlcnIpCgkJb3MuRXhpdCgxKQoJfQoJZGVmZXIgZGIuQ2xvc2UoKQoJYXBwIDo9IE5ld0tWU3RvcmVBcHBsaWNhdGlvbihkYikKCglmbGFnLlBhcnNlKCkKCglsb2dnZXIgOj0gbG9nLk5ld1RNTG9nZ2VyKGxvZy5OZXdTeW5jV3JpdGVyKG9zLlN0ZG91dCkpCgoJc2VydmVyIDo9IGFiY2lzZXJ2ZXIuTmV3U29ja2V0U2VydmVyKHNvY2tldEFkZHIsIGFwcCkKCXNlcnZlci5TZXRMb2dnZXIobG9nZ2VyKQoJaWYgZXJyIDo9IHNlcnZlci5TdGFydCgpOyBlcnIgIT0gbmlsIHsKCQlmbXQuRnByaW50Zihvcy5TdGRlcnIsICZxdW90O2Vycm9yIHN0YXJ0aW5nIHNvY2tldCBzZXJ2ZXI6ICV2JnF1b3Q7LCBlcnIpCgkJb3MuRXhpdCgxKQoJfQoJZGVmZXIgc2VydmVyLlN0b3AoKQoKCWMgOj0gbWFrZShjaGFuIG9zLlNpZ25hbCwgMSkKCXNpZ25hbC5Ob3RpZnkoYywgb3MuSW50ZXJydXB0LCBzeXNjYWxsLlNJR1RFUk0pCgkmbHQ7LWMKCW9zLkV4aXQoMCkKfQo="}}),e._v(" "),a("p",[e._v("This is a huge blob of code, so let's break it down into pieces.")]),e._v(" "),a("p",[e._v("First, we initialize the Badger database and create an app instance:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZGIsIGVyciA6PSBiYWRnZXIuT3BlbihiYWRnZXIuRGVmYXVsdE9wdGlvbnMoJnF1b3Q7L3RtcC9iYWRnZXImcXVvdDspKQppZiBlcnIgIT0gbmlsIHsKCWZtdC5GcHJpbnRmKG9zLlN0ZGVyciwgJnF1b3Q7ZmFpbGVkIHRvIG9wZW4gYmFkZ2VyIGRiOiAldiZxdW90OywgZXJyKQoJb3MuRXhpdCgxKQp9CmRlZmVyIGRiLkNsb3NlKCkKYXBwIDo9IE5ld0tWU3RvcmVBcHBsaWNhdGlvbihkYikK"}}),e._v(" "),a("p",[e._v("For "),a("strong",[e._v("Windows")]),e._v(" users, restarting this app will make badger throw an error as it requires value log to be truncated. For more information on this, visit "),a("a",{attrs:{href:"https://github.com/dgraph-io/badger/issues/744",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".\nThis can be avoided by setting the truncate option to true, like this:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZGIsIGVyciA6PSBiYWRnZXIuT3BlbihiYWRnZXIuRGVmYXVsdE9wdGlvbnMoJnF1b3Q7L3RtcC9iYWRnZXImcXVvdDspLldpdGhUcnVuY2F0ZSh0cnVlKSkK"}}),e._v(" "),a("p",[e._v("Then we start the ABCI server and add some signal handling to gracefully stop\nit upon receiving SIGTERM or Ctrl-C. Tendermint Core will act as a client,\nwhich connects to our server and send us transactions and other messages.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c2VydmVyIDo9IGFiY2lzZXJ2ZXIuTmV3U29ja2V0U2VydmVyKHNvY2tldEFkZHIsIGFwcCkKc2VydmVyLlNldExvZ2dlcihsb2dnZXIpCmlmIGVyciA6PSBzZXJ2ZXIuU3RhcnQoKTsgZXJyICE9IG5pbCB7CglmbXQuRnByaW50Zihvcy5TdGRlcnIsICZxdW90O2Vycm9yIHN0YXJ0aW5nIHNvY2tldCBzZXJ2ZXI6ICV2JnF1b3Q7LCBlcnIpCglvcy5FeGl0KDEpCn0KZGVmZXIgc2VydmVyLlN0b3AoKQoKYyA6PSBtYWtlKGNoYW4gb3MuU2lnbmFsLCAxKQpzaWduYWwuTm90aWZ5KGMsIG9zLkludGVycnVwdCwgc3lzY2FsbC5TSUdURVJNKQombHQ7LWMKb3MuRXhpdCgwKQo="}}),e._v(" "),a("h2",{attrs:{id:"_1-5-getting-up-and-running"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-getting-up-and-running"}},[e._v("#")]),e._v(" 1.5 Getting Up and Running")]),e._v(" "),a("p",[e._v("We are going to use "),a("a",{attrs:{href:"https://github.com/golang/go/wiki/Modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go modules"),a("OutboundLink")],1),e._v(" for\ndependency management.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXhwb3J0IEdPMTExTU9EVUxFPW9uCmdvIG1vZCBpbml0IGdpdGh1Yi5jb20vbWUvZXhhbXBsZQo="}}),e._v(" "),a("p",[e._v("This should create a "),a("code",[e._v("go.mod")]),e._v(" file. The current tutorial only works with\nthe master branch of Tendermint, so let's make sure we're using the latest version:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z28gZ2V0IGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50QG1hc3Rlcgo="}}),e._v(" "),a("p",[e._v("This will populate the "),a("code",[e._v("go.mod")]),e._v(" with a release number followed by a hash for Tendermint.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bW9kdWxlIGdpdGh1Yi5jb20vbWUvZXhhbXBsZQoKZ28gMS4xNQoKcmVxdWlyZSAoCglnaXRodWIuY29tL2RncmFwaC1pby9iYWRnZXIgdjEuNi4yCglnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludCAmbHQ7dlgmZ3Q7CikK"}}),e._v(" "),a("p",[e._v("Now we can build the binary:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gYnVpbGQK"}}),e._v(" "),a("p",[e._v("To create a default configuration, nodeKey and private validator files, let's\nexecute "),a("code",[e._v("tendermint init")]),e._v(". But before we do that, we will need to install\nTendermint Core. Please refer to "),a("a",{attrs:{href:"https://docs.tendermint.com/master/introduction/install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("the official\nguide"),a("OutboundLink")],1),e._v(". If you're\ninstalling from source, don't forget to checkout the latest release ("),a("code",[e._v("git checkout vX.Y.Z")]),e._v("). Don't forget to check that the application uses the same\nmajor version.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm0gLXJmIC90bXAvZXhhbXBsZQpUTUhPTUU9JnF1b3Q7L3RtcC9leGFtcGxlJnF1b3Q7IHRlbmRlcm1pbnQgaW5pdAoKSVsyMDE5LTA3LTE2fDE4OjIwOjM2LjQ4MF0gR2VuZXJhdGVkIHByaXZhdGUgdmFsaWRhdG9yICAgICAgICAgICAgICAgICAgbW9kdWxlPW1haW4ga2V5RmlsZT0vdG1wL2V4YW1wbGUvY29uZmlnL3ByaXZfdmFsaWRhdG9yX2tleS5qc29uIHN0YXRlRmlsZT0vdG1wL2V4YW1wbGUyL2RhdGEvcHJpdl92YWxpZGF0b3Jfc3RhdGUuanNvbgpJWzIwMTktMDctMTZ8MTg6MjA6MzYuNDgxXSBHZW5lcmF0ZWQgbm9kZSBrZXkgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9bWFpbiBwYXRoPS90bXAvZXhhbXBsZS9jb25maWcvbm9kZV9rZXkuanNvbgpJWzIwMTktMDctMTZ8MTg6MjA6MzYuNDgyXSBHZW5lcmF0ZWQgZ2VuZXNpcyBmaWxlICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9bWFpbiBwYXRoPS90bXAvZXhhbXBsZS9jb25maWcvZ2VuZXNpcy5qc29uCg=="}}),e._v(" "),a("p",[e._v("Feel free to explore the generated files, which can be found at\n"),a("code",[e._v("/tmp/example/config")]),e._v(" directory. Documentation on the config can be found\n"),a("a",{attrs:{href:"https://docs.tendermint.com/master/tendermint-core/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("We are ready to start our application:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm0gZXhhbXBsZS5zb2NrCi4vZXhhbXBsZQoKYmFkZ2VyIDIwMTkvMDcvMTYgMTg6MjU6MTEgSU5GTzogQWxsIDAgdGFibGVzIG9wZW5lZCBpbiAwcwpiYWRnZXIgMjAxOS8wNy8xNiAxODoyNToxMSBJTkZPOiBSZXBsYXlpbmcgZmlsZSBpZDogMCBhdCBvZmZzZXQ6IDAKYmFkZ2VyIDIwMTkvMDcvMTYgMTg6MjU6MTEgSU5GTzogUmVwbGF5IHRvb2s6IDMwMC40cwpJWzIwMTktMDctMTZ8MTg6MjU6MTEuNTIzXSBTdGFydGluZyBBQkNJU2VydmVyICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBsPUFCQ0lTZXJ2Cg=="}}),e._v(" "),a("p",[e._v("Then we need to start Tendermint Core and point it to our application. Staying\nwithin the application directory execute:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"VE1IT01FPSZxdW90Oy90bXAvZXhhbXBsZSZxdW90OyB0ZW5kZXJtaW50IG5vZGUgLS1wcm94eS1hcHA9dW5peDovL2V4YW1wbGUuc29jawoKSVsyMDE5LTA3LTE2fDE4OjI2OjIwLjM2Ml0gVmVyc2lvbiBpbmZvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPW1haW4gc29mdHdhcmU9MC4zMi4xIGJsb2NrPTEwIHAycD03CklbMjAxOS0wNy0xNnwxODoyNjoyMC4zODNdIFN0YXJ0aW5nIE5vZGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1tYWluIGltcGw9Tm9kZQpFWzIwMTktMDctMTZ8MTg6MjY6MjAuMzkyXSBDb3VsZG4ndCBjb25uZWN0IHRvIGFueSBzZWVkcyAgICAgICAgICAgICAgICBtb2R1bGU9cDJwCklbMjAxOS0wNy0xNnwxODoyNjoyMC4zOTRdIFN0YXJ0ZWQgbm9kZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1tYWluIG5vZGVJbmZvPSZxdW90O3tQcm90b2NvbFZlcnNpb246e1AyUDo3IEJsb2NrOjEwIEFwcDowfSBJRF86OGRhYjgwNzcwYWU4ZTI5NWQ0Y2U5MDVkODZhZjc4YzRmZjYzNGI3OSBMaXN0ZW5BZGRyOnRjcDovLzAuMC4wLjA6MjY2NTYgTmV0d29yazp0ZXN0LWNoYWluLW5JTzk2UCBWZXJzaW9uOjAuMzIuMSBDaGFubmVsczo0MDIwMjEyMjIzMzAzODAwIE1vbmlrZXI6YXBwNDguZnVuLWJveC5ydSBPdGhlcjp7VHhJbmRleDpvbiBSUENBZGRyZXNzOnRjcDovLzEyNy4wLjAuMToyNjY1N319JnF1b3Q7CklbMjAxOS0wNy0xNnwxODoyNjoyMS40NDBdIEV4ZWN1dGVkIGJsb2NrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1zdGF0ZSBoZWlnaHQ9MSB2YWxpZFR4cz0wIGludmFsaWRUeHM9MApJWzIwMTktMDctMTZ8MTg6MjY6MjEuNDQ2XSBDb21taXR0ZWQgc3RhdGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9c3RhdGUgaGVpZ2h0PTEgdHhzPTAgYXBwSGFzaD0K"}}),e._v(" "),a("p",[e._v("This should start the full node and connect to our ABCI application.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"SVsyMDE5LTA3LTE2fDE4OjI1OjExLjUyNV0gV2FpdGluZyBmb3IgbmV3IGNvbm5lY3Rpb24uLi4KSVsyMDE5LTA3LTE2fDE4OjI2OjIwLjMyOV0gQWNjZXB0ZWQgYSBuZXcgY29ubmVjdGlvbgpJWzIwMTktMDctMTZ8MTg6MjY6MjAuMzI5XSBXYWl0aW5nIGZvciBuZXcgY29ubmVjdGlvbi4uLgpJWzIwMTktMDctMTZ8MTg6MjY6MjAuMzMwXSBBY2NlcHRlZCBhIG5ldyBjb25uZWN0aW9uCklbMjAxOS0wNy0xNnwxODoyNjoyMC4zMzBdIFdhaXRpbmcgZm9yIG5ldyBjb25uZWN0aW9uLi4uCklbMjAxOS0wNy0xNnwxODoyNjoyMC4zMzBdIEFjY2VwdGVkIGEgbmV3IGNvbm5lY3Rpb24K"}}),e._v(" "),a("p",[e._v("Now open another tab in your terminal and try sending a transaction:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2Jyb2FkY2FzdF90eF9jb21taXQ/dHg9JnF1b3Q7dGVuZGVybWludD1yb2NrcyZxdW90OycKewogICZxdW90O2pzb25ycGMmcXVvdDs6ICZxdW90OzIuMCZxdW90OywKICAmcXVvdDtpZCZxdW90OzogJnF1b3Q7JnF1b3Q7LAogICZxdW90O3Jlc3VsdCZxdW90OzogewogICAgJnF1b3Q7Y2hlY2tfdHgmcXVvdDs6IHsKICAgICAgJnF1b3Q7Z2FzV2FudGVkJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgJnF1b3Q7ZGVsaXZlcl90eCZxdW90Ozoge30sCiAgICAmcXVvdDtoYXNoJnF1b3Q7OiAmcXVvdDtDREQzQzZERkEwQTA4Q0FFREY1NDZGOTkzOEEyRUVDMjMyMjA5QzI0QUEwRTQyMDExOTRFMEFGQjc4QTJDMkJCJnF1b3Q7LAogICAgJnF1b3Q7aGVpZ2h0JnF1b3Q7OiAmcXVvdDszMyZxdW90Owp9Cg=="}}),e._v(" "),a("p",[e._v("Response should contain the height where this transaction was committed.")]),e._v(" "),a("p",[e._v("Now let's check if the given key now exists and its value:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2FiY2lfcXVlcnk/ZGF0YT0mcXVvdDt0ZW5kZXJtaW50JnF1b3Q7Jwp7CiAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICZxdW90O2lkJnF1b3Q7OiAmcXVvdDsmcXVvdDssCiAgJnF1b3Q7cmVzdWx0JnF1b3Q7OiB7CiAgICAmcXVvdDtyZXNwb25zZSZxdW90OzogewogICAgICAmcXVvdDtsb2cmcXVvdDs6ICZxdW90O2V4aXN0cyZxdW90OywKICAgICAgJnF1b3Q7a2V5JnF1b3Q7OiAmcXVvdDtkR1Z1WkdWeWJXbHVkQT09JnF1b3Q7LAogICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7Y205amEzTXkmcXVvdDsKICAgIH0KICB9Cn0K"}}),e._v(" "),a("p",[e._v('"dGVuZGVybWludA==" and "cm9ja3M=" are the base64-encoding of the ASCII of\n"tendermint" and "rocks" accordingly.')]),e._v(" "),a("h2",{attrs:{id:"outro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outro"}},[e._v("#")]),e._v(" Outro")]),e._v(" "),a("p",[e._v("I hope everything went smoothly and your first, but hopefully not the last,\nTendermint Core application is up and running. If not, please "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("open an issue on\nGithub"),a("OutboundLink")],1),e._v(". To dig\ndeeper, read "),a("a",{attrs:{href:"https://docs.tendermint.com/master/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the docs"),a("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);t.default=l.exports}}]);