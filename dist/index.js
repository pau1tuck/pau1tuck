"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const express_1 = tslib_1.__importDefault(require("express"));
const server = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    app.use(express_1.default.static(path_1.default.resolve(__dirname, "../public")));
    app.listen(8888, () => {
        console.log("🚀 Node server running on port 8888");
    });
});
server().catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map