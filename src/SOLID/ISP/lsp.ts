// imagin having a file upload service for multiple platforms google amazonS3 and local

interface IFile {
    move(path:string):void
    copy(path:string):void
    rename(newName:string):void
    delete():void
}

interface IFileWithOwner extends IFile {
    changeOwner(newOwner:string):void
}

class AmazonS3 implements IFile{
    move(path: string): void {
        throw new Error("Method not implemented.")
    }
    copy(path: string): void {
        throw new Error("Method not implemented.")
    }
    rename(newName: string): void {
        throw new Error("Method not implemented.")
    }
    delete(): void {
        throw new Error("Method not implemented.")
    }

}

class GoogleCloud implements IFile {
    move(path: string): void {
        throw new Error("Method not implemented.")
    }
    copy(path: string): void {
        throw new Error("Method not implemented.")
    }
    rename(newName: string): void {
        throw new Error("Method not implemented.")
    }
    delete(): void {
        throw new Error("Method not implemented.")
    }

}

class LocalFs implements IFileWithOwner{
    changeOwner(newOwner: string): void {
        throw new Error("Method not implemented.")
    }
    move(path: string): void {
        throw new Error("Method not implemented.")
    }
    copy(path: string): void {
        throw new Error("Method not implemented.")
    }
    rename(newName: string): void {
        throw new Error("Method not implemented.")
    }
    delete(): void {
        throw new Error("Method not implemented.")
    }

    public changePermission(perm:number) {
        console.log("permission changed");
        
    }
}

class FileService {
    public method1(file: IFile) { // we can use loacal files here as well
        file.rename('lmao')
    }   
    public method2(file: IFileWithOwner) { // only local files can be used
        file.changeOwner('mmd')
        // ! file.changePermission() // adding a public method beyond the interface 
    }
}
