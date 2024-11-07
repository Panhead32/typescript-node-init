class SingleToneClass {
    private static instance: SingleToneClass;
    private constructor() { }
    public static getInstance() {
        console.log({ instance: SingleToneClass.instance });

        if (!SingleToneClass.instance) {
            SingleToneClass.instance = new SingleToneClass();
        }
        return SingleToneClass.instance;
    }
}

const a = SingleToneClass.getInstance();
const b = SingleToneClass.getInstance();

console.log({ a, b }, a === b);