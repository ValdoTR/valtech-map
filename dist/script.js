(()=>{"use strict";let e,o="hiddenBallInterior";const n=[{zone:"hiddenBallOutdoors",code:"E2TV9H"},{zone:"hiddenBallInterior",code:"CUNB97"},{zone:"hiddenBallWorkshops",code:"8J9VYC"},{zone:"hiddenBallSpeakeasy",code:"VDDFD3"}];function d(o,d){const l=n.find((e=>e.zone==o));e=WA.openPopup(d,`Congratulations! You found a ball of the EURO 2020. Send the code below to the event organizer. Find the 4 hidden balls and you will get a unique reward! > CODE: ${null==l?void 0:l.code} <`,[{label:"Got it!",className:"normal",callback:e=>{e.close()}}])}WA.onEnterZone("hiddenBallOutdoors",(()=>{o="hiddenBallOutdoors",d(o,o+"Popup")})),WA.onEnterZone("hiddenBallInterior",(()=>{o="hiddenBallInterior",d(o,o+"Popup")})),WA.onEnterZone("hiddenBallWorkshops",(()=>{o="hiddenBallWorkshops",d(o,o+"Popup")})),WA.onEnterZone("hiddenBallSpeakeasy",(()=>{o="hiddenBallSpeakeasy",d(o,o+"Popup")})),WA.onLeaveZone(o,(function(){void 0!==e&&(e.close(),e=void 0)}))})();
//# sourceMappingURL=script.js.map