module.exports.config = {
    name: "adminbot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "dangkhoa",
    description: "Thรดng tin vแป admin",
    commandCategory: "Admin",
    usages: "adminbot",
    cooldowns: 5,
    dependencies: ["request"],
};

module.exports.run = ({ api, event, args }) => {
    const request = require("request");
    if (!args[0] || typeof parseInt(args[0]) !== "number") return api.sendMessage(`๊ง ๐๐ร๐ ๐๐แปฎ๐๐ ๐๐ฦฏแป๐ ๐แปฌ ๐แปค๐๐ ๐๐๐ ๊ง\nใโThรดng Tin Admin Bot Nร yโๅฝก\n๐๐๐ ๐๐ก ๐ก๐๐ ๐ : Nguyแปn ฤinh Tiแบฟn Dลฉng\n๐ฉ๐๐ฬฃฬ๐ ๐๐๐๐ : Dลฉng Kon, Khoรกi Da ~~\n๐ฎ๐๐ฬฬ๐ ๐๐๐๐ฬฃฬ๐ : Nhร  Mแบทt Phแป Bแป Lร m To Slogen Nhร  Em ฤแบงy Tiแปn\nI Have Something To You\nI Love You\n๐ง๐ถฬ๐ป๐ต ๐ฐ๐ฎฬ๐ฐ๐ต : Vui vแบป nhฦฐng ฤรดi lรบc hฦกi khรณ tรญnh\n๐๐ต๐ถ๐ฒฬฬ๐ ๐ฐ๐ฎ๐ผ : 1m84\n๐บ๐๐๐ ๐ต๐๐ฬ๐ : 01/04/200x\n๐ณ๐๐ฬ๐ ๐ฏ๐ฬฃฬ :0367281079\nSTK-VCB: 1016475889\n๐ฐ๐๐๐๐๐๐๐๐๐ : khรดng dรนng\n๐๐๐๐๐๐๐ : Dลฉng Kon hmm\n๐บ๐ฬฬ ๐ป๐๐ฬ๐๐ : Chฦกi Game\n๐ช๐ฬ๐ ๐ต๐ฬฃฬ๐๐ : 1 แบฉn sแป\n๐๐ ๐๐๐๐๐๐จ๐จ๐ค : 100040705111269 \n๐ก๐ฎ๐บ๐ฒ ๐๐ : Nguyแปn ฤinh Tiแบฟn Dลฉng \n๐๐ข๐ง๐ค ๐๐๐๐๐๐จ๐จ๐ค ๐๐๐ฆ๐ข๐ง : https://www.facebook.com/dungkon2002/\n๐ฝ๐ฬ๐ ๐๐ฬฬ๐ ๐๐ฬฬ๐ ๐๐ฬฃ๐ ๐๐ฬ๐๐ : Vui lรฒng khรดng spam khi sแปญ dแปฅng vร  trรขn thร nh cแบฃm ฦกn bแบกn ฤรฃ sแปญ dแปฅng sแบฃn phแบฉm\n๐๐ชฬ๐ช ๐ฎฬ : ฤแปซng cรณ dแบกi dแปt mร  add 2 bot kแบปo bแป phรกt hiแปn lร  bแบกn toang ฤรณ <3\n๐ช๐ฬ๐๐ ๐๐ฬ๐ : Vui lรฒng khรดng dรนng bot vแปi mแปฅc ฤรญch xแบฅu hay cแป รฝ report acc facebook\nChรบc bแบกn sแปญ dแปฅng vui vแบป <3\n=== Nguyแปn ฤinh Tiแบฟn Dลฉng ===`, event.threadID, event.messageID);
    return request(`https://nhentai.net/api/gallery/${parseInt(args[0])}`, (error, response, body) => {
        var codeData = JSON.parse(body);
        if (codeData.error == true) return api.sendMessage(getText('cantFindHentai'), threadID, messageID);
        const title = codeData.title.pretty;
        var tagList = [],
            artistList = [],
            characterList = [];
        codeData.tags.forEach(item => (item.type == "tag") ? tagList.push(item.name) : (item.type == "artist") ? artistList.push(item.name) : (item.type == "character") ? characterList.push(item.name) : '');
        var tags = tagList.join(', ');
        var artists = artistList.join(', ');
        var characters = characterList.join(', ');
        if (characters == '') characters = 'Original';
        api.sendMessage(`ยป Tรชn: ${title}\nยป Tรกc giแบฃ: ${artists}\nยป Nhรขn vแบญt: ${characters}\nยป Tags: ${tags}\nยป Liรชn kแบฟt: https://nhentai.net/g/${args[0]}`, event.threadID, event.messageID);
    });
}