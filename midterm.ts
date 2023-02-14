export class User {
    private _username: string;
    private _password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    get username(): string {
        return this._username;
    }

    set username(username: string) {
        if(username.length < 4 ) {
            throw new Error("Length of name too short");
        } else {
            this._username = username;
        }
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        const valid = new Validator();

        if(valid.isValid(password)) {
            this._username = password;
        }
    }
}

export class Validator {
    //methods only here

    // 1. At least one Number
    hasNumber(password: string): boolean {
        const bool = password.split("").some((x) => parseInt(x));
        return bool;
    }

    // 2. At least one of the following symbols: !, @, #, ?
    hasCharacter(password: string): boolean {
        const char = ["!", "@", "#", "?"];
        const bool = password.split("").some((x) => char.includes(x));

        return bool
    }

    // 3. A length equal to 8 characters or more

    isLongEnough(password: string): boolean {
        if(password.length >= 8) {
            return true
        }
        return false
    }

    isValid(password:string): boolean {
        if(!this.isLongEnough(password)) {
            throw new Error("Not long enough.")

        }
        if(!this.hasNumber(password)) {
            throw new Error("No numbers.")

        }
        if(!this.hasCharacter(password)) {
            throw new Error("Lacking !, @, #, or ?.")

        }
        console.log("worked");
        return true
    }

}

