function getChai(kind) {
    if (typeof kind == "string") {
        return `making ${kind.toLocaleUpperCase()} chai`;
    }
    return `number of chai to be process ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai ${msg}`;
}
function orderChai(size) {
    if (size == "small") {
        return `small chai`;
    }
    if (size == "medium" || size == "large") {
        return `extra`;
    }
    if (typeof size == "number") {
        return size + 1;
    }
}
class AlychiChai {
    serve() {
        return `serving kulad chai`;
    }
}
class Cutting {
    serve() {
        return `serving Cutting chai`;
    }
}
function serve(chai) {
    if (chai instanceof AlychiChai) {
        return chai.serve;
    }
    return chai.serve;
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj != null &&
        typeof obj.type == "string" &&
        typeof obj.sugar == "string");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} with ${item.suagr}`;
    }
    return `serving custom chai`;
}
function MakeChai(chai) {
    switch (chai.type) {
        case "elaichi":
            break;
        case "masala":
            break;
        case "ginger":
            break;
        default:
            break;
    }
}
function brew(order) {
    if ("spiceLevel" in MakeChai) {
    }
}
export {};
// function isStringArray(arr: unknown): arr is string[] {
// }
//# sourceMappingURL=typeNarrowing.js.map