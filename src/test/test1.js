"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var selenium_webdriver_1 = require("selenium-webdriver");
var chrome_1 = require("selenium-webdriver/chrome");
function loginTest() {
    return __awaiter(this, void 0, void 0, function () {
        var chromeOptions, driver, boton, currentUrl, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chromeOptions = new chrome_1.Options();
                    return [4 /*yield*/, new selenium_webdriver_1.Builder()
                            .forBrowser('chrome')
                            .setChromeOptions(chromeOptions)
                            .build()];
                case 1:
                    driver = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 11, , 12]);
                    console.log("\nIntentando ingresar a la página...");
                    return [4 /*yield*/, driver.get('https://pruebas-intensas.github.io/')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 4:
                    _a.sent();
                    // escribir en nombre de usuario y contraseña en las casillas de id exampleInputEmail y exampleInputPassword
                    console.log("Intentando ingresar usuario y contraseña...");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleInputEmail')).sendKeys('user@gmail.com')];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleInputPassword')).sendKeys('123')];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('myBtn')), 500)];
                case 7:
                    boton = _a.sent();
                    return [4 /*yield*/, boton.click()];
                case 8:
                    _a.sent();
                    // check if the element with id "userDropdown" is present
                    console.log("Esperando inicio de sesión..");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('userDropdown')), 5000)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, driver.getCurrentUrl()];
                case 10:
                    currentUrl = _a.sent();
                    return [2 /*return*/, currentUrl === 'https://pruebas-intensas.github.io/home'];
                case 11:
                    error_1 = _a.sent();
                    //console.error('Error:', error);
                    return [2 /*return*/, false];
                case 12: return [2 /*return*/];
            }
        });
    });
}
console.log("Results\n");
// Llamar a la función de ejemplo
console.log("Iniciando Login Test");
loginTest().then(function (result) {
    console.log("Resultado Login Test:", result);
});
