(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{677:function(e,t,n){"use strict";n.r(t);var a=n(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"requirements-for-fork-detection-in-the-ibc-context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements-for-fork-detection-in-the-ibc-context"}},[e._v("#")]),e._v(" Requirements for Fork Detection in the IBC Context")]),e._v(" "),n("h2",{attrs:{id:"what-you-need-to-know-about-ibc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-you-need-to-know-about-ibc"}},[e._v("#")]),e._v(" What you need to know about IBC")]),e._v(" "),n("p",[e._v("In the following, I distilled what I considered relevant from")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-002-client-semantics",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/cosmos/ics/tree/master/spec/ics-002-client-semantics"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"components-and-their-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#components-and-their-interface"}},[e._v("#")]),e._v(" Components and their interface")]),e._v(" "),n("h4",{attrs:{id:"tendermint-blockchains"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-blockchains"}},[e._v("#")]),e._v(" Tendermint Blockchains")]),e._v(" "),n("blockquote",[n("p",[e._v("I assume you know what that is.")])]),e._v(" "),n("h4",{attrs:{id:"an-ibc-tendermint-correspondence"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-ibc-tendermint-correspondence"}},[e._v("#")]),e._v(" An IBC/Tendermint correspondence")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("IBC Term")]),e._v(" "),n("th",[e._v("Tendermint-RS Spec Term")]),e._v(" "),n("th",[e._v("Comment")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("code",[e._v("CommitmentRoot")])]),e._v(" "),n("td",[e._v("AppState")]),e._v(" "),n("td",[e._v("app hash")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("ConsensusState")])]),e._v(" "),n("td",[e._v("Lightblock")]),e._v(" "),n("td",[e._v("not all fields are there. NextValidator is definitly needed")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("ClientState")])]),e._v(" "),n("td",[e._v("latest light block + configuration parameters (e.g., trusting period + "),n("code",[e._v("frozenHeight")])]),e._v(" "),n("td",[e._v("NextValidators missing; what is "),n("code",[e._v("proofSpecs")]),e._v("?")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("frozenHeight")])]),e._v(" "),n("td",[e._v("height of fork")]),e._v(" "),n("td",[e._v("set when a fork is detected")])]),e._v(" "),n("tr",[n("td",[e._v('"would-have-been-fooled"')]),e._v(" "),n("td",[e._v("light node fork detection")]),e._v(" "),n("td",[e._v("light node may submit proof of fork to IBC component to halt it")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("Height")])]),e._v(" "),n("td",[e._v("(no epochs)")]),e._v(" "),n("td",[e._v("(epoch,height) pair in lexicographical order ("),n("code",[e._v("compare")]),e._v(")")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("Header")])]),e._v(" "),n("td",[e._v("~signed header")]),e._v(" "),n("td",[e._v("validatorSet explicit (no hash); nextValidators missing")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("Evidence")])]),e._v(" "),n("td",[e._v("t.b.d.")]),e._v(" "),n("td",[e._v('definition unclear "which the light client would have considered valid". Data structure will need to change')])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("verify")])]),e._v(" "),n("td",[n("code",[e._v("ValidAndVerified")])]),e._v(" "),n("td",[e._v("signature does not match perfectly (ClientState vs. LightBlock) + in "),n("code",[e._v("checkMisbehaviourAndUpdateState")]),e._v(" it is unclear whether it uses traces or goes to h1 and h2 in one step")])])])]),e._v(" "),n("h4",{attrs:{id:"some-ibc-links"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#some-ibc-links"}},[e._v("#")]),e._v(" Some IBC links")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/2651427ab4c6ea9f81d26afa0211757fc76cf747/x/ibc/02-client/client/utils/utils.go#L68",target:"_blank",rel:"noopener noreferrer"}},[e._v("QueryConsensusState"),n("OutboundLink")],1)])]),e._v(" "),n("h4",{attrs:{id:"required-changes-in-ics-007"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#required-changes-in-ics-007"}},[e._v("#")]),e._v(" Required Changes in ICS 007")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("assert(height > 0)")]),e._v(" in definition of "),n("code",[e._v("initialise")]),e._v(" doesn't match\ndefinition of "),n("code",[e._v("Height")]),e._v(" as "),n("em",[e._v("(epoch,height)")]),e._v(" pair.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("initialise")]),e._v(" needs to be updated to new data structures")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("clientState.frozenHeight")]),e._v(" semantics seem not totally consistent in\ndocument. E.g., "),n("code",[e._v("min")]),e._v(" needs to be defined over optional value in\n"),n("code",[e._v("checkMisbehaviourAndUpdateState")]),e._v(". Also, if you are frozen, why do\nyou accept more evidence.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("checkValidityAndUpdateState")])]),e._v(" "),n("ul",[n("li",[n("code",[e._v("verify")]),e._v(': it needs to be clarified that checkValidityAndUpdateState\ndoes not perform "bisection" (as currently hinted in the text) but\nperforms a single step of "skipping verification", called,\n'),n("code",[e._v("ValidAndVerified")])]),e._v(" "),n("li",[n("code",[e._v("assert (header.height > clientState.latestHeight)")]),e._v(": no old\nheaders can be installed. This might be OK, but we need to check\ninterplay with misbehavior")]),e._v(" "),n("li",[e._v("clienstState needs to be updated according to complete data\nstructure")])])]),e._v(" "),n("li",[n("p",[n("code",[e._v("checkMisbehaviourAndUpdateState")]),e._v(": as evidence will contain a trace\n(or two), the assertion that uses verify will need to change.")])]),e._v(" "),n("li",[n("p",[e._v("ICS 002 states w.r.t. "),n("code",[e._v("queryChainConsensusState")]),e._v(' that "Note that\nretrieval of past consensus states by height (as opposed to just the\ncurrent consensus state) is convenient but not required." For\nTendermint fork detection, this seems to be a necessity.')])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Header")]),e._v(" should become a lightblock")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Evidence")]),e._v(" should become "),n("code",[e._v("LightNodeProofOfFork")]),e._v(" [LCV-DATA-POF.1]")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("upgradeClientState")]),e._v(" what is the semantics (in particular what is\n"),n("code",[e._v("height")]),e._v(" doing?).")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("checkMisbehaviourAndUpdateState(cs: ClientState, PoF: LightNodeProofOfFork)")]),e._v(" needs to be adapted")])])]),e._v(" "),n("h4",{attrs:{id:"handler"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#handler"}},[e._v("#")]),e._v(" Handler")]),e._v(" "),n("p",[e._v("A blockchain runs a "),n("strong",[e._v("handler")]),e._v(" that passively collects information about\nother blockchains. It can be thought of a state machine that takes\ninput events.")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("the state includes a lightstore (I guess called "),n("code",[e._v("ConsensusState")]),e._v("\nin IBC)")])]),e._v(" "),n("li",[n("p",[e._v("The following function is used to pass a header to a handler")])])]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBjaGVja1ZhbGlkaXR5QW5kVXBkYXRlU3RhdGUgPSAoSGVhZGVyKSA9Jmd0OyBWb2lkCg=="}}),e._v(" "),n("p",[e._v("For Tendermint, it will perform\n"),n("code",[e._v("ValidandVerified")]),e._v(", that is, it does the trusting period check and the\n+1/3 check (+2/3 for sequential headers).\nIf it verifies a header, it adds it to its lightstore,\nif it does not pass verification it drops it.\nRight now it only accepts a header more recent then the latest\nheader,\nand drops older\nones or ones that could not be verified.")]),e._v(" "),n("blockquote",[n("p",[e._v("The above paragraph captures what I believe what is the current\nlogic of "),n("code",[e._v("checkValidityAndUpdateState")]),e._v(". It may be subject to\nchange. E.g., maintain a lightstore with state (unverified, verified)")])]),e._v(" "),n("ul",[n("li",[e._v('The following function is used to pass  "evidence" (this we\nwill need to make precise eventually) to a handler')])]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBjaGVja01pc2JlaGF2aW91ckFuZFVwZGF0ZVN0YXRlID0gKGJ5dGVzKSA9Jmd0OyBWb2lkCg=="}}),e._v(" "),n("p",[e._v("We have to design this, and the data that the handler can use to\ncheck that there was some misbehavior (fork) in order react on\nit, e.g., flagging a situation and\nstop the protocol.")]),e._v(" "),n("ul",[n("li",[e._v("The following function is used to query the light store ("),n("code",[e._v("ConsensusState")]),e._v(")")])]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBxdWVyeUNoYWluQ29uc2Vuc3VzU3RhdGUgPSAoaGVpZ2h0OiB1aW50NjQpID0mZ3Q7IENvbnNlbnN1c1N0YXRlCg=="}}),e._v(" "),n("h4",{attrs:{id:"relayer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#relayer"}},[e._v("#")]),e._v(" Relayer")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The active components are called "),n("strong",[e._v("relayer")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("a relayer contains light clients to two (or more?) blockchains")])]),e._v(" "),n("li",[n("p",[e._v("the relayer send headers and data to the handler to invoke\n"),n("code",[e._v("checkValidityAndUpdateState")]),e._v(" and\n"),n("code",[e._v("checkMisbehaviourAndUpdateState")]),e._v(". It may also query\n"),n("code",[e._v("queryChainConsensusState")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("multiple relayers may talk to one handler. Some relayers might be\nfaulty. We assume existence of at least single correct relayer.")])])]),e._v(" "),n("h2",{attrs:{id:"informal-problem-statement-fork-detection-in-ibc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#informal-problem-statement-fork-detection-in-ibc"}},[e._v("#")]),e._v(" Informal Problem Statement: Fork detection in IBC")]),e._v(" "),n("h3",{attrs:{id:"relayer-requirement-evidence-for-handler"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#relayer-requirement-evidence-for-handler"}},[e._v("#")]),e._v(" Relayer requirement: Evidence for Handler")]),e._v(" "),n("ul",[n("li",[n("p",[e._v('The relayer should provide the handler with\n"evidence" that there was a fork.')])]),e._v(" "),n("li",[n("p",[e._v("The relayer can read the handler's consensus state. Thus the relayer can\nfeed the handler precisely the information the handler needs to detect a\nfork.\nWhat is this\ninformation needs to be specified.")])]),e._v(" "),n("li",[n("p",[e._v("The information depends on the verification the handler does. It\nmight be necessary to provide a bisection proof (list of\nlightblocks) so that the handler can verify based on its local\nlightstore a header "),n("em",[e._v("h")]),e._v(" that is conflicting with a header "),n("em",[e._v("h'")]),e._v(" in the\nlocal lightstore, that is, "),n("em",[e._v("h != h'")]),e._v(" and "),n("em",[e._v("h.Height = h'.Height")])])])]),e._v(" "),n("h3",{attrs:{id:"relayer-requirement-fork-detection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#relayer-requirement-fork-detection"}},[e._v("#")]),e._v(" Relayer requirement: Fork detection")]),e._v(" "),n("p",[e._v("Let's assume there is a fork at chain A. There are two ways the\nrelayer can figure that out:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("as the relayer contains a light client for A, it also includes a fork\ndetector that can detect a fork.")])]),e._v(" "),n("li",[n("p",[e._v("the relayer may also detect a fork by observing that the\nhandler for chain A (on chain B)\nis on a different branch than the relayer")])])]),e._v(" "),n("ul",[n("li",[n("p",[e._v('in both detection scenarios, the relayer should submit evidence to\nfull nodes of chain A where there is a fork. As we assume a fullnode\nhas a complete list of blocks, it is sufficient to send "Bucky\'s\nevidence" ('),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/5083",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/tendermint/tendermint/issues/5083"),n("OutboundLink")],1),e._v("),\nthat is,")]),e._v(" "),n("ul",[n("li",[e._v("two lightblocks from different branches +")]),e._v(" "),n("li",[e._v("a lightblock (perhaps just a height) from which both blocks\ncan be verified.")])])]),e._v(" "),n("li",[n("p",[e._v("in the scenario 2., the relayer must feed the A-handler (on chain B)\na proof of a fork on A so that chain B can react accordingly")])])]),e._v(" "),n("h3",{attrs:{id:"handler-requirement"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#handler-requirement"}},[e._v("#")]),e._v(" Handler requirement")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("there are potentially many relayers, some correct some faulty")])]),e._v(" "),n("li",[n("p",[e._v("a handler cannot trust the information provided by the relayer,\nbut must verify\n(Доверя́й, но проверя́й)")])]),e._v(" "),n("li",[n("p",[e._v("in case of a fork, we accept that the handler temporarily stores\nheaders (tagged as verified).")])]),e._v(" "),n("li",[n("p",[e._v("eventually, a handler should be informed\n("),n("code",[e._v("checkMisbehaviourAndUpdateState")]),e._v(")\nby some relayer that it has\nverified a header from a fork. Then the handler should do what is\nrequired by IBC in this case (stop?)")])])]),e._v(" "),n("h3",{attrs:{id:"challenges-in-the-handler-requirement"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#challenges-in-the-handler-requirement"}},[e._v("#")]),e._v(" Challenges in the handler requirement")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("handlers and relayers work on different lightstores. In principle\nthe lightstore need not intersect in any heights a priori")])]),e._v(" "),n("li",[n("p",[e._v("if a relayer  sees a header "),n("em",[e._v("h")]),e._v(" it doesn't know at a handler ("),n("code",[e._v("queryChainConsensusState")]),e._v("), the\nrelayer needs to\nverify that header. If it cannot do it locally based on downloaded\nand verified (trusted?) light blocks, it might need to use\n"),n("code",[e._v("VerifyToTarget")]),e._v(" (bisection). To call "),n("code",[e._v("VerifyToTarget")]),e._v(" we might keep\n"),n("em",[e._v("h")]),e._v(' in the lightstore. If verification fails, we need to download the\n"alternative" header of height '),n("em",[e._v("h.Height")]),e._v(" to generate evidence for\nthe handler.")])]),e._v(" "),n("li",[n("p",[e._v("we have to specify what precisely "),n("code",[e._v("queryChainConsensusState")]),e._v("\nreturns. It cannot be the complete lightstore. Is the last header enough?")])]),e._v(" "),n("li",[n("p",[e._v("we would like to assume that every now and then (smaller than the\ntrusting period) a correct relayer checks whether the handler is on a\ndifferent branch than the relayer.\nAnd we would like that this is enough to achieve\nthe Handler requirement.")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("here the correctness argument would be easy if a correct relayer is\nbased on a light client with a "),n("em",[e._v("trusted")]),e._v(" state, that is, a light\nclient who never changes its opinion about trusted. Then if such a\ncorrect relayer checks-in with a handler, it will detect a fork, and\nact in time.")])]),e._v(" "),n("li",[n("p",[e._v("if the light client does not provide this interface, in the case of\na fork, we need some assumption about a correct relayer being on a\ndifferent branch than the handler, and we need such a relayer to\ncheck-in not too late. Also\nwhat happens if the relayer's light client is forced to roll-back\nits lightstore?\nDoes it have to re-check all handlers?")])])])])]),e._v(" "),n("h2",{attrs:{id:"on-the-interconnectedness-of-things"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#on-the-interconnectedness-of-things"}},[e._v("#")]),e._v(" On the interconnectedness of things")]),e._v(" "),n("p",[e._v('In the broader discussion of so-called "fork accountability" there are\nseveral subproblems')]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Fork detection")])]),e._v(" "),n("li",[n("p",[e._v("Evidence creation and submission")])]),e._v(" "),n("li",[n("p",[e._v("Isolating misbehaving nodes (and report them for punishment over abci)")])])]),e._v(" "),n("h3",{attrs:{id:"fork-detection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fork-detection"}},[e._v("#")]),e._v(" Fork detection")]),e._v(" "),n("p",[e._v("The preliminary specification ./detection.md formalizes the notion of\na fork. Roughly, a fork exists if there are two conflicting headers\nfor the same height, where both are supported by bonded full nodes\n(that have been validators in the near past, that is, within the\ntrusting period). We distinguish between "),n("em",[e._v("fork on the chain")]),e._v(" where two\nconflicting blocks are signed by +2/3 of the validators of that\nheight, and a "),n("em",[e._v("light client fork")]),e._v(" where one of the conflicting headers\nis not signed by  +2/3 of the current height, but by +1/3 of the\nvalidators of some smaller height.")]),e._v(" "),n("p",[e._v("In principle everyone can detect a fork")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("./detection talks about the Tendermint light client with a focus on\nlight nodes. A relayer runs such light clients and may detect\nforks in this way")])]),e._v(" "),n("li",[n("p",[e._v("in IBC, a relayer can see that a handler is on a conflicting branch")]),e._v(" "),n("ul",[n("li",[e._v("the relayer should feed the handler the necessary information so\nthat it can halt")]),e._v(" "),n("li",[e._v("the relayer should report the fork to a full node")])])])]),e._v(" "),n("h3",{attrs:{id:"evidence-creation-and-submission"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#evidence-creation-and-submission"}},[e._v("#")]),e._v(" Evidence creation and submission")]),e._v(" "),n("ul",[n("li",[n("p",[e._v('the information sent from the relayer to the handler could be called\nevidence, but this is perhaps a bad idea because the information sent to a\nfull node can also be called evidence. But this evidence might still\nnot be enough as the full node might need to run the "fork\naccountability" protocol to generate evidence in the form of\nconsensus messages. So perhaps we should\nintroduce different terms for:')]),e._v(" "),n("ul",[n("li",[e._v("proof of fork for the handler (basically consisting of lightblocks)")]),e._v(" "),n("li",[e._v("proof of fork for a full node (basically consisting of (fewer) lightblocks)")]),e._v(" "),n("li",[e._v("proof of misbehavior (consensus messages)")])])])]),e._v(" "),n("h3",{attrs:{id:"isolating-misbehaving-nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#isolating-misbehaving-nodes"}},[e._v("#")]),e._v(" Isolating misbehaving nodes")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("this is the job of a full node.")])]),e._v(" "),n("li",[n("p",[e._v('might be subjective in the future: the protocol depends on what the\nfull node believes is the "correct" chain. Right now we postulate\nthat every full node is on the correct chain, that is, there is no\nfork on the chain.')])]),e._v(" "),n("li",[n("p",[e._v("The full node figures out which nodes are")]),e._v(" "),n("ul",[n("li",[e._v("lunatic")]),e._v(" "),n("li",[e._v("double signing")]),e._v(" "),n("li",[e._v("amnesic; "),n("strong",[e._v("using the challenge response protocol")])])])]),e._v(" "),n("li",[n("p",[e._v('We do not punish "phantom" validators')]),e._v(" "),n("ul",[n("li",[e._v("currently we understand a phantom validator as a node that\n"),n("ul",[n("li",[e._v("signs a block for a height in which it is not in the\nvalidator set")]),e._v(" "),n("li",[e._v("the node is not part of the +1/3 of previous validators that\nare used to support the header. Whether we call a validator\nphantom might be subjective and depend on the header we\ncheck against. Their formalization actually seems not so\nclear.")])])]),e._v(" "),n("li",[e._v("they can only do something if there are +1/3 faulty validators\nthat are either lunatic, double signing, or amnesic.")]),e._v(" "),n("li",[e._v('abci requires that we only report bonded validators. So if a\nnode is a "phantom", we would need the check whether the node is\nbonded, which currently is expensive, as it requires checking\nblocks from the last three weeks.')]),e._v(" "),n("li",[e._v('in the future, with state sync, a correct node might be\nconvinced by faulty nodes that it is in the validator set. Then\nit might appear to be "phantom" although it behaves correctly')])])])]),e._v(" "),n("h2",{attrs:{id:"next-steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next steps")]),e._v(" "),n("blockquote",[n("p",[e._v("The following points are subject to my limited knowledge of the\nstate of the work on IBC. Some/most of it might already exist and we\nwill just need to bring everything together.")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v('"proof of fork for a full node" defines a clean interface between\nfork detection and misbehavior isolation. So it should be produced\nby protocols (light client, the relayer). So we should fix that\nfirst.')])]),e._v(" "),n("li",[n("p",[e._v("Given the problems of not having a light client architecture spec,\nfor the relayer we should start with this. E.g.")]),e._v(" "),n("ul",[n("li",[e._v("the relayer runs light clients for two chains")]),e._v(" "),n("li",[e._v("the relayer regularly queries consensus state of a handler")]),e._v(" "),n("li",[e._v("the relayer needs to check the consensus state\n"),n("ul",[n("li",[e._v("this involves local checks")]),e._v(" "),n("li",[e._v("this involves calling the light client")])])]),e._v(" "),n("li",[e._v("the relayer uses the light client to do IBC business (channels,\npackets, connections, etc.)")]),e._v(" "),n("li",[e._v("the relayer submits proof of fork to handlers and full nodes")])])])]),e._v(" "),n("blockquote",[n("p",[e._v("the list is definitely not complete. I think part of this\n(perhaps all)  is\ncovered by what Anca presented recently.")])]),e._v(" "),n("p",[e._v("We will need to define what we expect from these components")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("for the parts where the relayer talks to the handler, we need to fix\nthe interface, and what the handler does")])]),e._v(" "),n("li",[n("p",[e._v("we write specs for these components.")])])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);