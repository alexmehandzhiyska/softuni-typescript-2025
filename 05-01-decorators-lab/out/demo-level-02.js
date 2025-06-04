"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function FreezeClass(constructor) {
    // console.log('Freeze applied');
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
function ValidateStringAccessor(target, propertyName, descriptor) {
    const originalSetter = descriptor.set;
    descriptor.set = function (val) {
        if (val.length < 3) {
            throw new Error('Length must be minimum 3 characters');
        }
        originalSetter?.call(this, val);
    };
    return descriptor;
}
function DepricatedMethod(message) {
    return function (target, methodName, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`⚠️ Caution! ${message}`);
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
let User = class User {
    name;
    age;
    _email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    get email() {
        return this._email;
    }
    set email(val) {
        this._email = val;
    }
    getInfo(condensed) {
        return condensed ? `Person ${this.name}` : `Person ${this.name} is ${this.age} years old with email ${this.email}`;
    }
};
__decorate([
    ValidateStringAccessor,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], User.prototype, "email", null);
__decorate([
    DepricatedMethod('Method is depricated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", String)
], User.prototype, "getInfo", null);
User = __decorate([
    FreezeClass,
    __metadata("design:paramtypes", [String, Number, String])
], User);
const user1 = new User('pen4o', 12, 'pen4o@abv.bg');
const user2 = new User('min4o', 34, 'min4o@abv.bg');
// console.log(Object.isFrozen(User));
// console.log(Object.isFrozen(User.prototype));
console.log(user1.getInfo(false));
//# sourceMappingURL=demo-level-02.js.map