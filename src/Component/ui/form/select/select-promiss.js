export const CompileSelectData = (data, getFieldName, type) => {

    console.log("data",data);
    return new Promise((resolve, reject) => {
        var td = []
            // if(type==='filter') { td.push({ label: 'all', value: 'all', id: 'all' })}
            data?.map((ele, index) => {
                var label = ele?.[getFieldName]
                var value = ele?.[getFieldName]
                td.push({ label: label, value: value, _id: ele?._id })
            })
            resolve(td)
    });
};
