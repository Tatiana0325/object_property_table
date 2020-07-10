export function orderByProps(obj, [item1, item2]) {
    const copyObj = Object.assign(obj);
    const arraKeys = Object.keys(copyObj);
    const result = [];

    arraKeys.forEach(item => {
        if((item == item1) || (item == item2)) {
            result.push({'key': item, 'value': copyObj[item]});
            delete copyObj[item];
        };
    })

    Object.entries(copyObj).sort((item1, item2) => {
        if(item1 > item2) {
            return 1;
        } else if(item1 < item2) {
            return -1;
            } else {
                return 0;
            }
    }).forEach(item => {
        result.push({'key': item[0], 'value': item[1]});
    });

    return result;
}