$(document).ready(function () {    var x = 0;    var y = 0;    var fieldSize = 500;    var warmSectionSize = fieldSize / 10;    var delayTime = 1000;    var field = $('<canvas id="field" width="500" height="500" style="border:1px solid #000000;"></canvas>');    $('#workField').append(field);    var canvas = document.getElementById("field");    var ctx = canvas.getContext('2d');    /**     *  function for initialization. We setting start positions and object sizes     */    function init() {        if (canvas.getContext) {            ctx.fillStyle = '#0b7018';    // color of fill            ctx.fillRect(x, y, warmSectionSize, warmSectionSize); // create rectangle        }    }    /**     * this function set game tick time     */    function delay() {        return new Promise(resolve => setTimeout(resolve, delayTime));    }    /**     * This is main engine function where all actions starts     *///    async function start() {        for (let i = 0; i < 100; i++) {            if (x === 0 && y === 0) {                ctx.clearRect(0, 0, canvas.width, canvas.height);                ctx.fillRect(i * 10, 0, warmSectionSize, warmSectionSize); // create rectangle                console.log(x);                console.log(y);            } else if (x === (canvas.width - warmSectionSize) && y === 0) {                ctx.clearRect(0, 0, canvas.width, canvas.height);                ctx.fillRect(canvas.width - warmSectionSize, i * 10, warmSectionSize, warmSectionSize);            } else if (x === (canvas.width - warmSectionSize) && y === (canvas.width - warmSectionSize)) {                ctx.clearRect(0, 0, canvas.width, canvas.height);                ctx.fillRect(i * 10, fieldSize - warmSectionSize, warmSectionSize, warmSectionSize);            } else if (x === 0 && y === (canvas.width - warmSectionSize)) {                ctx.clearRect(0, 0, canvas.width, canvas.height);                ctx.fillRect(0, i * 10, warmSectionSize, warmSectionSize);            }            await delay();        }    }    init();    start().catch(err => {        console.error(err);    })});