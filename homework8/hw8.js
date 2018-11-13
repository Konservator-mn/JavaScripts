function filterCollection(arr=[], keyWords="", useAllWords=true) {
    let keyWordsCollection = keyWords.split(" ");
    
    keyWordsCollection.correspondsTo =  function (str) {
        return !this.some(
            useAllWords?
            (keyWord)=>{
                return !str.includes(keyWord);
            }:
            (keyWord)=>{
                return str.includes(keyWord);
            }
        );
    };
    let paths = [];
    paths.getValByPath = function (obj) {
        let recievedData = obj;
        this.forEach((stageDirrection)=>{
            recievedData = recievedData?recievedData[stageDirrection]:false;
        });
        return recievedData;
    };
    /*
    **********************************************************
    */


}


let exampleArr = [
    {
        lang: "ru",
        name: "Gorets",
        posts: [
            "bla-bla-bla, 1",
            "bla-bla-bla, 3",
            "bla-bla-bla, 4",
            "bla-bla-bla, 5",
            "bla-bla-bla, 6",
            "bla-bla-bla, 7",
            "bla-bla-bla, 8",
            "bla-bla-bla, 9",
        ],
        regData: {
            name: "Sterog",
            lang: "ua",
            pass: "123456",
            iq: "100"
        }
    },
    {
        lang: "ua",
        name: "ruslan",
        posts: [
            "woof, 1",
            "woof, 3",
            "woof, 4",
            "woof, 5",
            "woof, 6",
            "woof, 7",
            "woof, 8",
            "woof, 9",
        ],
        regData: {
            name: "ira",
            lang: "ua",
            pass: "654321",
            iq: "80"
        }
    },
    {
        lang: "ua",
        name: "igor",
        posts: [
            "say-me-now",
            "say-me-now, 3",
            "say-me-now, 4",
            "say-me-now, 5",
            "say-me-now, 6",
            "say-me-now, 7",
            "say-me-now, 8",
            "say-me-now, 9",
        ],
        regData: {
            name: "igrina",
            lang: "ua",
            pass: "654321",
            iq: "98"
        }
    }
];