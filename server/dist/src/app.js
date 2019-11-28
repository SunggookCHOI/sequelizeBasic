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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const friend_1 = __importDefault(require("../models/friend"));
const DB = __importStar(require("../models/index"));
const mysql = DB.init();
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const newPeople = yield friend_1.default.create({
            name: '남세영',
            hobby: '독서'
        });
        console.log('입력 완료');
    });
}
;
/*
async function printAll(){
    await People.findAll({
        attributes : ['name','hobby'],
        raw : true
    }).then(result =>{
        console.log(result)
        return result;
    }).catch(e=>{
        throw(e);
    });
}
*/
function allPeople() {
    return __awaiter(this, void 0, void 0, function* () {
        let temp = yield friend_1.default.findAll({
            attributes: ['name', 'hobby'],
            raw: true
        });
        console.log(temp);
        return temp;
    });
}
test();
console.log(allPeople());
