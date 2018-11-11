function filterCollection(arr=[], keyWords="", useAllWords=true) {
    let keyWordsCollection = keyWords.split(" ");
    
    keyWordsCollection.correspondsTo = function (str) {
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
    for (let argNum = 3; argNum<arguments.length; ++argNum)
        paths.push(arguments[argNum]);
    
    paths.getValByPath = function (obj) {
        let depth = path.length;
        return deepper(obj);
        function deepper(obj) {
            let current = obj[paths[paths.length-depth]];
            return (depth--)?deepper(current):current;
        }
        
    };

    function searchIn (data) {
        if (Array.isArray(data)){
            
        }
    }

}