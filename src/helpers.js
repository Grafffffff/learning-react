import { OrderedMap, Map } from 'immutable'

export function arrToMap(array, RecordModel = Map) {
    return array.reduce((acc, item) => {
        return acc.set(item.id, new RecordModel(item))
    }, new OrderedMap({}));
}

export function mapToArr(obj) {
    return obj.valueSeq().toArray()
}