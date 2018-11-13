/*let randomObj = {
    a: "bla-bla-bla",
    b: [1, 2, 3, 4, 5, 6, "aaaa"],
    3: null,
    4: ["a", "b", undefined, [null, NaN, undefined, 3, 4, 5]],
    z: {
        asdas: 1,
        asdad: 3,
        dnfsldk: "adasjknhdka",
        sdnhfs: "sdkjfskl",
        asjhfosdl: {
            salkdjms: [],
            djsfsd: [["a", "b"], ["c", "d"], {a:{
                b:{
                    c:{
                        d: {
                            e: {
                                f:{
                                    g: {
                                        h:{
                                            b:{
                                                c:{
                                                    d: {
                                                        e: {
                                                            f:{
                                                                g: {
                                                                    h:{
                                                                        "whoIsIt":"Digger)))"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                }}]
        },
        oK: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    studyingLenth: Infinity,
    toString: function () {
        return "Here is no string model of that object"
    }
};*/

/*
    Вот рекурсивная функция!!!
*/

function copy(data) {
    let result;
    if (Array.isArray(data) && data){
        result = [];
        data.forEach((elem, num)=>{
            result[num] = copy(elem);
        });
    } else if (typeof data == "object" && data){
        result = {};
        for (prop in data) {
            result[prop] = copy(data[prop]);
        }
    } else {
        result = data;
    }
    return result;
}

/*
    А вот нашел интересный хак на эту тему)))
*/

function copyHack(data) {
    return JSON.parse(JSON.stringify(data));
}
