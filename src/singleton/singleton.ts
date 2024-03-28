class Singleton {
    private static instance: Singleton

    public static getInstance(){
        if (!Singleton.instance){
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }
}
