interface IConnection {
    query(q:string):boolean
}

class MysqlConnection implements IConnection {
    query(q: string): boolean {
        return true
    }
}

interface IUserProvider {
    findUser(username:string):boolean
}

class MysqlUserProvider implements IUserProvider {
    

    constructor(private _connection: IConnection){
    }
    
    findUser(username: string): boolean {
        return true
    }
}

class Auth {
    constructor (private userProvider:IUserProvider){
    }

    findUser(username:string):boolean {
        return this.userProvider.findUser(username)
    }
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------

interface IDispatcher {
    dispatch(name:string, payload:string):void
}

interface UserCrateParams {
    username: string
    password: string
}

class UserService {
    constructor(private _dispatcher: IDispatcher){

    }

    public register(params: UserCrateParams){
        // ...
        this._dispatcher.dispatch(params.username, "hi")
    }

}

class ExpressDispatcher implements IDispatcher {
    dispatch(name: string, payload: string): void {
        console.log(`payload: ${payload}`);
    }

}

class NextDispatcher implements IDispatcher {
    dispatch(name: string, payload: string): void {
        this.fire(name, payload);
    }

    fire(name: string, payload: string): void {
        console.log(`payload: ${payload}`);
    }

}