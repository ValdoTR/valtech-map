/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

let hiddenBallsZone: string = "hiddenBallInterior";
let currentPopup: any;

const hiddenBallsCodes = [
    {
        zone: 'hiddenBallOutdoors',
        code: 'E2TV9H'
    },
    {
        zone: 'hiddenBallInterior',
        code: 'CUNB97'
    },
    {
        zone: 'hiddenBallWorkshops',
        code: '8J9VYC'
    },
    {
        zone: 'hiddenBallSpeakeasy',
        code: 'VDDFD3'
    },
]

WA.onEnterZone('hiddenBallOutdoors', () => {
    hiddenBallsZone = 'hiddenBallOutdoors'
    openPopup(hiddenBallsZone, hiddenBallsZone + 'Popup')
})
WA.onEnterZone('hiddenBallInterior', () => {
    hiddenBallsZone = 'hiddenBallInterior'
    openPopup(hiddenBallsZone, hiddenBallsZone + 'Popup')
})
WA.onEnterZone('hiddenBallWorkshops', () => {
    hiddenBallsZone = 'hiddenBallWorkshops'
    openPopup(hiddenBallsZone, hiddenBallsZone + 'Popup')
})
WA.onEnterZone('hiddenBallSpeakeasy', () => {
    hiddenBallsZone = 'hiddenBallSpeakeasy'
    openPopup(hiddenBallsZone, hiddenBallsZone + 'Popup')
})

WA.onLeaveZone(hiddenBallsZone, closePopup)

function openPopup(zoneName: string, popupName: string) {
    const zone = hiddenBallsCodes.find((item) => {
        return item.zone == zoneName
    });
    currentPopup = WA.openPopup(popupName, `TEST Congratulations! You found a ball of the EURO 2020. Send the code below to the event organizer. Find the 4 hidden balls and you will get a unique reward! > CODE: ${zone?.code} <`, [
        {
            label: "Got it!",
            className: "normal",
            callback: (popup => {
                popup.close()
            })
        }]
    )
}

function closePopup() {
    if (currentPopup !== undefined) {
        currentPopup.close()
        currentPopup = undefined
    }
}
