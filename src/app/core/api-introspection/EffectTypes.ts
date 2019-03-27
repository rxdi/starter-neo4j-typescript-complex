
/* tslint:disable */
function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
export const EffectTypes = strEnum(["status",
"Messages",
"Message",
"CreateMessage",
"subscribeToUserMessagesBasic",
"subscribeToUserMessagesWithFilter"]);
export type EffectTypes = keyof typeof EffectTypes;
