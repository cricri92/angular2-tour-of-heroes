"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { "id": 11, "name": "Alice" },
            { "id": 12, "name": "Ashe" },
            { "id": 13, "name": "Ryze" },
            { "id": 14, "name": "Athor" },
            { "id": 15, "name": "Garen" },
            { "id": 16, "name": "Vi" },
            { "id": 17, "name": "Tristana" },
            { "id": 18, "name": "Flesh" },
            { "id": 19, "name": "Yasuo" },
            { "id": 20, "name": "JorEl" }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map