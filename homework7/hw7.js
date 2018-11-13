function excludeBy (arr1, arr2, field) {
    return arr1.filter(
        elem_arr1 => undefined==arr2.find(
            elem_arr2 => elem_arr1[field] == elem_arr2[field]
        )
    );
}
